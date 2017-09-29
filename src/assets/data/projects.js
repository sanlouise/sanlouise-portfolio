import dressy from '../images/projects/dressy.png';
import conscioux from '../images/projects/conscioux_s.png';
import weather_app from '../images/projects/weather_api_s.png';
import project_management from '../images/projects/project_s.png';
import stocktracker from '../images/projects/stocktracker_s.png';
import react_image from '../images/projects/react_image.png';
import chatty from '../images/projects/chatty_s.png';
import globetrotter from '../images/projects/globetrotter_s.png';

const projects = [
  {
    id: 1,
    name: "React Ecommerce App",
    technologies: ["React", " & Redux"],
    type: "React",
    description: "Users can filter through products and add their favorites to their cart.",
    points: [
      "Implemented redux store, reducers and actions.",
      "Consistently used lodash to optimize codebase.",
      "Designed UI with custom css and material-ui.",
    ],
    src: dressy,
    github: "https://github.com/sanlouise/ecommerce-react/",
    url: "https://ecommerce-react-redux.herokuapp.com/",
  },
  {
    id: 2,
    name: "React Component Library",
    technologies: ["React"],
    type: "React",
    description: "Published to NPM as sl-react-components-library",
    points: [
      "This library is designed to help developers quickly build out UIs.",
      "NOTE: This is a work-in-progress app that is envolving on a daily basis."
    ],
    src: react_image,
    github: "https://github.com/sanlouise/react-components-library",
    url: "",
  },
  {
    id: 3,
    name: "React Weather App",
    technologies: ["React", " & Redux", " & Highcharts"],
    type: "React",
    description: "Users can retrieve the temperature, pressure and humidity of their favorite cities.",
    points: [
      "Built with React and Redux best practices in mind.",
      "Integrated Openweather API for data retrieval.",
      "Used Axios for AJAX requests.",
      "Used Google Maps API for location rendering.",
      "Used Highcharts for charts.",
    ],
    src: weather_app,
    github: "https://github.com/sanlouise/weather-app",
    url: "",
  },
  {
    id: 4,
    name: "Node Chat App",
    technologies: ["Node.js"],
    type: "Node",
    description: "Users can send each other messages and can connect in different chat rooms.",
    points: [
      "Created web server with Express.js.",
      "Used Socket.io for socket handling.",
      "Used MomentJS for timestamps and timezone configuration.",
      "Deployed application using Heroku.",
    ],
    src: chatty,
    github: "https://github.com/sanlouise/sockets",
    url: "http://nodejs-chatty.herokuapp.com/",
  },
  {
    id: 5,
    name: "Conscioux",
    technologies: ["Ruby on Rails"],
    type: "Ruby on Rails",
    description: "Users can easily search for high-quality, eco-friendly cosmetics.",
    points: [
      "Designed UI with custom css and JavaScript/JQuery.",
      "Applied Devise gem for user authentication.",
      "Implemented auto complete search function using AJAX.",
      "Deployed application using Heroku with PostgreSQL."
    ],
    src: conscioux,
    github: "https://github.com/sanlouise/conscioux",
    url: "http://www.conscioux.com/",
  },
  {
    id: 6,
    name: "Stock Tracker",
    technologies: ["Ruby on Rails"],
    type: "Ruby on Rails",
    description: "Users can easily search and track stocks. They can also follow what their friends are tracking.",
    points: [
      "Developed from scratch with scaffolding.",
      "Designed UI with custom css and JavaScript/JQuery.",
      "Used Yahoo API for tracking stock markets.",
      "Applied Devise gem for user authentication.",
      "Implemented auto complete search function using AJAX.",
      "Deployed application using Heroku with PostgreSQL."
    ],
    src: stocktracker,
    github: "https://github.com/sanlouise/stocktracker",
    url: "http://socialstocktracker.herokuapp.com/",
  },
  {
    id: 7,
    name: "Data Flow",
    technologies: ["Ruby on Rails"],
    type: "Ruby on Rails",
    description: "Paying users can create projects for their organizations to manage deadlines and to store relevant documents. Users can add (non-paying) users to their projects.",
    points: [
      "Used Devise for user authentication.",
      "Used Milia gem for multi-tenancy.",
      "Integrated application with SendGrid for email handling.",
      "Implemented Stripe for payment handling.",
      "Connected application to Amazon Web Services (AWS S3).",
      "Designed UI of the pages using custom CSS, Twitter Bootstrap, and JavaScript/JQuery.",
    ],
    src: project_management,
    github: "https://github.com/sanlouise/projectmanagement",
    url: "http://socialstocktracker.herokuapp.com/",
  },
  {
    id: 8,
    name: "Globetrotter",
    technologies: ["Ruby on Rails"],
    type: "Ruby on Rails",
    description: "A membership based platform where users share their travel stories with the community.",
    points: [
      "Developed from scratch without scaffolding.",
      "Implemented database architecture for the application using SQL.",
      "Created user authentication system from scratch without gems.",
      "Designed UI of the pages using custom CSS, Font Awesome, and JavaScript/JQuery.",
      "Applied a test driven (TDD) approach through entire development process.",
      "Connected application to Amazon Web Services (AWS S3) for image uploads.",
      "Deployed application using Heroku.",
    ],
    src: globetrotter,
    github: "https://github.com/sanlouise/travel_railsblog",
    url: "http://globetrotter.herokuapp.com/",
  },

];

export default projects;
