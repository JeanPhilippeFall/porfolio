export type Lang = "fr" | "en";

export interface Bilingual {
  fr: string;
  en: string;
}

export const site = {
  name: "Jean Philippe Fall",
  initials: "JF",
  role: {
    fr: "Ingénieur de Conception & Développeur Full Stack",
    en: "Software Engineer & Full Stack Developer",
  } satisfies Bilingual,
  tagline: {
    fr: "Sensibilité DevOps — conception, déploiement et maintien en condition opérationnelle de plateformes critiques.",
    en: "DevOps-minded — designing, deploying and operating critical multi-stack platforms.",
  } satisfies Bilingual,
  location: "Dakar, Sénégal",
  email: "jpfall13@gmail.com",
  phone: "+221 77 701 31 62",
  cvFile: "/CV_JEAN_PHILIPPE_FALL.pdf",
  socials: {
    github: "https://github.com/JeanPhilippeFall",
    linkedin: "https://www.linkedin.com/in/jean-philippe-fall-774b65138/",
  },
};

export const about: Bilingual = {
  fr:
    "Ingénieur de Conception & Développeur Full Stack, sensibilité DevOps, plus de 4 ans d'expérience professionnelle cumulée (stages inclus) dans la conception, le déploiement et le maintien en condition opérationnelle (MCO) de plateformes critiques multi-stack. Autonome sur l'ensemble du cycle de vie projet, de la conception à la mise en œuvre, en passant par les jalons de développement et les phases de recette, dans une démarche Agile/Scrum. Profil international et polyvalent, engagé dans la veille technologique.",
  en:
    "Software Engineer & Full Stack Developer with a DevOps mindset, 4+ years of combined professional experience (internships included) designing, deploying and operating critical multi-stack platforms. Autonomous across the full project lifecycle — from design to delivery, through development milestones and QA phases — following Agile/Scrum practices. International, versatile profile with a strong interest in staying current with technology.",
};

export const interests: Bilingual = {
  fr: "Football · Natation · Documentation & culture générale · Veille technologique",
  en: "Football · Swimming · Reading & general knowledge · Technology watch",
};

export const languages = [
  { name: { fr: "Wolof", en: "Wolof" }, level: { fr: "Langue maternelle", en: "Native" } },
  { name: { fr: "Français", en: "French" }, level: { fr: "C2 — Bilingue", en: "C2 — Bilingual" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "B2 — Courant", en: "B2 — Fluent" } },
];

export interface Experience {
  company: string;
  location: string;
  role: Bilingual;
  period: Bilingual;
  bullets: Bilingual[];
}

export const experiences: Experience[] = [
  {
    company: "IAD-Territoire-Digital",
    location: "Besançon, France",
    role: { fr: "Ingénieur de Conception & Développeur Full Stack", en: "Software Engineer & Full Stack Developer" },
    period: { fr: "Juillet 2023 — aujourd'hui", en: "July 2023 — present" },
    bullets: [
      {
        fr: "Conception, développement et MCO de 4 plateformes clients multi-stack (Symfony, Java/Angular, Drupal) — détail dans « Missions clés ».",
        en: "Design, development and operations of 4 multi-stack client platforms (Symfony, Java/Angular, Drupal) — see “Key missions” below.",
      },
      {
        fr: "Mise en place de pipelines CI/CD (GitLab CI) et de playbooks Ansible pour automatiser le build d'images Docker et les déploiements multi-environnements (dev/test/prod/relais).",
        en: "Built CI/CD pipelines (GitLab CI) and Ansible playbooks to automate Docker image builds and multi-environment deployments (dev/test/prod/standby).",
      },
      {
        fr: "Définition et pilotage des stratégies de sauvegarde (backups journaliers/mensuels) et d'une réplication master/slave entre production et relais, dans le cadre des PRA.",
        en: "Defined and ran backup strategies (daily/monthly) and master/slave replication between production and standby, as part of disaster-recovery plans.",
      },
      {
        fr: "Conception et exposition d'API REST propriétaires, intégration d'API tierces et de bibliothèques JS pour enrichir les interfaces Angular.",
        en: "Designed and exposed proprietary REST APIs, integrated third-party APIs and JS libraries to enrich Angular interfaces.",
      },
    ],
  },
  {
    company: "ONG Rosa del Desierto",
    location: "Nouadhibou, Mauritanie",
    role: { fr: "Assistant IT & Gestion de données numériques", en: "IT Assistant & Digital Data Management" },
    period: { fr: "Septembre 2022 — Juillet 2023", en: "September 2022 — July 2023" },
    bullets: [
      {
        fr: "Exploitation et structuration des données de collecte terrain (Excel/Access), scripts VBA pour automatiser rapports de diagnostic et statistiques.",
        en: "Processed and structured field-collected data (Excel/Access); VBA scripts automating diagnostic and statistical reports.",
      },
      {
        fr: "Sécurisation des données sensibles et supervision des cycles de backup.",
        en: "Secured sensitive data and supervised backup cycles.",
      },
      {
        fr: "Support technique, gestion et maintenance du parc informatique.",
        en: "Technical support, management and maintenance of the IT fleet.",
      },
    ],
  },
  {
    company: "Innov4Africa",
    location: "Dakar, Sénégal",
    role: { fr: "Stagiaire Ingénieur Développeur Full Stack", en: "Full Stack Developer Engineering Intern" },
    period: { fr: "Mars 2021 — Juillet 2021", en: "March 2021 — July 2021" },
    bullets: [
      {
        fr: "Conception de l'architecture d'une plateforme dématérialisée de formulaires administratifs.",
        en: "Designed the architecture of a digital administrative-forms platform.",
      },
      {
        fr: "Développement du back-office sur une stack EJB (JEE), avec une API REST dédiée à la production/consommation de ressources depuis le front.",
        en: "Developed the back-office on an EJB (JEE) stack, with a dedicated REST API for producing/consuming resources from the front end.",
      },
    ],
  },
  {
    company: "CRENT-ESP",
    location: "Dakar, Sénégal",
    role: { fr: "Stagiaire Analyste Programmeur", en: "Programmer Analyst Intern" },
    period: { fr: "Juin 2018 — Août 2018", en: "June 2018 — August 2018" },
    bullets: [
      {
        fr: "Refonte d'une plateforme de gestion des évaluations et absences sur une stack HTML/CSS/PHP/JS.",
        en: "Rebuilt an evaluations and attendance management platform on an HTML/CSS/PHP/JS stack.",
      },
    ],
  },
];

export interface Mission {
  name: string;
  client: Bilingual;
  stack: string[];
  description: Bilingual;
}

export const missions: Mission[] = [
  {
    name: "Mirabelle",
    client: { fr: "Soelis, SR51, Services de Remplacement (Nord, Ille-et-Vilaine)", en: "Soelis, SR51, Services de Remplacement (Nord, Ille-et-Vilaine)" },
    stack: ["Symfony", "Sonata", "MySQL", "Docker"],
    description: {
      fr: "Maintenance évolutive et corrective d'une plateforme SaaS de gestion RH & emploi partagé, en architecture multi-instance (une instance par client).",
      en: "Feature and bug-fix maintenance of a SaaS HR / shared-employment platform, in a multi-instance architecture (one instance per client).",
    },
  },
  {
    name: "ADN-BA",
    client: { fr: "SNCF Réseau", en: "SNCF Réseau" },
    stack: ["Java", "Angular", "PostgreSQL"],
    description: {
      fr: "Conception, développement et déploiement de la plateforme de gestion des bases arrière ; MCO complet.",
      en: "Design, development and deployment of the rear-base management platform; full operational maintenance.",
    },
  },
  {
    name: "SNCF-LNC",
    client: { fr: "SNCF Réseau — région Bourgogne-Franche-Comté", en: "SNCF Réseau — Bourgogne-Franche-Comté region" },
    stack: ["Symfony", "Sonata", "MySQL"],
    description: {
      fr: "Développement et pilotage du MCO de la plateforme de gestion des lignes non circulées.",
      en: "Development and operational maintenance of the decommissioned-lines management platform.",
    },
  },
  {
    name: "ATMO-BFC",
    client: { fr: "Surveillance environnementale — Bourgogne-Franche-Comté", en: "Environmental monitoring — Bourgogne-Franche-Comté" },
    stack: ["Drupal", "API REST", "PHP"],
    description: {
      fr: "Déploiement et MCO de la plateforme de qualité de l'air : exploitation et export des données de mesure via API internes et externes.",
      en: "Deployment and operations of the air-quality platform: exploiting and exporting measurement data via internal and external APIs.",
    },
  },
];

export interface SkillGroup {
  title: Bilingual;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: { fr: "Front-end", en: "Front-end" }, items: ["HTML5", "CSS3", "JavaScript", "Angular"] },
  { title: { fr: "Back-end", en: "Back-end" }, items: ["Java", "PHP", "EJB / JEE", "Drupal", "Symfony / Sonata", "MySQL", "PostgreSQL"] },
  { title: { fr: "DevOps / Infra", en: "DevOps / Infra" }, items: ["Docker", "GitLab CI/CD", "Ansible", "Backup & PRA", "Réplication Master/Slave"] },
  { title: { fr: "Méthodologie", en: "Methodology" }, items: ["Agile", "Scrum", "Pair programming", "Code review"] },
  { title: { fr: "Bureautique / Scripting", en: "Office / Scripting" }, items: ["Excel", "Access", "VBA"] },
  { title: { fr: "Systèmes", en: "Systems" }, items: ["Linux", "Windows"] },
];

export interface EducationItem {
  school: string;
  location: string;
  period: Bilingual;
  title: Bilingual;
}

export const education: EducationItem[] = [
  {
    school: "École Supérieure Polytechnique (ESP)",
    location: "Dakar, Sénégal",
    period: { fr: "Octobre 2018 — Août 2021", en: "October 2018 — August 2021" },
    title: { fr: "Diplôme d'Ingénieur de Conception — Option Informatique", en: "Engineering Degree — Computer Science" },
  },
  {
    school: "École Supérieure Polytechnique (ESP)",
    location: "Dakar, Sénégal",
    period: { fr: "Octobre 2016 — Août 2018", en: "October 2016 — August 2018" },
    title: { fr: "Diplôme Universitaire de Technologie (DUT) — Option Informatique", en: "University Diploma of Technology — Computer Science" },
  },
  {
    school: "Lycée Cheikh Hamidou Kane",
    location: "Dakar, Sénégal",
    period: { fr: "Octobre 2013 — Juillet 2016", en: "October 2013 — July 2016" },
    title: { fr: "Baccalauréat — Sciences Expérimentales (S2)", en: "Baccalauréat — Experimental Sciences (S2)" },
  },
];

export interface Certification {
  name: string;
  year: string;
  description: Bilingual;
}

export const certifications: Certification[] = [
  {
    name: "OPQUAST — Assurance Qualité Web",
    year: "2024",
    description: {
      fr: "Règles d'assurance qualité web, détection des coûts de non-qualité, consolidation des livrables.",
      en: "Web quality-assurance rules, non-quality cost detection, deliverable consolidation.",
    },
  },
];

export const nav: { id: string; label: Bilingual }[] = [
  { id: "about", label: { fr: "À propos", en: "About" } },
  { id: "experience", label: { fr: "Expérience", en: "Experience" } },
  { id: "missions", label: { fr: "Missions", en: "Missions" } },
  { id: "skills", label: { fr: "Compétences", en: "Skills" } },
  { id: "education", label: { fr: "Formation", en: "Education" } },
  { id: "contact", label: { fr: "Contact", en: "Contact" } },
];

export const ui = {
  heroCta: { fr: "Télécharger le CV", en: "Download CV" } satisfies Bilingual,
  heroContact: { fr: "Me contacter", en: "Contact me" } satisfies Bilingual,
  contactTitle: { fr: "Parlons de votre projet", en: "Let's talk about your project" } satisfies Bilingual,
  contactSubtitle: {
    fr: "Disponible pour des missions freelance, des collaborations ou simplement échanger.",
    en: "Available for freelance work, collaborations, or just to chat.",
  } satisfies Bilingual,
  footer: {
    fr: "Conçu & développé avec Astro.",
    en: "Designed & built with Astro.",
  } satisfies Bilingual,
};
