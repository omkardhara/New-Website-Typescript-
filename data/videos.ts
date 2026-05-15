import type { Video } from './types';

export const VIDEOS: Video[] = [
  {
    title: 'Britannia Chocostars',
    sub: 'TV Commercial · Britannia',
    yt: 'jyzFUHqmjsQ',
    thumb: 'https://img.youtube.com/vi/jyzFUHqmjsQ/maxresdefault.jpg',
  },
  {
    title: 'Wicked Broz × Mochi · 4-City Hip-Hop Tour',
    sub: 'Bengaluru · Hyderabad · Chennai · Goa',
    yt: '-EecfvR0_FE',
    thumb: 'https://img.youtube.com/vi/-EecfvR0_FE/maxresdefault.jpg',
  },
  {
    // Doordarshan video doesn't auto-generate a maxresdefault thumbnail.
    // Use the local image from /public/images/.
    title: 'Beyond Thoughts · Doordarshan',
    sub: 'A walk through the journey · National TV',
    yt: '5A9IgNfa7Wg',
    thumb: '/images/Doordarshan-Beyond Thoughts- Omkar Dhareshwar.png',
  },
  {
    title: 'Museum of Goa · Flow Simulator',
    sub: 'Khel-Spel HomoLudens · The Art of Play',
    yt: '6psNfvXNDkM',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/6psNfvXNDkM/maxresdefault.jpg',
  },
  {
    title: 'Vithoba Dantmanjan × Shruti Haasan',
    sub: 'Commercial · Featuring Shruti Haasan',
    yt: 'pYxmfvJM9So',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/pYxmfvJM9So/maxresdefault.jpg',
  },
  {
    title: 'Blindfold Juggling',
    sub: 'Blind World · A social juggling commentary',
    yt: 'zogO_4McBPg',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/zogO_4McBPg/maxresdefault.jpg',
  },
];
