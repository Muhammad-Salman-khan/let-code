import LoginForm from "./_LoginForm/Login-form";

const page = () => {
  return (
    <main className="flex-grow flex flex-col md:flex-row">
      {/* Left Panel: Visual/Brand */}
      <section className="hidden md:flex w-1/2 bg-[#0040e0] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="grid grid-cols-8 h-full w-full border-l border-t border-white/20">
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
            <div className="border-r border-b border-white/20"></div>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-lg">
          <div className="bg-white p-8 border-2 border-[#1c1b1b] shadow-[4px_4px_0px_0px_#1c1b1b]">
            <img
              alt="Developer Coding Environment"
              className="w-full aspect-square object-cover border-2 border-[#1c1b1b] mb-8"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujFZdftX-X0fqlSfCvYqFH3cFICSZD6eb9pawP_abC9IBtujWMOp-eUnCxVJR_sD5iM2R-BY4ZVtCEdPIG1nfB2lfagWIXuDJuvwmU_t_McF2CE_6lIhTCmWYM_qUd1pa9yPG6Shzyv7RDFszmqC7G61IDPK2jVhRaPZz9KuLt0omZgIcOPOht71-n0lwN5SykrhRazUKmGUjbYmRybXrYNUYdyNE0Q7TOLcJP47PAlwKY1fSitbUVAOw"
            />
            <h1 className="text-[32px] font-bold leading-none mb-4 text-[#1c1b1b]">
              ENGINEER THE FUTURE.
            </h1>
            <p className="text-[18px] text-[#434656]">
              Join the elite community of developers solving the world's most complex algorithmic challenges.
            </p>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#dfed00] text-[#1b1d00] px-6 py-3 border-2 border-[#1c1b1b] font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_#1c1b1b]">
            v2.4.0_STABLE
          </div>
        </div>
      </section>

      {/* Right Panel: Login Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-[#fcf9f8]">
        <LoginForm />
      </section>
    </main>
  );
};

export default page;
