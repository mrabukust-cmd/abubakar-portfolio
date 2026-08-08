import { socialLinks } from './socialLinks';
import profileImg from '../assets/images/profile.png';

export const profileData = {
  name: "Abubakar Siddique",
  shortName: "AS",
  title: "Software Engineering Student & Flutter Developer",
  status: "Available for Opportunities",
  education: "BS Software Engineering",
  email: socialLinks.email,
  location: "Pakistan",
  profileImage: profileImg,
  
  heroBadge: "Building → Testing → Improving",
  heroHeading: "I Build Real-World Mobile Apps With Flutter.",
  heroSubheading: "Software Engineering Student & Flutter Developer",
  heroDescription: "I'm Abubakar Siddique, a Software Engineering student and Flutter Developer focused on turning ideas into polished, functional mobile applications with Flutter, Firebase, APIs, and modern UI/UX.",
  
  aboutText: [
    "I am a Software Engineering student with a strong focus on mobile application development. My passion lies in building practical, user-centered applications that solve real-world problems.",
    "My primary development stack centers around Flutter and Dart, backed by Firebase services and REST API integration. I emphasize clean software architecture, modular widget structures, and intuitive UI/UX design.",
    "Rather than just building theoretical demos, I focus on shipping production-grade Flutter applications — like Mentora (a peer skill exchange with real-time Firestore synchronization) and Copono (a smart deal discovery app with REST API integration).",
    "I am continuously improving my software engineering practices and seeking opportunities to contribute to real-world products through internships, junior developer roles, and freelance projects."
  ],
  
  philosophy: {
    heading: "My Engineering Mindset",
    bullets: [
      "Understand the domain & data flows first — as learned while engineering Firestore stream listeners for Mentora.",
      "Write clean, modular code.",
      "Never stop refining the user experience."
    ]
  },

  currentlyLearning: [
    { title: "Riverpod & BLoC", detail: "Advanced Flutter State Management" },
    { title: "Clean Architecture", detail: "Repository Pattern & Data Decoupling" },
    { title: "Node.js & Express", detail: "Backend API Integration" }
  ],
  
  stats: [
    {
      label: "Featured Apps",
      count: 4,
      suffix: "+ Built",
      value: "4+ Built",
      detail: "Flutter & Mobile Projects"
    },
    {
      label: "Firebase Tech",
      count: 5,
      suffix: "+ Services",
      value: "5+ Services",
      detail: "Auth, Firestore, Storage & FCM"
    },
    {
      label: "REST & Network",
      count: 100,
      suffix: "% API Integration",
      value: "100% API Integration",
      detail: "HTTP, JSON & Network Handling"
    },
    {
      label: "Engineering",
      count: 100,
      suffix: "% Clean Code",
      value: "100% Clean Code",
      detail: "Modular & Reusable Architecture"
    }
  ],
  
  journey: [
    {
      period: "Academic Foundation",
      role: "Software Engineering Student",
      institution: "BS Software Engineering Program",
      description: "Building strong fundamentals in software architecture, object-oriented design, data structures, requirements engineering, database management, and software quality.",
      skills: ["Software Architecture", "OOP", "Data Structures", "Requirements", "Database Design"]
    },
    {
      period: "Mobile Specialization",
      role: "Flutter Developer",
      institution: "Hands-on Mobile Engineering",
      description: "Specializing in cross-platform mobile engineering with Flutter & Dart. Crafting responsive widget interfaces, managing app state, and creating reusable component architectures.",
      skills: ["Flutter", "Dart", "State Management", "Widget Architecture", "Responsive UI"]
    },
    {
      period: "Full-Stack Mobile Apps",
      role: "Real-World Application Development",
      institution: "Building & Refining Complete Apps",
      description: "Developing end-to-end mobile applications like Mentora, ZiloLive, Copono, and a School Management System, connecting Flutter frontends with Firebase, APIs, and real-time features.",
      skills: ["Firebase Auth", "Firestore", "REST APIs", "Real-Time Chat", "Git & GitHub"]
    }
  ],

  howIBuild: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the core problem, target audience, functional requirements, and application goals before writing code."
    },
    {
      step: "02",
      title: "Design",
      description: "Plan the UI/UX layout, widget hierarchy, state management approach, and database/API data flows."
    },
    {
      step: "03",
      title: "Build",
      description: "Develop the application using Flutter & Dart, integrating Firebase services, REST APIs, and clean architecture patterns."
    },
    {
      step: "04",
      title: "Improve",
      description: "Test functionality, debug edge cases, optimize performance frame rates, and continuously refine the user experience."
    }
  ],
  
  socials: socialLinks
};
