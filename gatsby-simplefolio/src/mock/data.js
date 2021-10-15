import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'CathleneConverse.jpg',
  paragraphOne:
    'Front-end Web Developer at the intersection of form and function. BA in creative writing combined with more recent study at UCLA in full stack web development where over 200 classroom hours were spent focusing on gaining technical programming skills using HTML5, CSS3, Javascript, JQuery, NodeJS, MySQL, MongoDB, Express, Handlebars, ReactJS, Heroku, Web APIs, RESTful APIs, Git and testing. Self-directed; self-motivated; and highly organized. Accountable, and focused; passionate about seeing projects through from ideation to delivery and troubleshooting complex issues.',
  // paragraphTwo: '',
  // paragraphThree: '',
  resume: 'Resume.Cathlene Converse.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'emergence-homepage.png',
    title: 'Emergence',
    info: 'This web application is the solution to finding new local emerging artists by city.  It aggregates data from various sources and creates a user-friendly, data-centric overview that gives the user a complete perspective of a band in under 30 seconds.',
    info2: '',
    url: 'https://awsiegfried.github.io/Emergence_v1/',
    repo: 'https://github.com/AWSiegfried/Emergence_v1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'QuarantineGame.png',
    title: 'The Quarantine Game',
    info: 'The Quarantine Game provides an outlet for people who want to come together with friends to have a fun game night while also practicing social distance.',
    info2: '',
    url: 'https://gentle-cliffs-28390.herokuapp.com/',
    repo: 'https://github.com/ttngu/QuarantineGame', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cathleneconverse@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cathlene-converse/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cgconverse',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
