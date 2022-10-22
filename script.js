// console.log("mangrio");

class Claculator {
  constructor(previousResultEl, currentResultEl) {
    this.previousResultEl = previousResultEl;
    this.currentResultEl = currentResultEl;
  }

  // add all clear function
  clear() {
    this.currentResult = "";
    this.previousResult = "";
    this.operation = undefined;
    // console.log(typeof this.previousResult);
  }
  // add function to delete one digit
  delete() {
    this.currentResult = this.currentResult.toString().slice(0, -1);
  }

  // add function to append number
  addNumber(number) {
    if (number === "." && this.currentResult.includes(".")) return;
    this.currentResult = this.currentResult + number.toString();
    // console.log(typeof number);
  }

  // add fumction to chise operation
  choseOperation(operation) {
    if (this.currentResult === "") return;
    if (this.previousResult !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousResult = this.currentResult;
    this.currentResult = "";
  }

  // add function for compute result
  compute() {
    let computation;

    const prev = parseFloat(this.previousResult);
    const curr = parseFloat(this.currentResult);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "÷":
        computation = prev / curr;
        break;
      default:
        return;
    }
    this.currentResult = computation;
    this.operation = undefined;
    this.previousResult = "";
  }

  // add function for display number and result
  updateDisplay() {
    this.currentResultEl.innerText = this.currentResult;
    // console.log(this.currentResultEl.innerText);

    this.previousResultEl.innerText = this.previousResult;

    // if (this.operation !== null) {
    // this.previousResultEl.innerText = `${this.previousResult} ${this.operation}`;

    // }
  }
}

const numberBtn = document.querySelectorAll("#number-btn");
const operationBtn = document.querySelectorAll("#operation-btn");
const allClearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete-btn");
const computeBtn = document.querySelector("#compute-btn");
const previousResultEl = document.querySelector(".Prev-result");
const currentResultEl = document.querySelector("#currentresult");

const claculator = new Claculator(previousResultEl, currentResultEl);

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    claculator.addNumber(button.innerText);
    claculator.updateDisplay();
    // console.log(button.innerText);
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    claculator.choseOperation(button.innerText);
    claculator.updateDisplay();
    // console.log(button.innerText);
  });
});

allClearBtn.addEventListener("click", () => {
  claculator.clear();
  claculator.updateDisplay();
  // console.log(button.innerText);
});

computeBtn.addEventListener("click", () => {
  claculator.compute();
  claculator.updateDisplay();
});
deleteBtn.addEventListener("click", () => {
  claculator.delete();
  claculator.updateDisplay();
});
