'use client';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {assets} from '@/lib/assets';
import s from './Header.module.css';

const services=[['GruBox Managed Cafe','/corporate-cafe'],['Grubox Vending Machines','/vendingmachines'],['Office Snacks Deliveries','/grubox-office-deliveries'],['Grubox Terms of Service','/terms-of-service']];

export default function Header(){
  const [open,setOpen]=useState(false);
  const path=usePathname();
  const close=()=>setOpen(false);
  return <header className={s.header}>
    <a className={s.logo} href="/" onClick={close} aria-label="Grubox home"><Image src={assets.logo} alt="Grubox" width={150} height={45} priority/></a>
    <button type="button" className={s.toggle} onClick={()=>setOpen(value=>!value)} aria-expanded={open} aria-label="Toggle menu"><i/><i/><i/></button>
    <nav className={`${s.nav} ${open?s.open:''}`} aria-label="Main navigation">
      <div className={s.drop}><button type="button" className={services.some(item=>path===item[1])?s.active:''} aria-haspopup="true">SERVICES</button><div className={s.menu}>{services.map(([name,href])=><a className={path===href?s.menuActive:''} key={href} href={href} onClick={close}>{name}</a>)}</div></div>
      <a className={path==='/become-a-partner'?s.active:''} href="/become-a-partner" onClick={close}>JOIN US AS PARTNER</a>
      <a className={path.startsWith('/blog')?s.active:''} href="/blog" onClick={close}>BLOGS</a>
      <div className={s.drop}><a className={path==='/about'||path==='/frequently-asked-questions'?s.active:''} href="/about" onClick={close}>ABOUT</a><div className={s.menu}><a href="/frequently-asked-questions" onClick={close}>Frequently Asked Questions</a></div></div>
      <a className={path==='/contact-us-vm'?s.active:''} href="/contact-us-vm" onClick={close}>CONTACT US-VM</a>
    </nav>
    <div className={s.social}><a className={s.instagram} href="https://instagram.com/grubox.in" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a className={s.facebook} href="https://facebook.com/gruboxsmartvending" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><a className={s.linkedin} href="https://linkedin.com/company/grubox" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a className={s.youtube} href="https://youtube.com/@grubox_fnb" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a><a className={s.x} href="https://x.com/cafegrubox" target="_blank" rel="noreferrer" aria-label="X">𝕏</a></div>
  </header>;
}
