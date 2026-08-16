import type {Metadata} from 'next';
import Image from 'next/image';
import s from './delivery.module.css';

export const metadata:Metadata={title:'Office Snacks Delivery',description:'Hassle-free office supply delivery by GruBox.'};
const features=[
  {image:'/images/delivery-app.jpg',alt:'Grubox app based convenience',title:'App-Based Convenience',text:"Easily place and manage office supply orders from your smartphone or desktop, anytime, anywhere. The app’s and web interface is intuitive, simplifies reordering, tracking, and budget management, saving you valuable time."},
  {image:'/images/delivery-van.jpg',alt:'Grubox delivery van',title:'Super Fast Deliveries',text:'No more waiting – receive your office supplies superfast. Our reliable delivery ensures your office stays stocked and operational without any interruptions. See transparent delivery times on platform interface.'},
  {image:'/images/delivery-skus.png',alt:'Grubox office supply products',title:'2000+ SKUs',text:'Choose from a vast selection of over 2000 office essentials, from stationery, packed food and fresh kitchen supplies. Our diverse range guarantees that all your supply needs are met in one convenient app'},
];
const clients=[['/images/delivery-client-atkins.png','WS Atkins'],['/images/delivery-client-aon.png','Aon'],['/images/delivery-client-ubiquity.png','Ubiquity Networks'],['/images/delivery-client-coralogix.jpg','Coralogix'],['/images/delivery-client-amex.png','American Express']] as const;

export default function Delivery(){return <div className={s.page}>
  <section className={s.hero}>
    <Image src="/images/delivery-hero.jpg" alt="GruBox office supplies counter" fill priority sizes="100vw"/>
    <div className={s.shade}/>
    <div className={s.heroCopy}><span>Home &amp; Office Delivery</span><h1>GruBox Office Supplies</h1><p>Get office deliveries of the <mark>best quality products</mark> from leading brands, finest fresh supplies and<br/> packed snacks.</p><p>With thousands of vendors and dark stores strategically located near you, we offer unbeatable<br/> value and day-to-day deliveries to your office. Our <mark>on-time delivery</mark> guarantees that you always<br/> receive what you need, when you need it.</p><p>Our <mark>intuitive dashboard</mark> allows you to easily monitor your orders and expenses, giving you full<br/> control and transparency over your office supplies management.</p><a href="/contact-us-vm">CONTACT US</a></div>
  </section>

  <section className={s.management}>
    <div className={s.managementInner}><h2>Hassle-Free Office Supply Management</h2><h3>GruBox snack supplies help improve employee engagement by making everyday breaks,<br/> meetings, and office celebrations more convenient and enjoyable. A well-stocked pantry creates<br/> small but frequent moments of refreshment, connection, and workplace comfort.</h3>
      <div className={s.features}>{features.map(feature=><article key={feature.title}><Image src={feature.image} alt={feature.alt} width={318} height={318}/><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
    </div>
  </section>

  <section className={s.teal}>
    <div className={s.engagement}><Image src="/images/delivery-bulk.jpg" alt="Bulk deliveries by Grubox" width={1278} height={850}/><div><h2>Office Deliveries as a lever for<br/>employee engagement</h2><p>Our office supplies delivery service is suitable for party, events, daily needs. Partnering with us ensures your workplace never runs out of essential items, from snacks to cleaning materials.</p><p>With flexible delivery schedules, real-time inventory tracking, and dedicated account management, Grubox helps you maintain optimal stock levels while reducing procurement costs and administrative overhead.</p><p>At the same time, systematic tracking of consumption, replenishment, and category-wise demand helps admins monitor performance, control spends, and plan supplies more efficiently. This creates a smoother, more transparent office food experience for both employees and facility teams.</p></div></div>
    <div className={s.pantry}><div><h2>Daily Pantry to Events: Single Snacking<br/>Partner</h2><h3>Single Point of contact</h3><p>GruBox office snack supplies help companies keep employees refreshed with reliable, curated food options for daily use and special workplace needs.</p><ul><li>Office pantry stocking – Snacks, beverages, healthy bites, biscuits, and namkeen for everyday consumption.</li><li>Meetings &amp; visitors – Light refreshments, juices, tea-time snacks, and packaged food for guests or internal meetings.</li><li>Events &amp; celebrations – Curated snack boxes and assorted packs for team activities, town halls, and festive occasions.</li><li>Late working support – Quick snacks, drinks, and ready-to-eat options for long work hours or shifts.</li><li>Cafeteria add-ons – Branded packed food and impulse snacks to increase variety.</li></ul></div><Image src="/images/delivery-pantry.jpg" alt="Grubox office pantry services" width={1298} height={862}/></div>
  </section>

  <section className={s.clients}><h2>Our Clients</h2><div>{clients.map(([src,alt])=><Image key={src} src={src} alt={alt} width={300} height={300}/>)}</div></section>
</div>}
