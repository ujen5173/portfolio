export const projects = [
  {
    id: "1",
    title: "Developer Blogging Website (Hashnode)",
    description:
      "A developer blogging website where developers can write and share their thoughts and ideas. AI powered content generation system, custom build notion like editor and many more.",
    tech: [
      "Next.js",
      "Tailwaind.css",
      "Drizzle-ORM",
      "PRisma",
      "TRPC",
      "Stripe",
      "Next.auth",
    ],
    image: "/work/1.png",
    link: {
      github: "https://github.com/ujen5173/hashnode",
      live: "https://hashnode-t3.vercel.app",
    },
  },
  {
    id: "2",
    title: "Hotel Booking Application (Airbnb)",
    description:
      "A hotel booking application where users can book hotels and manage their bookings. This application has a custom build calendar and amazing animations.",
    tech: ["Next.js", "Tailwaind.css", "Framer motion"],
    image: "/work/4.png",
    link: {
      github: "https://github.com/ujen5173/airbnb-clone",
      live: "https://airbnb-clone-zeta-drab.vercel.app/",
    },
  },
  {
    id: "3",
    title: "ShopMingle",
    description: "An e-commerce website where users can buy and sell products.",
    tech: [
      "Next.js",
      "Tailwaind.css",
      "Drizzle-ORM",
      "Shadcn-UI",
      "Stripe",
      "Next.auth",
    ],
    image: "/work/2.png",
    link: {
      github: "https://github.com/ujen5173/shopmingle",
      live: "https://shopmingle.vercel.app",
    },
  },
  {
    id: "4",
    title: "Portfolio",
    description: "My personal portfolio website.",
    tech: ["Next.js", "Tailwaind.css", "Framer motion"],
    image: "/work/3.png",
    link: {
      github: "https://github.com/ujen5173/portfolio",
      live: "https://ujenbasi.vercel.app",
    },
  },
];

export const selectedProjects = projects.slice(0, 3);
