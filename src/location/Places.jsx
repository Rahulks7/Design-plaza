import { useNavigate } from "react-router-dom";
import img1 from "../assets/pics/restro3.webp"
import img2 from "../assets/pics/living6.webp"
const Place = [
  {
    title: "Delhi",
    subtitle: "Luxury Home Interiors",
    description:
      "From compact apartments to luxury villas, we design spaces that feel alive.",
    image: img1,
  },
  {
    title: "Mumbai",
    subtitle: "Premium Living Spaces",
    description:
      "Modern, elegant and timeless interiors crafted for urban lifestyles.",
    image: img2,
  },
];

export default function Places() {
   const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/design");
  };
  return (
    <section className="relative w-full py-32  overflow-hidden">
      
      {/* TOP TEXT */}
      <div className="max-w-7xl mx-auto px-10 mb-20">
        <p className="uppercase text-xs text-gray-500 tracking-[0.35em] mb-4">
          Main Places
        </p>
        <h1 className="text-5xl max-w-3xl font-light leading-tight">
          We renovate, decorate & make your walls speak for you.
        </h1>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-14">
        {Place.map((item, index) => (
          <div
            key={index}
            className="group relative h-[480px] overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 p-10 text-white">
              <p className="uppercase text-xs tracking-[0.3em] opacity-80 mb-3">
                {item.subtitle}
              </p>

              <h2 className="text-4xl font-light mb-4">
                {item.title}
              </h2>

              <p className="text-sm max-w-sm opacity-80 leading-relaxed">
                {item.description}
              </p>

              <span
               onClick={handleExploreClick}
              className="inline-block mt-6 text-sm uppercase tracking-widest border-b border-white/40 pb-1">
                Explore Projects
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
