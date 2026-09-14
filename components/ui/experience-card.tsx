"use client";
import { Plus, MapPin, Minus, SquareArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
          <span className="relative w-5 h-5 inline-block">
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={isActive ? "minus" : "plus"}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {isActive ? <Minus size={20} /> : <Plus size={20} />}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.25, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <div className="bg-[#241d41] w-full h-full px-5 py-5 rounded-md my-5">
              <div
                className={`flex gap-2 text-sm opacity-80 items-center ${roboto.className}`}
              >
                <MapPin size={20} className="stroke-[#740cdc]" />
                <h1>
                  {experience.city}, {experience.country}
                </h1>
                {experience.website && experience.website.trim() !== "" && (
                  <>
                    <SquareArrowUpRight
                      size={22}
                      className="fill-[#740cdc] stroke-[#241d41] ml-5"
                    />
                    <a href={experience.website}>{experience.website}</a>
                  </>
                )}
              </div>
              <div className="w-full flex flex-col md2:flex-row justify-between gap-5 pt-5">
                <div>
                  <p className="leading-6 opacity-85">
                    {experience.description}
                  </p>
                  <div className="flex gap-2 mt-5 flex-wrap">
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
                {experience.image && experience.image.trim() !== "" && (
                  <div>
                    <img
                      src={experience.image}
                      alt=""
                      className="w-24 hidden md2:block rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
