import type { Metadata } from 'next';
import Image from 'next/image';
import CafeClient from './CafeClient';
import s from './cafe.module.css';

export const metadata: Metadata = {
  title: 'Corporate Cafe Services',
  description: 'Workplace café services designed for healthier, happier teams.',
};

const logos = [
  ['/images/cafe-logo-cinepolis.png', 'Cinépolis'],
  ['/images/cafe-logo-jkcement.jpg', 'JK Lakshmi Cement'],
  ['/images/cafe-logo-jktyre.jpeg', 'JK Tyre'],
  ['/images/cafe-logo-ubiquity.png', 'Ubiquity'],
  ['/images/cafe-logo-aon.png', 'Aon'],
  ['/images/cafe-logo-csc.jpeg', 'CSC'],
] as const;

export default function CorporateCafePage() {
  return <div className={s.page}>
    <section className={s.hero}>
      <Image src="/images/cafe-hero.jpg" alt="Modern minimalist workplace cafeteria live counter" fill priority sizes="100vw" />
      <div className={s.heroPanel}>
        <h1>Workplace Café Services<br/>Designed for Healthier,<br/>Happier Teams</h1>
        <a href="#cafe-enquiry">Contact Now</a>
      </div>
    </section>

    <section className={`${s.twoCol} ${s.intro}`}>
      <Image className={s.squareImage} src="/images/cafe-intro.jpg" alt="Cafe services by Grubox" width={788} height={782}/>
      <div className={s.copy}>
        <h2>A thoughtfully curated corporate café experience that supports employee wellbeing, energy, and engagement, without increasing admin workload</h2>
        <i/>
        <p>Grubox Cafe&apos; is café services designed to reflect the culture of your workplace. Curated menus&nbsp; • &nbsp;Wellness sessions&nbsp; • &nbsp;Healthy Food&nbsp; • &nbsp;Zero operational hassle</p>
      </div>
    </section>

    <section className={`${s.twoCol} ${s.wellbeing}`}>
      <div className={s.copy}>
        <h2>More Than a Café. A Daily Wellbeing Touchpoint.</h2><i/>
        <p>Your corporate café can do more than serve food. With Grubox, India&apos;s leading healthy canteen service providers, it becomes a subtle but powerful way to support employee health, morale, and participation across the workday.</p>
        <p>We transform with cafeteria interior design into a modern, elegant space designed for today’s workforce—handling everything from design to setting up seamless café services and engaging live cooking counters. With operations fully managed by us, facility managers can truly sit back and relax while employees enjoy an elevated cafeteria experience.</p>
      </div>
      <Image className={s.benefitImage} src="/images/cafe-benefits.png" alt="Discover the benefits of Grubox Cafe" width={1006} height={1006}/>
    </section>

    <section className={s.twoCol}>
      <Image className={s.squareImage} src="/images/cafe-menu.jpg" alt="Canteen services Grubox menu" width={788} height={782}/>
      <div className={s.copy}>
        <h2>Curated Menus, Healthy Snacks for Offices Wellness &amp; Indulgence</h2><i/>
        <p>Curated Menus for Energy &amp; Balance</p>
        <ul><li>We handle everything - from office coffee machines, tea machines, nutrition-aware menus, live cooking counter designed for daily office routines</li><li>Options for healthy snacks for offices, high protein snacks, coffee and tea service, healthy snacks for office workers</li><li>Supports productivity, energy levels, and healthier habits at work</li></ul>
      </div>
    </section>

    <section className={`${s.twoCol} ${s.feedback}`}>
      <div className={s.copy}>
        <h2>Built-in Employee<br/>Feedback &amp; Pulse<br/>Surveys</h2><i/>
        <p><strong>Grubox manages staffing, training, hygiene SOPs, and daily operations with hotel-grade precision. Our simple platform help you manage food preferences of your employees, bookings for food cafe and catering for office events.</strong></p>
        <p>Helps HR and admins make data-backed decisions. Improves day to day participation without long feedback cycles.</p>
      </div>
      <Image className={s.squareImage} src="/images/cafe-kitchen.jpg" alt="Modern office kitchen" width={788} height={782}/>
    </section>

    <section className={s.twoCol}>
      <Image className={s.squareImage} src="/images/cafe-insights.jpg" alt="Managed cafeteria by Grubox" width={788} height={782}/>
      <div className={s.copy}><h2>Smart Insights for<br/>Smarter Dining</h2><i/><p>From full service cafes to office tea counters, real-time dashboards helps you track wellness patterns. Predictive analytics reduce waste, while monthly engagement reports give management clear ROI.</p><p>For employees, it cafeteria that adapts to taste, nutrition needs and wellness goals.</p></div>
    </section>

    <section className={s.trusted} aria-label="Trusted corporate clients">
      <h2>Trusted by Leading Corporates</h2>
      <CafeClient logos={logos}/>
    </section>

    <section className={s.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={s.faqGrid}>
        <Image src="/images/cafe-sandwich.jpeg" alt="Toast sandwich" width={650} height={900}/>
        <article><h3>How is this different<br/>from catering?</h3><p>Grubox curates a café services - live cooking counters, cut fruits, packed snacks, event snacks. We do not provide lunch meal catering services.</p></article>
        <Image src="/images/cafe-fruit.jpg" alt="Bowl of fruits" width={650} height={900}/>
        <article><h3>How fast can we set<br/>up?</h3><p>A pilot café can be operational within 2–4 weeks, including staff, Menu Curation and tech onboarding.</p></article>
        <article><h3>Can the menu<br/>reflect our<br/>company culture?</h3><p>Absolutely—menus and interiors are customized to fit your office environment and employee preferences.</p></article>
      </div>
    </section>

    <section className={s.enquiry} id="cafe-enquiry">
      <h2>Send Enquiry</h2>
      <p>Elevate dining into an experience employees look forward to daily. Book a consultation and discover how Grubox can<br className={s.desktop}/> design and manage a café tailored to your workplace.</p>
      <CafeClient formOnly/>
    </section>
  </div>;
}
