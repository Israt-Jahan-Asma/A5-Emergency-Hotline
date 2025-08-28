const heartCountSpan = document.getElementById('heart-count');
const heartButtons = document.querySelectorAll('.heart-button');

for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function () {
        let count = parseInt(heartCountSpan.innerText);
        count++;
        heartCountSpan.innerText = count;
    });
}