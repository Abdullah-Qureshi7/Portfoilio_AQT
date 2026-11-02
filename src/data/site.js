/**
 * SITE-WIDE SETTINGS
 * Edit this file to change name, contact info, navigation, and social links.
 */

export const site = {
  name: "Abdullah Qureshi",
  brand: "Abdullah Qureshi Talks",
  role: "Software Engineer",
  studio: "InnovenceSolutions",
  tagline:
    "Python Backend Developer building reliable, well tested software, one API at a time.",
  description:
    "Abdullah Qureshi Talks. Python Backend Developer specializing in Django, REST APIs, and QA. Open for freelance work.",
  logo: "/assets/logo-clear.png",
  resume: "/assets/resume/Abdullah_Qureshi_Resume.pdf",
  location: "Pakistan",
  email: "abdullahahmedwala@gmail.com",
  phone: "+92 314-3501562",
  phoneWhatsApp: "923143501562",
  githubUrl: "https://github.com/Abdullah-Qureshi7",
  youtubeChannel: "https://www.youtube.com/@AbdullahQureshiTalks",
};

/** Navbar + mobile menu links */
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

/** Footer quick links */
export const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "YouTube", href: "#youtube" },
];

/** Social icons in the footer — row 1 primary, row 2 secondary */
export const socialPrimary = [
  {
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/abdullah-qureshi-756777251",
  },
  {
    label: "GitHub",
    icon: "fa-brands fa-github",
    href: "https://github.com/Abdullah-Qureshi7",
  },
  {
    label: "YouTube",
    icon: "fa-brands fa-youtube",
    href: "https://www.youtube.com/@AbdullahQureshiTalks",
  },
  {
    label: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
    href: "https://wa.me/923143501562?text=Hello%20I%20want%20to%20know%20about%20your%20services.",
  },
];

export const socialSecondary = [
  {
    label: "Facebook",
    icon: "fa-brands fa-facebook",
    href: "https://www.facebook.com/profile.php?id=100081323439238",
  },
  {
    label: "Instagram",
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/abdullahqureshi70786",
  },
  {
    label: "Threads",
    icon: "fa-brands fa-threads",
    href: "https://www.threads.net/@abdullahqureshi70786",
  },
  {
    label: "TikTok",
    icon: "fa-brands fa-tiktok",
    href: "https://www.tiktok.com/@abdullahqureshi.com?lang=en",
  },
];

export const socialLinks = [...socialPrimary, ...socialSecondary];
