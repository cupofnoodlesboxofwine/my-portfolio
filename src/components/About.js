import React, { useEffect, useState } from 'react'
import tcs from "../mimmoPaladino.jpeg"
import bg from "../mun1.jpg"

export default function About() {

  const info = {
    firstName: `Derick`,
    lastName: `Alfaro`,
    bio:`Fullstack Developer
     Interest in every stage of development from client-side user interactions to server-side API design and development.`
  }

  const [author, setAuthor] = useState(info)

  if(!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <img src={bg} alt="bg" className="absolute w-full "/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-500 rounded-lg p-8 md:flex shadow-2xl md:p-20">
          <img src={tcs} className="rounded mx-auto md:ml-0 mb-5 justify-center md:flex text-center w-32 h-32 lg:w-64 lg:h-64 md:mr-8" alt={author.name}/>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-white mb-4">
              {`Hey there, I'm `}
              <span className="text-white">{author.firstName}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <div className="text-white">
               Fullstack Developer <br></br>
               With an interest in every stage of development from client-side user interactions to server-side API design and development.
               </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
