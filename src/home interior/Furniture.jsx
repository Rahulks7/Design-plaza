import { motion } from "framer-motion";
import img1 from "../assets/pics/living5.webp";
import img2 from "../assets/pics/living6.webp";
import { useNavigate } from "react-router-dom";

export default function Furniture() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/design");
  };
  return (
    <section className="w-full min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE */}
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 max-w-3xl">
            Spaces that feel like home
          </h1>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mb-12">
            From living rooms to bedrooms, we design interiors that are warm,
            functional, and beautifully aligned with your lifestyle — creating
            spaces you truly love to live in.
          </p>

          {/* IMAGE + TEXT BLOCK */}
          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <motion.img
              src={img1}
              alt="Living Room"
              className="w-full md:w-[480px] h-[260px] md:h-[320px] object-cover rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-3">
                Thoughtfully designed living spaces
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                We create interiors that balance comfort, aesthetics, and
                practicality — making every corner of your home feel inviting
                and personal.
              </p>

              <button
                onClick={handleExploreClick}
                className="bg-black text-white px-7 py-3 text-sm tracking-wide hover:bg-neutral-800 transition"
              >
                Explore Designs
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 border-t pt-10">
            <div>
              <div className="text-4xl font-semibold">500+</div>
              <div className="text-gray-500 text-sm">Happy Homes</div>
            </div>

            <div>
              <div className="text-4xl font-semibold">150+</div>
              <div className="text-gray-500 text-sm">Design Concepts</div>
            </div>

            <div>
              <div className="text-4xl font-semibold">10+</div>
              <div className="text-gray-500 text-sm">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="w-full lg:w-1/3 flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="bg-white shadow-md rounded-xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={img2}
              alt="Bedroom Interior"
              className="w-full h-[300px] object-cover"
            />
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Designed for comfort & everyday living
            </h3>

            <p className="text-gray-600 leading-7">
              Whether it’s a cozy bedroom or a modern living room, we design
              spaces that feel calm, functional, and truly yours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
