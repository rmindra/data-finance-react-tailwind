import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div id="cards" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 hover:bg-slate-100 ease-in-out duration-300">
          <img
            className="w-20 m-auto mt-[-3rem] bg-white"
            src={Single}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black hover:bg-[#00ff9d] hover:scale-105 ease-in-out duration-300">
            Start Trial
          </button>
        </div>
        {/* Double */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-xl hover:scale-105 hover:bg-slate-300 duration-300">
          <img
            className="w-20 m-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="double"
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted user</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 bg-black hover:bg-slate-900 hover:scale-105 ease-in-out duration-300">
            Start Trial
          </button>
        </div>
        {/* Triple */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 hover:bg-slate-100 duration-300">
          <img
            className="w-20 m-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="triple"
          />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted user</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black hover:bg-[#00ff9d] hover:scale-105 ease-in-out duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
