import React from 'react'
import BlogItem from './blog-item'
import { blog_data } from '@/Assets/assets'

const BlogList = () => {
  return (
    <div>
    <div className='flex justify-center gap-6 my-10'>
        <button className='bg-black text-white py-1 px-4 rounded-sm'>All </button>
        <button>Technology</button>
        <button>Startup</button>
        <button>Lifestyle</button>
        <button>Coding</button>
    </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.map((item, index)=>{
                return <BlogItem key={index} title={item.title} description={item.description} category={item.category} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default BlogList