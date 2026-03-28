# Ex01 Portfolio
## Date: 28.03.2026

## AIM :
To create a Portfolio using HTML and CSS.

## ALGORITHM :
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for introduction, about, projects, and contact details.

### STEP 5
Define global styles for fonts, colors, and layout.

### STEP 6
Style the header, navigation bar, and sections.

### STEP 7
Use Flexbox or CSS Grid for layout design.

### STEP 8
Add hover effects and transitions for interactivity.

### STEP 9
Add Images and Media.

### STEP 10
Use optimized images for a professional look.

### STEP 11
Open the HTML file in a browser to check layout and functionality.

### STEP 12
Fix styling issues and refine content placement.

### STEP 13
Deploy the Portfolio.

### STEP 14
Upload to GitHub Pages for free hosting.

## PROGRAM :
## index.html
```
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Shreedhar | Portfolio</title>

<link rel="stylesheet" href="style.css">

<script src="script.js" defer></script>

<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

</head>

<body>

<!-- Glowing Cursor -->
<div class="cursor"></div>

<header>

<nav class="navbar">

<div class="logo">SHREEDHAR</div>

<ul class="nav-links">

<li><a href="#home" class="active">Home</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#education">Education</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

</nav>

</header>


<!-- Hero Section -->

<section id="home" class="hero">

<div class="hero-content">

<h1>Hi, It's <span>Shree</span></h1>

<h2>I'm a <span class="highlight">Software Developer</span></h2>

<p>
Passionate developer building modern websites and applications.
</p>

<div class="social-icons">

<a href="#"><i class="ri-linkedin-fill"></i></a>
<a href="#"><i class="ri-github-fill"></i></a>
<a href="#"><i class="ri-twitter-x-fill"></i></a>
<a href="#"><i class="ri-instagram-line"></i></a>

</div>

<a href="#contact" class="btn">Hire Me</a>

</div>

<div class="hero-img">

<img src="pic.png" alt="profile">

</div>

</section>


<section id="services" class="section">

<h2>Services</h2>

<div class="cards">

<div class="card">Web Development</div>
<div class="card">UI Design</div>
<div class="card">App Development</div>

</div>

</section>


<section id="skills" class="section">

<h2>Skills</h2>

<div class="cards">

<div class="card">HTML</div>
<div class="card">CSS</div>
<div class="card">JavaScript</div>
<div class="card">React</div>

</div>

</section>


<section id="education" class="section">

<h2>Education</h2>

<p>Bachelor Degree in Computer Science</p>

</section>


<section id="experience" class="section">

<h2>Experience</h2>

<p>Frontend Developer Projects and Internships</p>

</section>


<section id="contact" class="section">

<h2>Contact</h2>

<p>Email: shreedhar@example.com</p>

</section>

</body>

</html>
```
## style.css
```
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
cursor:none;
}

body{
background:#000;
color:#fff;
overflow-x:hidden;
}

/* 🔴 Glowing Cursor */

.cursor{
width:18px;
height:18px;
border-radius:50%;
background:#e50914;
position:fixed;
pointer-events:none;
transform:translate(-50%,-50%);
box-shadow:
0 0 10px #e50914,
0 0 20px #e50914,
0 0 40px #e50914,
0 0 80px #e50914;
z-index:999;
transition:transform 0.1s ease;
}


/* Navbar */

header{
position:fixed;
top:0;
width:100%;
background:#000;
padding:15px 10%;
z-index:100;
border-bottom:1px solid #111;
}

.navbar{
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-size:28px;
font-weight:700;
color:#e50914;
letter-spacing:2px;
}

.nav-links{
list-style:none;
display:flex;
gap:25px;
}

.nav-links a{
text-decoration:none;
color:white;
font-size:16px;
transition:0.3s;
}

.nav-links a:hover{
color:#e50914;
}


/* Hero Section */

.hero{
height:100vh;
display:flex;
justify-content:space-between;
align-items:center;
padding:120px 10%;
}

.hero-content{
max-width:600px;
}

.hero-content h1{
font-size:55px;
margin-bottom:10px;
}

.hero-content span{
color:#e50914;
}

.hero-content h2{
font-size:30px;
margin-bottom:15px;
}

.highlight{
color:#e50914;
}

.hero-content p{
color:#ccc;
line-height:1.6;
margin-bottom:25px;
}


/* Social Icons */

.social-icons a{
color:white;
font-size:22px;
margin-right:15px;
transition:0.3s;
}

.social-icons a:hover{
color:#e50914;
transform:scale(1.2);
}


/* Red Button */

.btn{
background:#e50914;
color:white;
padding:12px 28px;
border-radius:4px;
text-decoration:none;
font-weight:600;
transition:0.3s;
}

.btn:hover{
background:#b20710;
box-shadow:0 0 20px #e50914;
transform:scale(1.05);
}


/* Profile Image */

.hero-img img{
width:320px;
border-radius:10px;
box-shadow:0 0 30px rgba(229,9,20,0.7);
}


/* Sections */

.section{
padding:100px 10%;
text-align:center;
}

.section h2{
font-size:40px;
margin-bottom:40px;
color:#e50914;
}


/* Movie Style Cards */

.cards{
display:flex;
justify-content:center;
gap:25px;
flex-wrap:wrap;
}

.card{
background:#111;
padding:40px 30px;
border-radius:6px;
width:220px;
border:1px solid #222;
transition:0.4s;
position:relative;
overflow:hidden;
}

.card::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:linear-gradient(120deg,transparent,#e50914,transparent);
transition:0.6s;
}

.card:hover::before{
left:100%;
}

.card:hover{
transform:scale(1.08);
box-shadow:0 0 25px #e50914;
}


/* Responsive */

@media(max-width:900px){

.hero{
flex-direction:column;
text-align:center;
}

.hero-img img{
margin-top:30px;
width:220px;
}

.nav-links{
display:none;
}

}

```
## style.js
```
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
```

## OUTPUT :
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/5137ee6e-a833-43c2-bbfc-e24817048d9e" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/26e0bff3-4c59-4478-90ad-74c482757360" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/7993bca1-92b1-4ca4-9a63-1fc42bb8e04f" />







## RESULT :
The program for creating Portfolio using HTML and CSS is executed successfully.
