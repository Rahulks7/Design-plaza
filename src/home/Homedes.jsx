import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LivingRoom from "../assets/office/Living.webp";
import Bedroom from "../assets/office/Bedroom.webp";
import kitchen from "../assets/office/Kitchen.webp";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "Cozy Living Room",
    description:
      "A warm and inviting space where every moment feels relaxed and at home.",
    image: LivingRoom,
  },
  {
    title: "Modern Kitchen",
    description:
      "A functional yet stylish kitchen where cooking, gathering, and everyday living come together effortlessly.",
    image: kitchen,
  },
  {
    title: "Serene Bedroom",
    description:
      "A calm and comforting retreat designed for rest, balance, and peaceful nights.",
    image: Bedroom,
  },
];

export default function Homedes() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 1024;

        //  MOBILE
        if (isMobile) {
          cardsRef.current.forEach((card) => {
            gsap.fromTo(
              card,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
          return;
        }

        //  DESKTOP
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
          },
        });

        cardsRef.current.forEach((card, index) => {
          if (index === 0) return;

          tl.fromTo(
            card,
            { y: "120%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.2",
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 lg:px-10 pt-16 lg:pt-20 flex flex-col lg:flex-row w-full lg:h-screen gap-10 overflow-hidden"
    >
      {/* TEXT */}
      <div className="w-full lg:w-[48%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
          We design interiors that mirror <br className="hidden md:block" />
          your personality, create comfort, and enhance your everyday living.
        </h1>
       
      </div>

      {/* CARDS */}
      <div className="relative w-full lg:w-[25%] flex flex-col gap-8 md:gap-10 lg:h-[500px]">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el && !cardsRef.current.includes(el)) {
                cardsRef.current.push(el);
              }
            }}
            className="
              rounded overflow-hidden bg-white shadow-xl border border-gray-100 
              flex flex-col
              h-[380px] md:h-[420px] lg:h-[500px]
              relative
              lg:absolute lg:top-0 lg:left-0 lg:w-full
              will-change-transform
            "
            style={{ zIndex: index + 1 }}
          >
            {/* IMAGE */}
            <div className="h-[200px] md:h-[240px] lg:h-[300px] w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 bg-white flex flex-col flex-1">
              <h2 className="text-lg md:text-xl font-semibold">{card.title}</h2>

              <p className="text-sm mt-2 text-gray-600 flex-1">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <div className="w-full lg:w-[20%] flex flex-col justify-start lg:justify-end pb-6 lg:pb-10">
        <p className="text-base md:text-lg mb-4 md:mb-6 italic">
          “A home that speaks your language — built around your life, your
          loves, and your personality.”
        </p>
      </div>
    </section>
  );
}
