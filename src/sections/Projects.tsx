import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface Project {
  id: number;
  name: string;
  description: string;
  github: string;
  language: string;
  stars: number;
  forks: number;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: 'MuS-Polar3D',
    description: 'MuS-Polar3D dataset repository, containing multiple SfP evaluation baselines, code for plotting error heatmaps, ORB algorithm code, and more.',
    github: 'https://github.com/WangPuyun/MuS-Polar3D',
    language: 'Python',
    stars: 9,
    forks: 0,
    tags: ['3D Reconstruction', 'Deep Learning', 'Polarization Imaging', 'PyTorch'],
  },
  {
    id: 2,
    name: 'SGuTA-SCubA',
    description: 'Polarization video frame interpolation for 3D human pose reconstruction with attention mechanism. A novel approach for polarization-based 3D reconstruction.',
    github: 'https://github.com/esthen-bit/SGuTA-SCubA',
    language: 'Python',
    stars: 1,
    forks: 0,
    tags: ['Polarization', '3D Reconstruction', 'Attention Mechanism', 'Computer Vision'],
  },

];

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card hover-lift h-full overflow-hidden">
                <div className="p-6 border-b border-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 bg-white/5 rounded text-xs text-white/60">
                            {project.language}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{project.forks}</span>
                    </div>
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.view_on_github')}
                  </motion.a>
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
              ? '更多项目即将开源，敬请关注我们的 GitHub'
              : 'More projects coming soon. Follow us on GitHub for updates.'}
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
            whileHover={{ y: -2 }}
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">{language === 'zh' ? '访问 GitHub' : 'Visit GitHub'}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
