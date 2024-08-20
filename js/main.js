var nav_links = document.querySelector(".links");

function OPen_close_Menu() {
    nav_links.classList.toggle("active")

    console.log("reda");
    
}
console.log("reda");


window.addEventListener("scroll" , ()=>{
    nav_links.classList.remove("active")


})