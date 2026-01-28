
import { TranslationSchema } from './types';

export const translations: Record<'en' | 'ar', TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact Us"
    },
    home: {
      heroTitle: "Building the Future with Trust and Innovation",
      heroSubtitle: "Jannat Al-Fayhaa Co. for General Contracting, Trading, and Public Transport. Your reliable partner in large-scale infrastructure.",
      cta: "View Our Services",
      stats: {
        projects: "Completed Projects",
        experience: "Years of Experience",
        clients: "Global Partners"
      },
      featuredProjects: "Featured Projects"
    },
    about: {
      title: "Who We Are",
      subtitle: "A legacy of engineering excellence since 2006",
      vision: "Our Vision",
      visionText: "To lead the Iraqi market in contracting and support services by providing innovative, sustainable, and high-quality solutions.",
      mission: "Our Mission",
      missionText: "Delivering integrated engineering and logistics services based on precision, commitment, and operational safety.",
      history: "Our Journey"
    },
    services: {
      title: "Our Expertise",
      desc: "Delivering top-tier solutions across multiple industrial sectors with international standards.",
      items: {
        civil: "Civil & Construction",
        oilGas: "Oil & Gas Support",
        mechanical: "Mechanical Works",
        supply: "Logistics & Supply"
      }
    },
    contact: {
      title: "Contact Us",
      info: "Reach out to our expert team for your next strategic project.",
      formName: "Full Name",
      formEmail: "Email",
      formMessage: "Message",
      send: "Send Message",
      address: "Basra, Iraq - Al Jaza'ir St.",
      phone: "+964 776 022 0033"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "اتصل بنا"
    },
    home: {
      heroTitle: "نبني المستقبل بالثقة والابتكار",
      heroSubtitle: "شركة جنات الفيحاء للمقاولات العامة، التجارة العامة، والنقل العام. شريككم الموثوق في مشاريع البنية التحتية الكبرى.",
      cta: "عرض الخدمات",
      stats: {
        projects: "مشروع منجز",
        experience: "سنة من الخبرة",
        clients: "شركاء عالميون"
      },
      featuredProjects: "المشاريع المميزة"
    },
    about: {
      title: "من نحن",
      subtitle: "إرث من التميز الهندسي منذ عام 2006",
      vision: "رؤيتنا",
      visionText: "أن نكون الشركة الرائدة في السوق العراقي في مجال المقاولات والخدمات المساندة من خلال تقديم حلول مبتكرة ومستدامة وعالية الجودة.",
      mission: "رسالتنا",
      missionText: "تقديم خدمات هندسية ولوجستية متكاملة تعتمد على الدقة والالتزام ومعايير السلامة التشغيلية.",
      history: "مسيرتنا"
    },
    services: {
      title: "خبراتنا",
      desc: "نقدم حلولاً رفيعة المستوى عبر قطاعات صناعية متعددة وبمعايير دولية.",
      items: {
        civil: "الأعمال المدنية والإنشائية",
        oilGas: "دعم قطاع النفط والغاز",
        mechanical: "الأعمال الميكانيكية",
        supply: "الخدمات اللوجستية والتجهيز"
      }
    },
    contact: {
      title: "اتصل بنا",
      info: "تواصل مع فريق الخبراء لدينا لمشروعكم الاستراتيجي القادم.",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      send: "إرسال الرسالة",
      address: "البصرة، العراق - شارع الجزائر",
      phone: "+964 776 022 0033"
    }
  }
};
