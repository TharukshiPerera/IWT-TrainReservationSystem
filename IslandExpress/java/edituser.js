/*const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customText = document.getElementById("custom-text");

costomBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    customTxt.innerHTML = "No file chosen yet !"
  }
});
*/

function changeForm() {
  var password = document.getElementById('password');
  var password1 = document.getElementById('password1');
  removeMassage();
  var valid = true;

  if (password.value.length < 8) {
    password.className = "wrong-input";
    password.nextElementSibling.innerHTML = "8 characters at least required";
    valid = false;
  }
  if (password.value != password1.value) {
    password1.className = "wrong-input";
    password1.nextElementSibling.innerHTML = "Password does not match with the above";
    valid = false;
  }

  return valid;
}

/*Remove Error masseges*/
function removeMassage() {
  var errorinput = document.querySelectorAll(".wrong-input");
  [].forEach.call(errorinput, function(el) {
    el.classList.remove("wrong-input");
  });

  var errorparagraph = document.querySelectorAll(".error");
  [].forEach.call(errorparagraph, function(el) {
    el.innerHTML = " ";
  });
}
