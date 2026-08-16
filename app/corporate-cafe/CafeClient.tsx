'use client';
import Image from 'next/image';
import {FormEvent, useState} from 'react';
import s from './cafe.module.css';

type Props = { logos?: readonly (readonly [string,string])[]; formOnly?: boolean };
export default function CafeClient({logos = [], formOnly = false}: Props) {
  const [start,setStart]=useState(0); const [sent,setSent]=useState(false);
  if(formOnly) return <form className={s.form} onSubmit={(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();setSent(true);}}>
    <label>Name<input name="name" required/></label>
    <label>Office Name and<br/>Address *<input name="office" required/></label>
    <label>Contact details *<span className={s.phone}><b>+91</b><input name="phone" inputMode="numeric" required pattern="[0-9 ]{10,}"/></span></label>
    <label>Business Email *<input name="email" type="email" required/></label>
    <button type="submit">Send</button>{sent&&<p className={s.success} role="status">Thank you! Your enquiry has been received.</p>}
  </form>;
  const shift=(n:number)=>setStart(v=>(v+n+logos.length)%logos.length);
  const ordered=[...logos.slice(start),...logos.slice(0,start)];
  return <div className={s.logoCarousel}><button type="button" onClick={()=>shift(-1)} aria-label="Previous clients">‹</button><div>{ordered.map(l=><Image key={l[0]} src={l[0]} alt={l[1]} width={180} height={120}/>)}</div><button type="button" onClick={()=>shift(1)} aria-label="Next clients">›</button></div>;
}
