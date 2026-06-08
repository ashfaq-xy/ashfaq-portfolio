import { Project, Skill, Experience, SocialLink } from "./types";

// ─── PERSONAL INFO ───────────────────────────────────────────────
export const personalInfo = {
  name: "Md Ashfaq",
  tagline: "Aspiring AI/ML Developer",
  heroSubtitle: "Turning data into insight, one model at a time.",
  about:
    "Hi, I'm Ashfaq — an MCA student at SRM Institute of Science and Technology with a growing passion for Artificial Intelligence and Machine Learning. I enjoy working with Python and data, and I'm focused on building practical skills through real projects. Most recently I shipped a customer support chatbot using Azure AI services. I'm actively looking for internship or collaboration opportunities in AI/ML.",
  email: "work.mdashfaq@gmail.com",
  location: "New Delhi, India",
  availability: "Open to internships & collaborations",
  resumeUrl: "/ashfaq_cv.pdf",
  profileImage: "/profile.jpg",
};

// ─── SOCIAL LINKS ────────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ashfaq-xy",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mdashfaq",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:work.mdashfaq@gmail.com",
    icon: "mail",
  },
];

// ─── STATS (shown on home page) ─────────────────────────────────
export const stats = [
  { label: "Projects Built", value: "1+" },
  { label: "Certifications", value: "3" },
  { label: "Pursuing", value: "MCA" },
];

// ─── PROJECTS ────────────────────────────────────────────────────
// To add a new project:
//   1. Copy one of the objects below
//   2. Fill in your project details
//   3. Set comingSoon to false (or remove the field)
//   4. Push to GitHub — Vercel auto-deploys
export const projects: Project[] = [
  {
    id: "azure-chatbot",
    title: "Azure DevHack Chatbot",
    description:
      "A customer support chatbot built during the Microsoft Azure DevHack hackathon. Uses Azure Bot Service and Azure Cognitive Services (QnA Maker / Language Understanding) to handle FAQs and route complex queries. Integrated with a simple web frontend. Led a team of four to design and deploy the solution within the hackathon timeframe.",
    tags: ["Python", "Azure Bot Service", "Azure Cognitive Services", "HTML/CSS"],
    github: "https://github.com/ashfaq-xy",
  },
  {
    id: "coming-soon-1",
    title: "ML Project — Coming Soon",
    description:
      "Currently working on a machine learning project. Details will be updated here once the project is ready to showcase.",
    tags: ["Python", "scikit-learn", "Pandas"],
    comingSoon: true,
  },
  {
    id: "coming-soon-2",
    title: "Data Analysis Project — Coming Soon",
    description:
      "An upcoming data analysis project exploring real-world datasets. Stay tuned for updates.",
    tags: ["Python", "Jupyter", "Matplotlib"],
    comingSoon: true,
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "HTML / CSS", category: "language" },
  { name: "Bootstrap", category: "language" },
  { name: "Advanced Excel", category: "language" },

  // Tools & Environments
  { name: "Jupyter Notebook", category: "tool" },
  { name: "Anaconda", category: "tool" },
  { name: "Git & GitHub", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Canva", category: "tool" },
  { name: "Netlify", category: "tool" },

  // Certifications
  { name: "Python for Everybody", category: "certification", issuer: "Coursera", year: "2023" },
  { name: "Web Development Bootcamp", category: "certification", issuer: "Udemy", year: "2023" },
  { name: "Introduction to SQL", category: "certification", issuer: "Online", year: "2023" },
];

// ─── EXPERIENCE & EDUCATION ─────────────────────────────────────
export const experience: Experience[] = [
  {
    id: "urbanclap",
    role: "Business Development Analyst",
    company: "Urbanclap Technologies India Pvt. Ltd.",
    period: "August 2024 – Present",
    description: [
      "Managed daily quality audits of 400–450 partner submissions, ensuring service compliance and validating the AI Recheck workflow to improve audit accuracy.",
      "Drove market and competitor research to identify trends; produced spreadsheet-based performance analyses enabling data-backed decisions for category growth.",
      "Collaborated with cross-functional teams to evaluate campaign impact and support strategic decision-making through timely analytical reports.",
    ],
    type: "work",
  },
  {
    id: "tutor",
    role: "Part-Time Tutor",
    company: "Self-Employed",
    period: "2020 – Present",
    description: [
      "Provide individualized tutoring to students in grades 6–10 across Mathematics, Science, and English.",
      "Design personalized lesson plans tailored to each student's learning style and academic needs.",
    ],
    type: "work",
  },
];

export const education: Experience[] = [
  {
    id: "mca",
    role: "Master of Computer Application (MCA)",
    company: "S.R.M. Institute of Science & Technology",
    period: "2024 – Present",
    description: [
      "Relevant coursework: Data Analysis, Python Programming, Java and Android Applications Development.",
    ],
    type: "education",
  },
  {
    id: "bca",
    role: "Bachelor of Computer Application (BCA)",
    company: "D.P.G. Institute of Technology & Management",
    period: "2020 – 2023",
    description: [
      "Relevant coursework: Data Structures, Management Information Systems, Web Development, Operating Systems.",
    ],
    type: "education",
  },
];
