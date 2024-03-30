const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 50); // Selecting first 50 shuffled questions
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'what is the binary number of 10?',
    answers: [
      { text: '1010', correct: true },
      { text: '1111', correct: false },
      { text: '1100', correct: false },
      { text: '1001', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'which prime number is closest to 50?',
    answers: [
        { text: '47', correct: true },
        { text: '53', correct: false },
        { text: '43', correct: false },
        { text: '58', correct: false }
        ]
  },
  {
    question: 'what is protocol used for majority of network?',
    answers:  [
      { text: 'OSX', correct: false },
      { text: '64 bit', correct: false },
      { text: 'TCP\IP', correct: true },
      { text: 'IPX', correct: false }
      ]
  },
  {
    question: 'if the two strings are identical then strcmp() function returns?',
    answers: [
      { text: '-1', correct: false },
      { text: '0', correct: true },
      { text: '1', correct: false },
      { text: 'val', correct: false }
      ]
  },
  {
    question: 'how will you print \n on the screen?',
    answers: [
      { text: 'printf("\\n");', correct: true },
      { text: 'printf("\n");', correct: false },
      { text: 'echo"\\n"', correct: false },
      { text: 'printf('\n')', correct: false }
      ]
  },
  {
    question: 'what ball is used in table tennis?',
    answers: [
      { text: 'football', correct: false },
      { text: 'basketball', correct: false },
      { text: 'tennisball', correct: false },
      { text: 'ping-pong', correct: true }
      ]
  },
  {
    question: 'what is the fear of fun?',
    answers: [
      { text: 'phobophobia', correct: false },
      { text: 'cherophobia', correct: true },
      { text: 'hilaophpbia', correct: false },
      { text: 'funophobia', correct: false }
      ]
  },
    {
    question: 'what does OS mean?',
    answers: [
      { text: 'open software', correct: false },
      { text: 'operating system', correct: true }
      ]
  },
  {
    question: 'MOV extension refers what kind of file?',
    answers: [
      { text: 'movie file', correct: true },
      { text: 'image file', correct: false }
      ]
  },
  {
    question: 'Who is the number 1 YouTuber?',
    answers: [
      { text: 'mr beast', correct: true },
      { text: 'Traversy Media', correct: false },
      { text: 'Dev Ed', correct: false },
      { text: 'Fun Fun Function', correct: false }
    ]
  },
  {
    question: 'what is binary number of 10?',
    answers: [
      { text: '1010', correct: true },
      { text: '1100', correct: false },
      { text: '1011', correct: false },
      { text: '1111', correct: false }
      ]
  },
  {
    question: 'which game is called king of sports?',
    answers: [
      { text: 'carrom', correct: false },
      { text: 'football', correct: true },
      { text: 'cricket', correct: false },
      { text: 'tennis', correct: false }
      ]
  },
  {
    question: 'in which sport the dolphin kick is associated?',
    answers: [
      { text: 'swimming', correct: true },
      { text: 'scoobadiving', correct: false },
      { text: 'football', correct: false },
      { text: 'cricket', correct: false }
      ]
  },
  { 
    question: 'what is three fifth of 100?',
    answers: [
      { text: '3', correct: false },
      { text: '5', correct: false },
      { text: '60', correct: true },
      { text: '10', correct: false }
      ]
  },
  { 
    question: 'how many years are in a decade?',
    answers: [
      { text: '11', correct: false },
      { text: '15', correct: false },
      { text: '17', correct: false },
      { text: '10', correct: true }
      ]
  },
  {
    question: 'who is called god of cricket?',
    answers: [
      { text: 'dhoni', correct: false },
      { text: 'viratkohli', correct: false },
      { text: 'sachintendulkar', correct: true },
      { text: 'hardikpandya', correct: false }
      ]
  },
  {
    question: 'what is the output of following python code: print('Hello'[::-1])?',
     answers: [
       { text: 'Hello', correct: false },
       { text: 'olleh', correct: true },
       { text: 'elloh', correct: false },
       { text: 'holle', correct: false }
       ]
  },
  {
    question: 'which of the following is not a valid datatype in python?',
    answers: [
      { text: 'double', correct: false },
      { text: 'int', correct: false },
      { text: 'string', correct: true },
      { text: 'list', correct: false }
      ]
  },
  {
    question: 'what command is used to remove file?',
    answers: [
      { text: 'dm', correct: false },
      { text: 'rm', correct: true },
      { text: 'delete', correct: false }
      ]
  },
  {
    question: 'find the odd one out 3,5,11,14,17,21?',
    answers: [
      { text: '21', correct: false },
      { text: '17', correct: false },
      { text: '14', correct: true }
      ]
  },
  {
    question: 'python is a high level language?',
    answers: [
      { text: 'yes', correct: true },
      { text: 'no', correct: false }
      ]
  },
  {
    question: 'python is interpreted language?',
    answers: [
      { text: 'no', correct: false },
      { text: 'yes', correct: true }
      ]
  },
  {
    question: 'python can run on windows,mac,linux,unix?',
    answers: [
      { text: 'yes', correct: true },
      { text: 'no', correct: false }
      ]
  },
  {
    question: 'counting numbers are kept under _ number?',
     answers: [
       { text: 'natural', correct: true },
       { text: 'whole', correct: false },
       { text: 'odd', correct: false },
       { text: 'real', correct: false }
       ]
  },
  { 
    question: 'what is the next prime number after 7?',
    answers: [
      { text: '15', correct: false },
      { text: '11', correct: true },
      { text: '9', correct: false },
      { text: '17', correct: false }
      ]
  },
  { question: 'how many vertices are present on a cube?',
   answers: [
     { text: '8', correct: true },
     { text: '11', corect: false },
     { text: '9', correct: false },
     { text: '4', correct: false }
     ]
  },
  { 
    question: 'what goes up but never comes down?',
    answers: [
      { text: 'age', correct: true },
      { text: 'weight', correct: false },
      { text: 'colour', correct: false },
      { text: 'hair', correct: false }
      ]
  },
  { 
    question: 'what can run but never walk?',
    answers: [
      { text: 'cat', correct: false },
      { text: 'ostrich', correct: false },
      { text: 'raindrops', correct: true },
      { text: 'horse', corrct: false }
      ]
  },
{
  question: 'what is JVM?',
  answers: [
    { text: 'joint visual machine', correct: false },
    { text: 'java virtual machine', correct: true }
    ]
},
  {
    question: 'java is what platform?',
    answers: [
      { text: 'single', correct: false },
      { text: 'multi', correct: true }
      ]
  },
  {
    question: 'what gets sharper the more you use it?',
    answers: [
      { text: 'pencil', correct: false },
      { text: 'brain', correct: true },
      { text: 'needle', correct: false },
      { text: 'nails', correct: false }
      ]
  },
  {
    question: 'bill gates is the founder of amazon?',
    answers: [
      { text: 'yes', correct: false },
      { text: 'no', correct: true }
      ]
  },
  {
    question: 'what is the part of database that holds only one type of information?',
    answers: [
      { text: 'report', correct: false },
      { text: 'field', correct: true }
      ]
  },
  {
    question: 'which is network centric language?',
    answers: [
      { text: 'java', correct: true },
      { text: 'c', correct: false },
      { text: 'c++', correct: false },
      { text: 'python', correct: false }
      ]
  },
  {
    question: 'an important aspect of coding?',
    answers: [
      { text: 'reliability', correct: true },
      { text: 'productivity', correct: false }
      ]
  },
  {
    question: 'full form oh HTML?',
    answers: [
      { text: 'high text markup language', correct: false },
      { text: 'hyoer text markup language', correct: true }
      ]
  },
  {
    question: '3 is a perfect square?',
    answers: [
      { text: 'yes', correct: false },
      { text: 'no', correct: true }
      ]
  },
  { 
    question: 'what is #include <stdio.h>?',
    answers: [
      { text: 'preprocessor', correct: true },
      { text: 'inclusion', correct: false },
      { text: 'file inclusion', correct: false },
      { text: 'none of the above', correct: false }
      ]
  },
  {
    question: 'x+5=8 find x?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false }
      ]
  },
  {
    question: 'which is called city of joy?',
    answers: [
      { text: 'banglore', correct: false },
      { text: 'kolkata', correct: true },
      { text: 'goa', correct: false },
      { text: 'mumbai', correct: false }
      ]
  },
  {
    question: 'which of the following would compile without error?',
    answers: [
      { text: 'int a=math.abs(-5);', correct: true },
      { text: 'int a=math.abs(5.0);', correct: false },
      { text: 'int a=math.abs(5.5f);', correct: false },
      { text: 'int a=math.abs(5l);', correct: false }
      ]
  },
  { 
    question: 'synonym for big?',
    answers: [
        { text: 'enoromous', correct: true },
        { text: 'wreck', correct: false }
        ]
  },
  {
    question: 'what does PHP stand for?',
    answers: [
        { text: 'Hypertext preprocessor', correct: true },
        { text: 'python high programming', correct: false }
        ]
  },
  {
    question: 'what container that keeps a specific number of similar datatypes?',
    answers: [
      { text: 'array', correct: true },
      { text: 'list', correct: false },
      { text: 'tuple', correct: false },
      { text: 'file', correct: false }
      ]
  },
  {
    question: 'which of the computer language is written binary codes only?',
    answers: [
      { text: 'c', correct: false },
      { text: 'machine language', correct: true },
      { text: 'c++', correct: false },
      { text: 'java', correct: false },
      ]
  },
  {
    question: 'product of 82 and 5 is?',
    answers: [
      { text: '410', correct: true },
      { text: '400', correct: false }
      ]
  },
  {
  question: '-10 is a whole number?',
    answers: [
      { text: 'yes', correct: false },
      { text: 'no', correct: true }
      ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]
