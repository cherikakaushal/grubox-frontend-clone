'use client';
import Link from 'next/link';
import { useState } from 'react';
import { posts } from '@/lib/content';
import s from '@/app/blog/blog.module.css';

const filters = ['All Posts', 'Employee Wellness and Health', 'Snack Vending', 'Vending Machine Franchise'];

export default function BlogGrid() {
  const [active, setActive] = useState('All Posts');
  const visible = active === 'All Posts' ? posts : posts.filter((_, index) => {
    if (active === 'Employee Wellness and Health') return index % 3 === 0;
    if (active === 'Snack Vending') return index % 3 === 1;
    return index % 3 === 2;
  });
  return <>
    <nav className={s.filters} aria-label="Blog categories">
      {filters.map(filter => <button key={filter} className={active === filter ? s.selected : ''} onClick={() => setActive(filter)}>{filter}</button>)}
    </nav>
    <section className={s.grid} aria-live="polite">
      {visible.map(([slug,title,summary],i)=><article key={slug}><div className={s.thumb}><span>{String(i+1).padStart(2,'0')}</span></div><div><small>WORKPLACE WELLNESS · 3 MIN READ</small><h2><Link href={`/blog/${slug}`}>{title}</Link></h2><p>{summary}</p><Link className={s.read} href={`/blog/${slug}`}>Read More →</Link></div></article>)}
    </section>
  </>;
}
