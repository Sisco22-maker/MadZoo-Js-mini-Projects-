const animals = document.querySelectorAll(".animal");
const container = document.querySelector(".container");
const shotSound = document.querySelector(".shot-sound");
let gameScore = document.querySelector(".score");
let gameScoreCounter = 0;
let startGameId = null;
const animalsPathes = [
  "../images/RunningDonky.gif",
  "../images/RunningGoat.gif",
  "../images/RunningGorilla.gif",
  "../images/RunningUninCorn.gif",
  "../images/FlyingBirdTuning.gif",
  "../images/RunnigLion.gif",
  "../images/RunningHourse.gif",
  "../images/RunningTiger.gif",
  "..//images/bird.gif",
];
const animalsLines = [
  "line-one-animal",
  "line-two-animal",
  "line-three-animal",
  "line-four-animal",
];
//Start The application logic
const createAnimal = function () {
  const animalsCount = animalsPathes.length;
  const animalType = Math.trunc(Math.random() * animalsCount);
  const animalLine = Math.trunc(Math.random() * 4);
  const animalImage = document.createElement("img");
  animalImage.src = animalsPathes[animalType];
  animalImage.classList.add(
    "animal",
    "gain-animation",
    animalsLines[animalLine]
  );
  container.appendChild(animalImage);
};
const shotAnimal = function (animal) {
  animal.style.display = "none";
};
container.addEventListener("click", function (event) {
  const eventTarget = event.target;
  const shotTargetName = eventTarget.nodeName.toLowerCase();
  if (shotTargetName === "img") {
    gameScoreCounter += 1;
    gameScore.textContent = `⭐️ SCORE ${gameScoreCounter}`;
    shotAnimal(eventTarget);
  }
  shotSound.play();
});
//Fetch game settings elements
const togelSettingsMenue = document.querySelector(".togel-settings");
const startButton = document.querySelector(".start-game");
const easyLevel = document.querySelector(".easy");
const meduimLevel = document.querySelector(".meduim");
const hardLevel = document.querySelector(".hard");
const levelIcon = document.querySelectorAll(".level-icon");
let hasStarted = false;

const setLevelEvent = function () {
  for (let i = 0; i < levelIcon.length; i++) {
    levelIcon[i].addEventListener("click", function (event) {
      // event.target.style.backgroundColor;
      const eventTarget = event.target;
      const eventTargetClasses = eventTarget.classList;
      if (eventTargetClasses.contains("easy")) {
        eventTargetClasses.add("easy-level");
      } else if (eventTargetClasses.contains("meduim")) {
        eventTargetClasses.add("meduim-level");
      } else if (eventTargetClasses.contains("hard")) {
        eventTargetClasses.add("hard-level");
      }
    });
  }
};
startButton.addEventListener("click", function () {
  if (hasStarted === false) {
    hasStarted = true;
    startGameId = setInterval(init, 2000);
  } else {
    hasStarted = false;
    clearInterval(startGameId);
  }
  console.log("clicked");
});
const init = function () {
  createAnimal();
};
setLevelEvent();
