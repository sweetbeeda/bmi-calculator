const btn = document.querySelector(".btn");
btn.addEventListener(`click`, () => {
  const userInputHeight = Number(document.querySelector(".user-height").value);
  const userInputWeight = Number(document.querySelector(".user-weight").value);
  const reuslt = document.querySelector(".result");
  let newValue;
  newValue = userInputHeight / userInputWeight;
  reuslt.innerHTML = newValue;
});
const resultBtn = document.getElementById("resultButton");
resultBtn.addEventListener("click", () => {
  btn.style.border="3px solid grey";
});
