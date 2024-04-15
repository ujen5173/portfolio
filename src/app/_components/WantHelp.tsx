const WantHelp = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-8 text-slate-50">
        Want help in the following area?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl border bg-slate-800 transition border-slate-600/40 p-6">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-50 mb-2 md:mb-4 uppercase">
            Frontend development
          </h1>
          <h3 className="text-base md:text-lg lg:text-xl text-slate-300">
            I can help you with your frontend development needs. I have
            experience in building responsive and user-friendly websites.
          </h3>
        </div>
        <div className="rounded-2xl border bg-slate-800 transition border-slate-600/40 p-6">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-50 mb-2 md:mb-4 uppercase">
            Backend development
          </h1>
          <h3 className="text-base md:text-lg lg:text-xl text-slate-300">
            I can help you with your backend development needs. I have
            experience in building scalable and secure backend systems.
          </h3>
        </div>
        <div className="rounded-2xl border bg-slate-800 transition border-slate-600/40 p-6">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-50 mb-2 md:mb-4 uppercase">
            Database Design
          </h1>
          <h3 className="text-base md:text-lg lg:text-xl text-slate-300">
            I can help you with your database design needs. I have experience in
            designing scalable and reliable database.
          </h3>
        </div>
      </div>
    </>
  );
};

export default WantHelp;
