import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"
import express from "../../public/express.png"
import mongodb from "../../public/mongodb.jpg"
import tail from "../../public/tailwindcss.webp"
import python from "../../public/python.webp"
import c from "../../public/c.png"

const Experience = () => {

  const cardItems=[
    {
      id:1,
      logo:html,
      name:"Html",
    },
    {
      id:2,
      logo:css,
      name:"CSS",
    },
    {
      id:3,
      logo:javascript,
      name:"Javascript",
    },
    {
      id:4,
      logo:reactjs,
      name:"ReactJs",
    },
    {
      id:5,
      logo:node,
      name:"NodeJs",
    },
    {
      id:6,
      logo:express,
      name:"ExpressJs",
    },
    {
      id:7,
      logo:mongodb,
      name:"MongoDB",
    },
    {
      id:8,
      logo:tail,
      name:"TailwindCSS",
    },
    {
      id:9,
      logo:c,
      name:"C++",
    },
    {
      id:10,
      logo:python,
      name:"Python",
    },
  ]

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p>I have more than 1 year of experience in below technologies</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
          {
            cardItems.map(({id,logo,name})=>(
              <div className='flex flex-col items-center justify-center rounded-full border-[2px] rounded-lg shadow-md p-1 cursor-pointer hover:scale-110 duration-500' key={id}>
                <img className='w-[150px] p-1 rounded-full border-[2px]' src={logo} alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience
