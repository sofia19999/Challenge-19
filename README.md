## Text Editor PWA


## Table of Contents
* Description
* Installation
* Usage
* Features
* Technologies
* Screenshots
* Deployment
* Contributing
* License



## Description

This is a Progressive Web Application (PWA) that serves as a text editor running in the browser. It is a single-page application that meets PWA criteria, supporting offline functionality and data persistence via IndexedDB. This text editor allows users to create and save notes or code snippets, even when there is no internet connection. It leverages various data storage techniques as redundancy to ensure consistent functionality across different browsers.



## Installation
To install and run this application locally:

1. Clone the repository:

git clone https://github.com/sofia19999/Challenge-19.git

cd Develop


2. Install the dependencies:

npm install

-Build the client-side code:


npm run build

-Start the development server:

npm run start:dev
Open the application in your browser at:


http://localhost:8080

## Usage
This text editor allows users to write notes or code snippets, even when they are offline. When the application is closed and reopened, previously entered content will be loaded from IndexedDB.


## Technologies
HTML5
CSS3
JavaScript (ES6+)
Webpack (for bundling assets)
IndexedDB (via idb package for storing editor content)
Service Workers (via Workbox for offline functionality)
Node.js (backend)
Express.js (for serving static files)
Babel (for transpiling modern JavaScript)


## Screenshots
Add screenshots of your application here, including the service worker registration, manifest, and IndexedDB usage in the browser's developer tools.

## Deployment
This application is deployed to Render. You can access the live version of the application here:

Live Demo: 




## License
This project is licensed under the ISC License.
