"use client"

import BlogList from "@/components/blog-list";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
  );
}
