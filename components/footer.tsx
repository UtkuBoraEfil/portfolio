import { spaceGrotesk, roboto } from "@/app/fonts";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex w-full flex-col-reverse lg:flex-row">
      <div
        className={`lg:w-[45%] ${roboto.className} bg-[#0e0e0e] min-h-full flex flex-col py-20 px-8 `}
      >
        <div className="mx-auto max-w-[450px] flex flex-col justify-between gap-28">
          <div>
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
          </div>
          <div>
            <h2 className="text-3xl cursor-pointer ">
              <span className="underline-purple relative z-10">
                utqbora@hotmail.com
              </span>
            </h2>
            <ul className="py-3 text-xl tracking-widest">
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
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
              <div className="rounded-full w-20 h-20 object-cover bg-center overflow-hidden border border-white bg-profile"></div>
            </div>
            <p className="py-10 opacity-80">
              Since 2018 Tamal has been responsible for the development of our
              website which has been instrumental to the growth of our company.
              Even while working remotely he’s been highly responsive, organized
              and strategic in his thinking. In addition to staying on top of
              day-to-day site changes and builds, he’s provided us with great
              advice to stay on top of the current changes in web technologies.
              He’s also implemented effective project management and Q&A
              processes. As a result Tamal has been an highly valued and
              impactful member of our team.
            </p>
            <h2 className="text-lg font-semibold">- Arda Kaan Aydilek</h2>
            <p className="text-sm opacity-80">founder of speed-up youtube channel</p>
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
              <div className="rounded-full w-20 h-20 object-cover bg-center overflow-hidden border border-white bg-profile"></div>
            </div>
            <p className="py-10 opacity-80">
              Utku kesinlikle HARIKA. Kendisi en sevdigim kuzenim olur. Muthis bir insan. Herkesin boyle bir kuzeni olmali.
            </p>
            <h2 className="text-lg font-semibold">- Arda Kaan Aydilek</h2>
            <p className="text-sm opacity-80">founder of speed-up youtube channel</p>
            </div>
            <div className="w-full min-h-full p-8 bg-[#923fe6] ">
            <div className="flex justify-end relative">
              <Image
                src={"/images/quote-icon.png"}
                height={40}
                width={50}
                alt="quote"
                className="opacity-70 absolute left-0 top-0"
              />
              <div className="rounded-full w-20 h-20 object-cover bg-center overflow-hidden border border-white bg-profile"></div>
            </div>
            <p className="py-10 opacity-80">
            Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.
            </p>
            <h2 className="text-lg font-semibold">- Arda Kaan Aydilek</h2>
            <p className="text-sm opacity-80">founder of speed-up youtube channel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
