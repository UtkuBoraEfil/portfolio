import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const menu_items = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "expertise",
  },
  {
    id: 3,
    title: "work",
  },
  {
    id: 4,
    title: "experience",
  },
  {
    id: 5,
    title: "contact",
  },
];

export function Menu() {
  return (
    <nav className={`text-[17px] ${robotoMono.className}`}>
      <ul className="md:flex group hidden ">
        {menu_items.map((item) => (
          <li
            className="group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300 ease"
            key={item.id}
          >
            <a href={`/${item.title}`} className="w-full inline-block pr-8">
              <p className="text-[10px] text-right leading-none opacity-50">
                0{item.id}
              </p>
                <p className=" ">{`// ${item.title}`}</p>
              </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
