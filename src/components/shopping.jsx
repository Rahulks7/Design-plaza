import { motion } from "framer-motion";
import Footer from "./Footer";

import img1 from "../assets/Home/img1.webp";
import img2 from "../assets/Home/img2.webp";
import img3 from "../assets/Home/img3.webp";
import img4 from "../assets/Home/img4.webp";
import img5 from "../assets/Home/img5.webp";

const items = [
  { name: "Custom Beds", img: img1 },
  { name: "Designer Sofas", img: img2 },
  { name: "Dining Spaces", img: img3 },
  { name: "Premium Chairs", img: img4 },
  { name: "Wardrobe Systems", img: img5 },
];

export default function Shopping() {
  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <div className="relative h-[100vh] flex items-center overflow-hidden">
        <motion.img
          src={img1}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* deeper gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

        <div className="relative z-10 px-6 md:px-20 max-w-5xl">
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-gray-500 mb-6 uppercase">
            Custom Furniture Studio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-light leading-[1.1] tracking-tight">
            We Don’t Sell Furniture
            <br />
            <span className="italic text-gray-300">We Build Experiences</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-md text-sm leading-relaxed">
            Designed for your space. Built in our factory. Installed at your
            home.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-white text-black px-8 md:px-10 py-3 text-xs uppercase tracking-[0.25em] hover:opacity-80 transition">
              Book Consultation
            </button>

            <button className="border border-white/30 px-8 md:px-10 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition">
              Explore Designs
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 py-20 border-y border-white/10">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Design", desc: "Understanding your space & lifestyle" },
            { title: "Build", desc: "Precision crafted in our factory" },
            { title: "Install", desc: "Seamless delivery & setup" },
          ].map((step, i) => (
            <div key={i} className="relative">
              <p className="text-xs text-gray-600 mb-4 tracking-widest">
                0{i + 1}
              </p>

              <h3 className="text-lg mb-3">{step.title}</h3>

              <p className="text-gray-400 text-sm mb-6">{step.desc}</p>

              <div className="w-full h-[1px] bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-20 py-20">
        <h2 className="text-xl md:text-3xl mb-12">
          Everything You Need — Custom Made
        </h2>

        <div className="flex gap-5 overflow-x-auto md:grid md:grid-cols-5 no-scrollbar">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="min-w-[75%] md:min-w-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  className="w-full h-[210px] object-cover transition duration-700 group-hover:scale-105"
                />

                {/* subtle fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
              </div>

              <div className="mt-4">
                <h3 className="text-sm tracking-wide">{item.name}</h3>
                <div className="w-6 h-[1px] bg-white/40 mt-2 group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-20 py-20 border-t border-white/10">
        <h2 className="text-xl md:text-3xl mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-12 text-gray-300">
          <div>
            <h4 className="mb-3 text-white">Factory Direct</h4>
            <p className="text-sm text-gray-400">
              No middlemen. Better pricing and full control on quality.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-white">Tailored Design</h4>
            <p className="text-sm text-gray-400">
              Every piece is built specifically for your space.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-white">Premium Finish</h4>
            <p className="text-sm text-gray-400">
              High-quality materials with long-lasting durability.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[320px] md:h-[480px] overflow-hidden rounded-xl"
        >
          <img src={img1} className="w-full h-full object-cover" />
        </motion.div>

        <div>
          <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">
            Featured Project
          </p>

          <h3 className="text-2xl md:text-4xl mb-6 leading-tight">
            Complete Bedroom Transformation
          </h3>

          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            A fully custom-designed bedroom setup crafted for both aesthetics
            and functionality.
          </p>

          <button className="border border-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition">
            View Project
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
}
