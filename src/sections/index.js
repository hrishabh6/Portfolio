export const myProjects = [

  {
    title: "RideWise - Scalable Uber Backend with Microservices",
    desc: "A highly scalable backend system inspired by Uber, built entirely using Spring Boot and microservices architecture. Designed to simulate real-world ride-booking operations including user authentication, real-time driver location tracking, ride management, and asynchronous communication using Kafka and WebSockets.",
    subdesc: [
      "JWT-Based Auth Service : Implements complete user authentication and authorization with Spring Security, JWT tokens, and centralized request preprocessing middleware.",
      "Location Management via Redis : Uses Redis’ geospatial queries to efficiently track and retrieve nearby drivers in real-time.",
      "WebSocket Notifications : Real-time ride request system powered by WebSocket connections and Kafka messaging for notifying drivers instantly.",
      "Kafka Integration for Ride Flow : Kafka topics handle driver responses, making ride acceptance and creation asynchronous and scalable.",
      "Entity Service as Maven Library : A shared Maven-published service library for managing common entities and Flyway-based database migrations across all services.",
      "Service Registry with Eureka : Centralized service discovery via Eureka, enabling dynamic service registration and smooth inter-service communication.",
      "Robust Booking Workflow : BookingService orchestrates location discovery, driver communication, and ride confirmation through a decoupled event-driven pipeline.",
      "Clean Modular Codebase : Each service is independently deployable, version-controlled, and follows SOLID principles with proper logging and exception handling."
    ],
    href: "https://github.com/your-username/ridewise-microservices", // replace with actual link
    texture: "/textures/project/ridewise.mp4",
    logo: "/assets/RidemeLogo.jpg",
    logoStyle: {
      backgroundColor: "linear-gradient(120deg, #FFC371 0%, #FF5F6D 100%)",
      border: "0.2px solid #FF7A59",
      boxShadow: "0px 0px 60px 0px #FF5F6D66"
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Spring Boot",
        path: "/assets/logos/springboot.png",
      },
      {
        id: 2,
        name: "Redis",
        path: "/assets/logos/redis.svg"
      },
      {
        id: 3,
        name: "Kafka",
        path: "/assets/logos/kafka.png",
        className: "invert"
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/mysql.png",
        className: "h-6"
      },
      {
        id: 5,
        name: "Eureka",
        path: "/assets/logos/eureka.png"
      },
      {
        id: 6,
        name: "Flyway",
        path: "/assets/logos/flyway.jpeg"
      },
      {
        id: 7,
        name: "Retrofit",
        path: "/assets/logos/retrofit.jpeg"
      }
    ]
  },

  {
    title: "HorizonAI - AI-Powered PPT Generator",
    desc: "A full-fledged AI-powered SaaS application that enables users to create stunning presentations effortlessly using advanced prompt engineering techniques. Built a custom presentation editor with rich text formatting, drag-and-drop functionality, and AI-powered content generation.Devoverflow is a full-stack web application inspired by Stack Overflow, designed for developers to ask, answer, and discuss technical questions. It features user authentication, question posting, answer submissions, and voting functionality.",
    subdesc: [
      "Custom Presentation Editor : Built from scratch with paragraphs, bullet points, headings, and multi-column layouts.",
      "Drag-and-Drop Functionality : Implemented both custom and library-based solutions for seamless slide arrangement.",
      "AI-Powered Content Generation : Integrated OpenAI to generate relevant, context-aware presentation content.",
      "Dynamic Theme Support : Designed multiple themes for enhanced customization and visual appeal.",
      "Payment Integration : Integrated LemonSqueezy for secure transactions and SaaS-based monetization.",
      "Optimized Performance : Used Next.js, Zustand, Prisma, and Clerk Auth for scalability, responsiveness, and security.",
      
    ],
    
    href: 'https://horizonai-builder.vercel.app ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logo.webp',
    logoStyle: {
      backgroundColor: 'linear-gradient(120deg, #E87496 30%, #A5C6E8 60%, #D9C8EC 100%)',
      border: '0.2px solid #71A9DE',
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
        name: 'Prisma',
        path: '/assets/logos/prisma.webp',
        className: "invert"
      },
      {
        id: 3,
        name: 'OpenAI',
        path: 'assets/logos/openai.svg',
        className: "invert"
      },
      {
        id: 4,
        name: 'LemonSqueezy',
        path: '/assets/logos/lemon-squeezy.svg',
      },
    ],
  },
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
        name: 'Docker',
        path: '/assets/logos/docker.svg',
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
  

];

export const mySkills = [
  {skill: "Spring", icon: "/assets/logos/springboot.png", rounded: true},
  { skill: "NextJs", icon: "/assets/logos/nextjs.svg" },
  { skill: "Redis", icon: "/assets/logos/redis.svg", rounded: true },
  {skill: "Kafka", icon: "/assets/logos/kafka.png", rounded: true, invert: true },
  { skill: "NodeJs", icon: "/assets/logos/node.webp" },
  { skill: "Postgres", icon: "/assets/logos/postgreSQL.svg" },
  { skill: "MongoDB", icon: "/assets/logos/mongodb.webp" },
  { skill: "Tailwind", icon: "/assets/logos/tailwind.webp" },
  { skill: "Postman", icon: "/assets/logos/postman.svg" },
  { skill: "GIT", icon: "/assets/logos/git.webp" }
];

export const stillLearning = [
  { skill: "Python", icon: "/assets/logos/python.png" },
  { skill: "Docker", icon: "/assets/logos/docker.svg", rounded: true },
  {skill: "AWS", icon: "/assets/logos/aws.png", rounded: true, invert: true },
];

export const navItems = [
  { label: "Home", path: "/#home" },
  { label: "About", path: "/#about" },
  { label: "Resume", path: "https://drive.google.com/file/d/1dXfjGPPC56bU68ju67fKE7vJ1FYVxQlp/view?usp=sharing" },
  { label: "Projects", path: "/#projects" },
  { label: "Contact", path: "/#contact" }
];



