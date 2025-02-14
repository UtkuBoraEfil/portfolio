import { Yellow_Circle } from "./ui/yellow_circle";
import { Navbar } from "./navbar";
import { InsideOfHero } from "./ui/inside-of-hero";

export function Hero () {
  return (
    <section className="relative min-h-screen min-w-full bg-cover bg-no-repeat bg-center bg-hero ">
        <Navbar/>
        <Yellow_Circle/>
        <div className="absolute w-full bg-gradient-hero">
            <InsideOfHero/>
        </div>
    </section>
  );
};
