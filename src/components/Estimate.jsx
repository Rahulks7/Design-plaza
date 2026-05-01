import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Smart from "../assets/Home/vision2.webp";
import Stylish from "../assets/Home/vision3.webp";
import Luxury from "../assets/office/Bedroom.webp";

import { sendToWhatsApp } from "../utils/whatsapp";

export default function Estimate({ open, onClose }) {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    bhk: "",
    rooms: {},
    package: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* RESET ON CLOSE */
  useEffect(() => {
    if (!open) {
      setStep(0);

      setFormData({
        bhk: "",
        rooms: {},
        package: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [open]);

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // PHONE INPUT
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // AUTO NEXT STEP
  const handleAutoAdvance = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setTimeout(() => {
      setStep((s) => s + 1);
    }, 400);
  };

  // VALIDATION FOR NEXT
  const canGoNext = () => {
    if (step === 0) return formData.bhk !== "";

    if (step === 1)
      return Object.values(formData.rooms).some((count) => count > 0);

    if (step === 2) return formData.package !== "";

    return true;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      bhk,
      rooms,
      package: pkg,
      name,
      email,
      phone,
      message,
    } = formData;

    // VALIDATIONS
    if (!name || name.trim().length < 2) {
      return alert("Enter valid name");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return alert("Enter valid email");
    }

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return alert("Enter valid phone number");
    }

    // ROOMS TEXT
    const roomsText = Object.entries(rooms)
      .filter(([_, count]) => count > 0)
      .map(([room, count]) => `${room}: ${count}`)
      .join("\n");

    // FINAL MESSAGE
    const finalMessage = `🏠 *Interior Estimate Request*

📦 Package: ${pkg}
🏢 Home Type: ${bhk}

🛋 Rooms:
${roomsText}

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

📝 Requirements:
${message || "Not provided"}`;

    // SEND TO WHATSAPP + EMAIL
    sendToWhatsApp({
      name,
      email,
      phone,
      message: finalMessage,
      type: "Estimate Request",
    });

    // CLOSE MODAL
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          {/* MODAL */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="bg-neutral-950 border border-white/10 p-6 md:p-12 w-full max-w-4xl relative overflow-hidden"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-white uppercase tracking-[0.2em] text-[10px] opacity-60">
                Interior Estimate · Step {step + 1}/4
              </h2>

              <button
                type="button"
                onClick={onClose}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <FiX className="text-white text-2xl" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="relative h-[480px] md:h-[500px]">
              {/* STEP 1 */}
              <motion.section
                animate={{
                  opacity: step === 0 ? 1 : 0,
                  x: step === 0 ? 0 : -20,
                }}
                className={`absolute inset-0 ${
                  step === 0
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <header className="mb-10">
                  <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                    Design Brief
                  </p>

                  <h2 className="text-3xl font-light text-white mt-4">
                    Select your home type
                  </h2>
                </header>

                <div className="space-y-6 max-w-md">
                  {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"].map(
                    (bhk) => (
                      <label
                        key={bhk}
                        className="group flex items-center justify-between cursor-pointer"
                      >
                        <span
                          className={`text-xl font-light transition ${
                            formData.bhk === bhk
                              ? "text-white"
                              : "text-white/30 group-hover:text-white/60"
                          }`}
                        >
                          {bhk}
                        </span>

                        <span
                          className={`h-[1px] w-12 transition ${
                            formData.bhk === bhk
                              ? "bg-yellow-500 w-20"
                              : "bg-white/10 group-hover:bg-white/30"
                          }`}
                        />

                        <input
                          type="radio"
                          name="bhk"
                          value={bhk}
                          checked={formData.bhk === bhk}
                          onChange={(e) =>
                            handleAutoAdvance("bhk", e.target.value)
                          }
                          className="hidden"
                        />
                      </label>
                    )
                  )}
                </div>
              </motion.section>

              {/* STEP 2 */}
              <motion.section
                animate={{
                  opacity: step === 1 ? 1 : 0,
                  x: step === 1 ? 0 : step < 1 ? 20 : -20,
                }}
                className={`absolute inset-0 ${
                  step === 1
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <header className="mb-10">
                  <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                    Scope of Work
                  </p>

                  <h2 className="text-3xl font-light text-white mt-4">
                    Rooms to be designed
                  </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Living Room",
                    "Bedroom",
                    "Kitchen",
                    "Bathroom",
                    "Dining Area",
                    "Balcony",
                  ].map((room) => (
                    <div
                      key={room}
                      className="flex items-center justify-between border-b border-white/5 pb-4"
                    >
                      <span className="text-white/70 font-light">
                        {room}
                      </span>

                      <div className="flex items-center gap-6">
                        {/* MINUS */}
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              rooms: {
                                ...prev.rooms,
                                [room]: Math.max(
                                  0,
                                  (prev.rooms[room] || 0) - 1
                                ),
                              },
                            }))
                          }
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/40 hover:text-white"
                        >
                          −
                        </button>

                        <span className="w-4 text-center text-white font-medium">
                          {formData.rooms[room] || 0}
                        </span>

                        {/* PLUS */}
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              rooms: {
                                ...prev.rooms,
                                [room]: (prev.rooms[room] || 0) + 1,
                              },
                            }))
                          }
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* STEP 3 */}
              <motion.section
                animate={{
                  opacity: step === 2 ? 1 : 0,
                  x: step === 2 ? 0 : step < 2 ? 20 : -20,
                }}
                className={`absolute inset-0 ${
                  step === 2
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <header className="mb-10">
                  <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                    Design Direction
                  </p>

                  <h2 className="text-3xl font-light text-white mt-4">
                    Choose your package
                  </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "Smart", img: Smart },
                    { name: "Stylish", img: Stylish },
                    { name: "Luxury", img: Luxury },
                  ].map((pkg) => (
                    <label key={pkg.name} className="cursor-pointer group">
                      <div
                        className={`relative h-48 overflow-hidden border transition-colors duration-500 ${
                          formData.package === pkg.name
                            ? "border-yellow-500"
                            : "border-white/10"
                        }`}
                      >
                        <img
                          src={pkg.img}
                          alt={pkg.name}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            formData.package === pkg.name
                              ? "scale-110"
                              : "group-hover:scale-105"
                          }`}
                        />

                        {formData.package === pkg.name && (
                          <div className="absolute inset-0 bg-yellow-500/10" />
                        )}
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <h3
                          className={`text-lg font-light ${
                            formData.package === pkg.name
                              ? "text-yellow-500"
                              : "text-white"
                          }`}
                        >
                          {pkg.name}
                        </h3>

                        <input
                          type="radio"
                          name="package"
                          value={pkg.name}
                          checked={formData.package === pkg.name}
                          onChange={(e) =>
                            handleAutoAdvance("package", e.target.value)
                          }
                          className="hidden"
                        />

                        {formData.package === pkg.name && (
                          <span className="text-[9px] tracking-widest uppercase text-yellow-500 font-bold">
                            Selected
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </motion.section>

              {/* STEP 4 */}
              <motion.section
                animate={{
                  opacity: step === 3 ? 1 : 0,
                  x: step === 3 ? 0 : 20,
                }}
                className={`absolute inset-0 ${
                  step === 3
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <header className="mb-10">
                  <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                    Consultation
                  </p>

                  <h2 className="text-3xl font-light text-white mt-4">
                    Final Details
                  </h2>
                </header>

                <form
                  id="estimate-form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-yellow-500 transition"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-yellow-500 transition"
                  />

                  <div className="md:col-span-2">
                    <PhoneInput
                      country="in"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputClass="!w-full !bg-transparent !border-b !border-white/10 !rounded-none !text-white !h-12 !pl-14"
                      containerClass="!w-full"
                      buttonClass="!bg-transparent !border-none"
                    />
                  </div>

                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Brief requirements (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="md:col-span-2 w-full bg-transparent border-b border-white/10 py-3 text-white outline-none resize-none focus:border-yellow-500 transition"
                  />
                </form>
              </motion.section>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-12 border-t border-white/5 pt-8">
              {/* BACK */}
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
                className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white disabled:opacity-0 transition"
              >
                Back
              </button>

              {/* PROGRESS */}
              <div className="flex gap-3">
                {[0, 1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-[1px] w-8 transition-colors duration-500 ${
                      step >= s ? "bg-yellow-500" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>

              {/* NEXT / SUBMIT */}
              {step < 3 ? (
                <button
                  type="button"
                  disabled={!canGoNext()}
                  onClick={() => setStep(step + 1)}
                  className="bg-white text-black px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-500 transition disabled:opacity-20 disabled:grayscale"
                >
                  Next Step
                </button>
              ) : (
                <button
                  form="estimate-form"
                  type="submit"
                  className="bg-yellow-500 text-black px-10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition"
                >
                  Get Estimate
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}