"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { blog_data } from '../../../Assets/assets'
import { assets } from '../../../Assets/assets'
import Footer from '../../../components/footer'
import Link from 'next/link'

const Page = ({params}) => {

   const [data, setData] = useState(null)
   const fetchBlogData = ()=>{
    for (let i=0; i<blog_data.length; i++){
        if(blog_data[i].id == params.blogId){
            setData(blog_data[i])
            break;
   }
  }
}
   useEffect(()=>{
      fetchBlogData()
   },[])

  return (
   data?
     <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-12'>
       <div className='flex justify-between items-center'>
         <Link href={'/'}>
           <Image src={assets.logo} alt='logo' width={180} className='w-[130px] sm:w-auto'/>
         </Link>
           <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='arrow'/></button>
       </div>
       <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
          <Image src={data.author_img} alt='author' width={60} height={60} className='mx-auto mt-6 border border-white rounded-full' />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
       </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 '>
           <Image className='border-4 border-white' src={data.image} alt='blog' width={1280} height={720}/>
           <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
           <p>{data.description}</p>
           <h3 className='my-5 text-[18px] font-semibold '>{data.title}</h3>
           <p className='my-5'>{data.description}</p>
           <div className='my-24'>
              <p className='text-black font font-semibold my-4'>Share this article</p>
              <div className='flex'>
                 <Image src={assets.twitter_icon} alt='twitter' width={50}/>
                 <Image src={assets.facebook_icon} alt='instagram' width={50}/>
                 <Image src={assets.googleplus_icon} alt='google' width={50}/>
              </div>
           </div>
           
    </div>
    <Footer/>
    </>:<></>
    
  )
}

export default Page;