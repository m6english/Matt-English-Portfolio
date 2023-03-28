let resume = document.getElementById('resume');
let github = document.getElementById('github');
let linkedIn = document.getElementById('linkedin');
let aboutTwo = document.getElementById('about-2');
let home = document.getElementById('home');


const resumeStyle = e => {
    e.stopPropagation();
    resume.setAttribute('id','resume-expand');
}

resume.addEventListener("click", resumeStyle);


const githubStyle = e => {
    e.stopPropagation();
    github.setAttribute('id','github-expand');
}

github.addEventListener("click", githubStyle);


const linkedInStyle = e => {
    e.stopPropagation();
    linkedIn.setAttribute('id','linkedin-expand');
}

linkedIn.addEventListener("click", linkedInStyle);


const aboutTwoStyle = e => {
    e.stopPropagation();
    aboutTwo.setAttribute('id','about-expand');
}

aboutTwo.addEventListener("click", aboutTwoStyle);

const homeStyle = e => {
    e.stopPropagation();
    home.setAttribute('id','home-expand');
}

home.addEventListener("click", homeStyle);


document.addEventListener("click", () => {
    resume.setAttribute('id','resume');
    home.setAttribute('id','home');
    aboutTwo.setAttribute('id','about-2');
    linkedIn.setAttribute('id','linkedin');
    github.setAttribute('id','github');
});