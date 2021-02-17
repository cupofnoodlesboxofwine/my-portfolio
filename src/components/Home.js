import React from 'react'
import image from '../tricirsqu.jpg'


export default function Home() {

  const h1Text = `Hi, I'm Derick`

  return (
    <main>
      <img src={image} alt="" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-gray-300 font-bold cursive leading-none lg:leading-snug home-name">{h1Text}</h1>
      </section>
    </main>
  )
}
