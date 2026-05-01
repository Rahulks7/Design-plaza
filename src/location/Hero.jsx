import { motion } from "framer-motion";

import img1 from "../assets/pics/restro2.webp";
import img2 from "../assets/pics/room1.webp";
import img3 from "../assets/pics/living2.webp";

const images = [
  { src: img1, alt: "Restaurant Interior", className: "col-span-2 row-span-1" },
  { src: img2, alt: "Bedroom Design", className: "col-span-1 row-span-1" },
  { src: img3, alt: "Living Room", className: "col-span-1 row-span-1" },
];

export default function LocationHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-600 to-neutral-300" />
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-24 pt-32 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-white uppercase font-light tracking-wide leading-[1.05] text-[clamp(2.4rem,5vw,4.5rem)] mb-10">
            Designed locally,
            <br />
            present globally
          </h1>

          <p className="max-w-lg text-white/80 text-lg mb-12 leading-relaxed">
            Our studios are strategically located across major cities, bringing
            world-class interior expertise closer to you — wherever you are.
          </p>

          {/* <button className="px-10 py-4 bg-white text-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all duration-300">
            Find a studio
          </button> */}
        </motion.div>

        {/* RIGHT PREMIUM GRID */}
        <motion.div
          className="grid grid-cols-2 auto-rows-[180px] gap-6 h-[70vh]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* IMAGES */}
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-3xl group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
            </motion.div>
          ))}

          {/* TEXT CARD (bigger + premium) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.8 }}
            className="col-span-2 flex flex-col justify-center items-center rounded-3xl bg-white/10 backdrop-blur-xl text-white text-center p-8 border border-white/20"
          >
            <p className="uppercase tracking-[0.4em] text-xs mb-4 text-white/70">
              Our locations
            </p>

            <p className="text-base leading-relaxed text-white/90">
              Delhi · Mumbai · Bengaluru <br />
              Chennai · Ahmedabad · Kolkata
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}