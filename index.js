// import
const readlineSync = require('readline-sync');
const chalk = require("chalk");


// high score logic
const highScorers = [
  {
    name: "Vipul",
    score: 10
  },
  {
    name: "kunal",
    score: 10
  }
]

const levelOneQuestions = [
  {
    question: "Who is current indian cricketer captain?",
    answer: "virat kohli",
    options: ["mahendra singh dhoni", "virat kohli", "rohit sharma", "kl rahul"]
  },
  {
    question: "How many players play in cricket?",
    answer: 11,
    options: [11, 12, 7, 10]
  },
  {
    question: "how many players play in kabbaddi?",
    answer: 7,
    options: [9, 5, 11, 7]
  },
  {
    question: "Who is the prime minister of india?",
    answer: "narendra modi",
    options: ["narendra modi", "manmohan singh", "amit shah", "rahul ghandhi"]
  },
  {
    question: "How Many hours in one day?",
    answer: 24,
    options: [12, 24, 6, 16]
  },
  {
    question: "What is the fullform of LBW?",
    answer: "leg before wicket",
    options: ["leg by wicket", "leg before out ", "leg before wicket", "large before wicket"]
  },
]

// Level2
const levelSecondQuestions = [
  {
    question: "who invented the telephone?",
    answer: "graham bell",
    options: ["alva adison", "alexander flemming", 'graham bell', 'johannes']
  },
  {
    question: "the largest 4 digit number is?",
    answer: 9999,
    options: [1000, 9000, 9999, 999]
  },
  {
    question: "who founded facebook?",
    answer: "mark zuckerberg",
    options: ["mark zuckerberg", "rio berg", "thomas zuckerberg", "non of this"]
  },
  {
    question: "Who is knows as the Iron man of india?",
    answer: "sardar vallabhbhai patel",
    options: ['mahatma ghandhi', 'javaharlal nehru', 'subhash chandra bose', 'sardar vallabhbhai patel']
  },
  {
    question: "whi was the first woman president of india?",
    answer: "pratibha patil",
    options: ['indira ghandhi', 'pratibha patil', 'kiran bedi', 'soniya ghandhi']
  },
]

// Level3
const levelThreeQuestions = [
  {
    question: "what is the national animal of india?",
    options: undefined,
    answer: true
  },
  {
    question: "which is the longest river on earth?",
    options: undefined,
    answer: true
  }
]

// add score
let score = 0;

// Check for high Score
function CheckhighScore(name, score) {
  // console.log("High Score in Calling....");
  for (let i = 0; i < highScorers.length; i++) {
    if (score > highScorers[i].score) {
      // console.log("Pushed to high score");
      highScorers.push({ name: name, score: score });
      break;
    }
  }
}

// this function ask questions, check answers and update score.
function askQuestion(question, answer, options) {
  if (options) {
    let ask = readlineSync.keyInSelect(options, chalk.blue.underline.bold(question));
    checkAnswer(options[ask], answer);
  } else {
    let ask = readlineSync.keyInYN(question);
    checkAnswer(ask, answer);
  }
}

function checkAnswer(answer, actualAnswer) {
  if (answer === actualAnswer) {
    score = score + 1;
    console.log(chalk.bgGreen.bold(answer), chalk.bgGreen.bold("Right yeah!! perfect:)"));
  } else {
    console.log(chalk.bgRed.bold(answer), chalk.bgRed.bold("Wrong:("));
  }
}

// this function adjust level 
function setLevel(levelArray) {
  for (let i = 0; i < levelArray.length; i++) {
    let current = levelArray[i];
    askQuestion(current.question, current.answer, current.options);
    console.log("Your score is: ", score);
  }
}

// Carrier program
const userName = readlineSync.question("please! Enter Your Name: ");

if (score < 5) {
  setLevel(levelOneQuestions);
  if (score >= 5) {
    console.log(chalk.black.bgMagenta.bold("Congratulations! You Unlock Level 2: "))
    setLevel(levelSecondQuestions);
    if (score >= 8) {
      console.log(chalk.black.bgMagenta.bold("Congratulations! You Unlock Level 3: "))
      setLevel(levelThreeQuestions);
    }
  }
}

CheckhighScore(userName, score);

// Print HighScores
console.log("-------- High Scores: ---------");
for (let i = 0; i < highScorers.length; i++) {
  console.log("Name:", highScorers[i].name, ", Score: ", highScorers[i].score);
}