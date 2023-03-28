let projects = document.getElementById('projects');
let resume = document.getElementById('resume');
let github = document.getElementById('github');
let linkedIn = document.getElementById('linkedin');
let about = document.getElementById('about');

const mediaQuery = window.matchMedia('(max-width: 576px)')


const resumeStyle = e => {
    e.stopPropagation();
    resume.setAttribute('id','resume-expand');
}

resume.addEventListener("click", resumeStyle);


const projectsStyle = e => {
    e.stopPropagation();
    projects.setAttribute('id','projects-expand');
}

projects.addEventListener("click", projectsStyle);


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

const aboutStyle = e => {
    e.stopPropagation();
    about.setAttribute('id','about-expand');
}

about.addEventListener("click", aboutStyle);


document.addEventListener("click", () => {
    resume.setAttribute('id','resume');
    projects.setAttribute('id','projects');
    about.setAttribute('id','about');
    linkedIn.setAttribute('id','linkedin');
    github.setAttribute('id','github');
});