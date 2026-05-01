import { motion } from "framer-motion";
import Restro from "../assets/office/Restaurant.webp";

const Locations = [
  {
    city: "Delhi",
    subtitle: "Modern Minimalist",
    priceRange: "Starting from ₹15L",
    image: Restro,
  },
  {
    city: "Mumbai",
    subtitle: "Art Deco Fusion",
    priceRange: "Starting from ₹20L",
    image: Restro,
  },
  {
    city: "Bangalore",
    subtitle: "Scandinavian Tech",
    priceRange: "Starting from ₹12L",
    image: Restro,
  },
];

export default function Places() {
  return (
    <section className="w-full py-20 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-14 border-l-2 border-amber-600 pl-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Tailored spaces for{" "}
            <span className="font-medium">every lifestyle.</span>
          </h2>
          <p className="text-gray-500 mt-3 text-xs md:text-sm uppercase tracking-[0.3em]">
            Selected Works
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Locations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.city}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                {/* PRICE */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                  <p className="text-[11px] font-medium text-gray-800">
                    {item.priceRange}
                  </p>
                </div>

                {/* CENTER TEXT ON HOVER */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="uppercase tracking-[0.3em] text-xs mb-2">
                    Explore
                  </p>
                  <h3 className="text-2xl font-light">{item.city}</h3>
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium tracking-tight">
                    {item.city}
                  </h3>

                  {/* Arrow */}
                  <svg
                    className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <p className="text-gray-500 text-sm">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}