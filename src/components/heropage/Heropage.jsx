const Heropage = () => {
  return (
    <section className="min-h-screen pt-16 flex flex-col overflow-hidden  w-full">
      <div className="flex-1 flex flex-col items-center justify-center gap-5 md:gap-8 px-4 md:px-8 ">
        <h1 className=" text-3xl sm:text-5xl md:text-7xl font-bold text-white text-center">
          <span className="text-[#41130A]">Bolo Jubaan</span> Canceri
        </h1>
        <p className="max-w-2xl text-base sm:text-lg md:text-xl font-semibold text-center leading-relaxed">
          Handcrafted with 0% shame and 100% “kya hi farak padta hai” energy.
          “Side effects include: regret, stains, and family disappointment.”
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <button className="bg-[#FBD3AC] text-base md:text-xl font-semibold rounded-md px-4 py-2 md:px-6 md:py-2 cursor-pointer hover:bg-green-200">
            Read Regrets
          </button>
          <button className="bg-[#f94b00] rounded-md px:6 md:px-10 py-3 text-base md:text-xl font-semibold text-white cursor-pointer hover:bg-[#7c2703]">
            Die Now
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center overflow-hidden ">
        <img
          src="/assets/hero_page.png"
          alt="Hero"
          className="w-full max-w-md sm:max-w-xl md:max-w-6xl object-contain"
        />
      </div>
    </section>
  );
};

export default Heropage;
