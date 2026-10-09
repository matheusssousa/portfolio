import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, GithubLogo, LinkedinLogo, List, X } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import projects from '../../projects/data';

const skills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Laravel', 'PHP', 'Node.js', 'MySQL', 'Docker'];

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t('pageTitle');
  }, [i18n.language, t]);

  const navigation = [
    { href: '#inicio', label: t('home') },
    { href: '#sobre', label: t('about') },
    { href: '#projetos', label: t('projects') },
    { href: '#contato', label: t('contact') },
  ];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">{t('skip')}</a>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label="Matheus Sousa — início">
            <span className="brand-mark">m<span>.</span></span>
            <span className="brand-name">matheus sousa<span className="brand-role">/ developer</span></span>
          </a>
          <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`} aria-label={t('navigation')} id="main-navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <div className="language-switch" aria-label={t('language')}>
              <button type="button" className={i18n.language === 'pt' ? 'active' : ''} onClick={() => i18n.changeLanguage('pt')} aria-pressed={i18n.language === 'pt'}>PT</button>
              <span>/</span>
              <button type="button" className={i18n.language === 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage('en')} aria-pressed={i18n.language === 'en'}>EN</button>
            </div>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? t('closeMenu') : t('openMenu')} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={25} /> : <List size={25} />}</button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero section-anchor" id="inicio" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" />{t('heroEyebrow')}</p>
              <h1 id="hero-title">{t('heroLine1')}<br /><span>{t('heroLine2')}</span></h1>
              <p className="hero-description">{t('heroDescription')}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">{t('seeProjects')}<ArrowUpRight size={19} /></a>
                <a className="button button-ghost" href="#contato">{t('getInTouch')}<ArrowRight size={19} /></a>
              </div>
              <div className="hero-bottom"><span>01 / 04</span><a href="#sobre">{t('scroll')}<ArrowDown size={17} /></a></div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-grid" /><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" />
              <div className="art-core"><span>&lt;</span><span className="art-slash">/</span><span>&gt;</span></div>
              <div className="art-tag art-tag-top">{t('artTop')}</div><div className="art-tag art-tag-bottom">{t('artBottom')}</div>
              <div className="art-star art-star-one">✳</div><div className="art-star art-star-two">✳</div>
            </div>
          </div>
        </section>

        <section className="about-section section-anchor" id="sobre" aria-labelledby="about-title">
          <div className="container about-grid">
            <div><p className="section-kicker">01 / {t('about')}</p><h2 id="about-title" className="section-title">{t('aboutTitle')}</h2></div>
            <div className="about-content"><p className="about-lead">{t('aboutLead')}</p><p>{t('aboutBody')}</p><p>{t('aboutStudy')}</p><a className="text-link" href="#contato">{t('talkAboutProject')}<ArrowUpRight size={18} /></a></div>
          </div>
          <div className="container skills-block"><div className="skills-heading"><span>{t('stack')}</span><span>{t('tools')}</span></div><div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </section>

        <section className="projects-section section-anchor" id="projetos" aria-labelledby="projects-title">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">02 / {t('selectedWork')}</p><h2 id="projects-title" className="section-title">{t('projectsTitle')}</h2></div><p>{t('projectsIntro')}</p></div>
            <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}>
              <div className="project-image"><img src={project.image} alt={`${t('preview')} ${project.title}`} loading="lazy" /><span className="project-number">0{index + 1}</span></div>
              <div className="project-details"><div><h3>{project.title}</h3><p>{t(`project.${project.description}`)}</p></div><div className="project-links"><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — GitHub`} title="GitHub"><GithubLogo size={20} /></a>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — ${t('openProject')}`} title={t('openProject')}><ArrowUpRight size={21} /></a>}</div></div>
              <div className="project-stack">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </article>)}</div>
          </div>
        </section>

        <section className="contact-section section-anchor" id="contato" aria-labelledby="contact-title"><div className="container contact-inner"><p className="section-kicker">03 / {t('contact')}</p><h2 id="contact-title">{t('contactTitle')}<span>↗</span></h2><p>{t('contactIntro')}</p><a className="contact-email" href="mailto:matheussousaab@gmail.com">matheussousaab@gmail.com <ArrowUpRight size={26} /></a><div className="contact-social"><a href="https://github.com/matheusssousa" target="_blank" rel="noopener noreferrer"><GithubLogo size={21} />GitHub</a><a href="https://www.linkedin.com/in/matheusousab/" target="_blank" rel="noopener noreferrer"><LinkedinLogo size={21} />LinkedIn</a></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Matheus Sousa</span><span>{t('footerNote')}</span><a href="#inicio">{t('backToTop')} ↑</a></div></footer>
    </div>
  );
}
