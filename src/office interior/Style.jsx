import bedroom from "../assets/pics/bedroom1.webp"
import liv1 from "../assets/pics/living3.webp"
import kitchen from "../assets/pics/kitchen1.webp"
import work from "../assets/pics/off3.webp"

const images = [
  {
    image: bedroom,
    title: "Serene Bedroom",
    description: "A tranquil space designed for deep rest and timeless comfort.",
  },
  {
    image: liv1,
    title: "Modern Living",
    description: "Where minimalism meets warmth and functionality.",
  },
  {
    image: kitchen,
    title: "Artisan Kitchen",
    description: "Crafted for beauty, precision, and everyday living.",
  },
  {
    image: work,
    title: "Private Workspace",
    description: "An elegant environment built for focus and clarity.",
  },
];

export default function Style() {
  return (
    <section className="w-full py-12 md:py-16">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden h-[300px] md:h-[350px] lg:h-[420px] rounded-lg"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-6 md:bottom-8 left-5 md:left-6 right-5 md:right-6 text-white">
                
                <span className="block w-10 h-[1px] bg-white mb-3 md:mb-4 transition-all duration-700 group-hover:w-20" />

                <h2 className="text-base md:text-lg font-light tracking-wide mb-1 md:mb-2">
                  {item.title}
                </h2>

                <p className="
                  text-xs md:text-sm text-white/80 leading-relaxed max-w-[90%]
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition duration-700 delay-100
                ">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}