import Image from "next/image";

const TechStack = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-2">
        <h1 className="text-center text-2xl font-semibold mb-8 text-slate-50">
          MY GO-TO TECHNOLOGIES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              width="600"
              height="300"
              className="h-7 w-fit"
              src="/tech-logo/nextjs-13.svg"
              alt="Next.js"
              title="Next.js"
            />
          </div>
          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              src="/tech-logo/tailwindcss.svg"
              alt="Tailwind.css"
              width="600"
              height="300"
              className="h-7 w-fit"
              title="Tailwind.css"
            />
            <span className="text-xl font-semibold text-slate-50">
              Tailwind CSS
            </span>
          </div>

          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              src="/tech-logo/typescript.svg"
              alt="Typescript"
              width="600"
              height="300"
              className="h-7 w-fit"
              title="Typescript"
            />
            <span className="text-xl font-semibold text-slate-50">
              Typescript
            </span>
          </div>
          <div className="rounded-md border border-slate-600/40 py-8 bg-slate-800 flex items-center justify-center gap-4">
            <Image
              src="/tech-logo/prisma-2.svg"
              alt="Prisma ORM"
              width="600"
              height="300"
              className="h-7 w-fit"
              title="Prisma ORM"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
