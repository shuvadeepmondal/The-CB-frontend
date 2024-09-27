import React from "react";
import req_img from "../../assets/code-typing-animate.svg";
import TextS from "../utilis/TextS";
import Particlebg from "../Particlebg";


const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Particlebg />
      <div className="flex z-30 justify-center items-center flex-col sm:flex-row gap-2 sm:gap-[15rem] mt-[150px] sm:w-full mb-5">
        <div data-aos={'fade-right'}>
          <h1 className="font-semibold dark:text-white text-6xl text-gray-900 mb-1 md:text-7xl text-center sm:text-left sm:text-5xl text-grey-900">
            Welcome To our 
          <div className=" text-6xl mt-2 ml-2 text-cyan-500">
          <TextS/>
          </div>
          </h1>
          <p className="ml-2 text-3xl mt-5"> Join our community where creativity<br/> meets code and innovation begins.</p>

          
        </div>
        <div className="h-[250px] md:block mb-[150px]">
          <img
            className="w-full h-[480px]"
            src={req_img}
            alt="Register illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
