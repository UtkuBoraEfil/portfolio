import { Plus, MapPin, Minus, SquareArrowUpRight } from "lucide-react";
import { roboto } from "@/app/fonts";

interface ExperienceCardProps {
  experience: {
    title: string;
    years: string;
    city: string;
    country: string;
    website: string;
    description: string;
    image: string;
    areas: string[];
  };
  isActive: boolean;
  onClick: () => void;
}

export function ExperienceCard({
  experience,
  isActive,
  onClick,
}: ExperienceCardProps) {
  return (
    <>
      <button
        className={`bg-[#490C86DE] w-full h-full items-center flex justify-between py-4 px-5 font-semibold text-sm md2:text-base rounded-md leading-none text-center transition-all duration-200 ${
          isActive ? "bg-[#740cdc]" : ""
        }`}
        onClick={onClick}
      >
        <h1>{experience.title}</h1>
        <div className="flex gap-10 items-center">
          <h2 className="hidden md2:block">{experience.years}</h2>
          {isActive ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isActive ? "max-h-[1000px] " : "max-h-0 "
        }`}
      >
        <div className="bg-[#241d41] w-full h-full px-5 py-5 rounded-md my-5">
          <div
            className={`flex gap-2 text-sm opacity-80 items-center ${roboto.className}`}
          >
            <MapPin size={20} className="stroke-[#740cdc]" />
            <h1>
              {experience.city}, {experience.country}
            </h1>
            <SquareArrowUpRight
              size={22}
              className="fill-[#740cdc] stroke-[#241d41] ml-5"
            />
            <a href={experience.website}>{experience.website}</a>
          </div>
          <div className="w-full flex flex-col-reverse md2:flex-row justify-between pt-5">
            <div>
              <p className="leading-6 opacity-85">{experience.description}</p>
              <div className="flex gap-2 mt-5">
                {experience.areas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-[#740cdc] px-3 py-1 rounded-md text-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              {/* <img src={experience.image} alt="" className=" rounded-md"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
