import navImg from "../../assets/vector1.png";

const BannerCard = ({ count, resolvedCount }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-5 mt-16">
        <div className="relative md:w-full max-w-2xl rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]" />

          <div className="absolute top-0 left-0 h-full flex items-center">
            <img src={navImg} alt="" className="h-full " />
          </div>

          <div className="absolute top-0 right-0 h-full flex items-center transform scale-x-[-1]">
            <img src={navImg} alt="" className="h-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center py-20">
            <h2 className="text-white text-2xl mb-4 font-semibold">
              In‑Progress
            </h2>
            <p className="text-white text-6xl font-semibold "> {count} </p>
          </div>
        </div>
        <div className="relative  md:w-full max-w-2xl rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]" />

          <div className="absolute top-0 left-0 h-full flex items-center">
            <img src={navImg} alt="" className="h-full " />
          </div>

          <div className="absolute top-0 right-0 h-full flex items-center transform scale-x-[-1]">
            <img src={navImg} alt="" className="h-full " />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center py-20">
            <h2 className="text-white text-2xl mb-4 font-semibold">Resolved</h2>
            <p className="text-white text-6xl font-semibold">{resolvedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
