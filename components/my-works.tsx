import { Work_Card } from "@/components/ui/work-card";
import { works } from "@/lib/data";
import { Video_Work } from "@/components/ui/my-work-with-video";

const works_right = [works[2], works[4], works[6], works[7], works[9]];
// const works_important = [works[3], works[5]];
const works_left = [works[0], works[1], works[3], works[5], works[8]];
export function MyWorks() {
  return (
    <div className=" max-w-[1220px] mx-auto ">
      <Video_Work />
      <div className="flex pb-14 text-base text-[ffffffbf] opacity-80">
        <p>Filter by</p>
        <div className=" flex ">
          <button className="mx-4 relative hover:text-[#66d9ed] transition-all duration-500">
            All{" "}
            <span className="text-xs absolute -top-2 px-1">{works.length}</span>
          </button>
          <p>/</p>
        </div>
        <div className="flex">
          <button className="mx-4 relative hover:text-[#66d9ed] transition-all duration-500">
            Data Visualization{" "}
            <span className="text-xs absolute -top-2 px-1">{works.length}</span>
          </button>
          <p>/</p>
        </div>
        <div className="flex">
          <button className="mx-4 relative hover:text-[#66d9ed] transition-all duration-500">
            Web Development{" "}
            <span className="text-xs absolute -top-2 px-1">{works.length}</span>
          </button>
        </div>
      </div>
      <div className=" flex flex-col forworks:flex-row items-center align-middle justify-center   gap-10 ">
        <div className="lg:flex-2/3   h-full">
          <div className="flex gap-10 flex-wrap flex-col lg:flex-row">
            {works_left.map((work, index) => (
              <Work_Card key={index} {...work} />
            ))}
          </div>
        </div>
        <div className="lg:flex-1/3  flex flex-col gap-10">
          {works_right.map((work, index) => (
            <Work_Card key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}
