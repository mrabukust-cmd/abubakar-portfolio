import ziloliveImg from '../assets/images/zilolive.png';
import coponoImg from '../assets/images/copono.png';
import mentoraImg from '../assets/images/mentora_real.png';
import schoolSystemImg from '../assets/images/edu_manage_mockup.png';

export const projectsData = [
  {
    id: "mentora",
    featured: false,
    title: "Mentora",
    tagline: "Peer Learning & Campus Skill Exchange Platform",
    category: "Education & Peer Learning",
    badge: "Featured Application",
    image: mentoraImg,
    technologies: ["Flutter", "Firebase", "Firestore", "Firebase Auth", "Google Sign-In", "FCM"],
    shortDescription: "A campus-focused mobile application connecting university students for peer-to-peer learning, course tutoring, skill exchange, and study session scheduling.",
    features: [
      "User Authentication & Google Sign-In integration",
      "Student profiles displaying skills offered & skills wanted",
      "Mentor & peer discovery with real-time Firestore search/filter",
      "Peer-to-peer connection request system",
      "Real-time messaging & push notifications via FCM",
      "Dark mode UI theme & intuitive screen navigation"
    ],
    githubUrl: "",
    liveUrl: "",
    modalData: {
      problem: "University students frequently struggle to find accessible peer tutors or study partners within their campus courses without relying on informal message boards or fragmented chats.",
      solution: "Engineered Mentora as a dedicated Flutter mobile platform where students can search for peers with complementary skill sets, send study connection requests, and coordinate peer learning sessions.",
      challenges: [
        "Structuring relational user & skill document models efficiently in Cloud Firestore.",
        "Implementing real-time Firestore queries for instant skill filter search.",
        "Managing push notification triggers using Firebase Cloud Messaging (FCM)."
      ],
      contribution: "Designed and built the full mobile client in Flutter, integrated Firebase Authentication & Google Sign-In, designed Firestore database schemas, and developed the peer discovery UI."
    }
  },
  {
    id: "zilolive",
    featured: false,
    title: "ZiloLive",
    tagline: "Live Streaming & Social Interaction App",
    category: "Social & Media",
    badge: "Live Media Project",
    image: ziloliveImg,
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Real-Time Features", "Agora"],
    shortDescription: "A feature-rich Flutter mobile application engineered for live audio/video interaction, streaming rooms, and real-time social engagement.",
    features: [
      "Live interactive audio/video room integration via Agora SDK",
      "Real-time social chat stream & live user interactions",
      "Firebase Authentication & secure session management",
      "Custom Flutter widget architecture optimized for smooth FPS",
      "Cloud Firestore synchronization for room state and user profiles"
    ],
    githubUrl: "",
    liveUrl: "",
    modalData: {
      problem: "Handling live audio/video feeds and active chat streams on mobile devices requires low latency, efficient memory management, and responsive UI rebuilds.",
      solution: "Engineered ZiloLive using Flutter's reactive widget system alongside Agora RTC services and Firebase Firestore data listeners for real-time interaction.",
      challenges: [
        "Managing complex state transitions during active audio/video stream sessions.",
        "Maintaining responsive 60fps UI performance while parsing high-frequency message streams."
      ],
      contribution: "Architected the Flutter frontend layout, integrated live streaming RTC components, managed real-time chat state listeners, and built profile screens."
    }
  },
  {
    id: "copono",
    featured: false,
    title: "Copono",
    tagline: "Mobile Application & Utility Management",
    category: "Mobile Application",
    badge: "Utility App",
    image: coponoImg,
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    shortDescription: "A streamlined mobile utility application built with Flutter, focusing on clean architecture, API data parsing, and dark mode interface design.",
    features: [
      "Clean dark-first custom UI & widget hierarchy",
      "RESTful API integration with JSON data parsing & error fallbacks",
      "Firebase backend services for secure user profile persistence",
      "Local state handling for offline-friendly user experience"
    ],
    githubUrl: "",
    liveUrl: "",
    modalData: {
      problem: "Users require utility applications that load rapidly, function predictably under varying network conditions, and feature simple navigation.",
      solution: "Built a modular mobile client in Flutter utilizing repository patterns for network calls, local data caching, and clean widget separation.",
      challenges: [
        "Ensuring smooth list rendering and image caching on lower-spec mobile devices.",
        "Handling REST API errors gracefully with clear user feedback states."
      ],
      contribution: "Developed the Flutter application codebase, implemented network API client classes, designed custom dark UI widgets, and integrated Firebase backend."
    }
  },
  {
    id: "school-management-system",
    featured: false,
    title: "School Management System",
    tagline: "Academic Portal & Operations System",
    category: "Education & Peer Learning",
    badge: "Academic Project",
    image: schoolSystemImg,
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Storage"],
    shortDescription: "An academic management mobile portal developed as a Software Engineering project to digitize attendance, timetables, grades, and notice announcements.",
    features: [
      "Role-tailored access views for Students and Teachers",
      "Attendance logging & dynamic class schedule tracking",
      "Academic performance & grade dashboard views",
      "Digital assignment announcements & notice board stream"
    ],
    githubUrl: "",
    liveUrl: "",
    modalData: {
      problem: "Traditional academic management relies on fragmented paper records and non-mobile systems that are difficult for students and teachers to access on mobile devices.",
      solution: "Developed a cross-platform mobile application using Flutter and Firebase that unifies academic management into clear, accessible mobile dashboards.",
      challenges: [
        "Configuring security rules in Cloud Firestore for role-restricted document access.",
        "Calculating student attendance percentages dynamically across academic terms."
      ],
      contribution: "Led the Flutter mobile application development for the project, implemented Firestore security rules, student grade calculation modules, and timetable UI views."
    }
  }
];

export const projectCategories = [
  "All",
  "Education & Peer Learning",
  "Social & Media",
  "Mobile Application"
];
