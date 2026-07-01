import Footer from "../footer/footer";
import Testimonials from "../home/testimonials";
import Navigation from "../navigation/navigation";
import AboutUsHero from "./aboutUsHero/aboutUsHero";
import CoFounder from "./coFounder/coFounder";

function AboutUs() {
  return (
    <>
      <div className="bg-02 spacing-50">
        <Navigation />
        <AboutUsHero />
        <CoFounder />
      </div>
      <div className="bg-02">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
