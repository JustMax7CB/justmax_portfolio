// Single source of truth for all site copy. Edit this file to update the site.

export const site = {
  url: "https://maxshapira.dev",
  name: "Max Shapira",
  role: "Software Developer",
  location: "Israel",
  email: "itsjustmax9@gmail.com",
  // Drop your CV into /public with this exact name, then set cvAvailable to true.
  cvPath: "/Max-Shapira-CV.pdf",
  cvAvailable: true,
  // Drop a square portrait into /public and point this at it to show it in the hero ensō.
  photo: "/profile.webp",
  links: {
    github: "https://github.com/JustMax7CB",
    linkedin: "https://www.linkedin.com/in/maximshapira",
    medium: "https://medium.com/@itsjustmax9",
  },
} as const;

export const hero = {
  eyebrow: "Software Developer",
  headline: "I build mobile apps, the web around them, and the backend underneath.",
  intro:
    "Full-stack developer with 4 years shipping production software — Flutter and native mobile apps used by 100k+ monthly users, .NET and Firebase backends, and the CI/CD that ships them.",
  stats: [
    { value: "100k+", label: "monthly active users on apps I maintain" },
    { value: "3", label: "production apps I develop and maintain" },
    { value: "4 yrs", label: "professional experience" },
  ],
};

export const about = [
  "I like the problems that sit between systems: a link that has to open the right screen in the right app, a token that has to survive the jump from a WebView to native code, a release that has to land in three apps on the same day.",
  "Day to day I work across the whole stack — Flutter on the client, Kotlin and Swift when the platform needs it, .NET and Python on the server, and Codemagic and Azure DevOps to get it all out the door. I care about clean architecture, predictable state, and writing things down so the next developer doesn't have to rediscover them.",
];

export type Role = {
  company: string;
  title: string;
  period: string;
  context: string;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "One Digital",
    title: "Software Developer",
    period: "Apr 2025 — Present",
    context:
      "Five-person team building and running the citizen-facing apps of a major Israeli municipality.",
    points: [
      "Develop and maintain three production Flutter apps, the largest at ~100k monthly active users and the others at ~60k.",
      "Led the migration from Firebase Dynamic Links to Branch.io across all three apps — vendor research, plan selection with Branch, and a coordinated joint release, since each app deep-links into the others.",
      "Built native deep linking end to end: Android App Links and iOS Universal Links (assetlinks.json / AASA), deferred links, and a stream-based link manager that resolves cold-start race conditions.",
      "Shipped OTP autofill across web and mobile together with the client's identity team, and managed Azure AD B2C token lifecycles across WebView and native contexts (PKCE, silent re-auth, JS-bridge logout).",
      "Built the app's WebView architecture on flutter_inappwebview, with a JavaScript bridge so the Flutter and web layers share state, navigation and auth.",
      "Implemented secure cross-app session sharing on Android with AccountManager and Google Tink (AES-256-GCM) behind a signature-protected ContentProvider; rolled out Firebase App Check across build flavors.",
      "Own the release pipeline: Codemagic and Azure DevOps builds and signing, multi-flavor production and staging configurations, Firebase App Distribution for testers, and publishing through App Store Connect and Google Play.",
      "On the backend: .NET services with Azure Cache for Redis and Key Vault, a Typesense search integration over a production Firestore dataset with Cloud Functions for document enrichment, and an IIS server pool.",
    ],
    stack: ["Flutter", "Kotlin", "Swift", ".NET", "Firebase", "Azure AD B2C", "Redis", "Typesense", "Codemagic"],
  },
  {
    company: "Triosoft",
    title: "Software Developer",
    period: "Jun 2023 — Apr 2025",
    context: "Software house delivering mobile products for hardware and medical-device clients.",
    points: [
      "Built the Flutter companion app for an FDA-approved medical wearable, plus an experimental native Java version to evaluate the platform trade-offs.",
      "Took over a .NET MAUI camera-calibration app for driver-monitoring systems (DMS) from a departing developer and owned it for nine months.",
      "Developed iOS UI and Bluetooth Low Energy integration for a line of connected aquarium accessories.",
    ],
    stack: ["Flutter", ".NET MAUI", "Java", "Swift", "BLE"],
  },
];

export type CaseStudy = {
  title: string;
  kicker: string;
  summary: string;
  details: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    kicker: "Migration · 3 apps",
    title: "Replacing Firebase Dynamic Links before the shutdown",
    summary:
      "Three municipal apps that link into each other, a deprecated link provider, and no room for broken links in production.",
    details: [
      "Compared providers against the client's needs and picked a Branch.io plan after a call with their team.",
      "Moved link handling to verified App Links and Universal Links, with Branch analytics tags per campaign.",
      "Released all three apps together so cross-app links never pointed at a version that couldn't open them.",
    ],
    tags: ["Branch.io", "App Links", "Universal Links", "Flutter"],
  },
  {
    kicker: "Security · Android",
    title: "One sign-in, shared safely between two apps",
    summary:
      "Users shouldn't have to log in twice to apps from the same publisher — but a shared token is a shared attack surface.",
    details: [
      "Stored the session with Android AccountManager, encrypted with Google Tink (AES-256-GCM).",
      "Exposed it only through a ContentProvider guarded by a signature-level permission, so only apps signed with the same key can read it.",
      "Coordinated Azure AD B2C token refresh and logout across native code and the embedded web app.",
    ],
    tags: ["Kotlin", "Tink", "Azure AD B2C", "OAuth / PKCE"],
  },
];

export type Project = {
  name: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Consumption-113",
    status: "Active · in use",
    description:
      "A secure field-logging web app for a defense unit: crews submit consumption reports from their phones, and admins review history and generate summary reports.",
    highlights: [
      "Every entry is encrypted server-side with AES-256-GCM before it is stored — the plaintext never touches storage.",
      "Serverless API on Vercel that appends to an encrypted, append-only log using the GitHub Contents API as a versioned datastore.",
      "One codebase serves two units through build-time flavors, with separate routing and branding.",
    ],
    stack: ["JavaScript", "Vercel Functions", "Node crypto", "GitHub API"],
    links: [
      { label: "Code", href: "https://github.com/JustMax7CB/Consumption-113" },
      { label: "Live", href: "https://tzrihot113.vercel.app" },
    ],
  },
  {
    name: "Gluc Safe",
    status: "B.Sc. final project · 2023",
    description:
      "A Flutter app for people with type 1 diabetes to log glucose, plan insulin doses and share their history with their doctor. Built with a teammate as our Software Engineering final project.",
    highlights: [
      "Glucose, meal, workout and weight logging, with warnings when a reading is out of range and an emergency-call shortcut.",
      "Bolus calculator, medication reminders via local and push notifications, and filterable glucose charts.",
      "PDF export of the patient's history for healthcare providers; Firebase Auth with Google sign-in and Firestore storage.",
    ],
    stack: ["Flutter", "Firebase", "Cloud Firestore", "FCM"],
    links: [{ label: "Code", href: "https://github.com/JustMax7CB/Gluc-Safe" }],
  },
  {
    name: "RecipeShopper",
    status: "In development",
    description:
      "A Flutter app that turns the recipes you plan to cook into a single, de-duplicated shopping list.",
    highlights: [
      "MVVM with GetIt for dependency injection.",
      "Offline-first local storage with Hive, synced to an Appwrite backend.",
    ],
    stack: ["Flutter", "Dart", "Hive", "Appwrite"],
    links: [],
  },
];

export const writing = [
  {
    title: "The Art of Deep Linking: What Most Guides Don't Tell You",
    date: "Jul 2025",
    readTime: "8 min read",
    summary:
      "What actually makes App Links and Universal Links work — the .well-known files, how to validate them, why servers silently break them, and when Android and iOS re-verify.",
    href: "https://medium.com/@itsjustmax9/the-art-of-deep-linking-what-most-guides-dont-tell-you-53bf71598814",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Mobile",
    items: ["Flutter / Dart", "BLoC · Cubit · Provider", "Kotlin", "Swift", ".NET MAUI", "Java", "BLE"],
  },
  {
    group: "Web",
    items: ["JavaScript", "React", "Next.js"],
  },
  {
    group: "Backend & Cloud",
    items: [".NET", "Python", "Node.js", "C / C++", "Firebase", "Azure AD B2C", "Typesense", "SQL Server", "IIS"],
  },
  {
    group: "Delivery",
    items: ["Codemagic", "Azure DevOps", "App Store Connect · Google Play", "Git · Bitbucket · GitLab", "Crashlytics · App Distribution", "Jira · Agile", "Clean Architecture", "GetIt · Injectable"],
  },
];

export const beyondCode = {
  intro: "Away from the keyboard: a language, a kitchen, and home.",
  items: [
    {
      glyph: "日本語",
      reading: "nihongo",
      title: "Japanese",
      text: "I love the Japanese language and study it every day. It's also where this site's look comes from.",
    },
    {
      glyph: "料理",
      reading: "ryōri",
      title: "Cooking",
      text: "I love cooking meals from three kitchens in particular: Italian, Japanese and Spanish.",
    },
    {
      glyph: "家族",
      reading: "kazoku",
      title: "Family",
      text: "Married, and sharing our home with two cats.",
    },
  ],
};

export const education = {
  degree: "B.Sc. Software Engineering",
  school: "Sami Shamoon College of Engineering",
  year: "2024",
};

export const certifications: { name: string; issuer: string; year?: string; href?: string }[] = [
  { name: "Full-Stack Developer", issuer: "TESI — The External Studies Institute" },
  {
    name: "Dart & Flutter: The Complete Flutter Development Course",
    issuer: "Udemy",
    year: "2022",
    href: "https://www.udemy.com/certificate/UC-257e7545-310a-4445-86a8-3ea462a8835a/",
  },
];

export const languages = ["Hebrew — native", "Russian — native", "English — professional"];
