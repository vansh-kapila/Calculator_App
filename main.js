const buttonWrap = document.getElementById("buttonWrap");
const displayScreen = document.getElementById("displayScreen");
const allBtns = document.querySelectorAll(".calculator-btn");

let numbers = "0123456789";

let mathOperators = "-+*/";

let currentEquationNum = "";

let currentSequence = "";

let previousSymbol = "";

buttonWrap.addEventListener("click", (e) => {

    let pressedSymbol = e.target.innerText;

    if (pressedSymbol.length === 1) {
        if (pressedSymbol === "-" && currentEquationNum === "") {
            currentSequence += pressedSymbol;
            currentEquationNum += pressedSymbol;
            displayScreen.innerText = currentEquationNum;
        }

        else if (
            pressedSymbol === "." &&
            previousSymbol !== "." &&
            currentEquationNum.length >= 1 &&
            !currentSequence.includes(".")
        ) {
            currentSequence += pressedSymbol;
            currentEquationNum += pressedSymbol;
            displayScreen.innerText = currentEquationNum;
        }

        else if (numbers.includes(pressedSymbol)) {
            currentSequence += pressedSymbol;
            currentEquationNum += pressedSymbol;
            displayScreen.innerText = currentEquationNum;
        }
        else if (
            mathOperators.includes(pressedSymbol) &&
            currentEquationNum.length >= 1
        ) {
            if (
                currentEquationNum !== "-" &&
                currentEquationNum !== "-." &&
                currentEquationNum !== "."
            ) {
                if (previousSymbol !== "" && mathOperators.includes(previousSymbol)) {
                    currentSequence = "";
                    currentEquationNum = currentEquationNum.slice(0, -1);
                    currentEquationNum += pressedSymbol;
                    displayScreen.innerText = currentEquationNum;
                } else {
                    currentSequence = "";
                    currentEquationNum += pressedSymbol;
                    displayScreen.innerText = currentEquationNum;
                }
            }
        }
        else if (pressedSymbol === "=") {
            currentEquationNum = Function("return " + currentEquationNum)().toString();
            displayScreen.innerText = currentEquationNum;
            currentSequence = currentEquationNum;
        }
        else if (pressedSymbol === "C") {
            displayScreen.innerText = "";
            currentSequence = "";
            currentEquationNum = "";
            previousSymbol = "";
        }

    }
    else if (pressedSymbol === "DEL") {
        currentEquationNum = currentEquationNum.slice(0, -1);
        displayScreen.innerText = currentEquationNum;
        currentSequence = currentSequence.slice(0, -1);
    }
    else if (pressedSymbol === "AC") {
        displayScreen.innerText = "";
        currentSequence = "";
        currentEquationNum = "";
        previousSymbol = "";
    }
    if (
        pressedSymbol.length === 1 &&
        pressedSymbol !== "=" &&
        pressedSymbol !== "C"
    ) {
        previousSymbol = pressedSymbol;
    }
});

