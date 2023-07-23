import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 md:text-2xl">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-2xl text-xl font-bold py-4">
            Fast, Flexible financing for
          </p>
          <Typed
            className="md:text-4xl sm:text-2xl text-xl font-bold md:pl-3 pl-2 text-[#00df9a]"
            strings={["B2B", "B2C", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] text-xl w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black hover:bg-[#00ff9d] hover:scale-105 ease-in-out duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
