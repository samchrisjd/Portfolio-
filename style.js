// Red glowing cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});


// Smooth scrolling

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// Active navbar highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});
