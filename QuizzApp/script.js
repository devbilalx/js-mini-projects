const question = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Girafee", correct: false },

        ]

    },
    {

        question: "Which is the smallest country  in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "SriLanka", correct: false },

        ]




    },
    {
        question: "Which is the smalles continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Austrlia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },

        ]
    }
]

const questionElement = document.querySelector('#question')

const answerButtons = document.querySelector('#answer-buttons')

const nextButton = document.querySelector('#next-btn')


let score = 0
let currentQuestionIndex = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0;

    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {

    resetState();
    let currentQuestion = question[currentQuestionIndex]
    let questionNO = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {

        const button = document.createElement("button") // Creating button
        button.innerHTML = answer.text // giving text to button
        button.classList.add('btn') // adding button to list
        answerButtons.appendChild(button) // append ing asnwer button div
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer,false)

    })



}

function  selectAnswer(e){
    const selectedBtn=e.target
    const isCorrect=selectedBtn.dataset.correct==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }


    Array.from(answerButtons.children).forEach((button)=>{
        if (button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showScore(){
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${question.length}`
    nextButton.innerHTML="Play again"
    nextButton.style.display="block"
}


function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<question.length){
        showQuestion()
    }
    else{
        showScore();
    }
}


nextButton.addEventListener('click',()=>{
    if (currentQuestionIndex<question.length){
        handleNextButton()

    }else{
        startQuiz();
    }
})


startQuiz();

