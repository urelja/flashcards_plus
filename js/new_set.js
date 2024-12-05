let addButton = document.querySelector('.addQuestion');
let saveButton = document.querySelector('.saveQuestions');
let cancelButton = document.querySelector('.cancel');

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
    let setTitle = document.querySelector('.setTitle').value.trim();
    let questions = document.querySelectorAll('.questions > div');

    if (setTitle === '') {
        alert('Set title must be filled out.');
        return;
    }

    if (questions.length === 0) {
        alert('No questions to save.');
        return;
    }

    let data = {
        title: setTitle,
        questions: []
    };

    questions.forEach(function(questionDiv) {
        let question = questionDiv.querySelector('.question').innerText;
        let answer = questionDiv.querySelector('.answer').innerText;
        data.questions.push({ question: question, answer: answer });
    });

    let sets = JSON.parse(localStorage.getItem('questionsData')) || [];
    sets.push(data);
    localStorage.setItem('questionsData', JSON.stringify(sets));
    console.log('Data saved to localStorage:', sets);

    // Redirect to mysets.html after saving
    window.location.href = 'mysets.html';
});

cancelButton.addEventListener('click', function() {
    // Redirect to mysets.html when cancel is clicked
    window.location.href = 'mysets.html';
});