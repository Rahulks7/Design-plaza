import { motion } from "framer-motion";
import Bata from "../assets/Bata.webp";
import agg from "../assets/Logo/aggarwal.webp";
import burg from "../assets/Logo/burger.webp";
import nykaa from "../assets/Logo/Nykaa.webp";
import hush from "../assets/Logo/HushPuppies.webp";
import star from "../assets/Logo/Starbucks.webp";
import only from "../assets/Logo/Only.webp";
import peter from "../assets/Logo/PeterEngland.webp";
import trends from "../assets/Logo/Trends.webp";
import vero from "../assets/Logo/veromoda.webp";


const Partners = [
  { Image: Bata },
  { Image: agg },
  { Image: burg },
  { Image: nykaa },
  { Image: hush },
  { Image: star },
  { Image: only },
  { Image: peter },
  { Image: trends },
  { Image: vero },
];

export default function Partner() {
  return (
    <section className="w-full overflow-hidden py-14 md:py-16 lg:py-20 text-black ">

      
      <div className="text-center mb-8 md:mb-10 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
          Our Trusted Partners
        </h1>

        <p className="text-gray-600 text-xs md:text-sm max-w-md mx-auto">
          Collaborating with premium brands to deliver exceptional interiors.
        </p>
      </div>

    
      <div className="relative w-full overflow-hidden group">

        <motion.div
          className="flex gap-6 md:gap-10 lg:gap-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25, 
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Partners, ...Partners].map((part, index) => (
            <div
              key={index}
              className="
                min-w-[120px] md:min-w-[150px] lg:min-w-[180px]
                h-[70px] md:h-[90px] lg:h-[100px]
                flex items-center justify-center
                bg-white rounded-lg md:rounded-xl
                transition-transform duration-300
                group-hover:pause
              "
            >
              <img
                src={part.Image}
                alt="Partner"
                className="
                  max-h-[40px] md:max-h-[55px] lg:max-h-[70px]
                  object-contain
                  opacity-80
                  hover:opacity-100 hover:scale-105
                  transition duration-300
                "
              />
            </div>
          ))}
        </motion.div>

        {/* FADE EDGES  */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F2F5F3] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F2F5F3] to-transparent" />
      </div>
    </section>
  );
}