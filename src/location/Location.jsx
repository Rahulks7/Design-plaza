import Footer from "../components/Footer";
import Project from "../components/Project";
import Steps from "../components/Steps";
import LocationHero from "./Hero";
import Places from "./Places";
import InteriorProcess from "./Steps";

export default function Location() {
  return (
    <div>
      <LocationHero />
      <InteriorProcess />
      <Places />

      <Steps />
      <Project />
      <Footer />
    </div>
  );
}
