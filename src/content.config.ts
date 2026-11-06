import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, type ImageFunction } from 'astro:content';

const imageSchema = (image: ImageFunction) =>
    z.object({
        src: image(),
        alt: z.string().optional()
    });

const seoSchema = (image: ImageFunction) =>
    z.object({
        title: z.string().min(5).max(120).optional(),
        description: z.string().min(15).max(160).optional(),
        image: imageSchema(image).optional(),
        pageType: z.enum(['website', 'article']).optional()
    });

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            excerpt: z.string().optional(),
            publishDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            isFeatured: z.boolean().default(false),
            draft: z.boolean().default(false),
            tags: z.array(z.string()).default([]),
            seo: seoSchema(image).optional()
        })
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            seo: seoSchema(image).optional()
        })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publishDate: z.coerce.date(),
            order: z.number().optional(),
            isFeatured: z.boolean().default(false),
            draft: z.boolean().default(false),
            seo: seoSchema(image).optional()
        })
});

// Projetos (cases) em detalhe: /projetos
const cases = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            client: z.string(),
            sector: z.string().optional(),
            period: z.string(),
            summary: z.string(),
            order: z.number().optional(),
            isFeatured: z.boolean().default(false),
            draft: z.boolean().default(false),
            seo: seoSchema(image).optional()
        })
});

// Podcasts e entrevistas em vídeo/áudio: /midia
const podcasts = defineCollection({
    loader: glob({ pattern: '**/*.{md,yaml,yml}', base: './src/content/podcasts' }),
    schema: z.object({
        title: z.string(),
        show: z.string(),
        date: z.coerce.date(),
        url: z.string().url(),
        description: z.string().optional(),
        draft: z.boolean().default(false)
    })
});

// Imprensa (matérias, entrevistas, citações): /midia
const imprensa = defineCollection({
    loader: glob({ pattern: '**/*.{md,yaml,yml}', base: './src/content/imprensa' }),
    schema: z.object({
        title: z.string(),
        outlet: z.string(),
        date: z.coerce.date(),
        url: z.string().url(),
        kind: z.enum(['Entrevista', 'Matéria', 'Artigo', 'Citação', 'TV', 'Rádio']).default('Matéria'),
        draft: z.boolean().default(false)
    })
});

export const collections = { blog, pages, projects, cases, podcasts, imprensa };
