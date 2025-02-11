import React from "react";
import mern from "../../public/mern.png";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: mern,
      name: "Prescripto",
      text: "MERN Stack project in which a user can book an appointment with a doctor.",
      link: "https://prescripto-frontend-pink.vercel.app/",
    },
    {
      id: 2,
      logo: mern,
      name: "Tomato",
      text: "A food-delivery website to order food and make the payment.",
      link: "https://food-del-frontend-brbk.onrender.com/",
    },
    {
      id: 3,
      logo: mern,
      name: "Youtube Clone",
      text: "Different videos with likes, dislikes and comments display just like youtube.",
      link: "https://you-tube-clone-iota-livid.vercel.app/",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItems.map(({ id, logo, name, text, link }) => (
            <div
              className="md:w-[200px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-500"
              key={id}
            >
              <img
                className="w-[110px] h-[110px] p-1 rounded-full border-[2px]"
                src={logo}
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p>{text}</p>
              </div>
              <div className="justify-around space-x-4">
                <a href={link} target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    View
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
