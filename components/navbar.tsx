import { Hamburger } from "@/components/ui/hamburger_menu";
import { Menu } from "./ui/mega_menu";

export function Navbar () {
  return (
    <div className="absolute px-10 py-14 w-full flex justify-end  md2:justify-center z-10">
      <div className="md2:hidden">
        <Hamburger/>
      </div>
      <h1 className="text-[#66d9ed] text-xl md2:text-3xl absolute left-10 ">UtkuBora_. </h1> 
        <Menu/>
    </div>
  );
};
