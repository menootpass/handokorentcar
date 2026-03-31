import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Reasons from '../components/Reasons';
import VehicleList from '../components/VehicleList';
import ContactOwner from '../components/ContactOwner';
import LocationMap from '../components/LocationMap';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reasons />
        <VehicleList />
        <ContactOwner />
        <LocationMap />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
