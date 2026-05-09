const listMobile = document.getElementById("list-mobile");
const menuMobile = document.getElementById("menu-mobile");
const closeBtn = document.getElementById("close-btn");

listMobile.addEventListener("click", function() {
  menuMobile.classList.add("show-menu");
});

closeBtn.addEventListener("click",function() {
    menuMobile.classList.remove("show-menu")
})
