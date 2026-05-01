import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import fur1 from "../assets/Home/furniture1.webp";
import fur2 from "../assets/Home/img5.webp";
export default function Furniture() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/shopping");
  };
  return (
    <section className="relative flex flex-col lg:flex-row w-full min-h-screen overflow-hidden px-4 md:px-8 lg:px-0 py-12 lg:py-0">
      <motion.div
        className="w-full lg:w-2/3 flex flex-col justify-center lg:px-12"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 md:mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Premium Furniture for Modern Homes
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-center mb-10 md:mb-14 lg:mb-16">
          <motion.img
            src={fur2}
            alt="Furniture"
            className="w-full md:w-[320px] lg:w-[520px] h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="flex flex-col gap-4 md:gap-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 text-gray-600">
              Discover premium furniture designed for comfort, style, and
              durability. Each piece is crafted to elevate your living space and
              make it feel truly yours.
            </p>

            <button
              onClick={handleExploreClick}
              className="w-fit border border-black px-5 py-2 md:px-6 md:py-3 text-xs md:text-sm uppercase tracking-wide hover:bg-black hover:text-white transition"
            >
              Shop Now
            </button>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="sm:pr-6 lg:pr-10 sm:border-r">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
              500+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Happy Customers
            </div>
          </div>

          <div className="sm:px-6 lg:px-10 sm:border-r">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
              150+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Design Collections
            </div>
          </div>

          <div className="sm:pl-6 lg:pl-10">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
              10+
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              Years Experience
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/3 flex flex-col justify-center mt-10 lg:mt-0 lg:pr-12"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="bg-gray-100 h-[250px] md:h-[320px] lg:h-[520px] w-full mb-6 md:mb-8 p-4 md:p-6 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={fur1}
            alt="Furniture"
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="font-semibold text-base md:text-lg mb-2">
            Tailored Furniture for Every Room
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7">
            From living room to bedroom, we provide high-quality furniture that
            matches your style and budget.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
