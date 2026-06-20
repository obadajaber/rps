console.log("hello ");
let sliderTrack = document.getElementById("slider-track");

let prevBtn = document.getElementById("prev-btn")
let nextBtn = document.getElementById("next-btn")
let playBtn = document.getElementById("play-btn");

let dot0 = document.getElementById("dot-0")
let dot1 = document.getElementById("dot-1")
let dot2 = document.getElementById("dot-2");

let playerScoreText = document.getElementById("player-score")
let computerScoreText = document.getElementById("computer-score")
let roundNumberText = document.getElementById("round-number");

let roundResult = document.getElementById("round-result")
let roundResultText = document.getElementById("round-result-text");

let playerBattleImg = document.getElementById("player-battle-img")
let computerBattleImg = document.getElementById("computer-battle-img");

let playerPlaceholder = document.getElementById("player-placeholder")
let computerPlaceholder = document.getElementById("computer-placeholder");

let modalBackdrop = document.getElementById("modal-backdrop")
let modalIcon = document.getElementById("modal-icon")
let modalTitle = document.getElementById("modal-title")
let modalSup = document.getElementById("modal-sup")
let modalPlayerScore = document.getElementById("modal-player-score")
let modalComputerScore = document.getElementById("modal-computer-score")
let playAgainBtn = document.getElementById("play-again-btn");

let currentSlide = 0;
let playerScore = 0;
let computercore = 0;
let roundNumber = 1;

let choices = ["rock", "paper", "scissors"];

let images = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png"
};

function updateDots() {
    dot0.classList.remove("active");
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    if (currentSlide === 0) {
        dot0.classList.add("active");
    } else if (currentSlide === 1) {
        dot1.classList.add("active");
    } else {
        dot2.classList.add("active");
    }
}

function moveSlider(){
if (currentSlide === 0){
    sliderTrack.style.transform = "translateX(0%)";
}else if (currentSlide === 1){
    sliderTrack.style.transform = "translateX(-33.33%)";
}else if (currentSlide === 2){
    sliderTrack.style.transform = "translateX(-66.66%)";
}
updateDots();
}

nextBtn.addEventListener("click", function (){
currentSlide++;
if(currentSlide > 2){
    currentSlide = 0;
}
moveSlider();
});

prevBtn.addEventListener("click",function(){
currentSlide--;
if(currentSlide < 0){
    currentSlide = 2;
}
moveSlider();
});

dot0.addEventListener("click", function(){
currentSlide = 0;
moveSlider();
});

dot1.addEventListener("click", function(){
    currentSlide = 1;
    moveSlider();
});

dot2.addEventListener("click", function(){
currentSlide = 2;
moveSlider();
});

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function checkWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "tie";
    }

    if (playerChoice === "rock" && computerChoice === "scissors"){
        return "player";
    }

    if (playerChoice === "paper" && computerChoice === "rock"){
        return "player";
    }

    if (playerChoice === "scissors" && computerChoice === "paper"){
        return "player";
    }
return "computer";
}

function showBattleImages(playerChoice, computerChoice){
    playerBattleImg.src = images[playerChoice];
    computerBattleImg.src = images[computerChoice];

    playerBattleImg.alt = playerChoice;
    computerBattleImg.alt = computerChoice;

    playerBattleImg.classList.remove("hidden");
    computerBattleImg.classList.remove("hidden");

    playerBattleImg.classList.add("show");
    computerBattleImg.classList.add("show");

    playerBattleImg.classList.add("hidden");
    computerBattleImg.classList.add("hidden");
}