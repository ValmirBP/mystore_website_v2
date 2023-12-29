//  Login verifications
function validateForm(e) {
  //  e.preventDefault();
  //  e.stopPropagation();
  var username = document.forms["login"]["username"].value;
  var password = document.forms["login"]["password"].value;
  var usernameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var validatePassword = "ProjectJS1!";

  if (!usernameRegex.test(username)) {
    alert("Please enter a valid email.");
    // return false;  *** Nao precisa retornar nada depois de um alert
  } else if (!password) {
    alert(
      "Please enter a valid password. \nThe password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number."
    );
    // return false;
  } else if (password !== validatePassword) {
    alert(
      "Please enter the password that is on file MYSTORE/scripts/login.js, variable 'validatePassword'."
    );
  } else {
    localStorage.setItem("user", username);
    window.location = "./home.html";
  }
  return false;
}
