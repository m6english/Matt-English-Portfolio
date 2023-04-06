let resume = document.getElementById('resume');
let github = document.getElementById('github');
let linkedIn = document.getElementById('linkedin');
let aboutTwo = document.getElementById('about-2');
let home = document.getElementById('home');


const mmbpBtn = document.getElementById('mmbp-button');
const mmbpModal = document.getElementById('mmbp-modal');
const mmbpClose = document.getElementById('mmbp-close');
const employeeBtn = document.getElementById('employee-button');
const employeeModal = document.getElementById('employee-modal');
const employeeClose = document.getElementById('employee-close');
const graphBtn = document.getElementById('graph-button');
const graphModal = document.getElementById('graph-modal');
const graphClose = document.getElementById('graph-close');
const wosBtn = document.getElementById('wos-button');
const wosModal = document.getElementById('wos-modal');
const wosClose = document.getElementById('wos-close');

const btnClose = document.querySelectorAll('.modal-close');

const mediaQuery = window.matchMedia("(max-width: 450px)");

const resumeStyle = e => {
    e.stopPropagation();
    resume.setAttribute('id', 'resume-expand');
}

const githubStyle = e => {
    e.stopPropagation();
    github.setAttribute('id', 'github-expand');
}

const linkedInStyle = e => {
    e.stopPropagation();
    linkedIn.setAttribute('id', 'linkedin-expand');
}

const aboutTwoStyle = e => {
    e.stopPropagation();
    aboutTwo.setAttribute('id', 'about-expand');
}

const homeStyle = e => {
    e.stopPropagation();
    home.setAttribute('id', 'home-expand');
}

if (mediaQuery.matches) {
    document.addEventListener("click", () => {
        resume.setAttribute('id', 'resume');
        home.setAttribute('id', 'home');
        aboutTwo.setAttribute('id', 'about-2');
        linkedIn.setAttribute('id', 'linkedin');
        github.setAttribute('id', 'github');
    })
    resume.addEventListener("click", resumeStyle);
    github.addEventListener("click", githubStyle);
    linkedIn.addEventListener("click", linkedInStyle);
    aboutTwo.addEventListener("click", aboutTwoStyle);
    home.addEventListener("click", homeStyle);
};

mmbpBtn.addEventListener("click", () => {
    mmbpModal.style.display = 'block';
})

mmbpClose.addEventListener("click", () => {
    mmbpModal.style.display = 'none';
})

employeeBtn.addEventListener("click", () => {
    employeeModal.style.display = 'block';
})

employeeClose.addEventListener("click", () => {
    employeeModal.style.display = 'none';
})

graphBtn.addEventListener("click", () => {
    graphModal.style.display = 'block';
})

graphClose.addEventListener("click", () => {
    graphModal.style.display = 'none';
})

wosBtn.addEventListener("click", () => {
    wosModal.style.display = 'block';
})

wosClose.addEventListener("click", () => {
    wosModal.style.display = 'none';
})

