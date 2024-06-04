// const images = document.querySelectorAll(".plus-img");
// images.forEach(function (image) {
//   image.addEventListener("click", function () {
//     if (image.src.includes("icon-plus.svg")) {
//       image.src = "/images/icon-minus.svg";
//     } else {
//       image.src = "/images/icon-plus.svg";
//     }
//   });
// });

const plus = document.getElementById("plus-img1");
const answer1 = document.getElementById("answer1");

plus.addEventListener("click", function () {
  if (plus.src.includes("icon-plus.svg")) {
    plus.src = "images/icon-minus.svg";
  } else {
    plus.src = "images/icon-plus.svg";
  }

  handleAnswer();
});

function handleAnswer() {
  if (plus.src.includes("icon-minus.svg")) {
    answer1.style.display = "block";
  } else {
    answer1.style.display = "none";
  }
}
