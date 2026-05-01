import backgroundvideo from "../assets/backgroundvideo.webm";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center lg:justify-start px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundvideo}
      />

      {/* DARK OVERLAY (important for readability) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-2xl text-center lg:text-left">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.8,
          }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white"
        >
          Interiors Designed
          <br className="hidden sm:block" />
          Around Your
          <br />
          Lifestyle Needs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 1,
          }}
          className="text-sm md:text-base lg:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-6 md:leading-7"
        >
          Every interior we create is guided by real-life needs and personal
          style. Our approach blends warmth, comfort, and contemporary design to
          deliver spaces that feel personal, livable, and timeless.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 1.2,
          }}
          className="px-5 md:px-6 py-2 md:py-3 bg-white text-black rounded-lg text-sm md:text-base font-medium hover:bg-black hover:text-white transition"
        >
          Book a Consultation
        </motion.button>

      </div>
    </section>
  );
}

export default Hero;