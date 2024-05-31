document.addEventListener('DOMContentLoaded', function () {
    const present = document.getElementById('present');
    const message = document.getElementById('message');
    const greeting = document.getElementById('greeting');
    const heartsBg = document.querySelector('.hearts-bg');

    present.addEventListener('click', function () {
        present.classList.add('opened');
        greeting.style.display = 'none';
        setTimeout(function() {
            present.style.display = 'none';
            message.classList.add('show');
            heartsBg.style.opacity = '1';
        }, 500);
    });
});
