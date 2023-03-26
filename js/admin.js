// This is for admin
const adminUsername = 'admin';
const adminPassword = 'password';
const loginSubmitButton = document.querySelector('#login-submit');
if (loginSubmitButton) {
  loginSubmitButton.addEventListener("click", loginSubmit);  
}

function loginSubmit(){
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === adminUsername && password === adminPassword) {
    window.location.href = 'admin.html';
  }
  else {
    alert('Welcome User, you are not admin!');
  }
}

$(function() {
        $("#imageIDs").sortable({
            update: function(event, ui) {
                    getImageIDs();
                } //end update       
        });
    });
 
    function getImageIDs() {
        var values = [];
        $('.listitemClass').each(function(index) {
            values.push($(this).attr("id")
                        .replace("imageNo", ""));
        });
        $('#output-values').val(values);
    }

const leftMenu = document.querySelector(".leftmenu");
const topMenu = document.querySelector(".menu");
function menuLoc(){
  if (window.innerWidth < 600) {
    leftMenu.style.display="none";
    topMenu.style.display="block";
  }
  if(window.innerWidth >= 600){
    leftMenu.style.display="block";
    topMenu.style.display="none";
  }
}
window.addEventListener("load", menuLoc);
window.addEventListener("resize", menuLoc);


