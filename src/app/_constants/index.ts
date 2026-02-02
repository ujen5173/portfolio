export const projects = [
  {
    id: "1",
    title: "Developer Blogging Platform (Codexa)",
    description:
      "A blogging platform for developers to write, publish, and manage technical articles. Includes a custom editor inspired by Notion, article drafts, publishing flow, and optional AI-assisted writing tools.",
    why_i_build: [
      "Inspired by Hashnode’s clean reading and writing experience",
      "Academic project (6th semester – Project II)",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Drizzle ORM",
      "Drizzle",
      "tRPC",
      "Stripe",
      "NextAuth",
    ],
    image: "/work/1.png",
    link: {
      github: "https://github.com/ujen5173/codexa",
      live: "https://buildsmth.vercel.app",
    },
    startedBuilding: "Dec, 2025",
    endingDate: null,
    onGoing: true,
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
    startedBuilding: "Apr, 2025",
    endingDate: null,
    onGoing: false,
    onPause: true,
  },
  {
    id: "4",
    title: "Ridezio - Vehicle Rental Platform",
    description:
      "A platform for connecting users with rental shops to rent bikes, scooters, and more based on location and duration. Mobile version will be launching soon...",
    why_i_build: [
      "Identified a Market Gap",
      "Build a production ready application",
      "Learn about the payment gateway",
      "Users had no easy way to compare or book vehicles",
      "Inspired by how Airbnb solved similar problems for homes",
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
      "Expo",
      "React-Native",
    ],
    image: "/work/5.png",
    link: {
      github: "https://github.com/ujen5173/ridezio",
      live: "https://ridezio.vercel.app/",
    },
    startedBuilding: "Nov, 2024",
    endingDate: null,
    onGoing: true,
    onPause: true,
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
      live: "https://firebnb.vercel.app/",
    },
    startedBuilding: "Nov, 2022",
    endingDate: "Dec, 2022",
    onGoing: false,
    onPause: false,
  },
];

export const selectedProjects = projects.slice(0, 3);
