import { getDictionary } from '../../dictionaries/getDictionary';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Reasons from '../../components/Reasons';
import VehicleList from '../../components/VehicleList';
import ContactOwner from '../../components/ContactOwner';
import BlogSection from '../../components/BlogSection';
import LocationMap from '../../components/LocationMap';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'id' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main>
        <Hero dict={dict.hero} lang={lang} />
        <Reasons dict={dict.reasons} />
        <VehicleList dict={dict.vehicles} lang={lang} />
        <ContactOwner dict={dict.contact} />
        <BlogSection dict={dict.blog} lang={lang} />
        <LocationMap dict={dict.map} />
        <Testimonials dict={dict.testimonials} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
