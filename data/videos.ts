import type { Video } from './types';

export const VIDEOS: Video[] = [
  {
    // Doordarshan video doesn't auto-generate a maxresdefault thumbnail.
    // Use the local image from /public/images/.
    title: 'Beyond Thoughts · Doordarshan',
    sub: 'A walk through the journey · National TV',
    yt: '5A9IgNfa7Wg',
    thumb: '/images/Doordarshan-Beyond Thoughts- Omkar Dhareshwar.png',
  },
  {
    title: 'Britannia Chocostars',
    sub: 'TV Commercial · Britannia',
    yt: 'jyzFUHqmjsQ',
    thumb: 'https://img.youtube.com/vi/jyzFUHqmjsQ/hqdefault.jpg',
  },
  {
    title: 'Thugesh — Almost Monday',
    sub: 'Flow Performance · Live',
    yt: 'jEKNc4njmak',
    thumb: 'https://img.youtube.com/vi/jEKNc4njmak/hqdefault.jpg',
    startTime: 1373, // 22:53
  },
  {
    title: 'Wicked Broz × Mochi · 4-City Hip-Hop Tour',
    sub: 'Bengaluru · Hyderabad · Chennai · Goa',
    yt: '-EecfvR0_FE',
    thumb: 'https://img.youtube.com/vi/-EecfvR0_FE/hqdefault.jpg',
  },
  {
    title: 'Mumbai Metro × ManWith3Balls',
    sub: 'Featured · Mumbai Metro',
    yt: 'o-xjr3pm63w',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/o-xjr3pm63w/hqdefault.jpg',
  },
  {
    title: 'Museum of Goa · Flow Simulator',
    sub: 'Khel-Spel HomoLudens · The Art of Play',
    yt: '6psNfvXNDkM',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/6psNfvXNDkM/hqdefault.jpg',
  },
  {
    title: 'Vithoba Dantmanjan × Shruti Haasan',
    sub: 'Commercial · Featuring Shruti Haasan',
    yt: 'pYxmfvJM9So',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/pYxmfvJM9So/hqdefault.jpg',
  },
  {
    title: 'Blindfold Juggling',
    sub: 'Blind World · A social juggling commentary',
    yt: 'zogO_4McBPg',
    portrait: true,
    thumb: 'https://img.youtube.com/vi/zogO_4McBPg/hqdefault.jpg',
  },
  {
    title: 'Under Neon Sky',
    sub: 'Installation · Light & Movement',
    yt: 'M8aD0NU1akw',
    thumb: 'https://img.youtube.com/vi/M8aD0NU1akw/hqdefault.jpg',
  },
  {
    title: "India's First Graffiti Hyperlapse",
    sub: 'Production · Street Art',
    yt: 'fP4Xm5gmTGI',
    thumb: 'https://img.youtube.com/vi/fP4Xm5gmTGI/hqdefault.jpg',
  },
];
