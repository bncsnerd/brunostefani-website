import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://brunostefani.com',
    title: 'Bruno Stefani',
    subtitle: 'IA, inovação e novos negócios para empresas tradicionais',
    description:
        'Bruno Stefani ajuda empresas tradicionais a transformar IA e inovação em modelo de negócio e resultado. Palestras, conselho e educação executiva.',
    image: {
        src: '/og-image.png',
        alt: 'Bruno Stefani: do piloto ao P&L'
    },
    headerNavLinks: [
        { text: 'Início', href: '/' },
        { text: 'Palestras', href: '/palestras' },
        { text: 'Ideias', href: '/ideias' },
        { text: 'Sobre', href: '/sobre' },
        { text: 'Contato', href: '/contato' }
    ],
    footerNavLinks: [
        { text: 'Sobre', href: '/sobre' },
        { text: 'Contato', href: '/contato' },
        { text: 'Temas', href: '/temas' },
        { text: 'RSS', href: '/rss.xml' }
    ],
    socialLinks: [
        { text: 'LinkedIn', href: 'https://linkedin.com/in/brunonstefani' },
        { text: 'X', href: 'https://x.com/nerdstefani' }
    ],
    hero: {
        title: 'Do piloto ao P&L.',
        text: 'Eu ajudo empresas tradicionais a transformar **IA e inovação em modelo de negócio e resultado**. Não em piloto e palco.\n\nFui Diretor Global de Inovação da Ambev. Hoje sou professor na Fundação Dom Cabral, no Insper e na FGV, conselheiro de empresas e colunista da MIT Sloan Management Review Brasil. Faço doutorado com Silvio Meira sobre orquestração de ecossistemas de negócios.',
        actions: [
            { text: 'Contratar palestra', href: '/contato' },
            { text: 'Ler as ideias', href: '/ideias' }
        ]
    },
    clients: ['Petrobras', 'ArcelorMittal', 'BASF', 'Bayer', 'Unilever'],
    services: [
        {
            title: 'Palestras e workshops',
            text: 'Para convenções, diretorias e lideranças que precisam sair da sala com algo para usar na segunda-feira.',
            href: '/palestras'
        },
        {
            title: 'Conselho e advisory',
            text: 'Conselheiro (IBGC) de empresas que querem inovação prática no negócio e uma relação mais próxima com o ecossistema de tecnologia e startups.',
            href: '/sobre'
        },
        {
            title: 'Educação executiva',
            text: 'Programas para diretorias e lideranças na FDC, no Insper, na FGV e in company pela NERD Business School.',
            href: '/contato'
        }
    ],
    subscribe: {
        // Ative quando a newsletter existir: troque `action` pela URL do formulário (Substack, Beehiiv, Mailchimp...).
        enabled: false,
        title: 'Uma ideia por semana. Cabe numa reunião de diretoria.',
        text: 'Casos, números com fonte e perguntas para levar na segunda-feira. Sem hype.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
