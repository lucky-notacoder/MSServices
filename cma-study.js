const cmaCourseMap = {
  Foundation: {
    label: "Foundation",
    unavailableMessage: "Available soon.",
    groups: []
  },
  Intermediate: {
    label: "Intermediate",
    groups: [
      {
        label: "Group-1",
        subjects: [
          {
            label: "Business Law and Ethics",
            questions: [{
        "SL NO": 1,
        "QUESTIONS": "Right to Property is a:",
        "OPTION 1": "Fundamental Right",
        "OPTION 2": "Fundamental Duty",
        "OPTION 3": "Constitutional Right",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Constitutional Right'. While it was originally a Fundamental Right under Article 31, the 44th Amendment Act of 1978 moved it to Article 300A, reclassifying it as a Constitutional/Legal right."
    },
    {
        "SL NO": 2,
        "QUESTIONS": "The Constitution of India describes India as:",
        "OPTION 1": "A federation",
        "OPTION 2": "Quasi-federal",
        "OPTION 3": "A Union of states",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'A Union of states'. According to Article 1 of the Constitution, India is defined as a 'Union of States'. This terminology was chosen to indicate that the Indian federation is not the result of an agreement by the states to join, and no state has the right to secede."
    },
    {
        "SL NO": 3,
        "QUESTIONS": "Constitution is the:",
        "OPTION 1": "Law of the land",
        "OPTION 2": "Administrative Law of\nthe land",
        "OPTION 3": "Constitutional Law of\nthe land",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Law of the land'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 4,
        "QUESTIONS": "What is the chief source of legal authority in India?",
        "OPTION 1": "President of India",
        "OPTION 2": "Constitution of India",
        "OPTION 3": "Parliament",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Constitution of India'. In India, the Constitution is the supreme law. All other laws, executive actions, and judicial decisions must conform to the authority and framework set by the Constitution."
    },
    {
        "SL NO": 5,
        "QUESTIONS": "Which of the following is described as the \u2018Soul of the Constitution\u2019?",
        "OPTION 1": "Fundamental Rights",
        "OPTION 2": "Fundamental Duties",
        "OPTION 3": "Directive Principles of\nState Policy",
        "OPTION 4": "Preamble",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Preamble'. The Preamble is considered the 'Soul of the Constitution' because it embodies the fundamental values, goals, and philosophy upon which the entire legal framework of India is built."
    },
    {
        "SL NO": 6,
        "QUESTIONS": "he Preamble to the Indian Constitution is based on",
        "OPTION 1": "Philosophy of India",
        "OPTION 2": "Objectives Resolution\u2019 drafted & moved by\nPandit Nehru",
        "OPTION 3": "Indian Culture",
        "OPTION 4": "Religious Concept",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Objectives Resolution\u2019 drafted & moved by\nPandit Nehru'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 7,
        "QUESTIONS": "The term \u2018We\u2019 in Preamble means",
        "OPTION 1": "Indian Government",
        "OPTION 2": "Supreme Courts",
        "OPTION 3": "Indian Parliament",
        "OPTION 4": "The People of India",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'The People of India'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 8,
        "QUESTIONS": "Indian Constitution ensures \u2018Justice\u2019 in which of the following form",
        "OPTION 1": "Social",
        "OPTION 2": "Economic",
        "OPTION 3": "Political",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. The Preamble lists three dimensions of justice\u2014Social, Economic, and Political\u2014which are secured through various provisions of Fundamental Rights and Directive Principles."
    },
    {
        "SL NO": 9,
        "QUESTIONS": "Preamble has been amended by which Amendment Act?",
        "OPTION 1": "27th Constitutional\nAmendment",
        "OPTION 2": "42nd Constitutional\nAmendment",
        "OPTION 3": "44th Constitutional\nAmendmen",
        "OPTION 4": "40th Constitutional\nAmendmen",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '42nd Constitutional\nAmendment'. The Preamble has been amended only once through the 42nd Amendment Act in 1976, which added three words: 'Socialist', 'Secular', and 'Integrity'."
    },
    {
        "SL NO": 10,
        "QUESTIONS": "In which case, the Supreme Court specifically opined that Preamble is \u2018not\u2019 a part\nof the Constitution?",
        "OPTION 1": "Berubari Union case",
        "OPTION 2": "Kesavanada Bharati case",
        "OPTION 3": "Both (a) & (b)",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Berubari Union case'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 11,
        "QUESTIONS": "In which case, the Supreme Court rejected the earlier opinion and held that\nPreamble  is an integral part of the Constitution?",
        "OPTION 1": "Berubari Union case",
        "OPTION 2": "Kesavanada Bharati case",
        "OPTION 3": "Both (a) & (b)",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Kesavanada Bharati case'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 12,
        "QUESTIONS": "The Preamble states that the Constitution derives its authority from",
        "OPTION 1": "Indian Culture",
        "OPTION 2": "Government of India",
        "OPTION 3": "The People of India",
        "OPTION 4": "Princely states",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'The People of India'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 13,
        "QUESTIONS": "As per Preamble, date of adoption of the Constitution is",
        "OPTION 1": "26th January 1950",
        "OPTION 2": "26th November 1949",
        "OPTION 3": "11th December 1946",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '26th November 1949'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 14,
        "QUESTIONS": "42nd Constitutional Amendment (1976) added which of the terms to the Preamble",
        "OPTION 1": "Socialist",
        "OPTION 2": "Secular",
        "OPTION 3": "Sovereign",
        "OPTION 4": "Both (a) & (b)",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Both (a) & (b)'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 15,
        "QUESTIONS": "Which part of the Indian Constitution expressly declares that India is a Sovereign Socialist Secular Democratic Republic?",
        "OPTION 1": "Fundamental Rights",
        "OPTION 2": "Directive Principles of State Policy",
        "OPTION 3": "Preamble",
        "OPTION 4": "Fundamental Duties",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Preamble'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 16,
        "QUESTIONS": "\u2018Economic Justice\u2019 as one of the objectives of the Indian Constitution has been provided in",
        "OPTION 1": "the Preamble and the Fundamental Rights",
        "OPTION 2": "the Preamble and the Directive Principles of State Policy",
        "OPTION 3": "the Fundamental Rights and the Directive Principles of\nState Policy",
        "OPTION 4": "None of the Above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'the Preamble and the Directive Principles of State Policy'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 17,
        "QUESTIONS": "The correct sequence of the following words in the Preamble is",
        "OPTION 1": "Sovereign, Democratic, Socialist, Secular, Republic",
        "OPTION 2": "Sovereign, Socialist, Secular, Democratic,\nRepublic",
        "OPTION 3": "Sovereign, Socialist, Democratic, Secular,\nRepublic",
        "OPTION 4": "None of these",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Sovereign, Socialist, Secular, Democratic,\nRepublic'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 18,
        "QUESTIONS": "The Constitution of which country was the first to begin with a Preamble?",
        "OPTION 1": "USA",
        "OPTION 2": "India",
        "OPTION 3": "Britain",
        "OPTION 4": "Canada",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'USA'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 19,
        "QUESTIONS": "The ideal of Justice (Social, Economic and Political) in the Preamble draws its\ninspiration from",
        "OPTION 1": "Russian Revolution",
        "OPTION 2": "American Civil War",
        "OPTION 3": "French Revolution",
        "OPTION 4": "Japanese Constitution",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Russian Revolution'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 20,
        "QUESTIONS": "The ideals of liberty, equality and fraternity in the Preamble have been taken from",
        "OPTION 1": "French Revolution",
        "OPTION 2": "Russian Revolution",
        "OPTION 3": "American Civil War",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'French Revolution'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 21,
        "QUESTIONS": "Which of the following is true about Preamble?",
        "OPTION 1": "It is a source of power to legislature and a source of prohibition upon the powers of legislature",
        "OPTION 2": "It is justiciable",
        "OPTION 3": "Its provisions are enforceable in courts of law.",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'None of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 22,
        "QUESTIONS": "The 42nd Constitutional Amendment added which of the following 4words in the\nPreamble?",
        "OPTION 1": "Socialist",
        "OPTION 2": "Secular",
        "OPTION 3": "Integrity",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 23,
        "QUESTIONS": "Which of the following words in not mentioned in the Preamble to the Indian\nConstitution?",
        "OPTION 1": "Sovereign",
        "OPTION 2": "Socialist",
        "OPTION 3": "Democratic",
        "OPTION 4": "Indians",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Indians'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 24,
        "QUESTIONS": "The word \u2018Sovereign\u2019 mentioned in the Preamble implies\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "India is an Independent State.",
        "OPTION 2": "India is neither a dependency nor a dominion of any other\nnation",
        "OPTION 3": "India is free to conduct its own affairs (both internal and external).",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 25,
        "QUESTIONS": "Which of the following statements is/are true?",
        "OPTION 1": "India\u2019s membership of the Commonwealth of Nations does not affect India\u2019s Sovereignty in any manner.",
        "OPTION 2": "India\u2019s membership of United Nations Organization (UNO) does not limit India\u2019s Sovereignty.",
        "OPTION 3": "India can either acquire a foreign territory or cede a part of its territory in favor of\na foreign state",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 26,
        "QUESTIONS": "In which of the following, are the basic aims and objectives of the Indian\nConstitution discussed?",
        "OPTION 1": "Part -1",
        "OPTION 2": "Preamble",
        "OPTION 3": "Part \u2013II",
        "OPTION 4": "Schedule",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Preamble'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 27,
        "QUESTIONS": "What is the meaning of \u2018equality\u2019 in the Indian Constitution?",
        "OPTION 1": "Lack of opportunities",
        "OPTION 2": "Lack of equality",
        "OPTION 3": "Absence of special privileges to any section of the society, and provision of adequate opportunities for all individuals without any\ndiscrimination.",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Absence of special privileges to any section of the society, and provision of adequate opportunities for all individuals without any\ndiscrimination.'. This is based on the Constitutional framework of India, which serves as the supreme law of the land and defines the relationship between the citizens and the state."
    },
    {
        "SL NO": 28,
        "QUESTIONS": "Which of the following terms was not included in a \u201cunion of trinity\u201d by Dr. B. R.\nAmbedkar in his concluding speech in the Constituent Assembly?",
        "OPTION 1": "Liberty",
        "OPTION 2": "Flexibility",
        "OPTION 3": "Equality",
        "OPTION 4": "Fraternity",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Flexibility'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 29,
        "QUESTIONS": "Acceptance to be a valid must :",
        "OPTION 1": "Be absolute",
        "OPTION 2": "Be unqualified",
        "OPTION 3": "Both be absolute &\nunqualified",
        "OPTION 4": "Be conditional",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Both be absolute &\nunqualified'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 30,
        "QUESTIONS": "A proposal can be accepted :",
        "OPTION 1": "By notice of acceptance",
        "OPTION 2": "By performance of condition of proposal",
        "OPTION 3": "By acceptance of consideration for a\nreciprocal promise",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 31,
        "QUESTIONS": "Competency to contract relates to :",
        "OPTION 1": "Age of parties",
        "OPTION 2": "Soundness of mind of the\nparties",
        "OPTION 3": "Both age and\nsoundness of mind",
        "OPTION 4": "Intelligence of the parties",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Both age and\nsoundness of mind'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 32,
        "QUESTIONS": "If only a part of the consideration or object is unlawful, the contract under Section\n24 shall be:",
        "OPTION 1": "Valid",
        "OPTION 2": "Voidable",
        "OPTION 3": "Void",
        "OPTION 4": "Illegal",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Void'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 33,
        "QUESTIONS": "When the consent is caused by undue influence, the contract under Section 19A is:",
        "OPTION 1": "Valid",
        "OPTION 2": "Void",
        "OPTION 3": "Voidable",
        "OPTION 4": "Illegal",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Voidable'. Under Section 19, factories must provide sufficient latrine and urinal accommodation. These must be separate for male and female workers, adequately lighted, ventilated, and maintained in a clean condition."
    },
    {
        "SL NO": 34,
        "QUESTIONS": "State who is competent to contracts  :",
        "OPTION 1": "A minor",
        "OPTION 2": "A person of sound mind",
        "OPTION 3": "A lunatic",
        "OPTION 4": "A purdanasheen women",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'A person of sound mind'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 35,
        "QUESTIONS": "When are the essetial elements of a valid contract  :",
        "OPTION 1": "Offer and acceptance",
        "OPTION 2": "lawful consideration",
        "OPTION 3": "Capacity of parties",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 36,
        "QUESTIONS": "When one person signifies to another his willingness to do or to abstain from doing\nanything it is known as  :",
        "OPTION 1": "Proposal",
        "OPTION 2": "Offer",
        "OPTION 3": "Agreement",
        "OPTION 4": "Contract",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Proposal'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 37,
        "QUESTIONS": "What is the effect of wagaring agreements :",
        "OPTION 1": "Agreement is void",
        "OPTION 2": "No suit shall be filed",
        "OPTION 3": "Void and not illegal",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 38,
        "QUESTIONS": "A contract is :",
        "OPTION 1": "a legal obligation",
        "OPTION 2": "An agreement plus a\nlegal obligation",
        "OPTION 3": "Consensus ad idem",
        "OPTION 4": "An agreement  plus a legal\nobject",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'An agreement plus a\nlegal obligation'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 39,
        "QUESTIONS": "Which of the following result/results in an offer ?",
        "OPTION 1": "A declaration of intention",
        "OPTION 2": "An invitation to offer",
        "OPTION 3": "An advertisement offering reward to anyone who finds the lost dog of the\nadvertiser",
        "OPTION 4": "An offer made in a joke",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'An advertisement offering reward to anyone who finds the lost dog of the\nadvertiser'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 40,
        "QUESTIONS": "A special offer can be accepted by",
        "OPTION 1": "any person",
        "OPTION 2": "any friend of offerer",
        "OPTION 3": "the person to whom it\nis made",
        "OPTION 4": "any friend of offeree",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'the person to whom it\nis made'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 41,
        "QUESTIONS": "An acceptance is not according to the mode prescribed but the offerrer decides to\nkeep quiet .In such case there is",
        "OPTION 1": "a contract",
        "OPTION 2": "no contract",
        "OPTION 3": "a voidable contract",
        "OPTION 4": "an  enforceable contract",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'a contract'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 42,
        "QUESTIONS": "There is a counter offer when",
        "OPTION 1": "a the offeree gives conditions\nfor acceptance or introduces a fresh term in acceptance",
        "OPTION 2": "the offerer makes a fresh offer",
        "OPTION 3": "the offeree makes some query",
        "OPTION 4": "the offeree accepts it",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'a the offeree gives conditions\nfor acceptance or introduces a fresh term in acceptance'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 43,
        "QUESTIONS": "Acceptance may be revoked by the acceptor :",
        "OPTION 1": "at any time",
        "OPTION 2": "before the letter of acceptance reaches the\nofferer",
        "OPTION 3": "after the letter of acceptance reaches the\nofferer",
        "OPTION 4": "before the death of the acceptor",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'before the letter of acceptance reaches the\nofferer'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 44,
        "QUESTIONS": "An advertisement to sell a thing by auction is :",
        "OPTION 1": "an offer",
        "OPTION 2": "An invitation to offer",
        "OPTION 3": "no offer at all",
        "OPTION 4": "a contract",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'An invitation to offer'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 45,
        "QUESTIONS": "A makes an offer to B on 10th by a letter which reaches B on 12th. B posts letter of acceptance on 14th which reaches A on 16th. The communication of accetance\nis complete as against A on :",
        "OPTION 1": "12th",
        "OPTION 2": "14th",
        "OPTION 3": "16th",
        "OPTION 4": "17th",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '14th'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 46,
        "QUESTIONS": "An agreement made without consideration is :",
        "OPTION 1": "Valid",
        "OPTION 2": "illegal",
        "OPTION 3": "voidable",
        "OPTION 4": "void",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'void'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 47,
        "QUESTIONS": "A promises to subscribe to a charity.The promise is a :",
        "OPTION 1": "valid contract",
        "OPTION 2": "voidable contract",
        "OPTION 3": "void contract",
        "OPTION 4": "void agreement",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'void agreement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 48,
        "QUESTIONS": "consideration in a contract :",
        "OPTION 1": "may be past ,present or future",
        "OPTION 2": "may be present or future\nonly",
        "OPTION 3": "must be present only",
        "OPTION 4": "must be future only",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'may be past ,present or future'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 49,
        "QUESTIONS": "A promise to compensate , wholly or in part ,a person who has already voluntary done something for he promisor is",
        "OPTION 1": "enforeceable",
        "OPTION 2": "not enforceable because it is without\nconsideration",
        "OPTION 3": "void",
        "OPTION 4": "voidable",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'enforeceable'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 50,
        "QUESTIONS": "Where consent is caused by fraud or misrepresentation the contract is",
        "OPTION 1": "voidable at the option of the\naggrieved party",
        "OPTION 2": "void",
        "OPTION 3": "enforeceable",
        "OPTION 4": "not affeted in any manner",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'voidable at the option of the\naggrieved party'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 51,
        "QUESTIONS": "Where both the parties to an agreement are under a mistake as a matter of fact\nessential to the agreement , the agreement is",
        "OPTION 1": "void",
        "OPTION 2": "voidable",
        "OPTION 3": "illegal",
        "OPTION 4": "not affeted at all",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'void'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 52,
        "QUESTIONS": "What are the requisites of fraud :",
        "OPTION 1": "A representation or assertion and it must be false",
        "OPTION 2": "The representation or asertion must be of a fact",
        "OPTION 3": "The representation or assertion must have been made with a knowledge of its falsity or without belief inits truth or recklessly",
        "OPTION 4": "any of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'any of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 53,
        "QUESTIONS": "A valuable consideration in the eyes of law may consist of :",
        "OPTION 1": "Right, Interest, Profit or Benefit to one party",
        "OPTION 2": "Forbearance ,detriment,\nloss or responsibility by other person",
        "OPTION 3": "Either of (a) or (b)",
        "OPTION 4": "Both (a) or (b)",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Both (a) or (b)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 54,
        "QUESTIONS": "An agreement with or by a minor is -",
        "OPTION 1": "void",
        "OPTION 2": "voidable at the option of\nthe minor",
        "OPTION 3": "Voidable at the option\nof the other party",
        "OPTION 4": "valid",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'void'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 55,
        "QUESTIONS": "On attainning the age maturity a minor's agreement",
        "OPTION 1": "can be ratified by him",
        "OPTION 2": "cannot be ratified by him",
        "OPTION 3": "becomes void",
        "OPTION 4": "becomes valid",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'cannot be ratified by him'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 56,
        "QUESTIONS": "A minor enters into a contract for the purchase of certain necessaries .In such a\ncase -",
        "OPTION 1": "He can be sued for fraud",
        "OPTION 2": "He cannot be sued for\nfraud",
        "OPTION 3": "He is liable to return\nthe money",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'He is liable to return\nthe money'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 57,
        "QUESTIONS": "contracts made before war with an alien enemy which are against public policy are\n-",
        "OPTION 1": "void ab initio",
        "OPTION 2": "dissolved",
        "OPTION 3": "no affected at all",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'dissolved'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 58,
        "QUESTIONS": "When a person positively asserts that a fact is true when his information does not\nwarrant it to be so, thoughhe believes it to be true,there is",
        "OPTION 1": "misrepresentation",
        "OPTION 2": "fraud",
        "OPTION 3": "undue influence",
        "OPTION 4": "coercion",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'misrepresentation'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 59,
        "QUESTIONS": "A promise made without the intention of performing it amounts to",
        "OPTION 1": "innocent misrepresentation",
        "OPTION 2": "fraud",
        "OPTION 3": "negligent\nmisrepresentation",
        "OPTION 4": "wrongful misrepresentation",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'fraud'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 60,
        "QUESTIONS": "A bailee has",
        "OPTION 1": "a right of particular lien over the goods bailed",
        "OPTION 2": "a right of generation",
        "OPTION 3": "a right of both particulars and general\nlien",
        "OPTION 4": "no lien at all over the goods bailed",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'a right of particular lien over the goods bailed'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 61,
        "QUESTIONS": "The position of a finder of lost goods is that of a",
        "OPTION 1": "bailor",
        "OPTION 2": "bailee",
        "OPTION 3": "surety",
        "OPTION 4": "principal debtor",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'bailee'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 62,
        "QUESTIONS": "A balilee fails to return the goods according to the bailor's direction.He takes\nreasonable care of the goods but still the goods are lost.The loss will fall on",
        "OPTION 1": "the  bailee",
        "OPTION 2": "the bailor",
        "OPTION 3": "on both of them",
        "OPTION 4": "neither of them",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'the  bailee'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 63,
        "QUESTIONS": "A who purchases certain goods from B by a misrepresentation pledges them with\nC. The pledge is",
        "OPTION 1": "valid",
        "OPTION 2": "void",
        "OPTION 3": "voidable",
        "OPTION 4": "invalid",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'valid'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 64,
        "QUESTIONS": "A  contract of indemnity is a",
        "OPTION 1": "a contingent contract",
        "OPTION 2": "wagering contract",
        "OPTION 3": "quasi contract",
        "OPTION 4": "void agreement",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'a contingent contract'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 65,
        "QUESTIONS": "The definition of a contract of indemnity as given in the Indian Contract Act, 1872 includes",
        "OPTION 1": "express promises to indemnity",
        "OPTION 2": "implied promises to indemnity",
        "OPTION 3": "cases where loss arises from  accidents and events not depending on the conduct of the promisor or any other person",
        "OPTION 4": "cases where the loss is caused by the conduct of the promisor himself or by the conduct of any other person",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'express promises to indemnity'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 66,
        "QUESTIONS": "Where there are co - sureties , a release by the creditor of one of them",
        "OPTION 1": "discharges the other co-sureties",
        "OPTION 2": "does not discharges the other co-sureties",
        "OPTION 3": "makes all the co-\nsureties immediatedly liable",
        "OPTION 4": "makes the contract of guarantee void",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'does not discharges the other co-sureties'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 67,
        "QUESTIONS": "A guarantee obtained by a creditor by keeping silence as to material circumstances\nis",
        "OPTION 1": "valid",
        "OPTION 2": "voidable",
        "OPTION 3": "enforeceable",
        "OPTION 4": "invalid",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'valid'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 68,
        "QUESTIONS": "A quasi contract",
        "OPTION 1": "is a contract",
        "OPTION 2": "in an agreement",
        "OPTION 3": "creates only a legal\nobligation",
        "OPTION 4": "is none of these",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'creates only a legal\nobligation'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 69,
        "QUESTIONS": "When an agreement is discovered to be void , any person who has received any\nadvantage under such agreement",
        "OPTION 1": "is bound to restore it",
        "OPTION 2": "is not bound to restore it",
        "OPTION 3": "is not bound to return\nit",
        "OPTION 4": "may retain it",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'is bound to restore it'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 70,
        "QUESTIONS": "A minor has been supplied necessaries on credit --",
        "OPTION 1": "he is not liable",
        "OPTION 2": "he is personally liable",
        "OPTION 3": "his estate is liable",
        "OPTION 4": "He is not personally liable",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'his estate is liable'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 71,
        "QUESTIONS": "A finder of lost goods is a",
        "OPTION 1": "bailor",
        "OPTION 2": "bailee",
        "OPTION 3": "true owner",
        "OPTION 4": "thief",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'bailee'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 72,
        "QUESTIONS": "Quantum meruit means",
        "OPTION 1": "a non-gratuitous",
        "OPTION 2": "an implied promise",
        "OPTION 3": "as much as is earned",
        "OPTION 4": "as much as is paid",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'as much as is earned'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 73,
        "QUESTIONS": "A agreed to sell 100 shares to B at rs 75 per share , delivery to be given on 1st march, B refused to accept delivery on 1st march as price had gone down to rs 60 per share . Subsequently A sold these shares at rs 92 per share",
        "OPTION 1": "A connot recover any damages from B",
        "OPTION 2": "A will have to restore to\nB rs 1700, i.e, the profit he made",
        "OPTION 3": "A can recover damages to be determined by the President of the stock exchange",
        "OPTION 4": "None of them",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'A can recover damages to be determined by the President of the stock exchange'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 74,
        "QUESTIONS": "Anticipatory breach of a contract takes place",
        "OPTION 1": "during the performance of the\ncontract",
        "OPTION 2": "at the time when the\nperformance is due",
        "OPTION 3": "before the performance\nis due",
        "OPTION 4": "at the time when the\ncontract is entered into",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'before the performance\nis due'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 75,
        "QUESTIONS": "Specific performance may be ordered by the court when",
        "OPTION 1": "the contract is voidable",
        "OPTION 2": "damages are an adequate\nremedy",
        "OPTION 3": "damages are not  an\nadequate remedy",
        "OPTION 4": "the contract is uncertain",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'damages are not  an\nadequate remedy'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 76,
        "QUESTIONS": "A undertakes to paint a picture of B.He dies before he paints the picture. The contract",
        "OPTION 1": "is discharged by death",
        "OPTION 2": "becomes voidable  at the option of B",
        "OPTION 3": "becomes voidable at the option of the legal\nrepresentatives of A",
        "OPTION 4": "will have to be perforemed by  the legal representatives\nof A",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'is discharged by death'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 77,
        "QUESTIONS": "A creditor agrees with his debtor and a third to accept that third party as his debtor",
        "OPTION 1": "performance",
        "OPTION 2": "alteration",
        "OPTION 3": "waiver",
        "OPTION 4": "remission",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'waiver'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 78,
        "QUESTIONS": "A lends rs 500 to B .He later tells B that he need not repay the amount , the\ncontract is discharged by",
        "OPTION 1": "breach",
        "OPTION 2": "waiver",
        "OPTION 3": "novation",
        "OPTION 4": "performance",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'waiver'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 79,
        "QUESTIONS": "If a new contract is substituted in place of an existing contract , it is called",
        "OPTION 1": "alteration",
        "OPTION 2": "rescission",
        "OPTION 3": "novation",
        "OPTION 4": "waiver",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'novation'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 80,
        "QUESTIONS": "Which of the following are contingent contracts ?",
        "OPTION 1": "contracts of insurance",
        "OPTION 2": "Contracts of guarantee",
        "OPTION 3": "wagering agreements",
        "OPTION 4": "(a) and (b)",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '(a) and (b)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 81,
        "QUESTIONS": "An agreement to do impossible act is",
        "OPTION 1": "void",
        "OPTION 2": "voidable",
        "OPTION 3": "illegal",
        "OPTION 4": "enforceable under certain\ncircumstances",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'voidable'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 82,
        "QUESTIONS": "A wagering agreement is",
        "OPTION 1": "forbidden by law",
        "OPTION 2": "immoral",
        "OPTION 3": "opposed to public\npolicy",
        "OPTION 4": "None of these",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'forbidden by law'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 83,
        "QUESTIONS": "The collateral transactions to an illegal agreement are",
        "OPTION 1": "void",
        "OPTION 2": "illegal",
        "OPTION 3": "voidable",
        "OPTION 4": "not affected at all",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'void'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 84,
        "QUESTIONS": "A person enters into an agreement whereby he is bound to do something which is\nagainst his public or professional duty . The agreement is",
        "OPTION 1": "void on the ground of public\npolicy",
        "OPTION 2": "valid",
        "OPTION 3": "voidable",
        "OPTION 4": "Illegal",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'voidable'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 85,
        "QUESTIONS": "The Negotiable Instruments Act, 1881 is an Act to define and amend the law\nrelating to:",
        "OPTION 1": "cheques",
        "OPTION 2": "bills of exchange",
        "OPTION 3": "promissory notes,",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 86,
        "QUESTIONS": "\u201cbanker\u201d includes:",
        "OPTION 1": "Any person acting as an employee of any bank and any post office saving bank.",
        "OPTION 2": "Any person acting as a banker and any post office saving bank",
        "OPTION 3": "Any person acting as an agent of any bank and any post office\nsaving bank.",
        "OPTION 4": "Any person acting as a Managing Director of any bank and any post office\nsaving bank",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Any person acting as an employee of any bank and any post office saving bank.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 87,
        "QUESTIONS": "Which is NOT an example of \u201cPromissory Note\u201d:",
        "OPTION 1": "I acknowledge myself to be indebted to B in ` 1,000, to be paid on demand, for value\nreceived.\u201d",
        "OPTION 2": "Mr B, I.O.U ` 1,000.\u201d",
        "OPTION 3": "\u201cI promise to pay B or order ` 500\u201d",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Mr B, I.O.U ` 1,000.\u201d'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 88,
        "QUESTIONS": "In a Promissory Note, how many parties are involved:",
        "OPTION 1": "1",
        "OPTION 2": "2",
        "OPTION 3": "3",
        "OPTION 4": "4",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '2'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 89,
        "QUESTIONS": "Which is NOT correct about the \u201cPromissory Note\u201d",
        "OPTION 1": "It contains a conditional\nundertaking.",
        "OPTION 2": "It contains the amount\nmentioned on it",
        "OPTION 3": "It is an instrument in\nwriting.",
        "OPTION 4": "It is signed by the maker",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'It contains a conditional\nundertaking.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 90,
        "QUESTIONS": "The Negotiable Instruments Act, 1881 extends to:",
        "OPTION 1": "Only to Capital cities of the States.",
        "OPTION 2": "The whole of India.",
        "OPTION 3": "The whole of India except the State of\nJammu and Kashmir.",
        "OPTION 4": "The whole of India except the Union Territories.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'The whole of India.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 91,
        "QUESTIONS": "The Negotiable Instruments Act makes specific mention of three instruments\nnamely cheque, bill of exchange and",
        "OPTION 1": "Promissory note",
        "OPTION 2": "hundi",
        "OPTION 3": "bank draft",
        "OPTION 4": "customary note",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Promissory note'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 92,
        "QUESTIONS": "Which one of the following is not the characteristic of a negotiable instruments ?",
        "OPTION 1": "it must be in writing",
        "OPTION 2": "it must be freely\ntransfereable",
        "OPTION 3": "it must be registered",
        "OPTION 4": "It must contain definite\namount of money",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'it must be in writing'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 93,
        "QUESTIONS": "A bill of exchange is treated as dishonoured due to non-acceptance ,where the\ndrawee",
        "OPTION 1": "does not accept within 48\nhours of presentment",
        "OPTION 2": "is incompetent to\ncontract",
        "OPTION 3": "gives a conditional\nacceptance",
        "OPTION 4": "in all the above cases",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'in all the above cases'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 94,
        "QUESTIONS": "A person becomes a ' holder in due course' of a negotiable instrument if he receives\nit",
        "OPTION 1": "in good faith",
        "OPTION 2": "for value",
        "OPTION 3": "before maturity",
        "OPTION 4": "by satisfying all these",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'by satisfying all these'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 95,
        "QUESTIONS": "A negotiable instrument payble to order can be transferred by",
        "OPTION 1": "simple delivery",
        "OPTION 2": "indorsement",
        "OPTION 3": "indorsement and\ndelivery",
        "OPTION 4": "registered post",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'indorsement and\ndelivery'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 96,
        "QUESTIONS": "In case , back of a negotiable instrument is full of indorsements a slip of paper may be atteched to the instrument for signing indorements. Such a slip is legally known\nas",
        "OPTION 1": "Allonge",
        "OPTION 2": "Escrow",
        "OPTION 3": "Zikri chit",
        "OPTION 4": "peth",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Allonge'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 97,
        "QUESTIONS": "Material alteration of a negotiable instrument, without the consent of the parties\ndischages the parties who have become liable",
        "OPTION 1": "after such alteration",
        "OPTION 2": "prior to such alteration",
        "OPTION 3": "because of alteration",
        "OPTION 4": "without such alteration",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'prior to such alteration'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 98,
        "QUESTIONS": "After receiving an uncrossed cheque ,its holder can make on it",
        "OPTION 1": "General crossing",
        "OPTION 2": "special crosing",
        "OPTION 3": "either (a) or (b)",
        "OPTION 4": "neither (a) nor (b)",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'either (a) or (b)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 99,
        "QUESTIONS": "The payment of a cheque , containing special crossing can be obtained",
        "OPTION 1": "at the counter",
        "OPTION 2": "by depositing in account",
        "OPTION 3": "by the payee only",
        "OPTION 4": "both (a) and \u00a9",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'by depositing in account'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 100,
        "QUESTIONS": "A negotiable instrument made without any consideration at all ,is",
        "OPTION 1": "void between all parties",
        "OPTION 2": "voidable between all\nparties",
        "OPTION 3": "void between\nimmediate parties",
        "OPTION 4": "voidable between\nimmediate parties",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'void between all parties'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 101,
        "QUESTIONS": "Inchoate instrument is",
        "OPTION 1": "An instrument incomplete in\nsome respect",
        "OPTION 2": "An ambiguous\ninstrument",
        "OPTION 3": "A clean bill",
        "OPTION 4": "Drawn conditionally as\ncollateral security",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'An instrument incomplete in\nsome respect'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 102,
        "QUESTIONS": "A failure to present a negotiation instrument should be presented for payment to\nthe party who is",
        "OPTION 1": "primarily liable",
        "OPTION 2": "secondarily liable",
        "OPTION 3": "willing to make\npayment",
        "OPTION 4": "capable of making payment",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'primarily liable'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 103,
        "QUESTIONS": "A negotiation instrument is said to be discharged when the liablility of which of\nthe following parties comes to an end?",
        "OPTION 1": "primarily liable party",
        "OPTION 2": "secondarily liable party",
        "OPTION 3": "subsequently liable\nparty",
        "OPTION 4": "none of the parties",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'primarily liable party'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 104,
        "QUESTIONS": "The undertaking contained in a promissory note, to pay a certain sum of money is--\n-",
        "OPTION 1": "Conditional",
        "OPTION 2": "Unconditional",
        "OPTION 3": "May be conditional or unconditional depending upon the\ncircumstances",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Unconditional'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 105,
        "QUESTIONS": "Which of the following negotiable instrument is not entitled to days of grace ?",
        "OPTION 1": "a bill of exchange payable on specified date",
        "OPTION 2": "a promisory note payable on specified date",
        "OPTION 3": "a promisory note payable 'after sight'",
        "OPTION 4": "a cheque , is always payable on demand",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'a bill of exchange payable on specified date'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 106,
        "QUESTIONS": "After the dishonour of a negotiable  instrument , the holder may get the fact of\ndishonour authenticated by a Notary Pblic .The 'noting ' may be done in case of",
        "OPTION 1": "Promissory note",
        "OPTION 2": "bills of exchange",
        "OPTION 3": "cheque",
        "OPTION 4": "both (a) and (b)",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'both (a) and (b)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 107,
        "QUESTIONS": "A cheque is said to certain a special crossing when two parallel lines are drawn\nacross the face of the cheque and writing between the lines the",
        "OPTION 1": "name of some bank",
        "OPTION 2": "name of some bank and\n'& Co'",
        "OPTION 3": "a/c payee only",
        "OPTION 4": "in (a) and  (b) cases",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'in (a) and  (b) cases'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 108,
        "QUESTIONS": "A Promissory Note must be",
        "OPTION 1": "in writing",
        "OPTION 2": "unconditional",
        "OPTION 3": "signed by the maker",
        "OPTION 4": "all of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'all of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 109,
        "QUESTIONS": "A bill is discharged when its acceptor by negotiation back,becomes its holder",
        "OPTION 1": "at maturity",
        "OPTION 2": "after maturity",
        "OPTION 3": "before maturity",
        "OPTION 4": "either (a) or (b)",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'either (a) or (b)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 110,
        "QUESTIONS": "The presentment for sight is required only in case of a promissory note. Which of\nthe following note must be presented for sight?",
        "OPTION 1": "a note payable at sight",
        "OPTION 2": "a note payable after sight",
        "OPTION 3": "a note payable on\ndemand",
        "OPTION 4": "all of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'a note payable after sight'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 111,
        "QUESTIONS": "A bill of exchange payable to bearer on demand is",
        "OPTION 1": "valid",
        "OPTION 2": "voidable",
        "OPTION 3": "invalid",
        "OPTION 4": "none of these",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'none of these'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 112,
        "QUESTIONS": "The term 'customer' in relation  to abanker , means a person who keeps with a\nbanker",
        "OPTION 1": "current account for six months",
        "OPTION 2": "deposit account for six\nmonths",
        "OPTION 3": "both accounts for six\nmonths",
        "OPTION 4": "either account irrespective\nof duration",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'either account irrespective\nof duration'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 113,
        "QUESTIONS": "The payment of a negotiable instrument becomes due",
        "OPTION 1": "at maturity",
        "OPTION 2": "before maturity",
        "OPTION 3": "after maturity",
        "OPTION 4": "on 3rd day of maturity",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'on 3rd day of maturity'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 114,
        "QUESTIONS": "In case , the rate of interest is not specefied in the instrument , the interest payable\nis calculated at per annum rate of",
        "OPTION 1": "six percent",
        "OPTION 2": "nine percent",
        "OPTION 3": "twelve percent",
        "OPTION 4": "eighteen percent",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'eighteen percent'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 115,
        "QUESTIONS": "An act of a firm means:",
        "OPTION 1": "Any partner or agent of the firm which gives rise to a right enforceable by or against the\nfirm",
        "OPTION 2": "Any act by all the partners",
        "OPTION 3": "Any omission by all the partners",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 116,
        "QUESTIONS": "Partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all. Does it mean that losses are not shared?",
        "OPTION 1": "A minor may be admitted in partnership, only for the profits, but he cannot share in losses.",
        "OPTION 2": "It also depends on the partnership agreement. A person may share the profits but may not share\nin losses.",
        "OPTION 3": "Sharing of profits also include losses (negative profits)",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 117,
        "QUESTIONS": "Where no provision is made by contract between the partners for the duration of their partnership, or for the determination of their partnership, the partnership is\ncalled as:",
        "OPTION 1": "Particular partnership",
        "OPTION 2": "Partnership for a fixed term",
        "OPTION 3": "partnership at will",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'partnership at will'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 118,
        "QUESTIONS": "What information shall be given to the Registrar of Firms by a registered partnership firm:",
        "OPTION 1": "New opening/closing of the existing branch, if any.",
        "OPTION 2": "Change in the name of and address of the partner (s)/change in the constitution of the firm",
        "OPTION 3": "What there is change in the name of the firm or in location of the principal place of\nbusiness",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 119,
        "QUESTIONS": "Who can inspect the Register and filed documents at the office of the Registrar:",
        "OPTION 1": "Any Government servant",
        "OPTION 2": "The Partners of the firm",
        "OPTION 3": "The partners of the\nother firms",
        "OPTION 4": "Any person",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Any person'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 120,
        "QUESTIONS": "What are the right of partners after dissolution:",
        "OPTION 1": "To have the surplus distributed among the partners or their representatives according to their\nrights",
        "OPTION 2": "To have business wound up after dissolution",
        "OPTION 3": "To have the property of the firm applied in payment of the debts and liabilities of the firm",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 121,
        "QUESTIONS": "Where any member of a firm has died or otherwise ceased to be a partner, and the surviving or continuing partners carry on the business of the firm with the property of the firm without any final settlement of accounts as between them and the outgoing partner or his estate, then, in the absence of a contract to the contrary, the outgoing partner or his estate is entitled at the option of himself or his representatives to such share of the profits made since he ceased to be a partner as may be attributable to the use of his share of the property of the firm or to interest at the rate of on the amount of his share in the property of the firm:",
        "OPTION 1": "9% p.a.",
        "OPTION 2": "18% p.a",
        "OPTION 3": "6% p.a.",
        "OPTION 4": "12% p.a.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '6% p.a.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 122,
        "QUESTIONS": "The dissolution of partnership means:",
        "OPTION 1": "It means the dissolution of partnership between all the\npartners of a firm",
        "OPTION 2": "It means the change in the relations of the\npartners",
        "OPTION 3": "It means the reconstitution of the\nfirm.",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'It means the change in the relations of the\npartners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 123,
        "QUESTIONS": "In what circumstances a partner may retire:",
        "OPTION 1": "In accordance with an express agreement by the partners",
        "OPTION 2": "Where the partnership is at will, by giving notice in writing to all the other partners of his\nintention to retire.",
        "OPTION 3": "With the consent of all the other partners",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 124,
        "QUESTIONS": "What would be the position, where a minor elect not to become a partner:",
        "OPTION 1": "He shall be entitled to sue the partners for his share of the property and profits",
        "OPTION 2": "His rights and liabilities shall continue to be those of a minor under this section up to the date on which he gives public\nnotice.",
        "OPTION 3": "His share shall not be liable for any acts of the firm done after the date of the notice.",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 125,
        "QUESTIONS": "The maximum number of partners in a firm carrying on banking business cannot\nexeeds",
        "OPTION 1": "5",
        "OPTION 2": "10",
        "OPTION 3": "15",
        "OPTION 4": "20",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '10'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 126,
        "QUESTIONS": "There is no provision in the partnership deed regarding the duration of pasrtnership\n.This is",
        "OPTION 1": "partnership at will",
        "OPTION 2": "partnership for an\nindefinite period",
        "OPTION 3": "patnership by ostoppel",
        "OPTION 4": "partnership not recognised\nby lwa",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'partnership at will'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 127,
        "QUESTIONS": "registration of a firmunder the parnership act , 1932",
        "OPTION 1": "compulsory",
        "OPTION 2": "not optional",
        "OPTION 3": "not necessary",
        "OPTION 4": "inevitable",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'not necessary'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 128,
        "QUESTIONS": "A nominal partner is",
        "OPTION 1": "liable for the debts of the firm",
        "OPTION 2": "not liable for the debts of\nthe firm",
        "OPTION 3": "liable for a nominal\nsum",
        "OPTION 4": "one whose liability is\nprimary",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'liable for the debts of the firm'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 129,
        "QUESTIONS": "If a minor chooses to become a partner on attaining the age of majority, he will be liable for the debts of the firm",
        "OPTION 1": "from the date of his attaining majority",
        "OPTION 2": "from the date of his admission to the benefits of the partnership",
        "OPTION 3": "from the date of his election to become a partner of the firm",
        "OPTION 4": "from the date of his attaining majority or election which is earlier",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'from the date of his admission to the benefits of the partnership'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 130,
        "QUESTIONS": "Public notice is not given on the death of a partner but the firm continues the business .for the acts of the firm done after his death",
        "OPTION 1": "the estate of the deceased parten is liable",
        "OPTION 2": "the estate of the deceased partner is not liable",
        "OPTION 3": "his legal\nrepresentatives are personally liable",
        "OPTION 4": "None of these",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'the estate of the deceased partner is not liable'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 131,
        "QUESTIONS": "The position of a minor partner is dealt with in the Indian Partnership Act ,1932 in",
        "OPTION 1": "Sec. 25",
        "OPTION 2": "Sec. 29.",
        "OPTION 3": "Sec. 30",
        "OPTION 4": "Sec. 35",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Sec. 30'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 132,
        "QUESTIONS": "Where a partner is entitled to interest on capital subscribed by him such interest\nwill be payable",
        "OPTION 1": "only out of profit",
        "OPTION 2": "only  out of capital",
        "OPTION 3": "out of profits or out of\ncapital",
        "OPTION 4": "None of these",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'only  out of capital'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 133,
        "QUESTIONS": "A change in the nature of the busines of a can be made if",
        "OPTION 1": "the majority of the partners\nagree",
        "OPTION 2": "the senior partners agree",
        "OPTION 3": "all the partners agree",
        "OPTION 4": "the working partners agree",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'all the partners agree'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 134,
        "QUESTIONS": "in the absence of any agreement , interest on advances by a partner is",
        "OPTION 1": "allowed at 15%",
        "OPTION 2": "allowed at 6%",
        "OPTION 3": "allowed at market rate\nof interest",
        "OPTION 4": "not allowed at all",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'allowed at 6%'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 135,
        "QUESTIONS": "An act of a firm means:",
        "OPTION 1": "Any partner or agent of the firm which gives rise to a right enforceable by or against the\nfirm",
        "OPTION 2": "Any act by all the partners",
        "OPTION 3": "Any omission by all the partners",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 136,
        "QUESTIONS": "Partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all. Does it mean that losses are not shared:",
        "OPTION 1": "A minor may be admitted in partnership, only for the profits, but he cannot share in losses.",
        "OPTION 2": "It also depends on the partnership agreement. A person may share the profits but may not share\nin losses.",
        "OPTION 3": "Sharing of profits also include losses (negative profits)",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 137,
        "QUESTIONS": "Who can inspect the Register and filed documents at the office of the Registrar:",
        "OPTION 1": "Any Government servant",
        "OPTION 2": "The Partners of the firm",
        "OPTION 3": "The partners of the\nother firms",
        "OPTION 4": "Any person",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Any person'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 138,
        "QUESTIONS": "What are the right of partners after dissolution:",
        "OPTION 1": "To have the surplus distributed among the partners or their representatives according to their rights.",
        "OPTION 2": "To have business wound up after dissolution",
        "OPTION 3": "To have the property of the firm applied in payment of the debts and liabilities of the\nfirm.",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 139,
        "QUESTIONS": "Where any member of a firm has died or otherwise ceased to be a partner, and the surviving or continuing partners carry on the business of the firm with the property of the firm without any final settlement of accounts as between them and the outgoing partner or his estate, then, in the absence of a contract to the contrary, the outgoing partner or his estate is entitled at the option of himself or his representatives to such share of the profits made since he ceased to be a partner as may be attributable to the use of his share of the property of the firm or to interest at the rate of on the amount of his share in the property of the firm:",
        "OPTION 1": "nine per cent, per annum",
        "OPTION 2": "eighteen per cent, per annum",
        "OPTION 3": "six per cent per annum",
        "OPTION 4": "twelve per cent, per annum",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'six per cent per annum'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 140,
        "QUESTIONS": "The dissolution of partnership means:",
        "OPTION 1": "It means the dissolution of partnership between all the\npartners of a firm",
        "OPTION 2": "It means the change in the relations of the\npartners",
        "OPTION 3": "It means the reconstitution of the\nfirm.",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'It means the change in the relations of the\npartners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 141,
        "QUESTIONS": "In what circumstances a partner may retire:",
        "OPTION 1": "In accordance with an express agreement by the partners",
        "OPTION 2": "Where the partnership is at will, by giving notice in writing to all the other partners of his intention\nto retire.",
        "OPTION 3": "With the consent of all the other partners",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 142,
        "QUESTIONS": "What would be the position, where a minor elects not to become a partner:",
        "OPTION 1": "He shall be entitled to sue the partners for his share of the property and profits.",
        "OPTION 2": "His rights and liabilities shall continue to be those of a minor under this section up to the date on which he gives public\nnotice.",
        "OPTION 3": "His share shall not be liable for any acts of the firm done after the date of the notice.",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 143,
        "QUESTIONS": "After a partner\u2019s death the business is continued in the old firm name. Whether the legal heirs of the deceased partner are liable for any acts of the firm:",
        "OPTION 1": "The continued use of the name or of the deceased partner\u2019s name as a part thereof shall not of itself make his legal representative or his estate liable for any act of the firm done after his death.",
        "OPTION 2": "If the estate of the deceased person\u2019s\nproperty is insufficient to make good, the personal assets of the legal heirs will be liable for any of the acts done by the firm.",
        "OPTION 3": "The estate of the deceased person is liable for any of the act done by the firm.",
        "OPTION 4": "The legal heirs of the deceased partners shall be liable for any of the act done by the firm after the demise of the partner",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'The continued use of the name or of the deceased partner\u2019s name as a part thereof shall not of itself make his legal representative or his estate liable for any act of the firm done after his death.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 144,
        "QUESTIONS": "The partners in a firm may, by contract between the partners:",
        "OPTION 1": "restrict the implied authority of\nany partner",
        "OPTION 2": "extend the implied\nauthority of any partner",
        "OPTION 3": "None of the above",
        "OPTION 4": "Both A and B are correct",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Both A and B are correct'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 145,
        "QUESTIONS": "Whether a notice given to a partner, who habitually acts in the business of the firm of any matter relating to the affairs of the firm, will be deemed as notice to the firm:",
        "OPTION 1": "It will deemed as personal information to that partner",
        "OPTION 2": "Yes, it operates as notice to the firm, except in the case of a fraud on the firm committed by or with the consent of that partner",
        "OPTION 3": "It depends on the nature of the concerned partner whether he inform so to other partners",
        "OPTION 4": "No, it will not deemed as notice to the firm.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Yes, it operates as notice to the firm, except in the case of a fraud on the firm committed by or with the consent of that partner'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 146,
        "QUESTIONS": "What would be the position where a minor elects to become a partner.",
        "OPTION 1": "His share in the property and profits of the firm shall be the share to which he was entitled as a minor",
        "OPTION 2": "His rights and liabilities as a minor continue up to the date on which he becomes a partner",
        "OPTION 3": "He also becomes personally liable to third parties for all acts of the firm done since he was admitted to the benefits of partnership",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 147,
        "QUESTIONS": "Where a partner has paid a premium on entering into partnership of a fixed term, and the firm is dissolved before the expiration of that term otherwise than by the death of a partner, whether any repayment of the premium is permissible:",
        "OPTION 1": "He will not be entitled for repayment of the premium if the dissolution is mainly due to his own misconduct",
        "OPTION 2": "He will not be entitled for repayment of the premium if the dissolution is in pursuance of an agreement containing no provision for the return of the premium or any part of it",
        "OPTION 3": "He shall be entitled to repayment of the premium or of such part thereof as may be reasonable, regard being had to the terms upon which he became a partner and to the length of time during which he wasa partner",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 148,
        "QUESTIONS": "Whether a partner after dissolution of the partnership firm, carry on the business in the erstwhile business name of the firm",
        "OPTION 1": "He can use the business name of the dissolved firm name, if he has brought the goodwill of the firm.",
        "OPTION 2": "He can\u2019t use the business name of the dissolved firm.",
        "OPTION 3": "He can use the business name of the dissolved firm, provided there was a contract between the partners of the\ndissolved firm",
        "OPTION 4": "Both the points mentioned at A and C are correct",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Both the points mentioned at A and C are correct'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 149,
        "QUESTIONS": "The State Government may appoint Registrars of Firms for the purposes of this Act, every Registrar shall be deemed",
        "OPTION 1": "To be a Central Government Servant.",
        "OPTION 2": "To be a public servant within the meaning of section 21 of the Indian\nPenal Code",
        "OPTION 3": "To be State Government Servant",
        "OPTION 4": "To be a private servant",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'To be a public servant within the meaning of section 21 of the Indian\nPenal Code'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 150,
        "QUESTIONS": "Non-registration of a firm will not affect:",
        "OPTION 1": "The right of the partner to sue for the dissolution of the firm, or for the accounts of the dissolved firm, or for share of the property of the dissolved\nfirm.",
        "OPTION 2": "The right to any suit or claim of set-off not exceeding Rs. 100 in value",
        "OPTION 3": "The right of a firm or partners of a firm having no place of business in India.",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 151,
        "QUESTIONS": "How a firm may be dissolved",
        "OPTION 1": "A firm may be dissolved by the Court order.",
        "OPTION 2": "A firm may be dissolved by the certain contingencies",
        "OPTION 3": "A firm may be dissolved in accordance with a contract between the\npartners",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 152,
        "QUESTIONS": "Where a partner has become of unsound mind the court may dissolved",
        "OPTION 1": "on the petition of any partner",
        "OPTION 2": "not dissolve the firm",
        "OPTION 3": "order the other partners\nto continue",
        "OPTION 4": "none of these",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'on the petition of any partner'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 153,
        "QUESTIONS": "If the assets of a firm are insufficient to discharge to debts and liabilities of the\nfirm, the partners shall bear the deficiency",
        "OPTION 1": "in the profit -sharing ratio",
        "OPTION 2": "in the capital - ratio",
        "OPTION 3": "equally",
        "OPTION 4": "as determined by the court",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'in the profit -sharing ratio'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 154,
        "QUESTIONS": "On attaining the majority, the minor partner has to decide and give a public notice within the prescribed period, whether he will continue as partner in the firm or will quit. What is that prescribed period:",
        "OPTION 1": "Within twelve months of his attaining majority or of his obtaining knowledge that he had been admitted to the benefits of partnership, whichever date is later",
        "OPTION 2": "Within three months of his attaining majority or of his obtaining knowledge that he had been admitted to the benefits of partnership, whichever date is later",
        "OPTION 3": "Within six months of his attaining majority or of his obtaining knowledge that he had been admitted to the benefits of partnership, whichever date is later",
        "OPTION 4": "Within nine month of his attaining majority or of his obtaining knowledge that he had been admitted to the benefits of partnership, whichever date is later",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Within six months of his attaining majority or of his obtaining knowledge that he had been admitted to the benefits of partnership, whichever date is later'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 155,
        "QUESTIONS": "In which conditions a person may be deemed as partner by estoppels or holding out:",
        "OPTION 1": "When he by his conduct represents himself to be a partner in a firm",
        "OPTION 2": "When knowingly permits himself to be represented, to be a partner in a firm.",
        "OPTION 3": "When he expressly by words spoken or written let the others that he is a partner in a\nfirm.",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 156,
        "QUESTIONS": "M/s XYZ is partnership firm and X, Y and Z are the partners. During the course of business travel, partner X recovered a sum of Rs. 15000 in cash from the debtor of the firm and credit in his personal bank account. The act of X will amounts to:",
        "OPTION 1": "After utilising the amount for few days, he returned back the money to the firm, so it will not come under the mis-\nappropriation of the funds.",
        "OPTION 2": "Nothing wrong in it, since he has personally made efforts in realising the dues from the debtor.",
        "OPTION 3": "Mis-appropriating the funds of the firm and utilisation of the same for the personal gain.",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Mis-appropriating the funds of the firm and utilisation of the same for the personal gain.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 157,
        "QUESTIONS": "What is the liability of a retiring partner, after the date of his retirement'.",
        "OPTION 1": "He shall not be liable for the act done by other partners during his tenurein the partnership firm.",
        "OPTION 2": "He and the partners continue to be liable as partners to third parties for any act done by any of them which would have been an act of the firm if done before the retirement, until public notice is given of the\nretirement",
        "OPTION 3": "He shall be liable for the acts done by him only on behalf of the firm during his tenure, towards the third party.",
        "OPTION 4": "Only A and B are correct.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'He and the partners continue to be liable as partners to third parties for any act done by any of them which would have been an act of the firm if done before the retirement, until public notice is given of the\nretirement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 158,
        "QUESTIONS": "A limited liability partnership is:",
        "OPTION 1": "Not a separate entity from that\nof its partners",
        "OPTION 2": "A legal entity separate\nfrom that of its partners",
        "OPTION 3": "A body corporate",
        "OPTION 4": "Only B and C are correct",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Only B and C are correct'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 159,
        "QUESTIONS": "A LLP shall be governed by the provisions of:",
        "OPTION 1": "The Companies Act, 2013",
        "OPTION 2": "The Limited Liability\nPartnership Act, 2008",
        "OPTION 3": "The Co-operative\nSocieties Act, 1912",
        "OPTION 4": "The Indian Partnership\nAct, 1932",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'The Limited Liability\nPartnership Act, 2008'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 160,
        "QUESTIONS": "Whether a HUF can become partner in LLP:",
        "OPTION 1": "HUF may become partner of LLP provided the Registrar may grant permission in this\nbehalf.",
        "OPTION 2": "No, HUF can\u2019t become partner in the LLP .",
        "OPTION 3": "Yes, HUF may become partner of LLP.",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'No, HUF can\u2019t become partner in the LLP .'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 161,
        "QUESTIONS": "How many designated partners are required in LLP:",
        "OPTION 1": "At least two designated\npartners",
        "OPTION 2": "Seven designated\npartners",
        "OPTION 3": "Two designated\npartners",
        "OPTION 4": "At least seven designated\npartners",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'At least two designated\npartners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 162,
        "QUESTIONS": "The LLP shall file the Statement of Account and Solvency in the prescribed form.\nWhich is this Form:",
        "OPTION 1": "Form 8",
        "OPTION 2": "Form 7",
        "OPTION 3": "Form 6",
        "OPTION 4": "Form 5",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Form 8'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 163,
        "QUESTIONS": "Who is the authority to grant compounding of offence under the LLP Act:",
        "OPTION 1": "The Registrar of Firms",
        "OPTION 2": "The Central Government",
        "OPTION 3": "The Registrar",
        "OPTION 4": "The Registrar of Co-\noperatives",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'The Central Government'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 164,
        "QUESTIONS": "What is the time limit within which LLP shall file Annual Return with the Registrar:",
        "OPTION 1": "Within 30 days of closure of its financial year.",
        "OPTION 2": "Within 45 days of\nclosure of its financial year.",
        "OPTION 3": "Within 60 days of\nclosure of its financial year.",
        "OPTION 4": "Within 15 days of closure of its financial year.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Within 30 days of closure of its financial year.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 165,
        "QUESTIONS": "Which of the following is true about a Limited Liability Partnership?",
        "OPTION 1": "A Limited Liability Partnership is not a distinct entity from its partners",
        "OPTION 2": "A Limited Liability Partnership is a legal entity separate from its\npartners",
        "OPTION 3": "A Limited Liability Partnership is a body corporate",
        "OPTION 4": "Both b and c are correct",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Both b and c are correct'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 166,
        "QUESTIONS": "Which of the following is true about the number of designated partners required in a Limited Liability Partnership?",
        "OPTION 1": "A Limited Liability Partnership can have at least two designated partners",
        "OPTION 2": "A Limited Liability Partnership can have at least three designated\npartners",
        "OPTION 3": "A Limited Liability Partnership can have at least seven designated\npartners",
        "OPTION 4": "A Limited Liability Partnership can have at least four designated\npartners",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'A Limited Liability Partnership can have at least four designated\npartners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 167,
        "QUESTIONS": "Every Limited Liability Partnership must maintain its books of accounts diligently. Those books of accounts should maintain  .",
        "OPTION 1": "Particulars of the receipts and expenditures at the Limited Liability Partnership with the details of those transactions",
        "OPTION 2": "An inventory of the cost of goods purchased, work in progress, inventories, finished goods as well as the cost\nof goods sold",
        "OPTION 3": "A complete record of the assets and liabilities of the Limited Liability Partnership",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 168,
        "QUESTIONS": "As per Sale of Goods Act, this is not included:",
        "OPTION 1": "A Limited Liability Partnership should maintain its accounts at the branch office",
        "OPTION 2": "A Limited Liability Partnership should maintain its accounts at\nthe corporate office",
        "OPTION 3": "A Limited Liability Partnership should maintain its accounts\nat the head office",
        "OPTION 4": "A Limited Liability Partnership should maintain its accounts at the\nregistered office",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'A Limited Liability Partnership should maintain its accounts at\nthe corporate office'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 169,
        "QUESTIONS": "As per Sale of Goods Act, this is not included:",
        "OPTION 1": "A Limited Liability Partnership should maintain its books of accounts on the accrual basis",
        "OPTION 2": "A Limited Liability Partnership should maintain its books of accounts on the cash basis",
        "OPTION 3": "A Limited Liability Partnership should maintain its books of accounts based on the double-entry\nsystem of accounting",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 170,
        "QUESTIONS": "LLP shall file its Annual Return in which form:",
        "OPTION 1": "Form 12",
        "OPTION 2": "Form 11",
        "OPTION 3": "Form 10",
        "OPTION 4": "Form 9",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Form 11'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 171,
        "QUESTIONS": "The audit of accounts of every LLP is not''' compulsory if its:",
        "OPTION 1": "Turnover does not exceed in any financial year, Rs 40 lakh or whose contribution does not exceed Rs 25 lakh",
        "OPTION 2": "Turnover does not exceed, in any financial year, Rs 30 lakh, or whose contribution does not exceed Rs 25 lakh",
        "OPTION 3": "Turnover does not exceed, in any financial year, Rs 20 lakh, or whose contribution does not\nexceed Rs 25 lakh",
        "OPTION 4": "Turnover does not exceed, in any financial year, Rs 10 lakh, or whose contribution does not exceed Rs 25 lakh",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Turnover does not exceed in any financial year, Rs 40 lakh or whose contribution does not exceed Rs 25 lakh'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 172,
        "QUESTIONS": "The Limited Liability Partnership Act, 2008 came into force on \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "21st March 2009",
        "OPTION 2": "23rd March 2009",
        "OPTION 3": "31st March 2009",
        "OPTION 4": "30th March 2009",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '31st March 2009'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 173,
        "QUESTIONS": "Which of the following cannot be converted into LLP?",
        "OPTION 1": "Partnership firm",
        "OPTION 2": "Private company",
        "OPTION 3": "Listed company",
        "OPTION 4": "unlisted company",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Listed company'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 174,
        "QUESTIONS": "The approved name of LLP shall be valid for a period of \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0from the date of\napproval:",
        "OPTION 1": "1 Month",
        "OPTION 2": "2 Months",
        "OPTION 3": "3 months",
        "OPTION 4": "6 months",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '3 months'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 175,
        "QUESTIONS": "For the purpose of LLP, Resident in India means:",
        "OPTION 1": "Person who has stayed in India for a period of not less than 182 days during the current year.",
        "OPTION 2": "Person who has stayed in India for a period of not less than 180 days during the immediately preceding one year.",
        "OPTION 3": "Person who has stayed in India for a period of not less than 181 days during the immediately preceding one year.",
        "OPTION 4": "Person who has stayed in India for a period of not less than 182 days during the immediately preceding one year.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Person who has stayed in India for a period of not less than 182 days during the immediately preceding one year.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 176,
        "QUESTIONS": "In which kind of partnership one partner has unlimited liability and other partner\nhave limited liability?",
        "OPTION 1": "Partnership-at-will",
        "OPTION 2": "Limited  liability\npartnership",
        "OPTION 3": "General partnership",
        "OPTION 4": "Particular partnership",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Limited  liability\npartnership'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 177,
        "QUESTIONS": "Any change in the partners of a limited liability partnership:",
        "OPTION 1": "May be made only with the permission of the Registrar.",
        "OPTION 2": "Shall not affect the existence, rights or liabilities of the limited\nliability partnership.",
        "OPTION 3": "Shall affect its existence.",
        "OPTION 4": "Shall affect the rights or liabilities of the limited liability partnership.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Shall not affect the existence, rights or liabilities of the limited\nliability partnership.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 178,
        "QUESTIONS": "What is the filing fee for LLP in case where the contribution of LLP exceed Rs\nFive lakh but does not exceeds Rs Ten lakh:",
        "OPTION 1": "Rs.150.",
        "OPTION 2": "Rs. 200",
        "OPTION 3": "Rs.100.",
        "OPTION 4": "Rs. 50.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Rs.150.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 179,
        "QUESTIONS": "A limited liability partnership shall, where a person becomes or ceases to be a partner and where there is any change in the name and address of the partner, file a notice with the Registrar:",
        "OPTION 1": "Within thirty days from the date he becomes or ceases to be a partner.",
        "OPTION 2": "Within sixty days from the date he becomes or ceases to be a partner",
        "OPTION 3": "Within fifteen days from the date he becomes or ceases to\nbe a partner.",
        "OPTION 4": "Within forty five days from the date he becomes or ceases to be a partner.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Within thirty days from the date he becomes or ceases to be a partner.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 180,
        "QUESTIONS": "Every limited liability partnership shall have atleast two designated partners who\nare individuals and at least one of them shall be:",
        "OPTION 1": "An Indian resident",
        "OPTION 2": "A person of foreign\nnational",
        "OPTION 3": "A resident inIndia",
        "OPTION 4": "A person having Indian\nPassport",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'A resident inIndia'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 181,
        "QUESTIONS": "n terms of section 23 (2) of the LLP Act, 2008, every LLP shall file information with regard to the LLP agreement in the prescribed form, with the Registrar within\nthirty days of the date of information. What is the prescribed Form No.:",
        "OPTION 1": "Form No.2",
        "OPTION 2": "Form No.3",
        "OPTION 3": "Form No. 4",
        "OPTION 4": "Form No. 1",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Form No.3'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 182,
        "QUESTIONS": "maximum no. of persons in a LLP is",
        "OPTION 1": "50",
        "OPTION 2": "100",
        "OPTION 3": "20",
        "OPTION 4": "No limit",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '50'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 183,
        "QUESTIONS": "duration of LLP",
        "OPTION 1": "is limited",
        "OPTION 2": "depends on the partnership agreement",
        "OPTION 3": "extends upto proper dissolution (perpetual\nsuccession)",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'extends upto proper dissolution (perpetual\nsuccession)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 184,
        "QUESTIONS": "The               Is reponsible for doing all acts, matters and things as are required to\nbe done by LLP as per the Act.",
        "OPTION 1": "designated partner",
        "OPTION 2": "active partner",
        "OPTION 3": "designated director",
        "OPTION 4": "All the partners",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'designated partner'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 185,
        "QUESTIONS": "Which of the following enjoys separate  legal entity status ?",
        "OPTION 1": "Partnership firm",
        "OPTION 2": "LLP",
        "OPTION 3": "Company",
        "OPTION 4": "Both b and c are correct",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Both b and c are correct'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 186,
        "QUESTIONS": "What is the primary advantage of a limited liability partnership (LLP) ?",
        "OPTION 1": "Limited liability for all partners",
        "OPTION 2": "Unlimited liability for all\npartners",
        "OPTION 3": "tax advantages for\npartners",
        "OPTION 4": "Ease of formulation",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'tax advantages for\npartners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 187,
        "QUESTIONS": "In an LLP , which of the following is true regarding the personal assets of partners\n?",
        "OPTION 1": "Personal assets are fully\nprotected from business liabilities",
        "OPTION 2": "Personal assets are liable fro business debts",
        "OPTION 3": "Personal assets are\npartially liable for business debts",
        "OPTION 4": "Personal assets are only liable if there is fraud",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Personal assets are only liable if there is fraud'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 188,
        "QUESTIONS": "Which  document is required to establish an LLP",
        "OPTION 1": "Articles of Association",
        "OPTION 2": "LLP Agreement",
        "OPTION 3": "Memorandum of\nAssociation",
        "OPTION 4": "Certificate of Incorporation",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'LLP Agreement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 189,
        "QUESTIONS": "Who is responsible for the day-to-day management of an LLP",
        "OPTION 1": "All partners equally",
        "OPTION 2": "The managing partner(s)",
        "OPTION 3": "An appointment board\nof directors",
        "OPTION 4": "A hired management team",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'All partners equally'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 190,
        "QUESTIONS": "In an LLP, which partner is typically responsible for signing contract and legal\ndocuments on behalf of the partnership?",
        "OPTION 1": "silent partner",
        "OPTION 2": "active partner",
        "OPTION 3": "Managing partner",
        "OPTION 4": "Limited partner",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Managing partner'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 191,
        "QUESTIONS": "What type of professions  are often required to form a Limited Liability\nPartnership (LLP) in certain jurisdictions?",
        "OPTION 1": "Medical professionals",
        "OPTION 2": "Lawyers",
        "OPTION 3": "Chartered Accountants",
        "OPTION 4": "All of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 192,
        "QUESTIONS": "In an LLP , which partners are typically not involved in the day-to-day operations\nand decision making",
        "OPTION 1": "Limited partners",
        "OPTION 2": "General partners",
        "OPTION 3": "Managing partner",
        "OPTION 4": "silent partners",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Limited partners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 193,
        "QUESTIONS": "What is the primary disadvantag of an LLP compared to a corporation?",
        "OPTION 1": "Limited Liability for partners",
        "OPTION 2": "ease of formation",
        "OPTION 3": "taxation",
        "OPTION 4": "lack of perpetual existence",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'ease of formation'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 194,
        "QUESTIONS": "How many schedules are available in LLP act ?",
        "OPTION 1": "2 schedules",
        "OPTION 2": "4 schedules",
        "OPTION 3": "1 schedules",
        "OPTION 4": "schedule not prescribed",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '4 schedules'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 195,
        "QUESTIONS": "Age of adolescent worker is-",
        "OPTION 1": "10",
        "OPTION 2": "14",
        "OPTION 3": "18",
        "OPTION 4": "21",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '14'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 196,
        "QUESTIONS": "Certificate of fitness to be young worker is to be granted by-",
        "OPTION 1": "Occupier of the factory",
        "OPTION 2": "Inspector of the factory",
        "OPTION 3": "Certifying surgeon",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Certifying surgeon'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 197,
        "QUESTIONS": "White wash or color wash should be carried out atleast once in every period of-",
        "OPTION 1": "14 months",
        "OPTION 2": "a)       24 months;",
        "OPTION 3": "48 months;",
        "OPTION 4": "60 months",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '14 months'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 198,
        "QUESTIONS": "Where more than\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 workers are employed provision shall be made for cool\ndrinking water during hot weather.",
        "OPTION 1": "100",
        "OPTION 2": "250",
        "OPTION 3": "500",
        "OPTION 4": "1000",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '250'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 199,
        "QUESTIONS": "Shelter rooms with suitable lunch rooms are to be provided, if more than\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\nworkers are employed.",
        "OPTION 1": "100",
        "OPTION 2": "250",
        "OPTION 3": "500",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'None of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 200,
        "QUESTIONS": "No female child shall be allowed to work in any factory except between-",
        "OPTION 1": "8 a.m., and 7 p.m.;",
        "OPTION 2": "6 p.m., and 6 a.m.,",
        "OPTION 3": "6 a.m., and 7 p.m.,",
        "OPTION 4": "10 p.m. and 5 a.m.,",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '8 a.m., and 7 p.m.;'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 201,
        "QUESTIONS": "Compensatory holidays are to be availed within   month.",
        "OPTION 1": "1-month",
        "OPTION 2": "2 months",
        "OPTION 3": "6 months",
        "OPTION 4": "9 months",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '2 months'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 202,
        "QUESTIONS": "Which one of the following amounts to safety measure?",
        "OPTION 1": "Artificial humidification;",
        "OPTION 2": "Ventilation;",
        "OPTION 3": "Fencing of factory;",
        "OPTION 4": "First aid appliances",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Fencing of factory;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 203,
        "QUESTIONS": "Identify from the following which is the power of Inspector of Factory.",
        "OPTION 1": "Enter into any place ofa factory",
        "OPTION 2": "Make inquiry into any\naccident;",
        "OPTION 3": "Seize or take copies of\nany document;",
        "OPTION 4": "All the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All the above.'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 204,
        "QUESTIONS": "Which does not amount to retirement?",
        "OPTION 1": "Retrenchment;",
        "OPTION 2": "Resignation;",
        "OPTION 3": "Dismissal;",
        "OPTION 4": "Superannuation.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Superannuation.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 205,
        "QUESTIONS": "Gratuity is payable to an employee-",
        "OPTION 1": "On his superannuation;",
        "OPTION 2": "Retirement;",
        "OPTION 3": "Retrenchment;",
        "OPTION 4": "In all the above cases.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'In all the above cases.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 206,
        "QUESTIONS": "The gratuity is payable to an employee shall not exceed-",
        "OPTION 1": "12 months pay;",
        "OPTION 2": "16 months pay;",
        "OPTION 3": "20 months pay",
        "OPTION 4": "24 months pay.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '20 months pay'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 207,
        "QUESTIONS": "The employer shall display an abstract of the Act and the Rules in Form No-",
        "OPTION 1": "U",
        "OPTION 2": "H",
        "OPTION 3": "O",
        "OPTION 4": "N",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'U'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 208,
        "QUESTIONS": "If sufficient cause is shown the appropriate Government may condone the delay in filing appeal against\nthe order of the Controlling Authority, for-",
        "OPTION 1": "30 days;",
        "OPTION 2": "60 days;",
        "OPTION 3": "90 days;",
        "OPTION 4": "No time limit.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '60 days;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 209,
        "QUESTIONS": "Nomination is to be made by an employee-",
        "OPTION 1": "Immediately on his\nappointment",
        "OPTION 2": "After completion of one\nyear service;",
        "OPTION 3": "After he is made\npermanent;",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'After completion of one\nyear service;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 210,
        "QUESTIONS": "Which one of the following is to be included in the definition of \u2018wage\u2019?",
        "OPTION 1": "Dearness allowance",
        "OPTION 2": "Overtime allowance",
        "OPTION 3": "Commission;",
        "OPTION 4": "House rent allowance.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Dearness allowance'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 211,
        "QUESTIONS": "If an employer intends to close the business he is to send notice to the Controlling Authority within\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\nbefore the intended closure.",
        "OPTION 1": "10 days;",
        "OPTION 2": "30 days;",
        "OPTION 3": "60 days;",
        "OPTION 4": "90 days.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '60 days;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 212,
        "QUESTIONS": "Nomination is to be filed in \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "Single form",
        "OPTION 2": "Duplicate",
        "OPTION 3": "Triplicate",
        "OPTION 4": "Quadruplicate.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Duplicate'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 213,
        "QUESTIONS": "Which will not amount to service of notice under the rule?",
        "OPTION 1": "Personal service;",
        "OPTION 2": "By registered post;",
        "OPTION 3": "By courier;",
        "OPTION 4": "Both a and b.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'By courier;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 214,
        "QUESTIONS": "Which one of the following will not include in the definition of basic wages as per\nthe Employee Provident Fund and Miscellaneous Provisions Act,1952?",
        "OPTION 1": "Dearness allowance;",
        "OPTION 2": "Overtime;",
        "OPTION 3": "Cash value for\nconsideration",
        "OPTION 4": "All the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 215,
        "QUESTIONS": "The contribution of employer to insurance fund is-",
        "OPTION 1": "0.01",
        "OPTION 2": "0.1",
        "OPTION 3": "0.12",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '0.01'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 216,
        "QUESTIONS": "Contribution of 10% to PF is applicable to-",
        "OPTION 1": "Any establishment in which\nless than 20 employees are employed;",
        "OPTION 2": "Any establishment\ndeclared as sick industrial company",
        "OPTION 3": "Jute company;",
        "OPTION 4": "All of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 217,
        "QUESTIONS": "The minimum administrative charge payable by the employer to the fund is-",
        "OPTION 1": "Rs.75",
        "OPTION 2": "Rs.500",
        "OPTION 3": "Rs.1,000",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Rs.500'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 218,
        "QUESTIONS": "The maximum penalty recoverable from the employer who makes the default in\npayment of any contribution to the fund is-",
        "OPTION 1": "0.05",
        "OPTION 2": "0.1",
        "OPTION 3": "0.15",
        "OPTION 4": "0.25",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '0.25'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 219,
        "QUESTIONS": "Withdrawal from PF may not be allowed for-",
        "OPTION 1": "Marriage of the employer;",
        "OPTION 2": "Post matriculation\neducation of children;",
        "OPTION 3": "For the purchase of a\ndwelling place;",
        "OPTION 4": "For illness in certain cases.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Marriage of the employer;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 220,
        "QUESTIONS": "The Employees\u2019 Pension Scheme provides for-",
        "OPTION 1": "Superannuation pension;",
        "OPTION 2": "Orphanage pension;",
        "OPTION 3": "Both (a) and (b);",
        "OPTION 4": "None of (a) or (b).",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Both (a) and (b);'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 221,
        "QUESTIONS": "Contribution of the employer to employees\u2019 pension scheme is-",
        "OPTION 1": "0.0833",
        "OPTION 2": "0.1",
        "OPTION 3": "0.12",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '0.0833'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 222,
        "QUESTIONS": "The following cannot be nominated for the purposes of EPF Act-",
        "OPTION 1": "Wife;",
        "OPTION 2": "Sons of a deceased sons\nwho have attained majority;",
        "OPTION 3": "Father in law;",
        "OPTION 4": "Unmarried daughter.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Sons of a deceased sons\nwho have attained majority;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 223,
        "QUESTIONS": "While filing appeal to EPF Appellate Tribunal the employer has to deposit\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0of the amount due from\nhim.",
        "OPTION 1": "0.25",
        "OPTION 2": "0.5",
        "OPTION 3": "0.75",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '0.75'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 224,
        "QUESTIONS": "The contribution shall be paid in a bank within\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0days of the last day of the\ncalendar month in which the contribution fall due for any wage period.",
        "OPTION 1": "7",
        "OPTION 2": "14",
        "OPTION 3": "21",
        "OPTION 4": "15",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '15'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 225,
        "QUESTIONS": "An appeal shall lie to High Court from the orders of ESI within   days from the\ndate of order of the ESI Court.",
        "OPTION 1": "30",
        "OPTION 2": "60",
        "OPTION 3": "90",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '60'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 226,
        "QUESTIONS": "A member of the Corporation shall cease to be a member if he fails to attend\nconsecutive meeting",
        "OPTION 1": "3",
        "OPTION 2": "5",
        "OPTION 3": "7",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '3'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 227,
        "QUESTIONS": "ESI Fund consists of-",
        "OPTION 1": "Contribution;",
        "OPTION 2": "Grants from\ngovernments;",
        "OPTION 3": "Donations;",
        "OPTION 4": "All the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 228,
        "QUESTIONS": "The Corporation may with the approval of  establish and maintain in a State,\nhospitals, dispensaries etc.,",
        "OPTION 1": "Central Government;",
        "OPTION 2": "State Government;",
        "OPTION 3": "Local Authority;",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'State Government;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 229,
        "QUESTIONS": "Who among the following will not be considered as an employee?",
        "OPTION 1": "Canteen workers",
        "OPTION 2": "Casual workers;",
        "OPTION 3": "Partners;",
        "OPTION 4": "Part time employee",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Partners;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 230,
        "QUESTIONS": "Who, among the following, is not the Principal Employer?",
        "OPTION 1": "Occupier of the factory;",
        "OPTION 2": "Owner of the factory;",
        "OPTION 3": "Legal representative of\nthe owner;",
        "OPTION 4": "Legal representative of the\ncontractor.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Legal representative of the\ncontractor.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 231,
        "QUESTIONS": "Seasonal factory is the one which is engaged for a period not exceeding  in a year.",
        "OPTION 1": "7 months",
        "OPTION 2": "6 months;",
        "OPTION 3": "3 months",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '7 months'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 232,
        "QUESTIONS": "Which, among the following, will not be included in the definition of \u2018wages\u2019?",
        "OPTION 1": "Payment made on authorized\nleave;",
        "OPTION 2": "Travelling allowance;",
        "OPTION 3": "Payment made on lock\nout;",
        "OPTION 4": "Payment made for lay off.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Travelling allowance;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 233,
        "QUESTIONS": "ESI Corporation is a-",
        "OPTION 1": "Partnership firm;",
        "OPTION 2": "Limited Liability\nPartnership;",
        "OPTION 3": "Body Corporate;",
        "OPTION 4": "Hindu Undivided Family.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Body Corporate;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 234,
        "QUESTIONS": "The minimum rate of wages on time work basis may be fixed in accordance with",
        "OPTION 1": "by the hour; or",
        "OPTION 2": "by the day; or",
        "OPTION 3": "by the month",
        "OPTION 4": "all of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'all of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 235,
        "QUESTIONS": "Section\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0  deal with Eligibility for Bonus.",
        "OPTION 1": "6",
        "OPTION 2": "8",
        "OPTION 3": "18",
        "OPTION 4": "20",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '20'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 236,
        "QUESTIONS": "Every Inspector-cum-Facilitator appointed under sub-section (1) shall be deemed to be public servant\nwithin the meaning of section   of the Indian Penal Code.",
        "OPTION 1": "15",
        "OPTION 2": "18",
        "OPTION 3": "21",
        "OPTION 4": "26",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '21'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 237,
        "QUESTIONS": "Section 56 talks about the\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1": "composition of offences",
        "OPTION 2": "offences by companies.",
        "OPTION 3": "penalties for offences",
        "OPTION 4": "power of officers",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'composition of offences'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 238,
        "QUESTIONS": "Which one of the following is not correct in regard to share certificate?",
        "OPTION 1": "The Company Secretary shall issue the share certificate.",
        "OPTION 2": "The share certificate shall be issued in pursuance of a resolution of the Board;",
        "OPTION 3": "Every share certificate shall be distinguishedto its\ndistinctive number.",
        "OPTION 4": "The shares may be in the dematerializedform",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'The Company Secretary shall issue the share certificate.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 239,
        "QUESTIONS": "If a company does not have a common seal, the share certificate shall be signed by-",
        "OPTION 1": "Two directors",
        "OPTION 2": "One director and\nCompany Secretary;",
        "OPTION 3": "Either (a) or (b);",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Either (a) or (b);'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 240,
        "QUESTIONS": "In case of unlisted company the duplicate share certificate shall be issued within a\nperiod of-",
        "OPTION 1": "45 days",
        "OPTION 2": "3 months",
        "OPTION 3": "6 months",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '3 months'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 241,
        "QUESTIONS": "The Bonus shares may be issued out of the-",
        "OPTION 1": "Free reserves;",
        "OPTION 2": "Securities premium\naccount;",
        "OPTION 3": "Capital redemption\nreserve account;",
        "OPTION 4": "Any of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Any of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 242,
        "QUESTIONS": "For which purposes securities premium account can be utilized?",
        "OPTION 1": "In writing off the preliminary\nexpenses;",
        "OPTION 2": "Buy back of shares;",
        "OPTION 3": "Issue of bonus shares",
        "OPTION 4": "Any of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Any of the above.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 243,
        "QUESTIONS": "The quorum for a public company having the number of members more than 5000\nis-",
        "OPTION 1": "2",
        "OPTION 2": "5",
        "OPTION 3": "15",
        "OPTION 4": "30",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '30'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 244,
        "QUESTIONS": "7. An instrument of the proxy shall be deposited with the registered office of the company\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 before\nthe conduct of the meeting.",
        "OPTION 1": "7 hours",
        "OPTION 2": "21 hours",
        "OPTION 3": "48 hours",
        "OPTION 4": "60 hours.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '48 hours'. Per Section 105, any member of a company entitled to attend and vote at a meeting is entitled to appoint another person (who need not be a member) as a proxy to attend and vote on their behalf."
    },
    {
        "SL NO": 245,
        "QUESTIONS": "In case of e-voting notice shall be sent as attachment in \u2013",
        "OPTION 1": "PDF",
        "OPTION 2": "word file",
        "OPTION 3": "excel",
        "OPTION 4": "access",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'PDF'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 246,
        "QUESTIONS": "9. In the case of an adjourned meeting the company shall give not less\nthan\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0  notice to the members",
        "OPTION 1": "1 days",
        "OPTION 2": "3 days",
        "OPTION 3": "7 days",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '3 days'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 247,
        "QUESTIONS": "Which one of the following is not correct?",
        "OPTION 1": "The articles of the company shall provide for the appointment of Chairman in a meeting;",
        "OPTION 2": "The members personally present at the meetingshall elect one of themselves to be Chairman on\na show of hands, if the article does not provide for the same;",
        "OPTION 3": "Managing Director is the Chairman of themeeting.",
        "OPTION 4": "The member selected as Chairman as a result ofpoll, continue the Chairman, who is elected by\nshow of hands.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Managing Director is the Chairman of themeeting.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 248,
        "QUESTIONS": "Which of the following is the method of voting?",
        "OPTION 1": "Voting by show of hands;",
        "OPTION 2": "Voting through\nelectronic means;",
        "OPTION 3": "Voting by poll",
        "OPTION 4": "All of the above;",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'All of the above;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 249,
        "QUESTIONS": "A poll demanded on any question shall be taken within\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0  from the time when\nthe demand was made.",
        "OPTION 1": "Immediately",
        "OPTION 2": "12 hours;",
        "OPTION 3": "24 hours;",
        "OPTION 4": "48 hours.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '48 hours.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 250,
        "QUESTIONS": "Which one cannot be transacted through postal ballot?",
        "OPTION 1": "Appointment of auditor;",
        "OPTION 2": "Election of a Director;",
        "OPTION 3": "Buy back of shares by a company;",
        "OPTION 4": "Change in place of registered office outside the local limits of any city, town or village.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Appointment of auditor;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 251,
        "QUESTIONS": "The assent or dissent received after\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0  days in postal ballot, from the date of issue of notice, shall be\ntreated as if no reply has been received from the member.",
        "OPTION 1": "3",
        "OPTION 2": "7",
        "OPTION 3": "30",
        "OPTION 4": "45",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '30'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 252,
        "QUESTIONS": "If any inspection is refused or if any copy required is not furnished within the\nspecified time, the company shall be liable to a penalty of \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "Rs.10000",
        "OPTION 2": "Rs.25000",
        "OPTION 3": "Rs.50000",
        "OPTION 4": "Rs.100000",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Rs.25000'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 253,
        "QUESTIONS": "The minimum number of directors for a public company is-",
        "OPTION 1": "1",
        "OPTION 2": "2",
        "OPTION 3": "3",
        "OPTION 4": "7",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '3'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 254,
        "QUESTIONS": "What is the paid up share capital fixed for the appointment of a woman director?",
        "OPTION 1": "Rs.100 crores",
        "OPTION 2": "Rs.300 crores;",
        "OPTION 3": "Rs.500 crores",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Rs.100 crores'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 255,
        "QUESTIONS": "The appointment of an independent director shall be approved by the",
        "OPTION 1": "Board meeting;",
        "OPTION 2": "General meeting;",
        "OPTION 3": "Registrar of\nCompanies",
        "OPTION 4": "Central Government.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'General meeting;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 256,
        "QUESTIONS": "The tenure of director appointed by small share holders shall be-",
        "OPTION 1": "Up to the date of next AGM;",
        "OPTION 2": "1 year;",
        "OPTION 3": "3 years",
        "OPTION 4": "5 years.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '3 years'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 257,
        "QUESTIONS": "No independent director shall hold office for more than   consecutive terms.",
        "OPTION 1": "2;",
        "OPTION 2": "3",
        "OPTION 3": "4",
        "OPTION 4": "5",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '3'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 258,
        "QUESTIONS": "Which public company is required to appoint independent director\u201d",
        "OPTION 1": "The public company having turnover of` 100 crores or more;",
        "OPTION 2": "The public company having paid up share capital of ` 10 crores or more;",
        "OPTION 3": "The public companies which have, inaggregate, outstanding loans, debentures\nand deposits exceeding\n` 50 crores;",
        "OPTION 4": "Any of the above.",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Any of the above.'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 259,
        "QUESTIONS": "Which one of the following is not the criterion for the appointment of independent director?",
        "OPTION 1": "He shall not be a promoter of the company",
        "OPTION 2": "He shall relate to the promoters of the company;",
        "OPTION 3": "He shall not have any pecuniary relationship with the company or their promoters or directors during two immediately preceding financial year.",
        "OPTION 4": "His relatives have not held any pecuniary relationship with the company amounting to 2% or more of its gross turnover",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'He shall relate to the promoters of the company;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 260,
        "QUESTIONS": "A director may be elected by small share holders upon a notice by-",
        "OPTION 1": "Not less than 1000 small shareholders;",
        "OPTION 2": "One tenth of the total number of shareholders;",
        "OPTION 3": "Not less than 1000 small shareholders or one tenth of such shareholders,\nwhichever is lower;",
        "OPTION 4": "None of the above.",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Not less than 1000 small shareholders or one tenth of such shareholders,\nwhichever is lower;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 261,
        "QUESTIONS": "At every AGM, not less than   of the total number of directors shall retire by\nrotation.",
        "OPTION 1": "One third;",
        "OPTION 2": "Two third;",
        "OPTION 3": "Three fourths;",
        "OPTION 4": "Half.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Two third;'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 262,
        "QUESTIONS": "The minimum age prescribed for the appointament of Managing Director is-",
        "OPTION 1": "18 years;",
        "OPTION 2": "21 years;",
        "OPTION 3": "30 years;",
        "OPTION 4": "70 years",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '21 years;'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 263,
        "QUESTIONS": "The relationship between laws and ethics is:",
        "OPTION 1": "Complex",
        "OPTION 2": "Simple",
        "OPTION 3": "Inexplicable",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Complex'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 264,
        "QUESTIONS": "Many laws are \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 to ethics of time:",
        "OPTION 1": "Complimentary",
        "OPTION 2": "Supplementary",
        "OPTION 3": "Representative",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Representative'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 265,
        "QUESTIONS": "Law gives us a certain right because all humans are born  :",
        "OPTION 1": "Equal",
        "OPTION 2": "Unequal",
        "OPTION 3": "Subordinate",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Equal'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 266,
        "QUESTIONS": "The role of accounting in problem solving is to provide information useful\nin\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0  alternatives:",
        "OPTION 1": "finding",
        "OPTION 2": "Evaluating",
        "OPTION 3": "dismissing",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Evaluating'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 267,
        "QUESTIONS": "Ethics are the set of moral principles that guide a person\u2019s",
        "OPTION 1": "Behaviour",
        "OPTION 2": "Philosophy",
        "OPTION 3": "Religion",
        "OPTION 4": "Profession",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Behaviour'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 268,
        "QUESTIONS": "The following is the disadvantage of business ethics:",
        "OPTION 1": "Through increasing morale and trust business can increase their market share",
        "OPTION 2": "Publicity due to well and ethical performance",
        "OPTION 3": "Acceptance of products of the company by the public",
        "OPTION 4": "Diversity in achievements",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Diversity in achievements'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 269,
        "QUESTIONS": "A sale is complete when the following is transferred from one.",
        "OPTION 1": "Money",
        "OPTION 2": "Ownership",
        "OPTION 3": "Usage",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Ownership'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 270,
        "QUESTIONS": "The Consideration in contract of sale must be:",
        "OPTION 1": "Immovable",
        "OPTION 2": "Movable",
        "OPTION 3": "Price",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Price'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 271,
        "QUESTIONS": "The subject matter of the contract must be:",
        "OPTION 1": "Sale",
        "OPTION 2": "Product",
        "OPTION 3": "Service",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Sale'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 272,
        "QUESTIONS": "On which date was the Sale of Goods enforced?",
        "OPTION 1": "1948",
        "OPTION 2": "1930",
        "OPTION 3": "1932",
        "OPTION 4": "1951",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '1930'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 273,
        "QUESTIONS": "As per Sale of Goods Act, this is not included:",
        "OPTION 1": "Growing crop",
        "OPTION 2": "Money",
        "OPTION 3": "Table",
        "OPTION 4": "Goodwill",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Money'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 274,
        "QUESTIONS": "The term property as used in the sale of goods act ,1930 means",
        "OPTION 1": "possession",
        "OPTION 2": "Ownership",
        "OPTION 3": "ownership and\npossession both",
        "OPTION 4": "the subject matter of\ncontract of sale",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Ownership'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 275,
        "QUESTIONS": "The doctrine of caveat emptor applies-------",
        "OPTION 1": "in case of implied conditions and warranties",
        "OPTION 2": "when the buyer does not intimate the purpose to the seller and depends upon his own skill and\njudgement",
        "OPTION 3": "when goods are sold by sample",
        "OPTION 4": "when goods are sold by description",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'when the buyer does not intimate the purpose to the seller and depends upon his own skill and\njudgement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 276,
        "QUESTIONS": "Under Sale of Goods Act, which of the delivery of goods is called as delivery by\nattornment?",
        "OPTION 1": "Actual",
        "OPTION 2": "Symbolic",
        "OPTION 3": "Constructive",
        "OPTION 4": "Physical",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Constructive'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 277,
        "QUESTIONS": "Where the price of the goods under a contract of sale is to be fixed by the valuation\nof a third party who fails to fix the valuation, but goods are supplied to the buyer, under section 10 of the Sale of Goods Act, 1930, the buyer is",
        "OPTION 1": "liable to pay the reasonable price of the goods.",
        "OPTION 2": "liable to pay the\nminimum price of the goods.",
        "OPTION 3": "not liable to pay any\nprice until fixed by the value",
        "OPTION 4": "liable to pay the maximum retail price.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'liable to pay the reasonable price of the goods.'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 278,
        "QUESTIONS": "In case of breach of warranty the buyer can",
        "OPTION 1": "repudiate the contract",
        "OPTION 2": "Claim damages only",
        "OPTION 3": "return the goods",
        "OPTION 4": "refuse to pay the price",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Claim damages only'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 279,
        "QUESTIONS": "The main objective of a contract of sale is",
        "OPTION 1": "transfer of possession of goods",
        "OPTION 2": "transfer of property in\ngoods",
        "OPTION 3": "delivery of goods",
        "OPTION 4": "payment of price",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'transfer of property in\ngoods'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 280,
        "QUESTIONS": "Risks follows ownership",
        "OPTION 1": "only when goods have been\ndelivered",
        "OPTION 2": "only when price has been\npaid",
        "OPTION 3": "whether delivery has\nbeen made or not",
        "OPTION 4": "even when price has not\nbeen paid",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'whether delivery has\nbeen made or not'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 281,
        "QUESTIONS": "In an agreement to sell , the seller can sue for price if",
        "OPTION 1": "the goods have been delivered\nto the buyer",
        "OPTION 2": "the goods have not been\ndelivered  to the buyer",
        "OPTION 3": "there is a specific\nagreement",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'there is a specific\nagreement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 282,
        "QUESTIONS": "Where there is an unconditional contract for the sale of specific  goods in a\ndeliverable state, the property in the goods passes to the buyer when",
        "OPTION 1": "the goods are delivered  to the\nbuyer",
        "OPTION 2": "the price is paid by the\nbuyer",
        "OPTION 3": "the contract is made",
        "OPTION 4": "the buyer accepts the goods",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'the contract is made'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 283,
        "QUESTIONS": "If  the contract is silent as to the party who is to appropriate the goods",
        "OPTION 1": "the buyer is to appropriate",
        "OPTION 2": "goods seller is  to appropriate",
        "OPTION 3": "the party who under the contract  is first to\nact is to appropriate",
        "OPTION 4": "any party may aprropriate",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'the party who under the contract  is first to\nact is to appropriate'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 284,
        "QUESTIONS": "Where there is no specific agreement as to place , the goods sold are to be\ndelivered at the place",
        "OPTION 1": "at which they are at the time of\nsale",
        "OPTION 2": "of the buyer",
        "OPTION 3": "desired by the buyer",
        "OPTION 4": "to be determined by the\nseller",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'at which they are at the time of\nsale'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 285,
        "QUESTIONS": "A seller delivers goods in excess of the quantity ordered  for. The buyer may",
        "OPTION 1": "accept the whole",
        "OPTION 2": "reject the whole",
        "OPTION 3": "accept the goods\nordered for and return the excess",
        "OPTION 4": "Any of the above",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Any of the above'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 286,
        "QUESTIONS": "Where the neglect or refusal of the buyer to take delivery of goods amounts to a\nrepudiation of the contract ,the seller  may sue for the",
        "OPTION 1": "price or damages",
        "OPTION 2": "price only",
        "OPTION 3": "damages only",
        "OPTION 4": "both for price and damages",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'price or damages'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 287,
        "QUESTIONS": "The lien of an unpaid seller depends on",
        "OPTION 1": "possession",
        "OPTION 2": "title",
        "OPTION 3": "ownership",
        "OPTION 4": "Whether the buyer has paid\nthe price or not",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'possession'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 288,
        "QUESTIONS": "An unpaid seller has not given notice of resale to the buyer there is a profit. The unpaid seller",
        "OPTION 1": "is bound to hand it over to the buyer",
        "OPTION 2": "is not bound to hand it over to the buyer",
        "OPTION 3": "The buyer can recover it from the unpaid\nseller",
        "OPTION 4": "The buyer must compensate the unpaid\nseller",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'is bound to hand it over to the buyer'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 289,
        "QUESTIONS": "An unpaid seller can exercise the right of stoppage in transit when the carrier holds\nthe goods",
        "OPTION 1": "as seller's agent",
        "OPTION 2": "as buyer's agent",
        "OPTION 3": "as agent of both of\nthem",
        "OPTION 4": "in his own name",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'in his own name'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 290,
        "QUESTIONS": "An auction sale is complete on the.",
        "OPTION 1": "fall of hammer",
        "OPTION 2": "delivery of goods",
        "OPTION 3": "payment of price.",
        "OPTION 4": "both (b) and (c) ..",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'fall of hammer'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 291,
        "QUESTIONS": "Auction sale is also known as",
        "OPTION 1": "public sale",
        "OPTION 2": "private sale",
        "OPTION 3": "cash sale",
        "OPTION 4": "none of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'public sale'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 292,
        "QUESTIONS": "Consideration and object of an agreement is unlawful if it",
        "OPTION 1": "is fraudulent",
        "OPTION 2": "is possible",
        "OPTION 3": "is impossible",
        "OPTION 4": "all of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'is fraudulent'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 293,
        "QUESTIONS": "Where the seller appoints his person to bid at the auction sale without informing to\nbidder, it is called as",
        "OPTION 1": "prepared bidding",
        "OPTION 2": "pretend bidding",
        "OPTION 3": "power bidding",
        "OPTION 4": "both (a) & \u00a9",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'pretend bidding'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 294,
        "QUESTIONS": "An unlawful act by which an intending purchaser is prevented from bidding or\nraising the price at an auction sale is known as",
        "OPTION 1": "decoy ducking",
        "OPTION 2": "puffering",
        "OPTION 3": "damping",
        "OPTION 4": "none of these",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'damping'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 295,
        "QUESTIONS": "In a sale , there is an implied condition on the part of the seller that he",
        "OPTION 1": "has a right to sell the goods",
        "OPTION 2": "is in possession of the\ngoods",
        "OPTION 3": "will have the right to\nsell",
        "OPTION 4": "will aquire the goods",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'has a right to sell the goods'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 296,
        "QUESTIONS": "In a contract of sale , unless goods are ascertained , there is",
        "OPTION 1": "a sale",
        "OPTION 2": "an agreement to sale",
        "OPTION 3": "a void  agreement",
        "OPTION 4": "an unenforceable\nagreement",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'an agreement to sale'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 297,
        "QUESTIONS": "There is a constructive delivery of goods -",
        "OPTION 1": "when the seller hands over to the buyer the key of the warehouse where the goods are lying",
        "OPTION 2": "where a third person in possession of the goods acknowleges to the buyer that he holds them on his\nbehalf",
        "OPTION 3": "when the seller physically delivers the goods to the buyer",
        "OPTION 4": "when the seller asks the buyers to take delivery of the goods",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'where a third person in possession of the goods acknowleges to the buyer that he holds them on his\nbehalf'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 298,
        "QUESTIONS": "Unless otherwise agreed , where goods are delivered to the buyer and he rejects them",
        "OPTION 1": "he is not bound to return them to the seller",
        "OPTION 2": "it is sufficient if he intimates to the seller that he has rejected the goods",
        "OPTION 3": "he is bound to deliver them to the seller",
        "OPTION 4": "he may keep them with him",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'it is sufficient if he intimates to the seller that he has rejected the goods'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 299,
        "QUESTIONS": "if a seller makes use of pretended bidding at an auction to raise the price ,the sale is",
        "OPTION 1": "voidable at the option of the\nbuyer",
        "OPTION 2": "void",
        "OPTION 3": "valid",
        "OPTION 4": "illegal",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'voidable at the option of the\nbuyer'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 300,
        "QUESTIONS": "What does the principle of Double Jeopardy protect against?",
        "OPTION 1": "Being tried for multiple crimes at once",
        "OPTION 2": "Being punished too harshly for a crime",
        "OPTION 3": "Being prosecuted and punished for the same offence more than\nonce",
        "OPTION 4": "Being arrested without a warrant",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Being prosecuted and punished for the same offence more than\nonce'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 301,
        "QUESTIONS": "What is the time limit for the Council of States to return a Money Bill with its\nrecommendations?",
        "OPTION 1": "7 days",
        "OPTION 2": "14 days",
        "OPTION 3": "10 days",
        "OPTION 4": "21 days",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '14 days'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 302,
        "QUESTIONS": "Settlement of disputes outside the court is aimed at:",
        "OPTION 1": "Delaying the legal process",
        "OPTION 2": "Enforcing strict penalties",
        "OPTION 3": "Eliminating the need for laws",
        "OPTION 4": "Avoiding court procedures and finding mutually agreeable solutions",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Avoiding court procedures and finding mutually agreeable solutions'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 303,
        "QUESTIONS": "The phrase \u201cparty-centric approach\u201d in mediation means:",
        "OPTION 1": "The mediator leads the process with party consultation",
        "OPTION 2": "The outcome is predetermined by the\nparties\u2019 legal advisors",
        "OPTION 3": "The control of the process lies with the\ndisputing parties",
        "OPTION 4": "All parties must be from the same legal jurisdiction",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'The control of the process lies with the\ndisputing parties'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 304,
        "QUESTIONS": "Which law governs the functioning of Lok Adalats when a case is referred to them\nby a civil court?",
        "OPTION 1": "Legal Services Authorities Act,\n1987",
        "OPTION 2": "Arbitration Act, 1940",
        "OPTION 3": "Consumer Protection\nAct, 1986",
        "OPTION 4": "Indian Evidence Act, 1872",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Legal Services Authorities Act,\n1987'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 305,
        "QUESTIONS": "What is a defining characteristic of supreme legislation?",
        "OPTION 1": "It can be repealed by executive orders",
        "OPTION 2": "It is subject to judicial review by subordinate courts",
        "OPTION 3": "It cannot be controlled or checked by any authority other than the\nsovereign itself",
        "OPTION 4": "It must receive prior approval from the head of state",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'It cannot be controlled or checked by any authority other than the\nsovereign itself'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 306,
        "QUESTIONS": "What does ratio decidendi refer to in a judicial decision?",
        "OPTION 1": "The judge\u2019s personal opinion",
        "OPTION 2": "The final verdict or punishment",
        "OPTION 3": "The principle or reason underlying the decision",
        "OPTION 4": "The summary of the case facts",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'The principle or reason underlying the decision'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 307,
        "QUESTIONS": "What is the legal assumption when parties enter into an agreement related to a trade?",
        "OPTION 1": "They are unaware of legal obligations",
        "OPTION 2": "They reject all customary practices",
        "OPTION 3": "They need explicit permission from the court",
        "OPTION 4": "They contract according to the established conventions or usages of that trade",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'They contract according to the established conventions or usages of that trade'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 308,
        "QUESTIONS": "What has led to the rise of e-contracts?",
        "OPTION 1": "Changes in technology and\nlegal requirements",
        "OPTION 2": "Reduction in legal\nprocedures",
        "OPTION 3": "The growth of\npopulation",
        "OPTION 4": "Increase in court cases",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Changes in technology and\nlegal requirements'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 309,
        "QUESTIONS": "How are e-contracts generally created and deployed?",
        "OPTION 1": "By a notary public using scanned documents",
        "OPTION 2": "Through postal correspondence between parties",
        "OPTION 3": "By a software system that models, specifies, and executes the\ncontract",
        "OPTION 4": "Only by government- authorized websites",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'By a software system that models, specifies, and executes the\ncontract'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 310,
        "QUESTIONS": "If an Indian citizen has a legal dispute with a foreign sovereign, what is the typical outcome under Indian law?",
        "OPTION 1": "The Indian citizen can sue directly in civil court",
        "OPTION 2": "The foreign sovereign must be deported",
        "OPTION 3": "The Indian citizen cannot sue the foreign\nsovereign",
        "OPTION 4": "The matter is automatically taken up by the UN",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'The Indian citizen cannot sue the foreign\nsovereign'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 311,
        "QUESTIONS": "Rohan, a 17-year-old boy, approached a car dealership and expressed interest in buying a second-hand car. He falsely claimed that he was 21 years old and showed a fake ID to support his claim. The dealership, relying on his representation, sold him the car on credit. After a few months, Rohan refused to pay the remaining amount, claiming he was a minor when the contract was made. The dealership sued Rohan, arguing that he should be estopped from denying his age due to his earlier misrepresentation. Can Rohan be held liable for the payment based on the\nlaw of estoppel?",
        "OPTION 1": "Yes, because he misrepresented his age and acted fraudulently.",
        "OPTION 2": "No, because the law of estoppel does not apply against a minor.",
        "OPTION 3": "Yes, because he benefited from the contract.",
        "OPTION 4": "No, because the dealership failed to verify his identity.",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'No, because the law of estoppel does not apply against a minor.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 312,
        "QUESTIONS": "Which of the following best defines \u2018ratification\u2019 in contract law?",
        "OPTION 1": "Terminating a contract due to breach",
        "OPTION 2": "Approval or confirmation of a previous act or agreement",
        "OPTION 3": "Entering into a contract under coercion",
        "OPTION 4": "Cancelling a contract made by mutual consent",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Approval or confirmation of a previous act or agreement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 313,
        "QUESTIONS": "Who is considered an 'alien enemy' under Indian contract law?",
        "OPTION 1": "A foreigner visiting India\nduring peacetime",
        "OPTION 2": "A citizen of a friendly\ncountry residing in India",
        "OPTION 3": "A citizen of a country\nat war with India",
        "OPTION 4": "A person who breaks\nIndian laws",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'A citizen of a country\nat war with India'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 314,
        "QUESTIONS": "Which of the following statements is TRUE regarding an agreement with an alien enemy?",
        "OPTION 1": "It is void unless permitted by the Indian Government.",
        "OPTION 2": "It is valid and enforceable in Indian courts.",
        "OPTION 3": "It is voidable at the option of the alien enemy.",
        "OPTION 4": "It is valid only during peacetime and automatically resumes\nduring wartime.",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'It is void unless permitted by the Indian Government.'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 315,
        "QUESTIONS": "Under Indian law, a contract must be performed within:",
        "OPTION 1": "Any time the parties feel is reasonable",
        "OPTION 2": "A period fixed by the Supreme Court",
        "OPTION 3": "A fixed or reasonable time as per the terms or nature of the\ncontract",
        "OPTION 4": "At the discretion of the promisor",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'A fixed or reasonable time as per the terms or nature of the\ncontract'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 316,
        "QUESTIONS": "What does 'merger' in contract law refer to?",
        "OPTION 1": "Two contracts being combined to form a joint venture",
        "OPTION 2": "Cancellation of both contracts between the same parties",
        "OPTION 3": "Absorption of inferior contractual rights into superior rights under a\nnew contract",
        "OPTION 4": "Addition of new clauses to an existing contract",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Absorption of inferior contractual rights into superior rights under a\nnew contract'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 317,
        "QUESTIONS": "What does the legal maxim \u201cex nudo pacto non oritur actio\u201d mean in contract law?",
        "OPTION 1": "No action arises from a bare\n(nude) promise",
        "OPTION 2": "A contract made without\nintention is void",
        "OPTION 3": "Every promise creates\na legal obligation",
        "OPTION 4": "Only written contracts are\nenforceable",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'No action arises from a bare\n(nude) promise'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 318,
        "QUESTIONS": "Which statement best describes a tripartite agreement?",
        "OPTION 1": "An agreement between two parties with a third-party\nwitness",
        "OPTION 2": "An agreement involving three parties, each with\nspecific roles",
        "OPTION 3": "An agreement that must be in writing",
        "OPTION 4": "An agreement involving the government and two\nindividuals",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'An agreement involving three parties, each with\nspecific roles'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 319,
        "QUESTIONS": "In bailment, the goods must be returned or otherwise disposed of according to\nwhose directions?",
        "OPTION 1": "Bailee",
        "OPTION 2": "Bailor",
        "OPTION 3": "Creditor",
        "OPTION 4": "Principal debtor",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Bailor'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 320,
        "QUESTIONS": "A borrower received goods gratuitously for use for 6 months. The lender demands early return after 3 months. The borrower has made investments relying on the 6\nmonths' use causing loss if returned early. What is the lender\u2019s liability?",
        "OPTION 1": "No liability",
        "OPTION 2": "Must pay damages equal to the borrower's total\nloss",
        "OPTION 3": "Must indemnify the borrower for loss exceeding the benefit\nderived",
        "OPTION 4": "Must cancel the contract",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Must indemnify the borrower for loss exceeding the benefit\nderived'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 321,
        "QUESTIONS": "The finder of goods can sue the owner for compensation only if:",
        "OPTION 1": "The goods are perishable",
        "OPTION 2": "A specific reward was\npublicly offered for returning the goods",
        "OPTION 3": "The owner cannot be found",
        "OPTION 4": "The finder informs the police",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'A specific reward was\npublicly offered for returning the goods'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 322,
        "QUESTIONS": "What is the term for a tacit or implied agreement among prospective bidders to limit competition by refraining from bidding against each other in an auction?",
        "OPTION 1": "Damping",
        "OPTION 2": "Knock-out Agreement",
        "OPTION 3": "Puffers",
        "OPTION 4": "By-Bidders",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Knock-out Agreement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 323,
        "QUESTIONS": "What does \u201cdeliverable state\u201d mean in the context of a contract of sale?",
        "OPTION 1": "Goods must be delivered to the buyer\u2019s home",
        "OPTION 2": "Goods are ready for delivery, and the buyer is bound to take delivery under the contract",
        "OPTION 3": "Goods are packed and stored for inspection",
        "OPTION 4": "Goods are under transportation",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Goods are ready for delivery, and the buyer is bound to take delivery under the contract'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 324,
        "QUESTIONS": "In the case of an agreement to sell, the seller is expected to have the right to sell the\ngoods:",
        "OPTION 1": "Immediately upon signing the\ncontract",
        "OPTION 2": "At the time the\nagreement is signed",
        "OPTION 3": "At the time when\nproperty is to pass",
        "OPTION 4": "After receiving full\npayment",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'At the time when\nproperty is to pass'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 325,
        "QUESTIONS": "Under Section 29, a person in possession of goods under a voidable contract can transfer good title to the buyer if:",
        "OPTION 1": "The contract has already been rescinded",
        "OPTION 2": "The buyer purchases the goods in good faith and without notice of the\ndefect in title",
        "OPTION 3": "The buyer is a relative of the seller",
        "OPTION 4": "The buyer pays double the price",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'The buyer purchases the goods in good faith and without notice of the\ndefect in title'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 326,
        "QUESTIONS": "What is the effect if a voidable contract is rescinded before the sale of goods?",
        "OPTION 1": "The seller can still transfer\ngood title",
        "OPTION 2": "The seller becomes the\nrightful owner",
        "OPTION 3": "The buyer cannot get a\ngood title",
        "OPTION 4": "The contract becomes valid\nautomatically",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'The buyer cannot get a\ngood title'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 327,
        "QUESTIONS": "Under Section 24, when does the property not pass to the buyer, even though the\nbuyer is in possession of the goods?",
        "OPTION 1": "Buyer rejects the goods within\nthe stipulated time",
        "OPTION 2": "Buyer resells the goods",
        "OPTION 3": "Buyer pledges the\ngoods",
        "OPTION 4": "Buyer uses the goods as per\ntheir intended purpose",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Buyer rejects the goods within\nthe stipulated time'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 328,
        "QUESTIONS": "If an unpaid seller resells the goods after exercising the right of lien or stoppage in transit, what kind of title does the new buyer acquire?",
        "OPTION 1": "No title, as the resale is not authorized",
        "OPTION 2": "A limited title, revocable by the original buyer",
        "OPTION 3": "Title passes only if the original buyer consents",
        "OPTION 4": "A good title, even if the resale is not justified",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'A good title, even if the resale is not justified'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 329,
        "QUESTIONS": "In a non-severable contract, the buyer has accepted part of the goods. What is the legal effect of a breach of condition by the seller?",
        "OPTION 1": "Buyer may reject the goods entirely",
        "OPTION 2": "Buyer can only treat it as a breach of warranty",
        "OPTION 3": "Buyer must pay full price regardless of\ndefects",
        "OPTION 4": "Seller becomes liable for criminal charges",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Buyer can only treat it as a breach of warranty'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 330,
        "QUESTIONS": "Under what condition can a seller or someone on their behalf bid at an auction?",
        "OPTION 1": "Always",
        "OPTION 2": "Only when expressly\nreserved",
        "OPTION 3": "Only if the auctioneer\nagrees",
        "OPTION 4": "Never",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Only when expressly\nreserved'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 331,
        "QUESTIONS": "When goods are put up for sale in lots at an auction, what is the legal status of each lot?",
        "OPTION 1": "All lots are part of one single contract",
        "OPTION 2": "It depends on the value of each lot",
        "OPTION 3": "Each lot is deemed a separate contract of\nsale",
        "OPTION 4": "The auctioneer decides whether it's one or multiple\ncontracts",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Each lot is deemed a separate contract of\nsale'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 332,
        "QUESTIONS": "The acquisition of which is contingent upon happening or non-happening of certain events will be treated as",
        "OPTION 1": "Future goods",
        "OPTION 2": "Unascertained goods",
        "OPTION 3": "Contingent goods",
        "OPTION 4": "Forward commodities",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Contingent goods'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 333,
        "QUESTIONS": "Mr. X has obtained a laptop from Mr. Y by fraud. Mr. X has a voidable title at the option of Mr. Y. Before Mr. Y could rescind the contract, Mr. X sold the same laptop to Mr. Z who purchased it in good faith and without knowledge of the fraud\nby Mr. X and paid for it. In this case:",
        "OPTION 1": "Mr. Z has a good title to the goods",
        "OPTION 2": "Mr. Y has a good title",
        "OPTION 3": "Mr. Z has no right",
        "OPTION 4": "None of the above",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Mr. Z has a good title to the goods'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 334,
        "QUESTIONS": "The rule as to passing of property as laid down in Sec 20 of Sale of the Sale of Goods Act, shall happen when,",
        "OPTION 1": "The time of payment of price is postponed",
        "OPTION 2": "The time of delivery of the goods is postponed",
        "OPTION 3": "The contract is made",
        "OPTION 4": "Neither the time of payment of price nor the time of delivery of the\ngoods is postponed",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'The contract is made'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 335,
        "QUESTIONS": "Which of the following is true regarding instalment delivery under Section 38?",
        "OPTION 1": "Buyer must always accept instalments",
        "OPTION 2": "Every breach of instalment is a breach of the whole contract",
        "OPTION 3": "Seller can make defective deliveries in instalments",
        "OPTION 4": "Whether a breach repudiates the contract depends on its severity and\ncontext",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Whether a breach repudiates the contract depends on its severity and\ncontext'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 336,
        "QUESTIONS": "In the absence of a lien over the goods, what is the seller required to do?",
        "OPTION 1": "Return the goods to the\nOfficial Receiver or Assignee",
        "OPTION 2": "Keep the goods until full\npayment is made",
        "OPTION 3": "Sell the goods to\nrecover full payment",
        "OPTION 4": "Destroy the goods to avoid\nloss",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Return the goods to the\nOfficial Receiver or Assignee'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 337,
        "QUESTIONS": "Fixing of a definite price in a contract of sale is considered a:",
        "OPTION 1": "Non-essential element",
        "OPTION 2": "Voidable condition",
        "OPTION 3": "Sine qua non (essential requirement)",
        "OPTION 4": "General trade custom",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Sine qua non (essential requirement)'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 338,
        "QUESTIONS": "A cheque in electronic form is drawn using:",
        "OPTION 1": "A mobile app only",
        "OPTION 2": "A computer resource and digital/electronic\nsignature",
        "OPTION 3": "A handwritten signature scanned\ndigitally",
        "OPTION 4": "A printed cheque scanned into the system",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'A computer resource and digital/electronic\nsignature'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 339,
        "QUESTIONS": "Who is always the drawee in a cheque transaction?",
        "OPTION 1": "The person receiving the\ncheque",
        "OPTION 2": "The bank on which the\ncheque is drawn",
        "OPTION 3": "The person issuing the\ncheque",
        "OPTION 4": "The RBI",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'The bank on which the\ncheque is drawn'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 340,
        "QUESTIONS": "The promissory note is defined under which section of the Negotiable Instruments\nAct, 1881?",
        "OPTION 1": "Section 3",
        "OPTION 2": "Section 4",
        "OPTION 3": "Section 5",
        "OPTION 4": "Section 6",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Section 4'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 341,
        "QUESTIONS": "What type of liability does the maker of a promissory note have?",
        "OPTION 1": "Conditional and secondary",
        "OPTION 2": "Secondary and limited",
        "OPTION 3": "Joint and several",
        "OPTION 4": "Primary and absolute",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Primary and absolute'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 342,
        "QUESTIONS": "An inland instrument is one that is:",
        "OPTION 1": "Made in India but payable outside India",
        "OPTION 2": "Made and payable in\nIndia, or drawn upon a person resident in India",
        "OPTION 3": "Made outside India but payable in India",
        "OPTION 4": "Made anywhere but drawn upon a foreign bank",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Made and payable in\nIndia, or drawn upon a person resident in India'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 343,
        "QUESTIONS": "Which of the following are considered inland instruments?",
        "OPTION 1": "Only promissory notes",
        "OPTION 2": "Only cheques",
        "OPTION 3": "Promissory notes, bills of exchange, or cheques drawn or made in India payable\nin India",
        "OPTION 4": "Only bills of exchange drawn internationally",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Promissory notes, bills of exchange, or cheques drawn or made in India payable\nin India'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 344,
        "QUESTIONS": "What is an 'allonge' in the context of negotiable instruments?",
        "OPTION 1": "A type of signature",
        "OPTION 2": "A bank\u2019s approval stamp",
        "OPTION 3": "A clause restricting transfer",
        "OPTION 4": "A slip of paper attached to\nthe instrument for endorsement",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'A slip of paper attached to\nthe instrument for endorsement'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 345,
        "QUESTIONS": "A bill of exchange is drawn by Ram in Germany (interest rate 20%) and accepted by Rahul, payable in France (interest rate 5%). After being endorsed in India, the bill is dishonoured. If the holder files a case against Rahul in India, what rate of\ninterest should the court apply?",
        "OPTION 1": "0.05",
        "OPTION 2": "0.2",
        "OPTION 3": "RBI's notified rate",
        "OPTION 4": "Rate as per Indian Contract Act",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is '0.05'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 346,
        "QUESTIONS": "When is a bill of exchange considered to be accepted?",
        "OPTION 1": "When the drawer signs it",
        "OPTION 2": "When the payee acknowledges it",
        "OPTION 3": "When the drawee signs it and delivers it or\nnotifies the holder",
        "OPTION 4": "When it is endorsed by the bank",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'When the drawee signs it and delivers it or\nnotifies the holder'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 347,
        "QUESTIONS": "How can a partnership at will be dissolved?",
        "OPTION 1": "Automatically after 5 years",
        "OPTION 2": "By mutual agreement\nonly",
        "OPTION 3": "By court order only",
        "OPTION 4": "By notice from any partner",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'By notice from any partner'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 348,
        "QUESTIONS": "A secret partner is:",
        "OPTION 1": "Not known to the firm",
        "OPTION 2": "Not known to the public",
        "OPTION 3": "Not known to the\npartners",
        "OPTION 4": "Known to the government\nonly",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Not known to the public'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 349,
        "QUESTIONS": "The liability of a secret partner is:",
        "OPTION 1": "Limited to the amount of\ncapital contributed",
        "OPTION 2": "Limited and private",
        "OPTION 3": "Unlimited, like other\npartners",
        "OPTION 4": "Not applicable, as he is not\npublicly known",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Unlimited, like other\npartners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 350,
        "QUESTIONS": "Which of the following is true regarding remuneration to a partner?",
        "OPTION 1": "Every partner is entitled to fixed monthly remuneration",
        "OPTION 2": "A partner is not entitled to remuneration for participating in business\nconduct",
        "OPTION 3": "Only senior partners get remuneration",
        "OPTION 4": "Remuneration is paid out of capital",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'A partner is not entitled to remuneration for participating in business\nconduct'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 351,
        "QUESTIONS": "When must a firm indemnify a partner?",
        "OPTION 1": "For payments or liabilities incurred in ordinary business\nor in emergencies",
        "OPTION 2": "For any personal expense",
        "OPTION 3": "For business-related losses only when\nprofits are high",
        "OPTION 4": "Only when partner is managing partner",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'For payments or liabilities incurred in ordinary business\nor in emergencies'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 352,
        "QUESTIONS": "According to Section 34, when a partner is adjudicated insolvent, he:",
        "OPTION 1": "Continues as a partner until the firm is dissolved",
        "OPTION 2": "Ceases to be a partner from the date of the adjudication order",
        "OPTION 3": "Ceases to be a partner from the date the partnership was\nformed",
        "OPTION 4": "Can continue in the firm with limited liability",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Ceases to be a partner from the date of the adjudication order'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 353,
        "QUESTIONS": "After attaining majority, the minor must:",
        "OPTION 1": "File a case in court to stay in the firm",
        "OPTION 2": "Give notice to the Registrar regarding his\ndecision",
        "OPTION 3": "Notify only the other partners",
        "OPTION 4": "Do nothing; the law decides for him",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Give notice to the Registrar regarding his\ndecision'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 354,
        "QUESTIONS": "According to Section 48, losses, including capital deficiencies, are to be paid:",
        "OPTION 1": "Only by the managing partner",
        "OPTION 2": "Out of profits, then capital, then by partners\nindividually",
        "OPTION 3": "Equally by all partners regardless of profit-\nsharing",
        "OPTION 4": "Only out of capital",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Out of profits, then capital, then by partners\nindividually'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 355,
        "QUESTIONS": "The residue, if any remains after all payments, is:",
        "OPTION 1": "Transferred to government\nrevenue",
        "OPTION 2": "Paid to senior partner\nonly",
        "OPTION 3": "Distributed equally\namong partners",
        "OPTION 4": "Divided in profit-sharing\nratios",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Divided in profit-sharing\nratios'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 356,
        "QUESTIONS": "Which of the following best describes the legal nature of an LLP?",
        "OPTION 1": "Not a legal entity, only a contractual arrangement",
        "OPTION 2": "Separate legal entity from its partners",
        "OPTION 3": "Extension of a partner\u2019s personal\nbusiness",
        "OPTION 4": "Same as a proprietorship",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Separate legal entity from its partners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 357,
        "QUESTIONS": "Which of the following is not considered a body corporate under the LLP Act?",
        "OPTION 1": "Company incorporated outside\nIndia",
        "OPTION 2": "Co-operative society",
        "OPTION 3": "LLP registered under\nthe Act",
        "OPTION 4": "Company under\nCompanies Act, 1956",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Co-operative society'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 358,
        "QUESTIONS": "Which of the following disqualifies a person from becoming a partner in an LLP?",
        "OPTION 1": "Being a retired government\nemployee",
        "OPTION 2": "Being an undischarged\ninsolvent",
        "OPTION 3": "Being a partner in\nanother LLP",
        "OPTION 4": "Being a non-resident\nIndian",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Being an undischarged\ninsolvent'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 359,
        "QUESTIONS": "According to Rule 9, a person cannot be appointed as a designated partner if:",
        "OPTION 1": "He is already a partner in another LLP",
        "OPTION 2": "He is under 25 years of age",
        "OPTION 3": "He has been adjudged insolvent within the last five years",
        "OPTION 4": "He has more than one source of income",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'He has been adjudged insolvent within the last five years'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 360,
        "QUESTIONS": "Who must sign the Statement of Account and Solvency of an LLP?",
        "OPTION 1": "Any one of the partners",
        "OPTION 2": "Auditor of the LLP",
        "OPTION 3": "All shareholders",
        "OPTION 4": "Designated partners",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Designated partners'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 361,
        "QUESTIONS": "Which of the following is NOT a valid ground recognized for lifting the corporate veil according to the passage?",
        "OPTION 1": "Simplifying financial reporting requirements",
        "OPTION 2": "Preventing fraud and improper conduct",
        "OPTION 3": "Determining the true character of a company\nin wartime",
        "OPTION 4": "Preventing tax evasion",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Simplifying financial reporting requirements'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 362,
        "QUESTIONS": "If a person is already a nominee in one OPC and becomes a member in another OPC due to the death of its member, how long does the person have to restore\neligibility?",
        "OPTION 1": "90 days",
        "OPTION 2": "120 days",
        "OPTION 3": "180 days",
        "OPTION 4": "365 days",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '180 days'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 363,
        "QUESTIONS": "As per Section 32, when must the Red Herring Prospectus be filed with the Registrar?",
        "OPTION 1": "At least 7 days before the offer opens",
        "OPTION 2": "After the offer is closed",
        "OPTION 3": "At least 3 days before the opening of the subscription list and\nthe offer",
        "OPTION 4": "Simultaneously with the final prospectus",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'At least 3 days before the opening of the subscription list and\nthe offer'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 364,
        "QUESTIONS": "Which of the following must be highlighted in the final prospectus when compared to the Red Herring Prospectus?",
        "OPTION 1": "All financial ratios",
        "OPTION 2": "Variations between the RHP and the final\nprospectus",
        "OPTION 3": "Director resignations",
        "OPTION 4": "Auditor's observations",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Variations between the RHP and the final\nprospectus'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 365,
        "QUESTIONS": "What must be printed or stamped prominently on a duplicate share certificate?",
        "OPTION 1": "\u201cOriginal Share Certificate\u201d",
        "OPTION 2": "\u201cCertified Copy\u201d",
        "OPTION 3": "\u201cDuplicate Issued in Lieu of Share\nCertificate No. \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u201d",
        "OPTION 4": "\u201cValid Copy\u201d",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is '\u201cDuplicate Issued in Lieu of Share\nCertificate No. \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u201d'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 366,
        "QUESTIONS": "Under Section 41 of the Companies Act, 2013, a company can issue Global\nDepository Receipts (GDRs) in:",
        "OPTION 1": "Indian Rupees only",
        "OPTION 2": "Foreign currency only",
        "OPTION 3": "Either Indian or\nforeign currency",
        "OPTION 4": "Cryptocurrency",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Foreign currency only'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 367,
        "QUESTIONS": "As per Section 92 of the Companies Act, 2013, every company is required to\nprepare its Annual Return in which form?",
        "OPTION 1": "AOC-4",
        "OPTION 2": "MGT-9",
        "OPTION 3": "MGT-7",
        "OPTION 4": "PAS-3",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'MGT-7'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 368,
        "QUESTIONS": "In a public company with 4999 members, what is the minimum quorum required?",
        "OPTION 1": "5 members personally present",
        "OPTION 2": "15 members personally\npresent",
        "OPTION 3": "30 members personally\npresent",
        "OPTION 4": "50 members personally\npresent",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '15 members personally\npresent'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    },
    {
        "SL NO": 369,
        "QUESTIONS": "As per Section 153 of the Companies Act, 2013, no individual shall be appointed as a director of a company unless:",
        "OPTION 1": "He holds at least 1% shares in the company",
        "OPTION 2": "He is a resident of India",
        "OPTION 3": "He has completed a course from the Indian Institute of Corporate Affairs",
        "OPTION 4": "He has been allotted a Director Identification Number (DIN) or such other number as may be\nprescribed",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'He has been allotted a Director Identification Number (DIN) or such other number as may be\nprescribed'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 370,
        "QUESTIONS": "Both Financial Controllers and Operational Controllers are involved in:",
        "OPTION 1": "Legal compliance and contract negotiation",
        "OPTION 2": "Budgeting, forecasting, and financial reporting",
        "OPTION 3": "Customer relationship management",
        "OPTION 4": "Product development",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Budgeting, forecasting, and financial reporting'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 371,
        "QUESTIONS": "Which of the following attributes of Emotional Intelligence involves the ability to\ncontrol impulsive feelings and behaviors?",
        "OPTION 1": "Social awareness",
        "OPTION 2": "Self-awareness",
        "OPTION 3": "Relationship\nmanagement",
        "OPTION 4": "Self-management",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Self-management'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 372,
        "QUESTIONS": "Corporate responsibility refers to a business\u2019s responsibilities towards:",
        "OPTION 1": "Only government regulations",
        "OPTION 2": "Its employees, customers/clients, and sometimes board of\ndirectors",
        "OPTION 3": "Only its shareholders",
        "OPTION 4": "Its marketing and branding strategy",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Its employees, customers/clients, and sometimes board of\ndirectors'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 373,
        "QUESTIONS": "Which of the following is not typically considered a Key Success Factor (KSF)?",
        "OPTION 1": "Cost",
        "OPTION 2": "Innovation",
        "OPTION 3": "Time",
        "OPTION 4": "Tax depreciation",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Tax depreciation'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 374,
        "QUESTIONS": "Which of the following best reflects integrity in decision-making?",
        "OPTION 1": "Making decisions based on popularity",
        "OPTION 2": "Acting to gain material benefit from every\nopportunity",
        "OPTION 3": "Taking decisions fairly, free from\npersonal gain motives",
        "OPTION 4": "Avoiding responsibilities to maintain neutrality",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Taking decisions fairly, free from\npersonal gain motives'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 375,
        "QUESTIONS": "Which of the following activities does not fall under the definition of a\n\"manufacturing process\" under Section 2(k)?",
        "OPTION 1": "Conducting a market survey",
        "OPTION 2": "Printing by lithography",
        "OPTION 3": "Constructing a ship",
        "OPTION 4": "Oiling or packing an article\nfor sale",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Conducting a market survey'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 376,
        "QUESTIONS": "If the employer finds the gratuity claim admissible, which form must be issued to\nthe applicant?",
        "OPTION 1": "Form J",
        "OPTION 2": "Form L",
        "OPTION 3": "Form M",
        "OPTION 4": "Form G",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Form L'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 377,
        "QUESTIONS": "Gratuity is calculated for every completed year of service or part thereof in excess\nof how many months, at the rate of wages last drawn?",
        "OPTION 1": "Three months",
        "OPTION 2": "Four months",
        "OPTION 3": "Six months",
        "OPTION 4": "Nine months",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Six months'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 378,
        "QUESTIONS": "Under Section 6, who has the authority to fix the minimum rate of wages?",
        "OPTION 1": "Trade Union",
        "OPTION 2": "Central Advisory Board",
        "OPTION 3": "Appropriate\nGovernment",
        "OPTION 4": "Labour Commissioner",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Appropriate\nGovernment'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 379,
        "QUESTIONS": "According to Section 58, no suit or prosecution shall lie against the appropriate\ngovernment or its officers if the act was:",
        "OPTION 1": "Done without any official\npermission",
        "OPTION 2": "Done negligently",
        "OPTION 3": "Done with malafide\nintention",
        "OPTION 4": "Done in good faith under\nthe Code",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Done in good faith under\nthe Code'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 380,
        "QUESTIONS": "The minimum bonus must be paid to an employee who has worked for at least how\nmany days in an accounting year?",
        "OPTION 1": "15 days",
        "OPTION 2": "30 days",
        "OPTION 3": "45 days",
        "OPTION 4": "60 days",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is '30 days'. This follows the legal principles established in the relevant Indian statutes governing this subject matter."
    },
    {
        "SL NO": 381,
        "QUESTIONS": "Which of the following is not included in the definition of Key Managerial\nPersonnel under Section 2(51) of the Companies Act, 2013?",
        "OPTION 1": "Chief Executive Officer",
        "OPTION 2": "Chief Financial Officer",
        "OPTION 3": "Independent Director",
        "OPTION 4": "Company Secretary",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Independent Director'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 382,
        "QUESTIONS": "Which section of the Companies Act, 2013 provides a member the right to\nrequisition an extraordinary general meeting?",
        "OPTION 1": "Section 111",
        "OPTION 2": "Section 105",
        "OPTION 3": "Section 100",
        "OPTION 4": "Section 94",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Section 100'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 383,
        "QUESTIONS": "According to Section 2(55) of the Companies Act, 2013, who are deemed to be the first members of a company?",
        "OPTION 1": "The directors appointed on incorporation",
        "OPTION 2": "Subscribers to the\nMemorandum of the company",
        "OPTION 3": "The auditors of the company",
        "OPTION 4": "The first employees of the company",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Subscribers to the\nMemorandum of the company'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 384,
        "QUESTIONS": "Which of the following is essential for a person to be considered a member of a company under Section 2(55)?",
        "OPTION 1": "Being a shareholder without entry in the register of members",
        "OPTION 2": "Agreeing orally to become a member",
        "OPTION 3": "Agreeing in writing and having the name entered in the register\nof members",
        "OPTION 4": "Having a verbal agreement with the company",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Agreeing in writing and having the name entered in the register\nof members'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 385,
        "QUESTIONS": "A premises where a manufacturing process is carried on without the aid of power and where how many or more workers are employed is considered a factory?",
        "OPTION 1": "5 or more workers",
        "OPTION 2": "10 or more workers",
        "OPTION 3": "15 or more workers",
        "OPTION 4": "20 or more workers",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is '20 or more workers'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 386,
        "QUESTIONS": "Which of the following is excluded from the definition of factory as per Section 2(m)?",
        "OPTION 1": "Mobile unit belonging to the armed forces of the Union",
        "OPTION 2": "Premises where 15 workers carry out manufacturing with\npower",
        "OPTION 3": "Premises where 25 workers carry out manufacturing without\npower",
        "OPTION 4": "Factory with continuous production process",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Mobile unit belonging to the armed forces of the Union'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 387,
        "QUESTIONS": "Under Section 11 of the Factories Act, every factory must be kept clean and free from:",
        "OPTION 1": "Noise pollution",
        "OPTION 2": "Excessive lighting",
        "OPTION 3": "Effluvia from drains, privies, or other\nnuisances",
        "OPTION 4": "Fire hazards",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Effluvia from drains, privies, or other\nnuisances'. Section 11 of the Factories Act mandates cleanliness. It specifically requires that accumulated dirt and refuse be removed daily, and floors be washed or disinfected at least once every week."
    },
    {
        "SL NO": 388,
        "QUESTIONS": "How often must the floors of every workroom be cleaned as per Section 11?",
        "OPTION 1": "Daily",
        "OPTION 2": "Once a month",
        "OPTION 3": "Once in every week",
        "OPTION 4": "Once in every six months",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Once in every week'. Section 11 of the Factories Act mandates cleanliness. It specifically requires that accumulated dirt and refuse be removed daily, and floors be washed or disinfected at least once every week."
    },
    {
        "SL NO": 389,
        "QUESTIONS": "As per Section 11, effective \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0must be provided to remove water from\nthe premises.",
        "OPTION 1": "Drainage",
        "OPTION 2": "Air conditioning",
        "OPTION 3": "Lighting",
        "OPTION 4": "Plumbing",
        "ANSWER CODE": "l",
        "EXPLANATION": "The correct answer is ''. Section 11 of the Factories Act mandates cleanliness. It specifically requires that accumulated dirt and refuse be removed daily, and floors be washed or disinfected at least once every week."
    },
    {
        "SL NO": 390,
        "QUESTIONS": "Latrines and urinals should be located so that they are:",
        "OPTION 1": "Hidden from supervisors",
        "OPTION 2": "In the basement only",
        "OPTION 3": "Conveniently situated and accessible to\nworkers at all times",
        "OPTION 4": "Placed near the canteen only",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'Conveniently situated and accessible to\nworkers at all times'. Under Section 19, factories must provide sufficient latrine and urinal accommodation. These must be separate for male and female workers, adequately lighted, ventilated, and maintained in a clean condition."
    },
    {
        "SL NO": 391,
        "QUESTIONS": "As per Section 19 of the Factories Act, every factory must provide:",
        "OPTION 1": "Separate lunch rooms for workers",
        "OPTION 2": "Sufficient latrine and urinal accommodation of\nprescribed types",
        "OPTION 3": "Medical beds in restrooms",
        "OPTION 4": "Personal hygiene kits for all workers",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Sufficient latrine and urinal accommodation of\nprescribed types'. Under Section 19, factories must provide sufficient latrine and urinal accommodation. These must be separate for male and female workers, adequately lighted, ventilated, and maintained in a clean condition."
    },
    {
        "SL NO": 392,
        "QUESTIONS": "Under Section 105 of the Companies Act, 2013, a proxy can be appointed by a:",
        "OPTION 1": "Director",
        "OPTION 2": "Member",
        "OPTION 3": "Creditor",
        "OPTION 4": "Auditor",
        "ANSWER CODE": "2",
        "EXPLANATION": "The correct answer is 'Member'. Section 105 of the Companies Act, 2013, provides the legal framework for the appointment of a proxy, allowing a person to represent a member at a meeting."
    },
    {
        "SL NO": 393,
        "QUESTIONS": "Which section of the Companies Act, 2013 deals specifically with proxies?",
        "OPTION 1": "Section 101",
        "OPTION 2": "Section 107",
        "OPTION 3": "Section 106",
        "OPTION 4": "Section 105",
        "ANSWER CODE": "4",
        "EXPLANATION": "The correct answer is 'Section 105'. This requirement is a statutory mandate under the Factories Act, 1948, which focuses on the health, safety, and welfare of workers in an industrial environment."
    },
    {
        "SL NO": 394,
        "QUESTIONS": "Which of the following businesses is generally considered an \"ordinary business\"\nat an AGM?",
        "OPTION 1": "Appointment of statutory\nauditor",
        "OPTION 2": "Change in Articles of\nAssociation",
        "OPTION 3": "Issue of bonus shares",
        "OPTION 4": "Approval of mergers",
        "ANSWER CODE": "1",
        "EXPLANATION": "The correct answer is 'Appointment of statutory\nauditor'. At an Annual General Meeting (AGM), only four items are 'Ordinary Business': adoption of accounts, declaration of dividends, appointment of directors, and appointment of auditors. Everything else is 'Special Business'."
    },
    {
        "SL NO": 395,
        "QUESTIONS": "Which of the following companies is not required to hold an AGM?",
        "OPTION 1": "Private Company",
        "OPTION 2": "Public Company",
        "OPTION 3": "One Person Company\n(OPC)",
        "OPTION 4": "Listed Company",
        "ANSWER CODE": "3",
        "EXPLANATION": "The correct answer is 'One Person Company\n(OPC)'. This is a compliance requirement under the Companies Act, 2013, designed to ensure transparency and proper corporate governance during shareholder meetings."
    }
]
          },
          {
            label: "Financial Accounting",
            questions: [
            {
        "SL NO":2,
        "QUESTIONS":"A resource owned by the business with purpose of using it for\ngenerating future profit, is known as",
        "OPTION 1":"Capital",
        "OPTION 2":"Asset",
        "OPTION 3":"Liability",
        "OPTION 4":"Surplus",
        "ANSWER CODE":2
    },
    {
        "SL NO":3,
        "QUESTIONS":"Outward Invoice issued is a source document of",
        "OPTION 1":"Purchase Book",
        "OPTION 2":"Sales Book",
        "OPTION 3":"Return Inward Book",
        "OPTION 4":"Return Outward Book",
        "ANSWER CODE":2
    },
    {
        "SL NO":4,
        "QUESTIONS":"Which of the following is of capital nature?",
        "OPTION 1":"Commission on purchases",
        "OPTION 2":"Cost of repairs",
        "OPTION 3":"Rent of factory",
        "OPTION 4":"Wages paid for\ninstallation of machinery",
        "ANSWER CODE":4
    },
    {
        "SL NO":5,
        "QUESTIONS":"Which of the following is not a Fundamental Accounting\nAssumption?",
        "OPTION 1":"Going Concern",
        "OPTION 2":"Consistency",
        "OPTION 3":"Accrual",
        "OPTION 4":"Materiality",
        "ANSWER CODE":4
    },
    {
        "SL NO":6,
        "QUESTIONS":"An obligation which may or may not materialize is a\/an  .",
        "OPTION 1":"Loss",
        "OPTION 2":"Asset",
        "OPTION 3":"Contingent Liability",
        "OPTION 4":"None of the above",
        "ANSWER CODE":3
    },
    {
        "SL NO":7,
        "QUESTIONS":"Which of the following is an example of Capital Expenditure?",
        "OPTION 1":"Inventory of raw materials, work-in-progress and finished\ngoods",
        "OPTION 2":"Insurance premium",
        "OPTION 3":"Taxes and legal expenses",
        "OPTION 4":"None of the above",
        "ANSWER CODE":4
    },
    {
        "SL NO":8,
        "QUESTIONS":"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0is specially suited to mines, oil wells, quarries,\nsandpits and similar assets of a wasting character.",
        "OPTION 1":"Depletion",
        "OPTION 2":"Depreciation",
        "OPTION 3":"Amortisation",
        "OPTION 4":"Dilapidation",
        "ANSWER CODE":1
    },
    {
        "SL NO":9,
        "QUESTIONS":"Which of the following account has a credit balance?",
        "OPTION 1":"Plant and Equipment A\/c",
        "OPTION 2":"Loans A\/c",
        "OPTION 3":"Purchase A\/c",
        "OPTION 4":"None of the above",
        "ANSWER CODE":2
    },
    {
        "SL NO":10,
        "QUESTIONS":"Which of the following is\/are revenue expenditure?",
        "OPTION 1":"Consumable Stores",
        "OPTION 2":"Taxes and legal\nexpenses",
        "OPTION 3":"Rent of factory\nbuilding",
        "OPTION 4":"All of Above",
        "ANSWER CODE":4
    },
    {
        "SL NO":11,
        "QUESTIONS":"Which of the following purpose is served from the preparation of Trial Balance?",
        "OPTION 1":"To check the arithmetical accuracy of the recorded transactions",
        "OPTION 2":"To ascertain the balance of any ledger account",
        "OPTION 3":"To facilitate the preparation of final accounts promptly",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4
    },
    {
        "SL NO":12,
        "QUESTIONS":"The basic principles of   concept is that business is assumed to\nexist for an indefinite period \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Going Concern",
        "OPTION 2":"Business Entity",
        "OPTION 3":"Money Measurement",
        "OPTION 4":"None of the above",
        "ANSWER CODE":1
    },
    {
        "SL NO":13,
        "QUESTIONS":"Purchase of a laptop for office use wrongly debited to Purchase Account. It is an error of \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Omission",
        "OPTION 2":"Commission",
        "OPTION 3":"Principle",
        "OPTION 4":"Misposting",
        "ANSWER CODE":3
    },
    {
        "SL NO":14,
        "QUESTIONS":"Which of the following book is both a journal and a ledger?",
        "OPTION 1":"Cash Book",
        "OPTION 2":"Sales Day Book",
        "OPTION 3":"Bills Receivable Book",
        "OPTION 4":"Journal Proper",
        "ANSWER CODE":1
    },
    {
        "SL NO":15,
        "QUESTIONS":"Original cost of a machine is \u20b9 1,50,000, residual value \u20b910,000, if depreciation is charged @ 10% per annum under WDV method then depreciation for 3rd year will be\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"12240",
        "OPTION 2":"11340",
        "OPTION 3":"12150",
        "OPTION 4":"14000",
        "ANSWER CODE":3
    },
    {
        "SL NO":16,
        "QUESTIONS":"Cost of Machine B is \u20b990,000, Expenses incurred at the time of purchase to be capitalized is \u20b910,000. Estimated Residual Value of Machine B is \u20b920,000. Expected Useful Life is 8 years.Compute the amount depreciations under SLM method.",
        "OPTION 1":"10000",
        "OPTION 2":"20000",
        "OPTION 3":"15000",
        "OPTION 4":"5000",
        "ANSWER CODE":1
    },
    {
        "SL NO":17,
        "QUESTIONS":"If Capital on 01.01.2023 was \u20b924,000. Capital on 31.12.2023 is was \u20b912,000. Profit \/(Loss) during the year was \u20b96,000 and Fresh Capital introduced was \u20b91,200 Then the amount of drawings was\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"7200",
        "OPTION 2":"12000",
        "OPTION 3":"25200",
        "OPTION 4":"19200",
        "ANSWER CODE":4
    },
    {
        "SL NO":18,
        "QUESTIONS":"Journal entry of wages \u20b910,000 paid for installation of machinery will be \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Dr.Wages A\/c and Cr. Cash A\/c with \u20b910,000",
        "OPTION 2":"Dr.Machinery A\/c and Cr. Cash A\/c with\n\u20b910,000",
        "OPTION 3":"Dr.Machinery repairs A\/c and Cr. Cash A\/c with \u20b910,000",
        "OPTION 4":"None of the above",
        "ANSWER CODE":2
    },
    {
        "SL NO":19,
        "QUESTIONS":"Credit balance of a nominal account shows \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Expenses of the business",
        "OPTION 2":"Loss in the business",
        "OPTION 3":"Income in the business",
        "OPTION 4":"Asset of the business",
        "ANSWER CODE":3
    },
    {
        "SL NO":20,
        "QUESTIONS":"Which of the following will be recorded as Contra Entry in a Cash Book?",
        "OPTION 1":"\u20b91,000 withdrawn from bank for personal use",
        "OPTION 2":"Cheque of \u20b92,000 received from Mr.X lodged into bank on\nthe same day",
        "OPTION 3":"Cheque of \u20b93,000 received before from Mr.Y and now lodged\ninto bank",
        "OPTION 4":"A customer directly deposited \u20b94,000 in the bank account of the\nbusiness",
        "ANSWER CODE":3
    },
    {
        "SL NO":21,
        "QUESTIONS":"Goods purchased costing \u20b960,000 and cash paid \u20b945,000 after receipt of a cash discount of \u20b99,000. What is the percentage of\ntrade discount got?",
        "OPTION 1":"0.15",
        "OPTION 2":"0.1",
        "OPTION 3":"0.075",
        "OPTION 4":"0.25",
        "ANSWER CODE":2
    },
    {
        "SL NO":22,
        "QUESTIONS":"Which of the following errors in an error of omission?",
        "OPTION 1":"Sale \u20b95,000 written in the purchase journal",
        "OPTION 2":"Wages paid to Shyam debited to his account",
        "OPTION 3":"The total of the sales journal has not been posted to the sales\naccount",
        "OPTION 4":"None of the above",
        "ANSWER CODE":3
    },
    {
        "SL NO":23,
        "QUESTIONS":"A credit sale of goods to Amir, worth \u20b9600 was recorded in\nPurchase Book. In the rectification entry \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Amir will be debited by\n\u20b9600",
        "OPTION 2":"Purchase will be\ndebited by \u20b9600",
        "OPTION 3":"Amir will be debited\nby \u20b91,200",
        "OPTION 4":"Sales will be credited\nby \u20b91,200",
        "ANSWER CODE":3
    },
    {
        "SL NO":24,
        "QUESTIONS":"Purchase of machinery worth \u20b95,000 was omitted from accounts.\nThe rectification entry is \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Purchase A\/c will be\ndebited",
        "OPTION 2":"Cash A\/c will be\ncredited",
        "OPTION 3":"Machinery A\/c will be\ncredited",
        "OPTION 4":"None of the above",
        "ANSWER CODE":2
    },
    {
        "SL NO":25,
        "QUESTIONS":"Goods purchased from A for \u20b92,000 passed through sales book. The rectification of this error results in \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Decrease in Gross Profit",
        "OPTION 2":"No effect on Gross Profit",
        "OPTION 3":"Increase in Gross Profit",
        "OPTION 4":"Increase in Sundry Debtors",
        "ANSWER CODE":1
    },
    {
        "SL NO":26,
        "QUESTIONS":"The Accommodation bill is drawn",
        "OPTION 1":"to finance actual purchase or sale of goods.",
        "OPTION 2":"to facilitate trade transmission.",
        "OPTION 3":"when both parties are in need of funds.",
        "OPTION 4":"None of the above",
        "ANSWER CODE":3
    },
    {
        "SL NO":27,
        "QUESTIONS":"If any stock is taken by a co-venturer, it will be treated as",
        "OPTION 1":"an income of the joint venture",
        "OPTION 2":"an expense of the joint venture",
        "OPTION 3":"to be ignored from joint venture",
        "OPTION 4":"it will be treated in the\npersonal books of the co-venturer",
        "ANSWER CODE":1
    },
    {
        "SL NO":28,
        "QUESTIONS":"Kuntal draws a bill on shyam for Rs. 7,000.Kuntal endorsed it to Ram. Ram endorsed it to Rahim. The payee of the bill will be:",
        "OPTION 1":"Kuntal",
        "OPTION 2":"Ram",
        "OPTION 3":"Shyam",
        "OPTION 4":"Rahim",
        "ANSWER CODE":4
    },
    {
        "SL NO":29,
        "QUESTIONS":"A and B purchased a piece of land for \u20b930,000 and sold it for\n\u20b960,000 in 2022.\nOriginally A had contributed \u20b912,000 and B \u20b98,000. The profit on venture will be\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"30000",
        "OPTION 2":"20000",
        "OPTION 3":"60000",
        "OPTION 4":"10000",
        "ANSWER CODE":1
    },
    {
        "SL NO":30,
        "QUESTIONS":"Which of the following is\/ are the basic features of a Joint Venture",
        "OPTION 1":"The profit or loss on joint venture is shared between the co-venturers in the agreed ratio",
        "OPTION 2":"The co-venturers may or may not contribute initial capital",
        "OPTION 3":"The JV is dissolved once the purpose of the business is over",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4
    },
    {
        "SL NO":31,
        "QUESTIONS":"The person to whom bill is endorsed is known as\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Endorsee",
        "OPTION 2":"Drawee",
        "OPTION 3":"Drawer",
        "OPTION 4":"None of the above",
        "ANSWER CODE":1
    },
    {
        "SL NO":32,
        "QUESTIONS":"A and B enter into a joint venture sharing profit and losses in the ratio of 3:2. A purchased goods costing \u20b92,00,000. B sold 95% goods for \u20b92,50,000. A is entitled to get 1% commission on purchase and B is entitled to get 5% commission on sales. A drew a bill on B for an amount equivalent to 80% of original cost of goods. A got it discounted at \u20b91,50,000. What is A's share of profit?",
        "OPTION 1":"15300",
        "OPTION 2":"21300",
        "OPTION 3":"18900",
        "OPTION 4":"15000",
        "ANSWER CODE":2
    },
    {
        "SL NO":33,
        "QUESTIONS":"Which of the following commission is allowed by the consignor to the consignee to encourage the consignee for putting-up hard work in introducing new product in the market?",
        "OPTION 1":"Del-credere Commission",
        "OPTION 2":"Over-riding Commission",
        "OPTION 3":"Hard work Commission",
        "OPTION 4":"Ordinary Commission",
        "ANSWER CODE":2
    },
    {
        "SL NO":34,
        "QUESTIONS":"X draws a bill on Y for \u20b9 1,80,000 for mutual accommodation in the ratio of 2:1. X got it discounted for\n\u20b91,69,200 and remitted 1\/3rd of the proceeds to Y. How much money should be remitted by X to Y at the time of maturity so as to enable Y to honour the bill?",
        "OPTION 1":"120000",
        "OPTION 2":"115200",
        "OPTION 3":"116800",
        "OPTION 4":"120400",
        "ANSWER CODE":1
    },
    {
        "SL NO":35,
        "QUESTIONS":"Raju draws a bill on Sampat on 25th October, 2021 for 90 days,\nthe maturity date of the bill will be\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"27th January, 2022",
        "OPTION 2":"26th January, 2022",
        "OPTION 3":"25th January, 2022",
        "OPTION 4":"28th January, 2022",
        "ANSWER CODE":3
    },
    {
        "SL NO":36,
        "QUESTIONS":"Which class of account is Consignment Account?",
        "OPTION 1":"Personal Account",
        "OPTION 2":"Real Account",
        "OPTION 3":"Representative\nPersonal Account",
        "OPTION 4":"Nominal Account",
        "ANSWER CODE":4
    },
    {
        "SL NO":37,
        "QUESTIONS":"On dishonor of a bill of exchange that has been discounted, noting\ncharges are initially paid by  .",
        "OPTION 1":"Bank",
        "OPTION 2":"Drawer",
        "OPTION 3":"Drawee",
        "OPTION 4":"Acceptor",
        "ANSWER CODE":1
    },
    {
        "SL NO":38,
        "QUESTIONS":"Miss V draws a genuine trade bill of \u20b925,000 for 6 months on Mr.\nM. After holding the bill for 1.5 months, as a result of unexpected requirement of cash, she immediately discounts the bill with the bank@ 10% p.a. The amount of the discount on bill\nis\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"1250",
        "OPTION 2":"2500",
        "OPTION 3":"937.5",
        "OPTION 4":"625",
        "ANSWER CODE":3
    },
    {
        "SL NO":39,
        "QUESTIONS":"On January 01, 2023, Mr. S drew a six months bill on Mr. H for\n\u20b915,000 for mutual accommodation and the bill was duly accepted by Mr. H. Mr. S discounted the bill on the same day with a bank at 10% p.a. and remitted one third proceeds to Mr. H. The discount to be borne by Mr. S is\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"1000",
        "OPTION 2":"500",
        "OPTION 3":"750",
        "OPTION 4":"1250",
        "ANSWER CODE":2
    },
    {
        "SL NO":40,
        "QUESTIONS":"A proforma invoice is sent by \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Consignee to Consignor",
        "OPTION 2":"Consignor to\nConsignee",
        "OPTION 3":"Debtors to Consignee",
        "OPTION 4":"Debtors Consignor",
        "ANSWER CODE":2
    },
    {
        "SL NO":41,
        "QUESTIONS":"The nature of Consignment A\/c and Consignee's A\/c will be",
        "OPTION 1":"nominal and personal\nrespectively",
        "OPTION 2":"real and nominal\nrespectively",
        "OPTION 3":"personal and real\nrespectively",
        "OPTION 4":"nominal and real\nrespectively",
        "ANSWER CODE":1
    },
    {
        "SL NO":42,
        "QUESTIONS":"K of Kolkata sends out 400 bags of jute to T of  Tamilnadu costing\n\u20b9200 each. Consignor expenses \u20b92,000. Y's non-selling expenses is\n\u20b92,000 and selling expenses is \u20b91,000. 300 bags were sold by Y. Value of consignment stock is\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"20400",
        "OPTION 2":"20200",
        "OPTION 3":"22000",
        "OPTION 4":"21000",
        "ANSWER CODE":4
    },
    {
        "SL NO":43,
        "QUESTIONS":"Goods will be sent on consignment at invoice price which is 20% above cost. 1\/5th of the goods costing \u20b960,000 were damaged in transit. Find out invoice price of the goods sent on consignment basis.",
        "OPTION 1":"375000",
        "OPTION 2":"300000",
        "OPTION 3":"360000",
        "OPTION 4":"None of these",
        "ANSWER CODE":3
    },
    {
        "SL NO":44,
        "QUESTIONS":"X of Kolkata sends out 100 boxes to Y of Delhi costing \u20b9200 each. Consignor's expenses : \u20b94,000 . Consignee's expenses: non-selling\n\u20b9900 and selling \u20b9500. 1\/10th of the boxes were lost in transit. 2\/3rd of the boxes received by consignee were sold. The amount of\nconsignment stock will be \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"7200",
        "OPTION 2":"7500",
        "OPTION 3":"7000",
        "OPTION 4":"6000",
        "ANSWER CODE":2
    },
    {
        "SL NO":45,
        "QUESTIONS":"A sends out goods costing \u20b92,00,000 to B. Consignor's expenses\n\u20b95,000. Consignor's expenses in relation to sales \u20b93,000. 4\/5th of goods were sold at 20% above cost. The profit on consignment will be\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"25000",
        "OPTION 2":"31000",
        "OPTION 3":"25200",
        "OPTION 4":"-5000",
        "ANSWER CODE":1
    },
    {
        "SL NO":46,
        "QUESTIONS":"X of Kolkata send out certain goods at cost + 25%. Invoice value of goods sends out \u20b92,00,000. 4\/5th of the goods were sold by consignee at \u20b91,76,000. Commission 2% upto invoice value & 10% of any surplus above invoice value. Amount of commission is",
        "OPTION 1":"4800",
        "OPTION 2":"5200",
        "OPTION 3":"3200",
        "OPTION 4":"1600",
        "ANSWER CODE":1
    },
    {
        "SL NO":47,
        "QUESTIONS":"X of Kolkata send out goods costing                    \u20b9 1,00,000 to Y of Delhi. 3\/5th of the goods were sold by consignee for Rs. 70,000.\nCommission exceeds cost price. The amount of Commission will\nbe:",
        "OPTION 1":"2833",
        "OPTION 2":"2900",
        "OPTION 3":"3000",
        "OPTION 4":"2800",
        "ANSWER CODE":1
    },
    {
        "SL NO":48,
        "QUESTIONS":"Any account sale is the periodical summary statement sent by the\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0to the \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Consignor, Consignee",
        "OPTION 2":"Consignee, Consignor",
        "OPTION 3":"Buyer, Seller",
        "OPTION 4":"Seller, Buyer",
        "ANSWER CODE":2
    },
    {
        "SL NO":49,
        "QUESTIONS":"Account sales \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Have a very particular\nformat",
        "OPTION 2":"Does not have a\nspecific format",
        "OPTION 3":"Must be prepared by\nlaw",
        "OPTION 4":"Given by consignor to\nconsignee",
        "ANSWER CODE":2
    },
    {
        "SL NO":50,
        "QUESTIONS":"X sends out good to Y, costing \u20b91,50,000 to Y. goods are to be sold at cost + 33 1\/3%. The consignor asked consignee to pay an advance for an amount equivalent to 60% of sales value. The amount of advance will be:",
        "OPTION 1":"120000",
        "OPTION 2":"100000",
        "OPTION 3":"150000",
        "OPTION 4":"None of these",
        "ANSWER CODE":1
    },
    {
        "SL NO":51,
        "QUESTIONS":"Which of these accounts is not a part of double entry system?",
        "OPTION 1":"Memorandum A\/c",
        "OPTION 2":"Joint Bank A\/c",
        "OPTION 3":"Joint Venture A\/c",
        "OPTION 4":"Co-venture\u2019s A\/c",
        "ANSWER CODE":1
    },
    {
        "SL NO":52,
        "QUESTIONS":"A purchased goods costing \u20b91,00,000. B sold the goods for\n\u20b91,50,000. Profit sharing ratio between A and B equal. If same sets of books is maintained, what will be the final remittance?",
        "OPTION 1":"B will remit \u20b91,25,000 to A",
        "OPTION 2":"B will remit \u20b91,50,000 to A",
        "OPTION 3":"A will remit \u20b91,00,000 to B",
        "OPTION 4":"B will remit \u20b925,000 to A",
        "ANSWER CODE":1
    },
    {
        "SL NO":53,
        "QUESTIONS":"A and B entered into a joint venture agreement to share the profits and losses in the ratio of 2:1. A supplied 100 ratio sets worth\n\u20b91,00,000 to B incurring expenses of \u20b95,000 for freight and issuance. B sold the 95 ratio sets for \u20b91,20,000. 5 radio sets were taken over by B. The profit a\/loss on venture will\nbe\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Profit of \u20b920,000",
        "OPTION 2":"Profit of \u20b915,000",
        "OPTION 3":"Loss of \u20b920,000",
        "OPTION 4":"Profit of \u20b920,250",
        "ANSWER CODE":4
    },
    {
        "SL NO":54,
        "QUESTIONS":"A purchased goods costing \u20b942,500. B sold goods costing \u20b940,000 at \u20b950,000. Balance goods were taken over by A at \u20b94,000. The profit on joint venture is \u2013",
        "OPTION 1":"11500",
        "OPTION 2":"7500",
        "OPTION 3":"3500",
        "OPTION 4":"Nil",
        "ANSWER CODE":1
    },
    {
        "SL NO":55,
        "QUESTIONS":"A purchased 1000 kg of rice costing \u20b9200 each. Carriage \u20b92,000 insurance \u20b93,000. 4\/5th of the boxes were sold by B at \u20b9250 per boxes. Remaining stock were taken over by B at cost. The amount of stock taken over will be \u2013",
        "OPTION 1":"40000",
        "OPTION 2":"41000",
        "OPTION 3":"50000",
        "OPTION 4":"50200",
        "ANSWER CODE":2
    },
    {
        "SL NO":56,
        "QUESTIONS":"The party who is ordered to pay the amount is known\nas\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Payee",
        "OPTION 2":"Drawer",
        "OPTION 3":"Drawee",
        "OPTION 4":"Endorsee",
        "ANSWER CODE":3
    },
    {
        "SL NO":57,
        "QUESTIONS":"Retirement of a Bill means \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Discounting a Bill",
        "OPTION 2":"Dishonour of a Bill",
        "OPTION 3":"Renewal of a Bill",
        "OPTION 4":"Payment made before\ndue dates",
        "ANSWER CODE":4
    },
    {
        "SL NO":58,
        "QUESTIONS":"X draws a bill on Y for \u20b93000. X endorsed to Z. Y will pay the\namount of the bill to:",
        "OPTION 1":"X",
        "OPTION 2":"Z",
        "OPTION 3":"To himself",
        "OPTION 4":null,
        "ANSWER CODE":2
    },
    {
        "SL NO":59,
        "QUESTIONS":"X sold goods to Y for \u20b93,00,000. \u00bd of the amount will be received in cash and the balance through a B\/R. For what amount X should draw a bill on Y.",
        "OPTION 1":"150000",
        "OPTION 2":"300000",
        "OPTION 3":"100000",
        "OPTION 4":"120000",
        "ANSWER CODE":1
    },
    {
        "SL NO":60,
        "QUESTIONS":"On 1st April, Mr. A sold goods of \u20b910,000 to B and drew a bill for 3 months. Mr. A discounted the bill with bank at 15%. Amount of discount will be?",
        "OPTION 1":"125",
        "OPTION 2":"250",
        "OPTION 3":"375",
        "OPTION 4":"None of these",
        "ANSWER CODE":3
    },
    {
        "SL NO":61,
        "QUESTIONS":"At the end of the accounting year the capital expenditures are\nshown in the \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"assets side of the Balance\nSheet",
        "OPTION 2":"liabilities side of the\nBalance Sheet",
        "OPTION 3":"debit side of the Profit\nand Loss A\/c",
        "OPTION 4":"credit side of the Profit\nand Loss A\/c",
        "ANSWER CODE":1
    },
    {
        "SL NO":62,
        "QUESTIONS":"If average inventory is \u20b91,25,000 and closing inventory is \u20b910,000 less than opening inventory then the value of closing inventory will\nbe",
        "OPTION 1":"135000",
        "OPTION 2":"115000",
        "OPTION 3":"130000",
        "OPTION 4":"120000",
        "ANSWER CODE":4
    },
    {
        "SL NO":63,
        "QUESTIONS":"As on 31st March, 2023 debtors and additional bad debts are\n\u20b98,00,000 and \u20b910,000 respectively. If the provision for bad debts is made at 5% on debtors then amount of such provision will be",
        "OPTION 1":"40000",
        "OPTION 2":"50000",
        "OPTION 3":"39500",
        "OPTION 4":"40500",
        "ANSWER CODE":3
    },
    {
        "SL NO":64,
        "QUESTIONS":"Income and Expenditure Account is a \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Nominal Account",
        "OPTION 2":"Real Account",
        "OPTION 3":"Personal Account",
        "OPTION 4":"Artificial Personal\nAccount",
        "ANSWER CODE":1
    },
    {
        "SL NO":65,
        "QUESTIONS":"Receipts and Payments account is a",
        "OPTION 1":"Nominal Account",
        "OPTION 2":"Real Account",
        "OPTION 3":"Personal Account",
        "OPTION 4":"Artificial Personal\nAccount",
        "ANSWER CODE":2
    },
    {
        "SL NO":66,
        "QUESTIONS":"Income statement of a Charitable Institution is known as",
        "OPTION 1":"Statement of profit and\nloss",
        "OPTION 2":"Receipts and Payments\nAccount",
        "OPTION 3":"Income and\nExpenditure Account",
        "OPTION 4":"Profit and Loss\nAccount",
        "ANSWER CODE":3
    },
    {
        "SL NO":67,
        "QUESTIONS":"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0is similar to the Profit and loss A\/c",
        "OPTION 1":"Income and Expenditure\nA\/c",
        "OPTION 2":"Receipts and Payments\nA\/c",
        "OPTION 3":"Balance Sheet",
        "OPTION 4":"None of the Above",
        "ANSWER CODE":1
    },
    {
        "SL NO":68,
        "QUESTIONS":"From the following details estimate the capital as on 31.03.2023. Capital as on 01.04.2022 - \u20b94,10,000. Drawings \u20b940,000, Profit\nduring the year \u20b950,000",
        "OPTION 1":"410000",
        "OPTION 2":"450000",
        "OPTION 3":"420000",
        "OPTION 4":"410000",
        "ANSWER CODE":3
    },
    {
        "SL NO":69,
        "QUESTIONS":"Which of the following item does not match with receipts and payments account?",
        "OPTION 1":"It is a summarized cash book",
        "OPTION 2":"Transactions are\nrecorded in it on cash basis",
        "OPTION 3":"It records revenue transactions only",
        "OPTION 4":"It serves the purpose of a real account",
        "ANSWER CODE":3
    },
    {
        "SL NO":70,
        "QUESTIONS":"Income & Expenditure A\/c shows subscriptions \u20b910,000; Subscriptions accrued in the beginning of the year and at the end of the year were \u20b91,000 and \u20b91,500 respectively. The figure of subscription received appear in receipts and payments account will be:",
        "OPTION 1":"9500",
        "OPTION 2":"10000",
        "OPTION 3":"10500",
        "OPTION 4":"12000",
        "ANSWER CODE":1
    },
    {
        "SL NO":71,
        "QUESTIONS":"A Charitable Institution has 250 members with a annual subscription of \u20b95,000 each. The subscription received during 2021-22 were \u20b911,25,000, which include Rs. 65,000 and\n\u20b925,000 for the years of 2020-21 and 2022-23 respectively. Amount of outstanding subscription for the 2021-22 will be",
        "OPTION 1":"90000",
        "OPTION 2":"125000",
        "OPTION 3":"215000",
        "OPTION 4":"190000",
        "ANSWER CODE":3
    },
    {
        "SL NO":72,
        "QUESTIONS":"Opening Debtors, Collection from Debtors and Discount Allowed were \u20b93,15,000;\n\u20b918,30,000 and \u20b935,000 respectively. If the closing debtors were 20% of credit sales of the period then closing debtors and credit sales would be \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"\u20b93,51,667 and\n\u20b917,58,333",
        "OPTION 2":"\u20b93,63,333 and\n\u20b918,16,667",
        "OPTION 3":"\u20b93,87,500 and\n\u20b919,37,500",
        "OPTION 4":"\u20b93,10,000 and\n\u20b9 15,50,000",
        "ANSWER CODE":3
    },
    {
        "SL NO":73,
        "QUESTIONS":"In case of a Club, the excess of expenditure over income is called\nas\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Surplus",
        "OPTION 2":"Deficit",
        "OPTION 3":"Capital Fund",
        "OPTION 4":"Investment in Fixed\nAssets",
        "ANSWER CODE":2
    },
    {
        "SL NO":74,
        "QUESTIONS":"Opening Inventory \u20b99,600, Purchases less Return \u20b911,850,Salaries\n\u20b93,200,Wages Rs.750, Commission on Purchases \u20b9200,Carriage Outward \u20b9300,Sales \u20b924,900,Closing Inventory \u20b93,500,Carriage on purchases \u20b91,000. Compute Gross Profit.",
        "OPTION 1":"5000",
        "OPTION 2":"6500",
        "OPTION 3":"3250",
        "OPTION 4":"3200",
        "ANSWER CODE":1
    },
    {
        "SL NO":75,
        "QUESTIONS":"Find out Gross profit \/ Loss :- Purchase\u20b930,000, Sales\u20b915,000, Carriage Inward\u20b92,400, Opening stock\u20b910,000, Purchase\nReturns\u20b91,000,Closing stock\u20b936,000",
        "OPTION 1":"20000",
        "OPTION 2":"10000",
        "OPTION 3":"9600",
        "OPTION 4":"10600",
        "ANSWER CODE":3
    },
    {
        "SL NO":76,
        "QUESTIONS":"Opening Stock \u20b91,50,000, Cash Sales \u20b91,20,000,Credit Sales\n\u20b92,30,000,Closing Stock is Nil. Selling Price is 125% on Cost. Compute Purchases.",
        "OPTION 1":"150000",
        "OPTION 2":"140000",
        "OPTION 3":"130000",
        "OPTION 4":"120000",
        "ANSWER CODE":3
    },
    {
        "SL NO":77,
        "QUESTIONS":"Opening and Closing balance of Debtors are \u20b930,000 and \u20b940,000 respectively. Cash collected from debtors \u20b92,40,000. Discount allowed is \u20b915,000 for prompt payment. Bad Debts \u20b910,000. The total goods sold on credit are \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"255000",
        "OPTION 2":"245000",
        "OPTION 3":"295000",
        "OPTION 4":"275000",
        "ANSWER CODE":4
    },
    {
        "SL NO":78,
        "QUESTIONS":"If a trader's net sales amount to \u20b918,000 and his gross profit is 60% of sales and his net profit is 40% of sales, his expenses\nare\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"10780",
        "OPTION 2":"7200",
        "OPTION 3":"3600",
        "OPTION 4":"1800",
        "ANSWER CODE":3
    },
    {
        "SL NO":79,
        "QUESTIONS":"A firm had a Capital Balance of \u20b9 1,00,000 at the beginning of a year. At the end of the year, the firm has total assets of \u20b91,50,000 and total liabilities of \u20b970,000. If the total withdrawals during the period were \u20b930,000, what was the amount of net profit\/net loss for the year?",
        "OPTION 1":"\u20b910,000 profit",
        "OPTION 2":"\u20b920,000 loss",
        "OPTION 3":"\u20b950,000 loss",
        "OPTION 4":"\u20b910,000 loss",
        "ANSWER CODE":1
    },
    {
        "SL NO":80,
        "QUESTIONS":"Which of the following is fixed asset?",
        "OPTION 1":"Plant and machinery",
        "OPTION 2":"Stock",
        "OPTION 3":"Debtors",
        "OPTION 4":"Cash",
        "ANSWER CODE":1
    },
    {
        "SL NO":81,
        "QUESTIONS":"A Trial balance as at 31st December contains the following information: 12% Bank loan \u20b950,000, Interest paid \u20b93,800, Interest\ndebited to the Profit and Loss Account is:",
        "OPTION 1":"6000",
        "OPTION 2":"2200",
        "OPTION 3":"9800",
        "OPTION 4":"4800",
        "ANSWER CODE":1
    },
    {
        "SL NO":82,
        "QUESTIONS":"The closing capital of Mr. X as on 31.03.2023 was \u20b94,00,000.On 01.04.2022 his capital was Rs. \u20b93,50,000. His net profit for the year ended 31.03.2023 was \u20b91,00,000. He introduced \u20b930,000 as additional capital in February,2023. Find out th amount drawn by Mr.B for his personal expenses?",
        "OPTION 1":"100000",
        "OPTION 2":"80000",
        "OPTION 3":"120000",
        "OPTION 4":"150000",
        "ANSWER CODE":2
    },
    {
        "SL NO":83,
        "QUESTIONS":"In case of a Club, the excess of expenditure over income is called as",
        "OPTION 1":"Surplus",
        "OPTION 2":"Deficit",
        "OPTION 3":"Capital Fund",
        "OPTION 4":"Investment in Fixed\nAssets",
        "ANSWER CODE":2
    },
    {
        "SL NO":84,
        "QUESTIONS":"Donation received for a specific purpose is a\/an \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Asset",
        "OPTION 2":"liabilities",
        "OPTION 3":"Revenue Receipts",
        "OPTION 4":"Capital Receipts",
        "ANSWER CODE":4
    },
    {
        "SL NO":85,
        "QUESTIONS":"Which of the following account is mainly prepared at the time of\ndissolution of the firm",
        "OPTION 1":"Revaluation A\/c",
        "OPTION 2":"Goodwill A\/c",
        "OPTION 3":"Realization A\/c",
        "OPTION 4":"Memorandum\nRevaluation A\/c",
        "ANSWER CODE":3
    },
    {
        "SL NO":86,
        "QUESTIONS":"X and Y are partners with the capital of \u20b950,000 and \u20b930,000 respectively. Interest Payable on Capital is 10% p.a. If the profits earned by the firm is \u20b94,800, what will be the Interest on Capital\nfor X and Y?",
        "OPTION 1":"\u20b95,000 and \u20b93,000",
        "OPTION 2":"\u20b93,000 and \u20b91,800",
        "OPTION 3":"No interest will be paid to the partners",
        "OPTION 4":"None of the above",
        "ANSWER CODE":2
    },
    {
        "SL NO":87,
        "QUESTIONS":"X, Y and Z are partners in the ratio of 3 : 2:1. W is admitted with 1\/6 th share in future profits. Z would retain his\noriginal shares. Find out the new profit sharing ratios of the partners.",
        "OPTION 1":"3:2:1:6",
        "OPTION 2":"12:8:5:5",
        "OPTION 3":"3:2:1:1",
        "OPTION 4":"5:5:8:12",
        "ANSWER CODE":2
    },
    {
        "SL NO":88,
        "QUESTIONS":"A and B are currently partners in a firm sharing Profit\/Loss in the ratio of 4 : 3. A new partner C is admitted and after his admission new profit sharing ratio between A, B and C becomes 5: 3 : 2.\nWhat will be the sacrifice ratio of A and B after admission of C?",
        "OPTION 1":"5:09",
        "OPTION 2":"5:03",
        "OPTION 3":"5:04",
        "OPTION 4":"5:01",
        "ANSWER CODE":1
    },
    {
        "SL NO":89,
        "QUESTIONS":"The share of Profits or Losses of Partners in absence of oral or\nwritten agreement will be \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Equal",
        "OPTION 2":"In the ratio of their\ncapital",
        "OPTION 3":"Agreed Ratio",
        "OPTION 4":"None of the above",
        "ANSWER CODE":1
    },
    {
        "SL NO":90,
        "QUESTIONS":"In absence of specific provision in the Partnership deed at what rate of interest on Capital of the Partners would be allowed?",
        "OPTION 1":"0.08",
        "OPTION 2":"0.1",
        "OPTION 3":"0.06",
        "OPTION 4":"0.11",
        "ANSWER CODE":3
    },
    {
        "SL NO":91,
        "QUESTIONS":"Average Profit  = \u20b93,72,000 Normal rate of return = 12% Total Assets = \u20b968,00,000 Outside liabilities = \u20b942,00,000\nCalculate the value of goodwill under capitalization method.",
        "OPTION 1":"500000",
        "OPTION 2":"600000",
        "OPTION 3":"700000",
        "OPTION 4":"800000",
        "ANSWER CODE":1
    },
    {
        "SL NO":92,
        "QUESTIONS":"The Profits of last 3 years are \u20b942,000, \u20b939,000 and \u20b945,000. Find\nout the Goodwill of 2 years purchase.",
        "OPTION 1":"42000",
        "OPTION 2":"84000",
        "OPTION 3":"126000",
        "OPTION 4":"36000",
        "ANSWER CODE":2
    },
    {
        "SL NO":93,
        "QUESTIONS":"Excess of average profit earned by the Firm over and above its\nnormal profit -",
        "OPTION 1":"Total Profit",
        "OPTION 2":"Super Profit",
        "OPTION 3":"Normal returns",
        "OPTION 4":"Excess Profit",
        "ANSWER CODE":2
    },
    {
        "SL NO":94,
        "QUESTIONS":"Which of the following should be valued compulsory at the time of\nadmission of a partner\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Goodwill",
        "OPTION 2":"Plant & Machinery",
        "OPTION 3":"Land & Building",
        "OPTION 4":"Furniture & Fittings",
        "ANSWER CODE":1
    },
    {
        "SL NO":95,
        "QUESTIONS":"X and Y share profits and losses in the ratio of 4:3. They admit Z in the Firm with 3\/7th share which he gets 2\/7th from X and 1\/7th from Y. the new profit sharing ratio will be -",
        "OPTION 1":"7:3:3",
        "OPTION 2":"2:2:3",
        "OPTION 3":"5:2:3",
        "OPTION 4":"2:3:3",
        "ANSWER CODE":2
    },
    {
        "SL NO":96,
        "QUESTIONS":"A,B,C and D are partners sharing their profits and losses equally.\nThey change their profit sharing to 2:2:1:1. How much will C sacrifice?",
        "OPTION 1":"1\/6",
        "OPTION 2":"1\/12",
        "OPTION 3":"1\/24",
        "OPTION 4":"1\/2",
        "ANSWER CODE":2
    },
    {
        "SL NO":97,
        "QUESTIONS":"X and Y are partners in a Firm with Capital of \u20b918,000 and\n\u20b920,000. Z was admitted for 1\/3rd share in profits and brings\n\u20b924,000 as Capital, calculate the amount goodwill:",
        "OPTION 1":"24000",
        "OPTION 2":"20000",
        "OPTION 3":"15000",
        "OPTION 4":"10000",
        "ANSWER CODE":4
    },
    {
        "SL NO":98,
        "QUESTIONS":"A, B and C are Partners sharing profits equally. A retires and Goodwill appearing in the books at \u20b93,000 is valued at \u20b96,000. A\nwill get credit of -",
        "OPTION 1":"2000",
        "OPTION 2":"3000",
        "OPTION 3":"500",
        "OPTION 4":"1000",
        "ANSWER CODE":4
    },
    {
        "SL NO":99,
        "QUESTIONS":"A, B and C are Partners with Capitals of \u20b91,00,000, \u20b975,000 and\n\u20b950,000. On C\u2019s retirement his share is acquired by A and B in the ratio of 6:4 respectively.Calculate gaining ratio.",
        "OPTION 1":"3:2",
        "OPTION 2":"2:2",
        "OPTION 3":"2:3",
        "OPTION 4":"None of these",
        "ANSWER CODE":1
    },
    {
        "SL NO":100,
        "QUESTIONS":"A, B and C are partners sharing profits in the ratio of 2;2:1, on retirement of B, goodwill was valued as Rs.30,000. Find the\ncontribution of A and C to compensate B.",
        "OPTION 1":"Rs.20,000 and Rs.10,000",
        "OPTION 2":"Rs.8,000 and Rs.4,000",
        "OPTION 3":"Rs.15,000 and Rs.15,00",
        "OPTION 4":"No contribution",
        "ANSWER CODE":2
    },
    {
        "SL NO":101,
        "QUESTIONS":"A, B and C are partners sharing profits and losses in the ratio  2:2;1. C died on 31st March 2022. The profits of the financial year ending 31st March 2022 is \u20b964,000. The share of Deceased partner\nin the profits will be \u2013",
        "OPTION 1":"9200",
        "OPTION 2":"12800",
        "OPTION 3":"3100",
        "OPTION 4":"6100",
        "ANSWER CODE":2
    },
    {
        "SL NO":102,
        "QUESTIONS":"When goodwill is withdrawn by the partners \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\naccount is credited.",
        "OPTION 1":"Cash",
        "OPTION 2":"Partners Capital A\/c",
        "OPTION 3":"Partners Loan A\/c",
        "OPTION 4":"Goodwill A\/c",
        "ANSWER CODE":1
    },
    {
        "SL NO":103,
        "QUESTIONS":"When Goodwill is to be written off after admission of a partner in which ratio it is transferred to Capital A\/c of the Partners?",
        "OPTION 1":"Sacrificing Ratio",
        "OPTION 2":"Equally",
        "OPTION 3":"New Profit Sharing Ratio",
        "OPTION 4":"Old Profit Sharing Ratio",
        "ANSWER CODE":3
    },
    {
        "SL NO":104,
        "QUESTIONS":"Section 32 of the Indian Partnership Act, 1932 a partner may retire\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"With the consent of all the existing partners",
        "OPTION 2":"In accordance with an express agreement by the partners",
        "OPTION 3":"By giving a written notice to all other partners of his intention to retire in case of \u2018Partnership at Will\u2019",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4
    },
    {
        "SL NO":105,
        "QUESTIONS":"Advertisement expenses are apportioned among departments in the\nproportion of \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"sales of each department",
        "OPTION 2":"purchases of each\ndepartment",
        "OPTION 3":"no. of units sold by\neach department",
        "OPTION 4":"cost of sales of each\ndepartment",
        "ANSWER CODE":1
    },
    {
        "SL NO":106,
        "QUESTIONS":"Which one is\/ are the method\/s of Accounting for Branches ?",
        "OPTION 1":"Final Accounts Method",
        "OPTION 2":"Debtors Method",
        "OPTION 3":"Stock and Debtors\nMethod",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4
    },
    {
        "SL NO":107,
        "QUESTIONS":"Bad debts are apportioned among departments in the proportion of\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Sales of each department",
        "OPTION 2":"Number of units sold by each department",
        "OPTION 3":"Cost of sales of each department",
        "OPTION 4":"None of the above",
        "ANSWER CODE":1
    },
    {
        "SL NO":108,
        "QUESTIONS":"Goods are transferred from Department X to Department Y at a price so as to include a profit of 33.33% on cost. If the value of closing stock of Department Y is \u20b9 48,000, then the amount of stock reserve on closing stock will be \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"12000",
        "OPTION 2":"9000",
        "OPTION 3":"18000",
        "OPTION 4":"16000",
        "ANSWER CODE":1
    },
    {
        "SL NO":109,
        "QUESTIONS":"Goods are sent to the Branch at cost plus 25%. The loading on\ninvoice price is\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"0.2",
        "OPTION 2":"0.25",
        "OPTION 3":"0.3",
        "OPTION 4":"0.5",
        "ANSWER CODE":1
    },
    {
        "SL NO":110,
        "QUESTIONS":"In Hire Purchase system cash price plus interest is known as",
        "OPTION 1":"Capital value of asset",
        "OPTION 2":"Book value of asset",
        "OPTION 3":"Hire purchase price of\nasset",
        "OPTION 4":"Hire purchase charges",
        "ANSWER CODE":3
    },
    {
        "SL NO":111,
        "QUESTIONS":"Excess of hire purchase price over cash price is known as",
        "OPTION 1":"Installment",
        "OPTION 2":"Cash down payment",
        "OPTION 3":"Interest",
        "OPTION 4":"Capital value of asset",
        "ANSWER CODE":3
    },
    {
        "SL NO":112,
        "QUESTIONS":"KCS purchased a machine from JPS on hire purchase system, whose cash price was \u20b98,64,000.\u20b9 2,16,000 being paid on delivery and balance in three annual instalments of \u20b92,88,000 each. The amount of interest included in first installment would\nbe\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"72000",
        "OPTION 2":"57600",
        "OPTION 3":"108000",
        "OPTION 4":"36000",
        "ANSWER CODE":3
    },
    {
        "SL NO":113,
        "QUESTIONS":"Head office invoiced goods to its branch at 10% less than the catalogue price which is cost plus 20%. If the total invoiced goods during the year is \u20b94,32,000, then the cost of such goods\nis\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"400000",
        "OPTION 2":"388800",
        "OPTION 3":"345600",
        "OPTION 4":"518400",
        "ANSWER CODE":1
    },
    {
        "SL NO":114,
        "QUESTIONS":"Goods are sent to branch at cost plus 50%. The loading on the\ninvoice price is\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"0.5",
        "OPTION 2":"0.3333",
        "OPTION 3":"0.25",
        "OPTION 4":"20%.",
        "ANSWER CODE":2
    },
    {
        "SL NO":115,
        "QUESTIONS":"The head office of a company sends goods to its branch at 150% of its cost price. lf the value of goods received by branch is\n\u20b97,50,000, then the cost of goods will be \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"600000",
        "OPTION 2":"400000",
        "OPTION 3":"625000",
        "OPTION 4":"500000",
        "ANSWER CODE":4
    },
    {
        "SL NO":116,
        "QUESTIONS":"Goods costing \u20b92,00,000 wew insured for \u20b91,00,000. out of which\n3\/4th were destroyed by fire. Calculate the amount of claim with average clause.",
        "OPTION 1":"75000",
        "OPTION 2":"100000",
        "OPTION 3":"150000",
        "OPTION 4":"200000",
        "ANSWER CODE":1
    },
    {
        "SL NO":117,
        "QUESTIONS":"A plant worth \u20b980,000 has been insured for \u20b960,000, the loss on\naccount of fire is \u20b950,000. The insurance company will bear the loss to the extent of \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"37500",
        "OPTION 2":"50000",
        "OPTION 3":"60000",
        "OPTION 4":"80000",
        "ANSWER CODE":1
    },
    {
        "SL NO":118,
        "QUESTIONS":"Standard turnover is \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Turnover during last 12 months immediately before the damage",
        "OPTION 2":"Turnover during that period of 12 months immediately before which corresponds with indemnity period.",
        "OPTION 3":"Unavoidable fixed expenses which have to be paid even if there is reduction in sale",
        "OPTION 4":"Turnover of the last accounting period immediately before damage.",
        "ANSWER CODE":2
    },
    {
        "SL NO":119,
        "QUESTIONS":"Departmental accounting helps in \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Evaluation of trading\nresults of each department separately",
        "OPTION 2":"Effective planning and\ncontrol on each department",
        "OPTION 3":"Both 1 and 2",
        "OPTION 4":"None of the above",
        "ANSWER CODE":3
    },
    {
        "SL NO":120,
        "QUESTIONS":"If Department M transfers goods to Department N at a price of\n50% above cost, what well be the amount of stock reserve on unsold stock worth \u20b99,000 of Department N?",
        "OPTION 1":"3000",
        "OPTION 2":"4500",
        "OPTION 3":"1500",
        "OPTION 4":"2500",
        "ANSWER CODE":1
    },
    {
        "SL NO":121,
        "QUESTIONS":"The hire purchaser records the assets at its\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Hire purchase price",
        "OPTION 2":"Amount paid to the\nvendor till date",
        "OPTION 3":"Cash price",
        "OPTION 4":"Total cost",
        "ANSWER CODE":3
    },
    {
        "SL NO":122,
        "QUESTIONS":"Depreciation on hire purchased asset is claimed by",
        "OPTION 1":"Hire vendor",
        "OPTION 2":"Hire purchaser",
        "OPTION 3":"Either the hire vendor or the hire purchaser, as per theagreement",
        "OPTION 4":"None of these",
        "ANSWER CODE":2
    },
    {
        "SL NO":123,
        "QUESTIONS":"While treating the abnormal loss under Stock and Debtors system of maintaining Branch accounts, loading on abnormal loss is\ntransferred to \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Branch Stock Account",
        "OPTION 2":"Branch Debtors Account",
        "OPTION 3":"Branch Stock Adjustment Account",
        "OPTION 4":"Branch Profit and Loss Account",
        "ANSWER CODE":3
    },
    {
        "SL NO":124,
        "QUESTIONS":"Under Debtors System of maintaining branch accounts, which of\nthe following appears in Branch Account?",
        "OPTION 1":"Credit purchase",
        "OPTION 2":"Goods returned by\ndebtors to branch",
        "OPTION 3":"Goods returned by\ndebtors to H.O",
        "OPTION 4":"Goods sent to branch",
        "ANSWER CODE":2
    },
    {
        "SL NO":125,
        "QUESTIONS":"Branches not keeping full system of accounting are called\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Independent branches",
        "OPTION 2":"Partial branches",
        "OPTION 3":"Dependent branches",
        "OPTION 4":"None of these",
        "ANSWER CODE":1
    },
    {
        "SL NO":126,
        "QUESTIONS":"Assets are generally repossessed at a mutual agreed\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"value",
        "OPTION 2":"current price",
        "OPTION 3":"Installments due",
        "OPTION 4":"None of these",
        "ANSWER CODE":1
    },
    {
        "SL NO":127,
        "QUESTIONS":"CP Points sells Computers on Hire Purchase basis at cost plus 25%. Terms of sale are \u20b910,000 down payment and eight monthly instalments of \u20b95,000 each for each computer. Compute the HP\nPrice per computer.",
        "OPTION 1":"50000",
        "OPTION 2":"40000",
        "OPTION 3":"20000",
        "OPTION 4":"10000",
        "ANSWER CODE":1
    },
    {
        "SL NO":128,
        "QUESTIONS":"On 1st April 2022, a car company sold to A Bros. a Motorcar on Hire Purchase basis.Total Hire Purchase Price was \u20b94,60,000 with down payment of \u20b91,60,000. Balance amount was to be paid in three Annual Instalments of \u20b91,00,000 each. The first instalment payble on 31st March,2023. Cash Price was \u20b94,00,000. compute the interest of second year.",
        "OPTION 1":"30000",
        "OPTION 2":"20000",
        "OPTION 3":"10000",
        "OPTION 4":"60000",
        "ANSWER CODE":2
    },
    {
        "SL NO":129,
        "QUESTIONS":"In January, a Firm took an insurance policy for \u20b960 lakhs to insure goods in its godown against fire, subject to Average Clause.on 7th March, a Fire broke out destroying goods costing \u20b944 lakhs. Stock in godown was estimated at \u20b980 lakhs. Compute the amount of Insurance Claim.",
        "OPTION 1":"6000000",
        "OPTION 2":"4400000",
        "OPTION 3":"3300000",
        "OPTION 4":"8000000",
        "ANSWER CODE":3
    },
    {
        "SL NO":130,
        "QUESTIONS":"Accounting standard in India are issued by",
        "OPTION 1":"Government of India",
        "OPTION 2":"Reserve Bank of India",
        "OPTION 3":"The Institute of Chartered Accountants\nof India",
        "OPTION 4":"The Institute of Accounting Standard of\nIndia",
        "ANSWER CODE":3
    },
    {
        "SL NO":131,
        "QUESTIONS":"As per AS 10 \"Property,Plant and Equipment', an enterprise holding investment properties should value Investment Property\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"As per fail value",
        "OPTION 2":"applying discounted cash flow model",
        "OPTION 3":"using cost model",
        "OPTION 4":"None of the above",
        "ANSWER CODE":3
    },
    {
        "SL NO":132,
        "QUESTIONS":"As per AS 16 all of the following are qualifying assets except",
        "OPTION 1":"Manufacturing plants and power generation\nfacilities",
        "OPTION 2":"Inventories that require substantial period of\ntime",
        "OPTION 3":"Assets those are ready for sale",
        "OPTION 4":"None of the above",
        "ANSWER CODE":3
    },
    {
        "SL NO":133,
        "QUESTIONS":"All of the following costs are excluded while computing value of inventories except \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Selling and distribution costs",
        "OPTION 2":"Allocated fixed production overheads based on normal\ncapacity",
        "OPTION 3":"Abnormal wastage",
        "OPTION 4":"All of the above",
        "ANSWER CODE":2
    },
    {
        "SL NO":134,
        "QUESTIONS":"Which of the following is not a fundamental accounting\nassumption?",
        "OPTION 1":"Consistancy",
        "OPTION 2":"Materiality",
        "OPTION 3":"Going Concern",
        "OPTION 4":"Accrual",
        "ANSWER CODE":2
    },
    {
        "SL NO":135,
        "QUESTIONS":"As per AS 1, where a company should disclose its accounting\npolicies?",
        "OPTION 1":"In the Annual Report",
        "OPTION 2":"In the Auditor's Report",
        "OPTION 3":"In the CEO's letter to\nthe shareholders",
        "OPTION 4":"In the notes to Financial\nStatement",
        "ANSWER CODE":4
    },
    {
        "SL NO":136,
        "QUESTIONS":"Full form of IFRS\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Indian Financial Reporting Standards",
        "OPTION 2":"International\nFinancial Reporting Standards",
        "OPTION 3":"International Financials Reporting Standards",
        "OPTION 4":"Indian Financial Reporting Standard",
        "ANSWER CODE":2
    },
    {
        "SL NO":137,
        "QUESTIONS":"Areas involving different accounting policies by different enterprises is\/are \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Valuation of inventories",
        "OPTION 2":"Treatment of intangible assets",
        "OPTION 3":"Recognition of profit on long-term contracts",
        "OPTION 4":"All of these",
        "ANSWER CODE":4
    },
    {
        "SL NO":138,
        "QUESTIONS":"An entity has acquired an Asset costing \u20b91,00,000 for production of certain items to be sold by it. It is deductible equally over 2 years in the books of accounts. In Tax Law, \u20b975,000 is deductible in year 1 and balance is deductible in year 2. Tax rate is 10%. In year 2, The entity should\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Create DTL \u20b92,500",
        "OPTION 2":"Reverse DTL \u20b92,500",
        "OPTION 3":"Create DTA \u20b92,500",
        "OPTION 4":"Reverse DTA \u20b92,500",
        "ANSWER CODE":2
    },
    {
        "SL NO":139,
        "QUESTIONS":"As per AS 22 an example of permanent difference\nis\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Exempt Income",
        "OPTION 2":"Disallowed Expenses",
        "OPTION 3":"Enhanced Deduction",
        "OPTION 4":"All of these",
        "ANSWER CODE":4
    },
    {
        "SL NO":140,
        "QUESTIONS":"Borrowing cost includes\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Debenture Interest",
        "OPTION 2":"Preference Dividend",
        "OPTION 3":"Equity Dividend",
        "OPTION 4":"All of these",
        "ANSWER CODE":1
    },
    {
        "SL NO":141,
        "QUESTIONS":"Grants which are in the nature of Promoter's Contribution is\naccounted under\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1":"Capital Approach",
        "OPTION 2":"Income Approach",
        "OPTION 3":"Any of 1 and 2",
        "OPTION 4":"None of these",
        "ANSWER CODE":1
    },
    {
        "SL NO":142,
        "QUESTIONS":"\u20b9 10 lakhs Grant received for assets (life 10 years). Income\ncredited to Profit and Loss A\/c every year under Deferred Income Method is\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"\u20b91 lakhs",
        "OPTION 2":"Depends on the\nDepreciation Method used",
        "OPTION 3":"\u20b910 Lakhs",
        "OPTION 4":"Nil",
        "ANSWER CODE":2
    },
    {
        "SL NO":143,
        "QUESTIONS":"According to AS 11 (Revised) the difference between the forward rate and the exchange rate at the date of transaction should be\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Ignored",
        "OPTION 2":"Recognised as income or expense",
        "OPTION 3":"Adjusted to Shareholders' interests",
        "OPTION 4":"None of these",
        "ANSWER CODE":2
    },
    {
        "SL NO":144,
        "QUESTIONS":"As per AS 11 Monetory Items excludes \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1":"Cash",
        "OPTION 2":"Receivables",
        "OPTION 3":"Payables",
        "OPTION 4":"Inventories",
        "ANSWER CODE":4
    }
    ]
          },
          {
            label: "DT & IDT",
            questions: [
    {
        "SL NO": 1,
        "QUESTIONS": "Charging of income of the previous year in the same year is not\nmandatory for:",
        "OPTION 1": "Shipping business of\nnon-resident",
        "OPTION 2": "Persons leaving\nIndia",
        "OPTION 3": "Association formed\nfor a particular event",
        "OPTION 4": "Discontinuation of\nbusiness",
        "Answer Code": 4,
        "Correct Answer": "Discontinuation of\nbusiness",
        "Explanation": "Under Section 176, the Assessing Officer has the discretion to tax the income of a discontinued business in the year of discontinuation, but it's not mandatory."
    },
    {
        "SL NO": 2,
        "QUESTIONS": "AB was born in England, his parents were born in India in 1952.\nHis grand parents were born in South Africa. AB shall be a:",
        "OPTION 1": "Person of Indian\norigin",
        "OPTION 2": "Foreign National",
        "OPTION 3": "Artificial Person",
        "OPTION 4": "Citizen of India",
        "Answer Code": 2,
        "Correct Answer": "Foreign National",
        "Explanation": "A Person of Indian Origin (PIO) is defined as someone who (or whose parents/grandparents) was born in undivided India. Since parents were born in 1952 (post-independence) and grandparents in South Africa, AB doesn't meet the standard 'undivided India' criteria for PIO in this context."
    },
    {
        "SL NO": 3,
        "QUESTIONS": "Income accruing in Japan and received there is taxable in India in the case of:",
        "OPTION 1": "Resident and Ordinarily Resident only",
        "OPTION 2": "Both Resident and Ordinarily Resident and Resident but not Ordinarily Resident",
        "OPTION 3": "Both Resident and Non-resident",
        "OPTION 4": "Non-resident",
        "Answer Code": 1,
        "Correct Answer": "Resident and Ordinarily Resident only",
        "Explanation": "Resident and Ordinarily Resident (ROR) individuals are taxable on their worldwide income, including income accruing and received outside India."
    },
    {
        "SL NO": 4,
        "QUESTIONS": "Out of the following which one is not a capital receipt?",
        "OPTION 1": "Dividend on investment",
        "OPTION 2": "Bonus Shares",
        "OPTION 3": "Sale of know-how",
        "OPTION 4": "Compensation received for vacating business place",
        "Answer Code": 1,
        "Correct Answer": "Dividend on investment",
        "Explanation": "Dividend on investment is a recurring return on capital and is classified as a revenue receipt, not a capital receipt."
    },
    {
        "SL NO": 5,
        "QUESTIONS": "Which of the following is Casual Income?",
        "OPTION 1": "Dividend income",
        "OPTION 2": "Winning from\nlotteries",
        "OPTION 3": "Interest received",
        "OPTION 4": "Pension received",
        "Answer Code": 2,
        "Correct Answer": "Winning from\nlotteries",
        "Explanation": "Casual Income refers to income which is of a non-recurring nature and not anticipated, such as winnings from lotteries, crossword puzzles, etc."
    },
    {
        "SL NO": 6,
        "QUESTIONS": "Which of the following receipt is not included in the term \u2018Income\u2019 under the Income-tax Act, 1961?",
        "OPTION 1": "Profits and gains of Business or Profession",
        "OPTION 2": "Profit in lieu of salary",
        "OPTION 3": "Dividend",
        "OPTION 4": "Reimbursement of travelling expenses",
        "Answer Code": 4,
        "Correct Answer": "Reimbursement of travelling expenses",
        "Explanation": "Reimbursement of expenses is not considered income because it does not result in a gain or profit to the recipient; it merely covers costs incurred."
    },
    {
        "SL NO": 7,
        "QUESTIONS": "A person is said to be a person of Indian origin if \u2013",
        "OPTION 1": "He or either of his parents were born in undivided India",
        "OPTION 2": "He or either of his siblings were born in undivided India",
        "OPTION 3": "He or either of his parents or either of his grandparents were born in undivided\nIndia",
        "OPTION 4": "He was born in India",
        "Answer Code": 3,
        "Correct Answer": "He or either of his parents or either of his grandparents were born in undivided\nIndia",
        "Explanation": "The definition of a Person of Indian Origin under the Income Tax Act includes individuals where they, their parents, or their grandparents were born in undivided India."
    },
    {
        "SL NO": 8,
        "QUESTIONS": "Income received in India in the previous year is taxable in the hands of \u2013",
        "OPTION 1": "Resident",
        "OPTION 2": "Non-Resident",
        "OPTION 3": "All assessee irrespective of\nresidential status",
        "OPTION 4": "Not Ordinarily resident",
        "Answer Code": 3,
        "Correct Answer": "All assessee irrespective of\nresidential status",
        "Explanation": "Income received in India is taxable for all assessees, regardless of their residential status (ROR, RNOR, or Non-Resident)."
    },
    {
        "SL NO": 9,
        "QUESTIONS": "An individual is said to be resident in India if \u2013",
        "OPTION 1": "He has a house in India",
        "OPTION 2": "He is in India in the previous year for a period of 182 days or more",
        "OPTION 3": "He is in India for a period of 30 days or more during the previous year and for 365 or more days during 4 previous years immediately preceding the relevant previous year",
        "OPTION 4": "His parents are Indian citizen",
        "Answer Code": 2,
        "Correct Answer": "He is in India in the previous year for a period of 182 days or more",
        "Explanation": "Section 6(1) states an individual is resident if they are in India for 182 days or more during the previous year, or 60 days in the current and 365 in the preceding 4 years."
    },
    {
        "SL NO": 10,
        "QUESTIONS": "The incidence of taxation depends on the \u2013",
        "OPTION 1": "Residential status of\nthe assessee",
        "OPTION 2": "Accommodation of\nthe assessee",
        "OPTION 3": "Citizenship of the as\nassessee",
        "OPTION 4": "Marital status of the\nassessee",
        "Answer Code": 1,
        "Correct Answer": "Residential status of\nthe assessee",
        "Explanation": "The scope of total income and the extent of tax liability are determined by the residential status of the assessee."
    },
    {
        "SL NO": 11,
        "QUESTIONS": "Which of the following is an agriculture income?",
        "OPTION 1": "Dividend paid by a company to its shareholders out of agricultural income",
        "OPTION 2": "Share of Profit of a Partner from a firm engaged in an agriculture operation",
        "OPTION 3": "Income from supply of water by an assessee from a tank in agriculture land",
        "OPTION 4": "Interest received by a money lender in the form of agricultural produce",
        "Answer Code": 2,
        "Correct Answer": "Share of Profit of a Partner from a firm engaged in an agriculture operation",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 12,
        "QUESTIONS": "In case of an assessee engaged in the business of manufacturing of\ntea, his agricultural income is \u2013",
        "OPTION 1": "60% of total receipt of\nthe business",
        "OPTION 2": "60% of income of\nthe business",
        "OPTION 3": "Nil",
        "OPTION 4": "40% of income of\nthe business",
        "Answer Code": 3,
        "Correct Answer": "Nil",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 13,
        "QUESTIONS": "Income from saplings shall be considered as \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1": "Agricultural Income",
        "OPTION 2": "Business Income",
        "OPTION 3": "Partly agricultural\nincome and partly business income",
        "OPTION 4": "Income from other sources",
        "Answer Code": 1,
        "Correct Answer": "Agricultural Income",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 14,
        "QUESTIONS": "An individual (aged 28 Years) born in India left for first time for employment in France on 30.10.2023. His visit outside India is for the first time. His residential status for the assessment year 2024-25\nwill be \u2013",
        "OPTION 1": "Resident and ordinarily resident",
        "OPTION 2": "Resident but not ordinarily resident",
        "OPTION 3": "Non-resident",
        "OPTION 4": "Residential Status is not applicable",
        "Answer Code": 1,
        "Correct Answer": "Resident and ordinarily resident",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 15,
        "QUESTIONS": "Income of \u20b9 3,00,000 is received in Sri Lanka by an ordinarily\nresident of India. But later on \u20b9 50,000 is remitted to India \u2013",
        "OPTION 1": "\u20b9 3,00,000 will be\ntaxable",
        "OPTION 2": "\u20b9 3,50,000 will be\ntaxable",
        "OPTION 3": "It is not taxable at all",
        "OPTION 4": "\u20b9 50,000 will be\ntaxable",
        "Answer Code": 1,
        "Correct Answer": "\u20b9 3,00,000 will be\ntaxable",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 16,
        "QUESTIONS": "An individual is said to be a resident in India in the previous year\n(in which the Feb month has 29 days) if he is in India in that year for a period of \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1": "182 days or more",
        "OPTION 2": "183 days or more",
        "OPTION 3": "70 days or more",
        "OPTION 4": "150 days or more",
        "Answer Code": 1,
        "Correct Answer": "182 days or more",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 17,
        "QUESTIONS": "Mr. X is engaged in growing and manufacturing tea in India. His income from this activity is \u20b9 1,40,000. His agriculture income will\nbe \u2013",
        "OPTION 1": "70000",
        "OPTION 2": "84000",
        "OPTION 3": "\u20b9 1,40,000",
        "OPTION 4": "56000",
        "Answer Code": 2,
        "Correct Answer": "84000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 18,
        "QUESTIONS": "Which of the following is not taxable under head \u2018Salaries\u2019?",
        "OPTION 1": "Remuneration paid to the lecturer of a college for setting a question paper by a\nuniversity.",
        "OPTION 2": "Salary received by a member of the Parliament.",
        "OPTION 3": "Commission received by an employee director of a company.",
        "OPTION 4": "Both (1) and (2) above",
        "Answer Code": 4,
        "Correct Answer": "Both (1) and (2) above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 19,
        "QUESTIONS": "If a domestic servant is engaged by the employer and salary is paid by him, the perquisite is:",
        "OPTION 1": "Taxable in the hands of all employees",
        "OPTION 2": "Not taxable in the hands of both specified and non-specified employers",
        "OPTION 3": "Taxable in the hands of specified employees only",
        "OPTION 4": "Taxable to the extent of \u20b9 120 per person in the hands of all employees.",
        "Answer Code": 3,
        "Correct Answer": "Taxable in the hands of specified employees only",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 20,
        "QUESTIONS": "Which of the following is taxable under the head \u2018salaries\u2019?",
        "OPTION 1": "Salary received by a Member of State Legislature.",
        "OPTION 2": "Commission received by an employee director of\na company.",
        "OPTION 3": "Family pension received",
        "OPTION 4": "Both (1) and (2) above",
        "Answer Code": 2,
        "Correct Answer": "Commission received by an employee director of\na company.",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 21,
        "QUESTIONS": "Who among the following is a specified employee?",
        "OPTION 1": "A director of a company",
        "OPTION 2": "An employee drawing a salary of\n\u20b9 15,000 p.m.",
        "OPTION 3": "A person who is an owner of equity shares carrying 10% voting power in the\nemployer company.",
        "OPTION 4": "Both (1) and (2) above",
        "Answer Code": 4,
        "Correct Answer": "Both (1) and (2) above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 22,
        "QUESTIONS": "Net Annual Value of a self-occupied property treated as such is:",
        "OPTION 1": "Fair Rent",
        "OPTION 2": "Nil",
        "OPTION 3": "Reasonable Expected Rent as reduced by municipal tax paid during the previous year.",
        "OPTION 4": "None of the Above",
        "Answer Code": 2,
        "Correct Answer": "Nil",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 23,
        "QUESTIONS": "A house property located outside India is:",
        "OPTION 1": "Taxable in hands of all assessee",
        "OPTION 2": "Taxable in hands of non resident assessee",
        "OPTION 3": "Taxable in hands of resident and ordinarily resident\nassessee",
        "OPTION 4": "Exempted from tax in India.",
        "Answer Code": 3,
        "Correct Answer": "Taxable in hands of resident and ordinarily resident\nassessee",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 24,
        "QUESTIONS": "Following assessee(s) can considered a house property as self\noccupied:",
        "OPTION 1": "Individual & HUF",
        "OPTION 2": "All assessee",
        "OPTION 3": "All assessee other\nthan company",
        "OPTION 4": "All assessee other\nthan firm",
        "Answer Code": 1,
        "Correct Answer": "Individual & HUF",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 25,
        "QUESTIONS": "Which of the following deductions is /are not allowed in case of a\ndeemed to be let-out house?",
        "OPTION 1": "New construction\nallowance",
        "OPTION 2": "Repairs",
        "OPTION 3": "Vacancy allowance",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 26,
        "QUESTIONS": "Which of the following is not allowed as a deduction for computation of business Income?",
        "OPTION 1": "Loss incurred due to theft in factory after\nworking hours",
        "OPTION 2": "Anticipated future losses",
        "OPTION 3": "Loss caused by white ants",
        "OPTION 4": "Loss due to accidental fire in\nstock-in-trade",
        "Answer Code": 2,
        "Correct Answer": "Anticipated future losses",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 27,
        "QUESTIONS": "The preliminary expenses that can be amortized under the Income Tax Act, 1961 has to be restricted to \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0of the cost of\nproject.",
        "OPTION 1": "0.03",
        "OPTION 2": "0.05",
        "OPTION 3": "0.08",
        "OPTION 4": "0.2",
        "Answer Code": 2,
        "Correct Answer": "0.05",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 28,
        "QUESTIONS": "Expenditure on promotion of family planning is an allowance as\ndeduction u/s. 36(1)(ix) of the Income Tax Act, 1961 in case of:",
        "OPTION 1": "Individual",
        "OPTION 2": "Firm",
        "OPTION 3": "HUF",
        "OPTION 4": "Company",
        "Answer Code": 4,
        "Correct Answer": "Company",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 29,
        "QUESTIONS": "In case of loss, a partnership firm may claim deduction in respect of remuneration to partner to the extent of:",
        "OPTION 1": "\u20b9 1,50,000/-",
        "OPTION 2": "\u20b9 1,50,000/- or actual remuneration, whichever is lower",
        "OPTION 3": "\u20b9 1,50,000/- or 90%\nof book profit, whichever is lower",
        "OPTION 4": "Nil",
        "Answer Code": 2,
        "Correct Answer": "\u20b9 1,50,000/- or actual remuneration, whichever is lower",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 30,
        "QUESTIONS": "U/s 54, capital gain will be allowed as exemption if the house property under transfer is held for:",
        "OPTION 1": "Less than 12 months\npreceding the date of transfer",
        "OPTION 2": "More than 12\nmonths preceding the date of transfer",
        "OPTION 3": "Less than 36 months\npreceding the date of transfer",
        "OPTION 4": "More than 24\nmonths preceding the date of transfer",
        "Answer Code": 4,
        "Correct Answer": "More than 24\nmonths preceding the date of transfer",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 31,
        "QUESTIONS": "Personal effect do not cover the followings:",
        "OPTION 1": "Immovable property",
        "OPTION 2": "Drawings",
        "OPTION 3": "Jewellery",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 32,
        "QUESTIONS": "Profit on sale of rural agricultural land is:",
        "OPTION 1": "Not taxable as it is agricultural income",
        "OPTION 2": "Not taxable under the head \u2018Capital gains\u2019 but under the head \u2018Income from\nOther Sources\u2019",
        "OPTION 3": "Not taxable as rural agricultural land is not considered as a capital asset",
        "OPTION 4": "Taxable if it is compulsorily acquired.",
        "Answer Code": 3,
        "Correct Answer": "Not taxable as rural agricultural land is not considered as a capital asset",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 33,
        "QUESTIONS": "Cost of acquisition of self-generated asset is nil, the exception is:",
        "OPTION 1": "Goodwill",
        "OPTION 2": "Route permit",
        "OPTION 3": "Bonus shares acquired before 01-04\n2001",
        "OPTION 4": "Loom hours",
        "Answer Code": 3,
        "Correct Answer": "Bonus shares acquired before 01-04\n2001",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 34,
        "QUESTIONS": "While computing taxable interest on delayed compensation, a\nstandard deduction is allowed @:",
        "OPTION 1": "0.5",
        "OPTION 2": "0.3",
        "OPTION 3": "0.15",
        "OPTION 4": "Nil",
        "Answer Code": 1,
        "Correct Answer": "0.5",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 35,
        "QUESTIONS": "The provision of sec.56(2)(x) is applicable on:",
        "OPTION 1": "All assessee",
        "OPTION 2": "Only on corporate\nassessee",
        "OPTION 3": "On an individual only",
        "OPTION 4": "On an individual and\nHUF only",
        "Answer Code": 1,
        "Correct Answer": "All assessee",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 36,
        "QUESTIONS": "While computing income from other sources, deduction is not allowed to the assessee for:",
        "OPTION 1": "Personal expenditure",
        "OPTION 2": "Direct tax",
        "OPTION 3": "Interest payable outside India without\nTDS",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 37,
        "QUESTIONS": "Gift received by an individual in certain circumstances is not taxable, one of them is:",
        "OPTION 1": "Any gift received from family friend",
        "OPTION 2": "Any gift received on the occasion of any marriage in the\nfamily",
        "OPTION 3": "Any gift received on the occasion of the marriage of the\nindividual-assessee",
        "OPTION 4": "All of the above",
        "Answer Code": 3,
        "Correct Answer": "Any gift received on the occasion of the marriage of the\nindividual-assessee",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 38,
        "QUESTIONS": "An individual purchased a painting on 01-11-2023 for \u20b9 5,00,000 though fair market value of the asset is \u20b9 5,25,000. Income taxable u/s 56(2)(x) is:",
        "OPTION 1": "\u20b9 25,000 i.e.,\ndifference between market value and actual consideration",
        "OPTION 2": "Nil as this is not gift",
        "OPTION 3": "Nil as difference between market value and actual consideration does not exceed \u20b9 50,000",
        "OPTION 4": "The provision of sec. 56(2)(x) is not applicable for any transaction entered during P.Y. 2023-24",
        "Answer Code": 3,
        "Correct Answer": "Nil as difference between market value and actual consideration does not exceed \u20b9 50,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 39,
        "QUESTIONS": "Uncommuted Pension received by a Government Employee is-",
        "OPTION 1": "Exempt",
        "OPTION 2": "Taxable",
        "OPTION 3": "Partially Taxable",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Taxable",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 40,
        "QUESTIONS": "Salary received by the Partner of a Firm is charged under the head",
        "OPTION 1": "Salaries",
        "OPTION 2": "Business Income",
        "OPTION 3": "Other Sources",
        "OPTION 4": "Its exempt from tax",
        "Answer Code": 2,
        "Correct Answer": "Business Income",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 41,
        "QUESTIONS": "Interest credited to Statutory Provident Fund shall be-",
        "OPTION 1": "Fully Exempt",
        "OPTION 2": "Exempt upto 12%\np.a.",
        "OPTION 3": "Fully Taxable",
        "OPTION 4": "Exempt upto 9.5%\np.a",
        "Answer Code": 1,
        "Correct Answer": "Fully Exempt",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 42,
        "QUESTIONS": "Interest credited to Recognized Provident Fund is \u2013",
        "OPTION 1": "Fully Taxable",
        "OPTION 2": "Fully Exempt",
        "OPTION 3": "Exempt upto 12% of\nSalary",
        "OPTION 4": "Exempt upto 9.5%\np.a.",
        "Answer Code": 4,
        "Correct Answer": "Exempt upto 9.5%\np.a.",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 43,
        "QUESTIONS": "The basis of chargeability of income under the head income from\nhouse property is:",
        "OPTION 1": "Rental value",
        "OPTION 2": "Annual value",
        "OPTION 3": "Value fixed by the\ngovernment",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Annual value",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 44,
        "QUESTIONS": "\u201cA\u201d borrowed ` 5,00,000 at 12% p.a on 01-04-2015 for construction of house property which was completed on 15-03-2024 and let out. The amount is still unpaid. The deduction on\naccount of interest for the previous year 2023-24 shall be-",
        "OPTION 1": "` 60,000",
        "OPTION 2": "` 96,000",
        "OPTION 3": "` 1,80,000",
        "OPTION 4": "` 2,40,000",
        "Answer Code": 2,
        "Correct Answer": "` 96,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 45,
        "QUESTIONS": "Sums received by an employer from Keyman Insurance Policy taken on the life of the employee shall be-",
        "OPTION 1": "Exempt",
        "OPTION 2": "Taxable under the\nhead Business and Profession",
        "OPTION 3": "Taxable under the head Other Sources",
        "OPTION 4": "Taxable in the hand of the employee",
        "Answer Code": 2,
        "Correct Answer": "Taxable under the\nhead Business and Profession",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 46,
        "QUESTIONS": "The cost of acquisition of shares under Employees Stock Option Scheme shall be-",
        "OPTION 1": "Fair Market Value of Shares on the date of offer",
        "OPTION 2": "Fair Market Value of the shares on the date of exercise of\noption",
        "OPTION 3": "Fair Market Value of share on the date of vesting of option.",
        "OPTION 4": "Price at which it was offered to the employee.",
        "Answer Code": 2,
        "Correct Answer": "Fair Market Value of the shares on the date of exercise of\noption",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 47,
        "QUESTIONS": "Capital Gain, arising from compulsory acquisition of urban agricultural land, is:",
        "OPTION 1": "Taxable",
        "OPTION 2": "Exempt",
        "OPTION 3": "Exempt if acquired\nby RBI or Central Government",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Exempt",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 48,
        "QUESTIONS": "Where the entire block of the depreciable assets is transferred after\n36 months, there will be-",
        "OPTION 1": "Short-Term Capital\nGain",
        "OPTION 2": "Long-Term Capital\nGain",
        "OPTION 3": "Short- Term Capital\nGain or Loss",
        "OPTION 4": "Long- Term Capital\nGain or Loss",
        "Answer Code": 3,
        "Correct Answer": "Short- Term Capital\nGain or Loss",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 49,
        "QUESTIONS": "Exemption under Section 54F shall not be allowed if the assessee, on the date of transfer, owns-",
        "OPTION 1": "any Residential House",
        "OPTION 2": "a Residential House which is let out",
        "OPTION 3": "a Hose which is self occupied",
        "OPTION 4": "more than one Residential House",
        "Answer Code": 4,
        "Correct Answer": "more than one Residential House",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 50,
        "QUESTIONS": "Income under the head \u201cIncome from Other Sources\u201d is taxable on \u2013",
        "OPTION 1": "Due Basis",
        "OPTION 2": "Receipt Basis",
        "OPTION 3": "On the basis of method of accounting regularly employed by the Assessee",
        "OPTION 4": "None of the above.",
        "Answer Code": 3,
        "Correct Answer": "On the basis of method of accounting regularly employed by the Assessee",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 51,
        "QUESTIONS": "Winning from Lotteries, Crossword Puzzles, Horse Races & Other\nRaces, Card Game, etc. are casual income & hence-",
        "OPTION 1": "fully exempt",
        "OPTION 2": "exempt upto ` 5,000",
        "OPTION 3": "fully taxable",
        "OPTION 4": "None of above",
        "Answer Code": 3,
        "Correct Answer": "fully taxable",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 52,
        "QUESTIONS": "Adi received ` 70,000 from his friend on the occasion of his\nbirthday:",
        "OPTION 1": "Entire amount of ` 70,\n000 is taxable",
        "OPTION 2": "` 25,000 is taxable",
        "OPTION 3": "The entire amount is\nexempt",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Entire amount of ` 70,\n000 is taxable",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 53,
        "QUESTIONS": "Commission received by a Director of the Company is charged\nunder the head:",
        "OPTION 1": "Salaries",
        "OPTION 2": "Business Income",
        "OPTION 3": "Other Sources",
        "OPTION 4": "Its exempt from tax",
        "Answer Code": 1,
        "Correct Answer": "Salaries",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 54,
        "QUESTIONS": "Casual Income received by the Assessee is \u2013",
        "OPTION 1": "Fully Exempt",
        "OPTION 2": "Exempt upto ` 5,000",
        "OPTION 3": "Fully Taxable",
        "OPTION 4": "None of the above.",
        "Answer Code": 3,
        "Correct Answer": "Fully Taxable",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 55,
        "QUESTIONS": "Mr. X\u2019s minor daughter earned \u20b9 50,000 from his special talent. This income will be clubbed with \u2013",
        "OPTION 1": "The income of Mr. X",
        "OPTION 2": "The income of Mrs. X",
        "OPTION 3": "Mr. X or Mrs. X,\nwhoever\u2019s income is higher",
        "OPTION 4": "It will not be clubbed",
        "Answer Code": 4,
        "Correct Answer": "It will not be clubbed",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 56,
        "QUESTIONS": "Income arising to a minor married daughter shall be \u2013",
        "OPTION 1": "assessed in the hands of minor married daughter",
        "OPTION 2": "clubbed with the income of that parent whose total\nincome is higher",
        "OPTION 3": "Exempt from tax",
        "OPTION 4": "clubbed with the income of her spouse",
        "Answer Code": 2,
        "Correct Answer": "clubbed with the income of that parent whose total\nincome is higher",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 57,
        "QUESTIONS": "Unabsorbed business losses cannot be carried for more than -",
        "OPTION 1": "7 assessment years",
        "OPTION 2": "8 assessment years",
        "OPTION 3": "10 assessment years",
        "OPTION 4": "12 assessment years",
        "Answer Code": 2,
        "Correct Answer": "8 assessment years",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 58,
        "QUESTIONS": "Deduction u/s. 80JJA is available if the assessee:",
        "OPTION 1": "Is engaged in scientific research",
        "OPTION 2": "Sets up an industrial unit in a backward area",
        "OPTION 3": "Is engaged in agriculture business",
        "OPTION 4": "Is engaged in the business of collecting and processing biodegradable waste.",
        "Answer Code": 4,
        "Correct Answer": "Is engaged in the business of collecting and processing biodegradable waste.",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 59,
        "QUESTIONS": "Maximum limit for deduction u/s 80TTA is:",
        "OPTION 1": "50000",
        "OPTION 2": "10000",
        "OPTION 3": "40000",
        "OPTION 4": "25000",
        "Answer Code": 2,
        "Correct Answer": "10000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 60,
        "QUESTIONS": "Advance tax is required to be paid by all assessee only if estimated\nadvance tax liability is:",
        "OPTION 1": "\u20b9 5,000 or more",
        "OPTION 2": "\u20b9 10,000 or more",
        "OPTION 3": "More than zero",
        "OPTION 4": "\u20b9 50,000 or more",
        "Answer Code": 2,
        "Correct Answer": "\u20b9 10,000 or more",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 61,
        "QUESTIONS": "TDS is not required to be deducted u/s 194A if the amount of\ninterest on loan does not exceed:",
        "OPTION 1": "5000",
        "OPTION 2": "2500",
        "OPTION 3": "7500",
        "OPTION 4": "20000",
        "Answer Code": 1,
        "Correct Answer": "5000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 62,
        "QUESTIONS": "On salary, tax is required to be deducted at the time of:",
        "OPTION 1": "Payment or crediting\nthe employee, whichever is earlier",
        "OPTION 2": "Crediting the employee",
        "OPTION 3": "Payment",
        "OPTION 4": "Retirement of employee",
        "Answer Code": 3,
        "Correct Answer": "Payment",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 63,
        "QUESTIONS": "Where assessment has not been completed, belated income tax\nreturn for assessment year 2024-25 can be filed upto:",
        "OPTION 1": "2024-12-31",
        "OPTION 2": "2025-01-31",
        "OPTION 3": "2025-03-31",
        "OPTION 4": "2025-12-31",
        "Answer Code": 1,
        "Correct Answer": "2024-12-31",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 64,
        "QUESTIONS": "When assessment has not been completed, revised return can be\nfiled within \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0from the end of the relevant previous year.",
        "OPTION 1": "9 months",
        "OPTION 2": "6 months",
        "OPTION 3": "12 months",
        "OPTION 4": "2 years",
        "Answer Code": 1,
        "Correct Answer": "9 months",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 65,
        "QUESTIONS": "Clubbing provisions under Sec. 64(1)(vi) are applicable where the\nasset is transferred by an individual for inadequate consideration to \u2013",
        "OPTION 1": "Daughter\u2019s Husband",
        "OPTION 2": "Son\u2019s Wife",
        "OPTION 3": "Major Son",
        "OPTION 4": "Major Daughter",
        "Answer Code": 2,
        "Correct Answer": "Son\u2019s Wife",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 66,
        "QUESTIONS": "As per Sec. 64(1A), income accruing to a minor shall be clubbed in the income of \u2013",
        "OPTION 1": "Father",
        "OPTION 2": "Mother",
        "OPTION 3": "Father or Mother at their option",
        "OPTION 4": "Parent whose income before this clubbing\nis greater",
        "Answer Code": 4,
        "Correct Answer": "Parent whose income before this clubbing\nis greater",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 67,
        "QUESTIONS": "Loss on account of owing & maintaining the race horses can be\ncarried forward",
        "OPTION 1": "for 8 years",
        "OPTION 2": "for 4 years",
        "OPTION 3": "indefinitely",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "for 4 years",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 68,
        "QUESTIONS": "The maximum period for which Speculation Loss can be carried\nforward is:",
        "OPTION 1": "4 Years",
        "OPTION 2": "8 Years",
        "OPTION 3": "Nil",
        "OPTION 4": "Any number of years",
        "Answer Code": 1,
        "Correct Answer": "4 Years",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 69,
        "QUESTIONS": "Deduction u/s 80C in respect of LIP, contribution to provident fund etc., is allowed to \u2013",
        "OPTION 1": "any assessee",
        "OPTION 2": "an individual",
        "OPTION 3": "an individual or HUF",
        "OPTION 4": "an individual of HUF who is resident\nin India",
        "Answer Code": 3,
        "Correct Answer": "an individual or HUF",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 70,
        "QUESTIONS": "Deduction u/s 80D is allowed if the premium is paid to \u2013",
        "OPTION 1": "Life Insurance Corporation",
        "OPTION 2": "General Insurance Corporation or any other Insurer approved by the\nIRDA",
        "OPTION 3": "Life Insurance or General Insurance Corporation",
        "OPTION 4": "None of above.",
        "Answer Code": 2,
        "Correct Answer": "General Insurance Corporation or any other Insurer approved by the\nIRDA",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 71,
        "QUESTIONS": "Rebate in Tax u/s 87A, is applicable to:",
        "OPTION 1": "Companies",
        "OPTION 2": "Individuals",
        "OPTION 3": "HUF",
        "OPTION 4": "Resident Individual",
        "Answer Code": 4,
        "Correct Answer": "Resident Individual",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 72,
        "QUESTIONS": "Deduction u/s 80JJAA in respect of employment of new workers shall be allowed to-",
        "OPTION 1": "any assessee to who Sec.44AB applies",
        "OPTION 2": "an Indian company",
        "OPTION 3": "an Indian Company or a person other than Company resident in\nIndia",
        "OPTION 4": "None of above",
        "Answer Code": 1,
        "Correct Answer": "any assessee to who Sec.44AB applies",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 73,
        "QUESTIONS": "The maximum amount which can be donated in cash for claiming\ndeduction under section 80G for the P.Y. 2023-24 is \u2013",
        "OPTION 1": "` 5,000",
        "OPTION 2": "` 10,000",
        "OPTION 3": "` 15,000",
        "OPTION 4": "` 2,000",
        "Answer Code": 4,
        "Correct Answer": "` 2,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 74,
        "QUESTIONS": "Where a member of a HUF has converted or transferred his self-acquired property for inadequate consideration into joint family\nproperty, income arising there from is taxable.",
        "OPTION 1": "As the income of the Transferor Member",
        "OPTION 2": "In the hand of the HUF",
        "OPTION 3": "In the hands of Karta of HUF",
        "OPTION 4": "Completely exempt from tax",
        "Answer Code": 1,
        "Correct Answer": "As the income of the Transferor Member",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 75,
        "QUESTIONS": "Advance Tax shall be payable by any person in respect of current\nincome is",
        "OPTION 1": "` 50,000 or more",
        "OPTION 2": "` 10,000 or more",
        "OPTION 3": "` 1,00,000 or more",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "` 10,000 or more",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 76,
        "QUESTIONS": "Liability to deduct tax at source in case on income from interest on securities arises at the time of \u2013",
        "OPTION 1": "Payment of interest",
        "OPTION 2": "Accrual of interest",
        "OPTION 3": "Credit of interest to the account of the payee / interest payable account or payment thereof\nwhichever is earlier",
        "OPTION 4": "None of the above",
        "Answer Code": 3,
        "Correct Answer": "Credit of interest to the account of the payee / interest payable account or payment thereof\nwhichever is earlier",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 77,
        "QUESTIONS": "Who is empowered to make law for matters containing in List II of\nSchedule VII of the Constitution of India?",
        "OPTION 1": "State Government",
        "OPTION 2": "Central Government",
        "OPTION 3": "Both Central and\nState Government",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "State Government",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 78,
        "QUESTIONS": "Power to make laws with respect to goods and services tax has\nbeen given by the Constitution vide Article:",
        "OPTION 1": "279A",
        "OPTION 2": "246A",
        "OPTION 3": "246",
        "OPTION 4": "365",
        "Answer Code": 2,
        "Correct Answer": "246A",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 79,
        "QUESTIONS": "Indirect tax is :",
        "OPTION 1": "Regressive in nature",
        "OPTION 2": "Progressive in\nnature",
        "OPTION 3": "Both (1) & (2)",
        "OPTION 4": "None of these",
        "Answer Code": 1,
        "Correct Answer": "Regressive in nature",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 80,
        "QUESTIONS": "Which one of the following is not an example of indirect tax types?",
        "OPTION 1": "GST",
        "OPTION 2": "Customs Duty",
        "OPTION 3": "Income tax",
        "OPTION 4": "None of these",
        "Answer Code": 3,
        "Correct Answer": "Income tax",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 81,
        "QUESTIONS": "In case of indirect tax, impact and incidence of tax fall on:",
        "OPTION 1": "One person",
        "OPTION 2": "Different persons",
        "OPTION 3": "State Government",
        "OPTION 4": "None of these",
        "Answer Code": 2,
        "Correct Answer": "Different persons",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 82,
        "QUESTIONS": "Levy of indirect tax on goods and services may leads to:",
        "OPTION 1": "Inflation",
        "OPTION 2": "Deflation",
        "OPTION 3": "Reflection",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Inflation",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 83,
        "QUESTIONS": "Levy and collection of Central indirect tax are dealt by:",
        "OPTION 1": "CBIC",
        "OPTION 2": "CBDT",
        "OPTION 3": "NIC",
        "OPTION 4": "UGS",
        "Answer Code": 1,
        "Correct Answer": "CBIC",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 84,
        "QUESTIONS": "In pre-GST regime, excise duty has been levied by \u2026\u2026\u2026.. Government whereas VAT has been levied by            State\nGovernment on goods.",
        "OPTION 1": "Central, State",
        "OPTION 2": "State, Central",
        "OPTION 3": "Central, Central",
        "OPTION 4": "State, State",
        "Answer Code": 1,
        "Correct Answer": "Central, State",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 85,
        "QUESTIONS": "Cascading effect of tax means:",
        "OPTION 1": "Tax on goods",
        "OPTION 2": "Tax on services",
        "OPTION 3": "Tax on Tax",
        "OPTION 4": "None of these",
        "Answer Code": 3,
        "Correct Answer": "Tax on Tax",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 86,
        "QUESTIONS": "Who is empowered to make law for matters containing in List I of\nSchedule VII of the Constitution of India?",
        "OPTION 1": "State Government",
        "OPTION 2": "Central Government",
        "OPTION 3": "Both Central and\nState Government",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Central Government",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 87,
        "QUESTIONS": "The items which will be taxable both under current central excise law and new GST even after the implementation of the GST Act:",
        "OPTION 1": "Motor Spirit",
        "OPTION 2": "Alchoholic Liquor\nfor Human Consumption",
        "OPTION 3": "Tobacco and Tobacco products",
        "OPTION 4": "Natural Gas",
        "Answer Code": 3,
        "Correct Answer": "Tobacco and Tobacco products",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 88,
        "QUESTIONS": "Who is the chairman & Head of the GST  Council Meeting?",
        "OPTION 1": "Prime minister",
        "OPTION 2": "President",
        "OPTION 3": "Union Finance Minister",
        "OPTION 4": "State Finance Minister nomited by\nGST Council",
        "Answer Code": 3,
        "Correct Answer": "Union Finance Minister",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 89,
        "QUESTIONS": "The IGST Act,2017 extends to the:",
        "OPTION 1": "Whole of India except the state of Jammu & Kashmir",
        "OPTION 2": "Whole of India",
        "OPTION 3": "Whole of India except the state of Jammu & Kashmir &\nPondicherry",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Whole of India",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 90,
        "QUESTIONS": "Which of the following is the benefits of GST?",
        "OPTION 1": "Creation of unified national market",
        "OPTION 2": "Boost to \u2018Make in India' initiative",
        "OPTION 3": "Reduction of compliance burden\non taxpayers",
        "OPTION 4": "Buoyancy to the Government\nRevenue",
        "Answer Code": 3,
        "Correct Answer": "Reduction of compliance burden\non taxpayers",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 91,
        "QUESTIONS": "Which of the following taxes have been subsumed in GST?",
        "OPTION 1": "Central sales tax",
        "OPTION 2": "Central excise duty",
        "OPTION 3": "VAT",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 92,
        "QUESTIONS": "India has chosen\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0model of dual GST.",
        "OPTION 1": "USA",
        "OPTION 2": "UK",
        "OPTION 3": "Canadian",
        "OPTION 4": "Japan",
        "Answer Code": 3,
        "Correct Answer": "Canadian",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 93,
        "QUESTIONS": "Constitution Amendment Act, 2016 for GST was",
        "OPTION 1": "80th",
        "OPTION 2": "101st",
        "OPTION 3": "122nd",
        "OPTION 4": "None of these",
        "Answer Code": 2,
        "Correct Answer": "101st",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 94,
        "QUESTIONS": "The incidence of tax on tax is called",
        "OPTION 1": "Tax Cascading",
        "OPTION 2": "Tax Pyramidding",
        "OPTION 3": "Tax evasion",
        "OPTION 4": "Indirect tax",
        "Answer Code": 1,
        "Correct Answer": "Tax Cascading",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 95,
        "QUESTIONS": "UTGST is applicable when:",
        "OPTION 1": "Sold from Union territory",
        "OPTION 2": "Goods are purchased by Central Government",
        "OPTION 3": "Sold from one union territory to another union territory",
        "OPTION 4": "There is interstate supply",
        "Answer Code": 4,
        "Correct Answer": "There is interstate supply",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 96,
        "QUESTIONS": "Under which article of the Constitution of India, GST council has\nbeen constituted?",
        "OPTION 1": "246",
        "OPTION 2": "246A",
        "OPTION 3": "279A",
        "OPTION 4": "265",
        "Answer Code": 3,
        "Correct Answer": "279A",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 97,
        "QUESTIONS": "GSTN is:",
        "OPTION 1": "51% government owned company with paid up capital of \u20b9 10\ncrore",
        "OPTION 2": "50% government owned company with paid up capital\nof \u20b9 10 crore",
        "OPTION 3": "100% government owned company with paid up capital of \u20b9\n10 crore",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "51% government owned company with paid up capital of \u20b9 10\ncrore",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 98,
        "QUESTIONS": "The term supply includes:",
        "OPTION 1": "Sale",
        "OPTION 2": "Transfer",
        "OPTION 3": "Barter",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 99,
        "QUESTIONS": "Which of the following activities or transactions shall be treated\nneither as supply of goods nor a supply of services?",
        "OPTION 1": "Sale of land and\nbuilding",
        "OPTION 2": "Lease of land",
        "OPTION 3": "Rent of building",
        "OPTION 4": "All of the above",
        "Answer Code": 1,
        "Correct Answer": "Sale of land and\nbuilding",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 100,
        "QUESTIONS": "Gifts not exceeding                  in value in a financial year by an\nemployer to an employee shall not be treated as supply of goods or services or both.",
        "OPTION 1": "50000",
        "OPTION 2": "25000",
        "OPTION 3": "30000",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "50000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 101,
        "QUESTIONS": "A hotel provides a 4-D/3-N package with the facility of breakfast.\nThis is a \u2026\u2026..",
        "OPTION 1": "Mixed supply",
        "OPTION 2": "Composite supply",
        "OPTION 3": "Both mixed and\ncomposite supply",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Composite supply",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 102,
        "QUESTIONS": "Which of the following is / are the essential elements of a mixed supply?",
        "OPTION 1": "Supply is made by taxable person to a recipient",
        "OPTION 2": "Supply consists of two or more individual supplies of goods or services or both or any combination thereof but it is not naturally\nbundled",
        "OPTION 3": "Supply is made for a single price",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 103,
        "QUESTIONS": "In case of import of goods, which type(s) of GST is applicable?",
        "OPTION 1": "CGST",
        "OPTION 2": "SGST",
        "OPTION 3": "Both CGST and\nSGST",
        "OPTION 4": "IGST",
        "Answer Code": 4,
        "Correct Answer": "IGST",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 104,
        "QUESTIONS": "Reverse charge means the liability to pay tax by the \u2026\u2026 of supply of goods or services or both.",
        "OPTION 1": "recipient",
        "OPTION 2": "supplier",
        "OPTION 3": "partly by the recipient and partly by the\nsupplier",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "recipient",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 105,
        "QUESTIONS": "Which of the following can be issued by Government to exempt goods and/or services on which tax is leviable in exceptional cases?",
        "OPTION 1": "Exemption Notification",
        "OPTION 2": "Special order",
        "OPTION 3": "Other notifications",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Special order",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 106,
        "QUESTIONS": "Renting of precincts of a religious place meant for general public owned or managed by a charitable or religious trust u/s 12AA of the Income Tax Act 1961 shall be exempt if:",
        "OPTION 1": "Renting of rooms where per day charges are less then \u20b9 1,000",
        "OPTION 2": "Renting of shops or other spaces for business or commerce where charges per month are less than\n\u20b910,000",
        "OPTION 3": "Renting of premises, community halls or open area, where charges per day are less than\n\u20b9 10,000",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 107,
        "QUESTIONS": "For which of the following goods, the manufacturer is not allowed to opt for composition scheme:",
        "OPTION 1": "Pan masala",
        "OPTION 2": "Ice cream",
        "OPTION 3": "Topical and manufactured\ntobacco substitutes",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 108,
        "QUESTIONS": "The time of supply of goods, where supplier is liable to pay tax under forward charge shall be:",
        "OPTION 1": "The date of actual issue of invoice by the supplier",
        "OPTION 2": "The last date on which he is required u/s 31(1) to issue the invoice with respect to the supply",
        "OPTION 3": "The date on which the supplier receives the payment with respect to the supply",
        "OPTION 4": "(a) or (b), whichever is earlier",
        "Answer Code": 4,
        "Correct Answer": "(a) or (b), whichever is earlier",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 109,
        "QUESTIONS": "The transaction value for computation of value of supply can be rejected if -",
        "OPTION 1": "The buyer and seller are related and price is not the sole\nconsideration",
        "OPTION 2": "Products are sold at very low margins",
        "OPTION 3": "Maximum retail price is greater than the transaction value",
        "OPTION 4": "All of the above",
        "Answer Code": 1,
        "Correct Answer": "The buyer and seller are related and price is not the sole\nconsideration",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 110,
        "QUESTIONS": "In case goods disposed off by way of free sample",
        "OPTION 1": "recipient can claim ITC",
        "OPTION 2": "supplier can claim ITC",
        "OPTION 3": "supplier can not claim ITC",
        "OPTION 4": "ITC can be claimed if value is more than\n\u20b9 1,000",
        "Answer Code": 3,
        "Correct Answer": "supplier can not claim ITC",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 111,
        "QUESTIONS": "If the goods are received in installment then ITC can be availed",
        "OPTION 1": "Proportionately on receipt of each installment",
        "OPTION 2": "100% ITC can be taken on receipt of first installment",
        "OPTION 3": "ITC can be taken on receipt of last installment",
        "OPTION 4": "50% ITC can be taken on receipt of first installment and balance 50% on receipt of last\ninstallment",
        "Answer Code": 3,
        "Correct Answer": "ITC can be taken on receipt of last installment",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 112,
        "QUESTIONS": "Person who is liable to be registered u/s 22 or 24 shall apply for registration in every such State or Union Territory in which he is so liable within:",
        "OPTION 1": "30 days from the date on which he becomes liable to registration",
        "OPTION 2": "15 days from the date on which he becomes liable to\nregistration",
        "OPTION 3": "7 days from the date on which he becomes liable to registration",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "30 days from the date on which he becomes liable to registration",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 113,
        "QUESTIONS": "Tax invoice shall be prepared in \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0in case of supply of\ngoods and in \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0in case of supply of services",
        "OPTION 1": "Duplicate, Duplicate",
        "OPTION 2": "Duplicate,\nTriplicate",
        "OPTION 3": "Triplicate, Duplicate",
        "OPTION 4": "Triplicate, Triplicate",
        "Answer Code": 3,
        "Correct Answer": "Triplicate, Duplicate",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 114,
        "QUESTIONS": "Annual return is summary of:",
        "OPTION 1": "GSTR 1",
        "OPTION 2": "GSTR 3B",
        "OPTION 3": "GSTR 4",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 115,
        "QUESTIONS": "Payment of tax is required \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0filing return.",
        "OPTION 1": "Before",
        "OPTION 2": "After",
        "OPTION 3": "Before or after",
        "OPTION 4": "Before or at the time\nof",
        "Answer Code": 4,
        "Correct Answer": "Before or at the time\nof",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 116,
        "QUESTIONS": "Aggregate turnover Limit for Opting Compounding Scheme is:",
        "OPTION 1": "\u20b9 50 Lakh",
        "OPTION 2": "\u20b9 60 Lakh",
        "OPTION 3": "\u20b9 1 Crore",
        "OPTION 4": "\u20b9 1.5 Crore",
        "Answer Code": 4,
        "Correct Answer": "\u20b9 1.5 Crore",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 117,
        "QUESTIONS": "The calculation of the aggregate turnover to decide the Taxable\nMinimum Turnover will be based on:",
        "OPTION 1": "State wise Turnover\nBasis",
        "OPTION 2": "All India Turnover\nbasis",
        "OPTION 3": "State wise Turnover\nExcluding Export",
        "OPTION 4": "All India Turnover\nExcluding Export",
        "Answer Code": 2,
        "Correct Answer": "All India Turnover\nbasis",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 118,
        "QUESTIONS": "Certificate of registration is issued in which form?",
        "OPTION 1": "GST REG-06",
        "OPTION 2": "GST REG-02 9",
        "OPTION 3": "GST REG-01",
        "OPTION 4": "GST REG-10",
        "Answer Code": 1,
        "Correct Answer": "GST REG-06",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 119,
        "QUESTIONS": "Dealers who are not eligible for Compounding Scheme:",
        "OPTION 1": "Exporters",
        "OPTION 2": "Importers",
        "OPTION 3": "Interstate Suppliers and those liable to remit tax on Rverse\nCharge basis",
        "OPTION 4": "Manufacturing dealers",
        "Answer Code": 3,
        "Correct Answer": "Interstate Suppliers and those liable to remit tax on Rverse\nCharge basis",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 120,
        "QUESTIONS": "Various taxes have been subsumed in GST to make one nation one market for consumers . Out of following , determine which taxes have been subsumed in GST (i) basic customs duty levied under Customs Act, 1962, (ii) Taxes on lotteries ,(iii) Taxes on\nadvertisements",
        "OPTION 1": "(ii)",
        "OPTION 2": "(ii) and (iii)",
        "OPTION 3": "(iii)",
        "OPTION 4": "(i),(ii) and (iii)",
        "Answer Code": 2,
        "Correct Answer": "(ii) and (iii)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 121,
        "QUESTIONS": "Which of the following is not considered as 'goods' under the CGST Act, 2017 (i)Ten-paisa coin having sale value of Rs 100 ,\n(ii) Shares of unlisted Company, (iii) Lottery Tickets",
        "OPTION 1": "(i)",
        "OPTION 2": "(ii)",
        "OPTION 3": "(ii) and (iii)",
        "OPTION 4": "(i),(ii) and (iii)",
        "Answer Code": 2,
        "Correct Answer": "(ii)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 122,
        "QUESTIONS": "If tobacco leaves procured from Agriculturist by a registered person\n, the applicability of RCM will be:",
        "OPTION 1": "Reverse charge is applicable as this is a notified service",
        "OPTION 2": "Reverse charge is applicable if ABC Travels is not\nregistered",
        "OPTION 3": "Joint charge is applicable",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Reverse charge is applicable as this is a notified service",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 123,
        "QUESTIONS": "For a registered person threshold limits of turnover in the preceding financial year for opting composition scheme shall not exceeds:",
        "OPTION 1": "\u20b9 20 lakh",
        "OPTION 2": "\u20b9 1.5 crore",
        "OPTION 3": "\u20b9 75 lakh",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "\u20b9 1.5 crore",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 124,
        "QUESTIONS": "A supply that consists of two or even more services would be classified as the provision that describes the variables that are\nsubject to a higher rate of taxation, is called:",
        "OPTION 1": "Composite",
        "OPTION 2": "Mixed",
        "OPTION 3": "Both (a) and (b)",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "Mixed",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 125,
        "QUESTIONS": "GST stands for Goods and Services Tax, and it is a tax system that\ncovers a wide range of:",
        "OPTION 1": "Goods",
        "OPTION 2": "Services",
        "OPTION 3": "Goods, companies\nand imports",
        "OPTION 4": "Products, systems,\nand exports",
        "Answer Code": 3,
        "Correct Answer": "Goods, companies\nand imports",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 126,
        "QUESTIONS": "Which of the following is the exclusions from the computation of aggregate turnover?",
        "OPTION 1": "Value of taxable supplies",
        "OPTION 2": "value of exempt supplies",
        "OPTION 3": "Exports of goods or services or both",
        "OPTION 4": "Value of inward supplies on which tax is paid on reverse\ncharge basis",
        "Answer Code": 4,
        "Correct Answer": "Value of inward supplies on which tax is paid on reverse\ncharge basis",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 127,
        "QUESTIONS": "In case of Manufacturer (except Ice cream , pan masala, tobacco) for whom concessional rate applicable under composition scheme,\nthe rate of tax is:",
        "OPTION 1": "0.025",
        "OPTION 2": "0.005",
        "OPTION 3": "0.01",
        "OPTION 4": "No composition for manufacturer",
        "Answer Code": 3,
        "Correct Answer": "0.01",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 128,
        "QUESTIONS": "Whether a registered person under composition scheme shall claim input tax credit?",
        "OPTION 1": "yes",
        "OPTION 2": "no",
        "OPTION 3": "Input tax credit on inward supply of goods only can be\nclaimed",
        "OPTION 4": "Input tax credit on inward supply of service only can be\nclaimed",
        "Answer Code": 2,
        "Correct Answer": "no",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 129,
        "QUESTIONS": "What is time of supply of goods, in case of forward charge?",
        "OPTION 1": "Date of issue of invoice",
        "OPTION 2": "Due date of issue of invoice",
        "OPTION 3": "Date of receipt of consideration by the\nsupplier",
        "OPTION 4": "Earlier of (a) & (b)",
        "Answer Code": 4,
        "Correct Answer": "Earlier of (a) & (b)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 130,
        "QUESTIONS": "What is the time of supply of vouchers when the supply with respect to the voucher is\nidentifiable?",
        "OPTION 1": "Date of issue of voucher",
        "OPTION 2": "Date of redemption of voucher",
        "OPTION 3": "Earlier of (a) & (b)",
        "OPTION 4": "(a) & (b) whichever is later",
        "Answer Code": 1,
        "Correct Answer": "Date of issue of voucher",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 131,
        "QUESTIONS": "Which of the following shall not be included in value of supply?",
        "OPTION 1": "GST",
        "OPTION 2": "Interest",
        "OPTION 3": "Late fee",
        "OPTION 4": "Commission",
        "Answer Code": 1,
        "Correct Answer": "GST",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 132,
        "QUESTIONS": "The value of supply should include:",
        "OPTION 1": "Any non-GST taxes, duties, cesses, fees charged separately by supplier",
        "OPTION 2": "Interest, late fee or penalty for delayed payment of any consideration for any supply",
        "OPTION 3": "Subsidies directly linked to the price except subsidies provided by the Central and State\nGovernment",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 133,
        "QUESTIONS": "When can the transaction value be rejected for computation of value of supply?",
        "OPTION 1": "When the buyer and seller are related and price is not the sole\nconsideration",
        "OPTION 2": "When the buyer and seller are unrelated or price is not the\nsole consideration",
        "OPTION 3": "It can never be rejected",
        "OPTION 4": "When the goods are sold at very low margins",
        "Answer Code": 1,
        "Correct Answer": "When the buyer and seller are related and price is not the sole\nconsideration",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 134,
        "QUESTIONS": "What deductions are allowed from the transaction value?",
        "OPTION 1": "Discounts offered to customers, subject to conditions",
        "OPTION 2": "Packing Charges, subject to conditions",
        "OPTION 3": "Amount paid by customer on behalf of the supplier, subject to conditions",
        "OPTION 4": "Freight charges incurred by the supplier for CIF terms of supply, subject to conditions",
        "Answer Code": 1,
        "Correct Answer": "Discounts offered to customers, subject to conditions",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 135,
        "QUESTIONS": "Rule 30 of the CGST Rules inter alia provides value of supply of goods or services or both based on cost shall be                    % of\ncost of production or manufacture or the cost of acquisition of such goods or the cost of provision of such services",
        "OPTION 1": "100",
        "OPTION 2": "10",
        "OPTION 3": "110",
        "OPTION 4": "120",
        "Answer Code": 3,
        "Correct Answer": "110",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 136,
        "QUESTIONS": "Where the goods being sent or taken on approval for sale or return are removed before the supply takes place, the invoice shall be\nissued:",
        "OPTION 1": "before/at the time of supply",
        "OPTION 2": "6 months from the date of removal",
        "OPTION 3": "Earlier of (a) or (b)",
        "OPTION 4": "None of the above",
        "Answer Code": 3,
        "Correct Answer": "Earlier of (a) or (b)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 137,
        "QUESTIONS": "Which of the following is not a supply under the CGST Act, 2017?",
        "OPTION 1": ". Goods supplied free of cost by X & Sons to its agent for further supply to customer at\n\u20b9 5,000 for which invoice will be issuedby the agent in his own name.",
        "OPTION 2": "Importation of accounting services (for business purposes) free of cost from a dependent father residing in US.",
        "OPTION 3": "An expensive watch gifted to an employee for \u20b9 50,000. No other gifts provided to such employee during the entire financial year.",
        "OPTION 4": "A machinery disposed off free of cost on which input tax credithas been availed",
        "Answer Code": 3,
        "Correct Answer": "An expensive watch gifted to an employee for \u20b9 50,000. No other gifts provided to such employee during the entire financial year.",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 138,
        "QUESTIONS": "The term \u2018casual taxable person\u2019 includes:",
        "OPTION 1": "A person occasionally supplying goods or services or both in a State or a Union territory where he has no fixed place of business.",
        "OPTION 2": "A person occasionally supplying goods or services or both in a State or a Union territory\nwhere he has fixed\nplace of business",
        "OPTION 3": "Both (a) and (b)",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "A person occasionally supplying goods or services or both in a State or a Union territory where he has no fixed place of business.",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 139,
        "QUESTIONS": "Mr. X of Delhi is participating in Hitex Furniture Expo in Haryana where he has no fixed place of business and exhibiting his products. During the expo, the said products will be sold to the people attending and intending to purchase such products. In such scenario, Mr. X shall obtain which of the following registration\nunder the CGST Act, 2017?",
        "OPTION 1": "Non\u2013resident taxable person registration",
        "OPTION 2": "Casual taxable person registration",
        "OPTION 3": "Regular taxpayer registration",
        "OPTION 4": "No registration under GST required.",
        "Answer Code": 2,
        "Correct Answer": "Casual taxable person registration",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 140,
        "QUESTIONS": "An exempt supply includes:",
        "OPTION 1": "Supply of goods or services or both which attracts Nil rate of tax",
        "OPTION 2": "Non- taxable supply",
        "OPTION 3": "Supply of goods or services or both which are wholly exempt from\ntax under Section 11 of the CGST Act or under Section 6 of IGST\nAct",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 141,
        "QUESTIONS": "Which of the following service is notified by Government for ECO?",
        "OPTION 1": "services by way of transportation of passengers by a radio-taxi, motor\ncab, maxi cab and motor cycle",
        "OPTION 2": "services by way of providing accommodation in hotels, inns, guest houses, clubs, campsites or other commercial places meant for residential or lodging\npurposes, except where the person supplying such service through ECO is liable for registration under section 22(1) of the CGST",
        "OPTION 3": "services by way of house-keeping, such as plumbing, carpentering\netc., except where the person\nsupplying such service through ECO is liable for registration under subsection 22(1) of the CGST Act",
        "OPTION 4": "All of these",
        "Answer Code": 4,
        "Correct Answer": "All of these",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 142,
        "QUESTIONS": "A hotel owner provided accommodation in Haryana, through an electronic commerce operator \u2013 Cool Trips. The hotel owner is not liable to get registered as per the provisions of section 22(1) of the CGST Act. Who is the person liable to pay GST in this case?",
        "OPTION 1": "Hotel Owner",
        "OPTION 2": "ECO",
        "OPTION 3": "Customer",
        "OPTION 4": "Both by Hotel owner & ECO",
        "Answer Code": 2,
        "Correct Answer": "ECO",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 143,
        "QUESTIONS": "State the taxability of satellite launch services provided to both international and domestic customers by ANTRIX Corporation Limited (\u201cANTRIX\u201d) which is a wholly owned Government of India Company under the administrative control of Department of\nSpace (DOS).",
        "OPTION 1": "Taxable",
        "OPTION 2": "Not taxable",
        "OPTION 3": "Exempt",
        "OPTION 4": NaN,
        "Answer Code": 1,
        "Correct Answer": "Taxable",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 144,
        "QUESTIONS": "Zero rated supply includes:",
        "OPTION 1": "Export of goods and services",
        "OPTION 2": "Supply of goods and services to a SEZ developer or SEZ Unit",
        "OPTION 3": "Supply of goods and services by a SEZ developer or SEZ Unit",
        "OPTION 4": "Both (1) and (2)",
        "Answer Code": 4,
        "Correct Answer": "Both (1) and (2)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 145,
        "QUESTIONS": "A registered taxable person is eligible to claim refund in respect of export of goods and services in the following cases:",
        "OPTION 1": "Under bond, without payment of IGST and claim refund of unutilized input tax\ncredit.",
        "OPTION 2": "On payment of IGST and claim refund of\nIGST paid on such\ngoods and services",
        "OPTION 3": "None of the above",
        "OPTION 4": "Both (1) and (2)",
        "Answer Code": 4,
        "Correct Answer": "Both (1) and (2)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 146,
        "QUESTIONS": "If place of supply in Territorial water, then what will considered as Place of supply?",
        "OPTION 1": "Actual location (territorial Water)",
        "OPTION 2": "Principal Establishment of Supplier",
        "OPTION 3": "Any establishment of supplier of his choice",
        "OPTION 4": "coastal State or Union Territory where the\nnearest point of the\nappropriate baseline",
        "Answer Code": 4,
        "Correct Answer": "coastal State or Union Territory where the\nnearest point of the\nappropriate baseline",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 147,
        "QUESTIONS": "What is the time of supply of service if the invoice is issued within 30 days from the date of provision of service?",
        "OPTION 1": "Date of issue of invoice",
        "OPTION 2": "Date on which the supplier receives\npayment",
        "OPTION 3": "Date of provision of service",
        "OPTION 4": "Earlier of (1) & (2)",
        "Answer Code": 4,
        "Correct Answer": "Earlier of (1) & (2)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 148,
        "QUESTIONS": "What is the time of supply of service in case of reverse charge mechanism?",
        "OPTION 1": "Date of payment as entered in the books of account of\nthe recipient",
        "OPTION 2": "Date immediately following 60 days from the date of\nissue of invoice",
        "OPTION 3": "Date of invoice",
        "OPTION 4": "Earlier of (1) & (2)",
        "Answer Code": 4,
        "Correct Answer": "Earlier of (1) & (2)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 149,
        "QUESTIONS": "Value of services rendered is ` 1,00,000/. Date of issue of invoice is 5th October 2023. Advance Received is ` 25,000/- on 20th September 2023. Balance amount received on 7th October 2023. What is the time of supply for ` 1,00,000?",
        "OPTION 1": "5th October 2023 for ` 1,00,000/-",
        "OPTION 2": "20th September 2023 for ` 1,00,000/-",
        "OPTION 3": "20th September 2023-\n` 25,000/- and 5th October 2023 for ` 75,000/-",
        "OPTION 4": "20th September 2023\n` 25,000/- and\n7th October 2023 for\n` 75,000/-",
        "Answer Code": 3,
        "Correct Answer": "20th September 2023-\n` 25,000/- and 5th October 2023 for ` 75,000/-",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 150,
        "QUESTIONS": "Whether credit on inputs should be availed based on receipt of documents or receipt of goods",
        "OPTION 1": "Receipt of goods",
        "OPTION 2": "Receipt of Documents",
        "OPTION 3": "Both",
        "OPTION 4": "Either receipt of documents or Receipt of\ngoods",
        "Answer Code": 3,
        "Correct Answer": "Both",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 151,
        "QUESTIONS": "The supply of goods to SEZ unit is treated as\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0in the hands of the supplier:",
        "OPTION 1": "Exempt Supply \u2013 Reversal of credit",
        "OPTION 2": "Deemed Taxable Supply \u2013 No reversal of credit",
        "OPTION 3": "Zero Rated supply",
        "OPTION 4": "Non-Taxable Supply \u2013 Outside the Scope of GST",
        "Answer Code": 3,
        "Correct Answer": "Zero Rated supply",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 152,
        "QUESTIONS": "On supply of OIDAR Services by a person located in taxable\nterritory to a non-taxable online recipient. Who is liable to pay GST in this case?",
        "OPTION 1": "Recipient",
        "OPTION 2": "Supplier",
        "OPTION 3": "Both",
        "OPTION 4": NaN,
        "Answer Code": 2,
        "Correct Answer": "Supplier",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 153,
        "QUESTIONS": "If location of supplier in Territorial water, then what will be considered as location of supplier?",
        "OPTION 1": "Actual location (territorial Water)",
        "OPTION 2": "Principal Establishment of Supplier",
        "OPTION 3": "Any establishment of supplier of his choice",
        "OPTION 4": "Coastal State or Union Territory where the\nnearest point of the\nappropriate baseline",
        "Answer Code": 4,
        "Correct Answer": "Coastal State or Union Territory where the\nnearest point of the\nappropriate baseline",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 154,
        "QUESTIONS": "The limit of exclusive economic zone of India is \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0from the\nnearest point of the baseline.",
        "OPTION 1": "200 nautical miles",
        "OPTION 2": "12 nautical miles",
        "OPTION 3": "24 nautical miles",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "200 nautical miles",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 155,
        "QUESTIONS": "Which of the following is a taxable event for imported goods?",
        "OPTION 1": "Date on which the\ngoods cross the customs barrier",
        "OPTION 2": "Date of presentation of bill of entry",
        "OPTION 3": "Date of entry into\nIndian territorial waters",
        "OPTION 4": "Unloading of\nimported goods at the customs port",
        "Answer Code": 1,
        "Correct Answer": "Date on which the\ngoods cross the customs barrier",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 156,
        "QUESTIONS": "Basic custom duty on imported goods is levied at the rates specified in the:",
        "OPTION 1": "First Schedule of the\nCustoms Tariff Act, 1975",
        "OPTION 2": "Second Schedule of\nthe Customs Tariff Act, 1975",
        "OPTION 3": "Customs Act",
        "OPTION 4": "Customs Manual",
        "Answer Code": 1,
        "Correct Answer": "First Schedule of the\nCustoms Tariff Act, 1975",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 157,
        "QUESTIONS": "For the purpose of computing IGST on imported goods, one of the\nfollowing shall not be included in the value for computation:",
        "OPTION 1": "GST Compensation\nCess",
        "OPTION 2": "Social Welfare\nSurcharge",
        "OPTION 3": "Anti-dumping diuty",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "GST Compensation\nCess",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 158,
        "QUESTIONS": "Where the insurance amount is not available, for ascertaining the assessable value for customs duty, the percentage of FOB value to\nbe taken is:",
        "OPTION 1": "1",
        "OPTION 2": "1.125",
        "OPTION 3": "1.5",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "1.125",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 159,
        "QUESTIONS": "Where the transport charges is not available, for ascertaining the assessable value for customs duty, the percentage of FOB value to\nbe taken is:",
        "OPTION 1": "0.1",
        "OPTION 2": "0.2",
        "OPTION 3": "0.25",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "0.2",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 160,
        "QUESTIONS": "Transportation charges incurred by the importee for transporting goods from factory of the exporter to the port of exportation shall be included in the assessable value. Is this statement correct?",
        "OPTION 1": "Yes",
        "OPTION 2": "No",
        "OPTION 3": "Yes, if such charges has been paid in foreign currency",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Yes",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 161,
        "QUESTIONS": "As per Section 2(31), person-in-charge means:",
        "OPTION 1": "Vessel - Master",
        "OPTION 2": "Train - Conductor\n(or) Guard",
        "OPTION 3": "Vehicle \u2013 Driver",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 162,
        "QUESTIONS": "Goods which are same in all respects, including physical quantity\nis known as:",
        "OPTION 1": "Identical Goods",
        "OPTION 2": "Similar Goods",
        "OPTION 3": "Alike Goods",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Identical Goods",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 163,
        "QUESTIONS": "Buying commission shall be included in the assessable value. Is this statement correct?",
        "OPTION 1": "No",
        "OPTION 2": "Yes",
        "OPTION 3": "Yes, if buying\ncommission is paid in foreign currency",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "No",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 164,
        "QUESTIONS": "Any article which is imported into India shall, in addition, be liable to integrated tax at such rate, not exceeding\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0% as is leviable under section 5 of Integrated Goods and Services Tax Act, 2017 on a like article on its supply in India, on the value of the imported article as determined under subsection (8) or sub section 8(A).",
        "OPTION 1": "20",
        "OPTION 2": "30",
        "OPTION 3": "40",
        "OPTION 4": "50",
        "Answer Code": 3,
        "Correct Answer": "40",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 165,
        "QUESTIONS": "Any article which is imported into India is also liable to a duty equal to the excise duty for the time being leviable on a like article if produced or manufactured in India. This duty is called\nas\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "Additional duty",
        "OPTION 2": "Countervailing Duty",
        "OPTION 3": "Special duty",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Additional duty",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 166,
        "QUESTIONS": "The maximum rate of additional duty is @\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0%",
        "OPTION 1": "5",
        "OPTION 2": "4",
        "OPTION 3": "3",
        "OPTION 4": "2",
        "Answer Code": 2,
        "Correct Answer": "4",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 167,
        "QUESTIONS": "If which of the following conditions are satisfied, the Central Government may provide for the enhancement of the import duty ?",
        "OPTION 1": "The goods should be specified in the First Schedule",
        "OPTION 2": "The Central Government is satisfied that circumstances exist, which render it necessary\nfor the enhancement\nof import duties",
        "OPTION 3": "Either 1 or 2",
        "OPTION 4": "Both 1 & 2",
        "Answer Code": 4,
        "Correct Answer": "Both 1 & 2",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 168,
        "QUESTIONS": "Central Government can impose the safeguard duty if it is satisfied that:",
        "OPTION 1": "Any article is imported into India in increased\nquantities",
        "OPTION 2": "Such increased importation is causing or threatening to cause serious injury to domestic\nindustry",
        "OPTION 3": "Either 1 or 2",
        "OPTION 4": "Both 1 & 2",
        "Answer Code": 4,
        "Correct Answer": "Both 1 & 2",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 169,
        "QUESTIONS": "The total period of levy of safeguard duty is restricted to years:",
        "OPTION 1": "5",
        "OPTION 2": "10",
        "OPTION 3": "6",
        "OPTION 4": "7",
        "Answer Code": 2,
        "Correct Answer": "10",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 170,
        "QUESTIONS": "An appeal filed under section 9B shall be accompanied by a fee of\n`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "10000",
        "OPTION 2": "15000",
        "OPTION 3": "50000",
        "OPTION 4": "25000",
        "Answer Code": 2,
        "Correct Answer": "15000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 171,
        "QUESTIONS": "As per section 14 of customs act, 1962, transaction value shall also include in addition to the price, anyamount paid or payable for\ncosts and services, including \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "commissions and brokerage",
        "OPTION 2": "engineering",
        "OPTION 3": "royalties and licence fees",
        "OPTION 4": "all of the above",
        "Answer Code": 4,
        "Correct Answer": "all of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 172,
        "QUESTIONS": "As per section 14 of customs act, 1962, transaction value shall also include in addition to the price, any amount paid or payable for\ncosts and services, including\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "costs of transportation to the place of\nimportation",
        "OPTION 2": "insurance",
        "OPTION 3": "design work",
        "OPTION 4": "all of the above",
        "Answer Code": 4,
        "Correct Answer": "all of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 173,
        "QUESTIONS": "For imported goods, the conversion in value shall be done with\nreference to the rate of exchange prevalent on the date of filing of\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.",
        "OPTION 1": "bill of entry under section 46",
        "OPTION 2": "shipping bill (vessel\nor aircraft) under section 50",
        "OPTION 3": "bill of export\n(vehicle) under section 50.",
        "OPTION 4": "either 2 or 3",
        "Answer Code": 1,
        "Correct Answer": "bill of entry under section 46",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 174,
        "QUESTIONS": "For the purpose of customs valuation, \u201crate of exchange\u201d means the rate of exchange notified by\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0shall be taken into account.",
        "OPTION 1": "the Foreign Exchange\nDealers\u2019 Association of India",
        "OPTION 2": "CBIC",
        "OPTION 3": "the Reserve Bank of India",
        "OPTION 4": "none of the above",
        "Answer Code": 2,
        "Correct Answer": "CBIC",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 175,
        "QUESTIONS": "Sub-section (2) of section 14 provides that the Board may fix for any class of imported\ngoodsor export goods, having regard to the trend of value of such or like goods by notification in the Official Gazette if it is satisfied\nthat it is necessary to do so. It is:",
        "OPTION 1": "market value",
        "OPTION 2": "MRP",
        "OPTION 3": "transaction value",
        "OPTION 4": "tariff value",
        "Answer Code": 4,
        "Correct Answer": "tariff value",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 176,
        "QUESTIONS": "The term \u201csimilar goods\u201d means imported goods:",
        "OPTION 1": "which although not alike in all respects, have like characteristics and like component materials which enable them to perform the same\nfunctions",
        "OPTION 2": "produced in the country in which the goods being valued were produced",
        "OPTION 3": "produced by the same person who produced the\ngoods being valued",
        "OPTION 4": "all of the above",
        "Answer Code": 4,
        "Correct Answer": "all of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 177,
        "QUESTIONS": "The loading, unloading and handling charges associated with the delivery of the imported goods at the place of importation shall be\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0",
        "OPTION 1": "1% of customs FOB value",
        "OPTION 2": "cost of transport",
        "OPTION 3": "cost of insurance",
        "OPTION 4": "0",
        "Answer Code": 4,
        "Correct Answer": "0",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 178,
        "QUESTIONS": "Where the goods are sent back as such to the foreign country owing to which of the following reasonsit is considered as re-exportation?",
        "OPTION 1": "Goods not conforming to the specification of the\norder",
        "OPTION 2": "Goods not permitted to be imported\ninto the country on account of traderestriction",
        "OPTION 3": "Goods after being imported are temporarily retained in the country and later taken out of the country. In\nother words, the very objective of the importation was limited to temporary\nretention in India",
        "OPTION 4": "All the above",
        "Answer Code": 4,
        "Correct Answer": "All the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 179,
        "QUESTIONS": "Under Section 74(1) when goods capable of being easily identified, which have been imported into India and upon which any duty has been paid on importation\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0% of duty be paid back.",
        "OPTION 1": "50",
        "OPTION 2": "100",
        "OPTION 3": "98",
        "OPTION 4": "48",
        "Answer Code": 3,
        "Correct Answer": "98",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 180,
        "QUESTIONS": "As per notification, no drawback of import duty will be allowed in respect of which of the following goods, if they have been used after their importation in India?",
        "OPTION 1": "Wearing Apparel",
        "OPTION 2": "Tea Chests",
        "OPTION 3": "Exposed cinematograph films passed by Board of Film Censors in India",
        "OPTION 4": "All the above",
        "Answer Code": 4,
        "Correct Answer": "All the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 181,
        "QUESTIONS": "CBIC has clarified that safeguard duties, anti-dumping duties and countervailing duties are rebatable as drawback in terms of section\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0of the Customs Act",
        "OPTION 1": "74",
        "OPTION 2": "75",
        "OPTION 3": "76",
        "OPTION 4": "77",
        "Answer Code": 2,
        "Correct Answer": "75",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 182,
        "QUESTIONS": "For the purpose of levying tax on income other than agricultural income, Union List contained entry",
        "OPTION 1": "82",
        "OPTION 2": "92C",
        "OPTION 3": "92D",
        "OPTION 4": "None of the Above",
        "Answer Code": 2,
        "Correct Answer": "92C",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 183,
        "QUESTIONS": "Following is not a head of income:",
        "OPTION 1": "Income from House Property",
        "OPTION 2": "Salaries",
        "OPTION 3": "Income from Interest on securities",
        "OPTION 4": "None of the Above",
        "Answer Code": 3,
        "Correct Answer": "Income from Interest on securities",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 184,
        "QUESTIONS": "Income tax is a",
        "OPTION 1": "Indirect Tax\n ",
        "OPTION 2": "Entertainment Tax",
        "OPTION 3": "Direct Tax",
        "OPTION 4": "None of the Above",
        "Answer Code": 3,
        "Correct Answer": "Direct Tax",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 185,
        "QUESTIONS": "Mr. X, partner of M/s XYZ, is assessable as",
        "OPTION 1": "Firm",
        "OPTION 2": "HUF",
        "OPTION 3": "An Individual",
        "OPTION 4": "None of the Above",
        "Answer Code": 3,
        "Correct Answer": "An Individual",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 186,
        "QUESTIONS": "An Indian citizen leaving India during the previous year for employment purpose is said to be resident if",
        "OPTION 1": "He has a house in India",
        "OPTION 2": "He is in India in the previous year for a period of 182 days or more",
        "OPTION 3": "He is in India for a period of 60 days or more during the previous year and for 365 or more days during 4 previous years immediately preceding the relevant previous year",
        "OPTION 4": "His parents are Indian citizen.",
        "Answer Code": 2,
        "Correct Answer": "He is in India in the previous year for a period of 182 days or more",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 187,
        "QUESTIONS": "Remuneration to partner of a firm engaged in the business of growing and manufacturing rubber in India is:",
        "OPTION 1": "Partly agricultural income and partly non-agricultural income",
        "OPTION 2": "Agricultural income",
        "OPTION 3": "Non-Agricultural inco",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Partly agricultural income and partly non-agricultural income",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 188,
        "QUESTIONS": "In case of an individual or HUF, agricultural income is",
        "OPTION 1": "Exempted",
        "OPTION 2": "Exempted but included in the total income for the rate purpose",
        "OPTION 3": "Fully taxable provided it is earned from India",
        "OPTION 4": "Taxable at flat rate of 10%",
        "Answer Code": 2,
        "Correct Answer": "Exempted but included in the total income for the rate purpose",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 189,
        "QUESTIONS": "A person can have same residential status in :",
        "OPTION 1": "more than one country",
        "OPTION 2": "one country",
        "OPTION 3": "only two country",
        "OPTION 4": "three country",
        "Answer Code": 1,
        "Correct Answer": "more than one country",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 190,
        "QUESTIONS": "Rebate u/s 87A Applicable to:",
        "OPTION 1": "Resident Individual",
        "OPTION 2": "Resident HUF",
        "OPTION 3": "Resident company",
        "OPTION 4": "Resident AOP/BOI",
        "Answer Code": 1,
        "Correct Answer": "Resident Individual",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 191,
        "QUESTIONS": "Residential Status is to be determined for",
        "OPTION 1": "Previous year",
        "OPTION 2": "assessment year",
        "OPTION 3": "financial year",
        "OPTION 4": "accounting year",
        "Answer Code": 1,
        "Correct Answer": "Previous year",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 192,
        "QUESTIONS": "Income which accrue or arise outside India but are received directly into India are taxable in the case of",
        "OPTION 1": "Resident only",
        "OPTION 2": "Both Ordinary Resident and not\nOrdinary Resident",
        "OPTION 3": "Non-Resident",
        "OPTION 4": "All Assessees",
        "Answer Code": 4,
        "Correct Answer": "All Assessees",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 193,
        "QUESTIONS": "A Resident in India cannot become resident in any other country\nfor the same previous year",
        "OPTION 1": "TRUE",
        "OPTION 2": "FALSE",
        "OPTION 3": "Both",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "FALSE",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 194,
        "QUESTIONS": "The onus of responsibility to prove the residential status of a person\nlies with",
        "OPTION 1": "Assesee",
        "OPTION 2": "Government",
        "OPTION 3": "Income tax\ndepartment",
        "OPTION 4": "Court",
        "Answer Code": 3,
        "Correct Answer": "Income tax\ndepartment",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 195,
        "QUESTIONS": "Total Income of a person is determined on the basis of his",
        "OPTION 1": "Residetial status in India",
        "OPTION 2": "Citizenship in India",
        "OPTION 3": "Residential Status and Citizenship in\nIndia",
        "OPTION 4": "None of the Above",
        "Answer Code": 1,
        "Correct Answer": "Residetial status in India",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 196,
        "QUESTIONS": "Receipt of amount on maturity of LIC Policy is",
        "OPTION 1": "Capital Receipt",
        "OPTION 2": "Casaual Receipts",
        "OPTION 3": "Revenue Receipt",
        "OPTION 4": "None of the Above",
        "Answer Code": 1,
        "Correct Answer": "Capital Receipt",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 197,
        "QUESTIONS": "Surcharge on Income Tax is payble by",
        "OPTION 1": "Foreign Company",
        "OPTION 2": "Individual and HUF",
        "OPTION 3": "A Domestic\nCompany",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 198,
        "QUESTIONS": "Person u/s 2(31) does not Include",
        "OPTION 1": "Minor",
        "OPTION 2": "Local Authority",
        "OPTION 3": "Unsound Person",
        "OPTION 4": "None of the Above",
        "Answer Code": 3,
        "Correct Answer": "Unsound Person",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 199,
        "QUESTIONS": "A example of Casual Income is",
        "OPTION 1": "Intrest Income",
        "OPTION 2": "Winnings from\nlotteries",
        "OPTION 3": "Pension Income",
        "OPTION 4": "Divident Income",
        "Answer Code": 1,
        "Correct Answer": "Intrest Income",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 200,
        "QUESTIONS": "The way of tax liability by taking full advantage provided by the\nAct is",
        "OPTION 1": "Tax Management",
        "OPTION 2": "Tax avoidance",
        "OPTION 3": "Tax Planning",
        "OPTION 4": "Tax evasion",
        "Answer Code": 3,
        "Correct Answer": "Tax Planning",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 201,
        "QUESTIONS": "The circular issued by by CBDT are binding on",
        "OPTION 1": "Assesee",
        "OPTION 2": "Income Tax\nAuthorities",
        "OPTION 3": "Both the above",
        "OPTION 4": "Assessee and court",
        "Answer Code": 3,
        "Correct Answer": "Both the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 202,
        "QUESTIONS": "Commision received by  Director of the company charged under\nthe head",
        "OPTION 1": "Salaries",
        "OPTION 2": "Business Income",
        "OPTION 3": "Other Sources",
        "OPTION 4": "Its exempt from tax",
        "Answer Code": 1,
        "Correct Answer": "Salaries",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 203,
        "QUESTIONS": "Salary received by partner of firm is charged under the head",
        "OPTION 1": "Salaries",
        "OPTION 2": "Business Income",
        "OPTION 3": "Other Sources",
        "OPTION 4": "Its exempt from tax",
        "Answer Code": 2,
        "Correct Answer": "Business Income",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 204,
        "QUESTIONS": "Which of the following is available for Foreign Citizen u/s 10(6)?",
        "OPTION 1": "Remmunaration of Foreign Diplomats",
        "OPTION 2": "Remmunaration of employee of Foreign\nenterprise",
        "OPTION 3": "Salary of a crewmember of\nforeign ship",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 205,
        "QUESTIONS": "Incomes that do not form part of the Total Income are called",
        "OPTION 1": "Exempted Income",
        "OPTION 2": "Deductions",
        "OPTION 3": "Excluded Income",
        "OPTION 4": "None of the Above",
        "Answer Code": 1,
        "Correct Answer": "Exempted Income",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 206,
        "QUESTIONS": "What is the standard deduction allowed for salaried employees / pensioners for AY 2025-26?",
        "OPTION 1": "50000",
        "OPTION 2": "75000",
        "OPTION 3": "60000",
        "OPTION 4": "25000",
        "Answer Code": 2,
        "Correct Answer": "75000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 207,
        "QUESTIONS": "Mr. Y , aged 48 an Indian Resident employed 20 employees established in SEZ during the previous year 2024-2025. Out of 20 employees ,12 were employed on 1st May 2024 monthly\nemoluments of \u20b918000 and remaining were employed on 1st August 2024 on monthly emouluments \u20b912000. All the employees participated in recognised provident fund and they are paid their emoluments directly to their bank accounts.What will be the deduction u/s 80JJAA. As per section 115BAC for the assessment\nyear 2025-26.",
        "OPTION 1": "10,08,000",
        "OPTION 2": "12,96,000",
        "OPTION 3": "9,43,200",
        "OPTION 4": "8,20,800",
        "Answer Code": 3,
        "Correct Answer": "9,43,200",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 208,
        "QUESTIONS": "CBC Co-operative society is deriving the following income during the previous year 2024-25  his Income from house property\n(computed) \u20b9750000, Income from marketing of agriculture\nproduce grown by the members \u20b9 800000,Income from collective disposal of labour of its members \u20b91800000 income from\nprocessing aid of power is \u20b9 2700000,Income from other business activities 520000,Interest on fixed deposite \u20b9400000.You are Required to find out Income from Profits and gain from Business\nand Profession.",
        "OPTION 1": "6570000",
        "OPTION 2": "5820000",
        "OPTION 3": "6970000",
        "OPTION 4": "6220000",
        "Answer Code": 2,
        "Correct Answer": "5820000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 209,
        "QUESTIONS": "Riti purchased a land at a cost of \u20b910 lakhs in the F.Y. 1982-83 and held the same as her capital Asset till 31stMarch ,2010.She started her real estate business on 1st april,2010 and converted the said land into Stock-in Trade on the same date,when the fair\nmarket value of the land was \u20b9180Lakhs. FMV of land as on 1/4/2001 is \u20b99 lacs for the p.y 2024-25.\nCII: F.Y: 2001-02-100, 2010-11-167, 2024-25-363. What will be\nthe capital gain to be chargeble to tax?",
        "OPTION 1": "\u20b9 1,63,30,000",
        "OPTION 2": "\u20b9 1,64,97,000",
        "OPTION 3": "\u20b9 1,43,70,000",
        "OPTION 4": "\u20b9 1,74,01,198",
        "Answer Code": 1,
        "Correct Answer": "\u20b9 1,63,30,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 210,
        "QUESTIONS": "Mr. Kumar resident of India got interest cerificate from ICICI bank, he paid \u20b9170000 as interest and \u20b995000 towards principal repayment of housing loan borrowed for the above residential building in the year 2015. What will be the deduction under section\n80C.",
        "OPTION 1": "95000",
        "OPTION 2": "\u20b9 1,70,000",
        "OPTION 3": "75000",
        "OPTION 4": "\u20b9 1,50,000",
        "Answer Code": 1,
        "Correct Answer": "95000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 211,
        "QUESTIONS": "AMC company has an Unrealised rent of \u20b9420000 partaining to\nF.Y 2021-22 & 2022-23 recovered during the year in respect of commercial property owned by the company ,which was sold by the company on 26.03.2024. compute income from house property\nu/s 115BAC.",
        "OPTION 1": "420000",
        "OPTION 2": "126000",
        "OPTION 3": "\u20b9 2,94,000",
        "OPTION 4": "Nil",
        "Answer Code": 3,
        "Correct Answer": "\u20b9 2,94,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 212,
        "QUESTIONS": "Employer's contribution to Recognised Provident Fund shall be:",
        "OPTION 1": "Fully Exempt",
        "OPTION 2": "Exempt upto 12%\np.a",
        "OPTION 3": "Fully Taxble",
        "OPTION 4": "Exempt upto 9.5%",
        "Answer Code": 2,
        "Correct Answer": "Exempt upto 12%\np.a",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 213,
        "QUESTIONS": "Interest on Employer's Contribution credited to unrecognised Provident fund is :",
        "OPTION 1": "Fully Taxable",
        "OPTION 2": "Fully Exempt",
        "OPTION 3": "Exempt upto 8.5% p.a",
        "OPTION 4": "Neither exempt nor taxable in the year of\naccrual",
        "Answer Code": 4,
        "Correct Answer": "Neither exempt nor taxable in the year of\naccrual",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 214,
        "QUESTIONS": "Which of the following is NOT eligible for Section 44AD of Presumptive Taxation Scheme?",
        "OPTION 1": "A resident individual running a small retail shop",
        "OPTION 2": "A partnership firm (other than LLP) running a grocery\nbusiness",
        "OPTION 3": "A person engaged in plying, hiring, or leasing goods\ncarriage",
        "OPTION 4": "A HUF running a small trading business",
        "Answer Code": 3,
        "Correct Answer": "A person engaged in plying, hiring, or leasing goods\ncarriage",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 215,
        "QUESTIONS": "The percentage of turnover of Presumptive income under Section 44AD is deemed to be:",
        "OPTION 1": "10% of turnover/gross receipts",
        "OPTION 2": "8% of turnover/gross receipts (6% for\ndigital receipts)",
        "OPTION 3": "12% of turnover",
        "OPTION 4": "15% of turnover",
        "Answer Code": 2,
        "Correct Answer": "8% of turnover/gross receipts (6% for\ndigital receipts)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 216,
        "QUESTIONS": "Which of the following persons cannot opt for Section 44AD of\npresumptive Taxation Scheme?",
        "OPTION 1": "Resident Individual",
        "OPTION 2": "HUF",
        "OPTION 3": "Partnership Firm\n(other than LLP)",
        "OPTION 4": "LLP",
        "Answer Code": 4,
        "Correct Answer": "LLP",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 217,
        "QUESTIONS": "Which of the following persons cannot opt for Section 44ADA\npresumptive Taxation Scheme?",
        "OPTION 1": "HUF",
        "OPTION 2": "Partnership Firm\n(other than LLP)",
        "OPTION 3": "LLP",
        "OPTION 4": "Resident Individual",
        "Answer Code": 3,
        "Correct Answer": "LLP",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 218,
        "QUESTIONS": "What is the gross receipts of profession in the previous year for Section 44ADA presumptive Taxation Scheme?",
        "OPTION 1": "Less than 50 Lakhs",
        "OPTION 2": "More than 50Lakhs",
        "OPTION 3": "Less than 75 Lakhs (if 95%+digital\ntransaction)",
        "OPTION 4": "More than 75 Lakhs (if 95%+digital\ntransaction)",
        "Answer Code": 3,
        "Correct Answer": "Less than 75 Lakhs (if 95%+digital\ntransaction)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 219,
        "QUESTIONS": "Section 44AE is applicable to those resident assessees who owns trucks in any time during the PY ,for the applicability of presumptive taxation scheme how many tucks does the owner has\nto own:",
        "OPTION 1": "Less than 10 trucks",
        "OPTION 2": "more Than 10 Truck",
        "OPTION 3": "less than 9 Trucks",
        "OPTION 4": "Less than 5 Tucks",
        "Answer Code": 1,
        "Correct Answer": "Less than 10 trucks",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 220,
        "QUESTIONS": "MR. Jay holds shares carrying 55% voting in QPR  Ltd. Mrs. Ansika, wife of Mr. Jay is working as computer software Engineer in QPR Ltd. at a salary of 45,000 p.m. she is,however, not qualified for the job. The other income of Mr. Joy  & Mrs. Ansika are \u20b96,30,000 & \u20b9 2,20,000 respectively. What is the Gross Total Income of Jay and Ansika for the A.Y. 2025-26.Assessee has\nopted out from default tax regime u/s 115BAC.",
        "OPTION 1": "11,70,000",
        "OPTION 2": "11,20,000",
        "OPTION 3": "13,40,000",
        "OPTION 4": "7,10,000",
        "Answer Code": 2,
        "Correct Answer": "11,20,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 221,
        "QUESTIONS": "Mr. Viru a resident Individual, having Income from salaries (computed) \u20b965,000 , Ioss from house property \u20b9 25,000 and Income from non-speculative business is \u20b9 24,000 .Yor are required to find out total income chargeable to tax for the A.Y.\n2025-26 under section 115BAC.",
        "OPTION 1": "90000",
        "OPTION 2": "56000",
        "OPTION 3": "40000",
        "OPTION 4": "66000",
        "Answer Code": 3,
        "Correct Answer": "40000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 222,
        "QUESTIONS": "Mr. shantanu has short term capital gain on sale of shares of \u20b9 180,000 and short term capital loss of A.Y. 2024-25 \u20b9 45,000, Long term capital gain \u20b990,000 Brought forward Long-term capital loss of A.Y. 2023-24 \u20b9 92,000.what is the capital gain taxable in\nthe hands of Mr. shantanu for the A.Y. 2025-26?",
        "OPTION 1": "\u20b9 3,17,000",
        "OPTION 2": "\u20b9 1,33,000",
        "OPTION 3": "\u20b9 2,25,000",
        "OPTION 4": "\u20b9 1,35,000",
        "Answer Code": 4,
        "Correct Answer": "\u20b9 1,35,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 223,
        "QUESTIONS": "Mr.Deepankar has an Ioss from activity of owning and maintaining the race horses and income from textile business \u20b9 80,000 and 98,000 respectively,brought forward textile business loss \u20b9 40,000.What will be the total income in the hands of Mr.\nDeepankar for the A.Y. 2025-26?",
        "OPTION 1": "\u20b9 1,38,000",
        "OPTION 2": "58000",
        "OPTION 3": "68000",
        "OPTION 4": "\u20b9 2,18,000",
        "Answer Code": 2,
        "Correct Answer": "58000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 224,
        "QUESTIONS": "Mr.S has taken three loan for educational purpose on 1st april\n,2024 in which 1st loan for MBA of \u20b96,00,000 annual repayment of loan is \u20b91,20,000 and annual repayment of interest is \u20b9 25,000 and 2nd loan taken for S's son for doing M.Tech. and the loan\namount is \u20b93,00,000 annual repayment of loan is \u20b9 50,000 and annual repayment of interest is \u20b9 10,000.What is the amount\ndeductable u/s 80E for the A.Y.2025-26 shifting out of the default\ntax regime u/s 115BAC(1A).",
        "OPTION 1": "35000",
        "OPTION 2": "\u20b9 1,70,000",
        "OPTION 3": "\u20b9 9,00,000",
        "OPTION 4": "\u20b9 7,30,000",
        "Answer Code": 1,
        "Correct Answer": "35000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 225,
        "QUESTIONS": "Mr.R Wins from lottery,crossword puzzle \u20b9 20,000  what will be the percentage rate of TDS to be charged under section 194B:",
        "OPTION 1": "0.1",
        "OPTION 2": "0.15",
        "OPTION 3": "0.3",
        "OPTION 4": "0.01",
        "Answer Code": 3,
        "Correct Answer": "0.3",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 226,
        "QUESTIONS": "What is the percentage of tax to be charged on long term capital\ngain on some specified cases under section 112A when transfer took place on 10/08/2024 :",
        "OPTION 1": "0.1",
        "OPTION 2": "0.125",
        "OPTION 3": "0.3",
        "OPTION 4": "0.15",
        "Answer Code": 2,
        "Correct Answer": "0.125",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 227,
        "QUESTIONS": "What will be the period of holding for the treatment of Bonus shares:",
        "OPTION 1": "Date of allotment of bonus shares to date of transfer",
        "OPTION 2": "Date of allotment of bonus shares to date of renouncement",
        "OPTION 3": "Date of transfer  to date of resale",
        "OPTION 4": "Date of allotment  to date of new purchase",
        "Answer Code": 1,
        "Correct Answer": "Date of allotment of bonus shares to date of transfer",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 228,
        "QUESTIONS": "What will be the treatment for share of profit in partnership firm:",
        "OPTION 1": "Taxable",
        "OPTION 2": "Exempt",
        "OPTION 3": "Deduction Allowed",
        "OPTION 4": "Taxable (to the\nextent of deduction allowed to the firm)",
        "Answer Code": 2,
        "Correct Answer": "Exempt",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 229,
        "QUESTIONS": "Mr. subrata started a business on 1/11/2024 with preliminary\nexpenses of \u20b9 7,50,000 and cost of the project is \u20b990,00,000. What is the allowable expenditure for the A.Y. 2025-26.",
        "OPTION 1": "90000",
        "OPTION 2": "\u20b9 1,50,000",
        "OPTION 3": "60000",
        "OPTION 4": "\u20b9 10,50,000",
        "Answer Code": 1,
        "Correct Answer": "90000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 230,
        "QUESTIONS": "What will be the percentage of depreciation to be charged under\nsection 32 for residential building ?",
        "OPTION 1": "0.05",
        "OPTION 2": "0.15",
        "OPTION 3": "0.25",
        "OPTION 4": "0.3",
        "Answer Code": 1,
        "Correct Answer": "0.05",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 231,
        "QUESTIONS": "Mr.Rammaya received cash gift of \u20b9 51,000 from his friends on the occasion of his 50th birthday. None of his friends are relatives. The amount liable to tax in the hands of Rammaya would be:",
        "OPTION 1": "51000",
        "OPTION 2": "Nil",
        "OPTION 3": "51000",
        "OPTION 4": "5000",
        "Answer Code": 1,
        "Correct Answer": "51000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 232,
        "QUESTIONS": "Zenat & co. is a partnership firm whose turnover for the previous year 2024-25 was \u20b9230 lakhs.The due date of filling the return of income of the firm is:",
        "OPTION 1": "31st july,2025",
        "OPTION 2": "31st October,2025",
        "OPTION 3": "30th November,2025",
        "OPTION 4": "31st March,2026",
        "Answer Code": 2,
        "Correct Answer": "31st October,2025",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 233,
        "QUESTIONS": "Senior Citizen is not liable for advance tax, if he does not get any income from:",
        "OPTION 1": "Securities & Interest",
        "OPTION 2": "Profit and gain from business or\nprofession",
        "OPTION 3": "Capital gains",
        "OPTION 4": "All of the above",
        "Answer Code": 2,
        "Correct Answer": "Profit and gain from business or\nprofession",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 234,
        "QUESTIONS": "Loss from speculation business can be set-off against:",
        "OPTION 1": "Income from house property",
        "OPTION 2": "Income from salaries",
        "OPTION 3": "Income from\nspeculation business only",
        "OPTION 4": "any head of income",
        "Answer Code": 3,
        "Correct Answer": "Income from\nspeculation business only",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 235,
        "QUESTIONS": "The municipal value of a property is \u20b93,25,000; fair rent is\n\u20b92,11,000;standard rent is \u20b92,00,00 and the actual rent is \u20b93,55,000\n.The gross annual value of the property would be:",
        "OPTION 1": "\u20b9 3,25,000",
        "OPTION 2": "\u20b9 2,00,000",
        "OPTION 3": "\u20b9 3,55,000",
        "OPTION 4": "\u20b9 2,11,000",
        "Answer Code": 3,
        "Correct Answer": "\u20b9 3,55,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 236,
        "QUESTIONS": "If a payee eligible for commission exceeding \u20b920,000 does not\nfurnish his PAN to the payer,tax deductible at source at:",
        "OPTION 1": "0.3",
        "OPTION 2": "0.05",
        "OPTION 3": "0.2",
        "OPTION 4": "Nil",
        "Answer Code": 3,
        "Correct Answer": "0.2",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 237,
        "QUESTIONS": "Where an assessee fails to pay advance tax or defers the payment of advance tax on specified date,he shall be liable to pay interest\nunder section:",
        "OPTION 1": "234B",
        "OPTION 2": "234C",
        "OPTION 3": "Both 234B and 234C",
        "OPTION 4": "none",
        "Answer Code": 3,
        "Correct Answer": "Both 234B and 234C",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 238,
        "QUESTIONS": "Any payment from agniveer corpus Fund to a person enrolled\nunder the Agnipath scheme or to the nominee shall be:",
        "OPTION 1": "Exempt",
        "OPTION 2": "taxable",
        "OPTION 3": "Deduction Allowed",
        "OPTION 4": "Not taxable",
        "Answer Code": 1,
        "Correct Answer": "Exempt",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 239,
        "QUESTIONS": "What will be the treatment for the death of member of armed forces on theirs operational duties:",
        "OPTION 1": "Amount received by legal heirs fully\nexempt",
        "OPTION 2": "taxable",
        "OPTION 3": "Deduction Allowed",
        "OPTION 4": "Not taxable",
        "Answer Code": 1,
        "Correct Answer": "Amount received by legal heirs fully\nexempt",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 240,
        "QUESTIONS": "P has taken a house on rent and sublets the same to Q.Income from such house property shall be taxable under the head:",
        "OPTION 1": "Income from house property",
        "OPTION 2": "Income from house property or income from other sources\nas decided by R",
        "OPTION 3": "Income from other sources",
        "OPTION 4": "None of the above",
        "Answer Code": 3,
        "Correct Answer": "Income from other sources",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 241,
        "QUESTIONS": "GST was introduced in India with effect from:",
        "OPTION 1": "2017-01-01",
        "OPTION 2": "2017-04-01",
        "OPTION 3": "2018-01-01",
        "OPTION 4": "2017-07-01",
        "Answer Code": 4,
        "Correct Answer": "2017-07-01",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 242,
        "QUESTIONS": "As a result of constitution amendment for GST a Separate List ---has been inserted in the\nconstitution.",
        "OPTION 1": "Article 246A",
        "OPTION 2": "Article 146B",
        "OPTION 3": "Article 122 C",
        "OPTION 4": "Article 101B",
        "Answer Code": 1,
        "Correct Answer": "Article 246A",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 243,
        "QUESTIONS": "SGST is applicable when",
        "OPTION 1": "Goods are sold within a state",
        "OPTION 2": "Goods are sold from one GST dealer to a customer",
        "OPTION 3": "Goods are sold by a GST dealer to another GST dealer",
        "OPTION 4": "Inter-state supply",
        "Answer Code": 1,
        "Correct Answer": "Goods are sold within a state",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 244,
        "QUESTIONS": "Goods and service tax is --",
        "OPTION 1": "Supply based",
        "OPTION 2": "Consumption based",
        "OPTION 3": "Both supply and\nconsumption based",
        "OPTION 4": "None of these",
        "Answer Code": 2,
        "Correct Answer": "Consumption based",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 245,
        "QUESTIONS": "Under GST law SAC refers to --",
        "OPTION 1": "Systematic\nAccounting Code",
        "OPTION 2": "Service Accounting\nCode",
        "OPTION 3": "System\nadministration code",
        "OPTION 4": "Scientific accounting\ncode",
        "Answer Code": 2,
        "Correct Answer": "Service Accounting\nCode",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 246,
        "QUESTIONS": "On supply of OIDAR Services by a person located in taxable territory to a non-taxable online recipient. Who is liable to pay GST\nin this case?",
        "OPTION 1": "Recipient",
        "OPTION 2": "Supplier",
        "OPTION 3": "Both",
        "OPTION 4": NaN,
        "Answer Code": 2,
        "Correct Answer": "Supplier",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 247,
        "QUESTIONS": "Zero rated supply includes:",
        "OPTION 1": "Export of goods and services",
        "OPTION 2": "Supply of goods and services to a SEZ developer or SEZ\nUnit",
        "OPTION 3": "Supply of goods and services by a SEZ developer or SEZ\nUnit",
        "OPTION 4": "Both (1) and (2)",
        "Answer Code": 4,
        "Correct Answer": "Both (1) and (2)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 248,
        "QUESTIONS": "The highest GST rate applicable now is ---",
        "OPTION 1": "1",
        "OPTION 2": "0.18",
        "OPTION 3": "0.28",
        "OPTION 4": "0.5",
        "Answer Code": 3,
        "Correct Answer": "0.28",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 249,
        "QUESTIONS": "Any goods other than capital goods used or intended to be used by\na supplier in the course or furtherance of business is",
        "OPTION 1": "Input",
        "OPTION 2": "Output",
        "OPTION 3": "Merit goods",
        "OPTION 4": "White goods",
        "Answer Code": 1,
        "Correct Answer": "Input",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 250,
        "QUESTIONS": "Two or more individual supplies of goods or services, or any\ncombination thereof, made in conjunction with each other",
        "OPTION 1": "Mixed supply",
        "OPTION 2": "Composite supply",
        "OPTION 3": "Common supply",
        "OPTION 4": "Continous supply",
        "Answer Code": 1,
        "Correct Answer": "Mixed supply",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 251,
        "QUESTIONS": "Liability to pay tax by the recipient of supply of goods or services is called",
        "OPTION 1": "Output tax",
        "OPTION 2": "Reverse charge",
        "OPTION 3": "Input tax",
        "OPTION 4": "None of these",
        "Answer Code": 2,
        "Correct Answer": "Reverse charge",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 252,
        "QUESTIONS": "Defination of Input includes capital goods.",
        "OPTION 1": "Yes",
        "OPTION 2": "No",
        "OPTION 3": "Certain Capital\nGoods only",
        "OPTION 4": "None of the above",
        "Answer Code": 2,
        "Correct Answer": "No",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 253,
        "QUESTIONS": "To claim ITC on capital Goods is it mandatory to capitalise the\ncapital goods in books of accounts",
        "OPTION 1": "Yes",
        "OPTION 2": "No",
        "OPTION 3": "Optional",
        "OPTION 4": "None of the above",
        "Answer Code": 1,
        "Correct Answer": "Yes",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 254,
        "QUESTIONS": "Under Reverse charge Mechanisum the time of supply as per CGST Act,2017  shall be-",
        "OPTION 1": "the date of receipt of goods",
        "OPTION 2": "the date of payment as entered in the books of recipient or the date payment is debited in his bank account whichever\nis earlier",
        "OPTION 3": "the date immediately following 30 days from the date of issue of invoice or any other documents",
        "OPTION 4": "earliest of the option\n(1) or (2) or(3)",
        "Answer Code": 4,
        "Correct Answer": "earliest of the option\n(1) or (2) or(3)",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 255,
        "QUESTIONS": "If the recipient fails to pay to the supplier of goods or services or both, other than the supplies on which tax is payable on reverse charge basis, the amount towards the value of supply along with\ntax payable thereon within a period of:",
        "OPTION 1": "180 days from the date of issue of invoice by the supplier",
        "OPTION 2": "180 days from the date of payment to the supplier",
        "OPTION 3": "90 days from the date of issue of invoice by the supplier",
        "OPTION 4": "60 days from the date of payment to the supplier",
        "Answer Code": 1,
        "Correct Answer": "180 days from the date of issue of invoice by the supplier",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 256,
        "QUESTIONS": "supply in course of export or supply from Domestic Tariff Area to\nspecial Economic Zone Unit/Developer are regarded as-",
        "OPTION 1": "Zero rated supply",
        "OPTION 2": "Exempted  or Nil\nrated Supply",
        "OPTION 3": "Both option (1) and\n(2)",
        "OPTION 4": "None of the Above",
        "Answer Code": 1,
        "Correct Answer": "Zero rated supply",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 257,
        "QUESTIONS": "GSTIN stands for:",
        "OPTION 1": "Goods and services Taxper Identification Number",
        "OPTION 2": "Goods and Services Troll Identification Number",
        "OPTION 3": "Goods and Sevices Trade Information Number",
        "OPTION 4": "Goods and Services Troll Information Number",
        "Answer Code": 1,
        "Correct Answer": "Goods and services Taxper Identification Number",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 258,
        "QUESTIONS": "Mr. X  has done following transaction :sales of goods is \u20b9 98,00,000 ,commission charged on foreign currency  \u20b9 15,000,sale of shares and securities \u20b9 51,00,000. what will be the GST payble?",
        "OPTION 1": "98,15,000",
        "OPTION 2": "1,49,15,000",
        "OPTION 3": "1,49,00,000",
        "OPTION 4": "51,15,000",
        "Answer Code": 1,
        "Correct Answer": "98,15,000",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 259,
        "QUESTIONS": "Mr. K of India imported certain taxable services from Mr. R of\nU.S.A. on 5.9.2025.Invoice is also issued by Mr.R on the same date, If payment is made by Mr. K on 5.10.2025 .Determine Time of Supply of Mr. K being the recipient of service liable to pay GST u/s. 5(3) of the IGST Act,2017.",
        "OPTION 1": "2025-11-05",
        "OPTION 2": "2025-10-08",
        "OPTION 3": "2025-10-01",
        "OPTION 4": "2025-09-05",
        "Answer Code": 3,
        "Correct Answer": "2025-10-01",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    },
    {
        "SL NO": 260,
        "QUESTIONS": "Determine the value of supply of Surya. Surya charged \u20b960,000 for a supplier of Television to Kanak .He has received Subsidy directly linked to supply and received from a charitable Trust engaged in\npromotion of Television of \u20b918,000",
        "OPTION 1": "60000",
        "OPTION 2": "78000",
        "OPTION 3": "42000",
        "OPTION 4": "18000",
        "Answer Code": 2,
        "Correct Answer": "78000",
        "Explanation": "Under Section 15 of the CGST Act, subsidies directly linked to the price (excluding government subsidies) are included in the value of supply. 60000 + 18000 = 78000."
    },
    {
        "SL NO": 261,
        "QUESTIONS": "The amount available in electronic credit ledger cannot be used for\npayment of which of the following:",
        "OPTION 1": "Intrest",
        "OPTION 2": "Penalty",
        "OPTION 3": "Fees",
        "OPTION 4": "All of the above",
        "Answer Code": 4,
        "Correct Answer": "All of the above",
        "Explanation": "The electronic credit ledger can be used to pay Output Tax only. It cannot be used for interest, penalty, fees, or other sums."
    },
    {
        "SL NO": 262,
        "QUESTIONS": "Date of receipt of payment means:",
        "OPTION 1": "Date of entry in the books",
        "OPTION 2": "Date of payment\ncredited into bank account",
        "OPTION 3": "Earlier of option (1) & (2)",
        "OPTION 4": "Date of filling of return",
        "Answer Code": 3,
        "Correct Answer": "Earlier of option (1) & (2)",
        "Explanation": "As per Time of Supply rules, the date of receipt of payment is the date of entry in books or the date of credit in the bank, whichever is earlier."
    },
    {
        "SL NO": 263,
        "QUESTIONS": "Customs duty in India is levied under which of the following legislations?",
        "OPTION 1": "Customs Act, 1962",
        "OPTION 2": "Customs Tariff Act, 1975",
        "OPTION 3": "Both (1) and (2)",
        "OPTION 4": "Foreign Trade (Development & Regulation) Act,\n1992",
        "Answer Code": 3,
        "Correct Answer": "Both (1) and (2)",
        "Explanation": "Customs duties are governed by the Customs Act, 1962 (for procedures/levy) and the Customs Tariff Act, 1975 (for rates)."
    },
    {
        "SL NO": 264,
        "QUESTIONS": "The safeguard duty imposed shall be in force for the period of --from the date of its imposition and can be extended with the total\nperiod of levy not exceeding----",
        "OPTION 1": "4 years,10 years",
        "OPTION 2": "3 years,5years",
        "OPTION 3": "5years,5years",
        "OPTION 4": "none of the above",
        "Answer Code": 1,
        "Correct Answer": "4 years,10 years",
        "Explanation": "Safeguard duty is typically imposed for 4 years and can be extended up to a total of 10 years."
    },
    {
        "SL NO": 265,
        "QUESTIONS": "Basic custom duty on exported goods is levied at the rates specified in the:",
        "OPTION 1": "First Schedule of the\nCustoms Tariff Act, 1975",
        "OPTION 2": "Second Schedule of\nthe Customs Tariff Act, 1975",
        "OPTION 3": "Customs Act",
        "OPTION 4": "Customs Manual",
        "Answer Code": 2,
        "Correct Answer": "Second Schedule of\nthe Customs Tariff Act, 1975",
        "Explanation": "Export duties are specified in the Second Schedule of the Customs Tariff Act, 1975."
    },
    {
        "SL NO": 266,
        "QUESTIONS": "Customs Duty is not leviable in certain cases except:",
        "OPTION 1": "Pilfered Goods",
        "OPTION 2": "Relinquishment of\ntitle on the goods",
        "OPTION 3": "Remission of duty on\ndestroyed goods",
        "OPTION 4": "Export of goods",
        "Answer Code": 4,
        "Correct Answer": "Export of goods",
        "Explanation": "Under Section 13, if imported goods are pilfered after unloading but before the order for clearance, no duty is leviable (unless restored)."
    },
    {
        "SL NO": 267,
        "QUESTIONS": "The value of imported goods shall be the ----",
        "OPTION 1": "Transaction value",
        "OPTION 2": "FOB",
        "OPTION 3": "Custom Duty",
        "OPTION 4": "Deductive value",
        "Answer Code": 1,
        "Correct Answer": "Transaction value",
        "Explanation": "Explanation based on standard provisions of the Income Tax Act or GST/Customs laws relevant to the correct answer."
    }           
 ]
          },
          {
            label: "Cost Accounting",
            questions: [
        
            ]
          }
        ]
      },
      {
        label: "Group-2",
        subjects: [
          {
            label: "OM & SM",
            questions: [
        {
        "SL NO":1,
        "QUESTIONS":"OM deals with -",
        "OPTION 1":"both tangible and\nintangible product",
        "OPTION 2":"tangible product",
        "OPTION 3":"intangible services",
        "OPTION 4":"tangible product\nand intangible\nservices",
        "ANSWER CODE":4,
        "EXPLANATION":"Operations Management encompasses the production of physical goods (tangible) and the delivery of services (intangible)."
    },
    {
        "SL NO":2,
        "QUESTIONS":"One of the example of pure service :",
        "OPTION 1":"teaching",
        "OPTION 2":"product service",
        "OPTION 3":"repairing service",
        "OPTION 4":"All of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"Teaching is a pure service because it involves knowledge transfer without a physical product being sold to the customer."
    },
    {
        "SL NO":3,
        "QUESTIONS":"Objectives of operations management can be categorized into\n:",
        "OPTION 1":"two",
        "OPTION 2":"three",
        "OPTION 3":"four",
        "OPTION 4":"seven",
        "ANSWER CODE":1,
        "EXPLANATION":"The primary objectives are usually categorized into two: Customer Service and Effective Resource Utilization."
    },
    {
        "SL NO":4,
        "QUESTIONS":"One of the objective of operation management is",
        "OPTION 1":"product service",
        "OPTION 2":"Customer service",
        "OPTION 3":"planning",
        "OPTION 4":"None of them",
        "ANSWER CODE":2,
        "EXPLANATION":"Customer service is a key objective, focusing on providing the right product\/service at the right time and price."
    },
    {
        "SL NO":5,
        "QUESTIONS":"Principal function of customer service are",
        "OPTION 1":"manufacture-supply-transport-service",
        "OPTION 2":"manufacture-transport-service-supply",
        "OPTION 3":"mafucture- service-transport- supply",
        "OPTION 4":"manufacture-transport-supply-service",
        "ANSWER CODE":4,
        "EXPLANATION":"The sequence involves manufacturing the product, transporting it, supplying it to the market, and providing service."
    },
    {
        "SL NO":6,
        "QUESTIONS":"The desired objective of Production and Operations\nManagement is:",
        "OPTION 1":"Use cheap\nmachinery to\nproduce",
        "OPTION 2":"To train unskilled\nworkers to\nmanufacture\ngoods perfectly",
        "OPTION 3":"Optimal utilisation\nof available\nresources",
        "OPTION 4":"To earn good\nprofits.",
        "ANSWER CODE":3,
        "EXPLANATION":"Efficient production management aims to use resources (men, machines, materials) in the most effective way possible."
    },
    {
        "SL NO":7,
        "QUESTIONS":"Which one of the following is not an activity under\nproductions and operations management?",
        "OPTION 1":"Location of\nfacilities",
        "OPTION 2":"Plant layouts and\nMaterial\nHandling;",
        "OPTION 3":"Product Design;",
        "OPTION 4":"Market\npenetration;",
        "ANSWER CODE":4,
        "EXPLANATION":"Market penetration is a marketing strategy, whereas location, layout, and design are core operations activities."
    },
    {
        "SL NO":8,
        "QUESTIONS":"Operations management is concerned essentially with the\nutilization of resources. Utilisation of resources means",
        "OPTION 1":"Obtaining\nmaximum effect\nfrom resources",
        "OPTION 2":"Minimising loss of\nresources,",
        "OPTION 3":"Minimising\nunderutilisation or\nwaste of resources",
        "OPTION 4":"All the above",
        "ANSWER CODE":4,
        "EXPLANATION":"Resource utilization involves maximizing effect, minimizing loss, and reducing waste to ensure efficiency."
    },
    {
        "SL NO":9,
        "QUESTIONS":"Which one of the following is not an objective of Operations\nManagement?",
        "OPTION 1":"To satisfy\ncustomers by\nproviding right\nthing at the right\nplace at the right\ntime",
        "OPTION 2":"To satisfy\ncustomers by\nproviding right\nthing at the right\nprice at the right\ntime",
        "OPTION 3":"To satisfy\ncustomers by\nproviding right\nthing at the right\nprice at right\nquality",
        "OPTION 4":"To satisfy\ncustomers by\nproviding right\nthing with right\ndesign with desired\nfeatures",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer identifies what is NOT a primary objective compared to the others provided."
    },
    {
        "SL NO":10,
        "QUESTIONS":"Productions and Operations Management distinguishes itself\nfrom other functions such as personnel, marketing, finance,\netc. mainly by its primary concern:",
        "OPTION 1":"Conversion by using\nintellectual\nproperties of a\nconcern;",
        "OPTION 2":"Conversion by\nusing physical\nresources",
        "OPTION 3":"Conversion by\nusing services\nprovided by other\nfunctions",
        "OPTION 4":"Conversion by\nusing machineries",
        "ANSWER CODE":2,
        "EXPLANATION":"Operations is distinct because it focuses on the physical transformation of inputs into finished outputs."
    },
    {
        "SL NO":11,
        "QUESTIONS":"Four dimensions of competitiveness that measure the\neffectiveness of the operations function are",
        "OPTION 1":"Cost, Quality,\nDependability as a\nsupplier, Flexibility",
        "OPTION 2":"Price, worth,\nDependability as a\nsupplier,\nProductivity",
        "OPTION 3":"Quantity, Quality,\nPrice, Worth",
        "OPTION 4":"Cost, Quality,\nQuantity, Price",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'cost, quality, dependability as a supplier, flexibility' because it directly addresses the four dimensions of competitiveness that measure the\neffectiveness of the operations function are in the context of operations management principles."
    },
    {
        "SL NO":12,
        "QUESTIONS":"Generally the size of the order for production in Job\nproduction is:",
        "OPTION 1":"Small",
        "OPTION 2":"Large",
        "OPTION 3":"Medium",
        "OPTION 4":"Very large",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'small' because it directly addresses the generally the size of the order for production in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":13,
        "QUESTIONS":"The desired objective of Production and Operations\nManagement is:",
        "OPTION 1":"Use cheap\nmachinery to\nproduce",
        "OPTION 2":"To train unskilled\nworkers to\nmanufacture\ngoods perfectly",
        "OPTION 3":"Optimal utilisation\nof available\nresources",
        "OPTION 4":"To earn good\nprofits.",
        "ANSWER CODE":3,
        "EXPLANATION":"Efficient production management aims to use resources (men, machines, materials) in the most effective way possible."
    },
    {
        "SL NO":14,
        "QUESTIONS":"To decide work load for men and machines:",
        "OPTION 1":"Medium range\nforecasting is used",
        "OPTION 2":"Short term\nforecasting is used",
        "OPTION 3":"Long range\nforecasting is used",
        "OPTION 4":"A combination of\nlong range and\nmedium range\nforecasting is used.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'short term forecasting is used' because it directly addresses the to decide work load for men and machines: in the context of operations management principles."
    },
    {
        "SL NO":15,
        "QUESTIONS":"The act of assessing the future and make provisions for it is\nknown as",
        "OPTION 1":"Planning",
        "OPTION 2":"Forecasting",
        "OPTION 3":"Assessment",
        "OPTION 4":"Scheduling",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'forecasting' because it directly addresses the the act of assessing the future and make provisions for it is\nknown as in the context of operations management principles."
    },
    {
        "SL NO":16,
        "QUESTIONS":"The time horizon selected for forecasting depends on:",
        "OPTION 1":"The salability of the\nproduct",
        "OPTION 2":"The selling\ncapacity of\nSalesman",
        "OPTION 3":"Purpose for which\nforecast is made",
        "OPTION 4":"Time required for\nproduction cycle",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":17,
        "QUESTIONS":"Important factor in forecasting production is:",
        "OPTION 1":"Environmental\nchanges",
        "OPTION 2":"Available\ncapacity of\nmachines",
        "OPTION 3":"Disposable income\nof the consumer",
        "OPTION 4":"Changes in the\npreference of the\nconsumer.",
        "ANSWER CODE":2,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":18,
        "QUESTIONS":"Application of technology or process to the raw material to\nadd use value is known as:",
        "OPTION 1":"Product",
        "OPTION 2":"Production",
        "OPTION 3":"Application of\ntechnology",
        "OPTION 4":"Combination of\ntechnology and\nprocess.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the application of technology or process to the raw material to\nadd use value is known as: in the context of operations management principles."
    },
    {
        "SL NO":19,
        "QUESTIONS":"In Production by disintegration the material undergoes:",
        "OPTION 1":"Change in economic\nvalue only",
        "OPTION 2":"Change in\nphysical and\nchemical\ncharacteristics",
        "OPTION 3":"Change in\ntechnology only",
        "OPTION 4":"None of the above",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'change in physical and chemical characteristics' because it directly addresses the in production by disintegration the material undergoes: in the context of operations management principles."
    },
    {
        "SL NO":20,
        "QUESTIONS":"Use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as:",
        "OPTION 1":"Transformation\nprocess",
        "OPTION 2":"Transformation of\ninput to output",
        "OPTION 3":"Production",
        "OPTION 4":"Technology\nchange.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as: in the context of operations management principles."
    },
    {
        "SL NO":21,
        "QUESTIONS":"Conversion of inputs into outputs is known as:",
        "OPTION 1":"Application of\ntechnology",
        "OPTION 2":"Operations\nmanagement",
        "OPTION 3":"Manufacturing\nproducts",
        "OPTION 4":"Product.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'operations management' because it directly addresses the conversion of inputs into outputs is known as: in the context of operations management principles."
    },
    {
        "SL NO":22,
        "QUESTIONS":"Which one of the following is the external factor impacting\neffective capacity?",
        "OPTION 1":"Product standards",
        "OPTION 2":"Scheduling",
        "OPTION 3":"Motivation",
        "OPTION 4":"Product mix",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":23,
        "QUESTIONS":"Increasing capacity utilisation depends on",
        "OPTION 1":"Ability to increase\ndesign capacity",
        "OPTION 2":"Ability to increase\neffective capacity",
        "OPTION 3":"Ability to increase\ncapacity chunk",
        "OPTION 4":"Ability to increase\nresource\nendowments",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":24,
        "QUESTIONS":"Which one of the following is not within the purview of Long\nRange planning?",
        "OPTION 1":"Building a new\nfacility",
        "OPTION 2":"Expanding the\nexisting facility",
        "OPTION 3":"Moving to a new\nfacility due to\nforecasted changes\nin demand",
        "OPTION 4":"Preparation of\novertime budget\nfor workforce",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'preparation of overtime budget for workforce' because it directly addresses the which one of the following is not within the purview of long\nrange planning? in the context of operations management principles."
    },
    {
        "SL NO":25,
        "QUESTIONS":"The basic difference between slack and float time is that",
        "OPTION 1":"A slack is used with\nreference to events\nwhereas float is\nused with reference\nto activities",
        "OPTION 2":"A float is used\nwith reference to\nevents whereas\nslack is used with\nreference to\nactivities",
        "OPTION 3":"A slack is used with\nreference to critical\npath whereas float\nis used with\nreference to non-critical paths",
        "OPTION 4":"A slack is used\nwith reference to\nscheduling\nwhereas float is\nused with\nreference to\ncrashing",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'a slack is used with reference to events whereas float is used with reference to activities' because it directly addresses the the basic difference between slack and float time is that in the context of operations management principles."
    },
    {
        "SL NO":26,
        "QUESTIONS":"Which one of the following is not a factor in determining\nEconomic Lot Size for manufacturing?",
        "OPTION 1":"Production\nSchedule",
        "OPTION 2":"Usage rate",
        "OPTION 3":"Manufacturing Cost",
        "OPTION 4":"Cost of\nDeterioration",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'production schedule' because it directly addresses the which one of the following is not a factor in determining\neconomic lot size for manufacturing? in the context of operations management principles."
    },
    {
        "SL NO":27,
        "QUESTIONS":"Which one of the following is not a factor in planning service\ncapacity",
        "OPTION 1":"Period of production",
        "OPTION 2":"Need to be near\ncustomers",
        "OPTION 3":"Inability to store\nservices",
        "OPTION 4":"Degree of\nvolatility of\ndemand",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":28,
        "QUESTIONS":"It is extra capacity used to offset demand uncertainty. This is",
        "OPTION 1":"Capacity Cushion =\nActual output -Demand",
        "OPTION 2":"Capacity Cushion\n= Capacity \u2013\nExpected demand",
        "OPTION 3":"Capacity Tolerance\n= Effective capacity\n- Actual output",
        "OPTION 4":"Capacity Cushion\n= Capacity \u2013\nEffective Capacity",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":29,
        "QUESTIONS":"Which one of the following is correct?",
        "OPTION 1":"Capacity decision\ndoes not affect\nproduct lead times",
        "OPTION 2":"Capacity decisions\nmust link\nbackward &\nforward channels\nin the whole\noperation chain",
        "OPTION 3":"Expansionist\nstrategy does not\nhelp a firm to\nreduce its costs and\ncompete on price",
        "OPTION 4":"Wait & see\nstrategy improves\nmarket share over\nthe long run",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'capacity decisions must link backward & forward channels in the whole operation chain' because it directly addresses the which one of the following is correct? in the context of operations management principles."
    },
    {
        "SL NO":30,
        "QUESTIONS":"Leading capacity strategy",
        "OPTION 1":"Builds capacity in\nanticipation of\nincreasing future\ndemand",
        "OPTION 2":"Faces increasing\ndemand with the\nundeutilised\ncurrent capacity",
        "OPTION 3":"Builds capacity in\nanticipation of\nincreasing product\nvarieties",
        "OPTION 4":"Faces increasing\nconsumption with\nunsold stock",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":31,
        "QUESTIONS":"Which one of the following does not reduce effective\ncapacity?",
        "OPTION 1":"Paperwork required\nby Government\nregulatory agencies",
        "OPTION 2":"Pollution standard\non products",
        "OPTION 3":"Efficient\ndistributors",
        "OPTION 4":"Higher labour\nturnover",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":32,
        "QUESTIONS":"Which one of the following is an operational factor that\ndetermines effective capacity?",
        "OPTION 1":"Product standards",
        "OPTION 2":"Quality\ncapabilities",
        "OPTION 3":"Learning rates",
        "OPTION 4":"Quality assurance",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":33,
        "QUESTIONS":"Which one of the following is not a factor impacting effective\ncapacity?",
        "OPTION 1":"The design of\nfacilities",
        "OPTION 2":"Product mix",
        "OPTION 3":"Layout of the work\nspace",
        "OPTION 4":"Market share",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":34,
        "QUESTIONS":"Benefits of high utilisation are realised only when",
        "OPTION 1":"Effective capacity is\nfully achieved",
        "OPTION 2":"There is high\nefficiency",
        "OPTION 3":"Breakdown\nmaintenances are\nminimum",
        "OPTION 4":"There is demand\nfor output",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'there is demand for output' because it directly addresses the benefits of high utilisation are realised only when in the context of operations management principles."
    },
    {
        "SL NO":35,
        "QUESTIONS":"Key to improving capacity utilisation is",
        "OPTION 1":"To increase\neffective capacity",
        "OPTION 2":"To increase design\ncapacity",
        "OPTION 3":"To decrease\neffective capacity",
        "OPTION 4":"To increase\nmaintenance\nfrequency of the\ncapacity",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":36,
        "QUESTIONS":"Utilisation of an operation facility is measured by",
        "OPTION 1":"(Effective\nCapacity)\/(Design\nCapacity)*100",
        "OPTION 2":"(Actual\nOutput)\/(Design\nCpacity)*100",
        "OPTION 3":"(Actual\noutput)\/(Effective\nCapacity)*100",
        "OPTION 4":"(Design\nCapacity)\/(Effectiv\ne Capacity)*100",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '(actual output)\/(design cpacity)*100' because it directly addresses the utilisation of an operation facility is measured by in the context of operations management principles."
    },
    {
        "SL NO":37,
        "QUESTIONS":"Efficiency of an operation facility is measured by",
        "OPTION 1":"(Effective\nCapacity)\/(Design\nCapacity)*100",
        "OPTION 2":"(Actual\nOutput)\/(Design\nCpacity)*100",
        "OPTION 3":"(Actual\noutput)\/(Effective\nCapacity)*100",
        "OPTION 4":"(Design\nCapacity)\/(Effectiv\ne Capacity)*100",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is '(actual output)\/(effective capacity)*100' because it directly addresses the efficiency of an operation facility is measured by in the context of operations management principles."
    },
    {
        "SL NO":38,
        "QUESTIONS":"Which one of the following questions are not answered by\nCapacity planning?",
        "OPTION 1":"What kind of\ncapacity is needed?",
        "OPTION 2":"How much is\nneeded to match\ndemand?",
        "OPTION 3":"When is it needed?",
        "OPTION 4":"For whom it is\nneeded?",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":39,
        "QUESTIONS":"Out of Balance Capacity occurs",
        "OPTION 1":"When there is a gap\nbetween supply and\ndemand",
        "OPTION 2":"When there is a\ngap between long\nterm supply and\nlong term demand",
        "OPTION 3":"When there is a gap\nbetween current\nand desired\ncapacity",
        "OPTION 4":"When there is a\ngap between actual\nsupply and EOQ\nsupply",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":40,
        "QUESTIONS":"The goal of capacity planning of an organisation is",
        "OPTION 1":"To achieve a match\nbetween its long\nterm supply\ncapabilities and the\nactual level of long\nterm demand",
        "OPTION 2":"To achieve a level\nof operation so\nthat supply failure\ncould be\nmaintained at \u2264\n1% of long term\ndemand",
        "OPTION 3":"To achieve a level\nof operation so that\nperiodic mean\noperation remain\nwithin 95% of long\nterm demand",
        "OPTION 4":"To achieve a\nmatch between its\nlong term supply\ncapabilities and the\npredicted level of\nlong term demand",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":41,
        "QUESTIONS":"Capacity refers to",
        "OPTION 1":"An upper limit or\nceiling on the load\nthat an operating\nunit can handle",
        "OPTION 2":"A range from a\nlower limit to an\nupper limit of load\nthrough which an\noperating unit\ncould operate",
        "OPTION 3":"A limit on the load\nthat an operating\nunit could handle\nonly with 5%\ndeviation",
        "OPTION 4":"An upper limit of\nload which an\noperating unit\ncould break during\nemergency",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":42,
        "QUESTIONS":"This denotes the highest output established by the actual trial\nruns of the productive machines installed. This is",
        "OPTION 1":"Design capacity",
        "OPTION 2":"Rated capacity",
        "OPTION 3":"Effective capacity",
        "OPTION 4":"Licensed capacity",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'rated capacity' because it directly addresses the this denotes the highest output established by the actual trial\nruns of the productive machines installed. this is in the context of operations management principles."
    },
    {
        "SL NO":43,
        "QUESTIONS":"Which one of the following is not a key question in Capacity\nplanning?",
        "OPTION 1":"What kind of\ncapacity is needed?",
        "OPTION 2":"What kind of\nfacilities are\nneeded?",
        "OPTION 3":"How much capacity\nis needed to match\ndemand?",
        "OPTION 4":"When the capacity\nis it needed?",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":44,
        "QUESTIONS":"Capacity Utilisation is",
        "OPTION 1":"The degree to which\na resource such as\nequipment, space or\nthe workforce is\ncurrently being used",
        "OPTION 2":"The degree to\nwhich a resource\nsuch as\nequipment, space\nor the workforce is\ncurrently being\nheld as reserve",
        "OPTION 3":"The degree to\nwhich a resource\nsuch as equipment,\nspace or the\nworkforce is\ncurrently being\nused for achieving\ninstalled capacity",
        "OPTION 4":"The degree to\nwhich a resource\nsuch as equipment,\nspace or the\nworkforce is\ncurrently being\nused for achieving\noptimisation",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":45,
        "QUESTIONS":"Actual Output cannot exceed effective capacity because of",
        "OPTION 1":"Problems of\nscheduling &\nbalancing\noperations",
        "OPTION 2":"Rejection due to\nquality problems",
        "OPTION 3":"Need for periodic\nmaintenance of\nequipment",
        "OPTION 4":"Changing product\nmix",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":46,
        "QUESTIONS":"Need for periodic maintenance of equipment always makes",
        "OPTION 1":"Licensed capacity >\nInstalled capacity",
        "OPTION 2":"Installed capacity\n< Effective\ncapacity",
        "OPTION 3":"Design capacity >\nEffective capacity",
        "OPTION 4":"Licensed capacity\n= Effective\ncapacity",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":47,
        "QUESTIONS":"If design capacity is reduced by allowances such as personal\ntime and maintenance, the resultant capacity is",
        "OPTION 1":"Design capacity",
        "OPTION 2":"Effective capacity",
        "OPTION 3":"Installed capacity",
        "OPTION 4":"Licensed capacity",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":48,
        "QUESTIONS":"This capacity is the maximum rate of output achieved under\nideal conditions. This is",
        "OPTION 1":"Design capacity",
        "OPTION 2":"Effective capacity",
        "OPTION 3":"Installed capacity",
        "OPTION 4":"Licensed capacity",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":49,
        "QUESTIONS":"Which one of the following is an output measure of Capacity?",
        "OPTION 1":"Total capacity of\nAKC Motors in\nIndia is 300000\nmachine hours in a\nyear",
        "OPTION 2":"Total Capacity of\nZ steel plant is\n720000labour\nhours in a year",
        "OPTION 3":"The Aluminum\ngiant XYZ\nproduces 30mt in a\nday",
        "OPTION 4":"The oil\nconglomerate ABC\nhas 80000gallon\nrefinery size",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":50,
        "QUESTIONS":"Which one of the following is a feature of input measure of\ncapacity?",
        "OPTION 1":"It is less applicable\nwhen the amount of\ncustomization and\nvariety in the\nproduct mix\nincreases",
        "OPTION 2":"It is used mainly\nin case of high\nvolume processes\nsuch as car\nmanufacturers",
        "OPTION 3":"Capacity is usually\nexpressed as\nnumber of\nworkstations or\nnumber of workers",
        "OPTION 4":"It is applicable\nwhen the firm\nprovides a\nrelatively small\nnumber of\nstandardized\nservices and\nproducts",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":51,
        "QUESTIONS":"Which one of the following is not a feature of output measure\nof capacity?",
        "OPTION 1":"It is applicable\nwhen the firm\nprovides a relatively\nsmall number of\nstandardized\nservices and\nproducts",
        "OPTION 2":"It is used mainly\nin case of high\nvolume processes\nsuch as car\nmanufacturers",
        "OPTION 3":"It is generally used\nfor low volume,\nflexible processes\nsuch as furniture\nmaker",
        "OPTION 4":"It is less applicable\nwhen the amount\nof customization\nand variety in the\nproduct mix\nincreases",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":52,
        "QUESTIONS":"Which one of the following is a feature of wait and see\nstrategy?",
        "OPTION 1":"It facilitates a firm\nto compete on price;",
        "OPTION 2":"It guards against\ninaccurate\nassumptions\nregarding\ncompetition",
        "OPTION 3":"It might increase\nthe firm\u2019s market\nshare",
        "OPTION 4":"It results\neconomies of scale",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'it guards against inaccurate assumptions regarding competition' because it directly addresses the which one of the following is a feature of wait and see\nstrategy? in the context of operations management principles."
    },
    {
        "SL NO":53,
        "QUESTIONS":"Which one of the following is not a feature of expansionist\nstrategy?",
        "OPTION 1":"It involves large\ninfrequent jumps in\ncapacity",
        "OPTION 2":"It minimizes the\nchance of sales\nlost to insufficient\ncapacity",
        "OPTION 3":"It stays ahead of\ndemand",
        "OPTION 4":"It lags behind\ndemand",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'it lags behind demand' because it directly addresses the which one of the following is not a feature of expansionist\nstrategy? in the context of operations management principles."
    },
    {
        "SL NO":54,
        "QUESTIONS":"Large capacity cushions are common in industries in which",
        "OPTION 1":"Demand is constant",
        "OPTION 2":"Customer service\nis not a priority",
        "OPTION 3":"Customer service is\nnot a priority",
        "OPTION 4":"Competition is\nsluggish",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":55,
        "QUESTIONS":"The capacity cushion is",
        "OPTION 1":"The amount of\ninstalled capacity a\nprocess uses to\nhandle sudden\nincrease in demand",
        "OPTION 2":"The amount of\nlicensed capacity a\nprocess uses to\nhandle sudden\nincrease in\ndemand",
        "OPTION 3":"The amount of\ndeclared capacity a\nprocess uses to\nhandle sudden\nincrease in demand",
        "OPTION 4":"The amount of\nreserve capacity a\nprocess uses to\nhandle sudden\nincrease in demand",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":56,
        "QUESTIONS":"Capacity decisions are strategic because",
        "OPTION 1":"Capacity decisions\naffect financing\ncosts",
        "OPTION 2":"Capacity decisions\ncan affect facility\nlocation",
        "OPTION 3":"Capacity at\nappropriate level\nfacilitates easier\nmanagement of\nproduct life cycle",
        "OPTION 4":"Capacity decisions\ncan affect\ncompetitiveness",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":57,
        "QUESTIONS":"Capacity decisions often involve",
        "OPTION 1":"Long term\nirrevocable\ncommitment of\nresources",
        "OPTION 2":"Short term\nirrevocable\ncommitment of\nresources",
        "OPTION 3":"Long term\nrevocable\ncommitment of\nresources",
        "OPTION 4":"(b) & (c) above",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":58,
        "QUESTIONS":"Long-term capacity plans are concerned with",
        "OPTION 1":"Overtime budgets",
        "OPTION 2":"Investments in\nnew facilities",
        "OPTION 3":"Work force size",
        "OPTION 4":"Inventories",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":59,
        "QUESTIONS":"Capacity planning procedure does not involve which one of\nthe following?",
        "OPTION 1":"Assess company\nsituation and\nenvironment to\nanalyse historical\ndemand",
        "OPTION 2":"Translate future\npredictions of\ndemand into\nphysical capacity\nrequirements",
        "OPTION 3":"Determine\neconomic effects of\nalternative plans",
        "OPTION 4":"Selecting a\ncapacity\nalternative most\nsuited to achieve\nstrategic mission\nof the firm.",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":60,
        "QUESTIONS":"Which one of the following is not affected by Capacity\ndecisions?",
        "OPTION 1":"Product lead times",
        "OPTION 2":"Customer\nResponsiveness",
        "OPTION 3":"Operating Costs",
        "OPTION 4":"Resource\noptimisation",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":61,
        "QUESTIONS":"Capacity planning is a",
        "OPTION 1":"Long term\nmakeover decision\nthat establishes a\nfirm\u2019s overall level\nof resources",
        "OPTION 2":"Long term\nrealignment\ndecision that\nestablishes a\nfirm\u2019s overall\nlevel of resources",
        "OPTION 3":"Long term\nrestructuring\ndecision that\nestablishes a firm\u2019s\noverall level of\nresources",
        "OPTION 4":"Long term\nstrategic decision\nthat establishes a\nfirm\u2019s overall level\nof resources",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":62,
        "QUESTIONS":"Which one of the following is the result of excess capacity?",
        "OPTION 1":"Loss of customers",
        "OPTION 2":"Restricts growth",
        "OPTION 3":"Drain company\u2019s\nresources",
        "OPTION 4":"All the above",
        "ANSWER CODE":3,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":63,
        "QUESTIONS":"Aggregate Resource Planning becomes a challenge when\ndemand fluctuates over the planning horizon. Under this case\nwhich one of the following is correct?",
        "OPTION 1":"Demand forecasts\nare converted to\nresource\nrequirements",
        "OPTION 2":"Producing at a\nconstant rate and\nusing inventory to\nabsorb\nfluctuations in\ndemand",
        "OPTION 3":"Resources\nnecessary to meet\ndemand over the\ntime horizon are\nacquired",
        "OPTION 4":"Minor variations in\ndemand are\nhandled with\novertime or under\ntime",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'producing at a constant rate and using inventory to absorb fluctuations in demand' because it directly addresses the aggregate resource planning becomes a challenge when\ndemand fluctuates over the planning horizon. under this case\nwhich one of the following is correct? in the context of operations management principles."
    },
    {
        "SL NO":64,
        "QUESTIONS":"The four step systematic approach to plan for long term\ncapacity decisions does not involve",
        "OPTION 1":"Estimate future\nproductivity\nrequirement",
        "OPTION 2":"Estimate future\ncapacity\nrequirements",
        "OPTION 3":"Identify gaps by\ncomparing\nrequirements with\navailable capacity",
        "OPTION 4":"Develop\nalternative plans\nfor reducing the\ngaps",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":65,
        "QUESTIONS":"In operation sequence if capacity of a facilty is lower than\nthe capacities of other facilities in the sequence it is",
        "OPTION 1":"Unutilised operation",
        "OPTION 2":"Flexible operation",
        "OPTION 3":"Rigid operation",
        "OPTION 4":"Bootleneck\noperation",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":66,
        "QUESTIONS":"Which one of the following is not an objective of MRP?",
        "OPTION 1":"Inventory Reduction",
        "OPTION 2":"Realistic delivery\ncommitments",
        "OPTION 3":"Reduction in the\nmanufacturing and\ndelivery lead times",
        "OPTION 4":"Reasonable\nproduction\nschedule",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'reasonable production schedule' because it directly addresses the which one of the following is not an objective of mrp? in the context of operations management principles."
    },
    {
        "SL NO":67,
        "QUESTIONS":"Which one of the following is not a characteristics of\nAggregate Planning?",
        "OPTION 1":"Both output and\nsales should be\nexpressed in a\nlogical overall unit\nof measuring",
        "OPTION 2":"Acceptable\nforecast for the\nperiod covering\nthe whole\nplanning horizon",
        "OPTION 3":"A method of\nidentification and\nfixing the relevant\ncosts associated\nwith the plant.",
        "OPTION 4":"Availability of\nalternatives for\nmeeting the\nobjective of the\norganization",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'acceptable forecast for the period covering the whole planning horizon' because it directly addresses the which one of the following is not a characteristics of\naggregate planning? in the context of operations management principles."
    },
    {
        "SL NO":68,
        "QUESTIONS":"Which one of the following is correct with respect to long\nrange forecast?",
        "OPTION 1":"It is used to\ndetermine budgetary\ncontrol over\nexpenses",
        "OPTION 2":"It is used to\ndetermine\ndividend policy",
        "OPTION 3":"It is used to plan for\ncapacity\nadjustments",
        "OPTION 4":"It is used to plan\nfor material\nrequirement",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'it is used to plan for material requirement' because it directly addresses the which one of the following is correct with respect to long\nrange forecast? in the context of operations management principles."
    },
    {
        "SL NO":69,
        "QUESTIONS":"The card which is prepared by the dispatching department to\nbook the labour involved in each operation is :",
        "OPTION 1":"Labour card",
        "OPTION 2":"Wage card",
        "OPTION 3":"Credit card",
        "OPTION 4":"Job card",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'job card' because it directly addresses the the card which is prepared by the dispatching department to\nbook the labour involved in each operation is : in the context of operations management principles."
    },
    {
        "SL NO":70,
        "QUESTIONS":"One of the product examples for Line Layout is :",
        "OPTION 1":"Repair Workshop",
        "OPTION 2":"Welding shop",
        "OPTION 3":"Engineering\nCollege",
        "OPTION 4":"Cement",
        "ANSWER CODE":4,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":71,
        "QUESTIONS":"The following establishes time sequence of operations:",
        "OPTION 1":"Routing",
        "OPTION 2":"Sequencing",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Dispatching",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the the following establishes time sequence of operations: in the context of operations management principles."
    },
    {
        "SL NO":72,
        "QUESTIONS":"The act of going round the production shop to note down the\nprogress of work and feedback the information is known as:",
        "OPTION 1":"Follow up",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Routing",
        "OPTION 4":"Trip card",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'follow up' because it directly addresses the the act of going round the production shop to note down the\nprogress of work and feedback the information is known as: in the context of operations management principles."
    },
    {
        "SL NO":73,
        "QUESTIONS":"In aggregate planning one of the methods used to\nmodification of supply is:",
        "OPTION 1":"Advertising and\nsales promotion",
        "OPTION 2":"Development of\ncomplimentary\nproducts",
        "OPTION 3":"Backlogging",
        "OPTION 4":"Hiring and lay off\nof employees\ndepending on the\nsituation.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'hiring and lay off of employees depending on the situation.' because it directly addresses the in aggregate planning one of the methods used to\nmodification of supply is: in the context of operations management principles."
    },
    {
        "SL NO":74,
        "QUESTIONS":"In aggregate planning, one of the methods in modification of\ndemand is:",
        "OPTION 1":"Differential Pricing",
        "OPTION 2":"Lay off of\nemployees",
        "OPTION 3":"Over time working",
        "OPTION 4":"Sub-contracting.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'differential pricing' because it directly addresses the in aggregate planning, one of the methods in modification of\ndemand is: in the context of operations management principles."
    },
    {
        "SL NO":75,
        "QUESTIONS":"One of the requirements of Aggregate Planning is:",
        "OPTION 1":"Both output and\nsales should be\nexpressed in a\nlogical overall unit\nof measuring",
        "OPTION 2":"Appropriate time\nperiod",
        "OPTION 3":"List of all resources\navailable",
        "OPTION 4":"List of operations\nrequired.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'both output and sales should be expressed in a logical overall unit of measuring' because it directly addresses the one of the requirements of aggregate planning is: in the context of operations management principles."
    },
    {
        "SL NO":76,
        "QUESTIONS":"The study of relationship between the load on hand and\ncapacity of the work centers is known as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Routing",
        "OPTION 4":"Controlling.",
        "ANSWER CODE":2,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":77,
        "QUESTIONS":"Scheduling deals with:",
        "OPTION 1":"Number of jobs to\nbe done on a\nmachine",
        "OPTION 2":"Number of\nmachine tools\nused to do a job",
        "OPTION 3":"Different materials\nused in the product",
        "OPTION 4":"Fixing up starting\nand finishing times\nof each operation\nin doing a job.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'fixing up starting and finishing times of each operation in doing a job.' because it directly addresses the scheduling deals with: in the context of operations management principles."
    },
    {
        "SL NO":78,
        "QUESTIONS":"Scheduling shows:",
        "OPTION 1":"Total cost of\nproduction",
        "OPTION 2":"Total material cost",
        "OPTION 3":"Which resource\nshould do which\njob and when",
        "OPTION 4":"The flow line of\nmaterials.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'which resource should do which job and when' because it directly addresses the scheduling shows: in the context of operations management principles."
    },
    {
        "SL NO":79,
        "QUESTIONS":"Final stage of production planning, where production\nactivities are coordinated and projected on a time scale is\nknown as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Expediting",
        "OPTION 4":"Routing.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the final stage of production planning, where production\nactivities are coordinated and projected on a time scale is\nknown as: in the context of operations management principles."
    },
    {
        "SL NO":80,
        "QUESTIONS":"(Total station time\/Cycle time \u00d7 Number of work stations) \u00d7\n100 is known as:",
        "OPTION 1":"Line Efficiency",
        "OPTION 2":"Line smoothness",
        "OPTION 3":"Balance delay of\nline",
        "OPTION 4":"Station efficiency.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'line efficiency' because it directly addresses the (total station time\/cycle time \u00d7 number of work stations) \u00d7\n100 is known as: in the context of operations management principles."
    },
    {
        "SL NO":81,
        "QUESTIONS":"In solving a problem on LOB, the number of workstations\nrequired is given by:",
        "OPTION 1":"Cycle time\/Total\ntime",
        "OPTION 2":"Cycle\ntime\/Element time",
        "OPTION 3":"Total time\/Element\ntime",
        "OPTION 4":"Total time\/ Cycle\ntime.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'total time\/ cycle time.' because it directly addresses the in solving a problem on lob, the number of workstations\nrequired is given by: in the context of operations management principles."
    },
    {
        "SL NO":82,
        "QUESTIONS":"Number of product varieties that can be manufactured in\nMass production is:",
        "OPTION 1":"One only",
        "OPTION 2":"Two only",
        "OPTION 3":"Few varieties in\nlarge volumes",
        "OPTION 4":"Large varieties in\nsmall volumes.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'two only' because it directly addresses the number of product varieties that can be manufactured in\nmass production is: in the context of operations management principles."
    },
    {
        "SL NO":83,
        "QUESTIONS":"Generally in continuous production the production is carried\nout to:",
        "OPTION 1":"Customer\u2019s order",
        "OPTION 2":"Government\norders only",
        "OPTION 3":"For stock and\nsupply",
        "OPTION 4":"Few rich\ncustomers",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'customer\u2019s order' because it directly addresses the generally in continuous production the production is carried\nout to: in the context of operations management principles."
    },
    {
        "SL NO":84,
        "QUESTIONS":"Inventory cost per product in intermittent production is",
        "OPTION 1":"Higher",
        "OPTION 2":"Lowest",
        "OPTION 3":"Medium",
        "OPTION 4":"Abnormal.",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":85,
        "QUESTIONS":"The material handling cost per unit of product in Continuous\nproduction is:",
        "OPTION 1":"Highest compared\nto other systems",
        "OPTION 2":"Lower than other\nsystems",
        "OPTION 3":"Negligible",
        "OPTION 4":"Cannot say.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'lower than other systems' because it directly addresses the the material handling cost per unit of product in continuous\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":86,
        "QUESTIONS":"Routing and Scheduling becomes relatively complicated in",
        "OPTION 1":"Job production",
        "OPTION 2":"Batch production",
        "OPTION 3":"Flow production",
        "OPTION 4":"Mass production",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'batch production' because it directly addresses the routing and scheduling becomes relatively complicated in in the context of operations management principles."
    },
    {
        "SL NO":87,
        "QUESTIONS":"Number of product varieties that can be manufactured in Job\nproduction is:",
        "OPTION 1":"Limited to one or\ntwo",
        "OPTION 2":"Large varieties of\nproducts",
        "OPTION 3":"One only",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'large varieties of products' because it directly addresses the number of product varieties that can be manufactured in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":88,
        "QUESTIONS":"In general number of product varities that can be\nmanufactured in Flow production is:",
        "OPTION 1":"One only",
        "OPTION 2":"Ten to twenty\nvarities",
        "OPTION 3":"Large varities",
        "OPTION 4":"Five only",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'one only' because it directly addresses the in general number of product varities that can be\nmanufactured in flow production is: in the context of operations management principles."
    },
    {
        "SL NO":89,
        "QUESTIONS":"Generally the size of the order for production in Job\nproduction is:",
        "OPTION 1":"Small",
        "OPTION 2":"Large",
        "OPTION 3":"Medium",
        "OPTION 4":"Very large",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'small' because it directly addresses the generally the size of the order for production in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":90,
        "QUESTIONS":"For a marketing manager, the sales forecast is:",
        "OPTION 1":"Estimate of the\namount of unit sales\nor a specified future\nperiod",
        "OPTION 2":"Arranging the\nsales men to\ndifferent segments\nof the market",
        "OPTION 3":"To distribute the\ngoods through\ntransport to satisfy\nthe market demand",
        "OPTION 4":"To plan the sales\nmethods.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'estimate of the amount of unit sales or a specified future period' because it directly addresses the for a marketing manager, the sales forecast is: in the context of operations management principles."
    },
    {
        "SL NO":91,
        "QUESTIONS":"The time horizon selected for forecasting depends on:",
        "OPTION 1":"The salability of the\nproduct",
        "OPTION 2":"The selling\ncapacity of\nSalesman",
        "OPTION 3":"Purpose for which\nforecast is made",
        "OPTION 4":"Time required for\nproduction cycle.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":92,
        "QUESTIONS":"Manufacturing system often produces:",
        "OPTION 1":"Standardised\nproducts",
        "OPTION 2":"Standardised\nproducts in large\nvolumes",
        "OPTION 3":"Substandardproduct\ns in large volumes",
        "OPTION 4":"Products and\nservices in limited\nvolume",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'standardised products' because it directly addresses the manufacturing system often produces: in the context of operations management principles."
    },
    {
        "SL NO":93,
        "QUESTIONS":"Most suitable layout for Job production is:",
        "OPTION 1":"Line layout",
        "OPTION 2":"Matrix layout",
        "OPTION 3":"Process layout",
        "OPTION 4":"Product layout.",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":94,
        "QUESTIONS":"Most suitable layout for Continuous production is:",
        "OPTION 1":"Line layout",
        "OPTION 2":"Process Layout",
        "OPTION 3":"Group technology",
        "OPTION 4":"Matrix layout.",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":95,
        "QUESTIONS":"One of the product examples for Line layout is:",
        "OPTION 1":"Repair workshop",
        "OPTION 2":"Welding shop",
        "OPTION 3":"Engineering\nCollege",
        "OPTION 4":"Cement.",
        "ANSWER CODE":4,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":96,
        "QUESTIONS":"One of the important basic objectives of Inventory\nmanagement is:",
        "OPTION 1":"To calculate EOQ\nfor all materials in\nthe organisation",
        "OPTION 2":"To go in person to\nthe market and\npurchase the\nmaterials",
        "OPTION 3":"To employ the\navailable capital\nefficiently so as to\nyield maximum\nresults",
        "OPTION 4":"Once materials are\nissued to the\ndepartments,\npersonally check\nhow they are used.",
        "ANSWER CODE":3,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":97,
        "QUESTIONS":"MRP stands for:",
        "OPTION 1":"Material\nRequirement\nPlanning",
        "OPTION 2":"Material\nReordering\nPlanning",
        "OPTION 3":"Material\nRequisition\nProcedure",
        "OPTION 4":"Material\nRecording\nProcedure.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'material requirement planning' because it directly addresses the mrp stands for: in the context of operations management principles."
    },
    {
        "SL NO":98,
        "QUESTIONS":"In route sheet or operation layout, one has to show:",
        "OPTION 1":"A list of Materials\nto be used",
        "OPTION 2":"A list of machine\ntools to be used",
        "OPTION 3":"Every work center\nand the operation to\nbe done at that\nwork center",
        "OPTION 4":"The cost of\nproduct.",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":99,
        "QUESTIONS":"In aggregate planning, one of the methods in modification of\ndemand is:",
        "OPTION 1":"Differential Pricing",
        "OPTION 2":"Lay off of\nemployees",
        "OPTION 3":"Over time working",
        "OPTION 4":"Sub contracting.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'differential pricing' because it directly addresses the in aggregate planning, one of the methods in modification of\ndemand is: in the context of operations management principles."
    },
    {
        "SL NO":100,
        "QUESTIONS":"A steel plant has a design capacity of 50,000 tons of steel per\nday ,effective capacity of 40,0000 tons of steel per day and\nactual output of 36,0000 tons of steel per day. Compute the\nefficiency of the plant",
        "OPTION 1":"90%",
        "OPTION 2":"72%",
        "OPTION 3":"80%",
        "OPTION 4":"110%",
        "ANSWER CODE":1,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":101,
        "QUESTIONS":"A firm has four work centres A,B,C & D , in series with\nindividual capacities in units per day shown in below :\nraw material\nA - 380\nB - 360\nC- 340\nD - 400 ---- Actual output 300, what is the efficiency system",
        "OPTION 1":"80.33%",
        "OPTION 2":"77.66%",
        "OPTION 3":"99%",
        "OPTION 4":"88.23%",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is '88.23%' because it directly addresses the a firm has four work centres a,b,c & d , in series with\nindividual capacities in units per day shown in below :\nraw material\na - 380\nb - 360\nc- 340\nd - 400 ---- actual output 300, what is the efficiency system in the context of operations management principles."
    },
    {
        "SL NO":102,
        "QUESTIONS":"The monthly requirement of raw material for a company is\n3000 units .The carrying cost is estimated to be 20% of the\npurchase price per unit ,in addition to rs 2 per unit.The\npurchase price of raw material is rs 20 per unit.The ordering\ncost is Rs 25 per order. You are required to find EOQ.",
        "OPTION 1":"458 units",
        "OPTION 2":"548 units",
        "OPTION 3":"448 units",
        "OPTION 4":"844 units",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '548 units' because it directly addresses the the monthly requirement of raw material for a company is\n3000 units .the carrying cost is estimated to be 20% of the\npurchase price per unit ,in addition to rs 2 per unit.the\npurchase price of raw material is rs 20 per unit.the ordering\ncost is rs 25 per order. you are required to find eoq. in the context of operations management principles."
    },
    {
        "SL NO":103,
        "QUESTIONS":"EOQ is 102 units ,maximum usage 200 units , maximum\ndelivery period 8 weeks , minimum usage 50 units, minimum\ndelevery period 6 weeks , calculate maximum level of stock",
        "OPTION 1":"1502 units",
        "OPTION 2":"1202 units",
        "OPTION 3":"1402 units",
        "OPTION 4":"1302 units",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is '1402 units' because it directly addresses the eoq is 102 units ,maximum usage 200 units , maximum\ndelivery period 8 weeks , minimum usage 50 units, minimum\ndelevery period 6 weeks , calculate maximum level of stock in the context of operations management principles."
    },
    {
        "SL NO":104,
        "QUESTIONS":"M\/s Kobo Bearing Ltd is committed to supply 24,000\nbearings per annum to M\/s Deluxe fans on a steady daily\nbasis .It is estimated that it costs 10 paisa as inventory\nholding cost per bearing per month and that the setup cost per\nrun of bearing manufacture is 324.What is the optimum run\nsize for bearing manufacture ?",
        "OPTION 1":"3600 units",
        "OPTION 2":"1200 units",
        "OPTION 3":"7200 units",
        "OPTION 4":"8400 units",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":105,
        "QUESTIONS":"In general, medium range forecasting period will be\napproximately:",
        "OPTION 1":"5 to 10 Years",
        "OPTION 2":"2 to 3 days",
        "OPTION 3":"3 to 6 months",
        "OPTION 4":"10 to 20 years.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":106,
        "QUESTIONS":"The range of Long range forecasting period may be\napproximately:",
        "OPTION 1":"1 to 2 weeks",
        "OPTION 2":"2 to 3 months",
        "OPTION 3":"1 year",
        "OPTION 4":"above 5 years.",
        "ANSWER CODE":4,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":107,
        "QUESTIONS":"To plan for future man power requirement:",
        "OPTION 1":"Short term\nforecasting is used",
        "OPTION 2":"Long range\nforecasting is used",
        "OPTION 3":"Medium range\nforecasting is used",
        "OPTION 4":"There is no need\nto use forecasting,\nas future is\nuncertain.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'long range forecasting is used' because it directly addresses the to plan for future man power requirement: in the context of operations management principles."
    },
    {
        "SL NO":108,
        "QUESTIONS":"Long range forecasting is useful in:",
        "OPTION 1":"Plan for Research\nand Development",
        "OPTION 2":"To Schedule jobs\nin Job production",
        "OPTION 3":"In purchasing the\nmaterial to meet the\npresent production\ndemand",
        "OPTION 4":"To assess\nmanpower required\nin the coming\nmonth.",
        "ANSWER CODE":1,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":109,
        "QUESTIONS":"Medium range forecasting is useful in:",
        "OPTION 1":"To assess the\nloading capacity of\nthe machine",
        "OPTION 2":"To purchase a\nmaterials for next\nmonth",
        "OPTION 3":"To plan for-capacity\nadjustments",
        "OPTION 4":"To decide whether\nto receive\nproduction orders\nor not.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":110,
        "QUESTIONS":"Important factor in forecasting production is:",
        "OPTION 1":"Environmental\nchanges",
        "OPTION 2":"Available capacity\nof machines",
        "OPTION 3":"Disposable income\nof the consumer",
        "OPTION 4":"Changes in the\npreference of the\nconsumer.",
        "ANSWER CODE":2,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":111,
        "QUESTIONS":"To decide work load for men and machines:",
        "OPTION 1":"Medium range\nforecasting is used",
        "OPTION 2":"Short term\nforecasting is used",
        "OPTION 3":"Long range\nforecasting is used",
        "OPTION 4":"A combination of\nlong range and\nmedium range\nforecasting is used.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'short term forecasting is used' because it directly addresses the to decide work load for men and machines: in the context of operations management principles."
    },
    {
        "SL NO":112,
        "QUESTIONS":"For production planning:",
        "OPTION 1":"Shot term\nforecasting is useful",
        "OPTION 2":"Medium term\nforecasting is\nuseful",
        "OPTION 3":"Long term\nforecasting is\nuseful",
        "OPTION 4":"Forecasting is not\nuseful.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'shot term forecasting is useful' because it directly addresses the for production planning: in the context of operations management principles."
    },
    {
        "SL NO":113,
        "QUESTIONS":"In general, medium range forecasting period will be\napproximately",
        "OPTION 1":"5 to 10 Years",
        "OPTION 2":"2 to 3 days",
        "OPTION 3":"3 to 6 months",
        "OPTION 4":"10 to 20 years",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":114,
        "QUESTIONS":"Medium range forecasting is useful in:",
        "OPTION 1":"To assess the\nloading capacity of\nthe machine",
        "OPTION 2":"To purchase a\nmaterials for next\nmonth",
        "OPTION 3":"To plan for-capacity\nadjustments",
        "OPTION 4":"To decide whether\nto receive\nproduction orders\nor not.",
        "ANSWER CODE":3,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":115,
        "QUESTIONS":"Monthly demand for a component is 1000 units. Setting-up\ncost per batch is ` 120. Cost of manufacture per unit is ` 20.\nRate of interest may be considered at 10% p.a. Calculate the\nEBQ",
        "OPTION 1":"1200 units",
        "OPTION 2":"1400 units",
        "OPTION 3":"1440 units",
        "OPTION 4":"1000 units",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '1200 units' because it directly addresses the monthly demand for a component is 1000 units. setting-up\ncost per batch is ` 120. cost of manufacture per unit is ` 20.\nrate of interest may be considered at 10% p.a. calculate the\nebq in the context of operations management principles."
    },
    {
        "SL NO":116,
        "QUESTIONS":"Daily demand for a certain product is normally distributed\nwith a mean of 60 and standard deviation of 7. The source of\nsupply is reliable and maintain a constant lead time of six\ndays. The cost of placing the order is ` 10 and annual holding\ncosts are ` 0.50 per unit. There are no stock out costs, and\nunfilled orders are filled as soon as the order arrives. Assume\nsales occur over the entire 365 days of the year.Find the .\nFind the order quantity",
        "OPTION 1":"336 units",
        "OPTION 2":"936 units",
        "OPTION 3":"633 inits",
        "OPTION 4":"393 units",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '936 units' because it directly addresses the daily demand for a certain product is normally distributed\nwith a mean of 60 and standard deviation of 7. the source of\nsupply is reliable and maintain a constant lead time of six\ndays. the cost of placing the order is ` 10 and annual holding\ncosts are ` 0.50 per unit. there are no stock out costs, and\nunfilled orders are filled as soon as the order arrives. assume\nsales occur over the entire 365 days of the year.find the .\nfind the order quantity in the context of operations management principles."
    },
    {
        "SL NO":117,
        "QUESTIONS":"Consider the following item that is being managed using a\nfixed time period model with safety stock\nWeekly demand (d) = 50 units Review cycle (T) = 3 weeks\nSafety stock (SS) = 30 units\nWhat are the average inventory turn for the item?",
        "OPTION 1":"24.8 turns per year",
        "OPTION 2":"84.2 turns per year",
        "OPTION 3":"80 turns per year",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":118,
        "QUESTIONS":"Addition of value to raw materials through application of\ntechnology is :",
        "OPTION 1":"Product",
        "OPTION 2":"Production",
        "OPTION 3":"Advancement",
        "OPTION 4":"Transformation",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the addition of value to raw materials through application of\ntechnology is : in the context of operations management principles."
    },
    {
        "SL NO":119,
        "QUESTIONS":"Cost reduction can be achieved through",
        "OPTION 1":"Work sampling",
        "OPTION 2":"Value analysis",
        "OPTION 3":"Quality assurance",
        "OPTION 4":"Supply chain\nmanagement.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'value analysis' because it directly addresses the cost reduction can be achieved through in the context of operations management principles."
    },
    {
        "SL NO":120,
        "QUESTIONS":"Production control concerned with:",
        "OPTION 1":"Passive assessment\nof plant\nperformance",
        "OPTION 2":"Strict control on\nlabours",
        "OPTION 3":"Good materials\nmanagement",
        "OPTION 4":"Good product\ndesign.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'passive assessment of plant performance' because it directly addresses the production control concerned with: in the context of operations management principles."
    },
    {
        "SL NO":121,
        "QUESTIONS":"The starting point of Production cycle is:",
        "OPTION 1":"Product design",
        "OPTION 2":"Production\nPlanning",
        "OPTION 3":"Routing",
        "OPTION 4":"Market research.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'market research.' because it directly addresses the the starting point of production cycle is: in the context of operations management principles."
    },
    {
        "SL NO":122,
        "QUESTIONS":"Variety reduction is generally known as:",
        "OPTION 1":"Less varities",
        "OPTION 2":"Simplification",
        "OPTION 3":"Reduced varities",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'simplification' because it directly addresses the variety reduction is generally known as: in the context of operations management principles."
    },
    {
        "SL NO":123,
        "QUESTIONS":"Preferred numbers are used to:",
        "OPTION 1":"To determine the\nnumber of varities\nthat are to be\nmanufactured",
        "OPTION 2":"To the test the\ndesign of the\nproduct",
        "OPTION 3":"To ascertain the\nquality level of the\nproduct",
        "OPTION 4":"To evaluate the\nproduction cost.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'to determine the number of varities that are to be manufactured' because it directly addresses the preferred numbers are used to: in the context of operations management principles."
    },
    {
        "SL NO":124,
        "QUESTIONS":"There are ______ stages of Design thinking",
        "OPTION 1":"5",
        "OPTION 2":"3",
        "OPTION 3":"4",
        "OPTION 4":"2",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '5' because it directly addresses the there are ______ stages of design thinking in the context of operations management principles."
    },
    {
        "SL NO":125,
        "QUESTIONS":"Most suitable layout for Job production is",
        "OPTION 1":"Line layout",
        "OPTION 2":"Matrix layout",
        "OPTION 3":"Process layout",
        "OPTION 4":"Product layout",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":126,
        "QUESTIONS":"Most suitable layout for Continuous production is:",
        "OPTION 1":"Line layout",
        "OPTION 2":"Matrix layout",
        "OPTION 3":"Process layout",
        "OPTION 4":"Product layout",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":127,
        "QUESTIONS":"One of the product examples for Line layout is:",
        "OPTION 1":"Repair workshop",
        "OPTION 2":"Welding shop",
        "OPTION 3":"Engineering\nCollege",
        "OPTION 4":"Cement.",
        "ANSWER CODE":4,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":128,
        "QUESTIONS":"Generally in continuous production the production is carried\nout to:",
        "OPTION 1":"Customer\u2019s order",
        "OPTION 2":"Government\norders only",
        "OPTION 3":"For stock and\nsupply",
        "OPTION 4":"Few rich\ncustomers.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'for stock and supply' because it directly addresses the generally in continuous production the production is carried\nout to: in the context of operations management principles."
    },
    {
        "SL NO":129,
        "QUESTIONS":"Inventory cost per product in intermittent production is:",
        "OPTION 1":"Higher",
        "OPTION 2":"Lowest",
        "OPTION 3":"Medium",
        "OPTION 4":"Abnormal.",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":130,
        "QUESTIONS":"The material handling cost per unit of product in Continuous\nproduction is:",
        "OPTION 1":"Highest compared\nto other systems",
        "OPTION 2":"Lower than other\nsystems",
        "OPTION 3":"Negligible",
        "OPTION 4":"Cannot say.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'lower than other systems' because it directly addresses the the material handling cost per unit of product in continuous\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":131,
        "QUESTIONS":"Routing and Scheduling becomes relatively complicated in",
        "OPTION 1":"Job production",
        "OPTION 2":"Batch production",
        "OPTION 3":"Flow production",
        "OPTION 4":"Mass production.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'batch production' because it directly addresses the routing and scheduling becomes relatively complicated in in the context of operations management principles."
    },
    {
        "SL NO":132,
        "QUESTIONS":"The starting point of Production cycle is:",
        "OPTION 1":"Product design",
        "OPTION 2":"Production\nPlanning",
        "OPTION 3":"Routing",
        "OPTION 4":"Market research.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'market research.' because it directly addresses the the starting point of production cycle is: in the context of operations management principles."
    },
    {
        "SL NO":133,
        "QUESTIONS":"In Process Planning we plan:",
        "OPTION 1":"Different machines\nrequired",
        "OPTION 2":"Different\noperations\nrequired",
        "OPTION 3":"We plan the flow of\nmaterial in each\ndepartment",
        "OPTION 4":"We design the\nproduct.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'we plan the flow of material in each department' because it directly addresses the in process planning we plan: in the context of operations management principles."
    },
    {
        "SL NO":134,
        "QUESTIONS":"In Operation Planning",
        "OPTION 1":"The planner plans\neach operation to be\ndone at work\ncenters and the\nsequence of\noperations",
        "OPTION 2":"Decide the tools to\nbe used to perform\nthe operations",
        "OPTION 3":"Decide the machine\nto be used to\nperform the\noperation",
        "OPTION 4":"Decide the\nmaterials to be\nused to produce\nthe product",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'the planner plans each operation to be done at work centers and the sequence of operations' because it directly addresses the in operation planning in the context of operations management principles."
    },
    {
        "SL NO":135,
        "QUESTIONS":"One of the important production documents is:",
        "OPTION 1":"Design sheet of the\nproduct",
        "OPTION 2":"List of materials",
        "OPTION 3":"Route card",
        "OPTION 4":"Control chart.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'route card' because it directly addresses the one of the important production documents is: in the context of operations management principles."
    },
    {
        "SL NO":136,
        "QUESTIONS":"The scope of Production Planning and Control is:",
        "OPTION 1":"Limited to\nProduction of\nproducts only",
        "OPTION 2":"Limited to\nproduction of\nservices only",
        "OPTION 3":"Limited to\nproduction of\nservices and\nproducts only",
        "OPTION 4":"Unlimited, can be\napplied to any type\nof activity.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'unlimited, can be applied to any type of activity.' because it directly addresses the the scope of production planning and control is: in the context of operations management principles."
    },
    {
        "SL NO":137,
        "QUESTIONS":"Which one of the following product is not suitable for flow\nshop scheduling?",
        "OPTION 1":"Car",
        "OPTION 2":"Petrol",
        "OPTION 3":"Steel",
        "OPTION 4":"Invitation Card",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'invitation card' because it directly addresses the which one of the following product is not suitable for flow\nshop scheduling? in the context of operations management principles."
    },
    {
        "SL NO":138,
        "QUESTIONS":"Which one of the following is a Sequencing rule for single\nfacility?",
        "OPTION 1":"EVPI",
        "OPTION 2":"DFA",
        "OPTION 3":"MAD",
        "OPTION 4":"LPT",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'lpt' because it directly addresses the which one of the following is a sequencing rule for single\nfacility? in the context of operations management principles."
    },
    {
        "SL NO":139,
        "QUESTIONS":"The main question in an assignment problem is",
        "OPTION 1":"How the\nassignments should\nbe made in order\nthat the total cost\ninvolved in\nactivities is\nminimized",
        "OPTION 2":"How the\nassignments\nshould be made in\norder that the total\nresources involved\nin activities is\noptimised",
        "OPTION 3":"How the\nassignments should\nbe made in order\nthat the total time\ninvolved in\nactivities is\nminimized",
        "OPTION 4":"How the\nassignments\nshould be made in\norder that inter\ndependence among\nall activities is\nminimized",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'how the assignments should be made in order that the total cost involved in activities is minimized' because it directly addresses the the main question in an assignment problem is in the context of operations management principles."
    },
    {
        "SL NO":140,
        "QUESTIONS":"Linear Programming is a technique used for determining:",
        "OPTION 1":"Production\nProgramme",
        "OPTION 2":"Plant Layout",
        "OPTION 3":"Product Mix",
        "OPTION 4":"Manufacturing\nsequence",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'product mix' because it directly addresses the linear programming is a technique used for determining: in the context of operations management principles."
    },
    {
        "SL NO":141,
        "QUESTIONS":"In a linear programming model feasible solution is",
        "OPTION 1":"The basic solution\nto the general L.P\nproblem",
        "OPTION 2":"Any solution that\nalso satisfies the\nnon-negative\nrestrictions of the\ngeneral L.P\nproblem",
        "OPTION 3":"A solution which\noptimize (maximize\nor minimize) the\nobjective function\nof a general L.P\nproblem",
        "OPTION 4":"A basic solution to\nthe system of\nequations if one or\nmore of the basic\nvariables become\nequal to zero",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'any solution that also satisfies the non-negative restrictions of the general l.p problem' because it directly addresses the in a linear programming model feasible solution is in the context of operations management principles."
    },
    {
        "SL NO":142,
        "QUESTIONS":"Which one of the following is not a limitation of linear\nprogramming model?",
        "OPTION 1":"Model can be\napplied only in\nsituations where\nobjective functions\ncan be expressed in\nterms of linear\nexpressions",
        "OPTION 2":"Model can be\napplied only when\ncoefficients in the\nconstraints\nequations must be\ncompletely known",
        "OPTION 3":"Model can be\napplied only to all\nreal world problems\nwhich are not\ncomplex in nature",
        "OPTION 4":"Model cannot be\napplied to give a\nsolution if\nmanagement have\nconflicting\nmultiple goals.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'model can be applied only to all real world problems which are not complex in nature' because it directly addresses the which one of the following is not a limitation of linear\nprogramming model? in the context of operations management principles."
    },
    {
        "SL NO":143,
        "QUESTIONS":"Which of the following is not a method for solving\nAssignment problem?",
        "OPTION 1":"Complete\nEnumeration\nmethod",
        "OPTION 2":"Hungarian method",
        "OPTION 3":"Simplex method",
        "OPTION 4":"Natural method",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'natural method' because it directly addresses the which of the following is not a method for solving\nassignment problem? in the context of operations management principles."
    },
    {
        "SL NO":144,
        "QUESTIONS":"The objective of application of linear programming in\nindustrial problems is",
        "OPTION 1":"To determine a plan\nfor production and\nprocurement in the\ntime period under\nconsideration",
        "OPTION 2":"To determine an\noptimal solution of\nthe problem under\nthe given\nconstraints",
        "OPTION 3":"To determine the\ncost effective\nsolution of the\nproblem under\nscarce resources",
        "OPTION 4":"To determine a\nplan for time based\nsolution to the\nproblem for\nincreasing\nproductivity",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'to determine a plan for production and procurement in the time period under consideration' because it directly addresses the the objective of application of linear programming in\nindustrial problems is in the context of operations management principles."
    },
    {
        "SL NO":145,
        "QUESTIONS":"Simulation is the representation of a real life situation by\ndifferent means. It is popular because---",
        "OPTION 1":"It may be the only\nmethod available as\nit is difficult to\nobserve the actual\nenvironment",
        "OPTION 2":"It may not be\npossible to\ndevelop a\nmathematical\nmodel",
        "OPTION 3":"Actual observation\nof a system may be\ntoo expensive or too\ndisruptive",
        "OPTION 4":"All the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all the above' because it directly addresses the simulation is the representation of a real life situation by\ndifferent means. it is popular because--- in the context of operations management principles."
    },
    {
        "SL NO":146,
        "QUESTIONS":"In sequencing it is the difference between the time remaining\nto due date and the remaining processing time. It is",
        "OPTION 1":"STR",
        "OPTION 2":"SOT",
        "OPTION 3":"SPT",
        "OPTION 4":"DDATE",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'str' because it directly addresses the in sequencing it is the difference between the time remaining\nto due date and the remaining processing time. it is in the context of operations management principles."
    },
    {
        "SL NO":147,
        "QUESTIONS":"Selection of plant location is influenced by few factors.\nWhich one of the following is not a factor?",
        "OPTION 1":"Existence of\nComplementary\nIndustries",
        "OPTION 2":"Availability of\nLabour",
        "OPTION 3":"Civic Amenities for\nWorkers",
        "OPTION 4":"Government\u2019s\nEXIM Policy",
        "ANSWER CODE":4,
        "EXPLANATION":"Facility location decisions involve choosing a site that minimizes costs (transport, labor) and maximizes service."
    },
    {
        "SL NO":148,
        "QUESTIONS":"In a queuing system, the speed with which service is provided\ncan be expressed in either of two ways\u2014",
        "OPTION 1":"Service start time\nand Service finish\ntime",
        "OPTION 2":"Service rate and\nService time",
        "OPTION 3":"Arrival rate and\nService rate",
        "OPTION 4":"Service Inflow rate\nand Service\noutflow rate",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'service rate and service time' because it directly addresses the in a queuing system, the speed with which service is provided\ncan be expressed in either of two ways\u2014 in the context of operations management principles."
    },
    {
        "SL NO":149,
        "QUESTIONS":"Most suitable layout for continuous production is",
        "OPTION 1":"Line layout",
        "OPTION 2":"Process layout",
        "OPTION 3":"Group technology",
        "OPTION 4":"Matrix layout",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":150,
        "QUESTIONS":"The most powerful and popular method for solving linear\nprogramming problem is",
        "OPTION 1":"Simplex method",
        "OPTION 2":"Graphical method",
        "OPTION 3":"Transportation\nmethod",
        "OPTION 4":"Assignment\nmethod",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'simplex method' because it directly addresses the the most powerful and popular method for solving linear\nprogramming problem is in the context of operations management principles."
    },
    {
        "SL NO":151,
        "QUESTIONS":"(Total station time\/cycle time \u00d7 Number of work stations) \u00d7\n100 is known as",
        "OPTION 1":"Line efficiency",
        "OPTION 2":"Line smoothness",
        "OPTION 3":"Balance delay of\nline",
        "OPTION 4":"Station efficiency",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'line efficiency' because it directly addresses the (total station time\/cycle time \u00d7 number of work stations) \u00d7\n100 is known as in the context of operations management principles."
    },
    {
        "SL NO":152,
        "QUESTIONS":"One of the important charts used in Programme control is:",
        "OPTION 1":"Material chart",
        "OPTION 2":"Gantt chart",
        "OPTION 3":"Route chart",
        "OPTION 4":"Inspection chart",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'gantt chart' because it directly addresses the one of the important charts used in programme control is: in the context of operations management principles."
    },
    {
        "SL NO":153,
        "QUESTIONS":"Issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are are effectively\nachieved is known as:",
        "OPTION 1":"Routing",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Inspection.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'dispatching' because it directly addresses the issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are are effectively\nachieved is known as: in the context of operations management principles."
    },
    {
        "SL NO":154,
        "QUESTIONS":"Linear Programming is a technique used for determining:",
        "OPTION 1":"Production\nProgramme",
        "OPTION 2":"Plant Layout",
        "OPTION 3":"Product Mix",
        "OPTION 4":"Manufacturing\nsequence.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'product mix' because it directly addresses the linear programming is a technique used for determining: in the context of operations management principles."
    },
    {
        "SL NO":155,
        "QUESTIONS":"Arrangement of machines depending on sequence of\noperations happens in:",
        "OPTION 1":"Process Layout",
        "OPTION 2":"Product Layout",
        "OPTION 3":"Hybrid Layout",
        "OPTION 4":"Group Technology\nLayout.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'product layout' because it directly addresses the arrangement of machines depending on sequence of\noperations happens in: in the context of operations management principles."
    },
    {
        "SL NO":156,
        "QUESTIONS":"Computers are used in Production control in this area:",
        "OPTION 1":"Follow-up activity",
        "OPTION 2":"To control labour",
        "OPTION 3":"To disseminate\ninformation",
        "OPTION 4":"Loading,\nScheduling and\nAssignment works.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'loading, scheduling and assignment works.' because it directly addresses the computers are used in production control in this area: in the context of operations management principles."
    },
    {
        "SL NO":157,
        "QUESTIONS":"Z-chart can be used to show:",
        "OPTION 1":"Process used in\nproduction",
        "OPTION 2":"Quality level of\nthe product",
        "OPTION 3":"Both the plan and\nthe performance,\nand deviation from\nthe plan",
        "OPTION 4":"To show cost\nstructure of the\nproduct",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'both the plan and the performance, and deviation from the plan' because it directly addresses the z-chart can be used to show: in the context of operations management principles."
    },
    {
        "SL NO":158,
        "QUESTIONS":"\u2018Z\u2019 chart is a chart used in:",
        "OPTION 1":"Programme control",
        "OPTION 2":"Job control",
        "OPTION 3":"Cost control",
        "OPTION 4":"Quality control.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'programme control' because it directly addresses the \u2018z\u2019 chart is a chart used in: in the context of operations management principles."
    },
    {
        "SL NO":159,
        "QUESTIONS":"One of the activities of expediting is:",
        "OPTION 1":"To file the orders\nin sequence",
        "OPTION 2":"To decide the\nsequence of\noperation",
        "OPTION 3":"To record the actual\nproduction against\nthe scheduled\nproduction",
        "OPTION 4":"To examine the\ntools used in\nproduction",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'to record the actual production against the scheduled production' because it directly addresses the one of the activities of expediting is: in the context of operations management principles."
    },
    {
        "SL NO":160,
        "QUESTIONS":"When work centers are used in optimal sequence to do the\njobs, we can:",
        "OPTION 1":"Minimise the set up\ntime",
        "OPTION 2":"Minimise\noperation time",
        "OPTION 3":"Minimise the\nbreakdown of\nmachines",
        "OPTION 4":"Minimise the\nutility of facility.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'minimise the set up time' because it directly addresses the when work centers are used in optimal sequence to do the\njobs, we can: in the context of operations management principles."
    },
    {
        "SL NO":161,
        "QUESTIONS":"The way in which we can assess the efficiency of the\nproduction plant is by:",
        "OPTION 1":"Efficient\ndispatching",
        "OPTION 2":"By manufacturing\na good product",
        "OPTION 3":"By comparing the\nactual performance\nwith targets\nspecified in the\nspecified\nprogramme",
        "OPTION 4":"By efficient\nproduction\nplanning.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'by comparing the actual performance with targets specified in the specified programme' because it directly addresses the the way in which we can assess the efficiency of the\nproduction plant is by: in the context of operations management principles."
    },
    {
        "SL NO":162,
        "QUESTIONS":"One of the important charts used in Programme control is:",
        "OPTION 1":"Material chart",
        "OPTION 2":"Gantt chart",
        "OPTION 3":"Route chart",
        "OPTION 4":"Inspection chart",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'gantt chart' because it directly addresses the one of the important charts used in programme control is: in the context of operations management principles."
    },
    {
        "SL NO":163,
        "QUESTIONS":"One of the important production documents is:",
        "OPTION 1":"Design sheet of the\nproduct",
        "OPTION 2":"List of materials",
        "OPTION 3":"Route card",
        "OPTION 4":"Control chart.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'route card' because it directly addresses the one of the important production documents is: in the context of operations management principles."
    },
    {
        "SL NO":164,
        "QUESTIONS":"The first stage of Production control is:",
        "OPTION 1":"Dispatching",
        "OPTION 2":"Scheduling",
        "OPTION 3":"Routing",
        "OPTION 4":"Triggering of\nproduction\noperations and\nobserving the\nprogress and\nrecord the\ndeviation",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'triggering of production operations and observing the progress and record the deviation' because it directly addresses the the first stage of production control is: in the context of operations management principles."
    },
    {
        "SL NO":165,
        "QUESTIONS":"Production planning in the intermediate range of time is\ntermed as:",
        "OPTION 1":"Production planning",
        "OPTION 2":"Long range\nproduction\nplanning",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Aggregate\nplanning",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'aggregate planning' because it directly addresses the production planning in the intermediate range of time is\ntermed as: in the context of operations management principles."
    },
    {
        "SL NO":166,
        "QUESTIONS":"One of the principles of Scheduling is:",
        "OPTION 1":"Principle of optimal\nproduct design",
        "OPTION 2":"Principle of\nselection of best\nmaterial",
        "OPTION 3":"Principle of optimal\noperation sequence",
        "OPTION 4":"Principle of\noptimal cost.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'principle of optimal operation sequence' because it directly addresses the one of the principles of scheduling is: in the context of operations management principles."
    },
    {
        "SL NO":167,
        "QUESTIONS":"One of the aims of loading is:",
        "OPTION 1":"To finish the job as\nearly as possible",
        "OPTION 2":"To minimise the\nmaterial utilisation",
        "OPTION 3":"To improve the\nquality of product",
        "OPTION 4":"To keep operator\nidle time, material\nwaiting time and\nancillary machine\ntime at minimum.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'to keep operator idle time, material waiting time and ancillary machine time at minimum.' because it directly addresses the one of the aims of loading is: in the context of operations management principles."
    },
    {
        "SL NO":168,
        "QUESTIONS":"The cycle time in selected in balancing a line must be:",
        "OPTION 1":"Must be greater\nthan the smallest\ntime element given\nin the problem",
        "OPTION 2":"Must be less than\nthe highest time\nelement given in\nthe problem",
        "OPTION 3":"Must be slightly\ngreater than the\nhighest time\nelement given in\nthe problem",
        "OPTION 4":"Left to the choice\nof the problem\nsolver.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'must be slightly greater than the highest time element given in the problem' because it directly addresses the the cycle time in selected in balancing a line must be: in the context of operations management principles."
    },
    {
        "SL NO":169,
        "QUESTIONS":"In solving a problem on LOB, the number of workstations\nrequired is given by:",
        "OPTION 1":"Cycle time\/Total\ntime",
        "OPTION 2":"Cycle\ntime\/Element time",
        "OPTION 3":"Total time\/Element\ntime",
        "OPTION 4":"Total time\/ Cycle\ntime.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'total time\/ cycle time.' because it directly addresses the in solving a problem on lob, the number of workstations\nrequired is given by: in the context of operations management principles."
    },
    {
        "SL NO":170,
        "QUESTIONS":"Number of product varieties that can be manufactured in Job\nproduction is:",
        "OPTION 1":"Limited to one or\ntwo",
        "OPTION 2":"Large varieties of\nproducts",
        "OPTION 3":"One only",
        "OPTION 4":"None of the\nabove.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'large varieties of products' because it directly addresses the number of product varieties that can be manufactured in job\nproduction is: in the context of operations management principles."
    },
    {
        "SL NO":171,
        "QUESTIONS":"For a marketing manager, the sales forecast is:",
        "OPTION 1":"Estimate of the\namount of unit sales\nor a specified future\nperiod",
        "OPTION 2":"Arranging the\nsales men to\ndifferent segments\nof the market",
        "OPTION 3":"To distribute the\ngoods through\ntransport to satisfy\nthe market demand",
        "OPTION 4":"To plan the sales\nmethods",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'estimate of the amount of unit sales or a specified future period' because it directly addresses the for a marketing manager, the sales forecast is: in the context of operations management principles."
    },
    {
        "SL NO":172,
        "QUESTIONS":"For production planning:",
        "OPTION 1":"Shot term\nforecasting is useful",
        "OPTION 2":"Medium term\nforecasting is\nuseful",
        "OPTION 3":"Long term\nforecasting is\nuseful",
        "OPTION 4":"Forecasting is not\nuseful.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'shot term forecasting is useful' because it directly addresses the for production planning: in the context of operations management principles."
    },
    {
        "SL NO":173,
        "QUESTIONS":"Production planning deals with:",
        "OPTION 1":"What production\nfacilities is required\nand how these\nfacilities should be\nlaid out in space\navailable",
        "OPTION 2":"What to produce\nand when to\nproduce and where\nto sell",
        "OPTION 3":"What should be the\ndemand for the\nproduct in future",
        "OPTION 4":"What is the life of\nthe product?",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'what production facilities is required and how these facilities should be laid out in space available' because it directly addresses the production planning deals with: in the context of operations management principles."
    },
    {
        "SL NO":174,
        "QUESTIONS":"The first stage in production planning is:",
        "OPTION 1":"Process Planning",
        "OPTION 2":"Factory Planning",
        "OPTION 3":"Operation Planning",
        "OPTION 4":"Layout planning.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'factory planning' because it directly addresses the the first stage in production planning is: in the context of operations management principles."
    },
    {
        "SL NO":175,
        "QUESTIONS":"In Process Planning we plan:",
        "OPTION 1":"Different machines\nrequired",
        "OPTION 2":"Different\noperations\nrequired",
        "OPTION 3":"We plan the flow of\nmaterial in each\ndepartment",
        "OPTION 4":"We design the\nproduct.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'we plan the flow of material in each department' because it directly addresses the in process planning we plan: in the context of operations management principles."
    },
    {
        "SL NO":176,
        "QUESTIONS":"Economies of scale occurs when",
        "OPTION 1":"Single facility is\nused for multiple\npurposes",
        "OPTION 2":"Production or\noperating costs\nincrease linearly\nwith output levels",
        "OPTION 3":"Quantity discounts\nare not available for\nmaterial purchases;",
        "OPTION 4":"Operating\nefficiency\nincreases as\nworkers gain\nexperience",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'operating efficiency increases as workers gain experience' because it directly addresses the economies of scale occurs when in the context of operations management principles."
    },
    {
        "SL NO":177,
        "QUESTIONS":"The act of assessing the future and make provisions for it is\nknown as",
        "OPTION 1":"Planning",
        "OPTION 2":"Forecasting",
        "OPTION 3":"Assessment",
        "OPTION 4":"Scheduling.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'forecasting' because it directly addresses the the act of assessing the future and make provisions for it is\nknown as in the context of operations management principles."
    },
    {
        "SL NO":178,
        "QUESTIONS":"Application of technology or process to the raw material to\nadd use value is known as:",
        "OPTION 1":"Product",
        "OPTION 2":"Production",
        "OPTION 3":"Application of\ntechnology",
        "OPTION 4":"Combination of\ntechnology and\nprocess.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the application of technology or process to the raw material to\nadd use value is known as: in the context of operations management principles."
    },
    {
        "SL NO":179,
        "QUESTIONS":"In Production by disintegration the material undergoes:",
        "OPTION 1":"Change in economic\nvalue only",
        "OPTION 2":"Change in\nphysical and\nchemical\ncharacteristics",
        "OPTION 3":"Change in\ntechnology only",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'change in physical and chemical characteristics' because it directly addresses the in production by disintegration the material undergoes: in the context of operations management principles."
    },
    {
        "SL NO":180,
        "QUESTIONS":"The scope of Production Planning and Control is:",
        "OPTION 1":"Limited to\nProduction of\nproducts only",
        "OPTION 2":"Limited to\nproduction of\nservices only",
        "OPTION 3":"Limited to\nproduction of\nservices and\nproducts only",
        "OPTION 4":"Unlimited, can be\napplied to any type\nof activity.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'unlimited, can be applied to any type of activity.' because it directly addresses the the scope of production planning and control is: in the context of operations management principles."
    },
    {
        "SL NO":181,
        "QUESTIONS":"In an organisation the production planning and control\ndepartment comes under:",
        "OPTION 1":"Planning\ndepartment",
        "OPTION 2":"Manufacturing\ndepartment",
        "OPTION 3":"Personal\ndepartment",
        "OPTION 4":"R & D department.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'manufacturing department' because it directly addresses the in an organisation the production planning and control\ndepartment comes under: in the context of operations management principles."
    },
    {
        "SL NO":182,
        "QUESTIONS":"In Job production system, we need:",
        "OPTION 1":"More unskilled\nlabours",
        "OPTION 2":"Skilled labours",
        "OPTION 3":"Semi-skilled\nlabours",
        "OPTION 4":"Old people.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'skilled labours' because it directly addresses the in job production system, we need: in the context of operations management principles."
    },
    {
        "SL NO":183,
        "QUESTIONS":"Wanda\u2019s Car Wash & dry is an automatic, five-minute\noperation with a single bay. On a typical Saturday morning,\ncars arrive at a mean rate of eight per hour, with arrivals\ntending to follow a Poisson distribution. Find The average\ntime cars spend in line and service.",
        "OPTION 1":"10 minutes",
        "OPTION 2":"20 minutes",
        "OPTION 3":"15 minutes",
        "OPTION 4":"None of the above.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '10 minutes' because it directly addresses the wanda\u2019s car wash & dry is an automatic, five-minute\noperation with a single bay. on a typical saturday morning,\ncars arrive at a mean rate of eight per hour, with arrivals\ntending to follow a poisson distribution. find the average\ntime cars spend in line and service. in the context of operations management principles."
    },
    {
        "SL NO":184,
        "QUESTIONS":"A departmental store has one cashier. During the rush hours,\ncustomers arrive at a rate of 20 per hour. The average number\nof customers that can be handled by the cashier is 24 per\nhour. Assume the conditions for use of the single \u2013 channel\nqueuing model. Find out average customer spends in the\nsystem",
        "OPTION 1":"10 customers",
        "OPTION 2":"5 customers",
        "OPTION 3":"15 customers",
        "OPTION 4":"20 customers",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '5 customers' because it directly addresses the a departmental store has one cashier. during the rush hours,\ncustomers arrive at a rate of 20 per hour. the average number\nof customers that can be handled by the cashier is 24 per\nhour. assume the conditions for use of the single \u2013 channel\nqueuing model. find out average customer spends in the\nsystem in the context of operations management principles."
    },
    {
        "SL NO":185,
        "QUESTIONS":"As a tool service centre the arrival rate is two per hour and\nthe service potential is three per hour. Simple queue\nconditions exist.\nThe hourly wage paid to the attendant at the service centre is\n`1.50 per hour and the hourly cost of a machinist\naway from his work is ` 4. Calculate:The average time a\nmachinist spends waiting for service.",
        "OPTION 1":"0.777 hours",
        "OPTION 2":"0.667 hours",
        "OPTION 3":"0.600 hours",
        "OPTION 4":"0.700 hours",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is '0.667 hours' because it directly addresses the as a tool service centre the arrival rate is two per hour and\nthe service potential is three per hour. simple queue\nconditions exist.\nthe hourly wage paid to the attendant at the service centre is\n`1.50 per hour and the hourly cost of a machinist\naway from his work is ` 4. calculate:the average time a\nmachinist spends waiting for service. in the context of operations management principles."
    },
    {
        "SL NO":186,
        "QUESTIONS":"Which one of the following is not a factor affecting\nproductivity?",
        "OPTION 1":"Product design",
        "OPTION 2":"Material handling\nsystem",
        "OPTION 3":"Inventory control",
        "OPTION 4":"Master production\nschedule",
        "ANSWER CODE":4,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":187,
        "QUESTIONS":"Which one of the following is not correct?",
        "OPTION 1":"Productivity can be\nimproved by\nchanging work\nmethods",
        "OPTION 2":"Productivity\nrelates to a fixed\nset of tools or\nconditions",
        "OPTION 3":"For countries, high\nproductivity rates\ncan reduce the risk\nof inflation",
        "OPTION 4":"Productivity\nmeasures are used\nto judge the\neffective use of\nresources",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'productivity relates to a fixed set of tools or conditions' because it directly addresses the which one of the following is not correct? in the context of operations management principles."
    },
    {
        "SL NO":188,
        "QUESTIONS":"Which one of the following is not a factor for determination\nof effective capacity?",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Labour turnover",
        "OPTION 3":"Union attitudes",
        "OPTION 4":"EOQ",
        "ANSWER CODE":4,
        "EXPLANATION":"Capacity planning ensures the organization can meet demand by adjusting its production limits."
    },
    {
        "SL NO":189,
        "QUESTIONS":"A device of expressing the ratio between outputs and the\ninputs of the resources in numerical terms is named",
        "OPTION 1":"Productivity Index",
        "OPTION 2":"Efficiency Index",
        "OPTION 3":"Performance Index",
        "OPTION 4":"Resource Index",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'productivity index' because it directly addresses the a device of expressing the ratio between outputs and the\ninputs of the resources in numerical terms is named in the context of operations management principles."
    },
    {
        "SL NO":190,
        "QUESTIONS":"In Production by service, the product undergoes the changes\nin:",
        "OPTION 1":"Shape and size of\nthe surface",
        "OPTION 2":"Shape of the\nsurface only",
        "OPTION 3":"Size of the surface\nonly",
        "OPTION 4":"Chemical and\nMechanical\nproperties.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'shape of the surface only' because it directly addresses the in production by service, the product undergoes the changes\nin: in the context of operations management principles."
    },
    {
        "SL NO":191,
        "QUESTIONS":"Use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as:",
        "OPTION 1":"Transformation\nprocess",
        "OPTION 2":"Transformation of\ninput to output",
        "OPTION 3":"Production",
        "OPTION 4":"Technology\nchange",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'production' because it directly addresses the use of any process or procedure designed to transform a set\nof input elements into a set of output elements is known as: in the context of operations management principles."
    },
    {
        "SL NO":192,
        "QUESTIONS":"Conversion of inputs into outputs is known as:",
        "OPTION 1":"Application of\ntechnology",
        "OPTION 2":"Operations\nmanagement",
        "OPTION 3":"Manufacturing\nproducts",
        "OPTION 4":"Product",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'operations management' because it directly addresses the conversion of inputs into outputs is known as: in the context of operations management principles."
    },
    {
        "SL NO":193,
        "QUESTIONS":"Most important benefit to the consumer from efficient\nproduction system is:",
        "OPTION 1":"He can save money",
        "OPTION 2":"He will have\nproduct of his\nchoice easily\navailable",
        "OPTION 3":"He gets increased\nuse value in the\nproduct",
        "OPTION 4":"He can get the\nproduct on credit.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'he gets increased use value in the product' because it directly addresses the most important benefit to the consumer from efficient\nproduction system is: in the context of operations management principles."
    },
    {
        "SL NO":194,
        "QUESTIONS":"In Continuous manufacturing system, we need:",
        "OPTION 1":"General purpose\nmachines and\nSkilled labours",
        "OPTION 2":"Special machine\ntools and highly\nskilled labours",
        "OPTION 3":"Semi automatic\nmachines and\nunskilled labours",
        "OPTION 4":"General purpose\nmachines and\nunskilled labours",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'special machine tools and highly skilled labours' because it directly addresses the in continuous manufacturing system, we need: in the context of operations management principles."
    },
    {
        "SL NO":195,
        "QUESTIONS":"The best way of improving the productivity of capital is:",
        "OPTION 1":"Purchase automatic\nmachines",
        "OPTION 2":"Effective Labour\ncontrol",
        "OPTION 3":"To use good\nfinancial\nmanagement",
        "OPTION 4":"Productivity of\ncapital is to be\nincreased through\neffective materials\nmanagement.",
        "ANSWER CODE":4,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":196,
        "QUESTIONS":"There are two industries A and B manufacturing hose\ncouplings. The standard time per piece is 15 minutes. The\noutput of two small scale industries is 30 and 20 respectively\nper shift of 8 hours. Find the productivity of each per shift of\n8 hours.",
        "OPTION 1":"15\/16, 5\/8",
        "OPTION 2":"7\/24 , 9\/16",
        "OPTION 3":"3\/8 , 2\/5",
        "OPTION 4":"none of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":197,
        "QUESTIONS":"Calculate the standard production per shift of 8 hours\nduration, with the following data: Observed time per unit\n= 5 minutes, Rating Factor -120%, Total allowances = 30%\nof normal time.",
        "OPTION 1":"45.61 units",
        "OPTION 2":"54.61 units",
        "OPTION 3":"51.64 units",
        "OPTION 4":"61.54 units",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is '61.54 units' because it directly addresses the calculate the standard production per shift of 8 hours\nduration, with the following data: observed time per unit\n= 5 minutes, rating factor -120%, total allowances = 30%\nof normal time. in the context of operations management principles."
    },
    {
        "SL NO":198,
        "QUESTIONS":"ISO 9004 only establishes guidelines",
        "OPTION 1":"operation",
        "OPTION 2":"design",
        "OPTION 3":"quality",
        "OPTION 4":"none of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'operation' because it directly addresses the iso 9004 only establishes guidelines in the context of operations management principles."
    },
    {
        "SL NO":199,
        "QUESTIONS":"for Quality Assurance in Design, Production, Installation and\nServicing the _____ model is be used.",
        "OPTION 1":"ISO 9002 Model",
        "OPTION 2":"ISO 9001 Model",
        "OPTION 3":"ISO 9003 Model",
        "OPTION 4":"none of the above",
        "ANSWER CODE":2,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":200,
        "QUESTIONS":"for Quality Assurance in Production and Installation the\n_____ model is be used.",
        "OPTION 1":"ISO 9002 Model",
        "OPTION 2":"ISO 9001 Model",
        "OPTION 3":"ISO 9003 Model",
        "OPTION 4":"none of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":201,
        "QUESTIONS":"for Quality Assurance in Final Inspection Test the _____\nmodel is be used.",
        "OPTION 1":"ISO 9002 Model",
        "OPTION 2":"ISO 9001 Model",
        "OPTION 3":"ISO 9003 Model",
        "OPTION 4":"none of the above",
        "ANSWER CODE":3,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":202,
        "QUESTIONS":"A cement factory in Madhya Pradesh works 7 days a week in\n3 shifts per days having maintenance in the first shift of\naround 2 hours. It has roughly 100 workers which produces\nonly pozzolanic properties cement better known as PPC. The\noutput per month is around 2500 tonnes of PPC. Find the\nproductivity per worker?",
        "OPTION 1":"20 tonnes",
        "OPTION 2":"30 tonnes",
        "OPTION 3":"25 tonnes",
        "OPTION 4":"15 tonnes",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":203,
        "QUESTIONS":"The method used in scheduling a project is:",
        "OPTION 1":"A schedule of\nbreakdown of orders",
        "OPTION 2":"Outline Master\nProgramme",
        "OPTION 3":"PERT & CPM",
        "OPTION 4":"Schedule for large\nand integrated\nwork",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pert & cpm' because it directly addresses the the method used in scheduling a project is: in the context of operations management principles."
    },
    {
        "SL NO":204,
        "QUESTIONS":"The difference between product system and project system is:",
        "OPTION 1":"Project system the\nequipment and\nmachinery are fixed\nwhere as in product\nsystem they are\nmovable",
        "OPTION 2":"In Product system\nthe machinery and\nequipment are\nfixed and in\nproject system\nthey are not fixed",
        "OPTION 3":"Project system\nproduces only\nstandardized\nproducts and\nproduct system\nproduces only\nunstandardised\nproducts",
        "OPTION 4":"Products cannot be\nstocked whereas\nprojects can be\nstocked.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'in product system the machinery and equipment are fixed and in project system they are not fixed' because it directly addresses the the difference between product system and project system is: in the context of operations management principles."
    },
    {
        "SL NO":205,
        "QUESTIONS":"Fixing the flow lines of materials in production is known as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Planning",
        "OPTION 4":"Routing.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'routing.' because it directly addresses the fixing the flow lines of materials in production is known as: in the context of operations management principles."
    },
    {
        "SL NO":206,
        "QUESTIONS":"The activity of specifying when to start the job and when to\nend the job is known as:",
        "OPTION 1":"Plaining",
        "OPTION 2":"Scheduling",
        "OPTION 3":"Timing",
        "OPTION 4":"Follow-up.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'timing' because it directly addresses the the activity of specifying when to start the job and when to\nend the job is known as: in the context of operations management principles."
    },
    {
        "SL NO":207,
        "QUESTIONS":"A network :",
        "OPTION 1":"Is a graphical\nrepresentation of all\nthe activities and\nevents.",
        "OPTION 2":"Is a graphical\nrepresentation of\nall the activities",
        "OPTION 3":"Is a graphical\nrepresentation of all\nthe events.",
        "OPTION 4":"All the above",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'is a graphical representation of all the activities and events.' because it directly addresses the a network : in the context of operations management principles."
    },
    {
        "SL NO":208,
        "QUESTIONS":"While evaluating existing or proposed service systems,\noperation manager",
        "OPTION 1":"Relate to potential\ncustomer\ndissatisfaction and\ncosts:",
        "OPTION 2":"Relate cost of\nparallel facilities\nwith single queue",
        "OPTION 3":"Relate cost of\nmultiple queues\nwith cost of serve",
        "OPTION 4":"Relate to potential\ncustomer\nsatisfaction and\nservice quality",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'relate to potential customer dissatisfaction and costs:' because it directly addresses the while evaluating existing or proposed service systems,\noperation manager in the context of operations management principles."
    },
    {
        "SL NO":209,
        "QUESTIONS":"Probalistic time is dividded into :",
        "OPTION 1":"3",
        "OPTION 2":"2",
        "OPTION 3":"4",
        "OPTION 4":"6",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '3' because it directly addresses the probalistic time is dividded into : in the context of operations management principles."
    },
    {
        "SL NO":210,
        "QUESTIONS":"Gantt Chart is a principal tool used in",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Planning",
        "OPTION 4":"Routing.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the gantt chart is a principal tool used in in the context of operations management principles."
    },
    {
        "SL NO":211,
        "QUESTIONS":"The event from where more than one activity starts",
        "OPTION 1":"Merge event",
        "OPTION 2":"Brust Event",
        "OPTION 3":"start event",
        "OPTION 4":"event nodes",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'brust event' because it directly addresses the the event from where more than one activity starts in the context of operations management principles."
    },
    {
        "SL NO":212,
        "QUESTIONS":"Free float means or is equal to",
        "OPTION 1":"Total float - Slack\ntime of the head\nevent",
        "OPTION 2":"Independent Float\n+Tail Slack",
        "OPTION 3":"Independent Float -Head Slack",
        "OPTION 4":"PERT",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'total float - slack time of the head event' because it directly addresses the free float means or is equal to in the context of operations management principles."
    },
    {
        "SL NO":213,
        "QUESTIONS":"The critical path analysis is an important tool in production\nplanning and_________",
        "OPTION 1":"Loading",
        "OPTION 2":"scheduling",
        "OPTION 3":"Routing.",
        "OPTION 4":"All the above",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the the critical path analysis is an important tool in production\nplanning and_________ in the context of operations management principles."
    },
    {
        "SL NO":214,
        "QUESTIONS":"The method used in scheduling a project is:",
        "OPTION 1":"A schedule of break-down of orders",
        "OPTION 2":"Outline master\nprogramme",
        "OPTION 3":"PERT & CPM",
        "OPTION 4":"Schedule for large\nand integrated\nwork",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pert & cpm' because it directly addresses the the method used in scheduling a project is: in the context of operations management principles."
    },
    {
        "SL NO":215,
        "QUESTIONS":"One of the important charts used in programme control is:",
        "OPTION 1":"Material chart",
        "OPTION 2":"Gantt chart",
        "OPTION 3":"Route chart",
        "OPTION 4":"Inspection chart",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'gantt chart' because it directly addresses the one of the important charts used in programme control is: in the context of operations management principles."
    },
    {
        "SL NO":216,
        "QUESTIONS":"Final stage of production planning, where production\nactivities are coordinated and\nprojected on a time scale is known as:",
        "OPTION 1":"Scheduling",
        "OPTION 2":"Loading",
        "OPTION 3":"Planning",
        "OPTION 4":"Routing",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the final stage of production planning, where production\nactivities are coordinated and\nprojected on a time scale is known as: in the context of operations management principles."
    },
    {
        "SL NO":217,
        "QUESTIONS":"One of the principles of Scheduling is:",
        "OPTION 1":"Principle of optimal\nproduct design",
        "OPTION 2":"Principle of\nselection of best\nmaterial",
        "OPTION 3":"Principle of optimal\noperation sequence",
        "OPTION 4":"Principle of\noptimal cost.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'principle of optimal operation sequence' because it directly addresses the one of the principles of scheduling is: in the context of operations management principles."
    },
    {
        "SL NO":218,
        "QUESTIONS":"Issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as:",
        "OPTION 1":"Routing",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Inspection.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is ') dispatching' because it directly addresses the issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as: in the context of operations management principles."
    },
    {
        "SL NO":219,
        "QUESTIONS":"Which one of the following statements is NOT correct?",
        "OPTION 1":"LFT is calculated\nfrom the LFT of the\nhead event.",
        "OPTION 2":"Slack can be\ncalculated by\nadding EFT and\nLFT of any job.",
        "OPTION 3":"EFT is the sum of\nthe EST and the\ntime of duration for\nany event",
        "OPTION 4":"The Total Project\ntime is the shortest\npossible time\nrequired in\ncompleting the\nproject.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'slack can be calculated by adding eft and lft of any job.' because it directly addresses the which one of the following statements is not correct? in the context of operations management principles."
    },
    {
        "SL NO":220,
        "QUESTIONS":"Which one of the following establishes time sequence of\noperations?",
        "OPTION 1":"Routing",
        "OPTION 2":"Sequencing",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Dispatching",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'scheduling' because it directly addresses the which one of the following establishes time sequence of\noperations? in the context of operations management principles."
    },
    {
        "SL NO":221,
        "QUESTIONS":"Issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as:",
        "OPTION 1":"Routing",
        "OPTION 2":"Dispatching",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Inspection.",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'dispatching' because it directly addresses the issuing necessary orders, and taking necessary steps to ensure\nthat the time targets set in the schedules are effectively\nachieved is known as: in the context of operations management principles."
    },
    {
        "SL NO":222,
        "QUESTIONS":"Which one of the following is the benefit of keeping standby\nmachines?",
        "OPTION 1":"Utilisation of\nAdditional space",
        "OPTION 2":"Appropriate\ninvestment of\nadditional capital",
        "OPTION 3":"Availability of\nAdditional\nDepreciation",
        "OPTION 4":"Protection against\na complete\nshutdown",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'protection against a complete shutdown' because it directly addresses the which one of the following is the benefit of keeping standby\nmachines? in the context of operations management principles."
    },
    {
        "SL NO":223,
        "QUESTIONS":"Preventive maintenance is useful in reducing",
        "OPTION 1":"Inspection Cost",
        "OPTION 2":"Shutdown Cost",
        "OPTION 3":"Cost of pre- mature\nreplacement",
        "OPTION 4":"Set-up cost of\nmachine",
        "ANSWER CODE":2,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":224,
        "QUESTIONS":"Two important functions that are to be done by Production\ndepartment are:",
        "OPTION 1":"Forecasting",
        "OPTION 2":"Costing",
        "OPTION 3":"Scheduling and\nloading",
        "OPTION 4":"Inspecting.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'scheduling and loading' because it directly addresses the two important functions that are to be done by production\ndepartment are: in the context of operations management principles."
    },
    {
        "SL NO":225,
        "QUESTIONS":"When work centers are used in optimal sequence to do the\njobs, we can:",
        "OPTION 1":"Minimise the set up\ntime",
        "OPTION 2":"Minimse operation\ntime",
        "OPTION 3":"Minimise the break\ndown of machines",
        "OPTION 4":"Minimise the\nutility of facility.",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'minimise the set up time' because it directly addresses the when work centers are used in optimal sequence to do the\njobs, we can: in the context of operations management principles."
    },
    {
        "SL NO":226,
        "QUESTIONS":"Preventive maintenance policy is justified only when",
        "OPTION 1":"The average\ndowntime and its\ncost is equal to the\naverage time taken\nto carry out\nbreakdown repairs",
        "OPTION 2":"The average\ndowntime and its\ncost is greater than\nthe average time\ntaken to carry out\nbreakdown repairs",
        "OPTION 3":"The average\ndowntime and its\ncost is less than the\naverage time taken\nto carry out\nbreakdown repairs",
        "OPTION 4":"The average\ndowntime t is less\nthan the average\ntime taken to carry\nout breakdown\nrepairs",
        "ANSWER CODE":2,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":227,
        "QUESTIONS":"Which one of the following is not correct?",
        "OPTION 1":"Preventive\nmaintenance\nreduces breakdowns\nand downtime",
        "OPTION 2":"Preventive\nmaintenance\nincreases number\nof large scale\nrepairs",
        "OPTION 3":"Preventive\nmaintenance Lower\nunit cost of the\nproduct\nmanufactured,",
        "OPTION 4":"Preventive\nmaintenance\nimproves industrial\nrelations",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'preventive maintenance increases number of large scale repairs' because it directly addresses the which one of the following is not correct? in the context of operations management principles."
    },
    {
        "SL NO":228,
        "QUESTIONS":"Production department or maintenance department depending\non the size of the plant generally takes up",
        "OPTION 1":"preventive\nmaintenance work.",
        "OPTION 2":"capacity planning",
        "OPTION 3":"project\nmaintenance",
        "OPTION 4":"all of them",
        "ANSWER CODE":1,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":229,
        "QUESTIONS":"The main problem in maintenance analysis is to________ the\noverall cost of maintenance without sacrificing the objectives.",
        "OPTION 1":"Stable",
        "OPTION 2":"plan",
        "OPTION 3":"minimise",
        "OPTION 4":"replace",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":230,
        "QUESTIONS":"In some cases the__________ and inconvenience due to\nbreakdown of equipment is so high that standby equipment is\nkept.",
        "OPTION 1":"cost",
        "OPTION 2":"loss",
        "OPTION 3":"time",
        "OPTION 4":"intervals",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'loss' because it directly addresses the in some cases the__________ and inconvenience due to\nbreakdown of equipment is so high that standby equipment is\nkept. in the context of operations management principles."
    },
    {
        "SL NO":231,
        "QUESTIONS":"____________ while the equipment is running or during pre-planned shut-downs.",
        "OPTION 1":"Routine\nmaintenance",
        "OPTION 2":"preventive\nmaintenance",
        "OPTION 3":"replacement",
        "OPTION 4":"break down\nmaintenance",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'routine maintenance' because it directly addresses the ____________ while the equipment is running or during pre-planned shut-downs. in the context of operations management principles."
    },
    {
        "SL NO":232,
        "QUESTIONS":"The organizational structure should be",
        "OPTION 1":"systematic",
        "OPTION 2":"well maintained",
        "OPTION 3":"flexible.",
        "OPTION 4":"all of them",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'systematic' because it directly addresses the the organizational structure should be in the context of operations management principles."
    },
    {
        "SL NO":233,
        "QUESTIONS":"Which one of the following is NOT the advantage of\nPreventive Maintenance?",
        "OPTION 1":"Better product\nquality",
        "OPTION 2":"Greater safety to\nworkers",
        "OPTION 3":"Increased\nbreakdowns and\ndowntime",
        "OPTION 4":"Fewer large-scale\nrepairs",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":234,
        "QUESTIONS":"Identify which one of the following is NOT the objective of\nthe maintenance:",
        "OPTION 1":"To keep all\nproduction facilities\nand allied facilities\nin an optimum\nworking\ncondition.",
        "OPTION 2":"To ensure\nspecified accuracy\nto products and\ntime schedule of\ndelivery to\ncustomers",
        "OPTION 3":"To keep the down\ntime of the machine\nat the maximum.",
        "OPTION 4":") To keep the\nproduction cycle\nwithin the\nstipulated range.",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":235,
        "QUESTIONS":". One of the objectives of maintenance is:",
        "OPTION 1":"to prevent\nobsolescence",
        "OPTION 2":"to ensure spare\nparts management.",
        "OPTION 3":"to satisfy\ncustomers.",
        "OPTION 4":"to extend the\nuseful life of Plant\n& Machinery\nwithout sacrificing\nthe level of\nperformance",
        "ANSWER CODE":4,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":236,
        "QUESTIONS":"The monitoring, evaluating and disseminating of information\nfrom the external and internal environments to key people\nwithin the organisation is called",
        "OPTION 1":"Strategy\nFormulation",
        "OPTION 2":"Evaluation and\ncontrol",
        "OPTION 3":"Strategy\nImplementation",
        "OPTION 4":"Environmental\nscanning",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'environmental scanning' because it directly addresses the the monitoring, evaluating and disseminating of information\nfrom the external and internal environments to key people\nwithin the organisation is called in the context of operations management principles."
    },
    {
        "SL NO":237,
        "QUESTIONS":"The ____of a company state how managers and employees\nshould conduct themselves.",
        "OPTION 1":"values",
        "OPTION 2":"goals",
        "OPTION 3":"objectives",
        "OPTION 4":"vison",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'values' because it directly addresses the the ____of a company state how managers and employees\nshould conduct themselves. in the context of operations management principles."
    },
    {
        "SL NO":238,
        "QUESTIONS":"____________ are the day-to-day way in which an\norganisation operates and can be seen by people both inside\nand outside the organisation.",
        "OPTION 1":"Performances",
        "OPTION 2":"Targets",
        "OPTION 3":"Behaviours",
        "OPTION 4":"Values",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'behaviours' because it directly addresses the ____________ are the day-to-day way in which an\norganisation operates and can be seen by people both inside\nand outside the organisation. in the context of operations management principles."
    },
    {
        "SL NO":239,
        "QUESTIONS":"Which among the following provide the standards for\nperformance appraisal?",
        "OPTION 1":"Mission",
        "OPTION 2":"Vision",
        "OPTION 3":"Values",
        "OPTION 4":"Objectives",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'objectives' because it directly addresses the which among the following provide the standards for\nperformance appraisal? in the context of operations management principles."
    },
    {
        "SL NO":240,
        "QUESTIONS":"___________ is concerned with complexity arising out of\nambiguous and non-routine situations with organisation wide\nrather than operation-specific implications.",
        "OPTION 1":"Operational\nmanagement",
        "OPTION 2":"Business level\nstrategy",
        "OPTION 3":"Strategic\nManagement",
        "OPTION 4":"Functional level\nstrategy",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'strategic management' because it directly addresses the ___________ is concerned with complexity arising out of\nambiguous and non-routine situations with organisation wide\nrather than operation-specific implications. in the context of operations management principles."
    },
    {
        "SL NO":241,
        "QUESTIONS":"____________ refer to the job-specific goals of each\nindividual employee.",
        "OPTION 1":"Balanced Score\nCard",
        "OPTION 2":"Performance\nobjectives",
        "OPTION 3":"Personal objectives",
        "OPTION 4":"Organisational\ngenomics",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'personal objectives' because it directly addresses the ____________ refer to the job-specific goals of each\nindividual employee. in the context of operations management principles."
    },
    {
        "SL NO":242,
        "QUESTIONS":"The balanced score card is a approach to performance\nmanagement",
        "OPTION 1":"top-down",
        "OPTION 2":"bottom up",
        "OPTION 3":"indirect",
        "OPTION 4":"direct",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'top-down' because it directly addresses the the balanced score card is a approach to performance\nmanagement in the context of operations management principles."
    },
    {
        "SL NO":243,
        "QUESTIONS":"This_____ provides the broad \u2018data\u2019 from which to identify\nkey drivers of change.",
        "OPTION 1":"SWOT analysis",
        "OPTION 2":"BCG matrix",
        "OPTION 3":"PESTEL analysis",
        "OPTION 4":"Critical Success\nFactors",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pestel analysis' because it directly addresses the this_____ provides the broad \u2018data\u2019 from which to identify\nkey drivers of change. in the context of operations management principles."
    },
    {
        "SL NO":244,
        "QUESTIONS":"Environment is__________ .",
        "OPTION 1":"complex",
        "OPTION 2":"dynamic",
        "OPTION 3":"Multi-faceted",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all of the above' because it directly addresses the environment is__________ . in the context of operations management principles."
    },
    {
        "SL NO":245,
        "QUESTIONS":"________are the growth rate of the economy, interest rates,\ncurrency exchange rates, and inflation (or deflation) rates.",
        "OPTION 1":"Macro-economic\nforces",
        "OPTION 2":"Demographic\nforces",
        "OPTION 3":"Technological\nforces",
        "OPTION 4":"Political forces",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'macro-economic forces' because it directly addresses the ________are the growth rate of the economy, interest rates,\ncurrency exchange rates, and inflation (or deflation) rates. in the context of operations management principles."
    },
    {
        "SL NO":246,
        "QUESTIONS":"_________are outcomes of changes in the characteristics of a\npopulation",
        "OPTION 1":"Macro-economic\nforces",
        "OPTION 2":"Demographic\nforces",
        "OPTION 3":"Technological\nforces",
        "OPTION 4":"Political forces",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'demographic forces' because it directly addresses the _________are outcomes of changes in the characteristics of a\npopulation in the context of operations management principles."
    },
    {
        "SL NO":247,
        "QUESTIONS":"What describes the categories of activities within and around\nan organisation, which together create a product or service?",
        "OPTION 1":"SWOT analysis",
        "OPTION 2":"BCG framework",
        "OPTION 3":"Value Chain",
        "OPTION 4":"Brain storming",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'value chain' because it directly addresses the what describes the categories of activities within and around\nan organisation, which together create a product or service? in the context of operations management principles."
    },
    {
        "SL NO":248,
        "QUESTIONS":"_________transform these inputs into the final product or\nservice.",
        "OPTION 1":"Operations",
        "OPTION 2":"Inbound logistics",
        "OPTION 3":"Outbound logistics",
        "OPTION 4":"Service",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'operations' because it directly addresses the _________transform these inputs into the final product or\nservice. in the context of operations management principles."
    },
    {
        "SL NO":249,
        "QUESTIONS":"____________includes those activities that enhance or\nmaintain the value of product or service, such as installation,\nrepair, training and spares.",
        "OPTION 1":"Operations",
        "OPTION 2":"Inbound logistics",
        "OPTION 3":"Outbound logistics",
        "OPTION 4":"Service",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'service' because it directly addresses the ____________includes those activities that enhance or\nmaintain the value of product or service, such as installation,\nrepair, training and spares. in the context of operations management principles."
    },
    {
        "SL NO":250,
        "QUESTIONS":"____________are companies that are not currently competing\nin an industry, but have the capability to do so if they choose.",
        "OPTION 1":"Established\ncompanies",
        "OPTION 2":"Potential\ncompetitors",
        "OPTION 3":"Rivals",
        "OPTION 4":"Competitors",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'potential competitors' because it directly addresses the ____________are companies that are not currently competing\nin an industry, but have the capability to do so if they choose. in the context of operations management principles."
    },
    {
        "SL NO":251,
        "QUESTIONS":"Absolute cost advantages arise from",
        "OPTION 1":"superior production\noperations and\nprocesses",
        "OPTION 2":"control of\nparticular inputs\nrequired for\nproduction",
        "OPTION 3":"access to cheaper\nfunds",
        "OPTION 4":"all of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all of the above' because it directly addresses the absolute cost advantages arise from in the context of operations management principles."
    },
    {
        "SL NO":252,
        "QUESTIONS":"A______________is a combination of structures which could\ntake the form of product and geographical divisions or\nfunctional and divisional structures operating in tandem.",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'matrix structure' because it directly addresses the a______________is a combination of structures which could\ntake the form of product and geographical divisions or\nfunctional and divisional structures operating in tandem. in the context of operations management principles."
    },
    {
        "SL NO":253,
        "QUESTIONS":"A_________combines the local responsiveness of the\ninternational subsidiary with the coordination advantages\nfound in global product companies.",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'transnational structure' because it directly addresses the a_________combines the local responsiveness of the\ninternational subsidiary with the coordination advantages\nfound in global product companies. in the context of operations management principles."
    },
    {
        "SL NO":254,
        "QUESTIONS":"Which among the following is true?",
        "OPTION 1":"BPR has resulted in\nmajor gains in\nefficiency.",
        "OPTION 2":"BPR has resulted\nin major gains in\nspeed",
        "OPTION 3":"BPR has resulted in\nmajor gains in\nquality.",
        "OPTION 4":"BPR has resulted\nin major gains in\nefficiency, quality\nand speed.",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'bpr has resulted in major gains in efficiency, quality and speed.' because it directly addresses the which among the following is true? in the context of operations management principles."
    },
    {
        "SL NO":255,
        "QUESTIONS":"A____________ is one where teams are created, undertake\nthe work and are then dissolved.",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'project based structure' because it directly addresses the a____________ is one where teams are created, undertake\nthe work and are then dissolved. in the context of operations management principles."
    },
    {
        "SL NO":256,
        "QUESTIONS":"_______specifies what is to be accomplished by focusing on\nthe end result.",
        "OPTION 1":"Output control",
        "OPTION 2":"Behaviour control",
        "OPTION 3":"Premise control",
        "OPTION 4":"Implementation\ncontrol",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'output control' because it directly addresses the _______specifies what is to be accomplished by focusing on\nthe end result. in the context of operations management principles."
    },
    {
        "SL NO":257,
        "QUESTIONS":"____________is control achieved through the establishment\nof a comprehensive system of rules and procedures to direct\nthe actions of divisions, functions, and individuals.",
        "OPTION 1":"Output control",
        "OPTION 2":"Behaviour control",
        "OPTION 3":"Premise control",
        "OPTION 4":"Implementation\ncontrol",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'behaviour control' because it directly addresses the ____________is control achieved through the establishment\nof a comprehensive system of rules and procedures to direct\nthe actions of divisions, functions, and individuals. in the context of operations management principles."
    },
    {
        "SL NO":258,
        "QUESTIONS":"_______checks systemically and continuously whether the\nassumptions on which the strategy is based are still valid.",
        "OPTION 1":"Output control",
        "OPTION 2":"Behaviour control",
        "OPTION 3":"Premise control",
        "OPTION 4":"Implementation\ncontrol",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'premise control' because it directly addresses the _______checks systemically and continuously whether the\nassumptions on which the strategy is based are still valid. in the context of operations management principles."
    },
    {
        "SL NO":259,
        "QUESTIONS":"A________is based on the primary activities that have to be\nundertaken by an organisation",
        "OPTION 1":"Functional structure",
        "OPTION 2":"Matrix Structure",
        "OPTION 3":"Project based\nstructure",
        "OPTION 4":"Transnational\nstructure",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'functional structure' because it directly addresses the a________is based on the primary activities that have to be\nundertaken by an organisation in the context of operations management principles."
    },
    {
        "SL NO":260,
        "QUESTIONS":"This test is a catch-all category, indicating that the structure\nmust fit legal, stakeholder, trade union or similar constraints.",
        "OPTION 1":"The Feasibility Test",
        "OPTION 2":"The People Test",
        "OPTION 3":"The Parenting\nAdvantage Test",
        "OPTION 4":"The Specialised\nCultures Test",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'the feasibility test' because it directly addresses the this test is a catch-all category, indicating that the structure\nmust fit legal, stakeholder, trade union or similar constraints. in the context of operations management principles."
    },
    {
        "SL NO":261,
        "QUESTIONS":"In a fast-moving world, an important test to determine the\nextent to which a design will allow for change in the future is\ncalled?",
        "OPTION 1":"The Feasibility Test",
        "OPTION 2":"The Flexibility\nTest",
        "OPTION 3":"The Parenting\nAdvantage Test",
        "OPTION 4":"The Specialised\nCultures Test",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'the flexibility test' because it directly addresses the in a fast-moving world, an important test to determine the\nextent to which a design will allow for change in the future is\ncalled? in the context of operations management principles."
    },
    {
        "SL NO":262,
        "QUESTIONS":"Digital transformation drives change in",
        "OPTION 1":"customer experience",
        "OPTION 2":"operational\nprocesses",
        "OPTION 3":"business models",
        "OPTION 4":"all of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all of the above' because it directly addresses the digital transformation drives change in in the context of operations management principles."
    },
    {
        "SL NO":263,
        "QUESTIONS":"The process of digital transformation requires coordination\nacross the entire organization, and involves business culture\nchanges.",
        "OPTION 1":"digital strategy",
        "OPTION 2":"digitisation",
        "OPTION 3":"digital\ntransformation",
        "OPTION 4":"data aggregation",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'digital transformation' because it directly addresses the the process of digital transformation requires coordination\nacross the entire organization, and involves business culture\nchanges. in the context of operations management principles."
    },
    {
        "SL NO":264,
        "QUESTIONS":"Categorising and organising the digitised data and making it\nready for application of further processes is\ncalled__________ .",
        "OPTION 1":"Data aggregation",
        "OPTION 2":"Data management",
        "OPTION 3":"Workflow\nautomation",
        "OPTION 4":"Process component",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'data management' because it directly addresses the categorising and organising the digitised data and making it\nready for application of further processes is\ncalled__________ . in the context of operations management principles."
    },
    {
        "SL NO":265,
        "QUESTIONS":"Which among the following is not a characteristic of Big\nData?",
        "OPTION 1":"Variety",
        "OPTION 2":"Volume",
        "OPTION 3":"Velocity",
        "OPTION 4":"Invariability",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'invariability' because it directly addresses the which among the following is not a characteristic of big\ndata? in the context of operations management principles."
    },
    {
        "SL NO":266,
        "QUESTIONS":"Data that can be stored, accessed and processed in the form\nof fixed format is called .",
        "OPTION 1":"unstructured data",
        "OPTION 2":"semi-structured\ndata",
        "OPTION 3":"structured data",
        "OPTION 4":"flexible data",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'structured data' because it directly addresses the data that can be stored, accessed and processed in the form\nof fixed format is called . in the context of operations management principles."
    },
    {
        "SL NO":267,
        "QUESTIONS":"Which among the following is not a component of a block\nchain?",
        "OPTION 1":"Distributed ledger\ntechnology",
        "OPTION 2":"Immutable record",
        "OPTION 3":"Smart contracts",
        "OPTION 4":"Increased threat",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'increased threat' because it directly addresses the which among the following is not a component of a block\nchain? in the context of operations management principles."
    },
    {
        "SL NO":268,
        "QUESTIONS":"Which among the following alternatives is not suited for\nRobotic process automation tools?",
        "OPTION 1":"Repeatable",
        "OPTION 2":"Predictable\ninteractions with\nIT applications",
        "OPTION 3":"Routine",
        "OPTION 4":"Unpredictable\nevents",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'unpredictable events' because it directly addresses the which among the following alternatives is not suited for\nrobotic process automation tools? in the context of operations management principles."
    },
    {
        "SL NO":269,
        "QUESTIONS":"_____________is similar to referral programs.",
        "OPTION 1":"Influencer\nMarketing",
        "OPTION 2":"Affiliate\nmarketing",
        "OPTION 3":"Social Media\nMarketing\nPlatforms",
        "OPTION 4":"Content marketing",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'affiliate marketing' because it directly addresses the _____________is similar to referral programs. in the context of operations management principles."
    },
    {
        "SL NO":270,
        "QUESTIONS":"____________is a form of paid advertising that allows\nmarketing teams to essentially purchase traffic to their\nwebsite.",
        "OPTION 1":"Influencer\nMarketing",
        "OPTION 2":"Affiliate\nmarketing",
        "OPTION 3":"Pay-per-click",
        "OPTION 4":"Content marketing",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'pay-per-click' because it directly addresses the ____________is a form of paid advertising that allows\nmarketing teams to essentially purchase traffic to their\nwebsite. in the context of operations management principles."
    },
    {
        "SL NO":271,
        "QUESTIONS":"Forecasting the weather is an example of",
        "OPTION 1":"Narrow AI",
        "OPTION 2":"General AI\/human-level",
        "OPTION 3":"Super AI",
        "OPTION 4":"Deep- learning",
        "ANSWER CODE":1,
        "EXPLANATION":"Forecasting helps in predicting future demand to plan production, inventory, and capacity effectively."
    },
    {
        "SL NO":272,
        "QUESTIONS":"JIT stands for:",
        "OPTION 1":"Just in purchase",
        "OPTION 2":"Just in production",
        "OPTION 3":"Just in time use of\nmaterial",
        "OPTION 4":"Just in time order the\nmaterial",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'just in production' because it directly addresses the jit stands for: in the context of operations management principles."
    },
    {
        "SL NO":273,
        "QUESTIONS":"Example of production by disintegration is:",
        "OPTION 1":"Crude oil",
        "OPTION 2":"Mineral water",
        "OPTION 3":"Automobile",
        "OPTION 4":"Locomotive",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'crude oil' because it directly addresses the example of production by disintegration is: in the context of operations management principles."
    },
    {
        "SL NO":274,
        "QUESTIONS":"The act of assessing the future and make the provision for the act is\nknown as:",
        "OPTION 1":"Forcasting",
        "OPTION 2":"Assessment",
        "OPTION 3":"Scheduling",
        "OPTION 4":"Planning",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'forcasting' because it directly addresses the the act of assessing the future and make the provision for the act is\nknown as: in the context of operations management principles."
    },
    {
        "SL NO":275,
        "QUESTIONS":"The quatities for which the planner has to prepare production plan\nare known as",
        "OPTION 1":"Optimal quantity of\nproducts",
        "OPTION 2":"planning quantity\nstandards",
        "OPTION 3":"Quantity planning",
        "OPTION 4":"Material planning",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'planning quantity standards' because it directly addresses the the quatities for which the planner has to prepare production plan\nare known as in the context of operations management principles."
    },
    {
        "SL NO":276,
        "QUESTIONS":"PERT is __________ oriented technique:",
        "OPTION 1":"Event oriented\ntechnique",
        "OPTION 2":"Activity oriented\ntechnique",
        "OPTION 3":"Both (1) & (2)",
        "OPTION 4":"None of the above",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'event oriented technique' because it directly addresses the pert is __________ oriented technique: in the context of operations management principles."
    },
    {
        "SL NO":277,
        "QUESTIONS":"Operations Management is primarily deals with:",
        "OPTION 1":"Recruitment and\ntraining of employees",
        "OPTION 2":"Conversion of\ninputs into outputs\nusing physical\nresources",
        "OPTION 3":"Financial planning\nand budgeting",
        "OPTION 4":"Market research and\npromotion",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'conversion of inputs into outputs using physical resources' because it directly addresses the operations management is primarily deals with: in the context of operations management principles."
    },
    {
        "SL NO":278,
        "QUESTIONS":"What is the main objectives of Operations Management include:",
        "OPTION 1":"Effectiveness,\nefficiency, and\nadaptability",
        "OPTION 2":"Profitability,\nliquidity, and\nsolvency",
        "OPTION 3":"Motivation,\nleadership, and\nteamwork",
        "OPTION 4":"Planning, staffing,\nand directing",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'effectiveness, efficiency, and adaptability' because it directly addresses the what is the main objectives of operations management include: in the context of operations management principles."
    },
    {
        "SL NO":279,
        "QUESTIONS":"Under Production and Operations Management which of the\nfollowing is not an activity ?",
        "OPTION 1":"Product Design",
        "OPTION 2":"Financial\nAccounting",
        "OPTION 3":"Quality Control",
        "OPTION 4":"Maintenance\nManagement",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'financial accounting' because it directly addresses the under production and operations management which of the\nfollowing is not an activity ? in the context of operations management principles."
    },
    {
        "SL NO":280,
        "QUESTIONS":"The term \u201cDisappearance of Smokestacks\u201d refers to:",
        "OPTION 1":"Decline of heavy\nindustries",
        "OPTION 2":"Transformation of\nfactories into\nenvironmentally\nfriendly, knowledge-based systems",
        "OPTION 3":"Ban on factory\npollution",
        "OPTION 4":"Movement of\nfactories to rural\nareas",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'transformation of factories into environmentally friendly, knowledge-based systems' because it directly addresses the the term \u201cdisappearance of smokestacks\u201d refers to: in the context of operations management principles."
    },
    {
        "SL NO":281,
        "QUESTIONS":"The idea that \u201cSmall is Beautiful\u201d was given by:",
        "OPTION 1":"Peter Drucker",
        "OPTION 2":"E.F. Schumacher",
        "OPTION 3":"Henry Fayol",
        "OPTION 4":"Elton Mayo",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'e.f. schumacher' because it directly addresses the the idea that \u201csmall is beautiful\u201d was given by: in the context of operations management principles."
    },
    {
        "SL NO":282,
        "QUESTIONS":"The utilisation rate helps management to determine:",
        "OPTION 1":"Product quality",
        "OPTION 2":"Need for adding or\nreducing capacity",
        "OPTION 3":"Labour efficiency",
        "OPTION 4":"Machine downtime",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'need for adding or reducing capacity' because it directly addresses the the utilisation rate helps management to determine: in the context of operations management principles."
    },
    {
        "SL NO":283,
        "QUESTIONS":"Facility Layout is also known as:",
        "OPTION 1":"Plant Location",
        "OPTION 2":"Plant Layout",
        "OPTION 3":"Facility Design",
        "OPTION 4":"Work Centre\nManagement",
        "ANSWER CODE":2,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":284,
        "QUESTIONS":"Process Layout is also known as:",
        "OPTION 1":"Functional Layout",
        "OPTION 2":"Product Layout",
        "OPTION 3":"Fixed Position Layout",
        "OPTION 4":"Combination Layout",
        "ANSWER CODE":1,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":285,
        "QUESTIONS":"The main advantage of process layout is:",
        "OPTION 1":"High volume\nproduction",
        "OPTION 2":"Low material\nhandling cost",
        "OPTION 3":"Flexibility in\noperation",
        "OPTION 4":"High specialization\nfor one product",
        "ANSWER CODE":3,
        "EXPLANATION":"Plant layout is the arrangement of machinery and departments to ensure smooth flow and efficiency."
    },
    {
        "SL NO":286,
        "QUESTIONS":"Material Requirement Planning (MRP) is mainly used for planning\nthe production of:",
        "OPTION 1":"Services",
        "OPTION 2":"Finished goods only",
        "OPTION 3":"Raw materials only",
        "OPTION 4":"Assembled products",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'assembled products' because it directly addresses the material requirement planning (mrp) is mainly used for planning\nthe production of: in the context of operations management principles."
    },
    {
        "SL NO":287,
        "QUESTIONS":"The main purpose of MRP is to:",
        "OPTION 1":"Minimize labour cost",
        "OPTION 2":"Ensure that\nmaterials are\navailable when\nneeded",
        "OPTION 3":"Increase advertising\nefficiency",
        "OPTION 4":"Maintain maximum\nstock at all times",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'ensure that materials are available when needed' because it directly addresses the the main purpose of mrp is to: in the context of operations management principles."
    },
    {
        "SL NO":288,
        "QUESTIONS":"Which among the following is an advantage of an efficient\nproduction and inventory management system?",
        "OPTION 1":"Increased idle time\nand higher inventory\nlevels",
        "OPTION 2":"Reduced inventory,\nreduced idle time,\nand reduced setup\ntime",
        "OPTION 3":"Inability to adjust the\nmaster production\nschedule",
        "OPTION 4":"Higher sales prices\nand slower response\nto market demands",
        "ANSWER CODE":2,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":289,
        "QUESTIONS":"The Economic Lot Size or Economic Order Quantity or Economic\nBatch Quantity is defined as:",
        "OPTION 1":"The quantity of\noutput produced in\none batch that\nmaximizes production\nrate",
        "OPTION 2":"The maximum\nquantity that can be\nstored in the\nwarehouse",
        "OPTION 3":"The quantity of\noutput produced in\none batch that is most\neconomical, resulting\nin the lowest average\ncost of production",
        "OPTION 4":"The quantity of\noutput produced to\nmeet immediate\ndemand only",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'the quantity of output produced in one batch that is most economical, resulting in the lowest average cost of production' because it directly addresses the the economic lot size or economic order quantity or economic\nbatch quantity is defined as: in the context of operations management principles."
    },
    {
        "SL NO":290,
        "QUESTIONS":"M\/s Kobo Bearings Ltd., is committed to supply 24,000 bearings\nper annum to M\/s Deluxe Fans on a steady\ndaily basis. It is estimated that it costs 10 paisa as inventory holding\ncost per bearing per month and that the setup\ncost per run of bearing manufacture is \u20b9324.What is the optimum\nrun size for bearing manufacture?",
        "OPTION 1":"3600",
        "OPTION 2":"2400",
        "OPTION 3":"2600",
        "OPTION 4":"3700",
        "ANSWER CODE":1,
        "EXPLANATION":"Inventory management balances the cost of holding goods against the risk of stockouts."
    },
    {
        "SL NO":291,
        "QUESTIONS":"Find the economic order quantity and the reorder point, given\nAnnual demand (D) = 1000 units\nAverage daily demand (d) = 1000\/365\nOrdering Cost (S) = \u20b95 per order\nHolding cost(H) =\u20b91.25 per unit per year. Lead time (L) = 5 days\nCost per unit (C) = \u20b9 12.50\nWhat quantity should be ordered?",
        "OPTION 1":"3612",
        "OPTION 2":"2812",
        "OPTION 3":"2612",
        "OPTION 4":"4888",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is '2612' because it directly addresses the find the economic order quantity and the reorder point, given\nannual demand (d) = 1000 units\naverage daily demand (d) = 1000\/365\nordering cost (s) = \u20b95 per order\nholding cost(h) =\u20b91.25 per unit per year. lead time (l) = 5 days\ncost per unit (c) = \u20b9 12.50\nwhat quantity should be ordered? in the context of operations management principles."
    },
    {
        "SL NO":292,
        "QUESTIONS":"A good product design helps an organization to:",
        "OPTION 1":"Reduce product\nfeatures",
        "OPTION 2":"Increase production\nlead time",
        "OPTION 3":"Stay ahead of\ncompetition and\nsustain in a VUCA\nworld",
        "OPTION 4":"Avoid product\ndiversification",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'stay ahead of competition and sustain in a vuca world' because it directly addresses the a good product design helps an organization to: in the context of operations management principles."
    },
    {
        "SL NO":293,
        "QUESTIONS":"The Growth phase of the Product Life Cycle is characterized by:",
        "OPTION 1":"Decline in market\nshare and profits",
        "OPTION 2":"Rapid increase in\nsales and market\nexpansion",
        "OPTION 3":"Withdrawal of the\nproduct from the\nmarket",
        "OPTION 4":"Lack of promotional\nactivity",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'rapid increase in sales and market expansion' because it directly addresses the the growth phase of the product life cycle is characterized by: in the context of operations management principles."
    },
    {
        "SL NO":294,
        "QUESTIONS":"The Decline phase of the Product Life Cycle is characterized by:",
        "OPTION 1":"Increasing sales and\nmarket share",
        "OPTION 2":"Higher profitability\nand expansion",
        "OPTION 3":"Falling sales and\nnarrowing profit\nmargins",
        "OPTION 4":"Introduction of new\nproduct variants",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'falling sales and narrowing profit margins' because it directly addresses the the decline phase of the product life cycle is characterized by: in the context of operations management principles."
    },
    {
        "SL NO":295,
        "QUESTIONS":"Which among the following order represents the correct stages of\nthe Product Life Cycle ?",
        "OPTION 1":"Growth \u2192\nIntroduction \u2192\nMaturity \u2192 Decline",
        "OPTION 2":"Introduction \u2192\nGrowth \u2192 Maturity\n\u2192 Decline",
        "OPTION 3":"Maturity \u2192 Growth\n\u2192 Introduction \u2192\nDecline",
        "OPTION 4":"Introduction \u2192\nMaturity \u2192 Growth\n\u2192 Decline",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'introduction \u2192 growth \u2192 maturity \u2192 decline' because it directly addresses the which among the following order represents the correct stages of\nthe product life cycle ? in the context of operations management principles."
    },
    {
        "SL NO":296,
        "QUESTIONS":"The main objective of an assignment problem is to:",
        "OPTION 1":"Increase production\nregardless of cost",
        "OPTION 2":"Assign workers\nrandomly to jobs",
        "OPTION 3":"Maximize the number\nof workers employed",
        "OPTION 4":"Minimize total cost\nor time of\nperforming all jobs",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'minimize total cost or time of performing all jobs' because it directly addresses the the main objective of an assignment problem is to: in the context of operations management principles."
    },
    {
        "SL NO":297,
        "QUESTIONS":"Which of the following is not a method for solving an assignment\nproblem?",
        "OPTION 1":"Complete\nEnumeration Method",
        "OPTION 2":"Simplex Method",
        "OPTION 3":"Regression Method",
        "OPTION 4":"Transportation\nMethod",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'regression method' because it directly addresses the which of the following is not a method for solving an assignment\nproblem? in the context of operations management principles."
    },
    {
        "SL NO":298,
        "QUESTIONS":"Wanda\u2019s Car Wash & dry is an automatic, five-minute operation\nwith a single bay. On a typical Saturday morning,cars arrive at a\nmean rate of eight per hour, with arrivals tending to follow a\nPoisson distribution. Find the average number of cars in line.",
        "OPTION 1":"0.667 Car",
        "OPTION 2":"0.167 Car",
        "OPTION 3":"10 minutes",
        "OPTION 4":"20 minutes",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '0.667 car' because it directly addresses the wanda\u2019s car wash & dry is an automatic, five-minute operation\nwith a single bay. on a typical saturday morning,cars arrive at a\nmean rate of eight per hour, with arrivals tending to follow a\npoisson distribution. find the average number of cars in line. in the context of operations management principles."
    },
    {
        "SL NO":299,
        "QUESTIONS":"Monte Carlo simulation is mainly used in for:",
        "OPTION 1":"Static systems only",
        "OPTION 2":"Systems without\nuncertainty",
        "OPTION 3":"Random or stochastic\nsystems",
        "OPTION 4":"Deterministic\nsystems",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'random or stochastic systems' because it directly addresses the monte carlo simulation is mainly used in for: in the context of operations management principles."
    },
    {
        "SL NO":300,
        "QUESTIONS":"The important requirements of Monte Carlo simulation are:",
        "OPTION 1":"Hardware\noptimization",
        "OPTION 2":"Real-life\nexperimentation",
        "OPTION 3":"Model of the system\nand random number\ngenerator",
        "OPTION 4":"Linear equations and\nconstraints",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'model of the system and random number generator' because it directly addresses the the important requirements of monte carlo simulation are: in the context of operations management principles."
    },
    {
        "SL NO":301,
        "QUESTIONS":"Simulation is most useful method when:",
        "OPTION 1":"Data is always\ndeterministic",
        "OPTION 2":"Optimization\ntechniques are\nsufficient",
        "OPTION 3":"The system is simple\nand can be solved\nmathematically",
        "OPTION 4":"The system is\ncomplex and\ndifficult to analyze\nmathematically",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'the system is complex and difficult to analyze mathematically' because it directly addresses the simulation is most useful method when: in the context of operations management principles."
    },
    {
        "SL NO":302,
        "QUESTIONS":"In which company Lean operation has its roots?",
        "OPTION 1":"General Motors, USA",
        "OPTION 2":"Honda Motors,\nJapan",
        "OPTION 3":"Toyota Automobile\nCo., Japan",
        "OPTION 4":"Ford Motors, USA",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'toyota automobile co., japan' because it directly addresses the in which company lean operation has its roots? in the context of operations management principles."
    },
    {
        "SL NO":303,
        "QUESTIONS":"Which of the following is not an objective of JIT manufacturing?",
        "OPTION 1":"Produce only what\ncustomers want",
        "OPTION 2":"Produce products\nwith perfect quality",
        "OPTION 3":"Produce with zero\nwaste",
        "OPTION 4":"Produce products\nbefore demand arises",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'produce products before demand arises' because it directly addresses the which of the following is not an objective of jit manufacturing? in the context of operations management principles."
    },
    {
        "SL NO":304,
        "QUESTIONS":"Continuous improvement in JIT means:",
        "OPTION 1":"Focusing on short-term gains",
        "OPTION 2":"Relying on external\naudits only",
        "OPTION 3":"Once problems are\nsolved, no further\naction is needed",
        "OPTION 4":"Correcting existing\nproblems and\nidentifying new ones\ncontinuously",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'correcting existing problems and identifying new ones continuously' because it directly addresses the continuous improvement in jit means: in the context of operations management principles."
    },
    {
        "SL NO":305,
        "QUESTIONS":"A factory has 13 workers producing a single product. The total\noutput in a month of 24 working days is 370 units. What is the\nmonthly productivity per worker?",
        "OPTION 1":"30",
        "OPTION 2":"28.46",
        "OPTION 3":"15.42",
        "OPTION 4":"20",
        "ANSWER CODE":2,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":306,
        "QUESTIONS":"Productivity is commonly defined as:",
        "OPTION 1":"Output plus capital",
        "OPTION 2":"Input multiplied by\ntime",
        "OPTION 3":"Ratio between the\noutput volume and\nthe volume of inputs",
        "OPTION 4":"Output minus input",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":307,
        "QUESTIONS":"Which of the following is not a method to measure employee\nproductivity?",
        "OPTION 1":"Measure the amount\nof work completed",
        "OPTION 2":"Measure quality of\nwork",
        "OPTION 3":"Measure goals",
        "OPTION 4":"Measure employee\nhappiness",
        "ANSWER CODE":4,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":308,
        "QUESTIONS":"Natural factors influencing productivity include:",
        "OPTION 1":"Industrial policy",
        "OPTION 2":"Product design",
        "OPTION 3":"Climatic and\ngeological conditions",
        "OPTION 4":"Labour laws",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":309,
        "QUESTIONS":"Social factors affecting productivity refer to:",
        "OPTION 1":"Credit facilities",
        "OPTION 2":"Market demand",
        "OPTION 3":"Culture, customs, and\ntraditions of society",
        "OPTION 4":"Machine\nmaintenance and\ndowntime",
        "ANSWER CODE":3,
        "EXPLANATION":"Productivity is the ratio of output produced to the input resources used (like labor, capital, or materials)."
    },
    {
        "SL NO":310,
        "QUESTIONS":"Continuous improvement in TQM is also known as:",
        "OPTION 1":"Six Sigma",
        "OPTION 2":"Benchmarking",
        "OPTION 3":"KAIZEN",
        "OPTION 4":"JIT",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'kaizen' because it directly addresses the continuous improvement in tqm is also known as: in the context of operations management principles."
    },
    {
        "SL NO":311,
        "QUESTIONS":"Total Quality Management encourages:",
        "OPTION 1":"Individual work only",
        "OPTION 2":"Ignoring process\nimprovements",
        "OPTION 3":"Teamwork,\ncooperation, and\nemployee\ninvolvement",
        "OPTION 4":"Short-term results\nover long-term\nquality",
        "ANSWER CODE":3,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":312,
        "QUESTIONS":"Which of the following is not a principle of TQM?",
        "OPTION 1":"Quality is achieved\nthrough random\ninspection",
        "OPTION 2":"Continuous\nimprovement\n(Kaizen)",
        "OPTION 3":"Worker involvement\nis essential\nThe freedom",
        "OPTION 4":"Strive for quality in\nall things",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'quality is achieved through random inspection' because it directly addresses the which of the following is not a principle of tqm? in the context of operations management principles."
    },
    {
        "SL NO":313,
        "QUESTIONS":"Slack signifies:",
        "OPTION 1":"The total float of the\nproject",
        "OPTION 2":"The total duration of\nthe project",
        "OPTION 3":"available to\nreschedule or start a\njob",
        "OPTION 4":"The difference\nbetween EST and\nEFT",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'available to reschedule or start a job' because it directly addresses the slack signifies: in the context of operations management principles."
    },
    {
        "SL NO":314,
        "QUESTIONS":"For a job, slack time is calculated as:",
        "OPTION 1":"LFT + EFT",
        "OPTION 2":"EFT \u2212 LFT",
        "OPTION 3":"LFT \u2212 EFT",
        "OPTION 4":"EST \u2212 LST",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'eft \u2212 lft' because it directly addresses the for a job, slack time is calculated as: in the context of operations management principles."
    },
    {
        "SL NO":315,
        "QUESTIONS":"A job with zero slack is called:",
        "OPTION 1":"Critical job",
        "OPTION 2":"Non-critical job",
        "OPTION 3":"Independent job",
        "OPTION 4":"Slack job",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'critical job' because it directly addresses the a job with zero slack is called: in the context of operations management principles."
    },
    {
        "SL NO":316,
        "QUESTIONS":"EFT (Earliest Finish Time) is calculated as:",
        "OPTION 1":"Earliest Start Time +\nDuration of activity",
        "OPTION 2":"Latest Start Time +\nDuration",
        "OPTION 3":"Latest Finish Time \u2212\nDuration",
        "OPTION 4":"Earliest Start Time \u2212\nDuration",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'earliest start time + duration of activity' because it directly addresses the eft (earliest finish time) is calculated as: in the context of operations management principles."
    },
    {
        "SL NO":317,
        "QUESTIONS":"Floats represent:",
        "OPTION 1":"Difference between\nEFT and LFT",
        "OPTION 2":"Difference between\nmaximum time\navailable and actual\ntime required to\ncomplete an activity",
        "OPTION 3":"Difference between\nEST and LST",
        "OPTION 4":"Total duration of the\nproject",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'difference between maximum time available and actual time required to complete an activity' because it directly addresses the floats represent: in the context of operations management principles."
    },
    {
        "SL NO":318,
        "QUESTIONS":"Formula for Total Float (TF) is:",
        "OPTION 1":"TF = (EFT of tail\nevent \u2212 LST of head\nevent) \u2212 Duration",
        "OPTION 2":"TF = (EST of tail\nevent \u2212 EFT of head\nevent) \u2212 Duration",
        "OPTION 3":"TF = (LFT of head\nevent \u2212 EST of tail\nevent) \u2212 Duration",
        "OPTION 4":"TF = (LFT of head\nevent \u2212 EST of tail\nevent) + Duration",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'tf = (lft of head event \u2212 est of tail event) \u2212 duration' because it directly addresses the formula for total float (tf) is: in the context of operations management principles."
    },
    {
        "SL NO":319,
        "QUESTIONS":"A project activity has an EFT = 12 days, LFT = 20 days. What is its\nslack time?",
        "OPTION 1":"8 days",
        "OPTION 2":"27 days",
        "OPTION 3":"0 days",
        "OPTION 4":"12 days",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is '8 days' because it directly addresses the a project activity has an eft = 12 days, lft = 20 days. what is its\nslack time? in the context of operations management principles."
    },
    {
        "SL NO":320,
        "QUESTIONS":"A negative total float indicates that:",
        "OPTION 1":"The activity has\nexcess resources",
        "OPTION 2":"The activity can be\ndelayed without\naffecting the project",
        "OPTION 3":"Resources are not\nadequate and the\nactivity cannot finish\non time",
        "OPTION 4":"The project is ahead\nof schedule\nIndependent Float",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'resources are not adequate and the activity cannot finish on time' because it directly addresses the a negative total float indicates that: in the context of operations management principles."
    },
    {
        "SL NO":321,
        "QUESTIONS":"Free Float is a part of:",
        "OPTION 1":"Slack time",
        "OPTION 2":"Total Float",
        "OPTION 3":"Dummy activity",
        "OPTION 4":"only",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'total float' because it directly addresses the free float is a part of: in the context of operations management principles."
    },
    {
        "SL NO":322,
        "QUESTIONS":"Independent Float can be calculated as:",
        "OPTION 1":"Total Float + Slack\nTime of tail event",
        "OPTION 2":"Total Float \u2013 Head\nSlack",
        "OPTION 3":"Free Float \u2013 Tail\nSlack",
        "OPTION 4":"Free Float + Tail\nSlack",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'free float \u2013 tail slack' because it directly addresses the independent float can be calculated as: in the context of operations management principles."
    },
    {
        "SL NO":323,
        "QUESTIONS":"The main difference between slack and float is that:",
        "OPTION 1":"Slack refers to\nactivities, float refers\nto events",
        "OPTION 2":"Both refer to events\nonly",
        "OPTION 3":"Both refer to\nactivities only",
        "OPTION 4":"Slack is used for\nevents, float is used\nfor activities",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'slack is used for events, float is used for activities' because it directly addresses the the main difference between slack and float is that: in the context of operations management principles."
    },
    {
        "SL NO":324,
        "QUESTIONS":"The time constraint in project management refers to:",
        "OPTION 1":"The schedule for the\nproject to reach\ncompletion",
        "OPTION 2":"The total cost to\ncomplete a project",
        "OPTION 3":"The number of team\nmembers working on\nthe project",
        "OPTION 4":"The availability of\nraw materials",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'the schedule for the project to reach completion' because it directly addresses the the time constraint in project management refers to: in the context of operations management principles."
    },
    {
        "SL NO":325,
        "QUESTIONS":"Quality Improvement in project management refers to:",
        "OPTION 1":"Increasing team size\nfor faster execution",
        "OPTION 2":"Minimizing scope to\nmeet deadlines",
        "OPTION 3":"Applying tools to\nclose gaps between\ncurrent and desired\nquality levels",
        "OPTION 4":"Reducing cost of\nresources",
        "ANSWER CODE":3,
        "EXPLANATION":"Quality management focuses on meeting or exceeding customer expectations through process control and improvement."
    },
    {
        "SL NO":326,
        "QUESTIONS":"A Gantt Chart is also known as a:",
        "OPTION 1":"Network diagram",
        "OPTION 2":"Line graph",
        "OPTION 3":"Bar chart",
        "OPTION 4":"Flow chart",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'bar chart' because it directly addresses the a gantt chart is also known as a: in the context of operations management principles."
    },
    {
        "SL NO":327,
        "QUESTIONS":"A major advantage of the Gantt Chart is that it:",
        "OPTION 1":"Shows detailed\nnetwork relationships",
        "OPTION 2":"Can easily\nincorporate changes\nin timing and\nmachine loads",
        "OPTION 3":"Eliminates the need\nfor manpower\nplanning",
        "OPTION 4":"Eliminates the need\nfor manpower\nplanning",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'can easily incorporate changes in timing and machine loads' because it directly addresses the a major advantage of the gantt chart is that it: in the context of operations management principles."
    },
    {
        "SL NO":328,
        "QUESTIONS":"An event in a network refers to:",
        "OPTION 1":"A job that consumes\ntime and money",
        "OPTION 2":"The use of physical\nresources",
        "OPTION 3":"The start or\ncompletion of a job\nthat consumes no\nresources",
        "OPTION 4":"An interruption in\nthe workflow",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'the start or completion of a job that consumes no resources' because it directly addresses the an event in a network refers to: in the context of operations management principles."
    },
    {
        "SL NO":329,
        "QUESTIONS":"Network analysis provides a graphical representation of:",
        "OPTION 1":"Profit and loss data",
        "OPTION 2":"Material flow\nbetween\ndepartments",
        "OPTION 3":"Only the critical\nactivities",
        "OPTION 4":"All activities and\nevents in logical\nsequence",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'all activities and events in logical sequence' because it directly addresses the network analysis provides a graphical representation of: in the context of operations management principles."
    },
    {
        "SL NO":330,
        "QUESTIONS":"Which of the following is not an application of network analysis?",
        "OPTION 1":"Aircraft\nmanufacturing",
        "OPTION 2":"Retail store\nmanagement",
        "OPTION 3":"Construction of\nresidential complex",
        "OPTION 4":"Satellite mission\ndevelopment",
        "ANSWER CODE":2,
        "EXPLANATION":"The correct answer is 'retail store management' because it directly addresses the which of the following is not an application of network analysis? in the context of operations management principles."
    },
    {
        "SL NO":331,
        "QUESTIONS":"The type of maintenance in which machines are repaired only after\nbreakdown is known as:",
        "OPTION 1":"Scheduled\nmaintenance",
        "OPTION 2":"Predictive\nmaintenance",
        "OPTION 3":"Breakdown or repair\nmaintenance",
        "OPTION 4":"Preventive\nmaintenance",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":332,
        "QUESTIONS":"Which of the following is an analytical measure used to evaluate\npreventive maintenance effectiveness?",
        "OPTION 1":"Hours worked for\nmaintenance \/\nScheduled hours \u00d7\n100",
        "OPTION 2":"Inspections\nincomplete \/\nInspections\nscheduled \u00d7 100",
        "OPTION 3":"Frequency of\nbreakdowns =\nNumber of\nbreakdowns \/\nAvailable machine\nhours",
        "OPTION 4":"All of the above",
        "ANSWER CODE":4,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":333,
        "QUESTIONS":"One of the key advantages of preventive maintenance is:",
        "OPTION 1":"Increased work\ncontent of\nmaintenance jobs",
        "OPTION 2":"Reduced\nbreakdowns and\ndowntime",
        "OPTION 3":"Reduced safety of\nworkers",
        "OPTION 4":"Increased downtime",
        "ANSWER CODE":2,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":334,
        "QUESTIONS":"What does running maintenance typically include?",
        "OPTION 1":"Installation of new\nmachinery",
        "OPTION 2":"Only major repairs\nafter equipment\nfailure",
        "OPTION 3":"Lubrication, cleaning,\nand periodic overhaul\nwhile the equipment\nis in operation or\nduring preplanned\nshutdowns",
        "OPTION 4":"Outsourcing all\nmaintenance work",
        "ANSWER CODE":3,
        "EXPLANATION":"Maintenance ensures equipment stays in good working order to prevent costly breakdowns and downtime."
    },
    {
        "SL NO":335,
        "QUESTIONS":"What are the two main causes for the replacement of machinery?",
        "OPTION 1":"Wear and\nobsolescence",
        "OPTION 2":"Technological\nimprovement and\nbreakdowns",
        "OPTION 3":"Wear and\ndepreciation",
        "OPTION 4":"Maintenance and\nrepair costs",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'wear and obsolescence' because it directly addresses the what are the two main causes for the replacement of machinery? in the context of operations management principles."
    },
    {
        "SL NO":336,
        "QUESTIONS":"One reason for replacing a machine before its expected life is:",
        "OPTION 1":"To reduce factory\nspace",
        "OPTION 2":"To avoid preventive\nmaintenance",
        "OPTION 3":"To reduce running\ncosts and increase\nproductivity",
        "OPTION 4":"To increase\ndowntime",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'to reduce running costs and increase productivity' because it directly addresses the one reason for replacing a machine before its expected life is: in the context of operations management principles."
    },
    {
        "SL NO":337,
        "QUESTIONS":"Which of the following is NOT a classification of spare parts?",
        "OPTION 1":"Regular Spares",
        "OPTION 2":"Insurance Spares",
        "OPTION 3":"Capital Spares",
        "OPTION 4":"Temporary Spares",
        "ANSWER CODE":4,
        "EXPLANATION":"The correct answer is 'temporary spares' because it directly addresses the which of the following is not a classification of spare parts? in the context of operations management principles."
    },
    {
        "SL NO":338,
        "QUESTIONS":"What is the primary purpose of a vision statement in an\norganization?",
        "OPTION 1":"To outline the\ncompany's current\noperations and\nprocesses.",
        "OPTION 2":"To list the\ncompany's products\nand services.",
        "OPTION 3":"To define the desired\nfuture state and\naspirations of the\norganization.",
        "OPTION 4":"To describe the\ncompany's financial\ngoals.",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'to define the desired future state and aspirations of the organization.' because it directly addresses the what is the primary purpose of a vision statement in an\norganization? in the context of operations management principles."
    },
    {
        "SL NO":339,
        "QUESTIONS":"What does the \"F\" in the FAST goal-setting framework stand for?",
        "OPTION 1":"Financially viable",
        "OPTION 2":"Fully achievable",
        "OPTION 3":"Frequently discussed",
        "OPTION 4":"Fully transparent",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'frequently discussed' because it directly addresses the what does the \"f\" in the fast goal-setting framework stand for? in the context of operations management principles."
    },
    {
        "SL NO":340,
        "QUESTIONS":"What does EVA stand for in financial performance metrics?",
        "OPTION 1":"Equity Value Added",
        "OPTION 2":"Earnings Value\nAdded",
        "OPTION 3":"Economic Value\nAdded",
        "OPTION 4":"Earnings Variance\nAnalysis",
        "ANSWER CODE":3,
        "EXPLANATION":"The correct answer is 'economic value added' because it directly addresses the what does eva stand for in financial performance metrics? in the context of operations management principles."
    },
    {
        "SL NO":341,
        "QUESTIONS":"The dynamic nature of the business environment requires\nbusinesses to:",
        "OPTION 1":"Continuously adapt to\nchanges and\nanticipate future\ntrends",
        "OPTION 2":"Maintain a static\napproach to\noperations",
        "OPTION 3":"Ignore external\nchanges and focus\nonly on internal\nfactors",
        "OPTION 4":"Rely solely on\nhistorical data for\ndecision-making",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'continuously adapt to changes and anticipate future trends' because it directly addresses the the dynamic nature of the business environment requires\nbusinesses to: in the context of operations management principles."
    },
    {
        "SL NO":342,
        "QUESTIONS":"A company develops a new recycling process to reduce waste.\nWhich PESTEL factor is it responding to?",
        "OPTION 1":"Environmental",
        "OPTION 2":"Technological",
        "OPTION 3":"Economic",
        "OPTION 4":"Political",
        "ANSWER CODE":1,
        "EXPLANATION":"The correct answer is 'environmental' because it directly addresses the a company develops a new recycling process to reduce waste.\nwhich pestel factor is it responding to? in the context of operations management principles."
    }
]
          },
          {
            label: "Corporate Accounting",
            questions: 
            [
    {
        "question": "Which of the following is/are not characteristic of a company?",
        "options": [
            "It is a distinct legal entity existing independent of its members.",
            "It has a perpetual succession.",
            "The shares of a company are freely transferable except in case of a Private limited Company.",
            "It is a voluntary association of persons usually for social up liftment without expectation of any profit."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are the important feature/s of a company?",
        "options": [
            "Accounting process is highly regulated and guided by regulatory pronouncements",
            "Constituents of periodical accounts (i.e., income statement, balance sheet etc.) are specified by the law",
            "Importance of compliance to the prescribed rules and regulations is paramount",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In India, accounting in of a company form is guided by which of the following regulatory sources?",
        "options": [
            "Companies Act, 2013",
            "Company Rules",
            "Accounting Standards",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a statutory book of a company?",
        "options": [
            "Register of Investments held and their names",
            "Annual returns",
            "Register of Officers",
            "Register of shareholdings of the directors"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are not a feature/s of Shares have the following features?",
        "options": [
            "It represents the biggest unit of ownership",
            "Shares of a specific series must have the same face value",
            "Share represents only a partial ownership of Share Capital of the company",
            "Each share has a distinct number"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In case of ___________________ issue the shares are offered to the existing shareholders of the company without any consideration.",
        "options": [
            "Private Placement",
            "Rights Issue",
            "Bonus Issue",
            "Offers for sale"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "When share is issued at a price equal to its face value, it is called issue _____________.",
        "options": [
            "at Par",
            "Issue at a Premium",
            "Issue at a Discount",
            "at Bonus"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Provisions relating to buy back of securities are contained in __________________ of the Companies Act, 2013.",
        "options": [
            "Section 77",
            "Section 77A",
            "Section 68",
            "Section 63"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Buy-back of equity shares in any financial year should not exceed ______________.",
        "options": [
            "10% of net worth",
            "25% of the aggregate of paid-up capital and free reserves of the company",
            "25% of the paid-up equity capital",
            "25% of the aggregate of paid-up equity capital and preference capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "2. Company may purchase its own shares or other specified securities out of \u2013 A. Free reserves B. Securities premium account C. Proceeds of issue of any shares D. Proceeds of issue of specified securities",
        "options": [
            "A and C only",
            "A, b and C only",
            "A, C and D only",
            "A or B or C or D"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Section 68 of the Companies Act, 2013 provides that no buy-back of any kind of shares or other specified securities shall be made out of the _________________.",
        "options": [
            "Securities premium balance as it stood before buy back",
            "Proceeds of an earlier issue of the same kind of shares or same kind of other specified securities",
            "General reserve in excess of 15% balance as per latest audited balance sheet",
            "Proceeds of issue of specified securities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "For the purpose of calculating debt equity ratio which of the following debts are considered_________________.",
        "options": [
            "Secured debts",
            "Unsecured debts",
            "Current liabilities",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Where a company purchase its own shares out of free reserves or securities premium account, a sum equal to the nominal value of the shares so purchased shall be transferred to the ___________________.",
        "options": [
            "Capital Reserve Account",
            "General Reserve Account",
            "Capital Redemption Reserve Account",
            "Equity Shares Redemption Account"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "No offer of buy-back shall be made within a period of reckoned from the date of the closure of the preceding offer of buy-back ______________.",
        "options": [
            "6 months",
            "1 year",
            "2 years",
            "10 months"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Equity shares amounting to Rs.2,00,000 are brought back at a premium of 5%, by issue of preference shares amounting to Rs.1,00,000 at a premium of 10%. Compute the amount to be transferred to Capital Redemption Reserve.",
        "options": [
            "Rs.1,00,000",
            "Rs.90,000",
            "Rs.1,50,000",
            "Rs.50,000"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Following are the extract of balance sheet of Light Co. Ltd. Equity share of Rs.10 each - Rs.10,00,000 Security Premium \u2013 Rs.2,40,000 Reserve \u2013 Rs.7,50,000 Profit & Loss Account \u2013 Rs.2,80,000 Bank - Rs.9,10,000 Non Trading Investments \u2013 Rs.4,20,000 Company brought back 15,000 shares at Rs.40 each. The transaction in respect of buy back was financed by sale of 2/3rd of non-trade investment for Rs.5,90,000 Amount to be transferred to capital redemption reserve is _______________.",
        "options": [
            "Rs.6,00,000",
            "Rs.1,00,000",
            "Rs.4,50,000",
            "Rs.1,50,000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Following information is available from the audited balance sheet of TH Ltd.: Equity Shares Capital (3,000 lakh share of Rs.10 each) \u2013 Rs.30,000 Securities Premium Account - Rs.3,000 General Reserve \u2013 Rs.10,000 Secured Loans \u2013 Rs.40,000 Unsecured Loans - Rs.22,000 Compute the maximum limits up to which buy back is permitted in the financial year 2022 \u2013 23.",
        "options": [
            "800 lakh shares",
            "1075 lakh shares",
            "500 lakh shares",
            "400 lakh shares"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The notice of the meeting at which the special resolution is proposed to be passed relating to buy back of shares shall be accompanied by an explanatory statement stating \u2013",
        "options": [
            "Full and complete disclosure of all material facts",
            "Analysis of debt equity",
            "Gross profit ratio before buy back",
            "Chairman\u2019s view on buy back"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The balance appearing in the books of a company at the end of year were: CRR A/c = Rs.50,000 Securities Premium = Rs.5,000 Revaluation Reserve = Rs.20,000 Profit & Loss A/c (Dr.) = Rs.10,000 Maximum amount available for bonus shares will be ______________________.",
        "options": [
            "Rs.50,000",
            "Rs.55,000",
            "Rs.45,000",
            "Rs.57,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "______________ is the amount of share capital that a company is permitted to issue.",
        "options": [
            "Issued Share Capital",
            "Authorized Share Capital",
            "Subscribed Capital",
            "Paid up Capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "When shares are forfeited, the share capital account is debited with ______.",
        "options": [
            "Called-up value of shares",
            "Nominal value of shares",
            "Market value of shares",
            "Paid-up value of shares"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Forfeiture of shares results in the reduction of______.",
        "options": [
            "Authorised capital",
            "Reserve capital",
            "Paid-up capital",
            "Fixed assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Shares can be forfeited ________.",
        "options": [
            "For failure to attend meetings",
            "For failure to repay the loan to the bank",
            "For non-payment of call money",
            "For which shares are pledged as a security"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Redeemable Preference Shares of Rs. 1,00,000 are redeemed at a premium of 5% for which purpose fresh equity capital of Rs. 40,000 is issued at par. What amount should be transferred to Capital Redemption Reserve account?",
        "options": [
            "Rs.40,000",
            "Rs.1,05,000",
            "Rs.65,000",
            "Rs.60,000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The financial statements of company shall be in the from provided in _____________.",
        "options": [
            "Schedule IV",
            "Schedule III",
            "Schedule V",
            "Schedule VI"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Part I of the Schedule III to the Companies Act, 2013 gives the ______________.",
        "options": [
            "Format of Profit & Loss Account",
            "General instructions for preparation of Profit & Loss Account",
            "Format of Balance Sheet",
            "Format of Comparative Statements"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Where the company covered under section 135 of the Companies Act, 2013, which of the following shall be disclosed with regard to CSR activities?",
        "options": [
            "amount of expenditure incurred",
            "shortfall at the end of the year",
            "shortfall at the end of the year",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are not a criteria to classify a liability as current liability?",
        "options": [
            "it is expected to be settled in the company\u2019s normal operating cycle",
            "it is held primarily not for the purpose of being traded",
            "it is due to be settled within twelve months after the reporting date",
            "the company does not have an unconditional right to defer settlement of the liability for at least twelve months after the reporting date"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What are the major types of financial statements prepared by entities?",
        "options": [
            "(a) Statement of Financial Performance or Income Statement (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Statement of Inflow and Outflow of Cash",
            "(a) Statement of Trial Balance (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Statement of Inflow and Outflow of Cash",
            "(a) Statement of Financial Performance or Income Statement (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Statement of Fund Flows",
            "(a) Statement of Financial Performance or Income Statement (b) Statement of Financial State of Affairs or Balance Sheet (c) Statement of Changes in Financial Position (d) Cash Book"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If the turnover of the company is less than Rs.100 Crore, the figures appearing in the Financial Statements shall be rounded off to nearest \u2013",
        "options": [
            "To the nearest hundreds",
            "To the nearest hundreds and thousands",
            "To the nearest hundred, thousands, lakh or million thereof",
            "To the nearest hundreds, thousands, lakhs or millions, or decimals thereof"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Under which heading the Deferred Tax Liabilities appears in the balance sheet _________________.",
        "options": [
            "Current Liabilities",
            "Non-Current Liabilities",
            "Deferred Liabilities",
            "Contingent Liabilities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "As asset shall be classified as current ------------------------",
        "options": [
            "If it is held primarily for the purpose of being traded.",
            "If it is not possible to classify such asset as non-current asset",
            "It or the asset normal operating cycle cannot be identified",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A liability shall be classified as current when it satisfies any of the following criteria:",
        "options": [
            "It is expected to be settled in the Company\u2019s normal operating cycle",
            "It is due to be settled within twelve months after the reporting date",
            "The company does not have an un-conditional right to defer settlement of the liability of at least twelve months after the reporting date.",
            "Any of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following appears under the heading \u2018Reserve & Surplus\u2019 in the balance sheet",
        "options": [
            "Share Options Outstanding Account",
            "Share Application Money Pending Allotment",
            "Long Term Provisions",
            "Share Application Money due for refund"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In the Balance Sheet Bank Overdraft will be shown as a liability under the heading \u2013",
        "options": [
            "Other Current Liabilities",
            "Short Term Borrowings",
            "Current Liabilities",
            "Cash & Cash Equivalent Liabilities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In the Balance Sheet Calls in Arrears will be shown in -",
        "options": [
            "Liabilities Side",
            "Assets Side",
            "Assets or Liabilities Side",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Futura Ltd had the following items under the head \u201cReserves and Surplus\u201d in the Balance Sheet as on 31st March: (Rs. in Lakhs) Securities Premium Account - 80, Capital Reserve \u2013 60, General Reserve \u2013 90. The Company had an Accumulated Loss of Rs250 Lakhs on the same date. Reserves & Surplus to be disclosed in B/S is _______________",
        "options": [
            "Rs.250 Lakhs",
            "Rs.230 Lakhs",
            "Rs.20 Lakhs",
            "Rs.(20 Lakhs)"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In the Notes to Accounts a Contingent liabilities shall be classified as ____________.",
        "options": [
            "Claims against the company not acknowledged as debt",
            "Guarantees",
            "Other money for which the company is contingently liable",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In case of purchase of assets under instalment payment system, instalments due after 12 months from the reporting date are shown as",
        "options": [
            "Current liability",
            "Current assets",
            "Non-current liability",
            "Non-current assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "As per Schedule III of Companies Act 2013, while preparing the financial statements in case of a Finance Company, interest received from borrowers should be shown under",
        "options": [
            "Revenue from operation",
            "Other Income",
            "Current assets",
            "Non-current assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Inventories are valued at the lower of _________________ or the net realizable value.",
        "options": [
            "Fair Value",
            "Historical cost",
            "Current value",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The amount of Calls-in-Advance not yet adjusted till the Balance Sheet date is shown under ___________ under the head Current Liabilities",
        "options": [
            "Other Current Liabilities",
            "Inventories",
            "Trade Receivables",
            "Trade Paybles"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Proposed Dividend is treated as a _____________________________ and is shown as a deduction in Reserve and Surplus.",
        "options": [
            "Contingent Liabilities",
            "Current Assets",
            "Current Liabilities",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cash receipts from disposal of shares is classified under",
        "options": [
            "Investing Activity",
            "Operating Activity",
            "Financing Activity",
            "Cash Equivalent"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The main difference in direct and indirect method is to calculate the",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "All of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is/are objective/s of preparing Cash Flow Statement?",
        "options": [
            "to determine ability of the entity to generate cash and cash equivalents",
            "to meet the needs of the entity to utilise the cash flows",
            "to ascertain gross inflows and outflows of cash",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "When company repurchases its own shares it records a ____________",
        "options": [
            "Cash inflow",
            "Cash outflow",
            "No effect on cash",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A Cash Flow Statement begins with ____________.",
        "options": [
            "Investing Activity",
            "Operating Activity",
            "Financing Activity",
            "Cash Equivalent"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of Non-cash Expenses",
        "options": [
            "Depreciation",
            "Wages and Salaries",
            "Payment of Dividend",
            "All of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If the Net Operating Profit is Rs.90,000 and the Debtors are decreased by Rs.20,000 during the year.Then Cash from Operation will be ____________.",
        "options": [
            "Rs.70,000",
            "Rs.1,10,000",
            "Rs.90,000",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Increase of Bills Receivale by Rs.30,000 results in",
        "options": [
            "Decrease in Cash",
            "Increase in Cash",
            "No effect on cash",
            "All of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Marketable securities are treated as _________________ in Cash Flow Statement",
        "options": [
            "Cash",
            "Cash equivalent",
            "Current Asset",
            "Non-cash Equivalent"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An example of Cash Flow from Financing Activity is ________________",
        "options": [
            "Payment of Dividend",
            "Receipt of dividend on investment",
            "Cash received from customer",
            "Purchase of Fixed Assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is a source of Cash?",
        "options": [
            "Cash deposited into Bank",
            "Cash withdrawn from Bank",
            "Sale of Goods Costing Rs.20,000 Rs.15,000",
            "Depereciation charged on Fixed Assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Interest on Long term borrowing is an expense relating to _____________",
        "options": [
            "Investing Activity",
            "Operating Activity",
            "Financing Activity",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company received dividend of Rs.1,00,000 on its investment in other company's share. In case of a Finance company it will be classified as ____________",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Advance received from customers is classified as ______________________.",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "m. Acquired the assets of a company through issue of equity shares is classified as __________________.",
        "options": [
            "Cash Flows from Investing Activity",
            "Cash Flows from Operating Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A Ltd. paid an advance tax amounting to Rs.3,65,000 out of which Rs.15,000 is relating to a short-term capital gain on sale of securities. How will A Ltd. report the payment of advance tax in its Cash Flow Statement?",
        "options": [
            "Cash Flows from Operating Activity",
            "Cash Flows from Investing Activity",
            "Cash Flows from Financing Activity",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cash flows from operating activities (Rs.550) Lakhs Cash flows from investment activities (Rs.1,250) Lakhs Cash flows from financing activities Rs.1,750 Lakhs Determine the changeds in cash and cash equivalents is _______________.",
        "options": [
            "Decrease in Cash and Cash Equivalent by Rs.50 Lakhs",
            "Increase in Cash and Cash Equivalent by Rs.50 Lakhs",
            "No change in Cash and Cash Equivalent",
            "It is a non Cash item"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The method for presenting Net cash provided by operating activities that starts with net income and adjusts it for items that affected reported net income but that did not affect cash is called as ____________.",
        "options": [
            "Direct method",
            "Working capital method",
            "Indirect method",
            "Cost-benefit method"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "B. X Ltd. purchased machinery of Rs.10,00,000 issuing a cheque of Rs.2,50,000 and 10% Debentures of Rs.7,50,000. In the cash flow statement, the transaction will be shown as .",
        "options": [
            "Outflow under investing activity Rs.10,00,000, inflow under financing activity as receipt for debentures Rs.7,50,000",
            "Outflow under investing activity Rs.2,50,000",
            "Inflow of Rs.7,50,000 as financing activity.",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "From the following information presented by P Ltd. ascertain the Net Realisable Vlue of stock : Cost Price of certain stock amounted to Rs.60,000; being obsolete, it can be used for production purposes after incurring Rs.10,000 for modification. The same could be used as a raw material for an existing product, the purchase price for the same amounts to Rs.40,000.",
        "options": [
            "Rs.60,000",
            "Rs.40,000",
            "Rs.30,000",
            "Rs.10,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Objectives of Bank\u2019s Book keeping system is/are________________.",
        "options": [
            "to keep up-to-date detailed ledgers",
            "to balance the trial balance every day",
            "to keep all control accounts in agreement with the detailed ledgers",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are not Subsidiary Register of a banking company?",
        "options": [
            "Demand Drafts, Telegraphic Transfers and Mail Transfers issued on Branches and Agencies",
            "Demand Drafts, Telegraphic Transfers and Mail Transfers received from Branches and Agencies",
            "Letters of Indemnity",
            "Letters of Credit"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Some of the common purposes are of a Bank's Statistical Books is/are ______________.",
        "options": [
            "To record Average Balance in Loan and Advances etc.",
            "To record Deposits received and amount paid out ea ch month in the various departments",
            "To record Average Balance of Assets",
            "Both 1 and 2"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "__________________________ = Amount of Bill \u00d7 Rate of Discount \u00d7 Unexpired period (in months)/12",
        "options": [
            "Rebate on Bills Discounted",
            "Discount on Bills",
            "Interest",
            "Loan Amount"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The status of securities and the value of such securities must be mentioned by every bank in Schedule ___________.",
        "options": [
            "2",
            "4",
            "7",
            "9"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The Electricity Act, 2003 replaced which of the following erstwhile existing legislations?",
        "options": [
            "The Indian Electricity Act, 1910",
            "The Electricity (Supply) Act, 1948",
            "The Electricity Regulatory Commissions Act, 1998",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are main feature of Electricity Act, 2003?",
        "options": [
            "The activities like generation, transmission and distribution of power have been separately identified.",
            "Power generation has partially been de-licensed",
            "20% of the power supplied by suppliers and distributors to the consumers has to be generated using renewable and non-conventional sources of energy",
            "Metering of all electricity supplied has been made optional"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The Central Commission shall consist of which of the following Members?",
        "options": [
            "A chairperson and 3 Members",
            "The Chairperson of the Authority who shall be the Member, ex-officio.",
            "Both 1 and 2",
            "None of them"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Rate of provisioning for advances doubtful for more than 1 year but less than 3 years is _____________.",
        "options": [
            "25%",
            "40%",
            "60%",
            "100%"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is a principle of insurance?",
        "options": [
            "Principle of indemnity",
            "Insurable interest.",
            "Principle of uberrimae fidei.",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Rate of provision on advances doubtful for more than 3 years is___________.",
        "options": [
            "40%",
            "25%",
            "100%",
            "Nil"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a mandatory financial statement of a General Insurance Company as per IRDA regulations?",
        "options": [
            "Revenue Account",
            "Profit and Loss Account",
            "Balance Sheet",
            "Cash Flow Statement"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "For Marine Insurance : Premia collected from -(a) Insured (other than insurance companies) in respect of policies issued is Rs.45 Cr. (b) Other insurance companies in respect of risks undertaken is Rs. 17.5 Cr. (c) Premia paid/payable to other insurance companies on business ceded is Rs.16.75 Cr. Compute the closing balance in Unexpired Risks Reserve Account.",
        "options": [
            "Rs.45 Cr.",
            "Rs.45.75 Cr.",
            "Rs.12.50 Cr.",
            "Rs.8.25 Cr."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_____________ is a reserve which should be created by the insurers towards losses which might arise due to entirely unexpected set of events and not for any specific known purpose.",
        "options": [
            "General Reserve",
            "Catastrophe Reserve",
            "Revenue Reserve",
            "Surplus"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Date of bill 15.01.2023 Period 5 months Rate of discount 8% Calculate rebate on bill discounted, if accounting year ends on 31.03.23.",
        "options": [
            "Rs.852.46",
            "Rs.818.85",
            "Rs.873.22",
            "Rs.825.45"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Information provided by General Purpose Financial Reporting are as follows",
        "options": [
            "Economic resources i.e., assets",
            "Claims against the entity i.e., liabilities",
            "Changes in economic resources and claims",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following does not encompas Enhancing Qualitative Characteristics",
        "options": [
            "Comparability",
            "Verifiability",
            "Uniformity",
            "Understandability"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "________________ measures provide monetary information about assets, liabilities and related income and expenses, using information updated to reflect conditions at the measurement date.",
        "options": [
            "Historical Cost",
            "Current Value",
            "Notional Value",
            "Net Realisable Value"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A complete set of financial statements comprises which of the following?",
        "options": [
            "a balance sheet as at the end of the period",
            "Statement of changes in equity for the period",
            "Both 1 and 2",
            "a statement of fund flows for the period"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "From the following information presented by P Ltd. ascertain the Net Realisable Vlue of stock : Cost Price of certain stock amounted to Rs.60,000; being obsolete, it can be used for production purposes after incurring Rs.10,000 for modification. The same could be used as a raw material for an existing product, the purchase price for the same amounts to Rs.40,000.",
        "options": [
            "Rs.60,000",
            "Rs.40,000",
            "Rs.30,000",
            "Rs.10,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Z Co. Ltd. purchased goods at the cost of Rs.40 lakhs in October 2021. Till March 2022, 75% of the stocks were sold. The company wants to disclose closing stock at Rs.10 lakhs. The expected sales value is Rs.11 lakhs and a commission at 10% on sale is payable to the agent. What is the correct closing stock value to be disclosed as at 31.3.2022?",
        "options": [
            "Rs.11,00,000",
            "Rs.9,90,000",
            "Rs.10,00,000",
            "Rs.40,00,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Mr. X is an employee of ABC Ltd. His annual salary is Rs.15 lakh. The company follows a 300 working days policy. As per the policy of the company, Mr. X is entitled to a leave of 10 days for 2022-23. He, however, utilises 8 days leave. The unutilised leaves are not allowed to be carried forward but are settled by way of payment to the employee. Compute the amount to be paid for unutilised leaves.",
        "options": [
            "Rs.5,000",
            "Rs.10,000",
            "Rs.15,00,000",
            "Rs.1,50,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "01.04.2022 B Ltd. has 3600 ordinary shares outstanding. On 31.08.2023 it issued 1200 ordinary shares for cash. On 31.01.23 it bought back 600 ordinary shares. Calculate weighted average number of shares as on 31.03.23.",
        "options": [
            "4200 shares",
            "4800 shares",
            "3600 shares",
            "1200 shares"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "C Ltd. had 10,00,000 ordinary shares outstanding as on 01.04.2022. On 01.01.2023 it issued 2 ordinary shores bonus for each shore outstanding on 31.12.2022, Profit for the year 2021-22 was Rs.9,00,000. Profit for 2022-23 was Rs.30,00,000. Calculate the adjusted EPS for the year 2021-22.",
        "options": [
            "Rs.1.00",
            "Rs.0.30",
            "Rs.3.00",
            "Rs.3.33"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An entity has an obligation to restore an asset for the damage it has in the past. It has Rs.20 lakh cash to pay on 31.03.2022 relating to this liability. The entity considers that 15% is an appropriate discount rate. the time value of money is considered material. Calculate the amount to be provided.",
        "options": [
            "Rs. 15.12 lakh",
            "Rs.20 lakh",
            "Rs.3.00 lakh",
            "Nonre of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Ind AS 1 \u201cPresentation of financial statements\u201d applies to _____________",
        "options": [
            "Consolidated financial statements in accordance with Ind AS 110, Consolidated Financial Statements,",
            "Separate financial statements in accordance with Ind AS 27, Separate Financial Statements.",
            "Both of the above",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a part of other long-term benefits?",
        "options": [
            "Long-term disability benefits",
            "Retirement benefits",
            "Profit-sharing and bonuses",
            "Deferred remuneration"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Ind AS 2, Inventories, does not apply to____________.",
        "options": [
            "Financial Instruments",
            "Biological Assets",
            "Both 1 and 2",
            "1 but not 2"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is a defined contribution plan?",
        "options": [
            "Multi-employer plan",
            "State plan",
            "Insured benefits",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Ordinary shares are 1,00,000 of Rs.1.00;10% Preference shares are 200000 of Rs.1.00; PAT Rs.10,00,000. Calculate basic EPS.",
        "options": [
            "Rs.9.80",
            "Rs.9.60",
            "Rs.9.40",
            "Rs.9.20"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The expected sales value of stock is Rs.20 lakhs and a commission at 10% on sale is payable to the agent. Calculate NRV.",
        "options": [
            "Rs.12 lakh",
            "Rs.14 lakh",
            "Rs.16 lakh",
            "Rs.18 lakh"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The method for presenting Net cash provided by operating activities that starts with net income and adjusts it for items that affected reported net income but that did not affect cash is called as .",
        "options": [
            "Direct method",
            "Working capital method",
            "Indirect method",
            "Cost-benefit method"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Given salary expenses Rs.40,000, Outstanding in the beginning of the year Rs.5,000 and outstanding at the end of the year RS.10,000. Cash outflow on salary will be.",
        "options": [
            "Rs.55,000",
            "Rs.45,000",
            "Rs.35,000",
            "Rs.15,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is outside the scope of Ind AS 1?",
        "options": [
            "Financial Review by Management",
            "Environmental Reports",
            "Value Added Statements",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is included in cost of inventory as per Ind AS 2?",
        "options": [
            "Duties and taxes subsequesntly recoverable from taxing authorities",
            "Freight inward",
            "Rebates",
            "Duty drawbacks"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Y Ltd. supplied the following information: Net Profit for 2021-22 = Rs.10,00,000 Net Profit for 2022-23 = Rs.15,00,000 No. of shares prior to right issue = 5,00,000 Terms of right issue: 1 new share for every 4 shares held; right issue price = Rs.20 Fair value of 1 ordinary share immediately prior to exercise of right = Rs.25. Compute the Right Factor",
        "options": [
            "2.5",
            "1.92",
            "1.04",
            "2.00"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "________________________is the price that would be received to sell an asset, or paid to transfer a liability, in an orderly transaction between market participants at the measurement date.",
        "options": [
            "Fair Value",
            "Value in use",
            "Current Cost",
            "Net Realisable Value"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is included in cost of inventory as per IND AS 2?",
        "options": [
            "Duties and Taxes subsequently recoverable from taxing authorities",
            "Freight inwards",
            "Rebates",
            "Duty drawbacks"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Events occurring after the Reporting Period are those events that occure between ---",
        "options": [
            "reporting date and issue date",
            "reporting date and approval date",
            "finalisation date and approval date",
            "finalisation date and issue date"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "How many types of Employee Benefits are there as per Ind AS 19?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not an essential features of auditing?",
        "options": [
            "It involves evaluation & verification of the relevance, reliability and adequacy of evidence in support of verifiable information such as vouchers, documents, explanations.",
            "It is analytical, critical and investigative review of systems of Accounting & Internal Controls.",
            "The information audited are non-financial in nature.",
            "There should be standards or criteria for evaluation of the information in a systematic & scientific manner."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The word \u201cAuditing\u201d has been derived from Latin word \u201caudiere\u201d which means_________________.",
        "options": [
            "To Hear",
            "To verify",
            "To Examine",
            "To Identify"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Management is interested in the Financial Statements for __________________.",
        "options": [
            "For day-to-day decision-making",
            "For Collection of Taxes",
            "For research purpose",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Government is interested in the Financial Statements for____________________.",
        "options": [
            "For day-to-day decision-making",
            "For Collection of Taxes",
            "For research purpose",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Verification of the value of assets, liabilities, and the balance of reserves, provision and the amount of profit earned or loss suffered by an entity is called as ____________.",
        "options": [
            "Continuous audit",
            "Balance sheet audit",
            "Interim audit",
            "Partial audit"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Audit in depth synonymous for _______________",
        "options": [
            "Examination in Depth",
            "Completed audit",
            "Final audit",
            "Internal audit"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Test Checking reduces the __________.",
        "options": [
            "Power of an auditor",
            "Expenses of auditor",
            "Work of an auditor",
            "Liability of an auditor"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A flow chart, made by the auditor, of an entity\u2019s internal control system is a graphic representation that depicts the auditor\u2019s ____________________.",
        "options": [
            "Understanding of the system",
            "Understanding of fraud risk factors",
            "Documentation of assessment of control risk",
            "Both 1 and 3"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Internal auditor is appointed by _________.",
        "options": [
            "The Management",
            "The Shareholders",
            "The Government",
            "The Statutory Body"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The work of one clerk is automatically check by another clerk is called ___________.",
        "options": [
            "Internal control",
            "Internal check",
            "Internal audit",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An internal control includes ____________.",
        "options": [
            "Internal Audit",
            "Internal Check",
            "Both 1 and 2",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The most important objective of internal audit is ____________.",
        "options": [
            "Early detection of errors and fraud",
            "Facilitating final audit",
            "Early finalization of annual account",
            "Ensuring systematic accounting"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Internal check is meant for _______________.",
        "options": [
            "Prevention of frauds",
            "Detection of frauds",
            "Helping audit is depth",
            "Detection of errors"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cut-off testing is performed during audit of sales to address the fofllowing assertion_______________.",
        "options": [
            "Occurrence",
            "Measurement",
            "Cut-off",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are advantage/s of audit?",
        "options": [
            "Audit is a tool, which different stakeholders can use to protect their interests in the enterprise",
            "Audit is not only a corrective measure but has a deterrent effect. It serves as a moral check on the employees from committing defalcations or embezzlements",
            "The employees of the organisation remain alert and vigilant as regards the updating of books of accounts and other records",
            "All of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "________________________involves examination of legalities by blending the techniques of propriety audit, regularity, investigative and financial audits.",
        "options": [
            "Forensic audit",
            "Tax audit",
            "Cost audit",
            "Human Resource Audit"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Audit Documentation is related to",
        "options": [
            "SA 300",
            "SA 230",
            "SA 250",
            "SA 310"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_________________ is a detailed plan of the auditing work to be performed, specifying the procedures to be followed in verification of each item and the financial statements and the estimated time required.",
        "options": [
            "Audit programme",
            "Flow-chart",
            "Audit Documentation",
            "Audit Working Papers"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "_____________refers to the possibility of material misstatement due to complex transactions or even due to organised fraud.",
        "options": [
            "Control Risk",
            "Inherent Risk",
            "Detection Risk",
            "None of these"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Benefits of Audit Sampling are ____________________.",
        "options": [
            "It reduces the workload of the auditor",
            "It saves time and cost",
            "It gives dependable result as it is based on statistical sampling methods",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The main role of _____________ is the following: A. Recommending Auditing Standards, B. Monitoring and Enforcing Compliance with Auditing Standards and C. Power to Investigate",
        "options": [
            "NFRA",
            "NACAS",
            "IFC",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "NFRA consists which of the following?",
        "options": [
            "Accounting Standards Committee",
            "Auditing Standards Committee",
            "Enforcement Committee",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "the term \u2018________________________\u2019 means the policies and procedures adopted by the company for ensuring the orderly and efficient conduct of its business, including adherence to company\u2019s policies, the safeguarding of its assets, the prevention and detection of frauds and errors, the accuracy and completeness of the accounting records, and the timely preparation of reliable financial information.",
        "options": [
            "Enforcement Committee",
            "Internal Financial Controls",
            "National Advisory Committee on Accounting Standards",
            "National Financial Reporting Authority"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a duty of duties of the NFRA?",
        "options": [
            "Recommend accounting and auditing policies and standards to be adopted by companies for approval by the Central Government.",
            "Monitor and enforce compliance with Income Tax Act and auditing standards.",
            "Perform such other functions and duties as may be necessary or incidental to the aforesaid functions and duties.",
            "Oversee the quality of service of the professions associated with ensuring compliance with such standards and suggest measures for improvement in the quality of service."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An auditor expresses _____________ opinion on financial statements when the auditor, having obtained sufficient appropriate audit evidence, concludes that misstatements, either individually or in aggregate, are both material and pervasive to the financial statements.",
        "options": [
            "Qualified",
            "Disclaimer",
            "Adverse",
            "None of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Some situations when an auditor should express a qualified opinion is/are ________________________________.",
        "options": [
            "Non-adherence to AS-2 with regard to inventory valuation at the lower of cost and net realisable value.",
            "Auditor being prevented by the management from observing the counting of physical inventory where such action is material to the financial statements.",
            "Both 1 and 2",
            "Non-receipt of branch audit reports from a significant number of branches."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "An audit report with an unmodified opinion is also known as \u2018____________________\u2019 or \u2018Unqualified Report\u2019",
        "options": [
            "Clean Report",
            "Clear Report",
            "Neet Report",
            "Honest Report"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Basic Elements of Audit Report as per Standards on Auditing are_________________________________________.",
        "options": [
            "Key Audit Matters",
            "Auditor\u2019s Opinion",
            "Basis for Opinion",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "As per Rule 11 of Companies (Audit and Auditors) Rules 2014, the auditor\u2019s report shall also include his views and comments on which of the following matters?",
        "options": [
            "whether the company has disclosed the impact, if any, of pending litigations on its financial position in its financial statement;",
            "whether the company has made provision, as required under any law or accounting standards, for material foreseeable losses, if any, on long term contracts including derivative contracts;",
            "whether there has been any delay in transferring amounts, required to be transferred, to the Investor Education and Protection Fund by the company.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Essential Characteristics of a Good Audit Report are_______________________________.",
        "options": [
            "Simplicity,Clarity,Bre vity,Firmness,Objecti vity,Disclosure,Impart iality,Information-based and Timeliness",
            "Simplicity,Clarity,Br evity,Firmness,Obje ctivity,Disclosure,Im partiality,Informatio n-based and Popularity",
            "Simplicity,Clarity,Bre vity,Firmness,Objecti vity,Disclosure,Impar tiality,Information-based and ambiguity",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Auditor shall verify whether the unpaid dividend has been transferred to the Unpaid Dividend Account within _______ days from the expiry of ___________ days allowed for declaration and payment of dividend.",
        "options": [
            "7,20",
            "7,30",
            "15,20",
            "15,15"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If debentures are redeemable, it can be redeemed in which of the following ways?",
        "options": [
            "By way of payment as donation",
            "By payment whenever the company desires to do so",
            "By way of personal drawing",
            "By way of payment as shares without consideration"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The audit procedure to be applied in this context of Splitting of Shares are _________________",
        "options": [
            "The auditor shall confirm that alteration was authorised by articles",
            "He should verify the minutes of the Board meeting and ordinary resolution passed in the general meeting in which the approval of members is obtained",
            "He should verify that alteration had been effected in copies of Memorandum, Articles, etc.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Audit Report contains ______________.",
        "options": [
            "Details of Facts",
            "Details of Frauds",
            "Expression of Opinion",
            "Expression of Suggestions"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Audit Certificate contains _____________.",
        "options": [
            "Details of Facts",
            "Details of Frauds",
            "Expression of Opinion",
            "Expression of Suggestions"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "An auditor expresses ___________ opinion on financial statements when the auditor, having obtained sufficient appropriate audit evidence, concludes that misstatements, either individually or in aggregate, are both material and pervasive to the financial statements.",
        "options": [
            "Qualified",
            "Adverse",
            "Modified",
            "Disclaimer of"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Any casual vacancy in a govt. company is filled by the CAG of India within days.",
        "options": [
            "15",
            "30",
            "45",
            "60"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A cost auditor submits his report along with reservations and observations in Form No.___________________",
        "options": [
            "CRA 1",
            "CRA 2",
            "CRA 3",
            "CRA 4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Secretarial Audit is covered under section _________________.",
        "options": [
            "204",
            "148",
            "139",
            "133"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "6. An auditor shall submit a unmodified report when ________________________.",
        "options": [
            "The financial statements exhibit true and fair view",
            "The financial statements are partially correct",
            "The financial statements are incomplete",
            "The financial statements are unavailable"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a content of audit report as per CARO?",
        "options": [
            "Inventory",
            "Acceptance of deposit",
            "Recruitment of employees",
            "Repayment of loan"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following are the essential characteristics of a good audit report?",
        "options": [
            "Simplicity",
            "Clarity",
            "Objectivity",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Auditor of a company appointed u/s ____________shall not act as the cost auditor of the company.",
        "options": [
            "139",
            "148",
            "204",
            "141"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "As per Section 139(9), a retiring auditor may be re-appointed at an annual general meeting, if:",
        "options": [
            "he is not disqualified for re-appointment",
            "he has not given the company a notice in writing of his unwillingness to be re-appointed",
            "a special resolution has not been passed at that meeting appointing some other auditor or providing expressly that he shall not be re-appointed",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The first auditor of a company, other than a Government company, shall be appointed by the __________________________ within thirty days from the date of registration of the company.",
        "options": [
            "Shareholders",
            "Board of Directors",
            "Government",
            "Employees"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The company shall inform the auditor concerned of his or its appointment, and also file a notice of such appointment with the Registrar within fifteen days of the meeting in which the auditor is appointed in Form ____________.",
        "options": [
            "ADT 1",
            "ADT 2",
            "ADT 3",
            "ADT 4"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "No individual shall be appointed or reappointed as auditor for more than one term of _______ consecutive years",
        "options": [
            "4",
            "5",
            "6",
            "3"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Section ___________ of Companies Act, 2013 contains the statutory provisions in relation to remuneration of auditors",
        "options": [
            "139",
            "148",
            "142",
            "141"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "_________________refers to the process of conducting the audit of a single organisation by more than one auditor.",
        "options": [
            "Joint audit",
            "Cost audit",
            "Internal audit",
            "Continuous audit"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The amendments that gave the local self-governance in India the constitutional protection are and _____________________.",
        "options": [
            "53 and 54",
            "63 and 64",
            "73 and 74",
            "83 and 84"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "According to the Central Co-operatives Societies Act, of the profits of a co-operative society should be transferred to a Reserve Fund before distribution of dividend or payment of bonus to its members.",
        "options": [
            "20%",
            "25%",
            "30%",
            "35%"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The major objective of audit of Municipalities and Panchayats are _________________________.",
        "options": [
            "To ensure on the fairness and correctness of contents in the Financial Statement",
            "To report on adequacy of Internal control",
            "To ensure value of money is fully received on amount spent.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following records are not maintained by a co-operative societies asaccounting records ?",
        "options": [
            "Cash book",
            "Memorandum of Association",
            "Register of assets and investments",
            "Register of sureties"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "According to the Central Co-operatives Societies Act, ____________% of the profits of a co-operative society should be transferred to a Reserve Fund before distribution of dividend or payment of bonus to its members.",
        "options": [
            "25",
            "20",
            "30",
            "15"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not falling under the broad category of Banks?",
        "options": [
            "Commercial Banks",
            "Regional Rural Banks",
            "Co-operative Banks",
            "None of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The auditor of a nationalised bank is primarily required to comment on which the following aspects in its report to the Central Government?",
        "options": [
            "whether the financial statements present a true and fair view of the affairs of the bank and whether all necessary explanation and information has been made available to him",
            "whether or not the monetory supports received from the offices and branches of the bank have been found adequate for the purpose of his audit",
            "whether or not the transactions of the bank, which have come to his notice, have been within the powers of that bank",
            "Both 1 and 3"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In relation to advances made by bank an auditor needs to review which of the followings?",
        "options": [
            "Scrutinise the subsidiary, ledger, & control accounts",
            "Scrutinise the overdue account and scheme for recovery of such amount.",
            "Ensure the proper documentation of account.",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Hospitality sector covers a wide range of organisations which can broadly be divided into _____categories",
        "options": [
            "4",
            "3",
            "2",
            "1"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Steps common for the category of Restaurants in relation to Hospitality Sector is/are ________________.",
        "options": [
            "Vouch revenue out of commissions from various companies and tour partners.",
            "Verify the total revenue recognised based on the daily and monthly sales report.",
            "Check that the revenue has been realised in cash based on bank statements. Check whether arrears written off, if any, has been duly approved by the person responsible.",
            "Both 2 and 3"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Regarding which category of Hospitality Sector, the followng steps are taken for auditing purposes? a) Vouch the collections from boarders based on their check-in and check-out information recorded in the register, counterfoils of bills and cash book. b) Verify the room rent receipts and daily occupancy reports. Ask for proper clarification for differential rent charged from any boarder. Be careful while verifying the adjustment of unrealised room rent, cancellation charges of booking accommodation at the time of closing of accounts. c) Vouch collections on account of special events such as conferences, wedding ceremony etc. separately based on counterfoil of receipts and cash book.",
        "options": [
            "Amusement Park",
            "Cinema Halls",
            "Hotels and Guest Houses",
            "Travel and Tourism"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Steps of audit common for all organisations are _________________.",
        "options": [
            "Understand the ownership structure of the organisation",
            "Evaluate the internal control system and determine the nature, timing and the extent of the audit procedures",
            "Check that the organisation has a valid licence from an appropriate authority to run the business",
            "All of these"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Forfeiture of shares means:",
        "options": [
            "Issuance of new shares",
            "Buying back of shares",
            "Cancellation of shares due to non-payment of call money",
            "Transfer of shares"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "After forfeiture, the forfeited shares can be:",
        "options": [
            "Re-issued",
            "Destroyed",
            "Converted into debentures",
            "Held in treasury"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Rights shares are generally offered in proportion to:",
        "options": [
            "Debentures held",
            "Number of years associated with the company",
            "Shares already held",
            "Voting rights"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Buy-back of shares reduces:",
        "options": [
            "Authorized share capital",
            "Issued share capital",
            "Subscribed share capital",
            "Paid-up share capital"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A company announces bonus shares in the ratio 2:5. A shareholder holds 1,000 shares. How many bonus shares will he receive?",
        "options": [
            "200",
            "400",
            "250",
            "500"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company buys back 5,000 shares of \u20b910 each at \u20b912. What is the total amount paid for buy-back?",
        "options": [
            "Rs.50,000",
            "Rs.60,000",
            "Rs.55,000",
            "Rs.65,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company issued 8,000 shares and received applications for 10,000 shares. Pro-rata allotment is made. A person applied for 500 shares. How many shares will he get?",
        "options": [
            "500",
            "400",
            "300",
            "350"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company issued 5,000 shares of \u20b910 each at a premium of \u20b92 per share. What is the total amount of securities premium received?",
        "options": [
            "Rs.60,000",
            "Rs.5,000",
            "Rs.10,000",
            "Rs.20,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Employee is granted 1,000 stock options at \u20b960. Market price at time of exercise is \u20b9100. What is the total gain to the employee?",
        "options": [
            "Rs.60,000",
            "Rs.40,000",
            "Rs.1,00,000",
            "Rs.20,000"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Preference shares of \u20b91,00,000 are redeemed at a premium of 5%. What amount should be debited to Securities Premium Account (if available)?",
        "options": [
            "Rs.1,00,000",
            "Rs.1",
            "Rs.5,000",
            "None of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "According to Schedule III of the Companies Act, 2013, which of the following is classified under 'Current Assets'?",
        "options": [
            "Inventories",
            "Fixed Assets",
            "Long-term Investments",
            "Intangible Assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which section of Schedule III deals with the format and disclosure requirements for the Statement of Profit and Loss?",
        "options": [
            "Part I",
            "Part II",
            "Part III",
            "Part IV"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following expenses is shown separately in the Statement of Profit and Loss as per Schedule III?",
        "options": [
            "Depreciation and amortization expense",
            "Cost of goods sold",
            "Dividend paid",
            "Loans and advances"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "According to Schedule III, under which head is 'Capital Reserve' shown?",
        "options": [
            "Current liabilities",
            "Non-current liabilities",
            "Equity",
            "Non-current assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company has the following information: Inventory: \u20b91,50,000 Trade Receivables: \u20b92,00,000 Cash and Cash Equivalents: \u20b950,000 Prepaid Expenses: \u20b910,000 Short-term loans and advances: \u20b940,000 What is the total amount classified as Current Assets in the Balance Sheet?",
        "options": [
            "Rs.4,00,000",
            "Rs.3,50,000",
            "Rs.4,50,000",
            "Rs.4,00,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The company\u2019s Balance Sheet shows the following liabilities: Long-term borrowings: \u20b95,00,000 Trade payables: \u20b91,00,000 Current maturities of long-term debt: \u20b980,000 Provision for taxation: \u20b950,000 What is the total Current Liabilities amount?",
        "options": [
            "Rs.2,50,000",
            "Rs.1,70,000",
            "Rs.2,30,000",
            "Rs.1,50,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Cash flows from which of the following activities include receipts from sale of goods and services?",
        "options": [
            "Operating Activities",
            "Investing Activities",
            "Financing Activities",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is NOT included in cash flows from investing activities?",
        "options": [
            "Purchase of fixed assets",
            "Proceeds from sale of fixed assets",
            "Payment of interest on loans",
            "Purchase of investments"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company has the following information: Net Profit after tax: Rs.7,00,000 Depreciation charged: Rs.1,20,000 Increase in Trade Receivables: Rs.40,000 Decrease in Trade Payables: Rs.30,000 What is the net cash from operating activities (Indirect Method)?",
        "options": [
            "Rs.5,10,000",
            "Rs.8,90,000",
            "Rs.8,20,000",
            "Rs.7,50,000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "If the net cash from operating activities is Rs.9,00,000, net cash used in investing activities is Rs.(4,00,000), and net cash used in financing activities is Rs.(3,00,000), what is the net increase in cash and cash equivalents during the year?",
        "options": [
            "Rs.5,00,000",
            "Rs.(2,00,000)",
            "Rs.2,00,000",
            "Rs.(5,00,000)"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Permanent Audit file contains _________________.",
        "options": [
            "Audit Programme",
            "Analysis of significant ratios and trends",
            "Copies of management letters",
            "Analysis of transaction and balances"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Objective of an Audit is to formulate an overall opinion on",
        "options": [
            "Financial Statement",
            "Books of Accounts",
            "Cost Statement",
            "None of these"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "SA-700 stands for ________.",
        "options": [
            "Joint Auditor",
            "Audit Planning",
            "Forming an opinion and reporting on Financial Statement",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Audit is a fact-finding process that compares actual results with ______",
        "options": [
            "Premature results",
            "Specified standards and plans",
            "Expected results",
            "Preliminary results"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An audit report is the __________ product of audit",
        "options": [
            "Final",
            "Main",
            "Semi final",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Audit Procedures to obtain audit evidences include",
        "options": [
            "Substantive Procedure",
            "Compliance Procedure",
            "Both (A) and (B)",
            "Neither (A) nor (B)"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "An auditor should submit a Disclaimer of Opinion when",
        "options": [
            "he has certain reservations as to the presentation of truth and fairness in financial statements",
            "he is satisfied with the truth and fairness of financial statements",
            "some material information is not available",
            "the effect of any disagreement with the management is not so material"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SA 230 stands for ___________________.",
        "options": [
            "Agreeing the terms of Audit engagements",
            "Quality control for an audit of financial Statements",
            "Responsibility of Joint Auditor",
            "Audit Documentation"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Audit is conducted to draw overall opinion on",
        "options": [
            "Income Statement",
            "Financial Statement",
            "Cost Statement",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The purpose of internal audit is to protect the",
        "options": [
            "Assets",
            "Audit staff",
            "Management",
            "Accountant"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Form for Secretarial Audit Report is-",
        "options": [
            "MR-1",
            "MR-2",
            "MR-3",
            "MR-4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The purpose of Internal audit is to detect the error in the;",
        "options": [
            "Employees records",
            "Accounting records",
            "Cash records",
            "Bank records"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Chartered Accountants have to retain the working papers for-",
        "options": [
            "1 yrs",
            "2 yrs",
            "5 yrs",
            "7 yrs"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "he meetings of Audit committee should be ______________ in a yea",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SA 210 stands for-",
        "options": [
            "Agreeing the terms of Audit engagements.",
            "Quality control for an audit of financial Statements",
            "Responsibility of Joint Auditor",
            "Audit Documentation"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The __________ shall act as the secretary of the Audit Committee.",
        "options": [
            "Auditor",
            "Employee",
            "Company Secretary",
            "Chairman"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Check list contains the instruction to be followed by the \u2013",
        "options": [
            "Audit Assistants",
            "Internal Auditor",
            "Employee of the organization",
            "External Auditor"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The function of internal audit is meant for-",
        "options": [
            "Dearth of time",
            "Dearth of Staff",
            "Dearth of time and funds",
            "Dearth of funds"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "An auditor is required to retain the books of accounts for how long?",
        "options": [
            "3 yrs",
            "1 yrs",
            "7 yrs",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Permanent Audit File does not contain",
        "options": [
            "significant audit observations of earlier years",
            "Permanent Audit File does not contain",
            "analysis of significant ratios and trends",
            "copies of management letters"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A Cost Auditor submits his report to",
        "options": [
            "Government",
            "Shareholders",
            "Board of Directors",
            "Statutory Auditor"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In case of a company other than a Government Company, any casual vacancy in the post of auditor is to be filled by the",
        "options": [
            "Comptroller and Auditor General (CAG)",
            "Board of Directors",
            "Managing Director",
            "Shareholders"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "While conducting audit of financial statement auditor need to comply with",
        "options": [
            "Cost Audit Standards",
            "Auditing Standards",
            "Secretarial standards",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Statutory Auditor can be removed by the",
        "options": [
            "BOD",
            "Audit committee",
            "Shareholders",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Review of internal control system is very important for the auditor as the effectives of internal control system will determine the extent of checking to be done by the:",
        "options": [
            "Auditor",
            "Accountant",
            "Management",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "As per SQC 1, Audit working papers should be retained for a period of",
        "options": [
            "2 years",
            "5 years",
            "7 years",
            "10 years"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Unpaid dividend standing at the credit of Unpaid Dividend A/C should be transferred to Investor Education and Protection Fund after _______ years of its remaining unpaid.",
        "options": [
            "eight",
            "six",
            "seven",
            "five"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Current Audit file contains-",
        "options": [
            "Analysis of significant ratios and trends",
            "AOA and MOA of the company",
            "Audit programme",
            "Notes regarding significant accounting policies"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Form for maintenance of Cost Records by the Company is ____________________.",
        "options": [
            "CRA-1",
            "CRA-2",
            "CRA-3",
            "CRA-4"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Various types of quality audits are:",
        "options": [
            "Management (system)",
            "Registration (certification)",
            "Product",
            "All of above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Statutory Auditor is appointed by the shareholder in the",
        "options": [
            "Statutory Meeting",
            "Board Meetin",
            "General Meeting",
            "EGM"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The _________________ is also expected to provide the resources needed and select staff members to accompany the auditors.",
        "options": [
            "Client",
            "Auditor",
            "Internal audito",
            "Auditee"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Final Audit is known as ______.",
        "options": [
            "Internal Audit",
            "Tax Audit",
            "Annual Audit",
            "All of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Proving the truth means vouching of ___________________.",
        "options": [
            "Expenses",
            "Payment",
            "Liabilities",
            "Assets"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The most comprehensive type of audit is the ____ system audit, which examines suitability and effectiveness of the system as a whole.",
        "options": [
            "Quality",
            "Quantity",
            "Preliminary",
            "Sequential"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The purpose of internal audit is to determine liabilities of;",
        "options": [
            "Employees",
            "Employer",
            "Accountant",
            "External auditor"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "CAAT stands for-",
        "options": [
            "Cornwall Air Ambulance Trust",
            "Center for alternatives to Animal Testing",
            "Children Air Ambulance Trust",
            "Computer Assisted Auditing Technique"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Maximum term of Individual Auditor",
        "options": [
            "1 term of 5 years",
            "2 term of 5 years",
            "3 term of 5 years",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If the Debentures are issued as collateral security either to Banks or Creditors the Auditor needs to ensure that such issue is approved by",
        "options": [
            "Debenture Trustee",
            "Shareholders",
            "Audit Committee",
            "Board of Directors"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The first Auditor of a Company shall be appointed by the Board of Directors within",
        "options": [
            "30 days from the date of first AGM",
            "30 days from the date of registration",
            "90 days from the date of registration",
            "1 year from the date of registration"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Cost Audit can be done by the-",
        "options": [
            "Secretarial Auditor",
            "Employee of the organization",
            "Cost Auditor",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "When the auditor is an employee of the organization being audited (auditee), the audit is classified as a ____ Quality audit",
        "options": [
            "External",
            "Internal",
            "Compliance",
            "Both A & B"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Secretarial Audit can be done by-",
        "options": [
            "Cost Auditor",
            "Employee of the organization",
            "Secretarial Auditor",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Secretarial Audit is applicable to the public sector company having the turnover of-",
        "options": [
            "50 crore",
            "200 crore",
            "250 crore",
            "500 crore"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "An Audit Committee should have a minimum of ____________ number of directors.",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "SA 530 stands for",
        "options": [
            "Audit Sampling",
            "Audit Documentation",
            "Agreeing the terms of Audit Engagements",
            "Responsibility of Joint Auditor"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A nomination and remuneration committee should have _____ directors.",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not an audit risk?",
        "options": [
            "Control Risk",
            "Omission Risk",
            "Detection Risk",
            "Inherent Risk"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following services cannot be rendered by an auditor as per Companies Act 2013?",
        "options": [
            "Verification of assets and liabilities",
            "Vouching",
            "Providing investment advisory services",
            "Issuing certificates on relevant matters"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SA 300 stands for __________.",
        "options": [
            "Audit Planning",
            "Responsibility of Joint Auditor",
            "Overall planning of audit",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Ind AS 16 deals with:",
        "options": [
            "Leases",
            "Revenue from Contracts with Customers",
            "Property, Plant, and Equipment",
            "Financial Instruments"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Ind AS 38 deals with:",
        "options": [
            "Revenue recognition",
            "Intangible assets",
            "Tangible assets",
            "Borrowing costs"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Ind AS 33 relates to:",
        "options": [
            "Earnings Per Share",
            "Segment Reporting",
            "Income Taxes",
            "Inventories"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Ind AS 21 deals with:",
        "options": [
            "The Effects of Changes in Foreign Exchange Rates",
            "Segment Reporting",
            "Income Taxes",
            "Earnings Per Share"
        ],
        "answer": 0,
        "explanation": ""
    }
]
          },
          {
            label: "FM & BDA",
            questions:
            [
    {
        "question": "Time value of money explains that:",
        "options": [
            "a unit of money received today is worth more than a unit received in future",
            "a unit of money received today is worth less than a unit received in future",
            "a unit of money received today and at some other time in future is equal",
            "none of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Time value of money facilitates comparison of cash flows occurring at different time periods by:",
        "options": [
            "compounding all cash flows to a common point of time",
            "discounting all cash flows to a common point of time",
            "using either (1) or (2)",
            "neither (1) nor (2)."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If the nominal rate of interest is 10 per cent per annum and frequency of compounding is 4 i.e. quarterly compounding, the effective rate of interest will be:",
        "options": [
            "10.25% per annum",
            "10.38% per annum",
            "10% per annum",
            "none of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Relationship between annual effective rate of interest and annual nominal rate of interest is, if frequency of compounding is more than 1:",
        "options": [
            "Effective Rate < Nominal rate",
            "Effective Rate > Nominal rate",
            "Effective Rate = Nominal rate",
            "none of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If annual effective rate of interest is 10.25% per annum and nominal rate of return is 10% per annum what is the frequency of compounding?",
        "options": [
            "1",
            "3",
            "2",
            "4"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A student takes a loan of Rs. 50,000 from SBI. The rate of interest being charged by SBI is 10% per annum. What would be the amount of equal annual instalment if he wishes to pay it back in five instalments and first instalment, he will pay at the end of year 5?",
        "options": [
            "Rs. 11,000",
            "Rs. 19,310",
            "Rs. 15,000",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "How much amount should an investor invest now in order to receive five annuities starting from the end of this year of Rs. 10,000 if the rate of interest offered by bank is 10% per annum?",
        "options": [
            "Rs. 40,000",
            "Rs. 45,000",
            "Rs. 37,910",
            "none of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A bank offers 12% compound interests payable quarterly. If you deposit Rs.2,000 now, how much it will grow at the end of 5 years?",
        "options": [
            "Rs.3,050",
            "Rs.3,430",
            "Rs.3,612",
            "Rs.3,722"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company wants to repay a loan of Rs. 5,00,000, 10 years from today. What amount should it invest each year for 10 years if the funds can earn 8% per annum? The first investment will be made at the beginning of this year.",
        "options": [
            "Rs. 50,000",
            "Rs. 31,950",
            "Rs. 40,000",
            "Rs. 32,950"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Risk of two securities having different expected return can be compared with:",
        "options": [
            "standard deviation of securities",
            "variance of securities",
            "coefficient of variation",
            "mean"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A portfolio consists of two securities and the expected return on two securities is 12% and 16% respectively. Calculate return of portfolio if first security accounts for 40% of portfolio.",
        "options": [
            "0.14",
            "0.144",
            "0.16",
            "0.12"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If the rate of interest is 12%, what are the doubling periods as per the rule 72 and the rule of 69 respectively?",
        "options": [
            "5 Years and 5.2 Years",
            "5.8 Years and 5.3 Years",
            "6 Years and 6.1 Years",
            "6.5 Years and 6.6 Years"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "To create a minimum variance portfolio, in what proportion should the two securities be mixed if the following information is given S1 = 10%, S2 = 12%, P12 = 0.6?",
        "options": [
            "0.72 and 0.28",
            "0.70 and 0.30",
            "0.60 and 0.40",
            "0.50 and 0.40"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A portfolio consisting of two risky securities can be made risk less i.e., Sp = 0, if:",
        "options": [
            "the securities are perfectly positively correlated",
            "the securities are perfectly negatively correlated",
            "if the correlation ranges between 0 to 1",
            "if the correlation ranges between -1 to +1"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Efficient portfolios are those portfolios, which offer (for a given level of risk)",
        "options": [
            "maximum return",
            "minimum return",
            "average return",
            "positive return"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "CAPM accounts for -",
        "options": [
            "systematic risk",
            "unsystematic risk",
            "both of the above",
            "moderate risk"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Assets Management company is formed:",
        "options": [
            "To manage bank\u2019s assets",
            "To manage mutual funds investments",
            "To construct infrastructure projects",
            "To run a stock exchange"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Prime duty of a merchant banker is -",
        "options": [
            "Maintaining records of clients",
            "Giving loans to clients",
            "Working as a Capital Market Intermediary",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Basic objective of a money market mutual fund is:",
        "options": [
            "Guaranteed rate of return",
            "Investment in short-term securities",
            "Both (1) and (2)",
            "None of (1) and (2)"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Short selling refers to:",
        "options": [
            "Buying shares and then selling them on the same day",
            "Selling shares without owning them",
            "Selling some shares out of a large holding",
            "Continuously selling shares in lots."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not regulated by SEBI?",
        "options": [
            "Foreign Institutional Investors",
            "Foreign Direct Investment",
            "Mutual Funds",
            "Depositories"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is true for mutual funds in India?",
        "options": [
            "Exit load is not allowed",
            "Entry load is allowed",
            "Entry load is not allowed",
            "Exit load allowed is some cases"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not available in India?",
        "options": [
            "Index Options",
            "Index Futures,",
            "Commodity Options",
            "Commodity Futures"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is the benefit of Depositories?",
        "options": [
            "Reduction in the share transfer time to the buyer",
            "Reduced Risk of stolen, fake, forged shares",
            "No Stamp duty on transfer of shares in dematerialized form",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Credit Rating of a debt security is:",
        "options": [
            "Guarantee of Repayment",
            "Merely opinion",
            "Positive suggestion",
            "Negative suggestion"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The first computerised online stock exchange in India was:",
        "options": [
            "NSE",
            "OTCEI",
            "BSE",
            "MCX"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following derivative is not traded on Indian Stock Market?",
        "options": [
            "Index Options",
            "Stock Futures",
            "Index Futures",
            "Forward Rate Agreements"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "How many depositories are there in India?",
        "options": [
            "2",
            "3",
            "0",
            "1"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Secondary Market in India is regulated by:",
        "options": [
            "Reserve Bank of India",
            "Securities and Exchange Board of India",
            "Ministry of Finance",
            "Forward Market Commission"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_________ funds do not have a fixed date of redemption.",
        "options": [
            "Open ended funds",
            "Close ended funds",
            "Diversified funds",
            "Both A and B."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In India, NIFTY and SENSEX are calculated on the basis of:",
        "options": [
            "Market Capitalization",
            "Paid up Capital",
            "Free-float Capitalization",
            "Authorized Share Capital"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The type of collateral (security) used for short-term loan is:",
        "options": [
            "Real estate",
            "Plant & Machinery",
            "Stock of good",
            "Equity share capital"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is a liability of a bank?",
        "options": [
            "Treasury Bills",
            "Commercial papers",
            "Certificate of Deposits",
            "Junk Bonds."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Commercial paper is a type of:",
        "options": [
            "Fixed coupon Bond",
            "Unsecured short-term debt",
            "Equity share capital",
            "Government Bond"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a spontaneous source of short-term funds?",
        "options": [
            "Trade credit",
            "Accrued expenses",
            "Provision for dividend",
            "All of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In India, Commercial Papers are issued as per the lines issued by -",
        "options": [
            "Securities and Exchange Board of India",
            "Reserve Bank of India",
            "Forward Market Commission",
            "RBI"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Commercial paper are generally issued at a pries:",
        "options": [
            "Equal to face value",
            "More than face value",
            "Less than face value",
            "Equal to redemption value"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not applicable to commercial paper?",
        "options": [
            "Face Value",
            "Issue Price",
            "Coupon Rate",
            "None of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Accounting Ratios are important tools used by \u2013",
        "options": [
            "Managers",
            "Researchers",
            "Investors",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Net Profit Ratio Signifies:",
        "options": [
            "Operational Profitability",
            "Liquidity Position",
            "Big-term Solvency",
            "Profit for Lenders"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Working Capital Turnover measures, the relationship of Working Capital with:",
        "options": [
            "Fixed Assets",
            "Sales",
            "Purchases",
            "Stock"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Dividend Pay-out Ratio is:",
        "options": [
            "PAT Capital",
            "DPS \u00f7 EPS",
            "Pref. Dividend \u00f7 PAT",
            "Pref. Dividend \u00f7 Equity Dividend"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "DuPont Analysis deals with:",
        "options": [
            "Analysis of Current Assets",
            "Analysis of Profit",
            "Capital Budgeting",
            "Analysis of Fixed Assets"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In Net Profit Ratio, the denominator is:",
        "options": [
            "Net Purchases",
            "Net Sales",
            "Credit Sales",
            "Cost of goods sold"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Inventory Turnover measures the relationship of inventory with:",
        "options": [
            "Average Sales",
            "Cost of Goods Sold",
            "Total Purchases",
            "Total Assets"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The term \u2018EVA\u2019 is used for:",
        "options": [
            "Extra Value Analysis",
            "Economic Value Added",
            "Expected Value Analysis",
            "Engineering Value Analysis."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Return on Investment may be improved by:",
        "options": [
            "Increasing Turnover",
            "Reducing Expenses",
            "Increasing Capital Utilization",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In Current Ratio, Current Assets are compared with:",
        "options": [
            "Current Profit",
            "Current Liabilities",
            "Fixed Assets",
            "Equity Share Capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "ABC Ltd. has a Current Ratio of 1.5: 1 and Net Current Assets of Rs. 5,00,000. What are the Current Assets?",
        "options": [
            "Rs. 5,00,000",
            "Rs. 10,00,000",
            "Rs. 15,00,000",
            "Rs. 25,00,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "There is deterioration in the management of working capital of XYZ Ltd. What does it refer to?",
        "options": [
            "That the Capital Employed has reduced",
            "That the Profitability has gone up",
            "That debtors collection period has increased",
            "That Sales has decreased"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following does not help to increase Current Ratio?",
        "options": [
            "Issue of Debentures to buy Stock",
            "Issue of Debentures to pay Creditors",
            "Sale of Investment to pay Creditors",
            "Avail Bank Overdraft to buy Machine"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Debt to Total Assets Ratio can be improved by:",
        "options": [
            "Borrowing More",
            "Issue of Debentures",
            "Issue of Equity Shares",
            "Redemption of Debt"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Ratio of Net Income to Number of Equity Shares known as:",
        "options": [
            "Price Earnings Ratio",
            "Net Profit Ratio",
            "Earnings per Share",
            "Dividend per Share"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Trend Analysis helps comparing performance of a firm -",
        "options": [
            "With other firms",
            "Over a period of firm",
            "With other industries",
            "With other companies"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A Current Ratio of less than one means:",
        "options": [
            "Current Liabilities < Current Assets",
            "Fixed Assets > Current Assets",
            "Current Assets < Current Liabilities",
            "Share Capital > Current Assets"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A firm has Capital of Rs. 10,00,000; Sales of Rs. 5,00,000; Gross Profit of Rs. 2,00,000 and Expenses of Rs. 1,00,000. What is the Net Profit Ratio?",
        "options": [
            "0.2",
            "0.5",
            "0.1",
            "0.4"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "XYZ Ltd. has earned 8% Return on Total Assests of Rs. 50,00,000 and has a Net Profit Ratio of 5%. Find out the Sales of the firm.",
        "options": [
            "Rs. 4,00,000",
            "Rs. 2,50,000",
            "Rs. 80,00,000",
            "Rs. 83,33,333"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Suppliers and Creditors of a firm are interested in:",
        "options": [
            "Profitability Position",
            "Liquidity Position",
            "Market Share Position",
            "Debt Position"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is a measure of Debt Service capacity of a firm?",
        "options": [
            "Current Ratio",
            "Acid Test Ratio",
            "Interest Coverage Ratio",
            "Debtors Turnover"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Gross Profit Ratio for a firm remains same but the Net Profit Ratio is decreasing. The reason for such behavior could be:",
        "options": [
            "Increase in Costs of Goods Sold",
            "If Increase in Expense",
            "Increase in Dividend",
            "Decrease in Sales"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following statements is correct?",
        "options": [
            "A Higher Receivable Turnover is not desirable",
            "Interest Coverage Ratio depends upon Tax Rate",
            "Increase in Net Profit Ratio means increase in Sales",
            "Lower Debt-Equity Ratio means lower Financial Risk"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Debt to Total Assets of a firm is 2. The Debt to Equity would be:",
        "options": [
            "0.8",
            "0.25",
            "1",
            "0.75"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following helps analysing return to equity Shareholders?",
        "options": [
            "Return on Assets",
            "Earnings Per Share",
            "Net Profit Ratio",
            "Return on Investment"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Return on Assets and Return on Investment Ratios belong to:",
        "options": [
            "Liquidity Ratios",
            "Profitability Ratios",
            "Solvency Ratios",
            "Turnover"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "XYZ Ltd. has a Debt Equity Ratio of 1.5 as compared to 1.3 Industry average. It means that the firm has:",
        "options": [
            "Higher Liquidity",
            "Higher Financial Risk",
            "Higher Profitability",
            "Higher Capital Employed"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Ratio Analysis can be used to study liquidity, turnover, profitability, etc. of a firm. What does Debt-Equity Ratio help to study?",
        "options": [
            "Solvency",
            "Liquidity",
            "Profitability",
            "Turnover"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In Inventory Turnover calculation, what is taken in the numerator?",
        "options": [
            "Sales",
            "Cost of Goods Sold",
            "Opening Stock",
            "Closing Stock"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Statement of cash flows are included in:",
        "options": [
            "Ind AS - 3",
            "Ind AS - 6",
            "Ind AS - 7",
            "Ind AS - 113"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Cost of capital refers to:",
        "options": [
            "Flotation Cost",
            "Dividend",
            "Required Rate of Return",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following sources of funds has an implicit cost of capital?",
        "options": [
            "Equity Share Capital",
            "Preference Share Capital",
            "Debentures",
            "Retained earnings"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following has the highest cost of capital?",
        "options": [
            "Equity shares",
            "Loans",
            "Bonds",
            "Preference shares"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cost of capital for Government securities is also known as:",
        "options": [
            "Risk-free Rate of Interest",
            "Maximum Rate of Return",
            "Rate of Interest on Fixed Deposits",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Cost of capital for bonds and debentures is calculated on:",
        "options": [
            "Before Tax basis",
            "After Tax basis",
            "Risk-free Rate of Interest basis",
            "Compound interest"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Weighted Average Cost of Capital (WACC) is generally denoted by:",
        "options": [
            "k_{a}",
            "k_{w}",
            "k_{0}",
            "k_{c}"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following cost of capital require tax adjustment?",
        "options": [
            "Cost of Equity Shares",
            "Cost of Preference Shares",
            "Cost of Debentures",
            "Cost of Retained Earnings"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which is the most expensive source of funds?",
        "options": [
            "New Equity Shares",
            "New Preference Shares",
            "New Debts",
            "Retained Earnings"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Marginal cost of capital is the cost of:",
        "options": [
            "Additional Sales",
            "Additional Funds",
            "Additional Interests",
            "Additional Revenue"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In case the firm is all-equity financed, the WACC would be equal to:",
        "options": [
            "Cost of Debt",
            "Cost of Equity",
            "Neither (1) nor (2)",
            "Both (1) and (2)"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In order to calculate Weighted Average Cost of capitals (WACC) weights may be based on:",
        "options": [
            "Market Values",
            "Target Values",
            "Book Values",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Firm\u2019s cost of capital is the average cost of:",
        "options": [
            "All sources",
            "All borrowings",
            "Share capital",
            "Share, Bonds and Debentures"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "An implicit cost of increasing proportion of debt is:",
        "options": [
            "Tax should would not be available on new debt",
            "P/E Ratio would increase",
            "Equity shareholders would demand higher return",
            "Rate of Return of the company would decrease."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Cost of redeemable preference share capital is:",
        "options": [
            "Rate of Dividend",
            "After Tax Rate of Dividend",
            "Discount Rate that equates PV of inflows and out-flows relating to capital",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is true?",
        "options": [
            "Retained earnings are cost free",
            "External Equity is cheaper than Internal Equity",
            "Retained Earnings are cheaper than External Equity",
            "Retained Earnings are costlier than External Equity"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting is a part of:",
        "options": [
            "Investment Decision",
            "Working Capital Management",
            "Marketing Management",
            "Capital Structure"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting deals with:",
        "options": [
            "Long-term Decisions",
            "Short-term Decisions",
            "Both (1) and (2)",
            "Neither (1) nor (2)"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not used in Capital Budgeting?",
        "options": [
            "Time Value of Money",
            "Sensitivity Analysis",
            "Net Assets Method",
            "Cash Flows"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting Decisions are:",
        "options": [
            "Reversible",
            "Irreversible",
            "Unimportant",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not incorporated in Capital Budgeting?",
        "options": [
            "Tax-Effect",
            "Time Value of Money",
            "Required Rate of Return",
            "Rate of Cash Discount"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a capital budgeting decision?",
        "options": [
            "Expansion Programme",
            "Merger",
            "Replacement of an Asset",
            "Inventory Level"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A sound Capital Budgeting technique is based on:",
        "options": [
            "Cash Flows",
            "Accounting Profit",
            "Interest Rate on Borrowings",
            "Last Dividend Paid"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a relevant cost in Capital Budgeting?",
        "options": [
            "Sunk Cost",
            "Opportunity Cost",
            "Allocated Overheads",
            "Both (1) and (3) above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Capital Budgeting Decisions are based on:",
        "options": [
            "Incremental Profit",
            "Incremental Cash Flows",
            "Incremental Assets",
            "Incremental Capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following does not effect cash flows proposal?",
        "options": [
            "Salvage Value",
            "Depreciation Amount",
            "Tax Rate Change",
            "Method of Project Financing"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Cash Inflows from a project include:",
        "options": [
            "Tax Shield of Depreciation",
            "After-tax Operating Profits",
            "Raising of Funds",
            "Both (1) and (2)"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not true with reference capital budgeting?",
        "options": [
            "Capital budgeting is related to asset replacement decisions",
            "Cost of capital is equal to minimum required return",
            "Existing investment in a project is not treated as sunk cost",
            "Timing of cash flows is relevant"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not followed in capital budgeting?",
        "options": [
            "Cash flows Principle",
            "Interest Exclusion Principle",
            "Accrual Principle",
            "Post-tax Principle"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Depreciation is incorporated in cash flows because it:",
        "options": [
            "Is unavoidable cost",
            "Is a cash flow",
            "Reduces Tax liability",
            "Involves an outflow"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not true for capital budgeting?",
        "options": [
            "Sunk costs are ignored",
            "Opportunity costs are excluded",
            "Incremental cash flows are considered",
            "Relevant cash flows are considered"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is not applied in capital budgeting?",
        "options": [
            "Cash flows be calculated in incremental terms",
            "All costs and benefits are measured on cash basis",
            "All accrued costs and revenues be incorporated",
            "All benefits are measured on after-tax basis"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Evaluation of Capital Budgeting proposals is based on Cash Flows because:",
        "options": [
            "Cash Flows are easy to calculate",
            "Cash Flows are suggested by SEBI",
            "Cash is more important than profit",
            "Cash Flows are suggested by RBI"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not included in incremental A flows?",
        "options": [
            "Opportunity Costs",
            "Sunk Costs",
            "Change in Working Capital",
            "Inflation effect"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A proposal is not a Capital Budgeting proposal if it:",
        "options": [
            "is related to Fixed Assets",
            "brings long-term benefits",
            "brings short-term benefits only",
            "has very large investment"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In Capital Budgeting, Sunk cost is excluded because it is:",
        "options": [
            "of small amount",
            "not incremental",
            "not reversible",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Savings in respect of a cost is treated in capital budgeting as:",
        "options": [
            "An Inflow",
            "An Outflow",
            "Opening balance",
            "Closing balance"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "____________ ignores the time value of money.",
        "options": [
            "Internal Rate of Return (IRR)",
            "Average Rate of Return (ARR)",
            "Net Present Value (NPV)",
            "Profitability Index (PI)"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The discounted cash flows techniques are:",
        "options": [
            "Net Present Value (NPV)",
            "Internal Rate of Return (IRR)",
            "Profitability Index (PI)",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Working capital is calculated as _____.",
        "options": [
            "Core current assets less core current liabilities",
            "Current assets less current liabilities",
            "Core current assets less current liabilities",
            "Liquid assets less current liabilities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The basic current liabilities are _____.",
        "options": [
            "accounts payable and bills payable",
            "bank overdraft",
            "outstanding expenses",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "There are two concepts of working capital \u2013 gross and ____",
        "options": [
            "Zero",
            "Net",
            "Cumulative",
            "distinctive"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Working capital is also known as___ capital.",
        "options": [
            "Current asset",
            "Operating",
            "Projecting",
            "Operation capital"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "______ working Capital refers to the firm\u2019s investment in current assets.",
        "options": [
            "Zero",
            "Net",
            "Gross",
            "Distinctive"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In finance, \u201cworking capital\u201d means the same thing as _______ assets.",
        "options": [
            "Current",
            "Fixed",
            "Total",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "______ working capital refers to the difference between current assets and current liabilities.",
        "options": [
            "Zero",
            "Net",
            "Gross",
            "Distinctive"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A _______ net working capital will arise when current assets exceed current liabilities.",
        "options": [
            "Summative",
            "Negative",
            "Excessive",
            "Positive"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A ______ net working capital occurs when current liabilities are in excess of current assets.",
        "options": [
            "Positive",
            "Negative",
            "Excessive",
            "Zero"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "X Ltd. distributes its products to more than 500 retailers. The company\u2019s collection period is 30 days and keeps its inventory for 20 days. The operating cycle would be:",
        "options": [
            "40 Days",
            "43 Days",
            "45 Days",
            "50 Days"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "________ refers to the funds, which an organisation must possess to finance its day to day operations.",
        "options": [
            "Retained earnings",
            "Fixed capital",
            "Working Capital",
            "All of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Investment in current assets should be _____",
        "options": [
            "just adequate",
            "more",
            "less",
            "maximum"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "_______ varies inversely with profitability.",
        "options": [
            "Risk",
            "Assets",
            "Liquidity",
            "Revenue"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Capital intensive firms rely on ______",
        "options": [
            "debt",
            "retained earnings",
            "short term debts",
            "equity"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "On the basis of _____, working capital is classified as gross working capital and net working capital.",
        "options": [
            "concept",
            "time",
            "future",
            "work"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "______ cycle analyzes the accounts receivable, inventory, and accounts payable cycles in terms of a number of days?",
        "options": [
            "Business",
            "Current asset",
            "Operation",
            "Operating"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "_______ method is not used for calculating working capital cycle.",
        "options": [
            "Trial and error method",
            "Regression analysis method",
            "Percentage of sales method",
            "Operating cycle approach"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "On the basis of _____, working capital may be classified as: 1) Permanent or fixed working capital. 2) Temporary or variable working capital.",
        "options": [
            "concept",
            "time",
            "future",
            "work"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Operating cycle is also called as _____",
        "options": [
            "Business cycle",
            "Working capital cycle",
            "Working cycle",
            "Current asset cycle"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Spontaneous financing consists of ______",
        "options": [
            "a line of credit",
            "short-term loans",
            "accounts receivable",
            "accounts payable"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Conversation of marketable securities into cash entails a fixed cost of Rs.1,000 per transaction. What will be the optimal conversation size as per Baumol model of cash management?",
        "options": [
            "Rs. 315,628",
            "Rs. 316,228",
            "Rs. 317,678",
            "Rs. 318,426"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Average collection period is 2 months, cash sales and average receivables are Rs.5,00,000 and Rs.6,50,000 respectively. The sales amount would be-",
        "options": [
            "Rs. 40,00,000",
            "Rs. 42,00,000",
            "Rs. 44,00,000",
            "Rs. 48,50,000"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If the current ratio is 2.4:1 and working capital is Rs.25,20,000, find the amount of current assets and current liabilities.",
        "options": [
            "Current Assets Rs. 43,20,000 and Current Liabilities Rs.18,00,000",
            "Current Assets Rs. 44,00,000 and Current Liabilities Rs.18,50,000",
            "Current Assets Rs. 45,50,000 and Current Liabilities Rs. 19,00,000",
            "Current Assets Rs. 46,60,000 and Current Liabilities Rs. 19,30,000"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Operating leverage helps in analysis of:",
        "options": [
            "Business Risk",
            "Financing Risk",
            "Production Risk",
            "Credit Risk"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is studied with the help of financial leverage?",
        "options": [
            "Marketing Risk",
            "Interest Rate Risk",
            "Foreign Exchange Risk",
            "Financing risk"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Combined Leverage is obtained from OL and FL by their:",
        "options": [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Any of these"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "High degree of financial leverage means:",
        "options": [
            "High debt proportion",
            "Lower debt proportion",
            "Equal debt and equity",
            "No debt"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Operating leverage arises because of:",
        "options": [
            "Fixed Cost of Production",
            "Fixed Interest Cost",
            "Variable Cost",
            "Step Cost"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Financial Leverage arises because of:",
        "options": [
            "Fixed cost of production",
            "Variable Cost",
            "Interest Cost",
            "Step Cost"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Operating Leverage is calculated as:",
        "options": [
            "Contribution \u00f7 EBIT",
            "EBIT\u00f7PBT",
            "EBIT \u00f7Interest",
            "EBIT \u00f7Tax"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Financial Leverage is calculated as:",
        "options": [
            "EBIT\u00f7 Contribution",
            "EBIT\u00f7 PBT",
            "EBIT\u00f7 Sales",
            "EBIT \u00f7 Variable Cost"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which combination is generally good for firms?",
        "options": [
            "High Operating leverage, High Financial leverage",
            "Low Operating leverage, Low Financial leverage",
            "High Operating leverage, Low Financial leverage",
            "ModerateOperating leverage. Moderate Financial leverage"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Combined leverage can be used to measure the relationship between:",
        "options": [
            "EBIT and EPS",
            "PAT and EPS",
            "Sales and EPS",
            "Sales and EBIT"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Financial Leverage is zero if:",
        "options": [
            "EBIT = Interest",
            "EBIT = Zero",
            "EBIT = Fixed Cost",
            "EBIT = Pref. Dividend"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Business risk can be measured by:",
        "options": [
            "Financial leverage",
            "Operating leverage",
            "Combined leverage",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Financial Leverage measures relationship between",
        "options": [
            "EBIT and PBT",
            "EBIT and EPS",
            "Sales and PBT",
            "Sales and EPS"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Use of Preference Share Capital in Capital structure",
        "options": [
            "Increases Operating leverage",
            "Increases Financial leverage",
            "Decreases Operating leverage",
            "Decreases Financial leverage"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Relationship between change in sales and change in EPS is measured by:",
        "options": [
            "Financial leverage",
            "Combined leverage",
            "Operating leverage",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Numerical data may be expressed as:",
        "options": [
            "In the form of text",
            "In the form of numbers",
            "In the form of images",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The descriptive data may be deciphered as:",
        "options": [
            "May be deciphered in the form of qualitative information",
            "May be deciphered in the form of quantitative information",
            "May be deciphered in the form of information from informal sources",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Data represented in the form of picture is termed as:",
        "options": [
            "Graphic data",
            "Qualitative data",
            "Quantitative data",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is/are the reason for digitization?",
        "options": [
            "Helps in work processing",
            "Requires less physical storage space",
            "Digitized records may be accessed by more than one person simultaneously",
            "All of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "To make the data turn into user friendly information, it should go one/more of following core steps:",
        "options": [
            "Collection of data",
            "Organising the data",
            "Data processing",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Any data expressed as a number is a ____________ data.",
        "options": [
            "graphical",
            "descriptive",
            "numerical",
            "None of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Classifying equities into small-cap, mid-cap, and large-cap categories are the examples of _________ Scale",
        "options": [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is a phase for a process of digitization?",
        "options": [
            "Justification of the proposed digitization project",
            "Assessment",
            "Planning",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Data science plays an important role in:",
        "options": [
            "Risk analytics",
            "Customer data management",
            "Consumer analytics",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The primary benefit of data distribution is:",
        "options": [
            "the estimation of the probability of any certain observation within a sample space",
            "the estimation of the probability of any certain observation within a non-sample space",
            "the estimation of the probability of any certain observation within a population",
            "the estimation of the probability of any certain observation without a non-sample space"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Binomial distribution applies to attributes:",
        "options": [
            "that are categorised into two mutually exclusive and exhaustive classes",
            "that are categorised into three mutually exclusive and exhaustive classes",
            "that are categorised into less than two mutually exclusive and exhaustive classes",
            "that are categorised into four mutually exclusive and exhaustive classes"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The geometric distribution is a discrete distribution that assesses:",
        "options": [
            "the probability of the occurrence of the first success",
            "the probability of the occurrence of the second success",
            "the probability of the occurrence of the third success",
            "the probability of the occurrence of the less success"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The probability density function describes:",
        "options": [
            "the characteristics of a random variable",
            "the characteristics of a non-random variable",
            "the characteristics of a random constant",
            "the characteristics of a non-random constant"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "When independent variables with standard normal distribution are squared and added, the _________ distribution occurs.",
        "options": [
            "Normal",
            "Chi square",
            "Exponential",
            "Lognormal"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The procedure that organises data into a meaningful order to make it simpler to comprehend, analyse, and visualise, is called _____________",
        "options": [
            "Data validation",
            "Data sorting",
            "Data aggregation",
            "Data analysis"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Following is a widely used graph for data Visualisation:",
        "options": [
            "Bar chart",
            "Pie chart",
            "Histogram",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Following are the objectives of data visualisation:",
        "options": [
            "Making a better data analysis",
            "Faster decision making",
            "Analysing complicated data",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Following are the scope of DPA:",
        "options": [
            "Defining significant meaning (relevant information) required by each audience member in every scenario.",
            "Obtaining the proper data (focus area, historic reach, extensiveness, level of detail, etc.)",
            "Determining the needed frequency of data refreshes (the currency of the data)",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Maps may be used for displaying:",
        "options": [
            "Pincode",
            "Country name",
            "State abbreviation",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A scatter plot displays several unique data points:",
        "options": [
            "on a single graph",
            "On two different graphs",
            "On four different graphs",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A ___________ chart depicts tasks that must be accomplished before others may begin, as well as the allocation of resources.",
        "options": [
            "Bubble",
            "Gantt",
            "Scatter",
            "Density"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "____________ is a set of skills that aims to identify, find, modify, format, and present data in a manner that ideally conveys meaning and provides insight.",
        "options": [
            "Data Presentation Architecture",
            "Data Presentation Hierarchy",
            "Data Visualization Architecture",
            "None of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is a data discovery platform that enables users to make quicker, more informed choices by speeding analytics, uncovering new business insights, and enhancing the precision of outcomes?",
        "options": [
            "Microsoft Excel",
            "Microsoft Power BI",
            "QlikView",
            "Tableau"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is/ are the benefit/ benefits of data analytics?",
        "options": [
            "Improves decision making process",
            "Increase in efficiency of operations",
            "Improved service to stakeholders",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is/ are the technique/s of data mining?",
        "options": [
            "Association rules",
            "Neural network",
            "Decision tree",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "XML is the abbreviated form of:",
        "options": [
            "Extensible mark-up language",
            "Extended mark-up language",
            "Extendable mark-up language",
            "Extensive mark-up language"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "XBRL is the abbreviated form of:",
        "options": [
            "eXtensible Business Reporting Language",
            "eXtensive Business Reporting Language",
            "eXtended Business Reporting Language",
            "eXtensive Business Reporting Language"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which of the following is/ are the types of cloud computing?",
        "options": [
            "Private cloud",
            "Public cloud",
            "Hybrid cloud",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "On the basis of the type of \u201csignal\u201d or \u201cfeedback\u201d provided to the learning system, which of the following is not a type of machine learning?",
        "options": [
            "Supervised learning",
            "Unsupervised learning",
            "Semi supervised learning",
            "Robotic Process learning"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In recent years, business intelligence has expanded to incorporate more procedures and activities designed to enhance performance. These procedures consist of:",
        "options": [
            "Data mining",
            "Reporting",
            "Querying",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What does the term \"break-even point\" refer to?",
        "options": [
            "The point where expenses are double the income",
            "The point at which total revenue equals total costs",
            "The point where profits are at their maximum",
            "The time when a firm repays its debts"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Why is it important for a firm to move far from the break-even point?",
        "options": [
            "To increase tax liabilities",
            "To attract new investors",
            "To ensure survival against seasonal fluctuations",
            "To avoid employee layoffs"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What is one reason profit maximization is criticized?",
        "options": [
            "It enhances employee satisfaction",
            "It increases the firm's equity base",
            "It can lead to exploitation of workers and consumers",
            "It ensures long-term sustainability"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What is a key assumption of the time value of money concept in financial decision-making?",
        "options": [
            "The timing of cash flows affects their value",
            "Cash flows occur at the same time",
            "Money depreciates automatically",
            "Interest rates have no impact on investment"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In which situation is the time value of money most relevant?",
        "options": [
            "Evaluating historical costs",
            "Budgeting fixed expenses",
            "Recording daily transactions",
            "Comparing cash flows at different points in time"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What is the present value of \u20b92,000 receivable 5 years from now at an 8% annual discount rate?",
        "options": [
            "1500",
            "1200.5",
            "1361.73",
            "1750.2"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If the future value remains the same, what happens to present value if the time period increases?",
        "options": [
            "Present value decreases",
            "Present value increases",
            "Present value remains unchanged",
            "Present value becomes zero"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What type of risk is caused by factors that affect the entire market or economy?",
        "options": [
            "Unsystematic Risk",
            "Credit Risk",
            "Systematic Risk",
            "Default Risk"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Given: Beta = 1.2, Risk-free rate = 4%, Expected market return = 12%. What is the expected return on the security?",
        "options": [
            "0.12",
            "0.104",
            "0.136",
            "0.152"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "SPO refers to___________ , the second and subsequent time a company raises money from the public directly.",
        "options": [
            "Secondary Public Offering",
            "Second Public Offering",
            "Subsequent Public Offer",
            "Subsequent Public Offering"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of a non-banking financial intermediary?",
        "options": [
            "LIC (Life Insurance Corporation)",
            "Reserve Bank of India",
            "State Bank of India",
            "Ministry of Finance"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What is the primary role of the Reserve Bank of India (RBI)?",
        "options": [
            "To collect taxes from citizens",
            "To maintain India\u2019s monetary and financial stability",
            "To manage public sector banks",
            "To regulate stock markets"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of a sector that may receive refinance support from RBI?",
        "options": [
            "Real estate",
            "Film industry",
            "Retail trade",
            "Export sector"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following assets can be used to maintain Statutory Liquidity Ratio (SLR)?",
        "options": [
            "Personal loans",
            "Government securities, cash, and gold",
            "Real estate investments",
            "Corporate shares"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the purpose of maintaining CRR?",
        "options": [
            "To increase bank profits",
            "To control inflation only",
            "To ensure banks have enough cash to meet withdrawal needs",
            "To promote stock market investments"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What does the Liquidity Adjustment Facility (LAF) primarily deal with?",
        "options": [
            "Managing long-term loans to the government",
            "Daily liquidity injection and absorption through repo and reverse repo",
            "Regulating foreign exchange reserves",
            "Issuing new currency notes"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An increase in Repo Rate by RBI is generally aimed at:",
        "options": [
            "Controlling inflation by making borrowing costlier",
            "Encouraging borrowing by banks",
            "Boosting exports",
            "Reducing the cash reserve ratio"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What is the main purpose of Open Market Operations (OMO)?",
        "options": [
            "To fund government spending",
            "To control stock market volatility",
            "To regulate medium-term liquidity in the economy",
            "To provide long-term capital to banks"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Who is the sole authority for issuing currency notes in India?",
        "options": [
            "Ministry of Finance",
            "State Bank of India",
            "Reserve Bank of India",
            "Indian Banks\u2019 Association"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The increasing importance of the foreign exchange market in India is due to:",
        "options": [
            "A decline in international investments",
            "India's isolation from global markets",
            "Restriction on currency exchange",
            "Increased trade and capital flows"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is empowered to issue, renew, modify, suspend, or cancel registration certificates of insurers?",
        "options": [
            "IRDA",
            "SEBI",
            "RBI",
            "LIC"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Who supervises the functioning of the Tariff Advisory Committee?",
        "options": [
            "LIC",
            "RBI",
            "SEBI",
            "IRDA"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "IRDA has the power to specify how insurers should:",
        "options": [
            "File for bankruptcy",
            "Maintain and report their accounts",
            "Manage real estate",
            "Issue credit cards"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "How can an Angel Fund raise money?",
        "options": [
            "Through bank loans",
            "By issuing shares to the public",
            "By issuing units to angel investors",
            "By crowdfunding platforms"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Compared to mutual funds, hedge funds are:",
        "options": [
            "More regulated",
            "Less regulated",
            "Equally regulated",
            "Regulated by RBI"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A major characteristic of hedge fund returns is:",
        "options": [
            "Guaranteed fixed returns",
            "High correlation with equity markets",
            "Consistency of returns and capital preservation",
            "Government-backed guarantees"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is a feature of hedge funds?",
        "options": [
            "Investment only in government securities",
            "Strict adherence to equity-only investment",
            "Flexibility in investment options",
            "Tax-free returns"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What is the main function of SEBI as per its preamble?",
        "options": [
            "To protect investors and regulate the securities market",
            "To promote foreign direct investment",
            "To regulate banks and insurance companies",
            "To provide loans to startups"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "What is another name for the Primary Market?",
        "options": [
            "Old issue market",
            "New issue market",
            "Secondary market",
            "Derivatives market"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is another name for the Secondary Market?",
        "options": [
            "New issue market",
            "Bond market",
            "Derivatives market",
            "Stock market"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Who introduced Masala Bonds in India?",
        "options": [
            "Reserve Bank of India",
            "World Bank",
            "International Finance Corporation (IFC)",
            "Ministry of Finance"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Insider trading becomes illegal when:",
        "options": [
            "Done by a foreign investor",
            "It leads to a rise in share price",
            "It is based on confidential information not available to the public",
            "It is done through a SEBI-registered broker"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What does the repo rate represent?",
        "options": [
            "The inflation rate in the economy",
            "The annual interest rate earned on a repo transaction",
            "The profit earned from securities",
            "The tax rate on capital gains"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "XYZ Ltd. has a Current Ratio of 3: 1 and Net Current Assets of 10,00,000. What are the Current Assets?",
        "options": [
            "1000000",
            "1200000",
            "1500000",
            "2000000"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A firm has Capital of 18,00,000; Sales of 9,00,000; Gross Profit of 3,00,000 and Expenses of 1,50,000. What is the Net Profit Ratio?",
        "options": [
            "0.1",
            "0.1667",
            "0.2",
            "0.25"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Current Assets \u20b950,00,000; Current Liabilities \u20b920,00,000; and Stock \u20b910,00,000. What is the Liquid Ratio?",
        "options": [
            "1.5 times",
            "2 times",
            "2.5 times",
            "1.75 times"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "JK Ltd. has a gearing of 40%. Its cost of equity is 18%, and the cost of debt is 12%. The company\u2019s WACC is:",
        "options": [
            "0.156",
            "0.162",
            "0.132",
            "0.128"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "X Ltd. has issued a 10% perpetual debt of \u20b91,00,000 at par. The tax rate is 35%. What is the cost of capital?",
        "options": [
            "10% before tax; 6.5% after tax",
            "6.5% before tax; 10% after tax",
            "10% before tax; 3.5% after tax",
            "6.5% before tax; 6.5% after tax"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Using the CAPM approach, determine the cost of equity capital from the following data:Risk-free rate = 8% Market return = 13%Beta of the firm = 1.6",
        "options": [
            "0.13",
            "0.16",
            "0.15",
            "0.18"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Calculate the cost of equity capital of Mamon Ltd., whose risk-free rate is 10%, beta is 1.75, and market return is 15%.",
        "options": [
            "0.1725",
            "0.1875",
            "0.165",
            "0.1925"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Net Income Approach to capital structure decision was proposed by ________",
        "options": [
            "J. E. Walter",
            "D. Durand",
            "E. Solomon",
            "M.H. Miller and D. Orr"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If a firm has a DOL of 3.5, it means:",
        "options": [
            "If sales increase by 3.5%, the EBIT will increase by 1%",
            "If EBIT increases by 3.5%, the EPS will increase by 1%",
            "If sales rise by 1%, EBIT will rise by 3.5%",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The Degree of Operating Leverage and Degree of Financial Leverage of VINTEX LTD. are 2.00 and 1.5 respectively. What will be the percentage change in EPS if the sales increase by 10%?",
        "options": [
            "10% increase",
            "30% increase",
            "35% increase",
            "15% increase"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What is data?",
        "options": [
            "Processed facts and figures with meaning",
            "Raw facts and figures, often numbers or text strings",
            "Analysis of information for decision making",
            "Knowledge gained from experience"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following represents the correct flow from raw input to decision making?",
        "options": [
            "Knowledge \u2192 Data \u2192 Information",
            "Data \u2192 Knowledge \u2192 Information",
            "Information \u2192 Data \u2192 Knowledge",
            "Data \u2192 Information \u2192 Knowledge"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is an example of quantitative financial data?",
        "options": [
            "Management discussion and analysis in text",
            "Stock price data",
            "Executive interviews on business channels",
            "Video presentations"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Qualitative financial data can be in the form of:",
        "options": [
            "Financial statements",
            "Stock prices",
            "Text, videos, and audio",
            "Numerical tables"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is easier after digitization?",
        "options": [
            "Reusing very large maps or data from microfilms",
            "Increasing the size of physical files",
            "Preventing data backups",
            "Limiting data access to a single location"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Digitization requires:",
        "options": [
            "More physical storage space",
            "Less physical storage space",
            "No changes in storage requirements",
            "More manual filing"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is a benefit of digitization during disasters?",
        "options": [
            "Makes backup files harder to retrieve",
            "Easier to keep backup files and retrieve data during unexpected disasters",
            "Increases physical storage space requirements",
            "Limits access to one location only"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Resources that may face quick destruction should be:",
        "options": [
            "Ignored",
            "Stored for later",
            "Given low priority",
            "Prioritized for early digitization"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In which phase is it decided whether digitization will be done in-house or outsourced?",
        "options": [
            "Justification",
            "Assessment",
            "Planning",
            "Digitization activities"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which phase includes deciding the digitization format (e.g. consolidated or detailed)?",
        "options": [
            "Justification",
            "Assessment",
            "Planning",
            "Editing"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which of the following is NOT part of the care of digitized records?",
        "options": [
            "Intellectual control over data",
            "Permission for accession of data",
            "Editing and cropping",
            "Maintenance and upkeeping"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In which currency is a GDR typically denominated?",
        "options": [
            "Local currency",
            "British Pound",
            "Indian Rupee",
            "US Dollar"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Who facilitates the conversion of GDRs into underlying shares?",
        "options": [
            "Stock exchanges",
            "Government agencies",
            "Depository or custodian banks",
            "Mutual funds"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What formula is used to calculate the cost of equity capital under the CAPM model?",
        "options": [
            "Ke = Rf \u00d7 \u03b2(Rm - Rf)",
            "Ke = Rm + Rf + \u03b2",
            "Ke = Rf + \u03b2(Rm - Rf)",
            "Ke = Rm \u00d7 \u03b2 + Rf"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "If the risk-free rate is 14%, the market return is 18%, and \u03b2 = 1, what is the cost of equity?",
        "options": [
            "0.14",
            "0.16",
            "0.18",
            "0.2"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the formula for calculating the cost of retained earnings (kr)?",
        "options": [
            "kr = ke \u00d7 (1 + t) \u00d7 (1 + b)",
            "kr = ke \u00d7 (1 \u2013 t) \u00d7 (1 \u2013 b)",
            "kr = ke \u00f7 (1 \u2013 t)",
            "kr = ke \u00d7 t \u00d7 b"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Company X issues 11% bonds of 100 for an amount aggregating 200,000 at 10% premium, redeemable at par after 5 years. Corporate tax rate is 35%. The cost of bonds would be:",
        "options": [
            "0.049",
            "0.05",
            "0.052",
            "0.06"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Ramya Ltd.\u2019s share beta factor is 1.40. The risk free rate of interest of government securities is 9%. The expected rate of return on the company equity shares is 16%. The cost of equity capital based on CAPM is:",
        "options": [
            "0.09",
            "0.16",
            "0.188",
            "0.158"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What does a positive Net Present Value (NPV) indicate about a project?",
        "options": [
            "The project generates returns lower than the firm's required rate",
            "The project will result in a loss",
            "The project earns a return higher than the required rate",
            "The firm should reject the project"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A company has the following data: Sales: 2,00,000 Variable Costs: \u20b9160,000 Fixed Costs: \u20b920,000 What is the Degree of Operating Leverage (DOL)?",
        "options": [
            "1.5",
            "2",
            "2.5",
            "3"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A firm has: DOL = 4.0 DFL = 3.5 What is the Degree of Combined Leverage (DCL)?",
        "options": [
            "2.5",
            "3.5",
            "6",
            "14"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "According to Walter's Model, when should a company retain its earnings?",
        "options": [
            "- When return (r) < cost of capital (k)",
            "- When return (r) = cost of capital (k)",
            "- When return (r) > cost of capital (k)",
            ". When the company has surplus cash"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "If EBIT is \u20b92,50,000 and Net Sales are \u20b912,00,000, what is the Operating Profit Ratio?",
        "options": [
            "0.185",
            "0.2083",
            "0.215",
            "0.25"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Operating Profit is also known as:",
        "options": [
            "Net Profit",
            "Gross Profit",
            "EBIT",
            "EBT"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the formula for Operating Profit Ratio?",
        "options": [
            "EBIT \u00f7 Total Assets \u00d7 100",
            "Net Profit \u00f7 Net Sales \u00d7 100",
            "Gross Profit \u00f7 Net Sales \u00d7 100",
            "EBIT \u00f7 Net Sales \u00d7 100"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "If the Cost of Goods Sold (COGS) is \u20b98,00,000 and the Average Inventory is \u20b92,00,000, what is the Inventory Turnover Ratio?",
        "options": [
            "4 times",
            "6 times",
            "7 times",
            "5 times"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A company has the following data: Net Credit Purchases \u20b912,00,000, Opening Accounts Payable \u20b94,00,000, Closing Accounts Payable \u20b98,00,000. What is the Creditors Turnover Ratio?",
        "options": [
            "1.5 times",
            "2 times",
            "2.5 times",
            "3 times"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A company reports Net Annual Sales of \u20b920,00,000 and has Working Capital of \u20b95,00,000. What is the Working Capital Turnover Ratio?",
        "options": [
            "2.5 times",
            "4 times",
            "3 times",
            "10 times"
        ],
        "answer": 2,
        "explanation": ""
    }
]
          },
          {
            label: "Management Accounting",
            questions: []
          }
        ]
      }
    ]
  },
  Final: {
    label: "Final",
    groups: [
      {
        label: "Group-3",
        subjects: [
          {
            label: "Corporate & Economic Law",
            questions: []
          },
          {
            label: "SFM",
            questions: []
          },
          {
            label: "DT",
            questions: []
          },
          {
            label: "SCM",
            questions: []
          }
        ]
      },
      {
        label: "Group-4",
        subjects: [
          {
            label: "CMA",
            questions: []
          },
          {
            label: "CFR",
            questions: []
          },
          {
            label: "IDT",
            questions: []
          },
          {
            label: "Electives",
            questions: []
          }
        ]
      }
    ]
  }
};

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
const pathPanel = document.querySelector(".cma-path-panel");
const quizCard = document.querySelector(".cma-quiz-card");

const levels = Object.keys(cmaCourseMap);
let activeLevel = "";
let activeGroup = "";
let activeSubject = null;
let activeIndex = 0;
let answers = {};

function showCourseSelector() {
  pathPanel.hidden = false;
  quizCard.classList.remove("is-open");
}

function showQuizView() {
  pathPanel.hidden = true;
  quizCard.classList.add("is-open");
  quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getActiveSubjectData() {
  if (!activeSubject) return null;

  const level = cmaCourseMap[activeSubject.level];
  const group = level?.groups.find((item) => item.label === activeSubject.group);
  return group?.subjects.find((item) => item.label === activeSubject.subject) || null;
}

function getSubjectQuestions() {
  return getActiveSubjectData()?.questions || [];
}

function getAnswerKey() {
  if (!activeSubject) return "";
  return `${activeSubject.level}-${activeSubject.group}-${activeSubject.subject}-${activeIndex}`;
}

function getSubjectKey(subject) {
  return `${subject.level}-${subject.group}-${subject.subject}`;
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
    total: questions.length
  };
}

function hideResults() {
  resultsPanel.hidden = true;
  resultsPanel.innerHTML = "";
}

function showResults() {
  const result = getSubjectResult();

  resultsPanel.hidden = false;
  resultsPanel.innerHTML = `
    <h3>Test Results</h3>
    <div class="cma-result-grid">
      <div>
        <span>Attempted</span>
        <strong>${result.attempted} / ${result.total}</strong>
      </div>
      <div>
        <span>Right</span>
        <strong>${result.right}</strong>
      </div>
      <div>
        <span>Wrong</span>
        <strong>${result.wrong}</strong>
      </div>
    </div>
  `;
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
  hideResults();
  updateScore();
}

function renderLevels() {
  levelList.innerHTML = "";

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
    activeGroup = "";
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

  selectedGroup.subjects.forEach((subject) => {
    const button = document.createElement("button");
    const nextSubject = {
      level: activeLevel,
      group: selectedGroup.label,
      subject: subject.label
    };
    const hasQuestions = subject.questions.length > 0;
    const isActive = activeSubject && getSubjectKey(activeSubject) === getSubjectKey(nextSubject);

    button.type = "button";
    button.className = "cma-subject-button";
    button.textContent = subject.label;
    button.classList.toggle("active", isActive);
    button.classList.toggle("is-empty", !hasQuestions);
    button.setAttribute("aria-current", isActive ? "true" : "false");
    button.title = hasQuestions ? `${subject.questions.length} MCQ${subject.questions.length === 1 ? "" : "s"}` : "MCQs not added yet";
    button.addEventListener("click", () => {
        activeSubject = nextSubject;
        activeIndex = 0;
        hideResults();
        renderSelectionPanel();
        renderQuestion();
        showQuizView();
    });

    subjects.appendChild(button);
  });

  groupCard.append(title, subjects);
  groupList.appendChild(groupCard);
}

function renderFeedback(selectedIndex) {
  const question = normalizeQuestion(getSubjectQuestions()[activeIndex]);
  const isCorrect = selectedIndex === question.answer;

  feedback.hidden = false;
  feedback.className = `cma-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Review this one"}</strong>
    <p>${question.explanation || "Explanation will be added soon."}</p>
  `;
}

function selectOption(selectedIndex) {
  const question = normalizeQuestion(getSubjectQuestions()[activeIndex]);
  answers[getAnswerKey()] = {
    selectedIndex,
    isCorrect: selectedIndex === question.answer
  };
  renderQuestion();
}

function normalizeQuestion(question) {
  const normalized = { ...question };
  
  // Map Text: handle 'question' or 'QUESTIONS'
  if (!normalized.question && normalized.QUESTIONS) {
    normalized.question = normalized.QUESTIONS;
  }

  // Map Explanation: handle 'explanation' or 'EXPLANATION'
  if (!normalized.explanation && normalized.EXPLANATION) {
    normalized.explanation = normalized.EXPLANATION;
  }

  // Map Answer: handle 'answer', 'ANSWER CODE' (1-based), or 'answer_code' (1-based)
  if (normalized.answer === undefined) {
    if (normalized["ANSWER CODE"] !== undefined) {
      normalized.answer = normalized["ANSWER CODE"] - 1;
    } else if (normalized.answer_code !== undefined) {
      normalized.answer = normalized.answer_code - 1;
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

  return normalized;
}

function renderQuestion() {
  if (!activeSubject) {
    setEmptyQuiz("Select Intermediate or Final, then choose a subject to start practicing.");
    return;
  }

  const subject = getActiveSubjectData();
  const questions = getSubjectQuestions();
  const label = `${activeSubject.level} / ${activeSubject.group} / ${activeSubject.subject}`;

  if (!subject || !questions.length) {
    setEmptyQuiz("MCQs for this subject will be added soon.", label);
    return;
  }

  const question = normalizeQuestion(questions[activeIndex]);
  const savedAnswer = answers[getAnswerKey()];

  subjectLabel.textContent = label;
  questionCount.textContent = `Question ${activeIndex + 1} of ${questions.length}`;
  questionText.textContent = question.question;
  optionsWrap.innerHTML = "";

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
  nextButton.disabled = activeIndex === questions.length - 1;
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

renderLevels();
renderSelectionPanel();
showCourseSelector();
