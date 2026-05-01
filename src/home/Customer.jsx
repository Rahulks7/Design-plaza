import LivingRoom from "../assets/room.webp";
import cus1 from "../assets/cus1.png"
import cus2 from "../assets/cus2.png"
import cus3 from "../assets/cus3.png"

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Living Room Design",
    review:
      "The design completely transformed our space. Every detail feels intentional, warm, and beautifully balanced.",
    rating: 5,
    image: cus1,
  },
  {
    name: "Ananya Verma",
    role: "Kitchen Interior",
    review:
      "From layout to finishes, everything was thoughtfully planned. The kitchen is both elegant and practical.",
    rating: 5,
    image: cus2,
  },
  {
    name: "Sweta Sharma",
    role: "Bedroom Interior",
    review:
      "Calm, minimal, and luxurious. The bedroom finally feels like a true retreat after a very long day.",
    rating: 4,
    image: cus3,
  },
];

export default function Customer() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      
   
      <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-3 md:mb-4">
          Trusted by Homeowners
        </h2>

        <p className="text-neutral-500 max-w-md md:max-w-xl mx-auto leading-6 md:leading-7 text-xs md:text-sm">
          Real stories from clients who trusted us to design spaces they love.
        </p>
      </div>

      
      <div className="
        max-w-7xl mx-auto 
        px-4 md:px-6 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 md:gap-8 lg:gap-10
      ">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="
              bg-white border border-neutral-200 
              p-6 md:p-7 lg:p-8 
              rounded-2xl md:rounded-3xl 
              shadow-sm hover:shadow-xl 
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {/* STARS */}
            <div className="flex gap-1 mb-4 md:mb-6">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className="text-neutral-900 text-xs md:text-sm" />
              ))}
            </div>

            <p className="text-neutral-600 leading-6 md:leading-8 mb-6 md:mb-10 text-xs md:text-sm">
              “{item.review}”
            </p>

          
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs md:text-sm font-medium text-neutral-900">
                  {item.name}
                </h4>
                <p className="text-[10px] md:text-xs text-neutral-500">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}