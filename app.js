const mcqData = {
  DBMS: [
    {
      id: 1,
      question: "What is DBMS?",
      options: [
        "Database Management System",
        "Data Backup Management System",
        "Data Business Management System",
        "Database Machine System"
      ],
      answer: "Database Management System",
      explanation: "DBMS is software used to store, manage and retrieve data efficiently."
    },
    {
      id: 2,
      question: "Which key uniquely identifies a record?",
      options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"],
      answer: "Primary Key",
      explanation: "Primary key uniquely identifies each record in a table."
    }
  ],

  OS: [
    {
      id: 1,
      question: "Which is not an operating system?",
      options: ["Windows", "Linux", "Oracle", "Mac OS"],
      answer: "Oracle",
      explanation: "Oracle is a database software, not an OS."
    }
  ],

  CN: [
    {
      id: 1,
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Transfer Text Process",
        "Host Transfer Protocol"
      ],
      answer: "HyperText Transfer Protocol",
      explanation: "HTTP is used for communication between web browser and server."
    }
  ],

  DSA: [
    {
      id: 1,
      question: "Which data structure uses FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
      explanation: "Queue follows First In First Out principle."
    }
  ],

  Java: [
    {
      id: 1,
      question: "Java is ____?",
      options: [
        "Platform dependent",
        "Platform independent",
        "Machine dependent",
        "None"
      ],
      answer: "Platform independent",
      explanation: "Java runs on JVM, making it platform independent."
    }
  ],

  JavaScript: [
    {
      id: 1,
      question: "Which keyword is used to declare a variable?",
      options: ["var", "int", "string", "define"],
      answer: "var",
      explanation: "Variables in JavaScript are declared using var, let or const."
    }
  ]
};

export default mcqData;
