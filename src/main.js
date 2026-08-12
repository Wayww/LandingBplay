import {
  CONTACTS,
  benefits,
  ecosystem,
  faq,
  heroFacts,
  marketFacts,
  opportunities,
  sources,
  team,
  whatCards
} from "./data.js";

const iconPaths = {
  analytics: '<path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19V3"/>',
  clapper: '<path d="M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z"/><path d="m4 11 3-6h13v6"/><path d="m8 5 3 6"/><path d="m14 5 3 6"/><path d="m10 15 4 2-4 2v-4Z"/>',
  dollar: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M15 9.5c-.7-.7-1.6-1-2.8-1-1.5 0-2.6.7-2.6 1.8 0 1.2 1.1 1.6 2.7 1.9 1.7.4 2.8.8 2.8 2.1s-1.2 2.1-2.9 2.1c-1.3 0-2.4-.4-3.2-1.2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.3 2.5 3.4 5.5 3.4 9S14.3 18.5 12 21c-2.3-2.5-3.4-5.5-3.4-9S9.7 5.5 12 3Z"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.2 14.4A6 6 0 1 1 15.8 14c-.9.7-1.3 1.5-1.5 2.5H9.7c-.2-.9-.6-1.6-1.5-2.1Z"/>',
  mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  phone: '<rect x="8" y="3" width="8" height="18" rx="2"/><path d="M11 18h2"/>',
  play: '<path d="m8 5 11 7-11 7V5Z"/>',
  screen: '<rect x="3" y="5" width="14" height="10" rx="1.5"/><path d="M8 19h8"/><path d="M12 15v4"/><path d="M18 10h3v9h-5v-4"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/><path d="M8 10.8 10 13l4-5"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  trend: '<path d="M3 17 9 11l4 4 8-8"/><path d="M14 7h7v7"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  whatsapp: '<path d="M4.2 19.8 5.5 16A8 8 0 1 1 8 18.4l-3.8 1.4Z"/><path d="M9 8.8c.2 3 2.3 5.1 5.2 5.9l1.1-1.1c.3-.3.7-.4 1.1-.2l1.3.6"/>'
};

const renderIcon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] ?? iconPaths.star}</svg>`;
const iconBox = (name) => `<span class="icon-box">${renderIcon(name)}</span>`;
const renderCopy = (item) => item.mobileDescription
  ? `<span class="copy-desktop">${item.description}</span><span class="copy-mobile">${item.mobileDescription}</span>`
  : item.description;

const contactLabel = {
  telegram: { title: "Telegram", fallback: "Контакт будет добавлен", icon: "send" },
  whatsapp: { title: "WhatsApp", fallback: "Контакт будет добавлен", icon: "whatsapp" },
  email: { title: "Email", fallback: "Контакт будет добавлен", icon: "mail" }
};

function contactHref(type) {
  const value = CONTACTS[type];
  if (!value) return "#contact";
  if (type === "email") return `mailto:${value}`;
  return value;
}

function normalizeContactLinks() {
  document.querySelectorAll(".contact-link").forEach((link) => {
    const type = link.dataset.contact;
    const value = CONTACTS[type];
    link.href = contactHref(type);
    if (!value) {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.title = "Контакт будет добавлен перед production launch";
    } else if (type !== "email") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
}

function renderHeroFacts() {
  const root = document.querySelector('[data-render="heroFacts"]');
  root.innerHTML = heroFacts.map((item) => `
    <article class="hero-fact">
      ${iconBox(item.icon)}
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

function renderFeatureCards(selector, items, variant = "") {
  const root = document.querySelector(`[data-render="${selector}"]`);
  root.innerHTML = items.map((item) => `
    <article class="feature-card ${variant}">
      ${item.icon ? iconBox(item.icon) : ""}
      ${item.number ? `<span class="feature-card__number">${item.number}</span>` : ""}
      <h3>${item.title}</h3>
      <p>${renderCopy(item)}</p>
    </article>
  `).join("");
}

function renderStructuredCards(selector, items) {
  const root = document.querySelector(`[data-render="${selector}"]`);
  root.innerHTML = items.map((item) => `
    <article class="feature-card">
      <div class="feature-card__head">
        ${iconBox(item.icon)}
        <span class="feature-card__number">${item.number}</span>
      </div>
      <div class="feature-card__line" aria-hidden="true"></div>
      <h3>${item.title}</h3>
      <p>${renderCopy(item)}</p>
    </article>
  `).join("");
}

function renderSources() {
  const root = document.querySelector('[data-render="sources"]');
  root.innerHTML = `<span class="sources__label">Источники</span>${sources.map((source) => `
    <a href="${source.url}" target="_blank" rel="noopener noreferrer" data-analytics="source_click">
      ${source.label} <span aria-hidden="true">↗</span>
    </a>
  `).join("")}`;
}

function renderTeam() {
  const root = document.querySelector('[data-render="team"]');
  root.innerHTML = team.map((person) => `
    <article class="team-card">
      <div class="team-card__image">
        <img src="${person.image}" width="314" height="330" alt="${person.name}" loading="lazy" />
      </div>
      <div class="team-card__body">
        <h3>${person.name}</h3>
        <p class="team-card__role">${person.role}</p>
        ${person.detail ? `<p class="team-card__detail">${person.detail}</p>` : ""}
      </div>
    </article>
  `).join("");
}

function renderFaq() {
  const root = document.querySelector('[data-render="faq"]');
  root.innerHTML = faq.map((item, index) => {
    const expanded = index === 0;
    return `
      <div class="accordion-item">
        <button class="accordion-button" type="button" aria-expanded="${expanded}" aria-controls="faq-panel-${index}" id="faq-button-${index}" data-faq-button>
          <span class="accordion-button__mark" aria-hidden="true">${expanded ? "−" : "+"}</span>
          <strong>${index + 1}. ${item.question}</strong>
          <span class="accordion-button__chev" aria-hidden="true">⌄</span>
        </button>
        <div class="accordion-panel ${expanded ? "is-open" : ""}" id="faq-panel-${index}" role="region" aria-labelledby="faq-button-${index}">
          <div><p>${item.answer}</p></div>
        </div>
      </div>
    `;
  }).join("");
}

function renderContacts() {
  const root = document.querySelector('[data-render="contacts"]');
  root.innerHTML = Object.entries(contactLabel).map(([type, meta]) => {
    const value = CONTACTS[type] || meta.fallback;
    const disabled = CONTACTS[type] ? "" : " is-disabled";
    return `
      <a class="contact-card contact-link${disabled}" data-contact="${type}" href="${contactHref(type)}" aria-label="${meta.title}: ${value}">
        <span class="contact-card__icon">${renderIcon(meta.icon)}</span>
        <span>
          <h3>${meta.title}</h3>
          <p>${value}</p>
        </span>
        <span class="contact-card__arrow" aria-hidden="true">→</span>
      </a>
    `;
  }).join("");
}

function hydrateIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = renderIcon(node.dataset.icon);
  });
}

function setupFaq() {
  const buttons = [...document.querySelectorAll("[data-faq-button]")];
  const closeItem = (button) => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", "false");
    button.querySelector(".accordion-button__mark").textContent = "+";
    panel.classList.remove("is-open");
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const next = button.getAttribute("aria-expanded") !== "true";
      if (next && window.matchMedia("(max-width: 767px)").matches) {
        buttons.filter((item) => item !== button).forEach(closeItem);
      }
      button.setAttribute("aria-expanded", String(next));
      button.querySelector(".accordion-button__mark").textContent = next ? "−" : "+";
      panel.classList.toggle("is-open", next);
      window.dispatchEvent(new CustomEvent("landing:analytics", { detail: { event: "faq_open", faq_index: index } }));
    });
  });
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}

function setupMobileMenu() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");
  const links = [...menu.querySelectorAll("a")];

  const setOpen = (open) => {
    button.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    if (open) links[0]?.focus();
  };

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("click", (event) => {
    if (menu.hidden) return;
    if (menu.contains(event.target) || button.contains(event.target)) return;
    setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
    if (event.key !== "Tab" || menu.hidden) return;
    const focusable = [button, ...links];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function setupReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");
  if (reduce) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .18 });
  items.forEach((item) => observer.observe(item));
}

function setupHeroParallax() {
  const visual = document.querySelector(".hero__visual img");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!visual || reduce || !finePointer) return;

  document.querySelector(".hero").addEventListener("pointermove", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    visual.style.transform = `translate(${8 + x * 8}px, ${20 + y * 8}px) rotate(${x * .35}deg)`;
  });
}

function setupDisabledContacts() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest(".contact-link.is-disabled");
    if (!link) return;
    event.preventDefault();
  });
}

function render() {
  renderHeroFacts();
  renderFeatureCards("marketFacts", marketFacts, "feature-card--metric");
  renderSources();
  renderFeatureCards("opportunities", opportunities);
  renderStructuredCards("whatCards", whatCards);
  renderStructuredCards("ecosystem", ecosystem);
  renderFeatureCards("benefits", benefits);
  renderTeam();
  renderFaq();
  renderContacts();
  hydrateIcons();
  normalizeContactLinks();
}

render();
setupFaq();
setupHeader();
setupMobileMenu();
setupReveal();
setupHeroParallax();
setupDisabledContacts();
