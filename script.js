const questions = document.querySelectorAll('.question');


questions.forEach((question) => {
    question.addEventListener('click', (e) => {
        if (e.target.parentElement.classList.contains('question-button')) {
            questions.forEach((item) => {
                if (item === question) {
                    item.classList.toggle('show-answer');
                    const svg = item.querySelector('.svg-switch');
                        if (item.classList.contains('show-answer')) {
                            svg.src = "assets/images/icon-minus.svg";
                        } else {
                            svg.src = "assets/images/icon-plus.svg";
                        }
                } 
                else {
                    item.classList.remove('show-answer');
                    const svg = item.querySelector('.svg-switch');
                    svg.src = "assets/images/icon-plus.svg";
                }
            })
        } 
    })
})