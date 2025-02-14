import { FeaturedIn } from "./featured-in";
import { MyName } from "./my_name";
import { ScrollDown } from "./scroll-down";


export function InsideOfHero() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="flex-1"/>  
      <div className="flex-1 text-center pt-10 px-30">
        <MyName />
      </div>
      <FeaturedIn />
      <ScrollDown/>
    </div>
  );
}
