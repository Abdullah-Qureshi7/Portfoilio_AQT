/**
 * SELECTED WORKS / PROJECTS
 * Put images in: public/assets/project-img/
 * featured: true → shown in Portfolio (top 6)
 * All items still power the hero background slider.
 */

export const projects = {
  title: "Portfolio",
  subtitle: "Selected client-inspired products and platforms I’ve built.",
  githubLabel: "View GitHub Repository",
  githubUrl: "https://github.com/Abdullah-Qureshi7",
  items: [
    {
      title: "Social Project",
      description:
        "NGO platform supporting Thalassemia patients, donor management, events, and impact stories for a real community organization.",
      image: "/assets/project-img/BDZB_Founation.png",
      tags: ["Django", "React", "PostgreSQL", "JavaScript", "Bootstrap"],
      link: "#",
      featured: true,
    },
    {
      title: "SafeSafar",
      description:
        "Smart transport system for student safety with live tracking, attendance, and parent to institution communication.",
      image: "/assets/project-img/SafeSafar.png",
      tags: ["Laravel", "PHP", "MySQL", "Google Maps", "Twilio"],
      link: "#",
      featured: true,
    },
    {
      title: "Fixit Vibe",
      description:
        "Civic complaint platform for reporting, tracking, and resolving local issues with a clear public workflow.",
      image: "/assets/project-img/Fixit_Vibe.png",
      tags: ["Django", "Python", "JavaScript", "Bootstrap", "SQLite"],
      link: "#",
      featured: true,
    },
    {
      title: "CMS Dashboard",
      description:
        "Modern content management dashboard for content, users, and analytics, built for real CMS style workflows.",
      image: "/assets/project-img/CMS_DashBoard.png",
      tags: ["Django", "JavaScript", "Bootstrap", "PostgreSQL"],
      link: "#",
      featured: true,
    },
    {
      title: "AI Price Trend Analyzer",
      description:
        "ML-powered analytics dashboard that forecasts commodity price trends with clear, interactive insights.",
      image: "/assets/project-img/AI_Price_Analyzer.png",
      tags: ["Python", "Streamlit", "Pandas", "Scikit-learn", "ARIMA"],
      link: "#",
      featured: true,
    },
    {
      title: "AQT AI",
      description:
        "Intelligent conversational AI platform for context-aware chats powered by modern LLMs.",
      image: "/assets/project-img/AQT_AI.png",
      tags: ["Python", "Flask", "OpenRouter", "JavaScript", "Bootstrap"],
      link: "#",
      featured: true,
    },
    {
      title: "Software Quality Assurance",
      description:
        "A Software Quality Assurance portfolio showcasing experience in manual testing, test case design, defect reporting, API testing, and Agile workflows.",
      image: "/assets/project-img/SQA_Manual_Automation_Testing.png",
      tags: [
        "Postman",
        "Selenium",
        "Playwright",
        "Manual Testing",
        "JMeter",
        "Jira",
      ],
      link: "#",
      featured: false,
    },
    {
      title: "Talks AI",
      description:
        "An AI-powered content and conversation experience connected to the Abdullah Qureshi Talks brand.",
      image: "/assets/project-img/Talks_AI.png",
      tags: ["Python", "Flask", "AI APIs", "JavaScript"],
      link: "#",
      featured: false,
    },
  ],
};

export const featuredProjects = projects.items.filter((item) => item.featured);
