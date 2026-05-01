import Design from "../assets/Livingroom.svg";
import Consultant from "../assets/Kitchen.svg";
import Planning from "../assets/bedroom.svg";

const stepData = [

  {
    title: "The Kitchen",
    description:
      "Where nourishment meets artistry—designed for function, flow, and everyday inspiration.",
    image: Consultant,
  },
    {
    title: "The Living Room",
    description:
      "The heartbeat of the home, where comfort, conversation, and character come together.",
    image: Design,
  },
  {
    title: "The Bedroom",
    description:
      "A private retreat crafted for rest, balance, and effortless tranquility.",
    image: Planning,
  },
];

export default function Steps() {
  return (
    <section className="w-full  px-4 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 text-gray-900">

    
      <div className="mb-10 md:mb-14 lg:mb-16 max-w-3xl">
        <p className="uppercase text-[10px] md:text-sm tracking-widest mb-3 text-gray-500">
          What we do
        </p>

        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Interiors that stand the test of time <br className="hidden md:block" />
          while serving your daily needs.
        </h1>
      </div>

     
      <div className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 md:gap-8 lg:gap-10
        max-w-7xl mx-auto
      ">
        {stepData.map((step, index) => (
          <div
            key={index}
            className="
              flex flex-col justify-between
              border border-gray-300 border-dashed
              hover:border-gray-900 hover:border-solid
              transition-all duration-300
              hover:bg-gray-100
              p-6 md:p-8
              min-h-[300px] md:min-h-[360px]
              group
            "
          >
          
            <div className="w-full flex justify-center items-center mb-6 md:mb-8">
              <img
                src={step.image}
                alt=""
                className="
                  w-20 h-20 md:w-36 md:h-36
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>

          
            <div>
              <h6 className="uppercase text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">
                {step.title}
              </h6>

              <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}