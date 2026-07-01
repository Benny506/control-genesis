import Footer from "../footer/footer";
import DigitalSolution from "../home/digitalSolution/digitalSolution";
import Faq from "../home/faq/faq";
import Navigation from "../navigation/navigation";
import ServicesAdvantage from "./servicesAdvantage/servicesAdvantage";
import ServicesHero from "./servicesHero/servicesHero";

function Services() {
  return (
    <>
      <div className="bg-02">
      <div className="spacing-50">
        <Navigation />
      </div>
      <div className="spacing-50">
        <ServicesHero />
      </div>
      <div className="spacing-50">
        <DigitalSolution />
      </div>
      <div className="servicesAdvantageContainer">
        <ServicesAdvantage />
      </div>
      <div className="spacing-50">
        <Faq />
      </div>
      </div>
      <div className="bg-02">
        <Footer />
      </div>
    </>
  );
}

export default Services;
