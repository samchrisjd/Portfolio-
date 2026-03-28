# Ex01 Portfolio
## Date: 28-03-2026

## AIM
To create a Portfolio using HTML and CSS.

## ALGORITHM
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

## PROGRAM
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <h2 class="logo">Portfolio</h2>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="home" class="home">
        <h1>Hi, I'm <span>Mahir Hussain S</span></h1>
        <p>212223040109</p>
        <p>Web Developer | Student</p>
    </section>
    <section id="about" class="about">
        <h2>About Me</h2>
        <p>
        Hello! I’m <strong>Mahir Hussain S</strong>, a passionate and motivated student
        with a strong interest in web development. I enjoy designing and
        developing clean, user-friendly websites using modern web technologies.
    </p>

    <p>
        I am currently learning HTML, CSS, and JavaScript, and I focus on
        building responsive and visually appealing web pages. I like exploring
        new tools and improving my problem-solving skills through practical
        projects.
    </p>

    <p>
        My goal is to become a skilled full-stack web developer and contribute
        to real-world applications. I am always eager to learn, adapt, and grow
        in the field of web development.
    </p>
    </section>
    <section id="skills" class="skills">
        <h2>My Skills</h2>
        <ul>
            <li><strong>HTML</strong></li>
            <li><strong>CSS</STRONG></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>Python</strong></li>
            <li><strong>C Programming</strong></li>
        </ul>
    </section>
    <section id="projects" class="projects">
        <h2>Projects</h2>
        <div class="project-box">Portfolio Website</div>
        <div class="project-box">Student Management System</div>
        <div class="project-box">Simple Calculator</div>
    </section>
    <section id="contact" class="contact">
        <h2>Contact Me</h2>
        <p>Email: mahirhussain2710@gmail.com</p>
        <p>Github: mahirhussain2710.github</p>
        <p>Phone: 7708552052</p>
    </section>

    

</body>
</html>
```
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
}

body {
    background: rgb(158, 143, 3);
    color: rgb(0, 0, 0);
}

/* Navbar */
nav {
    background: #570303;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: rgb(242, 220, 220);
    text-decoration: none;
}

/* Home */
.home {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #000000, rgb(217, 224, 173));
    color: rgb(252, 249, 225);
}

.home span {
    color: rgb(243, 237, 191);
}

.home button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

/* Sections */
section {
    padding: 50px;
    text-align: center;
}

.skills ul {
    list-style: none;
}

.skills li {
    background: #eb0d0d;
    margin: 10px;
    padding: 10px;
}

/* Projects */
.projects {
    background: #e8e8ba;
}

.project-box {
    background: #ffffff;
    padding: 20px;
    margin: 10px;
    display: inline-block;
}

/* Contact */
.contact {
    background: #e60303;
    color: white;
}

/* Footer */
footer {
    background: black;
    color: white;
    text-align: center;
    padding: 10px;
}
```
## OUTPUT
<img width="1919" height="936" alt="Screenshot 2026-02-04 143830" src="https://github.com/user-attachments/assets/c943b45d-e0bb-4199-9d85-3d4523f2beff" />

## RESULT
The program for creating Portfolio using HTML and CSS is executed successfully.
