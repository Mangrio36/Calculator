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
  }
  // add function to delete one digit
  delete() {}

  // add function to append number
  addNumber(number) {
    this.currentResult = this.currentResult + number.toString();
    // console.log(typeof number);
  }

  // add fumction to chise operation
  choseOperation(operation) {}

  // add function for compute result
  compute() {}

  // add function for display number and result
  updateDisplay() {
    this.currentResultEl.innerText = this.currentResult;
    // console.log(this.currentResultEl.innerText);
  }
}

const numberBtn = document.querySelectorAll("#number-btn");
const operationBtn = document.querySelectorAll("#operation-btn");
const allClearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete-btn");
const computeBtn = document.querySelector("#compute-btn");
const previousResultEl = document.querySelector("#previousresult");
const currentResultEl = document.querySelector("#currentresult");

const claculator = new Claculator(previousResultEl, currentResultEl);

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    claculator.addNumber(button.innerText);
    claculator.updateDisplay();
    console.log(button.innerText);
  });
});
