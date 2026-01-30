import { motion } from 'framer-motion';
import { Eye, Cpu, Lightbulb, Brain, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const researchAreas = [
  {
    key: 'optics',
    icon: Eye,
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
  },
  {
    key: 'computational',
    icon: Cpu,
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    key: 'vision',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
  {
    key: 'neuromorphic',
    icon: Brain,
    color: 'from-green-400 to-teal-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
];

export default function Research() {
  const { t, language } = useLanguage();

  return (
    <section id="research" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Research Areas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('research.title')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t('research.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.key}
              className={`group relative overflow-hidden rounded-2xl ${area.bgColor} border ${area.borderColor} hover-lift`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {t(`research.areas.${area.key}.title`)}
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  {t(`research.areas.${area.key}.desc`)}
                </p>

                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                  <span>{language === 'zh' ? '了解更多' : 'Learn More'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${area.color} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden glass-card">
            <img
              src={`${import.meta.env.BASE_URL}images/research-optics.jpg`}
              alt="Research Visualization"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {language === 'zh' ? '探索光的奥秘' : 'Exploring the Mysteries of Light'}
                </h3>
                <p className="text-white/70">
                  {language === 'zh' ? '融合光学、计算机科学与人工智能' : 'Integrating Optics, Computer Science & AI'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
