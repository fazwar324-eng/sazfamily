// LOADING SCREEN
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1800);
});


// SMOOTH SCROLL EFFECT
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });
});

console.log("SazFamily Premium Loaded");
function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}
const reveal = document.querySelectorAll(".glass");

window.addEventListener("scroll", () => {

  reveal.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      item.classList.add("show");
    }

  });

});
const music = document.getElementById("bg-music");

function toggleMusic(){

  if(music.paused){
    music.play();
  } else {
    music.pause();
  }

}
