import React from "react";

const Products = () => {
  const data = [
    {
      src: "/assets/cancerious_classic.png",
      last_name: "Classic",
      p: "Old-school taste for old-school uncles who say: “Hum toh bachpan se kha rahe.",
      badges: "Most Regretted",
    },
    {
      src: "/assets/cancerious_ultrapro_max.png",
      last_name: "Ultra Pro Max",
      p: "So powerful it makes your insurance agent block you.",
      badges: "Doctor's favourite Enemy",
    },
    {
      src: "/assets/cancerious_lemon_mint.png",
      last_name: "Lemon Mint",
      p: "Fresh breath for 2 minutes… then life updates stop.",
      badges: "Refreshing Disaster",
    },
    {
      src: "/assets/cancerious_habibi.png",
      last_name: "Habibi",
      p: "Comes with free advice like:“Gym-wym kuch nahi hota beta.”",
      badges: "Family Approved",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-5 md:gap-8 w-full py-12 md:py-20 ">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
        <h1 className="md:text-4xl sm:3xl text-xl font-semibold">Cancerious Products</h1>
        <p className=" text-center leading-relaxed w-full max-w-xl">
          Handcrafted with 0% shame and 100% <br />
          “kya hi farak padta hai” energy.
        </p>
      </div>
      {data.map((item,index) => {
        return (
          <div key={index} className="w-full flex flex-col md:flex-row gap-5 md:gap-10  p-4 md:p-6  max-w-4xl bg-[#FCECD9] rounded-4xl my-5">
            <div className="w-full md:w-1/3 flex  items-center justify-center mt-0 md:mt-3">
              <div>
                <img
                  src={item.src}
                  alt="ghutka khaini"
                  className="w-full max-w-40 sm:max-w-48 md:max-w-60 object-contain"
                />
              </div>
            </div>
            <div className=" w-full md:w-2/3  text-center md:text-left flex flex-col justify-center gap-2 md:gap-3 ">
              <h3 className=" text-lg sm:text-xl md:text-2xl font-semibold">
                <span className="text-[#E15315]">Cancerous</span>{" "}
                {item.last_name}
              </h3>
              <p className="text-sm font-normal leading-relaxed">{item.p}</p>
              <p className="text-sm">
                <span className="font-semibold">Badge:</span>
                <span className="text-[#E15315] font-medium">
                  {" "}
                  {item.badges}
                </span>
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="bg-[#E15315] w-auto sm:w-auto  rounded-md px-4 py-2 cursor-pointer text-white mr-4 hover:bg-[#7c2703]">
                  Die Now
                </button>
                <button className="bg-[] rounded-md px-4 py-2 text-black cursor-pointer bg-white hover:bg-gray-400">
                  Add to Regret
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
