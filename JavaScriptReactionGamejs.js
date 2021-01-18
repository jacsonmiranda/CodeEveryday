const container = document.querySelector(".container");
const startGame = document.querySelector(".startGame");
const output = document.querySelector(".output");
const scoreArea = document.querySelector(".score");
const reset = document.querySelector(".reset");
let player = {
    score: 0
};
startGame.addEventListener("click", function () {
    startGame.style.display = "none";
    reset.style.display = "block";
    let ranTime = Math.random() * 2000 + 1000;
    setTimeout(makeItem, ranTime);
})

function makeItem() {
    let boundary = container.getBoundingClientRect();
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.random() * (boundary.width - 90) + "px";
    div.style.top = Math.random() * (boundary.height - 90) + "px";
    div.style.width = Math.random() * 50 + 10 + "px";
    div.style.height = Math.random() * 50 + 10 + "px";
    div.style.borderRadius = "10%";
    div.style.cursor = "pointer";
    div.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
    div.style.border = "1px solid black";
    div.startTime = Date.now();
    div.addEventListener("click", function () {
        let endTime = Date.now();
        let diff = (endTime - div.startTime) / 1000;
        output.innerHTML = "Clicked in " + diff + "seconds";
        //clearTimeout(div.timer);
        let sum = parseInt(scoreArea.innerHTML);
        if (diff < 1) {
            sum += 1;
        } else {
            if (sum > 0)
                sum -= 1;
        }
        scoreArea.innerHTML = sum;
        container.removeChild(div);
    });
    reset.addEventListener("click", function () {
        startGame.style.display = "block";
        reset.style.display = "none";
        clearTimeout(div.timer);
        container.removeChild(div);
        scoreArea.innerHTML = 0;
        output.innerHTML = ""
    });
    div.timer = setTimeout(function () {
        makeItem();
    }, 1000);

    container.appendChild(div);
}