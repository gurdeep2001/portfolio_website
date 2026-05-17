export const personalInfo = {
  name: "Gurdeep Singh",
  roles: ["Software Engineer", "Content Creator", "Gym Enthusiast", "Traveler"],
  bio: "MCA graduate from NIT Trichy (AIR 731 NIMCET), currently working as an Associate Software Engineer at Proclink. I build full-stack applications and share my corporate + gym + travel life on YouTube.",
  email: "gurdeeppalewal00@gmail.com",
  linkedin: "https://www.linkedin.com/in/gurdeep-singh-159a23219/",
  github: "https://github.com/gurdeep2001",
  youtube: "https://www.youtube.com/@NITianGurdeep",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Students Mentored", value: 50, suffix: "+" },
  { label: "LeetCode Problems", value: 1100, suffix: "+" },
  { label: "NIMCET AIR", value: 731, suffix: "" },
  { label: "NIT Trichy MCA", value: 2025, suffix: "" },
];

export const skills = {
  Frontend: [
    { name: "React.js", color: "#61dafb" },
    { name: "Blazor", color: "#8b5cf6" },
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#1572b6" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
  ],
  Backend: [
    { name: "Java", color: "#f89820" },
    { name: "Spring Boot", color: "#6db33f" },
    { name: "Node.js", color: "#339933" },
    { name: "C#", color: "#239120" },
    { name: ".NET", color: "#512bd4" },
    { name: "REST API", color: "#14b8a6" },
  ],
  Database: [
    { name: "MySQL", color: "#4479a1" },
    { name: "MongoDB", color: "#47a248" },
    { name: "PostgreSQL", color: "#336791" },
  ],
  Tools: [
    { name: "Git", color: "#f05032" },
    { name: "Docker", color: "#2496ed" },
    { name: "Camunda BPMN", color: "#fc5d0d" },
    { name: "SignalR", color: "#8b5cf6" },
    { name: "Postman", color: "#ff6c37" },
    { name: "VS Code", color: "#007acc" },
  ],
};

export const experience = [
  {
    company: "Proclink",
    role: "Associate Software Engineer (ASE)",
    period: "Jan 2026 – Present",
    color: "#8b5cf6",
    bullets: [
      "Building enterprise-grade Blazor Server apps with .NET Web API backend",
      "Developed MySpace dashboard with real-time drag-and-drop chart creation using SignalR",
      "Integrated Camunda BPMN for complex workflow automation",
    ],
  },
  {
    company: "Proclink",
    role: "Graduate Engineer Trainee (GET)",
    period: "Jul 2025 – Jan 2026",
    color: "#14b8a6",
    bullets: [
      "Worked on full-stack feature development and bug resolution",
      "Collaborated on Telerik Blazor component integration and API design",
      "Contributed to log4net logging architecture and deployment pipelines",
    ],
  },
  {
    company: "Mentorship",
    role: "Mentor",
    period: "2023 – Present",
    color: "#f59e0b",
    bullets: [
      "Mentored 50+ students in DSA, Java, and full-stack development",
      "Guided students for placement prep and competitive coding",
      "Created structured learning roadmaps for MCA aspirants",
    ],
  },
];

export const projects = [
  {
    name: "StudyNotion",
    description: "A full-featured EdTech platform enabling instructors to create, sell, and manage courses. Students can enroll, track progress, and interact with content through a rich UI.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Razorpay", "Cloudinary"],
    github: "https://github.com/gurdeep2001/StudyNotion_an_Ed-Tech_Platform-Public",
    live: "https://studynotionfrontend-chi.vercel.app/",
    featured: true,
    color: "#8b5cf6",
  },
  {
    name: "RISHI Dashboard",
    description: "Enterprise MySpace analytics dashboard with real-time drag-and-drop chart creation, multi-data-source support, and SignalR-powered live updates.",
    tech: ["Blazor", ".NET", "SignalR", "Telerik", "C#", "MySQL"],
    github: "#",
    live: "#",
    featured: false,
    color: "#14b8a6",
  },
  {
    name: "LeetCode Tracker",
    description: "Personal progress tracker for competitive programming — logs problems, tags, difficulty, and generates visual reports of your DSA journey.",
    tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/gurdeepsingh/lc-tracker",
    live: "#",
    featured: false,
    color: "#3b82f6",
  },
  {
    name: "Campus Connect",
    description: "College networking app that connects students, alumni, and faculty for mentorship, job referrals, and knowledge sharing.",
    tech: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/gurdeepsingh/campus-connect",
    live: "#",
    featured: false,
    color: "#f59e0b",
  },
];

export const education = [
  {
    institution: "NIT Trichy",
    degree: "MCA",
    period: "2022 – 2025",
    location: "Tiruchirappalli",
    badge: "AIR 731 · NIMCET",
    color: "#8b5cf6",
  },
  {
    institution: "Kurukshetra University",
    degree: "BCA",
    period: "2018 – 2021",
    location: "Kurukshetra",
    badge: "Foundation of my coding journey",
    color: "#14b8a6",
  },
];

// export const contentPillars = [
//   { icon: "🏋️", title: "Gym Lifestyle", desc: "Workout vlogs, transformation journey, consistency tips" },
//   { icon: "💼", title: "Corporate Life", desc: "Day in the life of a software engineer, office culture" },
//   { icon: "✈️", title: "Travel", desc: "Weekend getaways, solo trips, travel on a budget" },
// ];
export const contentPillars = [
  {
    icon: "🏋️",
    title: "Gym Lifestyle",
    desc: "Workout vlogs, transformation journey, consistency tips",
    watchUrl: "https://www.instagram.com/08_gurdeep/",  // ← your gym Instagram
  },
  {
    icon: "💼",
    title: "Corporate Life",
    desc: "Day in the life of a software engineer, office culture",
    watchUrl: "https://www.instagram.com/corporate_majdoorrr/",  // ← your corporate Instagram
  },
  {
    icon: "🌍",
    title: "Beyond the Desk",
    desc: "Gym, office, travel, study roadmaps & more — the full journey",
    watchUrl: "https://www.youtube.com/@NITianGurdeep",  // ← YouTube or second Instagram
  },
];
