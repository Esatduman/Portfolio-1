import React from 'react';
import Nav from './Nav';
import './Projects.css';
import sum1 from '../assets/Sum2.png';
import cpu1 from '../assets/image 7.png';
import tree from '../assets/image 12.png';
import git from '../assets/image 10.png';
import git2 from '../assets/Gitpic.png';
import silent from '../assets/SIlent-Spaces-New.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import hang from '../assets/client-serevr.png';

function Projects() {
    // Array of project data
    const projects = [
        {
            id: 1,
            title: "Sum.ai",
            description: "Web application that summarizes users texts.",
            image: sum1, // Add your image path
            link: "https://main.d25a0vvxrfge35.amplifyapp.com/" // Add your project link
        },
        {
            id: 2,
            title: "Silent Spaces",
            description: "Silent Spaces is an app that helps users find and create quiet spaces for studying, meetings, and group activities. Built with React and Firebase, it uses the Google Maps API for real-time location data, enabling easy management of silent spaces.",
            image: silent,
            link: "https://esatduman.github.io/Silent-Spaces/"
        },
        {
            id: 3,
            title: "Client-Server HangMan in Java-Maven",
            description: "Fun HangMan game where you can play by creating your own server and adding a client its very fun!",
            image: hang,
            link: "https://github.com/Esatduman/Client-Server-HangMan"
             
        },
        {
            id: 4,
            title: "Project 2",
            description: "Brief description of project 2. What it does and technologies used.",
            image: "/path-to-project2-image.jpg",
            link: "/project2"
        },
        {
            id: 5,
            title: "Project 2",
            description: "Brief description of project 2. What it does and technologies used.",
            image: "/path-to-project2-image.jpg",
            link: "/project2"
        },
        {
            id: 6,
            title: "Project 2",
            description: "Brief description of project 2. What it does and technologies used.",
            image: "/path-to-project2-image.jpg",
            link: "/project2"
        },
        // Add more projects as needed
    ];

    return (
        <>
            <header className="proj-h">
                <Nav />
                <div className="icon-container">
                    <a href="/" className="home-link">
                        <FontAwesomeIcon icon={faHouse} className="home-icon" />
                    </a>
                </div>
                <div className="proj-content">
                    <div className="box_content">
                        <img className="tree-logo" src={tree} alt="tree" />
                        <h1 className="project_page">
                            <span className="welcome">WELCOME TO</span>
                            <br />
                            <span className="proj_info">MY PROJECTS</span>
                        </h1>
                    </div>
                    <img className="grid1" src={cpu1} alt="grid" />
                    <img className="github" src={git} alt="grid_logo" />
                    <img className="grid1" src={cpu1} alt="grid_one" />
                    <img className="Gitpic" src={git2} alt="git_two" />
                </div>
            </header>

            <div className="projects-section">
    <h2 className="projects-title">Explore More Projects</h2>
    <div className="projects-grid">
        {projects.map((project) => (
            <a 
                key={project.id} 
                href={project.link} 
                className="project-link"
                target="_blank"        
                rel="noopener noreferrer" 
            >
                <div className="project-box">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`project-image ${project.id === 3 ? 'hangman-image' : ''}`}
                    />
                    <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                    </div>
                </div>
            </a>
        ))}
    </div>
</div>
        </>
    );
}

export default Projects;