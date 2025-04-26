# Welcome to my website template!

This project was created by me (Levi Newman) in an effort to help people create simple websites using JavaScript, React, and Node.
This website is currently a static website, which means there is no database or anything automatically updating the information on the website.

## Setting up the website for development

This will cover how to set up this website for development on a Linux system running Ubuntu 24.04.1 LTS
If you don't have access to a linux computer I recommend using WSL (Windows Subsystem Linux) which will create a simple virtual machine on any Windows machine.

Here is a good tutorial

    https://www.howtogeek.com/744328/how-to-install-the-windows-subsystem-for-linux-on-windows-11/ 

Once that is complete, here are the commands to install the needed software to run the development environment on Ubuntu 24.04.1

    sudo apt-get update

    sudo apt install nodejs npm curl git

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    sudo reboot

    nvm install node


Now that we have all of the software, we can clone the GitHub repository with this command

    git clone git@github.com:levinewman39/Website-Template.git

Once that is complete, we can start up the server! We can run these commands to set up and start the server

This next command will show many warnings, we can ignore all of these

    npm install

Once that is complete, we can start the server!

    npm start


## Website Code Documentation

This covers the breakdown of all of the different **javascript** files that load all of the different pages and there elements.
First, I will cover how the directory is laid out!

- **node_modules/**: This folder contains all the dependencies installed via npm.
- **public/**: This folder holds all the public-facing data, pictures, and other assets that should be stored here. 
- **src/**: This is where the main application code resides, including React components, styles, and utilities.
- **.gitignore**: This file lists files and directories that should not be tracked by Git.
- **package-lock.json**: This file ensures consistent dependency versions across environments.
- **package.json**: This file defines the project, its dependencies, and scripts.
- **README.md**: This file provides documentation and instructions for the project.

Now I will cover what is in the **src/** folder. This is where all of the JavaScript files are located!

- **Pages/** This folder contains all of the different pages that are loaded onto the website. It also contains the routing file and the footer file.
- **App.jsx** This is the main App file! This is where everything is compiled and where the top app bar code is located. This file is where you add the top bar, the page that is getting loaded by the user and the footer. It is also where the page routing is compiled. At the moment, the entire app runs through this file!
- **index.css** This defines global styles that are used throughout the application.
- **index.js** This is the main JavaScript entry point for the React application. It renders the `App` component into the DOM and initializes the React app.
- **reportWebVitals.js** This file is used to measure and report performance metrics of the application. It can be used to track metrics like page load times and user interactions. (Not set up yet)
- **setupTests.js**: This file is used to configure and set up testing utilities for the application. It is typically used with Jest and React Testing Library to write and run unit tests. (Not set up yet)

The last folder that I will go over is the pages folder.

- **About.jsx** This is where the About page code is. This breaks down the structure of the org and how it works
- **Bulletin.jsx** This page is where other orgs can post notices, and any other upcoming events can be posted.
- **Community_Links.jsx** The drop-down menu pages for resources are loaded here.
- **Footer.jsx** This is where the Footer function code is. 
- **Get_Involved.jsx** This is where a user can get information on how to join the org. 
- **Home.jsx** This is where the Home page code is located. This is also the first page that is loaded when someone visits the website.
- **Our_Work.jsx** Here is the page that shows the organization's recent work.
- **Router.jsx** This is where all of the router logic is. This is where the JavaScript code gets attached to the website's links

The javascript files are where the logic and styling for each page is done. Currently they are using HTML and CSS for styling.
Each of the files will also have some comments to explain the key elements of the file.

## Future planned updates

- SQL support for easier updating and maintaining the website. 
- Admin page to see site traffic
- Documented Cloudflare setup
- Live site demo



