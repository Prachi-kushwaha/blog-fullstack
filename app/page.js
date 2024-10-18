"use client"
// import React from "react";
import Header from "../components/header";
import BlogList from "../components/blog-list";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
  );
}
