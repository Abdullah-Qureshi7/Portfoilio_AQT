/**
 * Chatbot knowledge — built from Abdullah's portfolio.
 * When you add an API key later, this text is sent as context to the model.
 */

import { site, socialLinks } from "./site";
import { services } from "./services";
import { projects } from "./projects";
import { stack } from "./stack";
import { experience } from "./experience";
import { faq } from "./faq";

export const chatbotConfig = {
  name: "AQT Assistant",
  welcome:
    "Hi! I'm Abdullah's portfolio assistant. Ask me about his services, projects, skills, or how to contact him.",
  placeholder: "Ask about services, projects, contact...",
  suggestions: [
    "What services do you offer?",
    "Show me your projects",
    "How can I contact Abdullah?",
    "What is your tech stack?",
  ],
};

/** Compact knowledge string for AI APIs */
export function buildKnowledgeContext() {
  const serviceList = services.items
    .map((s) => `- ${s.title}: ${s.description} (${s.meta})`)
    .join("\n");

  const projectList = projects.items
    .map((p) => `- ${p.title}: ${p.description} [${p.tags.join(", ")}]`)
    .join("\n");

  const skills = stack.groups
    .map((g) => `${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const socials = socialLinks.map((s) => `${s.label}: ${s.href}`).join("\n");

  const exp = experience.items
    .map((e) => `- ${e.date} | ${e.company}: ${e.description}`)
    .join("\n");

  const faqs = faq.items
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");

  return `
You are the portfolio assistant for ${site.name} (${site.brand}).
Role: ${site.role}. Studio: ${site.studio}.
Location: ${site.location}.
Tagline: ${site.tagline}

Contact:
- Email: ${site.email}
- Phone: ${site.phone}
- WhatsApp: https://wa.me/${site.phoneWhatsApp}
- Resume: ${site.resume}
- GitHub: ${site.githubUrl}
- YouTube: ${site.youtubeChannel}

Social media:
${socials}

Services:
${serviceList}

Projects:
${projectList}

Skills:
${skills}

Experience:
${exp}

FAQ:
${faqs}

Rules:
- Answer only about Abdullah, his work, services, projects, skills, pricing process, and contact.
- Be friendly, short, and professional.
- If asked to hire or start a project, share email/WhatsApp and suggest the contact form.
- If you don't know something, say so and suggest contacting Abdullah directly.
- Do not invent clients, prices, or fake project results.
`.trim();
}

/**
 * Local fallback replies (works without any API key).
 */
export function localChatReply(message) {
  const q = String(message || "").toLowerCase().trim();

  if (!q) {
    return "Please type a question about Abdullah's services, projects, or contact info.";
  }

  if (/(hi|hello|hey|salam|assalam)/.test(q)) {
    return `Hello! I'm ${chatbotConfig.name}. I can tell you about ${site.name}'s services, projects, skills, and how to get in touch.`;
  }

  if (/(who are you|your name|about you|about abdullah|who is abdullah)/.test(q)) {
    return `${site.name} is an ${site.role} and founder of ${site.studio}, based in ${site.location}. ${site.tagline}`;
  }

  if (/(service|offer|do you do|what can you|hire)/.test(q)) {
    const list = services.items.map((s) => `• ${s.title}`).join("\n");
    return `Abdullah offers:\n${list}\n\nWant details on one service? Ask by name (e.g. "AI chatbot" or "backend API").`;
  }

  if (/(project|portfolio|work|fixit|safesafar|bdzb|aqt|cms|talks)/.test(q)) {
    const match = projects.items.find((p) =>
      q.includes(p.title.toLowerCase().split(" ")[0].toLowerCase()) ||
      p.title.toLowerCase().split(" ").some((w) => w.length > 3 && q.includes(w.toLowerCase()))
    );
    if (match) {
      return `${match.title}: ${match.description}\nTech: ${match.tags.join(", ")}`;
    }
    const list = projects.items.map((p) => `• ${p.title}`).join("\n");
    return `Here are Abdullah's featured projects:\n${list}\n\nAsk about any project by name for details.`;
  }

  if (/(skill|stack|technolog|python|django|fastapi|react)/.test(q)) {
    const list = stack.groups
      .map((g) => `• ${g.title}: ${g.items.join(", ")}`)
      .join("\n");
    return `Tech stack:\n${list}`;
  }

  if (/(experience|intern|work history|intrapreneur|skill hunger|harbor)/.test(q)) {
    const list = experience.items
      .map((e) => `• ${e.date} — ${e.company}`)
      .join("\n");
    return `Recent experience:\n${list}\n\nAsk about a company name for more detail.`;
  }

  if (/(contact|email|phone|whatsapp|reach|cv|resume)/.test(q)) {
    return `You can reach Abdullah at:\n• Email: ${site.email}\n• Phone: ${site.phone}\n• WhatsApp: https://wa.me/${site.phoneWhatsApp}\n• Resume: available on the Contact section\n\nOr use the contact form on this site.`;
  }

  if (/(social|linkedin|youtube|instagram|github|facebook|tiktok|threads)/.test(q)) {
    const list = socialLinks.map((s) => `• ${s.label}: ${s.href}`).join("\n");
    return `Social profiles:\n${list}`;
  }

  if (/(price|cost|rate|payment|fee)/.test(q)) {
    return `Pricing depends on project scope. After a short discovery call, Abdullah shares a clear estimate. Payments usually via bank transfer, Payoneer, or Wise.`;
  }

  if (/(thank|shukriya|thanks)/.test(q)) {
    return "You're welcome! If you want to start a project, use the Contact section or WhatsApp.";
  }

  // Soft match services by keywords
  const serviceHit = services.items.find(
    (s) =>
      q.includes(s.title.toLowerCase()) ||
      s.title
        .toLowerCase()
        .split(/\s+/)
        .some((w) => w.length > 4 && q.includes(w))
  );
  if (serviceHit) {
    return `${serviceHit.title}: ${serviceHit.description}\nTools: ${serviceHit.meta}`;
  }

  return `I can help with Abdullah's services, projects, skills, experience, and contact/social links.\n\nTry asking:\n• "What services do you offer?"\n• "Tell me about Fixit Vibe"\n• "How can I contact Abdullah?"`;
}
