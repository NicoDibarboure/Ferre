document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  var MenuItems = document.getElementById("MenuItems");

  MenuItems.style.maxHeight = "0px";

  window.menuToggle = function menuToggle() {
    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  };

  var LoginForm = document.getElementById("LoginForm");
  var RegForm = document.getElementById("RegForm");
  var Indicator = document.getElementById("Indicator");

  window.register = function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
  };

  window.login = function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
  };

  // Código adicional para manejar imágenes del producto
  var productImg = document.getElementById("product-img");
  var smallImg = document.getElementsByClassName("small-img");

  if (smallImg.length > 0 && productImg) {
    smallImg[0].onclick = function () {
      productImg.src = smallImg[0].src;
    };
    smallImg[1].onclick = function () {
      productImg.src = smallImg[1].src;
    };
    smallImg[2].onclick = function () {
      productImg.src = smallImg[2].src;
    };
    smallImg[3].onclick = function () {
      productImg.src = smallImg[3].src;
    };
  }
});
