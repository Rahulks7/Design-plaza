import { useState } from "react";
import { motion } from "framer-motion";

import Bedroom from "../assets/office/Bedroom.webp";
import Hotel from "../assets/office/Hotel.webp";
import Living from "../assets/office/Living.webp";
import Kitchen from "../assets/office/Kitchen.webp";

const blogData = [
  {
    title: "23 Sep 2023",
    description:
      "The one and only way to organise the of the middle class is not that much of a choice.",
    image: Bedroom,
  },
  {
    title: "24 Sep 2023",
    description:
      "Interior design is not just about beauty but also about functionality .",
    image: Hotel,
  },
  {
    title: "25 Sep 2023",
    description:
      "A well-designed home reflects the personality of the people living in it.",
    image: Living,
  },
  {
    title: "26 Sep 2023",
    description:
      "Modern homes focus on clean lines, open spaces, and natural light.",
    image: Kitchen,
  },
];

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = blogData[activeIndex].image;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-10 overflow-hidden ">
      {/* HEADING */}
      <div className="mb-12">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-3">
          Our Blogs
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900">
          Latest Articles
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[30%] w-full flex justify-center"
        >
          <div className="relative h-[220px] sm:h-[260px] md:h-[300px] w-full max-w-[380px] overflow-hidden rounded-2xl shadow-sm">
            <motion.img
              key={activeImage}
              src={activeImage}
              alt="Blog preview"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* LIST */}
        <div className="flex-1 flex flex-col divide-y divide-neutral-200">
          {blogData.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)} // desktop
              onClick={() => setActiveIndex(index)} // mobile
              whileHover={{ x: 8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`py-5 cursor-pointer flex flex-col md:flex-row gap-2 md:gap-6 transition-all
                ${
                  activeIndex === index
                    ? "bg-white/60"
                    : "hover:bg-neutral-50 "
                }`}
            >
              {/* DATE */}
              <p className="text-sm text-neutral-500 md:min-w-[120px]">
                {item.title}
              </p>

              {/* TEXT */}
              <p className="text-neutral-800 text-base sm:text-lg md:text-[22px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}