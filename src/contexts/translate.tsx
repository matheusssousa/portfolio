import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: { translation: {
    pageTitle: 'Matheus Sousa — Desenvolvedor Full Stack', navigation: 'Navegação principal', skip: 'Pular para o conteúdo', home: 'Início', about: 'Sobre', projects: 'Projetos', contact: 'Contato', language: 'Idioma', openMenu: 'Abrir menu', closeMenu: 'Fechar menu',
    heroEyebrow: 'DESENVOLVEDOR FULL STACK', heroLine1: 'Ideias ganham', heroLine2: 'forma em código.', heroDescription: 'Crio experiências digitais que unem interfaces bem pensadas, código sólido e atenção aos detalhes.', seeProjects: 'Ver projetos', getInTouch: 'Vamos conversar', scroll: 'Role para explorar', artTop: 'design + código', artBottom: 'feito com propósito',
    aboutTitle: 'Prazer, sou o Matheus.', aboutLead: 'Gosto de transformar problemas reais em produtos digitais simples de usar.', aboutBody: 'Trabalho entre o desenvolvimento de interfaces e a construção de sistemas, combinando olhar de design com lógica e funcionalidade.', aboutStudy: 'Estudo Sistemas de Informação na Unimontes e continuo explorando novas ferramentas para construir experiências melhores.', talkAboutProject: 'Vamos criar algo juntos', stack: 'MINHA STACK', tools: 'FERRAMENTAS & TECNOLOGIAS',
    selectedWork: 'TRABALHOS SELECIONADOS', projectsTitle: 'Projetos em destaque.', projectsIntro: 'Alguns projetos que mostram como penso, desenho e desenvolvo soluções.', preview: 'Prévia de', openProject: 'Abrir projeto', project: { studenotes: 'Uma plataforma para organizar estudos e anotações.', lelearn: 'Uma experiência de aprendizagem construída para a web.', medical: 'Sistema de gestão para rotinas da área médica.' },
    contactTitle: 'Tem uma ideia? Vamos conversar.', contactIntro: 'Estou aberto a trocar ideias, colaborar e criar experiências digitais interessantes.', footerNote: 'Desenhado e desenvolvido com cuidado.', backToTop: 'Voltar ao topo',
  } },
  en: { translation: {
    pageTitle: 'Matheus Sousa — Full Stack Developer', navigation: 'Main navigation', skip: 'Skip to content', home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', language: 'Language', openMenu: 'Open menu', closeMenu: 'Close menu',
    heroEyebrow: 'FULL STACK DEVELOPER', heroLine1: 'Ideas take', heroLine2: 'shape in code.', heroDescription: 'I build digital experiences that bring together thoughtful interfaces, solid code and attention to detail.', seeProjects: 'Explore projects', getInTouch: 'Get in touch', scroll: 'Scroll to explore', artTop: 'design + code', artBottom: 'built with purpose',
    aboutTitle: "Hi, I'm Matheus.", aboutLead: 'I like turning real problems into digital products that feel simple to use.', aboutBody: 'I work across interface development and software systems, combining a design mindset with logic and functionality.', aboutStudy: 'I study Information Systems at Unimontes and keep exploring new tools to build better experiences.', talkAboutProject: "Let's build something", stack: 'MY STACK', tools: 'TOOLS & TECHNOLOGIES',
    selectedWork: 'SELECTED WORK', projectsTitle: 'Featured projects.', projectsIntro: 'A few projects that show how I think, design and build solutions.', preview: 'Preview of', openProject: 'Open project', project: { studenotes: 'A platform to organize studying and notes.', lelearn: 'A learning experience built for the web.', medical: 'A management system for medical workflows.' },
    contactTitle: "Have an idea? Let's talk.", contactIntro: "I'm open to sharing ideas, collaborating and building meaningful digital experiences.", footerNote: 'Designed and developed with care.', backToTop: 'Back to top',
  } },
};

const savedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('portfolio-language') : null;
i18n.use(initReactI18next).init({ resources, lng: savedLanguage === 'pt' || savedLanguage === 'en' ? savedLanguage : 'pt', fallbackLng: 'pt', interpolation: { escapeValue: false } });
i18n.on('languageChanged', (language) => { if (typeof window !== 'undefined') window.localStorage.setItem('portfolio-language', language); });

export default i18n;
