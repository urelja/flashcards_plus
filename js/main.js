let addButton = document.querySelector('.addQuestion');

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