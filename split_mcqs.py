import re
import json

# Read the JS file
with open("cma-study.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find the cmaCourseMap object
start = content.find("const cmaCourseMap =")
brace_start = content.find("{", start)

depth = 0
end = None
in_string = False
escape = False
quote_char = None

# Extract only the object block
for i in range(brace_start, len(content)):
    ch = content[i]

    if in_string:
        if escape:
            escape = False
        elif ch == "\\":
            escape = True
        elif ch == quote_char:
            in_string = False
    else:
        if ch in ['"', "'"]:
            in_string = True
            quote_char = ch
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                break

obj_text = content[brace_start:end]

# Convert JS object keys into JSON keys
obj_text = re.sub(
    r'(^\s*)([A-Za-z_][A-Za-z0-9_-]*)\s*:',
    r'\1"\2":',
    obj_text,
    flags=re.M
)

# Parse JSON
course_map = json.loads(obj_text)

chunk_size = 30

# Split each subject into sets of 30
for course in course_map.values():
    if "groups" in course:
        for group in course["groups"]:
            new_subjects = []

            for subject in group.get("subjects", []):
                questions = subject.get("questions", [])

                if not questions:
                    new_subjects.append(subject)
                    continue

                for i in range(0, len(questions), chunk_size):
                    new_subjects.append({
                        "label": f"{subject['label']} - Set {(i // chunk_size) + 1}",
                        "questions": questions[i:i + chunk_size]
                    })

            group["subjects"] = new_subjects

# Save result
with open("cma-study-splitted.json", "w", encoding="utf-8") as f:
    json.dump(course_map, f, indent=2, ensure_ascii=False)

print("Done! File created: cma-study-splitted.json")