import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold md:text-xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus recusandae tempore corrupti ab molestiae dolorem
            libero sequi cupiditate molestias, distinctio natus culpa id
            accusantium saepe facilis tenetur delectus incidunt obcaecati!
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 py-3 bg-black hover:bg-slate-900 hover:scale-105 ease-in-out duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
