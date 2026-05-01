import Img1 from "../assets/office/Restaurant.webp";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { sendToWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  return (
    <section className="relative w-full py-10 md:py-16">
      <div className="flex flex-col lg:flex-row w-[94vw] sm:w-[92vw] md:w-[88vw] lg:w-[86vw] mx-auto rounded-2xl overflow-hidden shadow-xl lg:h-[520px]">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 relative text-white min-h-[300px] lg:min-h-full">
          <img src={Img1} alt="Interior" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
            <div>
              <h2 className="uppercase tracking-widest text-xs md:text-sm font-medium">
                Unique Interior
              </h2>
              <p className="text-xs text-white/80 mt-1">
                Timeless • Elegant • Functional
              </p>
            </div>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex items-center gap-3">
                <HiOutlineLocationMarker />
                <span>Delhi NCR, India</span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlinePhone />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail />
                <span>info@uniqueinterior.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 bg-white px-5 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-10 flex flex-col justify-center">

          <p className="uppercase text-[10px] tracking-widest text-gray-500 mb-2">
            Contact
          </p>

          <h1 className="text-xl md:text-2xl font-semibold mb-6">
            Design Your Dream Space
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;

           
              if (form.company.value) return;

              sendToWhatsApp({
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                message: form.message.value,
                type: "Interior Design Enquiry",
              });

              form.reset();
            }}
            className="space-y-5 text-sm"
          >

            {/* HIDDEN FIELD  */}
            <input type="text" name="company" className="hidden" />

            {/* NAME */}
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[6-9]{1}[0-9]{9}"
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                rows={3}
                required
                className="w-full border-b border-gray-300 py-2 outline-none focus:border-black resize-none"
              />
            </div>

            {/* BUTTON */}
            <button className="border border-black px-6 py-2 text-xs uppercase hover:bg-black hover:text-white transition">
              Send Details →
            </button>

            <p className="text-xs text-gray-400 mt-2">
              You will be redirected to WhatsApp to confirm submission
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}