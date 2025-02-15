import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { roboto } from "@/app/fonts";
import Link from "next/link";
import { menu_items } from "@/lib/data";

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
          <div
            className={`${roboto.className} text-start space-y-4 text-lg font-medium`}
          >
            {menu_items.map((item) => (

                <Link
                  href={item.href}
                  key={item.id}
                >
                  <p className=" ">{`// ${item.title}`}</p>
                </Link>

            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
