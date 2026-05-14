import Link from 'next/link';
import { CHAPTERS } from '@/data/site';

export function StoryTab() {
  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Career Arc · 2014–Present</div>
          <h2>
            A decade of <em>building things</em>
            <br />
            that didn&apos;t exist before.
          </h2>
        </div>
        <div className="panel-meta">
          <strong>VI</strong>
          Chapters
        </div>
      </div>

      <div className="story-rail">
        {CHAPTERS.map((c) => (
          <Link key={c.id} href={`/story#${c.id}`} className="story-chapter">
            <span className="story-chapter-period">{c.period}</span>
            <span className="story-chapter-circle">{c.roman}</span>
            <span className="story-chapter-label">{c.label}</span>
            <span className="story-chapter-desc">{c.desc}</span>
          </Link>
        ))}
      </div>

      <div className="story-cta">
        <Link href="/story" className="btn-ghost dark">
          Read the full arc →
        </Link>
      </div>
    </>
  );
}
