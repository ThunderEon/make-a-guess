const btn = document.querySelector("button");
let input = document.querySelector("input[type=number]");
let result = document.querySelector(".result");
let rand;
window.addEventListener("load", () => {
  rand = Math.floor(Math.random() * 20);
});

btn.addEventListener("click", () => {
  if (input.value) {
    userGuess();
    input.value = "";
    input.focus();
  } else {
    alert("Insert a Number");
  }
});

function userGuess() {
  let value = input.value;
  Number(value) < 1 || Number(value) > 20
    ? alert("Not In Range")
    : entryValue();

  function entryValue() {
    let diffrence = Number(value) - rand;
    if (diffrence > 0) {
      result.textContent = "too long";
    } else if (diffrence < 0) {
      result.textContent = "too short";
    } else {
      alert(`you won the game\nCorrect Number Was ${input.value}`);
      result.innerHTML = "you think your guess is right?";
      window.location.reload();
    }
  }
}
