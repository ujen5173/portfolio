import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-24 md:py-36">
        <h1 className="text-center text-2xl font-semibold mb-8 text-slate-50">
          Works
        </h1>
        <h1 className="text-center text-6xl font-semibold mb-8 text-slate-50">
          Selected Projects
        </h1>

        <div className="">
          <Link href="https://github.com/ujen5173">
            <div className="rounded-xl border custom-cursor-area border-slate-600/40 p-12 mb-36 sticky top-28 left-0 bg-gray-900 z-[70]">
              <h1 className="text-3xl text-slate-50 font-semibold mb-4">
                Developer Blogging Website (Hashnode)
              </h1>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Next.js
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Tailwaind.css
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Drizzle-ORM
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  TRPC
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Stripe
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Next.auth
                </span>
              </div>

              <Image
                src="/work/1.png"
                alt="work"
                className="w-full object-cover rounded-xl"
                width={1200}
                height={600}
              />
            </div>
          </Link>
          <Link href="https://github.com/ujen5173">
            <div className="rounded-xl border custom-cursor-area border-slate-600/40 p-12 mb-36 sticky top-28 left-0 bg-gray-900 z-[80]">
              <h1 className="text-3xl text-slate-50 font-semibold mb-4">
                Hotel Booking Application (Airbnb)
              </h1>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Next.js
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Tailwaind.css
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Framer motion
                </span>
              </div>

              <Image
                src="/work/1.png"
                alt="work"
                className="w-full object-cover rounded-xl"
                width={1200}
                height={600}
              />
            </div>
          </Link>
          <Link href="https://github.com/ujen5173">
            <div className="rounded-xl border custom-cursor-area border-slate-600/40 p-12 mb-36 sticky top-28 left-0 bg-gray-900 z-[90]">
              <h1 className="text-3xl text-slate-50 font-semibold mb-4">
                Portfolio Website (Personal)
              </h1>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Next.js
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Tailwaind.css
                </span>

                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Framer motion
                </span>
              </div>

              <Image
                src="/work/1.png"
                alt="work"
                className="w-full object-cover rounded-xl"
                width={1200}
                height={600}
              />
            </div>
          </Link>
          <Link href="https://github.com/ujen5173">
            <div className="rounded-xl border custom-cursor-area border-slate-600/40 p-12 sticky top-28 left-0 bg-gray-900 z-[100]">
              <h1 className="text-3xl text-slate-50 font-semibold mb-4">
                Ecommerce Platform (ShopMingle)
              </h1>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Next.js
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Tailwaind.css
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Drizzle-ORM
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  TRPC
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Stripe
                </span>
                <span className="px-4 py-2 text-slate-300 rounded-md border border-slate-600/40 bg-slate-800 text-sm">
                  Next.auth
                </span>
              </div>

              <Image
                src="/work/1.png"
                alt="work"
                className="w-full object-cover rounded-xl"
                width={1200}
                height={600}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
