import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { roboto } from "@/app/fonts";

export function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="backdrop-filter backdrop-blur rounded-l-md bg-[#1a191d] border-none text-white">
        <SheetTitle className="hidden"></SheetTitle>
        <SheetDescription></SheetDescription>
        <SheetHeader></SheetHeader>
        <div className="py-14 pr-10">
          <ul
            className={`${roboto.className} text-start space-y-4 text-lg font-medium`}
          >
            <li>//home</li>
            <li>//expertise</li>
            <li>//work</li>
            <li>//experience</li>
            <li>//contact</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
