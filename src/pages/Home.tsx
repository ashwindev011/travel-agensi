import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TravelCategories from '../components/TravelCategories';
import AboutSection from '../components/AboutSection';
import FeaturedTours from '../components/FeaturedTours';
import FacilitiesSection from '../components/FacilitiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TravelCategories />
      <AboutSection />
      <FeaturedTours />
      <FacilitiesSection />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
    </Layout>
  );
}
