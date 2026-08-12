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
  heroHeading: "Mobile apps built for people, not portfolios.",
  heroSubheading: "Software Engineering Student & Flutter Developer",
  heroDescription: "I'm Abubakar Siddique, a software engineering student and Flutter developer focused on practical apps, clear architecture, and interfaces that feel easy to use.",
  
  aboutText: [
    "I am a Software Engineering student specializing in cross-platform mobile engineering with Flutter and Dart.",
    "My core development workflow integrates Cloud Firestore stream listeners, Firebase Auth, Provider state management, and REST API network handling.",
    "I focus on solving real mobile architecture challenges — such as tuning pull-to-refresh thresholds in ZiloLive to prevent unintended reloads and configuring multi-role Firestore security rules in Mentora and the School Management System.",
    "I am seeking software engineering internships and junior mobile developer roles where I can contribute to production mobile apps and maintain clean codebase architecture."
  ],
  
  philosophy: {
    heading: "My Engineering Mindset",
    bullets: [
      "Understand domain & data flows first — as learned while engineering Firestore stream listeners for Mentora.",
      "Decouple state logic from widget trees to prevent RenderViewport clipping and unnecessary rebuilds.",
      "Test edge cases early — handling network timeouts, FCM registration tokens, and role-based access rules."
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
      count: 3,
      suffix: "+ Built",
      value: "3 Apps Built",
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
      label: "Core Stack",
      count: 7,
      suffix: "+ Core Tools",
      value: "7+ Core Tech Tools",
      detail: "Flutter, Dart, Firebase, REST APIs"
    },
    {
      label: "Access Roles",
      count: 4,
      suffix: " Access Levels",
      value: "4 Access Levels",
      detail: "Parent, Student, Teacher & Admin"
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
      description: "Developing end-to-end mobile applications like Mentora, ZiloLive, and a School Management System, connecting Flutter frontends with Firebase, APIs, and real-time features.",
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
