import './homeBase/home.css';
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Hero from "./hero/hero";
import CodeToCanvas from "./simulations/CodeToCanvas";
import ArchitectureFlow from "./simulations/ArchitectureFlow";
import Expertise from "./expertise/expertise";
import Trust from "./trust/trust";
import Contact from "./contact/contact";

function Home() {
  return (
    <>
      <div className="bg-02">
        <Navigation />
        <Hero />
        {/* <CodeToCanvas /> */}
        <ArchitectureFlow />
        {/* <Expertise /> */}
        {/* <Trust /> */}
        {/* <Contact /> */}
      </div>
      <div className="bg-02"><Footer /></div>
    </>
  );
}

export default Home;
