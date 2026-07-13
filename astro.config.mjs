// @ts-check 
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.choxypop.com/',
  
  redirects: {
    '/comunidad': '/comunidad/detalles',
    '/realm': '/realm/detalles',
    '/ayuda': '/ayuda/contacto',
    '/team': '/team/detalles',
  },

  integrations: [
    starlight({
      title: 'ChoxyDocs',
      lastUpdated: true,
      plugins: [
        lucode({
          navLinks: [
            { label: 'Docs', link: '/introduccion/' },
            { label: 'Linktree', link: 'https://go.choxypop.com' },
            { label: 'Web oficial', link: 'https://choxypop.com' },
            { label: 'Deltany', link: 'https://deltany.app'},
          ],
        }),
      ],
      favicon: '/favicon.svg',
      defaultLocale: 'es',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
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
              "name": "ChoxyPop Team"
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
          label: 'Comunidad y Reglas',
          items: [
            { label: 'Sobre la Comunidad', link: '/comunidad/detalles' },
            { label: 'Reglas de WhatsApp', link: '/comunidad/whatsapp' },
            { label: 'Seguridad y Auditoría', link: '/comunidad/seguridad' },
          ],
        },
        {
          label: 'Minecraft Realm',
          items: [
            { label: 'Sobre el Realm', link: '/realm/detalles' },
            { label: 'Reglas del server', link: '/realm/reglas' },
            { label: 'Guia principal', link: '/realm/guia' },
          ],
        },
        {
          label: 'Ayuda',
          items: [
            { label: 'Contacto', link: '/ayuda/contacto' },
            { label: 'Preguntas frecuentes', link: '/ayuda/faq' },
          ],
        },
        {
          label: 'Equipo',
          items: [
            { label: 'Bases del Proyecto', link: '/team/detalles' },
            { label: 'Sobre Mí (Choxy)', link: '/team/choxy' },
            { label: 'Artistas: AstarDev', link: '/team/artistas' },
            { label: 'Unirse al Equipo', link: '/team/reclutamiento' },
            { label: 'Protección de Contenido', link: '/team/copyright' },
          ],
        },
      ],
    }),
  ],
});