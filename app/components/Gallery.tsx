"use client";

import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards"; // Updated import path

export default function Gallery() {
  const images = [
    "/Events/2.JPEG",
    "/Events/3.JPEG",
    "/Events/4.JPEG",
    "/Events/5.JPEG",
    "/Events/6.JPEG",
    "/Events/7.JPEG",
    "/Events/9.JPG",
    "/Events/10.JPG",
    "/Events/11.JPG",
    "/Events/14.JPEG",
    "/Events/24.JPEG"
    ];
  
  // Split images into two rows
  const firstRowImages = images.slice(0, Math.ceil(images.length/2));
  const secondRowImages = images.slice(Math.ceil(images.length/2));

  return (
    <section className="px-4 py-12 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mb-8 sm:mb-16">
        <h1 className="text-[50px] sm:text-[100px] md:text-[120px] xl:text-[140px] font-extrabold tracking-tight text-gray-800 dark:text-gray-200">
          GLIMPSE
        </h1>
      </div>
      <div className="space-y-6 sm:space-y-10">
        {/* First Row */}
        <div className="h-[15rem] sm:h-[20rem] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={firstRowImages} direction="right" speed="normal" className="w-full" />
        </div>

        {/* Second Row */}
        <div className="h-[15rem] sm:h-[20rem] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={secondRowImages} direction="left" speed="normal" className="w-full" />
        </div>
      </div>
    </section>
  );
} 