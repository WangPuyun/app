import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, GraduationCap, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState } from 'react';

interface Member {
  id: number;
  name: string;
  nameZh: string;
  avatar: string;
  role: string;
  roleZh: string;
  bio: string;
  bioZh: string;
  research: string[];
  researchZh: string[];
  email?: string;
  github?: string;
  ORCID?: string;
  homepage?: string;
  scholar?: string;
}

const members: Member[] = [
  {
    id: 1,
    name: 'Dr. Chen Yating',
    nameZh: '陈雅婷 博士',
    avatar: `${import.meta.env.BASE_URL}images/ChenYating.png`,
    role: 'Doctor Student (2018–2024)',
    roleZh: '博士研究生（2018–2024）',
    bio: 'Research direction: Super-resolution imaging. Post-graduation plans: Postdoctoral position at Tsinghua University.',
    bioZh: '研究方向为超分辨率成像。毕业去向：清华大学博士后。',
    research: ['Super-resolution Imaging'],
    researchZh: ['超分辨率成像'],
    email: 'chenyating@mail.tsinghua.edu.cn',
  },
  {
    id: 2,
    name: 'Dr. Wang Xuesong',
    nameZh: '王雪松 博士',
    avatar: `${import.meta.env.BASE_URL}images/WangXuesong.png`,
    role: 'Doctor Student (2021–2026)',
    roleZh: '博士研究生（2021–2026）',
    bio: 'Research direction: Polarization imaging, super-resolution imaging.',
    bioZh: '研究方向为偏振成像、超分辨率成像。',
    research: [ 'Polarization Imaging', 'Super-resolution Imaging'],
    researchZh: ['偏振成像', '超分辨率成像'],
    github: 'https://github.com/dierwang101',
  },
  {
    id: 3,
    name: 'Yu Kaimin',
    nameZh: '余凯敏 博士',
    avatar: `${import.meta.env.BASE_URL}images/YuKaimin.png`,
    role: 'Doctor Student (2025–present)',
    roleZh: '博士研究生（2025–至今）',
    bio: 'Research direction: 3D Reconstruction.',
    bioZh: '研究方向为三维重建。',
    research: ['3D Reconstruction'],
    researchZh: ['三维重建'],
    email: '2500210016@fzu.edu.cn',
    ORCID: 'https://orcid.org/0000-0001-7385-6721',
  },
  {
    id: 4,
    name: 'Lin Peng',
    nameZh: '林鹏',
    avatar: `${import.meta.env.BASE_URL}images/LinPeng.png`,
    role: 'Master Student (2019–2022)',
    roleZh: '硕士研究生（2019–2022）',
    bio: 'Research direction: Super-resolution imaging. He was awarded the National Scholarship and is pursuing his PhD at Harbin Institute of Technology upon graduation.',
    bioZh: '研究方向为超分辨率成像。曾获国家奖学金，毕业去向：哈尔滨工业大学读博。',
    research: ['Deep Learning', 'Super-resolution imaging'],
    researchZh: ['深度学习', '超分辨率成像'],
    ORCID: 'https://orcid.org/0000-0001-8922-8922',
  },
  {
    id: 5,
    name: 'Zhou Bin',
    nameZh: '周斌',
    avatar: `${import.meta.env.BASE_URL}images/ZhouBin.png`,
    role: 'Master Student (2019–2022)',
    roleZh: '硕士研究生（2019–2022）',
    bio: 'Research direction: Super-resolution imaging. He was awarded the National Scholarship and joined BYD after graduation.',
    bioZh: '研究方向为超分辨率成像。曾获国家奖学金，毕业去向：比亚迪。',
    research: ['Deep Learning', 'Super-resolution imaging'],
    researchZh: ['深度学习', '超分辨率成像'],
    ORCID: 'https://orcid.org/0000-0001-9304-4309',
  },
  {
    id: 6,
    name: 'Wang Puyun',
    nameZh: '王朴匀',
    avatar: `${import.meta.env.BASE_URL}images/WangPuyun.png`,
    role: 'Master Student (2024–present)',
    roleZh: '硕士研究生（2024–至今）',
    bio: 'Research interests include intelligent computer vision, underwater 3D reconstruction, and robot kinematics.',
    bioZh: '研究方向包括智能计算机视觉、水下三维重建与机器人运动学。',
    research: ['Computer Vision', '3D Reconstruction', 'Robotics'],
    researchZh: ['计算机视觉', '三维重建', '机器人'],
    email: '240227068@fzu.edu.cn',
    github: 'https://github.com/WangPuyun',
    ORCID: 'https://orcid.org/0009-0005-3304-1540',
    homepage: 'https://wangpuyun.github.io/webpage',
  },
];

/** Fallback avatar with initials when photo fails to load */
function AvatarFallback({ name }: { name: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
      <span className="text-white text-4xl font-bold select-none">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export default function Team() {
  const { t, language } = useLanguage();
  const [failedAvatars, setFailedAvatars] = useState<Set<number>>(new Set());

  const handleAvatarError = (memberId: number) => {
    setFailedAvatars((prev) => new Set(prev).add(memberId));
  };

  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Team Members
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('team.title')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {/* {t('team.subtitle')} */}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card hover-lift h-full overflow-hidden flex flex-col sm:flex-row">
                {/* ---- Portrait photo area ---- */}
                <div className="relative w-full sm:w-44 md:w-52 flex-shrink-0 overflow-hidden">
                  {/* Fixed aspect ratio container: 3:4 portrait on mobile, full height on sm+ */}
                  <div className="aspect-[3/4] sm:aspect-auto sm:absolute sm:inset-0">
                    {failedAvatars.has(member.id) ? (
                      <AvatarFallback
                        name={language === 'zh' ? member.nameZh : member.name}
                      />
                    ) : (
                      <img
                        src={member.avatar}
                        alt={language === 'zh' ? member.nameZh : member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={() => handleAvatarError(member.id)}
                      />
                    )}
                  </div>
                  {/* Subtle gradient overlay at bottom (mobile) / right edge (desktop) */}
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* ---- Info area ---- */}
                <div className="flex-1 flex flex-col">
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {language === 'zh' ? member.nameZh : member.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400/60" />
                      <span className="text-sm text-white/50">
                        {language === 'zh' ? member.roleZh : member.role}
                      </span>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mt-3">
                      {language === 'zh' ? member.bioZh : member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {(language === 'zh' ? member.researchZh : member.research).map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* ---- Social links bar ---- */}
                  <div className="px-6 pb-5 flex items-center gap-3">
                    {member.email && (
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Email"
                      >
                        <Mail className="w-4 h-4 text-white/60 hover:text-cyan-400 transition-colors" />
                      </motion.a>
                    )}
                    {member.ORCID && (
                      <motion.a
                        href={member.ORCID}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="ORCID"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                          <rect width="256" height="256" rx="48" fill="none" />
                          <text x="38" y="195" fontFamily="Arial, sans-serif" fontWeight="bold"
                            fontSize="180" fill="#FFFFFF" letterSpacing="-8">
                            iD
                          </text>
                        </svg>
                      </motion.a>
                    )}
                    {member.github && (
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="GitHub"
                      >
                        <Github className="w-4 h-4 text-white/60 hover:text-cyan-400 transition-colors" />
                      </motion.a>
                    )}
                    {member.scholar && (
                      <motion.a
                        href={member.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Google Scholar"
                      >
                        <BookOpen className="w-4 h-4 text-white/60 hover:text-cyan-400 transition-colors" />
                      </motion.a>
                    )}
                    {member.homepage && (
                      <motion.a
                        href={member.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {language === 'zh' ? '个人主页' : 'Homepage'}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/50 text-sm">
            {language === 'zh'
              ? '欢迎对我们的研究方向感兴趣的同学加入团队'
              : 'We welcome students interested in our research to join the team.'}
          </p>
          <motion.a
            href="mailto:lab@fzu.edu.cn"
            className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
            whileHover={{ y: -2 }}
          >
            <span className="font-medium">
              {/* {language === 'zh' ? '联系我们' : 'Contact Us'} */}
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}