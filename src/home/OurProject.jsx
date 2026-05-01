import { motion } from "framer-motion";
import pro1 from "../assets/Home/img6.webp";
import pro2 from "../assets/pics/bedroom1.webp";
import pro3 from "../assets/pics/off4.webp";
import pro4 from "../assets/office/Restaurant.webp";

export default function OurProject() {
  const projects = [
    {
      img: pro1,
      title: "Modern Living Room",
      type: "Home Interior",
    },
    {
      img: pro2,
      title: "Luxury Bedroom",
      type: "Home Interior",
    },
    {
      img: pro3,
      title: "Minimal Workspace",
      type: "Office Interior",
    },
    {
      img: pro4,
      title: "Restaurant Design",
      type: "Commercial Project",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
      {/* HEADER */}
      <div className="mb-10 md:mb-14 lg:mb-16">
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">
          Explore
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Our Projects
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="
              relative overflow-hidden 
              w-full 
              h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px]
              rounded-xl
              group
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="uppercase tracking-widest text-[10px] md:text-xs text-white/80">
                {project.type}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}