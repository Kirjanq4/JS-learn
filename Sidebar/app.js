const sidebar = document.querySelector(".sidebar");
const showMenuBtn = document.querySelector(".sidebar-toggle");
const closeMenuBtn = document.querySelector(".close-btn");

showMenuBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
})

closeMenuBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})