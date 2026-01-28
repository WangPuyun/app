import { motion } from 'framer-motion';
import { ExternalLink, FileText, Calendar, Users, Github } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  link: string;
  github?: string;
  abstract?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Polarization video frame interpolation for 3D human pose reconstruction with attention mechanism',
    authors: ['Zhang, X', 'Wang, XS', 'Wu, XY', 'Huang, F'],
    journal: 'Optics and Lasers in Engineering',
    year: '2025',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001493374500001',
    github: 'https://github.com/esthen-bit/SGuTA-SCubA',
    abstract: 'Video frame interpolation has been extensively explored and demonstrated, yet its application to polarization remains largely unexplored.',
  },
  {
    id: 2,
    title: 'Deep learning-based polarization 3D imaging method for underwater targets',
    authors: ['Wu, XY', 'Chen, JT', 'Huang, F'],
    journal: 'Optics Express',
    year: '2025',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001420800500011',
    abstract: 'The significant absorption and scattering of light during its propagation in water severely degrade the quality of underwater imaging.',
  },
  {
    id: 3,
    title: 'Enhancing three-source cross-modality image fusion with improved DenseNet for infrared polarization and visible light images',
    authors: ['Wang, XS', 'Zhou, B', 'Wu, XY', 'Huang, F'],
    journal: 'Infrared Physics & Technology',
    year: '2024',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001298305600001',
    abstract: 'The fusion of multi-modal images to create an image that preserves the unique features of each modality.',
  },
  {
    id: 4,
    title: 'LVTSR: learning visible image texture network for infrared polarization super-resolution imaging',
    authors: ['Wang, XS', 'Chen, YT', 'Wu, XY', 'Huang, F'],
    journal: 'Optics Express',
    year: '2024',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001300255200007',
    abstract: 'Infrared polarization division-of-focal-plane imaging technology has gained attention.',
  },
  {
    id: 5,
    title: 'Bio-inspired foveal super-resolution method for multi-focal-length images based on local gradient constraints',
    authors: ['Huang, F', 'Wang, XS', 'Wu, XY', 'Huang, F'],
    journal: 'Optics Express',
    year: '2024',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001239610200002',
    abstract: 'Most existing super-resolution imaging systems utilize image registration and reconstruction algorithms.',
  },
  {
    id: 6,
    title: 'Three Dimensional Shape Reconstruction via Polarization Imaging and Deep Learning',
    authors: ['Wu, XY', 'Li, PH', 'Huang, F'],
    journal: 'Sensors',
    year: '2023',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A000997213600001',
    github: 'https://github.com/WangPuyun/My-net',
    abstract: 'Deep-learning-based polarization 3D imaging techniques for estimating surface normal distribution.',
  },
  {
    id: 7,
    title: 'SwinIPISR: A Super-Resolution Method for Infrared Polarization Imaging Sensors via Swin Transformer',
    authors: ['Wu, XY', 'Zhou, B', 'Huang, F'],
    journal: 'IEEE Sensors Journal',
    year: '2024',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001136951300048',
    abstract: 'The performance of infrared polarization remote sensing systems is limited by sensor resolution.',
  },
  {
    id: 8,
    title: 'High-Efficiency Multispectral-Polarization Imaging System Using Polarization Camera Array With Notch Filters',
    authors: ['Huang, F', 'Cao, RJ', 'Wu, XY'],
    journal: 'IEEE Transactions on Instrumentation and Measurement',
    year: '2023',
    link: 'https://webofscience.clarivate.cn/wos/woscc/full-record/WOS%3A001102358800027',
    abstract: 'Incident light captured by optical imaging systems engenders multidimensional high-level optical information.',
  },
];

export default function Publications() {
  const { t, language } = useLanguage();

  return (
    <section id="publications" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Publications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('publications.title')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t('publications.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              className="glass-card hover-lift overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                      {pub.title}
                    </h3>

                    <div className="flex items-center gap-2 text-white/60 text-sm mb-3 flex-wrap">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{pub.authors.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <FileText className="w-4 h-4" />
                        <span className="font-medium">{pub.journal}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50">
                        <Calendar className="w-4 h-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>

                    {pub.abstract && (
                      <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                        {pub.abstract}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-6">
                    <motion.a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('publications.view_paper')}
                    </motion.a>

                    {pub.github && (
                      <motion.a
                        href={pub.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        {t('publications.view_code')}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'zh' ? '查看全部论文' : 'View All Publications'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
