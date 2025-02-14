"use client";
import dynamic from "next/dynamic";
import { FeaturedIn } from "./featured-in";
import { MyName } from "./my-name";

const ScrollDown = dynamic(() => import("./scroll-down"), { ssr: false });
export function InsideOfHero() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="flex-1" />
      <div className="flex-1 text-center pt-10 px-30">
        <MyName />
      </div>
      <FeaturedIn />
      <ScrollDown />
    </div>
  );
}
