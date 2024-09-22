const data = {
    skills: {
        "id": "skills",
        "class": "skills",
        "title": "Skills",
        "hardSkills": [
            "Programming: Python, C++",
            "Web Development: HTML",
            "Data Analysis: SQL, Excel"
        ],
        "softSkills": [
            "Communication",
            "Teamwork",
            "Problem-solving"
        ]
    },
    projects: {
        "id": "projects",
        "class": "projects",
        "title": "Projects",
        "items": [
            "A Chess Game",
            "4 player Ludo",
            "A tournament management system"
        ]
    },
    certifications: {
        "class": "certifications",
        "title": "Short Courses",
        "items": [
            "Course: Game Theory (2023)",
            "Course: STEM"
        ]
    },
    education: {
        "id": "education",
        "class": "education",
        "title": "Education",
        "items": [
            "Bachelors in Computer Science (ongoing)"
        ]
    },
    sideProjects: {
        "class": "side-projects",
        "title": "Side Projects & Hackathons",
        "items": [
            "GDSC Hackathon (2024)",
            "Paint Project in Python"
        ]
    }
};

const renderProfile = (data) => {
    const container = document.querySelector('.container');

    
    const skillsSection = document.createElement('section');
    skillsSection.id = data.skills.id;
    skillsSection.className = data.skills.class;
    skillsSection.innerHTML = `<h2>${data.skills.title}</h2>
        <h3>Hard Skills</h3>
        <ul>${data.skills.hardSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <h3>Soft Skills</h3>
        <ul>${data.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>`;
    container.appendChild(skillsSection);


    const projectsSection = document.createElement('section');
    projectsSection.id = data.projects.id;
    projectsSection.className = data.projects.class;
    projectsSection.innerHTML = `<h2>${data.projects.title}</h2>
        <ul>${data.projects.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    container.appendChild(projectsSection);

    
    const certificationsSection = document.createElement('section');
    certificationsSection.className = data.certifications.class;
    certificationsSection.innerHTML = `<h2>${data.certifications.title}</h2>
        <ul>${data.certifications.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    container.appendChild(certificationsSection);

    
    const educationSection = document.createElement('section');
    educationSection.id = data.education.id;
    educationSection.className = data.education.class;
    educationSection.innerHTML = `<h2>${data.education.title}</h2>
        <ul>${data.education.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    container.appendChild(educationSection);

    
    const sideProjectsSection = document.createElement('section');
    sideProjectsSection.className = data.sideProjects.class;
    sideProjectsSection.innerHTML = `<h2>${data.sideProjects.title}</h2>
        <ul>${data.sideProjects.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    container.appendChild(sideProjectsSection);
};


renderProfile(data);
