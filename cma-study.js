let cmaCourseData = {};
let cmaCourseMap = {};
let levels = [];

const levelList = document.getElementById("cma-level-list");
const groupList = document.getElementById("cma-group-list");
const subjectLabel = document.getElementById("cma-subject-label");
const questionCount = document.getElementById("cma-question-count");
const questionText = document.getElementById("cma-question");
const optionsWrap = document.getElementById("cma-options");
const feedback = document.getElementById("cma-feedback");
const backButton = document.getElementById("cma-back");
const prevButton = document.getElementById("cma-prev");
const finishButton = document.getElementById("cma-finish");
const nextButton = document.getElementById("cma-next");
const scoreText = document.getElementById("cma-score");
const progressText = document.getElementById("cma-progress");
const resultsPanel = document.getElementById("cma-results");
const pathBackButton = document.getElementById("cma-path-back");
const pathPanel = document.querySelector(".cma-path-panel");
const quizCard = document.querySelector(".cma-quiz-card");
const progressFill = document.getElementById("cma-progress-fill");
const progressPercent = document.getElementById("cma-progress-percent");
const timerText = document.getElementById("cma-timer");

const quizDurationSeconds = 25 * 60;
let quizStartedAt = null;
let quizTimerId = null;
let quizElapsedSeconds = 0;

function chunkQuestions(questions, size = 30) {
  const chunks = [];

  for (let i = 0; i < questions.length; i += size) {
    chunks.push(questions.slice(i, i + size));
  }

  return chunks;
}

function buildSubjectSets(subject) {
  const questions = Array.isArray(subject.sets) && subject.sets.length
    ? subject.sets.flatMap((set) => set.questions || [])
    : subject.questions || [];

  if (!questions.length) {
    return { ...subject, questions: [], sets: [] };
  }

  return {
    ...subject,
    questions,
    sets: chunkQuestions(questions).map((setQuestions, index) => ({
      label: `Set ${index + 1}`,
      questions: setQuestions
    }))
  };
}

function splitSubjectsIntoSets(courseMap) {
  Object.values(courseMap).forEach((level) => {
    (level.groups || []).forEach((group) => {
      group.subjects = (group.subjects || []).map(buildSubjectSets);
    });
  });
}

function resetSelection({ keepMain = true } = {}) {
  if (!keepMain) {
    activeMainLabel = "";
    cmaCourseMap = {};
    levels = [];
  }

  activeLevel = "";
  activeGroup = "";
  activeSubjectChoice = "";
  activeSubject = null;
  activeIndex = 0;
  answers = {};
  shuffledQuestionSets = {};
}

function setActiveMainLabel(mainLabel) {
  activeMainLabel = mainLabel;
  cmaCourseMap = cmaCourseData[mainLabel]?.levels || {};
  splitSubjectsIntoSets(cmaCourseMap);
  levels = Object.keys(cmaCourseMap);
  resetSelection();
}

let activeMainLabel = "";
let activeLevel = "";
let activeGroup = "";
let activeSubjectChoice = "";
let activeSubject = null;
let activeIndex = 0;
let answers = {};
let shuffledQuestionSets = {};

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showCourseSelector() {
  pathPanel.hidden = false;
  quizCard.classList.remove("is-open");
  stopQuizTimer();
}

function showQuizView() {
  pathPanel.hidden = true;
  quizCard.classList.add("is-open");
  quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updatePathBackButton() {
  if (!pathBackButton) return;

  const canGoBack = Boolean(activeMainLabel || activeLevel || activeGroup || activeSubjectChoice);
  pathBackButton.hidden = !canGoBack;
}

function goBackInPath() {
  if (activeSubjectChoice) {
    activeSubjectChoice = "";
    activeSubject = null;
  } else if (activeGroup) {
    activeGroup = "";
    activeSubject = null;
  } else if (activeLevel) {
    activeLevel = "";
  } else if (activeMainLabel) {
    resetSelection({ keepMain: false });
  }

  renderLevels();
  renderSelectionPanel();
  showCourseSelector();
}

function getActiveSubjectData() {
  if (!activeSubject) return null;

  const level = cmaCourseMap[activeSubject.level];
  const group = level?.groups.find((item) => item.label === activeSubject.group);
  const subject = group?.subjects.find((item) => item.label === activeSubject.subject);

  if (!subject || !activeSubject.set) {
    return subject || null;
  }

  return subject.sets?.find((item) => item.label === activeSubject.set) || null;
}

function getSubjectQuestions() {
  if (!activeSubject) return [];

  const subjectKey = getSubjectKey(activeSubject);
  if (shuffledQuestionSets[subjectKey]) {
    return shuffledQuestionSets[subjectKey];
  }

  const rawQuestions = getActiveSubjectData()?.questions || [];
  const preparedQuestions = rawQuestions.map((question) => {
    const normalized = normalizeQuestion(question);
    const optionEntries = (normalized.options || []).map((text, index) => ({
      text,
      isCorrect: index === normalized.answer
    }));
    const shuffledOptions = shuffleArray(optionEntries);
    const shuffledAnswerIndex = shuffledOptions.findIndex((entry) => entry.isCorrect);

    return {
      ...normalized,
      options: shuffledOptions.map((entry) => entry.text),
      answer: shuffledAnswerIndex
    };
  });

  shuffledQuestionSets[subjectKey] = shuffleArray(preparedQuestions);
  return shuffledQuestionSets[subjectKey];
}

function getAnswerKey() {
  if (!activeSubject) return "";
  return `${getSubjectKey(activeSubject)}-${activeIndex}`;
}

function getSubjectKey(subject) {
  return [subject.main, subject.level, subject.group, subject.subject, subject.set]
    .filter(Boolean)
    .join("-");
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function getElapsedSeconds() {
  if (!quizStartedAt) return quizElapsedSeconds;
  if (!quizTimerId && quizElapsedSeconds) return quizElapsedSeconds;
  return Math.max(0, Math.floor((Date.now() - quizStartedAt) / 1000));
}

function updateQuizTimer() {
  if (!timerText) return;

  const remaining = Math.max(0, quizDurationSeconds - getElapsedSeconds());
  timerText.textContent = `Timer ${formatTime(remaining)}`;

  if (remaining === 0) {
    stopQuizTimer();
    showResults();
  }
}

function startQuizTimer() {
  stopQuizTimer();
  quizStartedAt = Date.now();
  quizElapsedSeconds = 0;
  updateQuizTimer();
  quizTimerId = window.setInterval(updateQuizTimer, 1000);
}

function stopQuizTimer() {
  if (quizStartedAt) {
    quizElapsedSeconds = Math.max(quizElapsedSeconds, Math.floor((Date.now() - quizStartedAt) / 1000));
  }

  if (quizTimerId) {
    window.clearInterval(quizTimerId);
    quizTimerId = null;
  }
}

function resetProgressMeter() {
  if (progressFill) progressFill.style.width = "0%";
  if (progressPercent) progressPercent.textContent = "0% Completed";
}

function updateProgressMeter(totalQuestions) {
  if (!activeSubject || !totalQuestions) {
    resetProgressMeter();
    return;
  }

  const activeKey = getSubjectKey(activeSubject);
  const answeredCount = Object.keys(answers).filter((key) => key.startsWith(activeKey)).length;
  const percent = Math.round((answeredCount / totalQuestions) * 100);

  if (progressFill) progressFill.style.width = `${percent}%`;
  if (progressPercent) progressPercent.textContent = `${percent}% Completed`;
}

function updateScore() {
  const activeKey = activeSubject ? getSubjectKey(activeSubject) : "";
  const keys = Object.keys(answers).filter((key) => key.startsWith(activeKey));
  const correct = keys.filter((key) => answers[key].isCorrect).length;

  scoreText.textContent = `${correct} / ${keys.length}`;
  progressText.textContent = keys.length ? `${keys.length} question${keys.length === 1 ? "" : "s"} attempted in this subject.` : "Start a quiz to track progress.";
}

function getSubjectResult() {
  const questions = getSubjectQuestions();
  const activeKey = activeSubject ? getSubjectKey(activeSubject) : "";
  const subjectAnswers = Object.keys(answers)
    .filter((key) => key.startsWith(activeKey))
    .map((key) => answers[key]);
  const attempted = subjectAnswers.length;
  const right = subjectAnswers.filter((answer) => answer.isCorrect).length;

  return {
    attempted,
    right,
    wrong: attempted - right,
    total: questions.length,
    timeTaken: formatTime(getElapsedSeconds())
  };
}

function getNextSetSubject() {
  if (!activeSubject) return null;

  const level = cmaCourseMap[activeSubject.level];
  const group = level?.groups.find((item) => item.label === activeSubject.group);
  const subject = group?.subjects.find((item) => item.label === activeSubject.subject);
  const sets = subject?.sets || [];
  const currentSetIndex = sets.findIndex((set) => set.label === activeSubject.set);
  const nextSet = sets[currentSetIndex + 1];

  if (!nextSet || !nextSet.questions?.length) return null;

  return {
    ...activeSubject,
    set: nextSet.label
  };
}

function startSubjectTest(subject) {
  activeSubject = subject;
  activeIndex = 0;
  hideResults();
  startQuizTimer();
  renderSelectionPanel();
  renderQuestion();
  showQuizView();
}

function hideResults() {
  resultsPanel.hidden = true;
  resultsPanel.innerHTML = "";
}

function showResults() {
  const result = getSubjectResult();
  const nextSet = getNextSetSubject();
  stopQuizTimer();

  resultsPanel.hidden = false;
  resultsPanel.innerHTML = `
    <h3>Test Results</h3>
    <div class="cma-result-grid">
      <div>
        <span>Score</span>
        <strong>${result.right} / ${result.total}</strong>
      </div>
      <div>
        <span>Correct</span>
        <strong>${result.right}</strong>
      </div>
      <div>
        <span>Incorrect</span>
        <strong>${result.wrong}</strong>
      </div>
      <div>
        <span>Time Taken</span>
        <strong>${result.timeTaken}</strong>
      </div>
    </div>
    <button type="button" class="cma-next-set-button" id="cma-next-set">
      ${nextSet ? "Try Next Set" : "Try Another Set"}
    </button>
  `;

  document.getElementById("cma-next-set")?.addEventListener("click", () => {
    if (nextSet) {
      startSubjectTest(nextSet);
      return;
    }

    showCourseSelector();
  });
}

function setEmptyQuiz(message, label = "Choose a subject") {
  subjectLabel.textContent = label;
  questionCount.textContent = "Question 0 of 0";
  questionText.textContent = message;
  optionsWrap.innerHTML = "";
  feedback.hidden = true;
  feedback.textContent = "";
  feedback.className = "cma-feedback";
  prevButton.disabled = true;
  nextButton.disabled = true;
  finishButton.disabled = true;
  stopQuizTimer();
  if (timerText) timerText.textContent = "Timer 25:00";
  resetProgressMeter();
  hideResults();
  updateScore();
}

function renderLevels() {
  levelList.innerHTML = "";
  updatePathBackButton();

  if (!activeMainLabel) {
    Object.entries(cmaCourseData).forEach(([mainName, main]) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "cma-level-card";

      const title = document.createElement("span");
      title.textContent = main.label || mainName;

      card.addEventListener("click", () => {
        setActiveMainLabel(mainName);
        renderLevels();
        renderSelectionPanel();
        showCourseSelector();
      });

      card.appendChild(title);
      levelList.appendChild(card);
    });
    return;
  }

  levels.forEach((levelName) => {
    const level = cmaCourseMap[levelName];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "cma-level-card";
    card.classList.toggle("active", levelName === activeLevel);

    const title = document.createElement("span");
    title.textContent = level.label;

    card.addEventListener("click", () => {
      activeLevel = levelName;
      activeGroup = "";
      activeSubjectChoice = "";
      activeSubject = null;
      activeIndex = 0;
      renderLevels();
      renderSelectionPanel();
      showCourseSelector();
    });

    card.appendChild(title);
    levelList.appendChild(card);
  });
}

function renderSelectionPanel() {
  if (!activeMainLabel) {
    groupList.innerHTML = "";
    groupList.className = "cma-group-list";
    return;
  }

  if (!activeLevel) {
    groupList.innerHTML = "";
    groupList.className = "cma-group-list";
    return;
  }

  const level = cmaCourseMap[activeLevel];
  groupList.innerHTML = "";

  if (!level.groups.length) {
    groupList.className = "cma-group-list cma-group-count-1";
    const unavailable = document.createElement("div");
    unavailable.className = "cma-unavailable-card";
    unavailable.textContent = level.unavailableMessage || "Available soon.";
    groupList.appendChild(unavailable);
    return;
  }

  if (!activeGroup) {
    groupList.className = `cma-group-list cma-group-count-${level.groups.length}`;
    level.groups.forEach((group) => {
      const groupCard = document.createElement("button");
      groupCard.type = "button";
      groupCard.className = "cma-group-card";
      groupCard.addEventListener("click", () => {
        activeGroup = group.label;
        activeSubjectChoice = "";
        activeSubject = null;
        activeIndex = 0;
        renderSelectionPanel();
      });

      const title = document.createElement("span");
      title.textContent = group.label;

      groupCard.appendChild(title);
      groupList.appendChild(groupCard);
    });
    return;
  }

  const selectedGroup = level.groups.find((group) => group.label === activeGroup);
  groupList.className = "cma-group-list cma-group-count-1";

  if (!selectedGroup) return;

  const backToGroups = document.createElement("button");
  backToGroups.type = "button";
  backToGroups.className = "cma-group-back";
  backToGroups.textContent = "Back to Groups";
  backToGroups.addEventListener("click", () => {
    if (activeSubjectChoice) {
      activeSubjectChoice = "";
    } else {
      activeGroup = "";
    }
    activeSubject = null;
    renderSelectionPanel();
  });
  groupList.appendChild(backToGroups);

  const groupCard = document.createElement("article");
  groupCard.className = "cma-group-card";

  const title = document.createElement("h3");
  title.textContent = selectedGroup.label;

  const subjects = document.createElement("div");
  subjects.className = "cma-subject-list";

  if (activeSubjectChoice) {
    subjects.classList.add("cma-set-list");
    const selectedSubject = selectedGroup.subjects.find((subject) => subject.label === activeSubjectChoice);

    if (!selectedSubject) {
      activeSubjectChoice = "";
      renderSelectionPanel();
      return;
    }

    title.textContent = activeSubjectChoice;
    backToGroups.textContent = "Back to Subjects";
    groupList.classList.add("cma-set-panel");

    const sets = selectedSubject.sets?.length ? selectedSubject.sets : [{ label: "Set 1", questions: selectedSubject.questions || [] }];

    sets.forEach((set) => {
      const button = document.createElement("button");
      const nextSubject = {
        main: activeMainLabel,
        level: activeLevel,
        group: selectedGroup.label,
        subject: selectedSubject.label,
        set: set.label
      };
      const hasQuestions = set.questions.length > 0;
      const isActive = activeSubject && getSubjectKey(activeSubject) === getSubjectKey(nextSubject);

      button.type = "button";
      button.className = "cma-subject-button";
      button.textContent = set.label;
      button.classList.toggle("active", isActive);
      button.classList.toggle("is-empty", !hasQuestions);
      button.setAttribute("aria-current", isActive ? "true" : "false");
      button.title = hasQuestions ? `${set.questions.length} MCQ${set.questions.length === 1 ? "" : "s"}` : "MCQs not added yet";
      button.addEventListener("click", () => {
        if (!hasQuestions) return;

        startSubjectTest(nextSubject);
      });

      subjects.appendChild(button);
    });

    groupCard.append(title, subjects);
    groupList.appendChild(groupCard);
    return;
  }

  selectedGroup.subjects.forEach((subject) => {
    const button = document.createElement("button");
    const questionCount = subject.questions?.length || 0;
    const hasQuestions = questionCount > 0;
    const isActive = activeSubjectChoice === subject.label;

    button.type = "button";
    button.className = "cma-subject-button";
    button.textContent = subject.label;
    button.classList.toggle("active", isActive);
    button.classList.toggle("is-empty", !hasQuestions);
    button.setAttribute("aria-current", isActive ? "true" : "false");
    button.title = hasQuestions ? `${questionCount} MCQ${questionCount === 1 ? "" : "s"}` : "MCQs not added yet";
    button.addEventListener("click", () => {
      if (!hasQuestions) return;

      activeSubjectChoice = subject.label;
      activeSubject = null;
      activeIndex = 0;
      hideResults();
      renderSelectionPanel();
    });

    subjects.appendChild(button);
  });

  groupCard.append(title, subjects);
  groupList.appendChild(groupCard);
}

function renderFeedback(selectedIndex) {
  const question = getSubjectQuestions()[activeIndex];
  const isCorrect = selectedIndex === question.answer;

  feedback.hidden = false;
  feedback.className = `cma-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Review this one"}</strong>
    <p>${question.explanation || "Explanation will be added soon."}</p>
  `;
}

function selectOption(selectedIndex) {
  const question = getSubjectQuestions()[activeIndex];
  answers[getAnswerKey()] = {
    selectedIndex,
    isCorrect: selectedIndex === question.answer
  };
  renderQuestion();
}

function normalizeAnswerText(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getAnswerIndexFromCode(code) {
  const answerNumber = Number(code);
  return Number.isFinite(answerNumber) ? answerNumber - 1 : undefined;
}

function normalizeQuestion(question) {
  const normalized = { ...question };
  
  // Map Text: handle 'question' or 'QUESTIONS'
  if (!normalized.question && normalized.QUESTIONS) {
    normalized.question = normalized.QUESTIONS;
  }

  // Map Explanation: handle 'explanation', 'Explanation', or 'EXPLANATION'
  if (!normalized.explanation) {
    if (normalized.EXPLANATION) {
      normalized.explanation = normalized.EXPLANATION;
    } else if (normalized.Explanation) {
      normalized.explanation = normalized.Explanation;
    }
  }

  // Map Answer: handle 'answer', 'Answer Code', 'ANSWER CODE' (1-based), or 'answer_code' (1-based)
  if (normalized.answer === undefined) {
    if (normalized["ANSWER CODE"] !== undefined) {
      normalized.answer = getAnswerIndexFromCode(normalized["ANSWER CODE"]);
    } else if (normalized["Answer Code"] !== undefined) {
      normalized.answer = getAnswerIndexFromCode(normalized["Answer Code"]);
    } else if (normalized.answer_code !== undefined) {
      normalized.answer = getAnswerIndexFromCode(normalized.answer_code);
    } else if (normalized.answerCode !== undefined) {
      normalized.answer = getAnswerIndexFromCode(normalized.answerCode);
    }
  }
  
  // Map Options: handle flat keys 'OPTION 1..4' or 'options' object
  if (!normalized.options || !Array.isArray(normalized.options)) {
    if (normalized["OPTION 1"] !== undefined) {
      normalized.options = [
        normalized["OPTION 1"], normalized["OPTION 2"], 
        normalized["OPTION 3"], normalized["OPTION 4"]
      ];
    } else if (typeof normalized.options === 'object' && normalized.options !== null) {
      const opts = normalized.options;
      normalized.options = [opts["1"], opts["2"], opts["3"], opts["4"]];
    }
  }
  
  // Sanitize: Ensure options are strings and filter out missing ones
  if (Array.isArray(normalized.options)) {
    normalized.options = normalized.options
      .filter(opt => opt !== undefined)
      .map(opt => (opt === null) ? "" : String(opt));
  }

  const correctAnswerText = normalized.correctAnswer || normalized["Correct Answer"] || normalized["CORRECT ANSWER"];
  const answerIndexIsValid = Number.isInteger(normalized.answer)
    && normalized.answer >= 0
    && normalized.answer < (normalized.options?.length || 0);

  if (!answerIndexIsValid && Array.isArray(normalized.options) && correctAnswerText) {
    const normalizedCorrectAnswer = normalizeAnswerText(correctAnswerText);
    const matchedIndex = normalized.options.findIndex((option) => normalizeAnswerText(option) === normalizedCorrectAnswer);

    if (matchedIndex >= 0) {
      normalized.answer = matchedIndex;
    }
  }

  return normalized;
}

function renderQuestion() {
  if (!activeSubject) {
    setEmptyQuiz("Select Intermediate or Final, then choose a subject to start practicing.");
    return;
  }

  const subject = getActiveSubjectData();
  const questions = getSubjectQuestions();
  const label = [activeSubject.main, activeSubject.level, activeSubject.group, activeSubject.subject, activeSubject.set]
    .filter(Boolean)
    .join(" / ");

  if (!subject || !questions.length) {
    setEmptyQuiz("MCQs for this subject will be added soon.", label);
    return;
  }

  const question = questions[activeIndex];
  const savedAnswer = answers[getAnswerKey()];

  subjectLabel.textContent = label;
  questionCount.textContent = `Question ${activeIndex + 1} of ${questions.length}`;
  questionText.textContent = question.question;
  optionsWrap.innerHTML = "";
  updateProgressMeter(questions.length);

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cma-option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));

    if (savedAnswer) {
      button.disabled = true;
      if (index === question.answer) {
        button.classList.add("is-correct");
      } else if (index === savedAnswer.selectedIndex) {
        button.classList.add("is-wrong");
      }

      if (index === savedAnswer.selectedIndex) {
        button.classList.add("is-selected");
      }
    }

    optionsWrap.appendChild(button);
  });

  if (savedAnswer) {
    renderFeedback(savedAnswer.selectedIndex);
  } else {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "cma-feedback";
  }

  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = !savedAnswer || activeIndex === questions.length - 1;
  finishButton.disabled = questions.length === 0;
  updateScore();
}

prevButton.addEventListener("click", () => {
  activeIndex = Math.max(0, activeIndex - 1);
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  const questions = getSubjectQuestions();
  activeIndex = Math.min(questions.length - 1, activeIndex + 1);
  renderQuestion();
});

finishButton.addEventListener("click", () => {
  showResults();
});

backButton.addEventListener("click", () => {
  hideResults();
  showCourseSelector();
});

pathBackButton?.addEventListener("click", goBackInPath);

function loadCourseData() {
  cmaCourseData = window.cmaStudyData || {};

  if (!Object.keys(cmaCourseData).length) {
    levelList.innerHTML = "";
    groupList.innerHTML = "";
    setEmptyQuiz("Unable to load CMA study data. Please check cma-study-data.js.");
    return;
  }

  renderLevels();
  renderSelectionPanel();
  showCourseSelector();
}

loadCourseData();

