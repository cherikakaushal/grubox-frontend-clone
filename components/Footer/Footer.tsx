import Image from 'next/image';
import Link from 'next/link';
import {assets} from '@/lib/assets';
import s from './Footer.module.css';

export default function Footer(){return <footer className={s.footer}>
  <div className={s.top}>
    <section><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/careers">Careers</Link><Link href="/become-a-partner">Join us as Franchisee</Link><Link href="/grubox-office-deliveries">Office Snacks Deliveries</Link><Link href="/corporate-cafe">Managed Cafe</Link></section>
    <section><h3>Contact Us</h3><p>8th Floor, Tower A, Magnum Tower,<br/>Sector-58, Golf Course Extension<br/>Gurgaon, Haryana- 122018</p><a href="tel:01143144000">♧ &nbsp; 011 4314 4000</a><a href="mailto:care@grubox.in">✉ &nbsp; care@grubox.in</a></section>
  </div>
  <div className={s.lower}>
    <section className={s.company}>
      <h3>Grubox Corporate Food Solutions</h3><p>Smart vending machines • Office snack delivery •<br/>Corporate cafeterias</p><p>Serving workplaces across Gurgaon, Delhi, and Noida</p><p>Grubox is a corporate cafeteria, smart vending and snack<br/>delivery platform operated by My Phygital Cafe Private<br/>Limited.</p>
      <Link href="/privacy-policy">Grubox Privacy Policy</Link><Link href="/frequently-asked-questions">Frequently Asked Questions</Link><p className={s.download}>Download Grubox App Now</p><div className={s.stores}><a href="https://appurl.io/D1vl3J6nJ" target="_blank" rel="noreferrer"><Image src={assets.playStore} width={50} height={51} alt="Google Play"/></a><a href="https://apps.apple.com/us/app/grubox/id1457717316" target="_blank" rel="noreferrer"><Image src={assets.appStore} width={50} height={43} alt="App Store"/></a></div>
    </section>
    <section className={s.operations}>
      <div className={s.socials}><a className={s.instagram} href="https://instagram.com/grubox.in" target="_blank" rel="noreferrer">◎</a><a className={s.facebook} href="https://facebook.com/gruboxsmartvending" target="_blank" rel="noreferrer">f</a><a className={s.linkedin} href="https://linkedin.com/company/grubox" target="_blank" rel="noreferrer">in</a><a className={s.youtube} href="https://youtube.com/@grubox_fnb" target="_blank" rel="noreferrer">▶</a><a className={s.x} href="https://x.com/cafegrubox" target="_blank" rel="noreferrer">𝕏</a></div>
      <h2>ISO CERTIFIED<br/>OPERATIONS</h2><div className={s.certificates}><Image src={assets.iso9001} width={147} height={87} alt="ISO 9001:2015 certified"/><Image src={assets.iso14001} width={128} height={87} alt="ISO 14001:2015 certified"/></div>
      <div className={s.map}><iframe title="Head Office Grubox map" src="https://www.google.com/maps?q=Magnum+Tower+Sector+58+Gurgaon&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
    </section>
  </div>
  <div className={s.bottom}><span>© 2025, Grubox by My Phygital Cafe Private Limited |</span><span><Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms &amp; Conditions</Link></span><span>All Rights Reserved.</span></div>
</footer>}
