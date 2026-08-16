import BlogGrid from '@/components/BlogGrid/BlogGrid';import s from './blog.module.css';
export const metadata={title:'Blog'};
export default function Blog(){return <><section className={s.hero}><p>Insights & Ideas</p><h1>Grubox Blog</h1><p>Smart dining, food technology, employee wellness and the future of workplace snacking.</p></section><BlogGrid/></>}
