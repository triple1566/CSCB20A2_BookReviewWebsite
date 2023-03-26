//let isMobile = 0;

//menuVal.addEventListener()

// This is for dark mode
const changeModeButton = document.getElementById("change-mode");
changeModeButton.addEventListener("click", () => {
  const page = document.querySelector("body");
  page.classList.toggle("dark-mode");
});

const leftMenu = document.querySelector(".leftmenu");
const topMenu = document.querySelector(".menu");
function menuLoc(){
  if (window.innerWidth < 700) {
    leftMenu.style.display="none";
    topMenu.style.display="block";
  }
  if(window.innerWidth >= 700){
    leftMenu.style.display="block";
    topMenu.style.display="none";
  }
}
window.addEventListener("load", menuLoc);
window.addEventListener("resize", menuLoc);


// This is for admin
const adminUser = 'admin';
const adminPass = 'password';
const loginSubmitButton = document.querySelector('#login-submit');
if (loginSubmitButton) {
  loginSubmitButton.addEventListener("click", loginSubmit);  
}

function loginSubmit(){
  const user = document.querySelector('#username').value;
  const pass = document.querySelector('#password').value;

  if (username === adminUser && pass === adminPass) {
    window.location.href = 'admin.html';
  }
  else {
    alert('Welcome User, you are not admin!');
  }
}
