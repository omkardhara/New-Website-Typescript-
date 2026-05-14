import Link from 'next/link';
import { NOTES } from '@/data/site';

export function NotesTab() {
  const [featured, ...rest] = NOTES;

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Writing · Long-form</div>
          <h2>
            Thoughts that wouldn&apos;t
            <br />
            <em>fit in a caption.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{NOTES.length}</strong>
          Pieces filed
        </div>
      </div>

      <div className="notes-grid">
        <Link href={`/writing/${featured.slug}`} className="note-card featured">
          <div className="note-meta">
            <span className="note-tag">✦ Featured · {featured.tag}</span>
            <span className="note-date">{featured.date} · {featured.read}</span>
          </div>
          <h3 className="note-title">{featured.title}</h3>
          <p className="note-excerpt">{featured.excerpt}</p>
          <div className="note-read">Read the piece →</div>
        </Link>

        {rest.map((n) => (
          <Link key={n.id} href={`/writing/${n.slug}`} className="note-card">
            <div className="note-meta">
              <span className="note-tag">{n.tag}</span>
              <span className="note-date">{n.date} · {n.read}</span>
            </div>
            <h3 className="note-title">{n.title}</h3>
            <p className="note-excerpt">{n.excerpt}</p>
            <div className="note-read">Read →</div>
          </Link>
        ))}
      </div>
    </>
  );
}
