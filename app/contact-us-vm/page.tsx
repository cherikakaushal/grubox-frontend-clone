import Image from 'next/image';
import { assets } from '@/lib/assets';
import ContactPageForm from '@/components/ContactPageForm/ContactPageForm';
import s from './contact.module.css';

export const metadata={title:'Contact Us'};

export default function Contact(){return <>
  <section className={s.banner}><Image src={assets.contactBanner} alt="Grubox banner" fill priority sizes="100vw"/></section>
  <section className={s.contact}>
    <div className={s.details}>
      <h1>Contact Us</h1>
      <p className={s.intro}>We’d love to hear from you! Whether you have questions about our smart vending solutions, need support, or want to explore business opportunities, our team is here to help. Drop us a message, and we’ll get back to you as soon as possible. Let’s connect and bring seamless, unmanned retail experiences to your workplace!</p>
      <div className={s.contactRows}><div className={s.info}><h3>Phone</h3><a href="tel:01143144000">011 4314 4000</a></div><div className={s.info}><h3>Email</h3><a href="mailto:care@grubox.in">care@grubox.in</a></div></div>
      <div className={s.info}><h3>Social Media</h3><div className={s.socials}><a className={s.instagram} href="https://instagram.com/grubox.in" aria-label="Instagram">◎</a><a className={s.facebook} href="https://facebook.com/gruboxsmartvending" aria-label="Facebook">f</a><a className={s.linkedin} href="https://linkedin.com/company/grubox" aria-label="LinkedIn">in</a><a className={s.youtube} href="https://youtube.com/@grubox_fnb" aria-label="YouTube">▶</a><a className={s.x} href="https://x.com/cafegrubox" aria-label="X">𝕏</a></div></div>
      <div className={s.info}><h3>Opening Hours</h3><p>Mon - Fri&nbsp; :&nbsp; 11 AM - 6 PM</p></div>
      <div className={s.info}><h3>Address</h3><p>8th Floor, Tower A, Magnum Tower, Sector-58, Golf Course Extension, Gurgaon, Haryana- 122018</p></div>
    </div>
    <div className={s.formWrap}><ContactPageForm/></div>
  </section>
  <section className={s.map}><iframe title="Grubox office location" src="https://www.google.com/maps?q=Magnum+Tower+Sector+58+Gurgaon&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></section>
  </>}
