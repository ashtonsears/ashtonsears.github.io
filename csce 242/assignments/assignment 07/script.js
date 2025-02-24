const drawButton = document.getElementById("draw_stairs");
const climbButton = document.getElementById("climb_stairs");
const stairDiv = document.getElementById("stair_div");
const climberDiv = document.getElementById("climber_div");
const clinber = document.getElementById("climber");

//Function that draws a "staircase"/ladder with ten steps using a for-loop
const drawStairs = () => {
    stairDiv.innerHTML = "";
    
    for (let i = 0; i < 10; i++) {
        const stair = document.createElement("div");
        stair.classList.add("stair");
        stair.style.top = `${i * 100}px`;
        stairDiv.appendChild(stair);
    }

    climberDiv.classList.remove("hidden");
    climbButton.classList.remove("hidden");
    climber.style.bottom = "0px";
};

//Function that makes the climber climb the stairs
const climbStairs = () => {
    let step = 0;
    let isLeft = true;

    const climbInterval = setInterval(() => {
        if (step >= 8) {
            clearInterval(climbInterval);
            return;
        }

        if(step > 0)
        {
            climber.src = isLeft ? "images/right.png" : "images/left.png";
            isLeft = !isLeft;
        }
    
        climber.style.bottom = `${step * 100}px`;
        step++;
    }, 500);
};

drawButton.addEventListener("click", drawStairs);
climbButton.addEventListener("click", climbStairs);