const resume = document.getElementById('resume');
const github = document.getElementById('github');
const linkedIn = document.getElementById('linkedin');
const about = document.getElementById('about');
const home = document.getElementById('home');
const btnClose = document.querySelectorAll('.modal-close');


resume.addEventListener("click", () => {
    window.open("img/Resume.pdf");
})

home.addEventListener("click", () => {
    location.href = "index.html";
})

github.addEventListener("click", () => {
    window.open("https://github.com/m6english");
});


linkedIn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/matthew-english-b46848180/");
});

about.addEventListener("click", () => {
    location.href = "about.html";
})

// MMBP MODAL
const mmbpBtn = document.getElementById('mmbp-button');
const mmbpModal = document.getElementById('mmbp-modal');
const mmbpClose = document.getElementById('mmbp-close');
const mmbpCode = document.getElementById('mmbp-code');
const mmbpLive = document.getElementById('mmbp-live');

mmbpBtn.addEventListener("click", () => {
    mmbpModal.style.display = 'block';
})

mmbpClose.addEventListener("click", () => {
    mmbpModal.style.display = 'none';
})

mmbpCode.addEventListener("click", () => {
    window.open("https://github.com/m6english/MMBP2");
})

// EMPLOYEE DIRECTORY MODAL
const employeeBtn = document.getElementById('employee-button');
const employeeModal = document.getElementById('employee-modal');
const employeeClose = document.getElementById('employee-close');
const employeeCode = document.getElementById('employee-code');
const employeeLive = document.getElementById('employee-live');

employeeBtn.addEventListener("click", () => {
    employeeModal.style.display = 'block';
})

employeeClose.addEventListener("click", () => {
    employeeModal.style.display = 'none';
})

employeeCode.addEventListener("click", () => {
    window.open("https://github.com/m6english/api-employee-directory");
})

// WEBAPP DASHBOARD MODAL
const graphBtn = document.getElementById('graph-button');
const graphModal = document.getElementById('graph-modal');
const graphClose = document.getElementById('graph-close');
const graphCode = document.getElementById('graph-code');
const graphLive = document.getElementById('graph-live');

graphBtn.addEventListener("click", () => {
    graphModal.style.display = 'block';
})

graphClose.addEventListener("click", () => {
    graphModal.style.display = 'none';
})

graphCode.addEventListener("click", () => {
    window.open("https://github.com/m6english/webapp-dashboard");
})

// WHEEL OF SUCCESS MODAL
const wosBtn = document.getElementById('wos-button');
const wosModal = document.getElementById('wos-modal');
const wosClose = document.getElementById('wos-close');
const wosCode = document.getElementById('wos-code');
const wosLive = document.getElementById('wos-live');

wosBtn.addEventListener("click", () => {
    wosModal.style.display = 'block';
})

wosClose.addEventListener("click", () => {
    wosModal.style.display = 'none';
})

wosCode.addEventListener("click", () => {
    window.open("https://github.com/m6english/wheel-of-success");
})

