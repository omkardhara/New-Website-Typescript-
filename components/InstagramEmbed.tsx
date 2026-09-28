type Props = {
  url: string;
  title: string;
};

export function InstagramEmbed({ url, title }: Props) {
  const embedSrc = `${url.split('?')[0].replace(/\/$/, '')}/embed`;

  return (
    <iframe
      src={embedSrc}
      title={title}
      style={{ width: '100%', maxWidth: '400px', height: '680px', border: 'none', display: 'block', margin: '0 auto' }}
      scrolling="no"
      allowFullScreen
      loading="lazy"
    />
  );
}
