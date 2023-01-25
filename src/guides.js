const guides = document.querySelectorAll(".guides");
const description = document.querySelectorAll(".description");

const guga = document.querySelector("#guga");
const mariana = document.querySelector("#mariana");
const baljeet = document.querySelector("#baljeet");
const carol = document.querySelector("#carol");
const bea = document.querySelector("#bea");
const bernardo = document.querySelector("#bernardo");
const castelo = document.querySelector("#castelo");

guides.forEach((guide) => {
  guide.addEventListener("mouseover", () => {
    removeActiveClasses();
    guide.classList.add("big");
  });
});
function removeActiveClasses() {
  guides.forEach((guide) => {
    guide.classList.remove("big");
  });
}

guides.forEach((guide) => {
  guide.addEventListener("mouseout", () => {
    removeActiveClasses();
  });
});
