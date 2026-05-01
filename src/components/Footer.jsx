import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Home Interior", path: "/home-interior" },
    { name: "Office Interior", path: "/office-interior" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* MAIN */}
      <div
        className="
        max-w-7xl mx-auto 
        px-4 md:px-8 lg:px-12 
        py-14 md:py-16 lg:py-20
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-10 md:gap-12
      "
      >
        {/* BRAND */}
        <div className="max-w-sm">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Home Interior
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-6 md:leading-7">
            We design thoughtful interiors that balance aesthetics, comfort, and
            functionality—creating spaces you truly live in.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition">
             navedali7141@icloud.com
            </li>
            <li className="hover:text-white transition">+91 9911631110</li>
            <li className="hover:text-white transition"> Malvaya Nagar <br/> New Delhi , India</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:scale-110 hover:text-pink-500 transition duration-300" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="cursor-pointer hover:scale-110 hover:text-red-500 transition duration-300" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:scale-110 hover:text-blue-500 transition duration-300" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="cursor-pointer hover:scale-110 hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM */}
      <div
        className="
        max-w-7xl mx-auto 
        px-4 md:px-8 lg:px-12 
        py-5 
        flex flex-col md:flex-row 
        justify-between items-center 
        gap-3
        text-xs md:text-sm text-gray-500
      "
      >
        <p>© 2026 Home Interior. All rights reserved.</p>

        {/* <div className="flex gap-4">
          <NavLink to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </NavLink>

          <NavLink to="/terms" className="hover:text-white transition">
            Terms
          </NavLink>
        </div> */}
      </div>
    </footer>
  );
}
