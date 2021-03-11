import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Post() {
  const [postData, setPost] = useState(null)

  useEffect(() => {

          // .then((data) => setPost(data))
          // .catch(console.error)

          //<h3 className="text-5xl flex justify-center cursive" style={{marginBottom: 10}}>Blog Posts</h3>
          //<h4 className="text-lg text-gray-600 flex justify-center mb-12">{`Welcome to my page of blog posts!`}</h4>
  })

  return (
    <main className="bg-gray-100 min-h-screen p-12">
        <section className="container mx-auto">

          <h1 className='flex justify-center'>Coming Soon..</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            { postData && postData.map((post, index) => (
            <article>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-400" key={index}>
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounder-r object-cover absolute"/>
                <span className="block relative h-full flex justfy-end items-end pr-4 pb-4">
                  <h3 className="text-white-800 text-lg font-blog px-3 py-4 bg-gray-700 text-white bg-opacity-80 rounded">{post.title}</h3>
                </span>
              </span>
              </Link>
            </article>
          ))}

          </div>
        </section>
    </main>
  )
}
