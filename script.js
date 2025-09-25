const question = [
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Mecury", correct: false},
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent Van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Michelangelo", correct: false},
        ]
    },
    {
        question: "Which element has the chemical symbol 0?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Oxygen", correct: true},
            {text: "Hydrogen", correct: false},
            {text: "Silver", correct: false},
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            {text: "Osaka", correct: false},
            {text: "Kyoto", correct: false},
            {text: "Seoul", correct: false},
            {text: "Tokyo", correct: true},
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            {text: "Cheetah", correct: true},
            {text: "Lion", correct: false},
            {text: "Antelope", correct: false},
            {text: "Horse", correct: false},
        ]
    },
    {
        question: "In which year did Titanic sink?",
        answers: [
            {text: "1920", correct: false},
            {text: "1918", correct: false},
            {text: "1905", correct: false},
            {text: "1912", correct: true},
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Diamond", correct: true},
            {text: "Quartz", correct: false},
            {text: "Iron", correct: false},
        ]
    },
    {
        question: "Which planet is the Red planet?",
        answers: [
            {text: "Mecury", correct: false},
            {text: "Neptune", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Mars", correct: true},
        ]
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Mark Twain", correct: false},
        ]
    },
    {
        question: "How many continents are there in Earth?",
        answers: [
            {text: "9", correct: false},
            {text: "5", correct: false},
            {text: "7", correct: true},
            {text: "10", correct: false},
        ]
    },
    {
            question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Africa", correct: false},
            {text: "Arctic", correct: false},
        ]
        },
        {
            question: "What is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
        },
        {
            question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Elephant", correct: false},
        ]
        },
        {
            question: "What is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
        },
        {
            question: "What is the tallest mountain in the world?",
        answers: [
            {text: "K2", correct: false},
            {text: "Mount Kilimanjaro", correct: false},
            {text: "Mount Everest", correct: true},
            {text: "Denali", correct: false},
        ]
        }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
        questionElement.innerHTML = `You scored ${score} out of ${question. length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";

 }
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 });

startQuiz();