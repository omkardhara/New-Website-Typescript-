export type WorkItem = {
  id: number;
  slug: string;
  cat: 'performance' | 'brand' | 'installation' | 'activism' | 'production' | 'art' | 'education';
  tag: string;
  title: string;
  desc: string;
  stat: string;
  glyph: string;
  gradient?: string;
  image?: string;
  imagePosition?: string;
  images?: string[];
  imagePositions?: string[];
  captions?: string[];
  article?: string;
  yt?: string;
  url?: string;
  linkLabel?: string;
};

export type Video = {
  title: string;
  sub: string;
  yt: string;
  thumb: string;
  portrait?: boolean;
  category?: string;
  startTime?: number; // seconds — embed starts at this offset
};

export type PressCategory = 'street-art' | 'juggling' | 'activism' | 'installation';

export type PressItem = {
  id: number;
  slug: string;
  publication: string;
  title: string;
  featured: boolean;
  year: string;
  type: 'image' | 'pdf';
  src: string;
  images?: string[];
  thumbPosition?: string;
  category: PressCategory;
  url?: string;
};

export type NoteType = 'article' | 'poem' | 'short-story';

export type Note = {
  id: number;
  slug: string;
  title: string;
  date: string;
  read: string;
  tag: string;
  excerpt: string;
  type: NoteType;
  image?: string;
  imagePosition?: string;
  content?: string;
  aiAssisted?: boolean;
  url?: string;
  publication?: string;
};

export type Chapter = {
  id: string;
  roman: string;
  label: string;
  period: string;
  desc: string;
};

export type Offering = {
  id: string;
  icon: string;
  label: string;
  title: string;
  desc: string;
  note: string;
};

export type Social = {
  label: string;
  handle: string;
  href: string;
};
