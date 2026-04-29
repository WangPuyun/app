import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Building, Send, MessageSquare, LoaderCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ?? '';

const INITIAL_FORM_STATE: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const uiText = useMemo(
    () => ({
      heading: language === 'zh' ? '发送消息' : 'Send a Message',
      name: language === 'zh' ? '姓名' : 'Name',
      namePlaceholder: language === 'zh' ? '请输入你的姓名' : 'Your name',
      email: language === 'zh' ? '邮箱' : 'Email',
      emailPlaceholder: language === 'zh' ? '请输入你的邮箱' : 'Your email',
      subject: language === 'zh' ? '主题' : 'Subject',
      subjectPlaceholder:
        language === 'zh' ? '例如：2026级研究生报名（张三）' : 'e.g. Graduate Application (Your Name)',
      message: language === 'zh' ? '邮件内容' : 'Self-Recommendation Letter',
      messagePlaceholder:
        language === 'zh'
          ? '请介绍你的研究兴趣、项目经历、技能背景，以及希望加入课题组的原因...'
          : 'Share your research interests, project experience, technical strengths, and why you want to join the lab...',
      send: language === 'zh' ? '发送消息' : 'Send Message',
      sending: language === 'zh' ? '发送中...' : 'Sending...',
      endpointMissing:
        language === 'zh'
          ? '尚未配置表单提交地址，请先配置 VITE_CONTACT_FORM_ENDPOINT。'
          : 'Form endpoint is not configured. Please set VITE_CONTACT_FORM_ENDPOINT first.',
      required:
        language === 'zh'
          ? '请完整填写姓名、邮箱、主题和邮件内容。'
          : 'Please complete name, email, subject, and message.',
      invalidEmail: language === 'zh' ? '邮箱格式不正确，请检查后重试。' : 'Invalid email format.',
      messageTooShort:
        language === 'zh'
          ? '邮件内容建议不少于 30 个字符。'
          : 'Please provide at least 30 characters in the message.',
      success:
        language === 'zh'
          ? '已发送成功，老师会在查看后与您联系。'
          : 'Message sent successfully. The professor will contact you after review.',
      failed:
        language === 'zh'
          ? '发送失败，请稍后重试，或直接邮件联系 xwu@fzu.edu.cn。'
          : 'Failed to send. Please try again later or email xwu@fzu.edu.cn directly.',
    }),
    [language],
  );

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.address_detail'),
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'xwu@fzu.edu.cn',
      href: 'mailto:xwu@fzu.edu.cn',
    },
    {
      icon: Building,
      label: t('contact.lab'),
      value: t('contact.university'),
    },
  ];

  const updateField =
    (field: keyof ContactFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((previous) => ({ ...previous, [field]: event.target.value }));
      if (formStatus !== 'idle') {
        setFormStatus('idle');
        setStatusMessage('');
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!CONTACT_FORM_ENDPOINT) {
      setFormStatus('error');
      setStatusMessage(uiText.endpointMissing);
      return;
    }

    if (formData.website.trim()) {
      // Basic honeypot: bots tend to fill hidden fields; we silently return.
      setFormStatus('success');
      setStatusMessage(uiText.success);
      setFormData(INITIAL_FORM_STATE);
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setFormStatus('error');
      setStatusMessage(uiText.required);
      return;
    }

    if (!isValidEmail(email)) {
      setFormStatus('error');
      setStatusMessage(uiText.invalidEmail);
      return;
    }

    if (message.length < 30) {
      setFormStatus('error');
      setStatusMessage(uiText.messageTooShort);
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          source: 'lab-recruitment-website',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormStatus('success');
      setStatusMessage(uiText.success);
      setFormData(INITIAL_FORM_STATE);
    } catch {
      setFormStatus('error');
      setStatusMessage(uiText.failed);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-6 group hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/60 mb-1">{item.label}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-cyan-400 transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-white font-medium">Fuzhou University</p>
                  <p className="text-white/60 text-sm">Fujian, China</p>
                </div>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                {uiText.heading}
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                  value={formData.website}
                  onChange={updateField('website')}
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">{uiText.name}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={uiText.namePlaceholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      value={formData.name}
                      onChange={updateField('name')}
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">{uiText.email}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={uiText.emailPlaceholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      value={formData.email}
                      onChange={updateField('email')}
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">{uiText.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder={uiText.subjectPlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    value={formData.subject}
                    onChange={updateField('subject')}
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">{uiText.message}</label>
                  <textarea
                    rows={7}
                    name="message"
                    required
                    placeholder={uiText.messagePlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    value={formData.message}
                    onChange={updateField('message')}
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={formStatus === 'submitting' ? {} : { scale: 1.02 }}
                  whileTap={formStatus === 'submitting' ? {} : { scale: 0.98 }}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <LoaderCircle className="w-5 h-5 animate-spin" />
                      {uiText.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {uiText.send}
                    </>
                  )}
                </motion.button>

                {statusMessage ? (
                  <p
                    className={`text-sm ${
                      formStatus === 'success' ? 'text-emerald-300' : formStatus === 'error' ? 'text-rose-300' : 'text-white/70'
                    }`}
                    role="status"
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
