document.addEventListener('DOMContentLoaded', function () {
    const heartButton = document.getElementById('heart');
    const heartText = document.querySelector('.heart-text');
    const message = document.getElementById('message');
    const greeting = document.getElementById('greeting');
    const heartsBg = document.querySelector('.hearts-bg');

    heartButton.addEventListener('click', function () {
        greeting.style.display = 'none';
        heartsBg.style.opacity = '1';
        heartButton.style.animation = 'fadeOut 1s forwards'; // Uruchomienie animacji znikania serca
        setTimeout(function() {
            heartButton.style.display = 'none';
            heartText.style.display = 'none';
            message.classList.add('show');
        }, 1000); // Czas trwania animacji
    });
});
