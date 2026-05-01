import { motion } from "framer-motion";
import img1 from "../assets/office/Restaurant.webp";
import img2 from "../assets/pics/off1.webp";
import { useNavigate } from "react-router-dom";

export default function Parts() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/design");
  };
  return (
    <section className="w-full  py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT - IMAGES */}
          <motion.div
            className="relative w-full h-[450px] md:h-[600px] lg:h-[680px]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* BACK SHAPE */}
            <div className="absolute -top-10 -left-10 w-[70%] h-[70%] bg-neutral-200 rounded-2xl z-0" />

            {/* MAIN IMAGE */}
            <motion.img
              src={img1}
              alt="Restaurant Interior"
              className="relative z-10 w-[78%] h-full object-cover rounded-2xl shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* SECOND IMAGE */}
            <motion.img
              src={img2}
              alt="Office Interior"
              className="absolute bottom-0 right-0 w-[58%] h-[68%] object-cover rounded-2xl shadow-2xl border-[6px] border-white z-20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />

            {/* SMALL DETAIL BOX */}
            <div className="absolute top-6 right-6 bg-white px-5 py-3 shadow-md rounded-lg z-30 hidden md:block">
              <p className="text-xs tracking-widest text-gray-500">
                120+ COMMERCIAL SPACES
              </p>
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* LABEL */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-black" />
              <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
                Commercial Interiors
              </p>
            </div>

            {/* HEADING */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8">
              Crafted spaces for <br />
              modern work & dining
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-base md:text-lg leading-8 mb-10 max-w-xl">
              We design offices that boost productivity and restaurants that
              create memorable experiences. Our approach blends thoughtful
              layouts, premium materials, and a deep understanding of how people
              interact with space.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-8">
              <button
                onClick={handleExploreClick}
                className="bg-black text-white px-8 py-3 text-xs tracking-[0.3em] hover:bg-neutral-800 transition-all"
              >
                VIEW PROJECTS
              </button>

              <div className="text-sm text-gray-500">
                <span className="font-semibold text-black">500+</span> Clients
                Trust Us
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
