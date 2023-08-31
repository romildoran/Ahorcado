document.addEventListener("DOMContentLoaded", function () {

    const wordContainer = document.getElementById("wordContainer");
    const startButton = document.getElementById("startButton");
    const usedLettersElement = document.getElementById("usedLetters");

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.canvas.width = 0;
    ctx.canvas.height = 0;

    const bodyParts = [
        [4, 2, 1, 1],
        [4, 3, 2, 1],
        [3, 5, 1, 1],
        [5, 5, 1, 1],
        [5, 3, 1, 1],
    ];

    let selectedWord;
    let usedLetters;
    let mistakes;
    let hits;

    const drawHangMan = () => {
        ctx.canvas.width = 120;
        ctx.canvas.height = 160;
        ctx.scale(20, 20);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#d95d39";

        ctx.fillRect(0, 7, 4, 1);
        ctx.fillRect(1, 0, 1, 8);
        ctx.fillRect(2, 0, 3, 1);
        ctx.fillRect(4, 1, 1, 1);
    };

    const startGame = () => {
        usedLetters = [];
        mistakes = 0;
        hits = 0;
        wordContainer.innerHTML = "";
        usedLettersElement.innerHTML = "";
        startButton.style.display = "none";

        drawHangMan();
    };

    startButton.addEventListener("click", startGame);

});