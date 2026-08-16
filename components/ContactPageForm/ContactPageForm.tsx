'use client';
import { FormEvent, useState } from 'react';
import s from './ContactPageForm.module.css';

export default function ContactPageForm() {
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSent(true)}
  if(sent)return <div className={s.thanks}><h3>Thanks for submitting!</h3><p>We will get back to you shortly.</p><button onClick={()=>setSent(false)}>Send another message</button></div>;
  return <form className={s.form} onSubmit={submit}>
    <label>Full Name<input name="name" type="text"/></label>
    <label>Phone Number *<input name="phone" type="tel" required/></label>
    <label className={s.full}>Business Email *<input name="email" type="email" required/></label>
    <label className={s.full}>Message<textarea name="message" rows={4}/></label>
    <label className={s.full}>Address<input name="address" type="text" placeholder="Address"/></label>
    <label className={s.full}>Types of Requirement *<select name="requirement" required defaultValue=""><option value="" disabled>Choose your requirement</option><option>Vending Machine</option><option>Managed Cafe</option><option>Office Snacks Delivery</option><option>Partnership</option><option>Other</option></select></label>
    <label className={s.full}>Choose your Region<select name="region" defaultValue=""><option value="" disabled>Region</option><option>Gurgaon</option><option>Delhi</option><option>Noida</option><option>Other</option></select></label>
    <label className={s.checkbox}><input type="checkbox" required/> <span>I accept terms &amp; conditions</span></label>
    <button className={s.send}>Send</button>
  </form>;
}
