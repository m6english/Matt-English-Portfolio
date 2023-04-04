let projects = document.getElementById('projects');
let resume = document.getElementById('resume');
let github = document.getElementById('github');
let linkedIn = document.getElementById('linkedin');
let home = document.getElementById('home');

const mediaQuery = window.matchMedia('(max-width: 450px)');

const resumeStyle = e => {
    e.stopPropagation();
    resume.setAttribute('id', 'resume-expand');
}

const projectsStyle = e => {
    e.stopPropagation();
    projects.setAttribute('id', 'projects-expand');
}

const githubStyle = e => {
    e.stopPropagation();
    github.setAttribute('id', 'github-expand');
}

const linkedInStyle = e => {
    e.stopPropagation();
    linkedIn.setAttribute('id', 'linkedin-expand');
}

const homeStyle = e => {
    e.stopPropagation();
    home.setAttribute('id', 'home-expand');
}

if (mediaQuery.matches) {
    document.addEventListener("click", () => {
        resume.setAttribute('id', 'resume');
        projects.setAttribute('id', 'projects');
        home.setAttribute('id', 'home');
        linkedIn.setAttribute('id', 'linkedin');
        github.setAttribute('id', 'github');
    })
    resume.addEventListener("click", resumeStyle);
    projects.addEventListener("click", projectsStyle);
    github.addEventListener("click", githubStyle);
    linkedIn.addEventListener("click", linkedInStyle);
    home.addEventListener("click", homeStyle);
};