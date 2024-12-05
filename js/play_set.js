document.addEventListener('DOMContentLoaded', function() {
    let setIndex = localStorage.getItem('selectedSetIndex');
    let sets = JSON.parse(localStorage.getItem('questionsData')) || [];
    let currentSet = sets[setIndex];
    let questions = [...currentSet.questions];
    let incorrectQuestions = [];
    let currentQuestionIndex = 0;

    let questionContainer = document.querySelector('.question-container');
    let revealButton = document.querySelector('.reveal-answer');
    let buttonContainer = document.querySelector('.button-container');
    let correctButton = document.querySelector('.correct');
    let incorrectButton = document.querySelector('.incorrect');
    let exitButton = document.querySelector('.exit');
    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            questionContainer.innerText = questions[currentQuestionIndex].question;
            revealButton.style.display = 'block';
            buttonContainer.style.display = 'none';
        } else if (incorrectQuestions.length > 0) {
            questions = [...incorrectQuestions];
            incorrectQuestions = [];
            currentQuestionIndex = 0;
            showQuestion();
        } else {
            questionContainer.innerText = 'Congratulations!';
            buttonContainer.style.display = 'none'; // Hide the button container
        }
    }

    revealButton.addEventListener('click', function() {
        questionContainer.innerText = questions[currentQuestionIndex].answer;
        revealButton.style.display = 'none';
        buttonContainer.style.display = 'flex';
    });

    correctButton.addEventListener('click', function() {
        currentQuestionIndex++;
        showQuestion();
    });

    incorrectButton.addEventListener('click', function() {
        incorrectQuestions.push(questions[currentQuestionIndex]);
        currentQuestionIndex++;
        showQuestion();
    });

    showQuestion();
});