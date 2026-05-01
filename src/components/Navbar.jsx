import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Estimate from "./Estimate";
import { sendToWhatsApp } from "../utils/whatsapp";
import logo from "../assets/logo.png"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      contactOpen || estimateOpen || menuOpen ? "hidden" : "";
  }, [contactOpen, estimateOpen, menuOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Living", path: "/home-interior" },
    { name: "Working", path: "/office-interior" },
    { name: "Locations", path: "/location" },
    { name: "Contact", path: "/contact-us" },
    
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between w-full overflow-hidden">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 text-white min-w-0">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full  flex items-center justify-center text-xs shrink-0">
              <img src={logo} alt="" />
            </div>

            <span className="uppercase tracking-[0.2em] text-xs md:text-sm truncate">
              Design Plaza
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-10">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {({ isActive }) => (
                  <span className="relative text-xs uppercase tracking-widest group">
                    <span
                      className={`${
                        isActive ? "text-white" : "text-white/60"
                      } group-hover:text-white transition`}
                    >
                      {link.name}
                    </span>

                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* BUTTONS */}
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => setEstimateOpen(true)}
              className="px-5 py-1 border border-white/40 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
            >
              Estimate
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className="px-4 py-1 border border-white/40 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
            >
              Quote
            </button>
          </div>

          {/* MOBILE BTN */}
          <button
            className="lg:hidden text-white shrink-0"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            style={{ overflowX: "hidden" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 w-screen h-screen bg-black z-50 flex flex-col p-6 overflow-y-auto overflow-x-hidden"
          >
            <div className="flex justify-end mb-10">
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={26} className="text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-white text-lg">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="uppercase tracking-widest"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* MOBILE CTA */}
            <div className="mt-auto flex flex-col gap-4">
              <button
                onClick={() => {
                  setEstimateOpen(true);
                  setMenuOpen(false);
                }}
                className="border border-white py-3 uppercase text-xs text-white"
              >
                Get Estimate
              </button>

              <button
                onClick={() => {
                  setContactOpen(true);
                  setMenuOpen(false);
                }}
                className="border border-white py-3 uppercase text-xs text-white"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            onClick={() => setContactOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 overflow-x-hidden"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="bg-neutral-900 border border-white/10 p-6 md:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto overflow-x-hidden"
            >
              <div className="flex justify-between mb-6">
                <h2 className="text-white uppercase tracking-widest text-xs">
                  Get in touch
                </h2>
                <button onClick={() => setContactOpen(false)}>
                  <FiX className="text-white" />
                </button>
              </div>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.target;
                  const name = form.name.value.trim();
                  const email = form.email.value.trim();
                  const message = form.message.value.trim();

                  if (form.company.value) return;

                  if (name.length < 2) {
                    alert("Enter valid name");
                    return;
                  }

                  if (!/^\S+@\S+\.\S+$/.test(email)) {
                    alert("Enter valid email");
                    return;
                  }

                  if (message.length < 10) {
                    alert("Message too short");
                    return;
                  }

                  sendToWhatsApp({
                    name,
                    email,
                    phone: "Not provided",
                    message,
                    type: "Quick Enquiry",
                  });

                  form.reset();
                }}
              >
                <input type="text" name="company" className="hidden" />

                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none"
                />

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message"
                  required
                  className="w-full bg-transparent border-b border-white/30 text-white py-2 outline-none resize-none"
                />

                <button
                  type="submit"
                  className="mt-4 border border-white/50 px-6 py-2 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition"
                >
                  Send →
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ESTIMATE MODAL */}
      <Estimate open={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </>
  );
}