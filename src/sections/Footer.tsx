import { Github, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const quickLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.research', href: '#research' },
  { key: 'nav.publications', href: '#publications' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Footer() {
  const { t, language } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="section-padding max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">CI</span>
              </div>
              <span className="text-white font-semibold text-lg">
                {language === 'zh' ? '计算成像实验室' : 'CI Optics Lab'}
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {language === 'zh'
                ? '福州大学计算成像与光学测量实验室，致力于智能计算成像、精密光学测量与人工智能的交叉前沿研究。'
                : 'Fuzhou University Computational Imaging & Optics Lab, dedicated to cutting-edge research at the intersection of intelligent computational imaging, precision optical measurement, and artificial intelligence.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:xwu@fzu.edu.cn"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'zh' ? '快速链接' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'zh' ? '联系方式' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white/50">
                  {language === 'zh' ? '地址' : 'Address'}:{' '}
                </span>
                <span className="text-white/70">
                  {language === 'zh'
                    ? '福建省福州市福州地区大学新区学园路2号'
                    : 'No. 2 Xueyuan Road, Fuzhou, Fujian, China'}
                </span>
              </li>
              <li>
                <span className="text-white/50">
                  {language === 'zh' ? '邮箱' : 'Email'}:{' '}
                </span>
                <a
                  href="mailto:xwu@fzu.edu.cn"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  xwu@fzu.edu.cn
                </a>
              </li>
              <li>
                <span className="text-white/50">
                  {language === 'zh' ? '单位' : 'Institution'}:{' '}
                </span>
                <span className="text-white/70">
                  {language === 'zh' ? '福州大学机械工程及自动化学院' : 'Fuzhou University, College of Mechanical Engineering'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> at{' '}
            <span className="text-cyan-400">{t('footer.university')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
