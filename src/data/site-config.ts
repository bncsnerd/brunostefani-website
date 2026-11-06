import type { SiteConfig } from '../types';

// Fotos: coloque os arquivos em src/assets/images/ com estes nomes e o site usa automaticamente.
// retrato.jpg -> foto redonda no topo da home | palco.jpg -> foto grande (horizontal) na abertura da home
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });
const photo = (name: string) =>
    Object.entries(photos).find(([path]) => path.split('/').pop()?.replace(/\.(jpe?g|png|webp)$/, '') === name)?.[1].default;
const retrato = photo('retrato');
const palco = photo('palco');

const siteConfig: SiteConfig = {
    website: 'https://brunostefani.com',
    avatar: retrato ? { src: retrato, alt: 'Bruno Stefani' } : undefined,
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
        { text: 'Projetos', href: '/projetos', requires: 'cases' },
        { text: 'Clientes', href: '/clientes' },
        { text: 'Ideias', href: '/ideias' },
        { text: 'Mídia', href: '/midia' },
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
        text: 'Eu ajudo empresas tradicionais a transformar **IA e inovação em modelo de negócio e resultado**. Não em piloto e palco.\n\nFui Diretor Global de Inovação da Ambev. Hoje sou professor na Fundação Dom Cabral, no Insper e na FGV, conselheiro de empresas e colunista da HSM Management, do NotJournal e da CKGSB Knowledge. Faço doutorado com Silvio Meira sobre orquestração de ecossistemas de negócios.',
        image: palco ? { src: palco, alt: 'Bruno Stefani em palestra' } : undefined,
        actions: [
            { text: 'Contratar palestra', href: '/contato' },
            { text: 'Ler as ideias', href: '/ideias' }
        ]
    },
    columns: [
        { text: 'HSM Management', href: 'https://hsmmanagement.com.br/colunista/bruno-stefani/' },
        { text: 'NotJournal', href: 'https://notjournal.com.br/colunista/bruno-stefani' },
        {
            text: 'CKGSB Knowledge',
            href: 'https://ckgsbknowledge.com.br/a-china-entra-na-cupula-com-trump-sem-precisar-fazer-acordo-e-isso-muda-tudo-para-o-brasil/'
        }
    ],
    clientsPage: {
        headline: '64 empresas confiaram no meu trabalho nos últimos três anos.',
        description: 'Empresas atendidas por Bruno Stefani em palestras, aulas, consultoria e conselho.',
        stats: [
            { label: 'Palestras', value: '37' },
            { label: 'Aulas', value: '15' },
            { label: 'Consultoria', value: '9' },
            { label: 'Conselho', value: '3' }
        ],
        statsNote: 'Empresas atendidas de outubro de 2023 a outubro de 2026.',
        // Ajuste aqui o nome exibido de cada logo (chave = nome do arquivo sem extensão).
        logoNames: {}
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
