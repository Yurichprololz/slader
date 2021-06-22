const downButton = document.body.querySelector(".down-button");
const upButton = document.body.querySelector(".up-button");

const leftSlades = document.body.querySelector(".sidebar");
const rightSlades = document.body.querySelector(".main-slide");
countSlade = rightSlades.querySelectorAll("div").length;

leftSlades.style.top = `-${(countSlade - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlades("up"));
downButton.addEventListener("click", () => changeSlades("down"));

const clHeight = document.querySelector(".container").clientHeight;

let count = 0;

function changeSlades(vector) {
  switch (vector) {
    case "up":
      count++;
      if (count === countSlade) count = 0;
      console.log(count);
      break;
    case "down":
      count--;
      if (count < 0) count = countSlade - 1;
      console.log(count);
      break;
  }

  leftSlades.style.transform = `translateY(${count * clHeight}px)`;
  rightSlades.style.transform = `translateY(-${count * clHeight}px)`;
}
