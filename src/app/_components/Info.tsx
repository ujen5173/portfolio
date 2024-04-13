const Info = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex-col md:flex-row flex md:items-center md:justify-between">
          <h3 className="text-slate-100 text-sm mb-2 md:mb-0">
            Hey, I&apos;m Ujen Basi
          </h3>

          <div className="flex items-center gap-2">
            <span className="available-dot"></span>
            <h3 className="text-slate-100 text-sm">
              I&apos;m always available for amazing ideas.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
