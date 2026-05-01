import Footer from "../components/Footer";
import Project from "../components/Project";
import Budget from "./Budget";
import Furniture from "./Furniture";
import Hero from "./HomeHero";
import Parts from "./Parts";
import Style from "./Style";

export default function HomeInterior() {
  return (
    <div>
      <Hero />
      <Parts />
      <Style/>
      <Budget/>
      <Furniture/>
      <Project/>
      <Footer/>
    </div>
  );
}
