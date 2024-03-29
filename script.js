const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
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
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
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
    question: 'if the two strings are identical , then strcmp() function returns?',
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
      { text: 'echo"\\n";', correct: false },
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
    question: 'what game is called sport of king?',
    answers: [
      { text: 'go', correct: false },
      { text: 'chess', correct: true },
      { text: 'tennis', correct: false },
      { text: 'carrom', correct: false }
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
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]
