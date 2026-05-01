import { motion } from "framer-motion";
import Restro from "../assets/office/Restaurant.webp";
import Office from "../assets/pics/off1.webp";
import ConsultationForm from "../components/Consultantform";
export default function OfficeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-500" />
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-16 pt-24 pb-10">

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-white/60" />
              <p className="uppercase tracking-[0.4em] text-xs text-white/70">
                Commercial Interiors
              </p>
            </div>

            <h1 className="text-white font-light leading-[1.05] mb-8 text-[clamp(2.6rem,5.5vw,4.8rem)]">
              Designing spaces
              <br />
              that elevate
              <br />
              work & dining
            </h1>

            <p className="max-w-lg text-white/80 text-base md:text-lg mb-12 leading-relaxed">
              From modern offices to immersive restaurant interiors — we craft
              environments that balance functionality, aesthetics, and human experience.
            </p>

            <ConsultationForm/>
          </motion.div>

          {/* RIGHT GRID */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-5 
                       h-[55vh] md:h-[65vh] lg:h-[70vh] max-h-[600px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {/* BIG IMAGE */}
            <div className="col-span-2 overflow-hidden rounded-3xl group">
              <img
                src={Restro}
                alt="Restaurant"
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </div>

            {/* SMALL IMAGE */}
            <div className="overflow-hidden rounded-2xl group">
              <img
                src={Office}
                alt="Office"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
            </div>

            {/* ENHANCED CARD */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg p-6 flex flex-col justify-between">

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-white/70 mb-3">
                  Our Expertise
                </p>

                <h3 className="text-white text-base font-medium leading-snug mb-3">
                  Offices, Restaurants & Commercial Spaces
                </h3>

                <p className="text-white/70 text-xs leading-relaxed">
                  Thoughtfully designed environments that enhance workflow,
                  customer experience, and brand identity.
                </p>
              </div>

              {/* SMALL STAT / DETAIL */}
              <div className="mt-4 text-white/80 text-xs">
                <span className="font-semibold text-white">120+</span> Spaces Designed
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}