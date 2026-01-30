import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const education = [
  {
    year: '2018',
    degree: 'Ph.D. in Mechanical Engineering',
    school: 'North Carolina State University',
  },
  {
    year: '2014',
    degree: 'M.S. in Mechanical Engineering',
    school: 'North Carolina State University',
  },
  {
    year: '2011',
    degree: 'B.S. in Mechatronic Engineering',
    school: 'University of Electronic Science and Technology of China',
  },
];

const experience = [
  {
    period: '2018 - Present',
    position: '校聘教授 / 博士生导师',
    institution: '福州大学机械工程及自动化学院',
  },
];

const achievements = [
  { icon: Award, label: '福建省高层次人才 (B类)' },
  { icon: Award, label: '福州大学旗山学者' },
  { icon: BookOpen, label: 'IEEE / OPTICA Member' },
];

export default function PI() {
  const { t, language } = useLanguage();

  return (
    <section id="pi" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Principal Investigator
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('pi.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl glass-card">
                <img
                  src={`${import.meta.env.BASE_URL}images/pi-portrait.jpg`}
                  alt="Dr. Xianyu Wu"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
                <h3 className="text-xl font-bold text-white mb-1">{t('pi.name')}</h3>
                <p className="text-cyan-400 text-sm">{t('pi.title_detail')}</p>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan-500/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg opacity-80" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-white/80 text-xs">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                {language === 'zh' ? '个人简介' : 'Biography'}
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                {t('pi.intro')}
              </p>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                {language === 'zh' ? '研究方向' : 'Research'}
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                {t('pi.research_desc')}
              </p>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                {language === 'zh' ? '学术成就' : 'Achievements'}
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                {t('pi.achievements')}
              </p>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                {t('pi.education')}
              </h4>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.year}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded">
                      {edu.year}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">{edu.degree}</p>
                      <p className="text-white/50 text-xs">{edu.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                {t('pi.experience')}
              </h4>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.period}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded">
                      {exp.period}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">{exp.position}</p>
                      <p className="text-white/50 text-xs">{exp.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
