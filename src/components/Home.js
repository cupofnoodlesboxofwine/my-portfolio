import React from 'react'
import { SocialIcon } from "react-social-icons";


export default function Home() {


  return (
    <main>

      <section id="description">
         <h1 className="title">Hi, I'm Derick.</h1>
         <p className="desc">I'm a full-stack developer</p>
         <p className="desc-2">I have a deep interest in every stage of development from client-side user interactions to server-side API design and development.</p>

         <div id="contact">

           <a href="https://github.com/cupofnoodlesboxofwine" className="git">
            <SocialIcon url="https://github.com/cupofnoodlesboxofwine"  target="_blank" className="github" bgColor="#1f1f1f" fgColor="#fff" style={{ height: 40, width: 40 }} />
            <p>Github</p>
           </a>

         </div>
      </section>


      <section id="projects">

      <article className="relative shadow-xl p-10">

        <h3 className="text-white-800 text-2xl font-bold mb-2 hover:text-red-700">
          <a href="https://github.com/cupofnoodlesboxofwine/loruki" target="_blank" rel="noopener noreferrer">
            Loruki
          </a>
        </h3>

        <div className="text-white-500 text-xs">
          <p className="my-6 ml-0 text-lg text-white-700 leading-relaxed">
            Cloud Hosting Demo Site
          </p>
          <div className=" ml-0 flex justify-between">
            <a href="https://friendly-fermi-9bbd3f.netlify.app/index.html" rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400"> View The Project </a>
          </div>

        </div>
      </article>

      <article className="relative shadow-xl p-10">

        <h3 className="text-white-800 text-2xl font-bold mb-2 hover:text-red-700">
          <a href="https://github.com/cupofnoodlesboxofwine/LiveChat" target="_blank" rel="noopener noreferrer">
          Live Chat
          </a>
        </h3>

        <div className="text-white-500 text-xs">
          <p className="my-6 ml-0 text-lg text-white-700 leading-relaxed">
            Multi-user, Multi-room chat using Socket.io
          </p>
          <div className=" ml-0 flex justify-between">
            <a href="http://livechat5.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400"> View The Project </a>
          </div>

        </div>
      </article>

      <article className="relative shadow-xl p-10">

        <h3 className="text-white-800 text-2xl font-bold mb-2 hover:text-red-700">
          <a href="https://github.com/cupofnoodlesboxofwine/expense-tracker" target="_blank" rel="noopener noreferrer">
          Expense Tracker
          </a>
        </h3>

        <div className="text-white-500 text-xs">
          <p className="my-6 ml-0 text-lg text-white-700 leading-relaxed">
            Add or subtract values stored in MongoDB
          </p>
          <div className=" ml-0 flex justify-between">
            <a href="https://expensetrackerreact5.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400"> View The Project </a>
          </div>

        </div>
      </article>

      <article className="relative shadow-xl p-10">

        <h3 className="text-white-800 text-2xl font-bold mb-2 hover:text-red-700">
          <a href="https://github.com/cupofnoodlesboxofwine/StoryBooks" target="_blank" rel="noopener noreferrer">
          Story Books
          </a>
        </h3>

        <div className="text-white-500 text-xs">
          <p className="my-6 ml-0 text-lg text-white-700">
            Create, edit, and delete stories through an account linked to your Google account
          </p>
          <div className=" ml-0 flex justify-between">
            <a href="http://storybooks5.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400"> View The Project </a>
          </div>

        </div>
      </article>


      </section>

    </main>
  )
}
