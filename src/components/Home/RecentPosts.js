import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";


const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          一些文章
        </h2>
       
      </div>
     
    </section>
  );
};

export default RecentPosts;
