let projects = document.getElementById('projects');
let resume = document.getElementById('resume');
let github = document.getElementById('github');
let linkedIn = document.getElementById('linkedin');
let home = document.getElementById('home');

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
