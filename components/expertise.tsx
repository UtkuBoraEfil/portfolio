import { ReactIcon } from "@/components/icons/react";
import { Monitor } from "@/components/icons/monitor";
import { Figma } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Expertise() {
  return (
    <>
      <h1 className=" text-7xl font-semibold text-center pb-10">
        My Expertise
      </h1>
      <div className="flex w-full justify-start max-w-[1100px] flex-wrap mx-auto ">
        <div className="px-8 py-10 flex-1 flex-shrink w-full border-[3px] min-h-7 border-solid border-r-[1.5px] border-[#a3a3a3] text-[26px]  leading-[1.2em]">
          <div className="flex gap-6 ">
            <Monitor />
            <h2 className="font-semibold inline-block align-top">
              <span className="z-10 relative underline-red">Software</span>
              <br />
              Development
            </h2>
          </div>
          <h3
            className={`text-sm opacity-30 ${robotoMono.className}`}
          >{`<h3>`}</h3>
          <div className="pl-[15px] py-1">
            <h2
              className={`${robotoMono.className} font-normal leading-6 pl-3 text-base border-l-2 border-white border-opacity-30 `}
            >
              Experienced in both functional and OOP: Dart, Python, Java,
              JavaScript, TypeScript.
            </h2>
          </div>
          <h3
            className={`text-sm opacity-30 ${robotoMono.className}`}
          >{`</h3>`}</h3>
        </div>
        <div className="px-8 py-10 flex-1 w-full border-[3px] min-h-7 border-solid border-x-[1.5px] border-[#a3a3a3] text-[26px]  leading-[1.2em]">
          <div className="flex gap-10">
            <ReactIcon />
            <h2 className="font-semibold inline-block align-top">
              <span className="z-10 relative underline-blue">
                Full-Stack Dev
              </span>
              <br />
              React,NextJs
            </h2>
          </div>
          <h3
            className={`text-sm opacity-30 ${robotoMono.className}`}
          >{`<h3>`}</h3>
          <div className="pl-[15px] py-1">
            <h2
              className={`${robotoMono.className} font-normal leading-6 pl-3 text-base border-l-2 border-white border-opacity-30 `}
            >
              Over 2 years of development experience in HTML, CSS, JavaScript,
              React and NextJS frameworks.
            </h2>
          </div>
          <h3
            className={`text-sm opacity-30 ${robotoMono.className}`}
          >{`</h3>`}</h3>
        </div>
        <div className="px-8 py-10 flex-1 w-full border-[3px] border-l-[1.5px] min-w-[280px] min-h-7 border-solid  border-[#a3a3a3] text-[26px]  leading-[1.2em]">
          <div className="flex gap-10">
            <Figma className="w-10 h-10 stroke-[1.2px]" />
            <h2 className="font-semibold inline-block align-top">
              <span className="z-10 relative underline-orange">UI/UX</span>
              <br />
              Figma
            </h2>
          </div>
          <h3
            className={`text-sm opacity-30 ${robotoMono.className}`}
          >{`<h3>`}</h3>
          <div className="pl-[15px] py-1">
            <h2
              className={`${robotoMono.className} font-normal leading-6 pl-3 text-base border-l-2 border-white border-opacity-30 `}
            >
              Passionate about UI/UX design with experience in creating
              user-friendly interfaces using Figma.
            </h2>
          </div>
          <h3
            className={`text-sm opacity-30 ${robotoMono.className}`}
          >{`</h3>`}</h3>
        </div>
        <div className="hidden sm:block md:hidden px-8 py-10 flex-1 w-full min-h-7">
          <div className="ml-1 pl-4 border-l-8 border-[#b7f] ">
            <h2 className="text-3xl font-semibold">
              Sometimes the best way to solve a problem is to help others.
            </h2>
            <p className="text-base font-normal mt-8">
              - Uncle Iroh, 'Avatar: The Last Airbender'
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  relative -top-10">
        <Image
          src={"/images/hello-world.webp"}
          alt="Hello World"
          width={582}
          height={291}
          className="opacity-20 mx-auto"
        />
      </div>
    </>
  );
}
