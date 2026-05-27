
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('bgMusic');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
if(!isPlaying){
music.play();
musicBtn.innerText='⏸ Pause Music';
isPlaying=true;
}else{
music.pause();
musicBtn.innerText='🎵 Play Music';
isPlaying=false;
}
});

function copyPrompt(button){
const text = button.parentElement.querySelector('p').innerText;
navigator.clipboard.writeText(text);
button.innerText='Copied!';
setTimeout(()=>{
button.innerText='Copy Prompt';
},2000);
}
