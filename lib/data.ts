//data.ts

export const professionalExperience = [
  {
    title: "Internship",
    years: "07/2023 - 09/2025",
    city: "Ankara",
    country: "Turkey",
    website: "https://www.notuscreative.com/tr",
    description:
      "Full-stack developer intern at Notus Creative Works, a digital agency. Progressed from vanilla HTML/CSS/JavaScript to Express.js, React (with Vite), Next.js, and NestJS over about two years. Built the responsive frontend for Reve Sport — a US-based startup connecting young athletes with sports scholarship and education opportunities — using React, Next.js, and Tailwind CSS.",
    image: "",
    areas: [
      "Nextjs",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "NestJS",
      "Express.js",
      "Tailwind",
    ],
  },
  {
    title: "112 Emergency Call Center",
    years: "06/2025 - 07/2025",
    city: "Ankara",
    country: "Turkey",
    website: "",
    description:
      "Software engineering intern (20 working days). Built an internal data management tool in Java and Spring Boot, using an SFTP client to pull data and display it in dynamic UI tables. Worked with test/sample data — no production usage.",
    image: "",
    areas: ["Java", "Spring Boot"],
  },
  {
    title: "University",
    years: "2022 - 2026",
    city: "Ankara",
    country: "Turkey",
    website: "https://www.cankaya.edu.tr/",
    image: "/images/featured/cankaya.png",
    description:
      "B.Sc. Computer Engineering, Çankaya University. Graduated 06/2026.",
    areas: ["C", "C++"],
  },
];

export const works = [
  {
    title: "Yummy",
    image: "/images/works/yummy.png",
    category: "Web Development",
    card_design: "type1",
    link: "https://yummy-ruddy.vercel.app/",
    group: "projects",
  },
  {
    title: "Todo App",
    image: "/images/works/todo.png",
    category: "Web Design & Development ",
    card_design: "type1",
    link: "https://todo1-vpug.vercel.app/about",
    group: "learning",
  },
  {
    title: "Password Generator",
    image: "/images/works/password-generator.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://utkuboraefil.github.io/password-generator/",
    group: "learning",
  },
  {
    title: "Reve Sport",
    image: "/images/works/revesport.png",
    category: "Web Design & Development — Client Project",
    card_design: "type2",
    link: "https://revesports.vercel.app/",
    group: "projects",
  },
  {
    title: "Aser",
    image: "/images/works/aser.png",
    category: "Web Development — Internship Project",
    card_design: "type2",
    link: "https://aser-zeta.vercel.app/",
    group: "projects",
  },
  {
    title: "Tip Calculator",
    image: "/images/works/tip-calculator.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://utkuboraefil.github.io/tip-calculator/",
    group: "learning",
  },
  {
    title: "Tic Tac Toe",
    image: "/images/works/tictactoe.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://utkuboraefil.github.io/TicTacToe/",
    group: "learning",
  },
  {
    title: "Frontend Quiz",
    image: "/images/works/frontendquiz.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://quiz.utkubora.fun/",
    group: "learning",
  },
  {
    title: "Age Calculator",
    image: "/images/works/age-calculator.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://utkuboraefil.github.io/age-calculator/",
    group: "learning",
  },
  {
    title: "Simon Game",
    image: "/images/works/simon-game.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://utkuboraefil.github.io/simon_game/",
    group: "learning",
  },
  {
    title: "Dice Game",
    image: "/images/works/dice-game.png",
    category: "Web Design & Development",
    card_design: "type1",
    link: "https://utkuboraefil.github.io/diceGame/",
    group: "learning",
  },
];

// The exact hand-arranged "All" layout (left: mixed/feature cards, right: a
// stacked column of smaller ones) — used only for the unfiltered "All" view.
export const works_right = [works[2], works[7], works[8], works[9], works[10]];
export const works_left = [
  works[0],
  works[1],
  works[3],
  works[4],
  works[5],
  works[6],
];

// Filter categories used by the "Filter by" bar in My Work.
export const work_categories = [
  { key: "all", label: "All" },
  { key: "projects", label: "Projects" },
  { key: "learning", label: "Learning Projects" },
] as const;

export const featured = [
  {
    img: "/images/featured/Linkedin.png",
    link: "https://www.linkedin.com/in/utku-bora-efil-51147b31a/",
  },
  {
    img: "/images/featured/hostinger-logo.svg",
    link: "https://hpanel.hostinger.com/",
  },
  {
    img: "/images/featured/GitHub_Logo_White.png",
    link: "https://github.com/UtkuBoraEfil",
  },
  {
    img: "/images/featured/vercel-logotype-dark.png",
    link: "https://vercel.com/utku-bora-efils-projects",
  },
  { img: "/images/featured/frontend-mentor-logo.svg", link: "" },
  {
    img: "/images/featured/upwork-logo.svg",
    link: "https://www.upwork.com/freelancers/~01619eb6dad5563f37?viewMode=1",
  },
];

export const menu_items = [
  {
    id: 1,
    title: "home",
    href: "/",
  },
  {
    id: 2,
    title: "expertise",
    href: "#expertise",
  },
  {
    id: 3,
    title: "work",
    href: "#work",
  },
  {
    id: 4,
    title: "experience",
    href: "#experience",
  },
  {
    id: 5,
    title: "contact",
    href: "#contact",
  },
];
