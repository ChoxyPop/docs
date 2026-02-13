// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.choxypop.com/',
  integrations: [
    starlight({
      title: 'ChoxyDocs',
      favicon: '/favicon.svg',
      defaultLocale: 'es',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      social: [{ icon: 'twitter', label: 'Twitter', href: 'https://x.com/choxypop' },
        { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/choxypop' }],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://docs.choxypop.com/og-image.png' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ChoxyDocs",
            "url": "https://docs.choxypop.com",
            "description": "Documentación oficial del proyecto ChoxyPop.",
            "publisher": {
              "@type": "Organization",
              "name": "ChoxyPop"
            }
          })
        },
      ],
      sidebar: [
        {
          label: 'Guía de Inicio',
          items: [
            { label: 'Introducción', link: '/introduccion' },
          ],
        },
        {
          label: 'Equipo',
          items: [
            { label: 'Bases del Proyecto', link: '/team/detalles' },
            { label: 'Sobre Mí (Choxy)', link: '/team/choxy' },
            { label: 'Artistas: Mafiul8 y AstarDev', link: '/team/artistas' },
            { label: 'Unirse al Equipo', link: '/team/reclutamiento' },
            { label: 'Protección de Contenido', link: '/team/copyright' },
          ],
        },
        {
          label: 'Comunidad y Reglas',
          items: [
            { label: 'Sobre la Comunidad', link: '/comunidad/detalles' },
            { label: 'Reglas de Convivencia', link: '/comunidad/reglas' },
            { label: 'Seguridad y Auditoría', link: '/comunidad/seguridad' },
          ],
        },
        {
          label: 'Ayuda',
          autogenerate: { directory: 'ayuda' },
        },
      ],
    }),
  ],
});