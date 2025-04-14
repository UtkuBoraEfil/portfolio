"use client";
import { motion } from "framer-motion";
import { spaceGrotesk, roboto } from "@/app/fonts";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex w-full flex-col-reverse lg:flex-row " id="contact">
      <div
        className={`lg:w-[45%] ${roboto.className} bg-[#0e0e0e] min-h-full flex flex-col py-20 px-8 `}
      >
        <div className="mx-auto max-w-[450px] flex flex-col justify-between gap-28">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2
              className={`${spaceGrotesk.className} text-4xl font-bold leading-[1.2em]`}
            >
              Available for select freelance opportunities
            </h2>
            <h3 className={`py-10  text-lg leading-6 tracking-widest`}>
              Have an exciting project you need help with?
              <br />
              Send me an email or contact me via instant message!
            </h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl cursor-pointer ">
              <span className="underline-purple relative z-10">
                utqbora@hotmail.com
              </span>
            </h2>
            <ul className="py-3 text-xl tracking-widest">
              <li className="hover:text-[#66d9ed] transition-all duration-500">
                <a href="https://www.linkedin.com/in/utku-bora-efil-51147b31a/">
                  Linkedin
                </a>
              </li>
              <li className="hover:text-[#66d9ed] transition-all duration-500">
                <a href="https://github.com/UtkuBoraEfil">Github</a>
              </li>
              <li className="hover:text-[#66d9ed] transition-all duration-500">
                <a href="https://www.instagram.com/utqbora/">Instagram</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="lg:w-[55%] min-h-full">
        <div className="w-full flex flex-col sm:flex-row h-full">
          <div className="sm:w-[45%] p-8 bg-[#bc60fb] min-h-full">
            <div className="flex justify-end relative">
              <Image
                src={"/images/quote-icon.png"}
                height={40}
                width={50}
                alt="quote"
                className="opacity-70 absolute left-0 top-0"
              />
              <Image
                src={"/images/referances/ardakaan.jpg"}
                height={40}
                width={50}
                alt="quote"
                className="rounded-full w-20 h-20 object-cover bg-center overflow-hidden border border-white "
              />
            </div>
            <p className="py-10 opacity-80">
              During his time working under my supervision, Utku consistently
              impressed me with his curiosity, reliability, and technical
              ability. He quickly adapted to our team. His willingness to learn
              and improve was evident every day, and he frequently asked
              thoughtful questions that demonstrated a deeper understanding of
              web development principles. He always maintained a professional
              attitude and showed a strong sense of responsibility. I have no
              doubt that he will continue to grow and become a valuable asset
              wherever he works.
            </p>
            <h2 className="text-lg font-semibold">- Arda Kaan Aydilek</h2>
            <p className="text-sm opacity-80">Full-Stack web developer</p>
          </div>
          <div className="sm:w-[55%] min-h-full">
            <div className="w-full p-8 bg-[#0067dc]">
              <div className="flex justify-end relative">
                <Image
                  src={"/images/quote-icon.png"}
                  height={40}
                  width={50}
                  alt="quote"
                  className="opacity-70 absolute left-0 top-0"
                />
                <Image
                  src={"/images/referances/burakbey.jpg"}
                  height={40}
                  width={50}
                  alt="quote"
                  className="rounded-full w-20 h-20 object-cover bg-center overflow-hidden border border-white "
                />
              </div>
              <p className="py-10 opacity-80">
                Utku joined us as an intern and made a strong impression with
                his eagerness to contribute, quick learning curve, and clear
                passion for development. He approached his tasks with discipline
                and creative thinking, which made him stand out from the
                beginning.
              </p>
              <h2 className="text-lg font-semibold">- Burak Ustaoğlu</h2>
              <p className="text-sm opacity-80">
                Founder of Notus Creative Works
              </p>
            </div>
            <div className="w-full h-full lg:h-auto p-8 bg-[#923fe6] ">
              <div className="flex justify-end relative">
                <Image
                  src={"/images/quote-icon.png"}
                  height={40}
                  width={50}
                  alt="quote"
                  className="opacity-70 absolute left-0 top-0"
                />
                <Image
                  src={"/images/referances/ardakaan.jpg"}
                  height={40}
                  width={50}
                  alt="quote"
                  className="rounded-full w-20 h-20 object-cover bg-center overflow-hidden border border-white "
                />
              </div>
              <p className="py-10 opacity-80">
                I've known Utku for a few years and we've worked together on
                multiple university projects. He's always been reliable,
                collaborative, and great at finding smart solutions under
                pressure.
              </p>
              <h2 className="text-lg font-semibold">- </h2>
              <p className="text-sm opacity-80"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
