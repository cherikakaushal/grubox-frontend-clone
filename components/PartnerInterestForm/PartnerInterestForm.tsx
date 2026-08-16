'use client';

import {FormEvent,useState} from 'react';
import styles from '@/app/become-a-partner/partner.module.css';

export default function PartnerInterestForm(){
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSent(true)}
  if(sent)return <div className={styles.thanks}>Thanks for reaching out! See you soon</div>;
  return <form onSubmit={submit}><label>Enter your email here *<input type="email" required/></label><label>Phone *<input type="tel" required/></label><label>Investment Range *<select required defaultValue=""><option value="" disabled>Select</option><option>₹5–10 lakh</option><option>₹10–25 lakh</option><option>₹25 lakh+</option></select></label><label>City *<select required defaultValue=""><option value="" disabled>Select</option><option>Gurgaon</option><option>Delhi</option><option>Noida</option><option>Other</option></select></label><button>Submit</button></form>;
}
