export const myProjects = [
  {
    title: "Devoverflow - A Stack Overflow Clone",
    desc: "Devoverflow is a full-stack web application inspired by Stack Overflow, designed for developers to ask, answer, and discuss technical questions. It features user authentication, question posting, answer submissions, and voting functionality.",
    subdesc: [
      "User authentication and authorization for secure access.",
      "Post and manage technical questions with a clean UI.",
      "Submit answers to existing questions to contribute knowledge.",
      "Voting system to highlight the best questions and answers.",
      "Tagging functionality for better organization and searchability.",
      "Responsive design for optimal usability across devices.",
      "Comprehensive search functionality for finding relevant discussions."
    ],
    
    href: 'https://dev-overflow-flame-pi.vercel.app/ ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/logos/nextjs.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/logos/mongodb.webp',
      },
      {
        id: 4,
        name: 'node.js',
        path: '/assets/logos/node.webp',
      },
    ],
  },
  {
    title: "Career Bridge - Job Portal",
    desc: "Career Bridge is a job portal platform that connects job seekers with companies. It enables admins to create job listings, while users can apply for jobs, track their application status, and interact with recruiters.",
    subdesc: [
      "Admin panel to create, update, and delete job listings.",
      "User registration and profile creation for personalized experience.",
      "Search and filter job listings by category, location, and experience level.",
      "Application submission with easy tracking of application status.",
      "Employer profile management and applicant review features.",
      "Real-time notifications for job updates and application status changes.",
      "Responsive design optimized for both mobile and desktop users."
    ],
    href: 'https://jobportal-gamma-mocha.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/twitter.ico',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/logos/mongodb.webp',
      },
      {
        id: 4,
        name: 'node.js',
        path: '/assets/logos/node.webp',
      },
    ],
  },
  {
    title: 'SpotifyClone - A clone of Spotify',
    desc: 'SpotifyClone is a client side clone of Spotify that offers a seamless user experience. It provide a music player with sound control and dynamic libraries that makes it easy to navigate and interact with.',
    subdesc:
      'Built as a personal project, SpotifyClone is a showcase of my skills in front-end development. It is built using Vanilla HTML, CSS, and JS, to test my ability to create visually appealing and functional web applications.',
    href: 'https://spotify-pi-blush.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/Spotify.ico',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/logos/html.webp',
      },
      {
        id: 2,
        name: 'CSS',
        path: '/assets/logos/css.png',
      },
      {
        id: 3,
        name: 'JS',
        path: '/assets/logos/js.webp',
      },

    ],
  },
  {
    title: 'Taskit - A functional TODO list',
    desc: 'Taskit is a functional todo list app that offers user to create, update, delete and mark as done tasks. It is responsive and also have a feature to filter tasks based on their status. It don\'t use any database and store data in local storage.',
    subdesc:
      'Built as a personal project, Taskit is a showcase of my skills in front-end development. It is built using React.js, TailwindCSS, I built it to refine my skills in React.js and to create a functional web application.',
    href: 'https://todo-list-seven-cyan-77.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/Taskit.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.png',
      },

    ],
  },

];

export const mySkills = [
  { skill: "NextJs", icon: "/assets/logos/nextjs.svg" },
  { skill: "React", icon: "/assets/logos/react.webp" },
  { skill: "NodeJs", icon: "/assets/logos/node.webp" },
  { skill: "PostgreSQL", icon: "/assets/logos/postgreSQL.svg" },
  { skill: "MongoDB", icon: "/assets/logos/mongodb.webp" },
  { skill: "Tailwind", icon: "/assets/logos/tailwind.webp" },
  { skill: "ExpressJS", icon: "/assets/logos/express.webp", invert: true },
  { skill: "Postman", icon: "/assets/logos/postman.svg" },
  { skill: "GIT", icon: "/assets/logos/git.webp" }
];

export const stillLearning = [
  { skill: "Java", icon: "/assets/logos/java.png" },
  { skill: "Drizzle ORM", icon: "/assets/logos/drizzle.png", rounded: true },
  { skill: "Redis", icon: "/assets/logos/redis.svg", rounded: true },
  { skill: "Docker", icon: "/assets/logos/docker.svg", rounded: true }
];



