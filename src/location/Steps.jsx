import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import step1 from "../assets/office/Restaurant.webp";
import step2 from "../assets/office/Hotel.webp";
import step3 from "../assets/office/Kitchen.webp";
import step4 from "../assets/office/Hotel.webp";
import step5 from "../assets/office/Restaurant.webp";

const steps = [
  {
    step: "01",
    title: "Client Brief & Consultation",
    desc: "We understand your lifestyle, preferences, space requirements and budget.",
    image: step1,
  },
  {
    step: "02",
    title: "Space Planning & Layout",
    desc: "Efficient zoning and furniture planning to enhance movement and comfort.",
    image: step2,
  },
  {
    step: "03",
    title: "Design Concept & Materials",
    desc: "Theme selection, materials, finishes, lighting and color palette.",
    image: step3,
  },
  {
    step: "04",
    title: "3D Visualization & Approval",
    desc: "Photorealistic 3D designs to visualize your dream interior.",
    image: step4,
  },
  {
    step: "05",
    title: "Execution & Handover",
    desc: "Precise execution, quality control and on-time delivery.",
    image: step5,
  },
];

export default function InteriorProcessOneScreen() {
  const [active, setActive] = useState(0);

  // 🔥 PRELOAD IMAGES (no lag)
  useEffect(() => {
    steps.forEach((step) => {
      const img = new Image();
      img.src = step.image;
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen text-black overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-[55vh] lg:h-[75vh] rounded-3xl overflow-hidden shadow-2xl">

          {/* 🔥 STACKED IMAGES (instant switching) */}
          {steps.map((step, i) => (
            <motion.img
              key={i}
              src={step.image}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0,
                scale: active === i ? 1 : 1.05,
                filter: active === i ? "blur(0px)" : "blur(6px)",
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}

          {/* overlay */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="uppercase text-xs tracking-[0.4em] text-gray-500 mb-10">
            Our Process
          </p>

          <div className="space-y-10">
            {steps.map((item, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="relative pl-10 cursor-pointer group"
                >
                  {/* LINE */}
                  <motion.span
                    className="absolute left-0 top-0 h-full w-[2px]"
                    animate={{
                      backgroundColor: isActive
                        ? "#000"
                        : "rgba(0,0,0,0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* TITLE */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs tracking-widest text-gray-400">
                      {item.step}
                    </span>

                    <motion.h3
                      animate={{
                        opacity: isActive ? 1 : 0.5,
                        x: isActive ? 0 : -8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-light"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  {/* DESC */}
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600 max-w-md leading-relaxed overflow-hidden"
                  >
                    {item.desc}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}