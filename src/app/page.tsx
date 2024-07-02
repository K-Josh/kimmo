import Navbar from "@/component/_landingPage/Navbar";
import Hero from "@/component/_landingPage/Hero";
import FindHome from "@/component/_landingPage/FindHome";
import NewListing from "@/component/_landingPage/NewListing";
import Explore from "@/component/_landingPage/Explore";
import Modals from "@/component/modals/Modals";
import Footer from "@/component/_landingPage/Footer";
import Testimonials from "@/component/_landingPage/Testimonials";
import FeatureList from "@/component/_landingPage/FeatureList";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <FindHome />
     <FeatureList />
     <NewListing />
     <Explore />
     <Footer />
    </>
  );
}
