import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";
import Pic1 from "../../public/Pic1.jpg";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2">
            <span className="text-xl">
              Welcome To My{" "}
              <span className="text-green-700 text-xl">Portfolio</span>
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello! Myself Akshdeep Yadav and I am currently pursuing B.Tech
              From Institute of Engineering and Technology, Lucknow.
            </p>
            <p className="text-sm md:text-md text-justify">
              I am a full stack web developer and is familiar with MERN Stack
              and its technologies. I try to keep my code simple and clean.
            </p>
            <p className="text-sm md:text-md text-justify">
              This is my portfolio website. Below, there is some more
              information about me. I have also attached my MERN Stack projects.
              In case, you have any query or want to collaborate, just fill out
              the form in contact section and submit.
            </p>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                {/*social media icons*/}
                <ul className="flex space-x-5">
                  <a href="https://www.linkedin.com/in/akshdeep-yadav-4305912a0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                    <li className="text-2xl cursor-pointer hover:scale-110 duration-200">
                      <FaLinkedin />
                    </li>
                  </a>
                  {/* <a href="#">
                  <li className="text-2xl cursor-pointer hover:scale-110 duration-200">
                    <FaTelegram />
                  </li>
                  </a> */}
                  <a href="https://github.com/Akshdeep2002" target="_blank">
                  <li className="text-2xl cursor-pointer hover:scale-110 duration-200">
                    <FaGithub />
                  </li>
                  </a>
                  {/* <a href="#">
                  <li className="text-2xl cursor-pointer hover:scale-110 duration-200">
                    <SiGmail />
                  </li>
                  </a> */}
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5 text-2xl cursor-pointer">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 mr-20 order-1">
            <img
              className="md:h-[400px] md:w-[300px] h-[400px] w-[300px] ml-18 rounded-full"
              src={Pic1}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
