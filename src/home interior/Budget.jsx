import { motion } from "framer-motion";
import img1 from "../assets/Home/vision2.webp";
import img2 from "../assets/Home/vision3.webp";
import img3 from "../assets/Home/furniture1.webp";

const Budgets = [
  {
    title: "1 BHK",
    price: "₹6L onwards",
    description:
      "Smart interiors designed to maximise space without compromising comfort.",
    image: img1,
  },
  {
    title: "2 BHK",
    price: "₹12L onwards",
    description:
      "Balanced layouts that blend functionality with modern aesthetics.",
    image: img2,
  },
  {
    title: "3 BHK",
    price: "₹20L onwards",
    description:
      "Spacious, premium interiors crafted for refined everyday living.",
    image: img3,
  },
];

export default function BudgetCardsPremium() {
  return (
    <section className="w-full  py-20 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 grid grid-cols-12 items-start">

        <div className="col-span-12 md:col-span-5">
          <p className="text-gray-500 tracking-[0.3em] uppercase text-xs mb-4">
            Residential Interiors
          </p>
        </div>

        <div className="col-span-12 md:col-span-7">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Designed for comfort <br />
            & modern living.
          </h2>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {Budgets.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* BHK BADGE */}
              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                <h3 className="text-white text-xs tracking-wide font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col justify-between h-[180px]">

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-6">

                <span className="text-lg font-medium">
                  {item.price}
                </span>

              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}