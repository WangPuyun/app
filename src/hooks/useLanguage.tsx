import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'zh' | 'en';

interface Translation {
  [key: string]: string | Translation;
}

const translations: Record<Language, Translation> = {
  zh: {
    nav: {
      home: '首页',
      research: '研究方向',
      publications: '学术论文',
      projects: '开源项目',
      team: '团队成员',
      contact: '联系方式',
    },
    hero: {
      title: '计算成像与光学测量实验室',
      subtitle: '福州大学机械工程及自动化学院',
      description: '探索智能计算成像、精密光学测量与人工智能的交叉前沿',
      cta: '探索研究',
    },
    pi: {
      title: '课题组负责人',
      name: '吴衔誉 教授',
      title_detail: '校聘教授 / 博士生导师',
      education: '教育背景',
      experience: '工作经历',
      research_focus: '研究重点',
      intro: '吴衔誉，现任福州大学机械工程及自动化学院校聘教授、博士生导师，并入选福建省高层次人才（B类）、福州大学旗山学者。',
      research_desc: '长期致力于智能计算成像、精密仪器与测量、神经形态视觉传感系统构建与计算等前沿领域的研究。',
      achievements: '作为项目负责人，承担国家级重点项目课题及多项国家级、部委和省级科研项目，近五年发表高水平学术论文三十余篇。',
    },
    research: {
      title: '研究方向',
      subtitle: '聚焦前沿交叉学科研究',
      areas: {
        optics: {
          title: '精密光学成像与测量仪器',
          desc: '开发新型光学传感与计算成像技术，研制精密成像与测量仪器设备',
        },
        computational: {
          title: '计算光谱/偏振成像',
          desc: '基于计算成像的光谱和偏振信息采集与重建算法研究',
        },
        vision: {
          title: '视觉信息检测与人工智能',
          desc: '融合深度学习与计算机视觉的智能检测与识别技术',
        },
        neuromorphic: {
          title: '神经形态视觉传感',
          desc: '仿生视觉传感系统构建与事件驱动计算研究',
        },
      },
    },
    publications: {
      title: '学术论文',
      subtitle: '最新研究成果',
      view_paper: '查看论文',
      view_code: '查看代码',
      github: 'GitHub',
    },
    projects: {
      title: '开源项目',
      subtitle: '代码与工具',
      view_on_github: '在GitHub上查看',
    },
    contact: {
      title: '联系我们',
      subtitle: '合作与交流',
      address: '通讯地址',
      address_detail: '福建省福州市福州地区大学新区学园路2号 邮编: 350108',
      email: '电子邮箱',
      phone: '联系电话',
      lab: '实验室',
      university: '福州大学机械工程及自动化学院',
    },
    footer: {
      copyright: '2025 计算成像与光学测量实验室. 保留所有权利.',
      university: '福州大学',
    },
  },
  en: {
    nav: {
      home: 'Home',
      research: 'Research',
      publications: 'Publications',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
    },
    hero: {
      title: 'Computational Imaging & Optics Lab',
      subtitle: 'College of Mechanical Engineering, Fuzhou University',
      description: 'Exploring the frontiers of intelligent computational imaging, precision optical measurement, and artificial intelligence',
      cta: 'Explore Research',
    },
    pi: {
      title: 'Principal Investigator',
      name: 'Dr. Xianyu Wu',
      title_detail: 'Professor / Ph.D. Supervisor',
      education: 'Education',
      experience: 'Experience',
      research_focus: 'Research Focus',
      intro: 'Dr. Wu is a Professor and Ph.D. supervisor at the College of Mechanical Engineering, Fuzhou University.',
      research_desc: 'His research focuses on intelligent computational imaging, precision instrumentation and measurement.',
      achievements: 'As the principal investigator, he has undertaken national key project topics and multiple research projects.',
    },
    research: {
      title: 'Research Areas',
      subtitle: 'Cutting-edge interdisciplinary research',
      areas: {
        optics: {
          title: 'Precision Optical Imaging & Measurement',
          desc: 'Development of novel optical sensing and computational imaging technologies',
        },
        computational: {
          title: 'Computational Spectral/Polarization Imaging',
          desc: 'Computational imaging-based spectral and polarization information acquisition',
        },
        vision: {
          title: 'Computer Vision & AI',
          desc: 'Intelligent detection and recognition technology integrating deep learning',
        },
        neuromorphic: {
          title: 'Neuromorphic Vision Sensing',
          desc: 'Bio-inspired vision sensing systems and event-driven computing research',
        },
      },
    },
    publications: {
      title: 'Publications',
      subtitle: 'Latest research',
      view_paper: 'View Paper',
      view_code: 'View Code',
      github: 'GitHub',
    },
    projects: {
      title: 'Open Source Projects',
      subtitle: 'Code & Tools',
      view_on_github: 'View on GitHub',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Collaboration & Inquiries',
      address: 'Address',
      address_detail: 'No. 2 Xueyuan Road, University Town, Fuzhou, Fujian, China, 350108',
      email: 'Email',
      phone: 'Phone',
      lab: 'Laboratory',
      university: 'College of Mechanical Engineering, Fuzhou University',
    },
    footer: {
      copyright: '2025 Computational Imaging & Optics Lab. All rights reserved.',
      university: 'Fuzhou University',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
