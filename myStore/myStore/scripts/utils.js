function setUsername() {
  var username = localStorage.getItem("user");
  var usernameField = document.getElementById("username");
  usernameField.innerText = "Hello, " + username;
}
function placeOrder() {
  var list = localStorage.getItem("products");
  if (list === "") {
    alert("You have no Items no cart");
  } else {
    localStorage.setItem("products", "");
    window.location = "./orderComplete.html";
  }
}

setUsername();
