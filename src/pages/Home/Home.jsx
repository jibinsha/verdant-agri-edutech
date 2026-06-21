import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeatureSection from "../../components/FeatureSection";
import PopularCourses from "../../components/PopularCourses";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PopularCourses />
      <Footer />
    </div>
  );
}