let toggleNavBool = false;
const mM = document.getElementById("mobile-menu");

let hideNavOnPrint = () => {
  mM.style.display = "none";
};
let toggleNav = () => {
  console.log("toggleNav", toggleNavBool);
  if (toggleNavBool) {
    mM.style.display = "none";
  } else {
    mM.style.display = "block";
  }
  toggleNavBool = !toggleNavBool;
};

hideNavOnPrint();
