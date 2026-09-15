"use client";
import { useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { roboto } from "@/app/fonts";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function PetverseShowcase() {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  // The animation JSON is ~570KB — only fetch it once this section is about
  // to be scrolled into view, not eagerly on page load. Once loaded, the
  // same observer pauses the animation whenever it scrolls off-screen so it
  // isn't burning CPU (and competing with scroll) while off-screen — the
  // main source of the jank on mobile.
  useEffect(() => {
    const node = mockupRef.current;
    if (!node) return;

    let cancelled = false;
    let fetched = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!fetched) {
            fetched = true;
            fetch("/images/phonesMockups.json")
              .then((res) => res.json())
              .then((data) => {
                if (!cancelled) setAnimationData(data);
              })
              .catch(() => {
                // Fails silently — the loading placeholder just stays in place.
              });
          } else {
            lottieRef.current?.play();
          }
        } else {
          lottieRef.current?.pause();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <div className="max-w-[1220px] mx-auto pb-32">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[720px] mx-auto md:mx-0 md:w-3/5"
        >
          <div
            ref={mockupRef}
            className="relative aspect-square w-full overflow-hidden"
          >
            {animationData ? (
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop
                autoplay
                onDOMLoaded={() => lottieRef.current?.setSpeed(0.85)}
                className="w-full h-full scale-125"
              />
            ) : (
              <div className="w-full h-full rounded-md bg-white/5 animate-pulse" />
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="w-full md:w-2/5 text-center md:text-left"
        >
          <p
            className={`text-sm uppercase tracking-wider opacity-60 mb-3 ${roboto.className}`}
          >
            Graduation Project
          </p>
          <h2 className="text-5xl md2:text-6xl font-semibold mb-6 inline-block">
            <span className="z-10 relative underline-purple">PetVerse</span>
          </h2>
          <p
            className={`opacity-80 leading-relaxed mb-8 max-w-md mx-auto md:mx-0 ${roboto.className}`}
          >
            An AI-based 3D virtual pet &amp; social platform — upload a photo
            of your pet, get a 3D model of it, and walk it around a shared
            virtual park with other users.
          </p>
          <a
            href="https://www.petverse-presentation.site/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 ${roboto.className} bg-[#9b37ff] rounded-sm px-6 py-3 font-light hover:opacity-90 hover:gap-3 transition-all duration-300 ease-in-out`}
          >
            View Project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </a>
          <p
            className={`text-xs opacity-40 mt-3 ${roboto.className}`}
          >
            Best viewed on desktop
          </p>
        </motion.div>
      </div>
    </div>
  );
}
