
export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  location: string;
  description: string;
  image: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    stats: {
      projects: string;
      experience: string;
      clients: string;
    };
    featuredProjects: string;
  };
  about: {
    title: string;
    subtitle: string;
    vision: string;
    visionText: string;
    mission: string;
    missionText: string;
    history: string;
  };
  services: {
    title: string;
    desc: string;
    items: {
      civil: string;
      oilGas: string;
      mechanical: string;
      supply: string;
    };
  };
  contact: {
    title: string;
    info: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    send: string;
    address: string;
    phone: string;
  };
}
