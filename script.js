console.log("connect");
let show = false;
const downArrow = document.getElementById("down");
const upArrow = document.getElementById("up");
const showelectronicli = document.getElementById("showelectronicli");
const Electronic = () => {
  show ? (show = false) : (show = true);
  if (show) {
    upArrow.classList.remove("hidden");
    downArrow.classList.add("hidden");

    showelectronicli.classList.remove("hidden");
  } else {
    downArrow.classList.remove("hidden");
    upArrow.classList.add("hidden");
    showelectronicli.classList.add("hidden");
  }
};

document
  .getElementById("electronics")
  .addEventListener("mouseover", Electronic);

const mensFashion = document.getElementById("mens-fashion");

const Fashion = () => {};

const logo = document.getElementById("logo");

gsap.to(logo, {
  x: 100,
  duration: 4,
});

let submit=document.getElementById("submit");
submit.addEventListener("click",validateForm)
function validateForm(e) {
  e.preventDefault();
  let email=document.forms["myForm"]["email"].value
  console.log(email)
}

mensFashion.addEventListener("mouseover", Fashion);
