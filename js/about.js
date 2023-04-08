const projects = document.getElementById('projects');
const resume = document.getElementById('resume');
const github = document.getElementById('github');
const linkedIn = document.getElementById('linkedin');
const home = document.getElementById('home');

resume.addEventListener("click", () => {
    window.open("img/Resume.pdf");
})

projects.addEventListener("click", () => {
    location.href = "projects.html";
})

github.addEventListener("click", () => {
    window.open("https://github.com/m6english");
});


linkedIn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/matthew-english-b46848180/");
});

home.addEventListener("click", () => {
    location.href = "index.html";
})
