import ziloliveImg from '../assets/images/zilolive.png';
import coponoImg from '../assets/images/copono.png';
import mentoraImg from '../assets/images/mentora_real.png';
import schoolSystemImg from '../assets/images/edu_manage_mockup.png';

export const projectsData = [
  {
    id: "mentora",
    featured: false,
    title: "Mentora",
    tagline: "Campus Peer Learning & Skill Exchange Platform",
    category: "Education & Peer Learning",
    badge: "Mobile Platform",
    image: mentoraImg,
    technologies: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Provider", "SharedPreferences", "Google Sign-In"],
    shortDescription: "A Flutter mobile application designed to connect university students for peer tutoring, skill exchanges, and study requests backed by Firebase services.",
    features: [
      "Firebase Auth & Google Sign-In onboarding flow",
      "Student profiles with customizable skills offered & requested",
      "Peer matching feed with study request exchanges",
      "Local preferences via SharedPreferences & profile media via Firebase Storage"
    ],
    githubUrl: "",
    liveUrl: "",
    demoType: "apk", // Options: "live" | "video" | "apk" | "none"
    githubStatus: "private", // Options: "public" | "private" | "case-study"
    githubStatusNote: "Private Repository (APK Available Upon Request)",
    modalData: {
      problem: "In campus peer learning data flows, skills added by users would save to backend records but fail to reflect dynamically on MySkillsScreen due to UI state sync mismatches and initial Firestore security permission issues.",
      solution: "Resolved security rules and re-architected state listener flows across Firebase Auth, Cloud Firestore, and Provider so user skills, profile updates, and study requests refresh reliably.",
      challenges: [
        "Debugging Firestore permission-denied security rule errors during initial user profile creation.",
        "Fixing state management flow so newly added user skills render immediately in MySkillsScreen.",
        "Structuring user profile documents and peer connection requests in Cloud Firestore."
      ],
      contribution: "Developed Flutter frontend modules including authentication, profile management, skill listing UI, matching feed, connection requests, and Firebase service integration."
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
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "FCM", "State Management"],
    shortDescription: "A Flutter social and live-streaming client featuring real-time stream interactions, ranking leaderboards, virtual gifting, coin wallet management, and user leveling.",
    features: [
      "Live stream view layer with ranking leaderboards & coin wallet state",
      "Deep pull-to-refresh profile gesture matching YouTube & TikTok UX",
      "VIP membership status, user levels, and Boost Now ranking persistence",
      "FCM token lifecycle handling & REST API integration with timeout fallbacks"
    ],
    githubUrl: "",
    liveUrl: "",
    demoType: "video",
    githubStatus: "private",
    githubStatusNote: "Private Client Repository",
    modalData: {
      problem: "Over-sensitive default pull-to-refresh gestures triggered accidental profile reloads during routine scrolling, while dynamic layout feeds triggered RenderViewport/RenderSliver runtime errors and network timeouts.",
      solution: "Customized pull gesture thresholds to require an intentional deep pull (matching YouTube/TikTok profile UX), fixed sliver viewport constraints, and stabilized Boost Now ranking and coin deduction persistence.",
      challenges: [
        "Resolving RenderViewport and RenderSliver layout errors during dynamic widget rendering.",
        "Re-engineering profile pull-to-refresh to prevent accidental triggers on minor vertical swipes.",
        "Simulating Boost Now ranking with local wallet state, coin deduction, and Booster badge updates.",
        "Handling backend REST API network timeouts and FCM token registration edge cases."
      ],
      contribution: "Engineered core application features including live streaming UI views, ranking leaderboards, gifting workflows, VIP status, coin wallet state, and profile refresh behavior."
    }
  },
  {
    id: "copono",
    featured: false,
    title: "Copono",
    tagline: "Flutter Mobile Application (UI/UX Refinement)",
    category: "Mobile Application",
    badge: "UI/UX Development",
    image: coponoImg,
    technologies: ["Flutter", "Dart", "UI/UX Refinement"],
    shortDescription: "A Flutter mobile project focused on interface improvements, layout polish, and visual corrections across feature branches (fix/check-ui and fix/check-uiux).",
    features: [
      "Targeted UI/UX corrections across feature branches",
      "Screen layout polish and visual consistency adjustments",
      "Widget styling and interface alignment"
    ],
    githubUrl: "",
    liveUrl: "",
    demoType: "none",
    githubStatus: "private",
    githubStatusNote: "Private Repository (Pending Technical Verification)",
    modalData: {
      problem: "Interface inconsistencies and visual alignment issues required dedicated UI/UX fixes across feature development branches.",
      solution: "Executed layout corrections and UI polish in fix/check-ui and fix/check-uiux branches to improve overall interface consistency.",
      challenges: [
        "Refactoring widget trees to match target UI/UX design specifications.",
        "Resolving layout overflow and visual alignment issues across different screen dimensions."
      ],
      contribution: "Implemented UI/UX fixes, frontend styling adjustments, and screen layout polish across dedicated feature branches."
    }
  },
  {
    id: "school-management-system",
    featured: false,
    title: "School Management System",
    tagline: "Multi-Role Academic Portal & Attendance Tracker",
    category: "Education & Peer Learning",
    badge: "Full-Stack Project",
    image: schoolSystemImg,
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Firebase Storage"],
    shortDescription: "A school academic platform connecting Parents, Students, Teachers, and Admins to digitize attendance marking, grade tracking, and extra-class schedule visibility.",
    features: [
      "4 primary access roles: Parent, Student, Teacher, and Admin",
      "Daily attendance tracking & grade management operated by Teachers",
      "Parent visibility into daily attendance and special/extra class schedules",
      "Student grade and attendance portal dashboards"
    ],
    githubUrl: "",
    liveUrl: "",
    demoType: "apk",
    githubStatus: "private",
    githubStatusNote: "Repository & APK Available",
    modalData: {
      problem: "Parents lacked direct visibility into their child's actual daily school attendance and extra class schedules, having to rely solely on unverified verbal reports from students.",
      solution: "Built a unified 4-role portal enabling teachers to log attendance and grades directly, providing parents and students with real-time schedule visibility.",
      challenges: [
        "Structuring role-restricted data models across 4 distinct user access levels (Parent, Student, Teacher, Admin).",
        "Ensuring teacher-entered attendance records and grades propagate accurately to relevant parents and students.",
        "Coupling business logic closely with UI widgets during initial build (an architectural tradeoff to decouple in future iterations)."
      ],
      contribution: "Sole developer responsible for full project execution: designed mobile UI layouts, backend Firebase integration, role-based access rules, attendance workflows, and grade dashboards."
    }
  }
];

export const projectCategories = [
  "All",
  "Education & Peer Learning",
  "Social & Media",
  "Mobile Application"
];
