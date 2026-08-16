'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import styles from './NewsCarousel.module.css';

const newsItems = [
  {
    image: '/images/news-business-standard.avif',
    alt: 'Business Standard',
    title: 'How Grubox is Shaping the Future of Corporate Dining Through Innovation and Sustainability',
    href: 'https://www.business-standard.com/content/specials/how-grubox-is-shaping-the-future-of-corporate-dining-through-innovation-and-sustainability-124100401008_1.html',
  },
  {
    image: '/images/news-business-standard.avif',
    alt: 'Business Standard',
    title: 'How Grubox is Shaping the Future of Corporate Dining Through Innovation and Sustainability',
    href: 'https://www.business-standard.com/content/specials/how-grubox-is-shaping-the-future-of-corporate-dining-through-innovation-and-sustainability-124100401008_1.html',
  },
  {
    image: '/images/news-outlook.avif',
    alt: 'Outlook India',
    title: 'Grubox: Revolutionizing Corporate Cafeterias With Tech-Enabled On-Demand Dining Solutions',
    href: 'https://www.outlookindia.com/hub4business/grubox-revolutionizing-corporate-cafeterias-with-tech-enabled-on-demand-dining-solutions',
  },
  {
    image: '/images/news-marketers-media.avif',
    alt: 'Marketers Media',
    title: 'Grubox - Transforming Workplace Dining: Tech Innovations for The Modern Hybrid Workers',
    href: 'https://news.marketersmedia.com/gurubox-transforming-workplace-dining-tech-innovations-for-the-modern-hybrid-workers/89147863',
  },
  {
    image: '/images/news-up18.avif',
    alt: 'UP18 News',
    title: 'Grubox: Your one-stop solution for customized corporate F&B needs — How Tech is Revolutionizing Workplace Dining',
    href: 'https://up18news.com/how-tech-is-revolutionizing-workplace-dining/',
  },
  {
    image: '/images/news-yourstory.avif',
    alt: 'YourStory',
    title: 'These IIT-Kanpur alumni want to make snacking easy as pie with vending startup GruBox',
    href: 'https://yourstory.com/2020/01/snack-vending-startup-grubox-iit-kanpur-alumni',
  },
  {
    image: '/images/news-midday.avif',
    alt: 'Mid-day',
    title: 'Customer Story: GruBox offered a range of benefits that made the lunchtime experience convenient and enjoyable for Ravi.',
    href: 'https://bespokestories.mid-day.com/',
  },
  {
    image: '/images/news-sangri.avif',
    alt: 'Sangri Today',
    title: 'How Tech is Revolutionizing Workplace Dining',
    href: 'https://www.sangritoday.com/spotlight/how-tech-is-revolutionizing-workplace-dining',
  },
];

export default function NewsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % newsItems.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (step: number) => setActive((current) => (current + step + newsItems.length) % newsItems.length);
  const item = newsItems[active];

  return (
    <section className={styles.news} aria-roledescription="carousel" aria-label="Grubox in the news">
      <h2>We are in News</h2>
      <div className={styles.carousel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <button className={`${styles.arrow} ${styles.previous}`} type="button" aria-label="Previous news item" onClick={() => move(-1)}>‹</button>
        <div className={styles.slide} key={active}>
          <a href={item.href} target="_blank" rel="noreferrer noopener" className={styles.imageLink} aria-label={`Read: ${item.title}`}>
            <Image src={item.image} alt={item.alt} width={395} height={323} priority={active === 0}/>
          </a>
          <p>{item.title}</p>
        </div>
        <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label="Next news item" onClick={() => move(1)}>›</button>
        <div className={styles.dots} aria-label="Choose a news slide">
          {newsItems.map((news, index) => (
            <button key={`${news.href}-${index}`} type="button" className={index === active ? styles.activeDot : ''} aria-label={`Show slide ${index + 1}`} aria-current={index === active ? 'true' : undefined} onClick={() => setActive(index)}/>
          ))}
        </div>
      </div>
    </section>
  );
}
