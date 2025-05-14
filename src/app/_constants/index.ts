export const projects = [
  {
    id: "1",
    title: "Developer Blogging Website (Hashnode)",
    description:
      "A developer blogging website where developers can write and share their thoughts and ideas. AI powered content generation system, custom build notion like editor and many more.",
    why_i_build: ["Just Loved the Hashnode UI"],
    tech: [
      "Next.js",
      "Tailwaind.css",
      "Drizzle-ORM",
      "Prisma",
      "TRPC",
      "Stripe",
      "Next.auth",
    ],
    image: "/work/1.png",
    link: {
      github: "https://github.com/ujen5173/hashnode",
      live: "https://hashnode-t3.vercel.app",
    },
    startedBuilding: "May 25, 2023",
    endingDate: "Apr 15, 2023",
    onGoing: false,
    onPause: false,
  },

  {
    id: "3",
    title: "[theReadora]",
    description:
      "Readora is a storytelling platform where users can read, write, and share stories across various genres. Best alternative to wattpad, webnovels, royalroads and other platforms.",
    why_i_build: [
      "Alternative to Wattpad, cause their UI/UX sucks",
      "Understanding about handing large application",
      "Multiple database handling",
      "Build a improved platform that prioritizes user experience",
      "Explore about AI content generation",
    ],
    inspiration:
      "The Readora: Taking a page from The Social Network, where it all begins.",
    tech: [
      "Next.js",
      "Tailwaind.css",
      "Prisma-ORM",
      "AI21 Studio",
      "Supabase",
      "Uploadthing",
      "Stripe",
      "Next.auth",
      "...",
    ],
    image: "/work/3.png",
    link: {
      github: "https://github.com/ujen5173/-theReadora-",
      live: "https://thereadora.vercel.app",
    },
    startedBuilding: "Apr 15, 2025",
    endingDate: null,
    onGoing: true,
    onPause: false,
  },
  {
    id: "4",
    title: "Velocit - Vehicle Rental Platform",
    description:
      "A platform for  connecting users with rental shops to rent bikes, scooters, cars, and more based on location and duration.",
    why_i_build: [
      "Identified a Market Gap",
      "Build a production ready application",
      "Learn about the payment gateway",
      "Deep dive into all things",
    ],
    tech: [
      "Next.js",
      "Shadcn-UI",
      "Trpc",
      "T3-stack",
      "Nodemailer",
      "Drizzle orm",
      "Esewa Payment Integration",
      "Cloudinary",
      "Leaflet Map",
    ],
    image: "/work/5.png",
    link: {
      github: "https://github.com/ujen5173/velocit",
      live: "https://www.velocit.me",
    },
    startedBuilding: "Nov 26, 2024",
    endingDate: null,
    onGoing: true,
  },
  {
    id: "2",
    title: "Hotel Booking Application (Airbnb)",
    description:
      "A hotel booking application where users can book hotels and manage their bookings. This application has a custom build calendar and amazing animations.",
    why_i_build: [
      "Gain Experience in building animations",
      "Learn about the calendar system",
    ],
    tech: ["Next.js", "Tailwaind.css", "Framer motion"],
    image: "/work/4.png",
    link: {
      github: "https://github.com/ujen5173/airbnb-clone",
      live: "https://airbnb-clone-zeta-drab.vercel.app/",
    },
    startedBuilding: "Nov 3, 2022",
    endingDate: "Dec 7, 2022",
    onGoing: false,
    onPause: false,
  },
];

export const selectedProjects = projects.slice(0, 3);
