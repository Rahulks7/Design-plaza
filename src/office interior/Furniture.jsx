import { motion } from "framer-motion";
import img1 from "../assets/pics/off6.webp";
import img2 from "../assets/pics/off5.webp";
import { useNavigate } from "react-router-dom";

export default function Furniture() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/design");
  };
  return (
    <section className="w-full min-h-screen  overflow-hidden">
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
            Designing Workspaces & Dining Experiences that Inspire
          </h1>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mb-12">
            From modern offices to high-end restaurants, we create functional,
            aesthetic interiors that elevate experiences and reflect your brand
            identity.
          </p>

          {/* IMAGE + TEXT BLOCK */}
          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <motion.img
              src={img1}
              alt="Office Interior"
              className="w-full md:w-[480px] h-[260px] md:h-[320px] object-cover rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-3">
                Smart Office & Restaurant Interiors
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                We design efficient office layouts and immersive restaurant
                spaces that balance comfort, functionality, and visual appeal.
              </p>

              <button
                onClick={handleExploreClick}
                className="bg-black text-white px-7 py-3 text-sm tracking-wide hover:bg-neutral-800 transition"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 border-t pt-10">
            <div>
              <div className="text-4xl font-semibold">500+</div>
              <div className="text-gray-500 text-sm">Projects Delivered</div>
            </div>

            <div>
              <div className="text-4xl font-semibold">120+</div>
              <div className="text-gray-500 text-sm">Commercial Spaces</div>
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
              alt="Restaurant Interior"
              className="w-full h-[300px] object-cover"
            />
          </motion.div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Crafted for Ambience & Productivity
            </h3>

            <p className="text-gray-600 leading-7">
              Whether it's a collaborative office or a cozy dining space, we
              design environments that enhance both experience and efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
