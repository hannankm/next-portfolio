import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Work from '@/components/home/Work';
import CTA from '@/components/home/CTA';
import Footer from '@/components/home/Footer';


export default function Home () {
    return (
    <div>
        <Hero />        
        <About />
        <Services />
        <Work />
        <CTA />
        <Footer />
    </div>
    )
}