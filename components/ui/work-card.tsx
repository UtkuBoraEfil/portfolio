import { spaceGrotesk } from "@/app/fonts";
import Image from "next/image";
interface WorkCardProps {
  title: string;
  image: string;
  category: string;
  card_design: string;
}
export function Work_Card({
  title,
  image,
  category,
  card_design,
}: WorkCardProps) {
  return (
    <>
      {card_design === "type1" ? (
        <div className="rounded-[5px]  max-w-[380px] max-h-[436px] overflow-hidden work-card-parent">
          <div className="h-[285px] overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center work-card-children "
              src={image}
              alt={title}
              width={380}
              height={285}
            />
          </div>
          <div className="work-card-bg p-12 h-full">
            <h2
              className={`whitespace-nowrap overflow-hidden text-ellipsis leading-tight mb-[5px] text-2xl ${spaceGrotesk.className} font-bold`}
            >
              {title}
            </h2>
            <h4 className="text-sm opacity-50 work-card-category ">
              {category}
            </h4>
            <h4 className="text-sm opacity-50 work-card-show-project w-fit  ">
              Show Project
            </h4>
          </div>
        </div>
      ) : (
        <div className="rounded-[5px] forworks:w-full w-[380px]  h-[436px] lg:!h-[674px]   overflow-hidden work-card-parent">
          <div className=" overflow-hidden">
            <Image
              className="lg:w-full h-[285px] lg:h-auto work-card-children"
              src={image}
              alt={title}
              width={380}
              height={285}
            />
          </div>
          <div className="work-card-bg p-12 ">
            <h2
              className={`whitespace-nowrap overflow-hidden text-ellipsis leading-tight mb-[5px] text-2xl ${spaceGrotesk.className} font-bold`}
            >
              {title}
            </h2>
            <h4 className="text-sm opacity-50 work-card-category">
              {category}
            </h4>
            <h4 className="text-sm opacity-50 work-card-show-project w-fit  ">
              Show Project
            </h4>
          </div>
        </div>
      )}
    </>
  );
}
