let addButton = document.querySelector('.addQuestion');
let saveButton = document.querySelector('.saveQuestions');

addButton.addEventListener('click', function(e) {
    e.preventDefault();
    let question = document.querySelector('.question').value.trim();
    let answer = document.querySelector('.answer').value.trim();

    if (question === '' || answer === '') {
        alert('Both question and answer fields must be filled out.');
        return;
    }

    let newQuestion = document.createElement('div');
    newQuestion.innerHTML = `<div class="question">${question}</div><div class="answer">${answer}</div>`;
    document.querySelector('.questions').appendChild(newQuestion);
    document.querySelector('.question').value = '';
    document.querySelector('.answer').value = '';
});

saveButton.addEventListener('click', function() {
    let questions = document.querySelectorAll('.questions > div');
    if (questions.length === 0) {
        alert('No questions to save.');
        return;
    }

    let data = [];
    questions.forEach(function(questionDiv) {
        let question = questionDiv.querySelector('.question').innerText;
        let answer = questionDiv.querySelector('.answer').innerText;
        data.push({ question: question, answer: answer });
    });

    localStorage.setItem('questionsData', JSON.stringify(data));
    console.log('Data saved to localStorage:', data);
});