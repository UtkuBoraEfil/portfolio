import { Hero } from "@/components/hero";
import { Expertise } from "@/components/expertise";
import { MyWorks } from "@/components/my-works";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
    <div className="w-full h-screen ">
        <Hero/>
    </div>
    <div className=" px-5 md2:px-[50px] pt-32 pb-32 overflow-hidden">
      <Expertise/>
      <MyWorks/>
      <Experience/>
    </div>
    <Footer/>
  </main>
  );
}
