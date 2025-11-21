import {

  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "ReactJS", icon: reactjs },
  { title: "JAVASCRIPT", icon: javascript },
  { title: "NodeJS", icon: nodejs },
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
   { title: "Tailwind CSS", icon: tailwind },
    { title: "Git", icon: git },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "United Airlines",
    company_name: "Luxoft",
    icon: reactjs,
    iconBg: "#161329",
    date: "Oct 2024 – Present",
    points: [
      "Developed immersive scrolly telling screens with 3D animations.",
      "Worked on native ad creation in Google Ad Manager.",  
      "Integrated Betria map and many other functionalities and bugs.",
    ],
    TechStack: [ "ReactJS", "React Hooks", "React Testing Library", "SCSS","HTML", "TypeScript", "Git","Google Ad Manager"],
  },
  {
    title: "Disa Modernization",
    company_name: "GlobalLogic",
    icon: reactjs,
    iconBg: "#161329",
    date: "Jul 2022 – Aug 2024,",
    points: [
      "I have written unit testing to increase code coverage.", 
     "This was a maintenance project, so I have fixed many bugs and implemented few new features.", 
      "I have worked on application performance optimization.",
    ],
    TechStack:[ "React", "React Hooks", "React Testing Library", "Redux", "Redux Saga", "SCSS","HTML", "TypeScript", "TypeScript JSX (TSX)", "Git"],
  },
  {
    title: "Sinclair broadcasting",
    company_name: "GlobalLogic",
    icon: reactjs,
    iconBg: "#161329",
    date: "Jul 2022 – Aug 2024",
    points: [
      "In this Project I have worked on bug fixes and written unit test case.", 
      "I this project I have written UI automation using selenium WebDriver and jest.",
       "This project I have written few API end points using node JS.",
       "I have worked on API automation using jest and postman"
    ],
    TechStack:[ "React", "react hooks", "React Testing Library", "Redux", "Redux Saga", "SCSS","HTML", "TypeScript", "TypeScript JSX (TSX)"]
  },

    {
    title: "Verizon",
    company_name: "Publicis Sapient",
    icon: reactjs,
    iconBg: "#161329",
    date: "Nov 2021 – Jul 2022",
    points: [
      "In this project I have worked on different modules like creating forms.",
      "I have created message bus to communicate different applications.",
      "I have implemented Axios interceptor and few common components.",
    ],
    TechStack:[ "Micro Frontends", "React", "React hooks", "Redux", "Redux Saga", "SCSS","HTML", "TypeScript", "TypeScript JSX (TSX)"]
  },

    {
    title: "IDFC Bank Credit-Card",
    company_name: "Xebia It Architect",
    icon: reactjs,
    iconBg: "#161329",
    date: "Nov 2020 – Sept 2021",
    points: [
      "I have worked on temporary block, permanent block, unblock features.",
   "I have worked on generating virtual card",
   " I have worked on showing lists of active and inactive credit cards."
    ],
    TechStack:["Jest", "React", "react hooks", "React Native", "Redux", "Redux Thunk", "Unit Testing"]
  },

    {
    title: "Erin",
    company_name: "Tech ahead Pvt Ltd",
    icon: reactjs,
    iconBg: "#161329",
    date: "Jul 2019 – Nov 2019",
    points: [
      "I have worked on this project for enhancement.",
      "It is an organizational app in which any member of the organization can send referrals to their colleagues",
    ],
    TechStack:["Middleware", "React", "react hooks", "React Native", "Redux", "TypeScript JSX (TSX)"]
  },
   {
    title: "Yeswa Ecommerce Application",
    company_name: "Root Info Solutions",
    icon: reactjs,
    iconBg: "#161329",
    date: "Feb 2018 – Jul 2019,",
    points: [
      "Yeswa is an ecommerce application. In this application I have worked on customer and vendor module.", 
       "I have worked on showing list of products.",  
       "Showing product availability to nearby store on map.",
        "I have implemented vendor dashboard where vendor can see the purchase details on any products.", 
        "I have worked on add to cart feature.",
    ],
    TechStack:["Cascading Style Sheets (CSS)", "HTML", "React", "React Native", "Redux Thunk", "JavaScript"]
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
