import SignUpForm from "./_SignUpForm/SignUpForm";

const page = () => {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side: Brand Visual & High-Contrast Identity */}
      <section className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-screen bg-[#1c1b1b] flex flex-col items-center justify-center p-8 overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-[#1c1b1b]">
        {/* Background Image Reference */}
        <div className="absolute inset-0 opacity-50 mix-blend-overlay">
          <img
            alt=""
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujFZdftX-X0fqlSfCvYqFH3cFICSZD6eb9pawP_abC9IBtujWMOp-eUnCxVJR_sD5iM2R-BY4ZVtCEdPIG1nfB2lfagWIXuDJuvwmU_t_McF2CE_6lIhTCmWYM_qUd1pa9yPG6Shzyv7RDFszmqC7G61IDPK2jVhRaPZz9KuLt0omZgIcOPOht71-n0lwN5SykrhRazUKmGUjbYmRybXrYNUYdyNE0Q7TOLcJP47PAlwKY1fSitbUVAOw"
          />
        </div>
        <div className="relative z-10 max-w-xl text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-2 bg-[#5d6300] text-white font-black text-sm tracking-widest uppercase mb-4">
            Protocol: Access Granted
          </div>
          <h1 className="text-[64px] font-bold leading-none tracking-tighter text-[#fcf9f8]">
            JOIN THE ELITE. <br />
            <span className="text-[#dfed00]">ENGINEER THE FUTURE.</span>
          </h1>
          <p className="text-[18px] text-[#c4c5d9] max-w-md font-medium leading-tight">
            Enter the high-performance ecosystem designed for precision engineering and structural code mastery.
          </p>
          <div className="flex gap-4 pt-8">
            <div className="w-12 h-1 bg-[#0040e0]"></div>
            <div className="w-12 h-1 bg-[#5d6300]"></div>
            <div className="w-12 h-1 bg-[#ae0008]"></div>
          </div>
        </div>
        {/* Neo-Bauhaus Decorative Element */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="w-32 h-32 border-4 border-[#0040e0] rounded-full opacity-20"></div>
          <div className="w-16 h-16 bg-[#ae0008] absolute -bottom-4 -right-4"></div>
        </div>
      </section>

      {/* Right Side: System Registration Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#fcf9f8]">
        <SignUpForm />
      </section>
    </main>
  );
};

export default page;
