import { motion } from "framer-motion";
import { useState } from "react";

import img1 from "../assets/Home/img1.webp";
import img2 from "../assets/Home/img2.webp";
import img3 from "../assets/Home/img3.webp";
import img4 from "../assets/Home/img4.webp";

import Footer from "./Footer";

// // GRID IMAGES
// import class1 from "../assets/pics/living1.webp";
// import class2 from "../assets/pics/living2.webp";
// import con1 from "../assets/pics/living3.webp";
// import con2 from "../assets/pics/living4.webp";
// import mini1 from "../assets/pics/living5.webp";
// import mini2 from "../assets/pics/living6.webp";
// import trad1 from "../assets/pics/off3.webp";
// import trad2 from "../assets/pics/off2.webp";  


// imgs 
import con1 from "../assets/design/cont/bedroom1.webp";
import con4 from "../assets/design/cont/bedroom2.webp";
import mini1 from "../assets/design/mini/bedroom1.webp";
import mini4 from "../assets/design/mini/bedroom2.webp";
import class1 from "../assets/design/modern/bedroom1.webp";
import class4 from "../assets/design/modern/bedroom2.webp";
import trad1 from "../assets/design/trad/bedroom.webp";
import trad4 from "../assets/design/trad/bedroom2.webp";

import con2 from "../assets/design/cont/kitchen.webp";
import con5 from "../assets/design/cont/kitchen2.webp";
import mini2 from "../assets/design/mini/kitchen1.webp";
import mini5 from "../assets/design/mini/kitchen2.webp";
import class2 from "../assets/design/modern/kitchen.webp";
import class5 from "../assets/design/modern/kitchen2.webp";
import trad2 from "../assets/design/trad/kitchen.webp";
import trad5 from "../assets/design/trad/kitchen2.webp";

import con3 from "../assets/design/cont/living.webp";
import con6 from "../assets/design/cont/living2.webp";
import mini3 from "../assets/design/mini/living1.webp";
import mini6 from "../assets/design/mini/living2.webp";
import class3 from "../assets/design/modern/living1.webp";
import class6 from "../assets/design/modern/living2.webp";
import trad3 from "../assets/design/trad/living1.webp";
import trad6 from "../assets/design/trad/living2.webp";





// STYLES
const styles = [
  {
    name: "Modern",
    desc: "Clean lines, smart layouts, and highly functional spaces designed for everyday living.",
    img: img1,
  },
  {
    name: "Contemporary",
    desc: "Trendy and ever-evolving designs that adapt to current lifestyles.",
    img: img2,
  },
  {
    name: "Minimalist",
    desc: "Less is more. Clean, open, breathable spaces.",
    img: img3,
  },
  {
    name: "Traditional",
    desc: "Classic elegance with rich details and warmth.",
    img: img4,
  },
];


const imgs = {
  Modern: [class1, class2, class3, class4, class5, class6],
  Contemporary: [con1, con2, con3, con4, con5, con6],
  Minimalist: [mini1, mini2, mini3, mini4, mini5, mini6],
  Traditional: [trad1, trad2, trad3, trad4, trad5, trad6],
};

// TITLES
const titles = [
  "Bedroom Design",
  "Kitchen Design",
  "Living Room Design",
  "Bedroom Design",
  "Kitchen Design",
  "Living Room Design",
];

export default function StylesPremiumPage() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <div className="relative h-[75vh] sm:h-[85vh] overflow-hidden">
        <motion.img
          key={active}
          src={styles[active].img}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />

        <div className="absolute bottom-10 left-6 md:left-24 max-w-4xl">
          <h1 className="text-3xl md:text-7xl font-light">
            {styles[active].name} Interiors
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl">
            {styles[active].desc}
          </p>
        </div>
      </div>

      {/* STYLE SWITCH */}
      <div className="px-6 md:px-24 py-8 flex gap-6 overflow-x-auto no-scrollbar">
        {styles.map((style, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-sm pb-2 border-b ${
              active === i
                ? "text-white border-white"
                : "text-gray-500 border-transparent"
            }`}
          >
            {style.name}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="px-6 md:px-24 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {imgs[styles[active].name].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl">

                {/*  IMAGE */}
                <img
                  src={img}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-0 p-6">
                  <p className="text-xs text-gray-400 mb-2">
                    {styles[active].name}
                  </p>

                  <h3 className="text-xl">{titles[i]}</h3>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      <Footer />
    </section>
  );
}