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
import cta from '../assets/Chicago_Transit_Authority_Logo.svg.png';
import han from '../assets/TowerOfHan.gif';
import card from '../assets/Baccarat_Display.png';

function Projects() {
    // Array of project data
    const projects = [
        {
            id: 1,
            title: "More Projects on the way........",
            description: "Loading.............",
            link: "" // Add your project link
        },
        {
            id: 2,
            title: "Sum.ai - React",
            description: "Web application that summarizes users texts.",
            image: sum1, // Add your image path
            link: "https://main.d25a0vvxrfge35.amplifyapp.com/" // Add your project link
        },
        {
            id: 3,
            title: "Silent Spaces - React & Firebase",
            description: "Silent Spaces is an app that helps users find and create quiet spaces for studying, meetings, and group activities. Built with React and Firebase, it uses the Google Maps API for real-time location data, enabling easy management of silent spaces.",
            image: silent,
            link: "https://esatduman.github.io/Silent-Spaces/"
        },
        {
            id: 4,
            title: "Client-Server HangMan in Java-Maven",
            description: "Using JAVA and FXML I created a fun HangMan game where you can play by creating your own server and adding a client its very fun!",
            image: hang,
            link: "https://github.com/Esatduman/Client-Server-HangMan"
             
        },
        {
            id: 5,
            title: "CTA - Chicago Transit Authority - Analysis",
            description: "Using the Python and SQL program that inputs commands from the user and outputs data from the CTA2 L daily ridership database. The program starts by outputting some basic stats #retrieved from the database",
            image: cta,
            link: "https://github.com/Esatduman/CTA-App-Analysis"
              
        },
        {
            id: 6,
            title: "Recursive Hanoi Tower - C++",
            description: "This project is about the Tower of Hanoi puzzle. The program calculates the minimum number of moves required to solve a Tower of Hanoi puzzle. I have created functions and a loops that uses recursive conditions to get the disk moving through the puzzle.",
            image: han,
            link: "https://github.com/Esatduman/CTA-App-Analysis" 
        },
        {
            id: 7,
            title: "Baccarat Game - Java",
            description: "The Baccarat Game Application is a console-based or graphical user interface (GUI)-enabled program developed in Java that simulates the popular casino card game of Baccarat. This project aims to provide users with an engaging gaming experience by incorporating real-world Baccarat rules, interactive gameplay",
            image: card,
            link: "https://github.com/Esatduman/CTA-App-Analysis" 
        }
        // {
        //     id: 4,
        //     title: "Project 2",
        //     description: "Brief description of project 2. What it does and technologies used.",
        //     image: "/path-to-project2-image.jpg",
        //     link: "/project2"
        // },
        // {
        //     id: 5,
        //     title: "Project 2",
        //     description: "Brief description of project 2. What it does and technologies used.",
        //     image: "/path-to-project2-image.jpg",
        //     link: "/project2"
        // },
        // {
        //     id: 6,
        //     title: "Project 2",
        //     description: "Brief description of project 2. What it does and technologies used.",
        //     image: "/path-to-project2-image.jpg",
        //     link: "/project2"
        // },
        // // Add more projects as needed
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
    <h2 className="projects-title">Explore My Projects</h2>
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