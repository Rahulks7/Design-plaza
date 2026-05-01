import bedroom from "../assets/pics/bedroom1.webp"
import liv1 from "../assets/pics/living3.webp"
import kitchen from "../assets/pics/kitchen1.webp"
import work from "../assets/pics/off5.webp"

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
    <section className="w-full  py-10 md:py-0">
      
      {/* MOBILE → horizontal scroll */}
      <div className="
        flex md:hidden 
        overflow-x-auto 
        gap-4 px-4
      ">
        {images.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] h-[340px] relative overflow-hidden rounded-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h2 className="text-base font-light mb-1">
                {item.title}
              </h2>
              <p className="text-xs text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* TABLET + DESKTOP GRID */}
      <div className="
        hidden md:grid 
        grid-cols-2 lg:grid-cols-4 
        h-[50vh] lg:h-[60vh]
      ">
        {images.map((item, index) => (
          <div key={index} className="group relative overflow-hidden">
            
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full h-full object-cover 
                scale-105 group-hover:scale-110 
                transition-transform duration-[1200ms] ease-out
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
              
              <span className="
                block w-8 md:w-10 h-[1px] bg-white mb-3 md:mb-4 
                transition-all duration-700 group-hover:w-16 md:group-hover:w-20
              " />

              <h2 className="text-sm md:text-lg font-light tracking-wide mb-1 md:mb-2">
                {item.title}
              </h2>

              <p className="
                text-xs md:text-sm text-white/80 leading-relaxed max-w-[90%]
                opacity-100 md:opacity-0 
                md:group-hover:opacity-100 
                transition duration-700 delay-100
              ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}