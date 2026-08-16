'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import s from '@/app/blog/blog.module.css';

const filters = ['All Posts', 'Employee Wellness and Health', 'Snack Vending', 'Vending Machine Franchise'];
const currentPosts = [
  {slug:'is-a-workplace-food-franchise-better-than-a-cafe-franchise',image:'/images/blog-card-1.avif',title:'🏢 Is a Workplace Food Franchise Better Than a Café Franchise?',summary:"Choosing the Right Food Business for the Future 🚀☕ Starting a food franchise is an exciting business opportunity. But with so many options available, one question often comes up: Should you invest in a traditional café franchise or a workplace food franchise? 🤔 The answer depends on your business goals.",read:'3 min read'},
  {slug:'why-office-campuses-are-the-future-of-food-franchising',image:'/images/blog-card-2.avif',title:'🏢 Why Office Campuses Are the Future of Food Franchising',summary:"The Next Big Opportunity Isn't on the High Street—It's Inside the Workplace 🚀🍽️ For decades, food franchises focused on one goal: find the busiest street and open a store. But the way people work—and eat—has changed. Today, millions of professionals spend most of their day inside office campuses.",read:'3 min read'},
  {slug:'mistakes-to-avoid-before-buying-a-food-franchise',image:'/images/blog-card-3.avif',title:'Mistakes to Avoid Before Buying a Food Franchise',summary:'A Smart Investment Starts with Smart Decisions 🚀🍽️ Buying a food franchise can be one of the fastest ways to start a business. You get an established brand, a proven business model, operational support, and a ready customer base. Sounds like the perfect opportunity, right? Not always.',read:'3 min read'},
  {slug:'how-to-choose-the-right-food-franchise-brand',image:'/images/blog-card-4.avif',title:'🍽️ How to Choose the Right Food Franchise Brand',summary:"Don't Just Invest in a Brand—Invest in Your Future 🚀💼 Starting a food franchise is one of the most exciting ways to enter the food business. The brand is already established, the business model is proven, and customers recognize the name. But not every food franchise is the right fit for every entrepreneur.",read:'3 min read'},
];

export default function BlogGrid(){
  const [active,setActive]=useState('All Posts');
  return <main className={s.blog}>
    <nav className={s.filters} aria-label="Blog categories">{filters.map(filter=><button type="button" key={filter} className={active===filter?s.selected:''} onClick={()=>setActive(filter)}>{filter}</button>)}</nav>
    <section className={s.feed} aria-live="polite">{currentPosts.map(post=><article className={s.card} key={post.slug}>
      <Link href={`/blog/${post.slug}`} className={s.image}><Image src={post.image} alt={post.title} width={454} height={341}/></Link>
      <div className={s.copy}><div className={s.meta}><span>Aug 4&nbsp; · &nbsp;{post.read}</span><button type="button" aria-label="More options">⋮</button></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.summary}</p><div className={s.stats}><span>0 views</span><span>0 comments</span><i>♡</i></div></div>
    </article>)}</section>
    <nav className={s.pagination} aria-label="Blog pages"><button type="button" className={s.current}>1</button><a href="https://www.grubox.in/blog/page/2">2</a><a href="https://www.grubox.in/blog/page/2" aria-label="Next page">›</a></nav>
  </main>;
}
