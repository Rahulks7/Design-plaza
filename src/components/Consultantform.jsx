import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const services = ["Residential Design", "Commercial Design", "Renovation"];

export default function ConsultationForm() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SELECT SERVICE
  const selectService = (service) => {
    setForm({
      ...form,
      service,
    });

    setDropdownOpen(false);
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    // NAME VALIDATION
    if (form.name.trim().length < 2) {
      alert("Enter valid name");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Enter valid email");
      return;
    }

    // PHONE VALIDATION
    if (form.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    // SERVICE VALIDATION
    if (!form.service) {
      alert("Please select a service");
      return;
    }

    setLoading(true);

    try {
      // SEND EMAIL
      const response = await emailjs.send(
        "service_oudetjx", // SERVICE ID
        "template_47u0lae", // TEMPLATE ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: form.service,

          message: `Service: ${form.service} 
          Name: ${form.name}
          Email: ${form.email}
          Phone: ${form.phone}
          `,
        },
        "VyNXskRLQxrE2AMMp", // PUBLIC KEY
      );

      console.log("EMAIL SUCCESS ✅", response);

      alert("Consultation request sent successfully ✅");

      // RESET FORM
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
      });

      // CLOSE MODAL
      setOpen(false);
    } catch (error) {
      console.log("FULL EMAIL ERROR ❌", error);

      alert(
        error?.text ||
          error?.message ||
          JSON.stringify(error) ||
          "Failed to send request ❌",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-3 border border-white/30 text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
      >
        Book a Consultation
      </motion.button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* FORM BOX */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-lg bg-[#0c0c0c] border border-white/10 p-8 md:p-10 text-white relative"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white text-xl"
              >
                ✕
              </button>

              {/* HEADING */}
              <h2 className="text-2xl md:text-3xl mb-6 font-light tracking-wide">
                Book a Consultation
              </h2>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40 focus:border-white"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40 focus:border-white"
                />

                {/* PHONE */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => {
                    // ONLY NUMBERS
                    const value = e.target.value.replace(/\D/g, "");

                    // LIMIT TO 10 DIGITS
                    if (value.length <= 10) {
                      setForm({
                        ...form,
                        phone: value,
                      });
                    }
                  }}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40 focus:border-white"
                />

                {/* DROPDOWN */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full text-left border-b border-white/20 py-2 text-white/70"
                  >
                    {form.service || "Select Service"}
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute w-full bg-[#111] border border-white/10 mt-2 z-50 overflow-hidden"
                      >
                        {services.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => selectService(item)}
                            className="px-4 py-3 text-white/80 hover:bg-white hover:text-black cursor-pointer transition"
                          >
                            {item}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 py-3 bg-white text-black text-sm tracking-wider uppercase hover:bg-white/90 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Request"}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
