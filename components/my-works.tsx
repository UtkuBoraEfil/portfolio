"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WorkCard } from "@/components/ui/work-card";
import { works, works_left, works_right, work_categories } from "@/lib/data";
import { VideoWork } from "@/components/ui/my-work-with-video";

export function MyWorks() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: works.length };
    for (const category of work_categories) {
      if (category.key === "all") continue;
      map[category.key] = works.filter(
        (work) => work.group === category.key
      ).length;
    }
    return map;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? works
        : works.filter((work) => work.group === activeCategory),
    [activeCategory]
  );

  return (
    <div className=" max-w-[1220px] mx-auto scroll-mt-20" id="work">
      <VideoWork />
      <div className="flex flex-wrap gap-y-3 pb-14 text-xs mx2:text-base text-[ffffffbf] opacity-80">
        <p>Filter by</p>
        {work_categories.map((category, index) => (
          <div className="flex" key={category.key}>
            <button
              onClick={() => setActiveCategory(category.key)}
              className={`mx-3 md2:mx-4 relative transition-all duration-500 ${
                activeCategory === category.key
                  ? "text-[#66d9ed]"
                  : "hover:text-[#66d9ed]"
              }`}
            >
              {category.label}{" "}
              <span className="text-[10px] md2:text-xs absolute -top-2 px-1">
                {counts[category.key]}
              </span>
            </button>
            {index < work_categories.length - 1 && <p>/</p>}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {activeCategory === "all" ? (
          // The original, hand-arranged "All" layout — untouched.
          <motion.div
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className=" flex flex-col forworks:flex-row items-center forworks:items-start align-middle justify-center   gap-10 "
          >
            <div className="lg:flex-2/3   h-full">
              <div className="flex gap-10 flex-wrap flex-col lg:flex-row">
                {works_left.map((work, index) => (
                  <WorkCard key={index} {...work} />
                ))}
              </div>
            </div>
            <div className="lg:flex-1/3  flex flex-col gap-10 ">
              {works_right.map((work, index) => (
                <WorkCard key={index} {...work} />
              ))}
            </div>
          </motion.div>
        ) : (
          // Filtered views: every card shown at the same, small size, in a
          // plain wrapping grid — keeps things simple and never leaves an
          // odd-sized card fighting for space against a big one.
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 forworks:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center forworks:justify-items-stretch"
          >
            {filtered.map((work) => (
              <WorkCard
                key={work.title}
                {...work}
                card_design="type1"
                className="!w-full !max-w-full !min-w-0"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
