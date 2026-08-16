import Image from 'next/image';
import { assets } from '@/lib/assets';
import { Button, Hero, Split, Cards } from '@/components/UI/UI';

const reasons=[
  {title:'Smart Food Technology',text:'Grubox uses smart vending machines and digital systems to make food access quick, cashless and seamless.'},
  {title:'Healthy Snack Options',text:'Fresh and nutritious choices support employee well-being and productivity in modern workplaces.'},
  {title:'Fully Managed Service',text:'From installation to restocking and maintenance, Grubox handles everything for your office.'},
  {title:'Convenience for Employees',text:'Easy access to snacks saves time and enhances the overall workplace experience.'},
  {title:'Flexible Workplace Solutions',text:'Choose from smart vending machines, micro cafeterias and scheduled snack delivery.'},
  {title:'Reliable Corporate Support',text:'Consistent service and responsive help provide a solution companies can rely on every day.'}
];
const places=['DLF Cyber Hub','Ambience Mall','Huda City Centre','Sikanderpur','DLF Phase I','DLF Phase II','DLF Phase III','DLF Phase IV','Millennium City','MG Road','U-Block','T-Block','Mayfield Garden','Nathupur','Guru Dronacharya','Gurgaon Sector 17','Gurgaon Sector 18','Gurgaon Sector 24','Gurgaon Sector 26','Gurgaon Sector 27','Gurgaon Sector 44','Gurgaon Sector 45','Gurgaon Sector 48','Gurgaon Sector 50','Gurgaon Sector 52','Gurgaon Sector 53-54','Gurgaon Sector 55-56','Gurgaon Sector 57','Gurgaon Sector 58','Gurgaon Sector 62','Gurgaon Sector 65'];

export default function Home(){return <>
  <Hero title="AI-Powered Cafeterias Reimagined" subtitle="Transforming workplace dining with intelligent solutions." image={assets.hero}/>
  <Split title="Wellness First, Driving Employee Engagement" image={assets.wellness} tone="aqua"><p>At Grubox, we transform office cafeterias into refreshing, energizing spaces where employees can recharge and connect.</p><p>By keeping wellness at the core, we make healthy and fresh food easily accessible while driving employee engagement and satisfaction. Our mission: vibrant, productive workplaces fuelled by smarter dining experiences.</p></Split>
  <Split title="Enhancing Cafe Experiences" image={assets.cafe} reverse tone="cream"><h3>Promoting Employee Engagement</h3><p>Grubox Cafe transforms cafeterias into lively spaces where employees relax, connect, and recharge. Designed for engagement and premium experiences inside corporate environments.</p><Button href="/corporate-cafe">Explore Now</Button></Split>
  <Split title="Smart Hospitality" eyebrow="Innovative Solutions" image={assets.delivery} tone="lime"><p>Discover nutritious and delicious options with Grubox office deliveries. From fresh fruits to wholesome snacks, fuel your day with goodness delivered daily.</p><Button href="/grubox-office-deliveries">Explore Now</Button></Split>
  <Split title="Smart Vending" image={assets.vending} reverse tone="aqua"><p>Our innovative machines offer a wide variety of tasty, healthy snacks for people on the go, with cashless payments and a user-friendly interface.</p><Button href="/vendingmachines">Explore Now</Button></Split>
  <section className="section"><h2 className="section-title center">Why Grubox</h2><Cards items={reasons}/></section>
  <section className="stats"><article><strong>200<span>+</span></strong><p>Trusted companies</p></article><article><strong>500<span>+</span></strong><p>Vendor partners</p></article><article><strong>4<span>M+</span></strong><p>Orders served</p></article></section>
  <section className="image-grid"><Image src={assets.cafe} alt="Grubox cafe" width={700} height={450}/><Image src={assets.gallery1} alt="Grubox workplace" width={700} height={450}/><Image src={assets.gallery2} alt="Grubox service" width={700} height={450}/></section>
  <section className="section section--cream center"><p>Customer Reviews & Testimonials</p><h2 className="section-title center">Trusted by Leading Workplaces</h2><p className="narrow prose">“Grubox vending machines have made snack access extremely convenient for our employees.”</p><b>— Office Admin, Gurgaon</b></section>
  <section className="section section--aqua"><h2 className="section-title">Managed Cafeteria Services in Delhi-NCR</h2><div className="feature-grid">{places.map(place=><article key={place}><h3>{place}</h3><p>Managed cafeteria services and workplace food solutions by Grubox.</p></article>)}</div></section>
</>}
