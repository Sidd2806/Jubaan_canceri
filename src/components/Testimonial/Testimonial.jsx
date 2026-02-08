const Testimonial = () => {
  const data = [
    {
      text: `Ek baar try kiya...
ab har din
regret karta hoon.`,
      author: "Anonymous",
      note: "(Because shame)",
    },
    {
      text: `Taste mast hai.
dr. bola "bas!",
maine bola "ab toh aadat hai".`,
      author: "-Uncle Ji",
      note: "42",
    },
    {
      text: `Ghutka Ek Prem Katha:
Prem Kahani.`,
      author: "-Nigga Beauty Plus",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-15">
      <div className=" text-xl sm:text-2xl md:text-4xl font-semibold">
        <h1>TESTIMONIAL</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 md-gap-10">
      {
        data.map((item,index)=>{
          return(
              <div key={index} className="w-full max-w-full sm:max-w-xs md:max-w-3xs flex flex-col justify-center items-center text-center p-3 gap-6 md:gap-8 bg-[#FCECD9] rounded-xl">
                <p className="flex gap-1 text-yellow-400 text-base sm:text-lg md:text-xl"> ⭐⭐⭐⭐⭐</p>
                <span className="  text-base md:text-lg font-semibold leading-relaxed">
                  {item.text}
                </span>
                <h2 className="text-sm text-gray-900"><span> {item.author}</span> {item.note} </h2>
              </div>
          )
        })
      }
      </div>
      </div>
  );
};

export default Testimonial;
