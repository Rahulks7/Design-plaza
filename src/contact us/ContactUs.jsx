import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiUser,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import emailjs from "@emailjs/browser";

import ContactImg from "../assets/pics/restro1.webp";
import StudioImg from "../assets/room.webp";
import Footer from "../components/Footer";

export default function ContactPage() {
  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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

    // MESSAGE VALIDATION
    if (form.message.trim().length < 5) {
      alert("Please enter proper message");
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
          message: form.message,
          type: "Contact Form",
        },
        "VyNXskRLQxrE2AMMp" // PUBLIC KEY
      );

      console.log("EMAIL SUCCESS ✅", response);

      // WHATSAPP MESSAGE
      const whatsappMessage = `
✨ *New Contact Request*

👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}

📝 Message:
${form.message}
      `;

      // OPEN WHATSAPP
      const whatsappUrl = `https://wa.me/919911631110?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappUrl, "_blank");

      alert("Message sent successfully ✅");

      // RESET FORM
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log("FULL EMAIL ERROR ❌", error);

      alert(
        error?.text ||
          error?.message ||
          JSON.stringify(error) ||
          "Failed to send message ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black overflow-hidden">
        {/* LEFT */}
        <motion.div
          className="px-6 md:px-12 lg:px-24 flex flex-col justify-center z-10 py-20"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-white/50 uppercase tracking-[0.4em] text-xs mb-6">
            Contact
          </p>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Let’s design spaces
            <br />
            that feel like you
          </h1>

          <p className="text-white/60 max-w-md mb-10 leading-relaxed">
            Every project starts with a conversation. Tell us your vision, and
            we’ll craft it into something meaningful.
          </p>

          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
            {/* NAME */}
            <div className="flex items-center gap-3 border-b border-white/20 py-3">
              <FiUser className="text-white/40" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder:text-white/30"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 border-b border-white/20 py-3">
              <FiMail className="text-white/40" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder:text-white/30"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 border-b border-white/20 py-3">
              <FiPhone className="text-white/40" />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => {
                  // ONLY NUMBERS
                  const value = e.target.value.replace(/\D/g, "");

                  // LIMIT 10 DIGITS
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
                className="w-full bg-transparent outline-none text-white placeholder:text-white/30"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex gap-3 border-b border-white/20 py-3">
              <FiSend className="text-white/40 mt-1" />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder:text-white/30 resize-none"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-white/90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Request"}
              </motion.button>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/919911631110"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
              >
                <FaWhatsapp className="text-green-400 group-hover:text-black" />
                WhatsApp Us
              </a>
            </div>
          </form>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative h-[60vh] lg:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={ContactImg}
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
        </motion.div>
      </section>

      {/* STUDIO DETAILS */}
      <section className="bg-[#0a0a0a] px-6 md:px-12 lg:px-24 py-24 grid lg:grid-cols-2 gap-16">
        {/* IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={StudioImg}
            alt="Studio"
            className="w-full h-[420px] object-cover rounded-2xl"
          />

          <div className="absolute inset-0 border border-white/10 rounded-2xl" />
        </motion.div>

        {/* DETAILS */}
        <motion.div
          className="flex flex-col justify-center gap-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl font-light mb-4">
            Studio Details
          </h2>

          <GlassCard icon={<FiUser />} label="Owner" value="Naved Ali" />

          <GlassCard
            icon={<FiPhone />}
            label="Phone"
            value="+91 9911631110"
          />

          <GlassCard
            icon={<FiMail />}
            label="Email"
            value="navedali7141@icloud.com"
          />

          <GlassCard
            icon={<FiMapPin />}
            label="Address"
            value="Malviya Nagar, Delhi"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] px-6 md:px-12 py-24 text-center">
        <motion.h2
          className="text-white text-3xl md:text-4xl font-light mb-6"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          Let’s build something timeless
        </motion.h2>

        <a
          href="https://wa.me/919911631110"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition"
        >
          <FaWhatsapp className="text-green-400" />
          Start Conversation
        </a>
      </section>

      <Footer />
    </>
  );
}

// GLASS CARD
function GlassCard({ icon, label, value }) {
  return (
    <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition">
      <div className="text-white/60 mt-1 text-lg">{icon}</div>

      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest">
          {label}
        </p>

        <p className="text-white text-sm">{value}</p>
      </div>
    </div>
  );
}