import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
// import Hero from "./components/hero";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import DonateForm from "./components/DonateForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // <MotionConfig reducedMotion="user">
      <div className="min-h-screen font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <Header />
        <Hero />
        <Services />
        <Testimonials />
        <DonateForm />
        <Contact />
        <Footer />
      </div>
    // </MotionConfig>
  );
}