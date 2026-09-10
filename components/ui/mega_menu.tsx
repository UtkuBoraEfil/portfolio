import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { menu_items } from "@/lib/data";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export function Menu() {
  return (
    <section className={`text-[17px] ${robotoMono.className}`}>
      <div className="md:flex group hidden ">
        {menu_items.map((item) => (
          <Link
            href={item.href}
            className="group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300 ease pr-8"
            key={item.id}
          >
              <p className="text-[10px] text-right leading-none opacity-50">
                0{item.id}
              </p>
              <p className=" ">{`// ${item.title}`}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
