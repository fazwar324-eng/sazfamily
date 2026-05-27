
const music = document.getElementById('bgMusic');
const button = document.getElementById('musicBtn');

button.addEventListener('click', () => {
    music.play();
    button.innerHTML = '🎵 Music Playing';
});
