import Restro from "../assets/office/Restaurant.webp";
import { motion } from "framer-motion";
import off1 from "../assets/pics/off1.webp";
import off2 from "../assets/pics/off2.webp";
import restro1 from "../assets/pics/restro1.webp";

const Planndev = [
  { Image: Restro },


  { Image: off1 },
  { Image: restro1 },
  { Image: off2 },
];

const stats = [
  { value: "55+", label: "Projects Delivered" },
  { value: "67+", label: "Happy Clients" },
  { value: "49+", label: "Design Concepts" },
];
export default function Planning() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <div className="relative flex flex-col p-6 md:p-20 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
          <motion.div
            className="w-full md:w-[60%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-5xl mb-8 leading-tight">
              Premium Office & Restaurant Interiors
            </h1>

            <p className="text-lg md:text-xl mb-10 leading-8">
              We craft sophisticated spaces that balance elegance with
              functionality. Whether it’s a restaurant or an office, our designs
              are tailored to elevate the experience, enhance productivity, and
              reflect your brand’s identity.
            </p>
          </motion.div>

          <motion.div
            className="flex mt-8 md:mt-0 md:ml-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className={`${
                  i === 0 ? "pr-6 border-r" : i === 1 ? "px-6 border-r" : "pl-6"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="text-4xl md:text-5xl mb-3 font-light">
                  {item.value}
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-600">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {Planndev.map((plan, index) => (
            <motion.div
              key={index}
              className="aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={plan.Image}
                alt={`design ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
