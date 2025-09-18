import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an aspiring full stack developer passionate about building user-friendly and scalable web applications.
I work with front-end technologies like React.js, JavaScript, and TailwindCSS, and back-end tools like Node.js, Java, and Spring Boot.
I also explore databases such as MySQL and MongoDB to manage and organize data efficiently.
Through projects and continuous learning, I am strengthening my problem-solving skills and preparing to contribute to impactful real-world applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Apr 2024",
    role: "Java Full Stack Development Intern",
    company: "Kodnest Technologies",
    description: `Worked on full-stack applications using Java, Spring Boot, REST APIs, and MySQL. Gained hands-on experience with MVC architecture, backend development, and deployment practices.`,
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
  },
  {
    year: "Aug 2024 - Oct 2024",
    role: "Java Programming Intern",
    company: "Harsha Informatics",
    description: `Strengthened Java programming skills with OOP concepts, exception handling, and collections framework. Applied core concepts in building modular and efficient programs.`,
    technologies: ["Java", "OOP", "Collections", "Exception Handling"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information with a modern responsive design.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
    url: "https://tejkumar-hacker.github.io/tejs-portfolio/"
  },
  {
    title: "Tic-Tac-Toe Game",
    image: project2,
    description:
      "A classic two-player browser-based game with responsive design and interactive gameplay.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://tejkumar-hacker.github.io/Tic-Tac-Toe/"
  },
  {
    title: "Todo App",
    image: project3,
    description:
      "A functional to-do list application for daily productivity management with task add and delete features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://tejkumar-hacker.github.io/todo-app/"
  },
  {
    title: "Task List App",
    image: project4,
    description:
      "A responsive task management app supporting add, delete, and persistent storage using localStorage.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    url: "https://tejkumar-hacker.github.io/task-list/"
  },
];

export const CONTACT = {
  address: "Hyderabad, India",
  phoneNo: "+91 6302761452",
  email: "mailto:tejkumarjajula@gmail.com",
};
