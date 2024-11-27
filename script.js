const rat = document.getElementById("rat");
const trap = document.getElementById("trap");
const message = document.getElementById("message");

let isJumping = false;
let gameRunning = true;
let score = 0;

function jump() {
  if (isJumping) return;
  isJumping = true;
  rat.style.transition = "bottom 0.5s";
  rat.style.bottom = "400px";

  setTimeout(() => {
    rat.style.bottom = "30px";
    setTimeout(() => (isJumping = false), 300);
  }, 300);
}

function checkCollision() {
  const ratRect = rat.getBoundingClientRect();
  const trapRect = trap.getBoundingClientRect();

  if (
    ratRect.left < trapRect.right &&
    ratRect.right > trapRect.left &&
    ratRect.bottom > trapRect.top
  ) {
    return true;
  }
  return false;
}

function resetGame() {
  trap.style.animation = "none";
  trap.style.right = "-50px";
  message.style.display = "none";
  score = 0;
  gameRunning = true;
  startGame();
}

function startGame() {
  trap.style.animation = "move-trap 2s linear infinite";
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && gameRunning) {
    jump();
  } else if (e.code === "Enter" && !gameRunning) {
    resetGame();
  }
});

const gameLoop = setInterval(() => {
  if (gameRunning && checkCollision()) {
    gameRunning = false;
    message.innerHTML = `<p style="font-size: 24px;">
                          Try <span style="font-style: italic; font-weight: bold;">again</span>, 
                          fail <span style="font-style: italic; font-weight: bold;">again</span>, 
                          fail <span style="font-style: italic; font-weight: bold;">better</span>.
                        </p>
                        <p style="font-size: 18px;">Click enter to restart</p>`;
    message.style.display = "block";
    trap.style.animation = "none";
  } else if (gameRunning) {
    const trapRect = trap.getBoundingClientRect();
    const ratRect = rat.getBoundingClientRect();

    // Check if the trap has passed the rat and is no longer visible
    if (trapRect.right < ratRect.left && trap.style.animation !== "none") {
      score++;
      trap.style.animation = "none"; // Temporarily stop the trap to avoid double scoring
      setTimeout(() => (trap.style.animation = "move-trap 2s linear infinite"), 0); // Restart the trap movement
    }
  }
}, 10);

startGame();
