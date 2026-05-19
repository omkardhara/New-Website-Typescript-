import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Omkar Dhareshwar',
    short_name: 'Omkar',
    description: 'Flow artist, fire performer, and storyteller — Portfolio & Writing',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F0D',
    theme_color: '#0F0F0D',
    orientation: 'portrait',
    icons: [
      { src: '/favicon.png', sizes: '1076x1080', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
  };
}
