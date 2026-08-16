'use client';

import Image from 'next/image';
import {FormEvent, useMemo, useState} from 'react';
import styles from './FAQPage.module.css';

type FAQ = {question: string; answer: string};

const officeDeliveries: FAQ[] = [
  {question:'What types of office pantry items does Grubox offer to keep our team energized?',answer:'Healthy Snacks – Granola bars, trail mix, dried fruits, nuts, and protein bars. Beverages – Tea, coffee, flavored water, and energy drinks. Instant Meals – Ready-to-eat meals, cup noodles, and soups. Fresh Options – Fruits, yogurt, and sandwiches (availability may vary). Guilt-Free Treats – Dark chocolate, low-calorie chips, and sugar-free snacks.'},
  {question:'What is the easiest way to provide healthy snacks in an office in Gurugram?',answer:'The easiest way is to partner with a corporate food service provider like Grubox. They offer smart vending machines, office snack deliveries, and managed cafeteria solutions that bring fresh and nutritious snacks directly to your workplace. This removes the need to manage multiple vendors or daily food ordering.'},
  {question:'What kind of healthy snacks can offices offer employees?',answer:'With Grubox solutions, workplaces can offer a variety of healthier options such as fresh fruits salads, sandwiches, millet-based snacks, protein-rich foods, and wholesome Indian meals. These snacks are curated to support employee wellness while still being convenient and tasty.'},
  {question:'How does the snack service work in an office setup?',answer:'Grubox installs smart vending machines or provides scheduled snack deliveries to your office. Employees can simply choose their snacks through a touch interface or pay digitally using UPI, or Grubox wallets in the Grubox app. The machines are monitored with AI-powered inventory systems to ensure snacks are always available.'},
  {question:'Why should companies provide healthy snacks at the workplace?',answer:'Healthy workplace snacking helps improve employee energy, productivity, and overall wellness. Companies in Gurugram increasingly adopt smart cafeteria and vending solutions to support better eating habits and enhance workplace satisfaction.'},
  {question:'Is it difficult to install a snack solution in an office?',answer:'Not at all. Providers like Grubox offer fully managed setups including installation, stocking, maintenance, and service support. Offices can choose from vending machines, snack kiosks, or bulk snack deliveries depending on team size and requirements.'},
  {question:'How can I get healthy snacks for my workplace in Gurugram?',answer:'The easiest way to provide healthy snacks in your Gurugram office is by partnering with a corporate snack service provider like Grubox. Grubox offers smart vending machines, office snack delivery, and managed cafeteria services designed specifically for workplaces. Companies can provide employees with fresh, nutritious snacks without managing food vendors or daily orders.'},
  {question:'What are the best office snack delivery services in Gurgaon?',answer:'One of the best office snack delivery services in Gurgaon is Grubox, which provides a combination of smart vending machines, snack kiosks, and scheduled office snack deliveries. These services are designed for corporate offices that want convenient, hygienic, and healthy food options for their employees.'},
  {question:'What type of healthy snacks can offices offer employees?',answer:'Offices can offer a variety of healthy snack options such as fresh fruit bowls, sandwiches and wraps, millet-based snacks, protein-rich snacks, and fresh beverages and juices. These options help employees stay energized and productive throughout the workday.'},
  {question:'Why should companies provide healthy snacks at the workplace?',answer:'Providing healthy snacks at work improves employee well-being and productivity. It helps increase employee satisfaction, reduce time spent leaving the office for food, promote healthier eating habits, and improve workplace engagement. Many companies in Gurugram, Noida, and Delhi NCR are adopting corporate snack services to create better workplace experiences.'},
  {question:'Is it difficult to install snack services in an office?',answer:'No. Corporate snack providers like Grubox offer fully managed solutions, including installation of vending machines or kiosks, regular restocking, maintenance and servicing, and customer support. This makes it easy for companies to offer snacks without managing operations.'},
];

const general: FAQ[] = [
  {question:'What is the minimum order for bulk fruit delivery?',answer:'We cater to offices starting from small teams to large enterprises.'},
  {question:'Do you provide daily fruit box delivery?',answer:'Yes, we offer subscription-based daily fruit delivery for offices.'},
  {question:'Can fruit boxes be customized?',answer:'Yes, based on seasonal availability and preferences.'},
  {question:'Which areas in Gurgaon do you serve?',answer:'We cover all major corporate hubs including Cyber City and Udyog Vihar.'},
];

export default function FAQPage() {
  const [category, setCategory] = useState<'office'|'general'>('office');
  const [open, setOpen] = useState<number|null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState('');
  const faqs = useMemo(() => (category === 'office' ? officeDeliveries : general).filter(item => `${item.question} ${item.answer}`.toLowerCase().includes(search.toLowerCase())), [category, search]);

  function choose(next: 'office'|'general') { setCategory(next); setOpen(0); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return <>
    <section className={styles.policy}>
      <div className={styles.policyInner}>
        <h1>Policy of use</h1>
        <div className={styles.policyGrid}>
          <article className={styles.policyCopy}>
            <h2>Service Charges</h2>
            <p>Please note that starting 2020, you are being charged a basic fees of Rs 1 on the services provided. This is an optional service charge for most of your orders every month. However, this is to ensure that you get the best quality of products and a smooth ordering experience. We hope that you will support us in meeting the best in class service requirements of our users and clients.</p>
            <h2>Refund Policy</h2>
            <p>To get refunds for orders, initiate the returns process through GruBox or GruBox Consumer App or Customer Care or you can write to us at <a href="mailto:care@grubox.in">care@grubox.in</a>. Refund request is eligible only when the item is not vended successfully. In any case where a refund is required, the Refund Approval team need to authorise that refund. Once the refunds are initiated by Refund Approval Team, the following timelines apply for the amount to be credited.</p>
            <div className={styles.refundHead}><span>Payment Method<br/>(Payment made by customer)</span><span>Refund Method<br/>(Refund is initiated by this method)</span><span>Refund Time Frame<br/>(After Refund Team approval)</span></div>
            <div className={styles.refundRows}><p><b>PayTM</b><span>PayTM Wallet</span><span>Within 24 hours</span></p><p><b>Credit/Debit Card</b><span>GruBox Wallet refund</span><span>Within 24 hours</span></p><p><b>Jio Money</b><span>Jio Money</span><span>Within 24 hours</span></p><p><b>Bharat QR</b><span>Bank Account linked to Bharat QR</span><span>5 Bank working days</span></p><p><b>GruBox Wallet</b><span>Not required</span><span>Not required</span></p></div>
          </article>
          <aside className={styles.issue}>
            <h2>Issue Still not Resolved?</h2>
            {submitted ? <p className={styles.success}>Thanks for submitting! We will resolve your query in 24-48 hours.</p> : <form onSubmit={submit}><label><span>Name</span><input name="name" required/></label><label><span>Enter your order ID</span><input name="orderId" required/></label><label><span>Registered Mobile Number</span><input name="mobile" type="tel" required/></label><label><span>Issue Faced</span><select name="issue" required defaultValue=""><option value="" disabled></option><option>Product not received</option><option>Wallet recharge issue</option><option>Payment issue</option><option>Other</option></select></label><label className={styles.consent}><input type="checkbox" required/> I accept terms &amp; conditions</label><div className={styles.recaptcha}><span></span><b>I&apos;m not a robot</b><div>↻<small>reCAPTCHA</small></div></div><button type="submit">Submit</button></form>}
            <Image src="/images/faq-refund.avif" alt="Refund policy Grubox" width={413} height={582}/>
          </aside>
        </div>
      </div>
    </section>
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>
        <div className={styles.faqHeading}><h2>Frequently asked questions</h2><label><input value={search} onChange={event=>{setSearch(event.target.value);setOpen(null)}} placeholder="Looking for something?"/><span aria-hidden="true"></span></label></div>
        <div className={styles.tabs} role="tablist"><button type="button" role="tab" aria-selected={category==='office'} className={category==='office'?styles.selected:''} onClick={()=>choose('office')}>Office Deliveries</button><button type="button" role="tab" aria-selected={category==='general'} className={category==='general'?styles.selected:''} onClick={()=>choose('general')}>General</button></div>
        <div className={styles.accordion}>{faqs.map((faq,index)=><div className={styles.item} key={`${category}-${faq.question}-${index}`}><button type="button" aria-expanded={open===index} onClick={()=>setOpen(open===index?null:index)}><span>{faq.question}</span><i className={open===index?styles.up:styles.down}></i></button>{open===index&&<div className={styles.answer}>{faq.question.startsWith('What types of office pantry')?<ul><li><b>Healthy Snacks</b> – Granola bars, trail mix, dried fruits, nuts, and protein bars.</li><li><b>Beverages</b> – Tea, coffee, flavored water, and energy drinks.</li><li><b>Instant Meals</b> – Ready-to-eat meals, cup noodles, and soups.</li><li><b>Fresh Options</b> – Fruits, yogurt, and sandwiches (availability may vary).</li><li><b>Guilt-Free Treats</b> – Dark chocolate, low-calorie chips, and sugar-free snacks.</li></ul>:<p>{faq.answer}</p>}<div className={styles.share} aria-label="Share"><span>f</span><span>𝕏</span><span>in</span><span>↗</span></div></div>}</div>)}</div>
      </div>
    </section>
  </>;
}
