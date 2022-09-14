// Variables
const alertWin = document.getElementById("alertWinMsg");
const snakeBtn = document.getElementById("snake");
const waterBtn = document.getElementById("water");
const gunBtn = document.getElementById("gun");
const genScore = document.getElementById("genScore");
let chances = 0;
let score = 0;
let userCh;
let compCh = Math.floor(Math.random() * 3 + 1);

// Main Logic
switch (compCh) {
  case 1:
    compCh = "s";
    break;
  case 2:
    compCh = "w";
    break;
  case 3:
    compCh = "g";
    break;
}
console.log(compCh);
const gameAlert = (dOrS, msg) => {
  if (dOrS == "d") {
    alertWin.className = "danger";
  } else if (dOrS == "s") {
    alertWin.className = "success";
  }
  alertWin.innerHTML = `<span id="alertMsg">${msg}</span>
  <span id="alertDismiss">x</span>`;
  alertWin.style.display = "flex";
  document.getElementById("alertDismiss").addEventListener("click", () => {
    alertWin.style.display = "none";
  });
};

const mainLog = () => {
  if (userCh == compCh) {
    gameAlert("s", "It's draw!! You and computer choosed same.");
  } else if (userCh == "s" && compCh == "w") {
    gameAlert("s", "You win!! computer choosed WATER.");
    score++;
  } else if (userCh == "s" && compCh == "g") {
    gameAlert("d", "Oh no! Computer choosed GUN, so it is the winner...");
  } else if (userCh == "w" && compCh == "s") {
    gameAlert("d", "Oh no! Computer choosed SNAKE, so it is the winner...");
  } else if (userCh == "w" && compCh == "g") {
    gameAlert("s", "You win!! computer choosed GUN.");
    score++;
  } else if (userCh == "g" && compCh == "s") {
    gameAlert("s", "You win!! computer choosed SNAKE.");
    score++;
  } else if (userCh == "g" && compCh == "w") {
    gameAlert("s", "You win!! computer choosed WATER.");
    score++;
  }
  console.log(compCh, userCh);
  // Generating a new random choice for the computer
  compCh = Math.floor(Math.random() * 3 + 1);
  switch (compCh) {
    case 1:
      compCh = "s";
      break;
    case 2:
      compCh = "w";
      break;
    case 3:
      compCh = "g";
      break;
  }

  chances++;
};

// Event Listeners
snakeBtn.addEventListener("click", () => {
  userCh = "s";
  alertWin.style.display = "none";
  mainLog();
});

waterBtn.addEventListener("click", () => {
  userCh = "w";
  alertWin.style.display = "none";
  mainLog();
});

gunBtn.addEventListener("click", () => {
  userCh = "g";
  alertWin.style.display = "none";
  mainLog();
});

genScore.addEventListener("click", () => {
  gameAlert("s", `You scored ${score} in ${chances} chances.`);
  chances = 0;
  score = 0;
});
