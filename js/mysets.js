document.addEventListener('DOMContentLoaded', function() {
    let setsContainer = document.querySelector('.sets');

    function loadSets() {
        setsContainer.innerHTML = ''; // Clear existing sets
        let sets = JSON.parse(localStorage.getItem('questionsData')) || [];

        if (!Array.isArray(sets)) {
            sets = [];
        }

        sets.forEach((set, index) => {
            let setElement = document.createElement('article');
            setElement.classList.add('set');
            setElement.innerHTML = `
                <h3>${set.title}</h3>
                <div>
                    <span><img src="assets/deck.svg" alt="">${set.questions.length}</span>
                    <button class="bin" data-index="${index}"></button>
                    <button class="play-btn" data-index="${index}"></button>
                </div>
            `;
            setsContainer.appendChild(setElement);
        });
    }

    setsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('bin')) {
            let index = e.target.getAttribute('data-index');
            let sets = JSON.parse(localStorage.getItem('questionsData')) || [];
            sets.splice(index, 1);
            localStorage.setItem('questionsData', JSON.stringify(sets));
            loadSets();
        }

        if (e.target.classList.contains('play-btn')) {
            let index = e.target.getAttribute('data-index');
            localStorage.setItem('selectedSetIndex', index);
            window.location.href = 'play_set.html';
        }
    });

    loadSets();
});