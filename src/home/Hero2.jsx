import backgroundvideo from "../assets/backgroundvideo.webm";
import { motion } from "framer-motion";
import ConsultationForm from "../components/Consultantform";
export default function Hore2() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black px-4 md:px-12 lg:px-24 flex flex-col justify-between">

      {/* VIDEO */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        src={backgroundvideo}
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 pt-20 md:pt-24 lg:pt-28 w-full md:w-[70%] lg:w-[38%] text-center lg:text-left"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      >
        <p className="text-sm md:text-base lg:text-[17px] text-white/80 leading-relaxed mb-6 md:mb-8 font-light tracking-wide">
          Every interior we create is guided by real-life needs and personal
          style. Our approach blends warmth, comfort, and contemporary design to
          deliver spaces that feel personal, livable, and timeless.
        </p>

        <ConsultationForm/>
      </motion.div>

      {/* BIG TEXT */}
      <motion.h6
        className="
          absolute bottom-2 md:bottom-0 left-1/2 -translate-x-1/2
          w-full text-center
          text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[8.5vw]
          font-normal text-white/90 uppercase leading-[0.9]
          break-words
          z-10 select-none
          tracking-[0.06em] md:tracking-[0.12em]
          px-2
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
      >
        Design Dreams
      </motion.h6>

    </section>
  );
}
