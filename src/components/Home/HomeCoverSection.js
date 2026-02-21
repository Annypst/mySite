"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
//更换封面图像


const HomeCoverSection = () => {
  // 轮播图数据
  const images = [
    { src: "/coverpic/image.png", alt: "封面图片", title: "Java后端开发学习路线", link: "/bloghtml/xuexiluxian.html" },
    { src: "/coverpic/cover2.png", alt: "封面图片", title: "匹诺康尼之夜：与流萤的美好时光", link: "/mysite" },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 3秒切换一次

    return () => clearInterval(interval);
  }, [images.length]);

  // 手动切换
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (

    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
            
            {/* 轮播图片 */}
            {images.map((image, index) => (
              <Image 
                key={index}
                src={image.src}
                alt={image.alt}
                fill
                className={`w-full h-full object-center object-cover rounded-3xl -z-10 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
                priority={index === 0}
              />
            ))}
     
        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
            <a href={images[currentIndex].link} className='no-underline text-light'>
                <h1 className='coverimg' style={{ fontSize: '30px' }}>{images[currentIndex].title}</h1>
                <h2>点击此处查看</h2>
            </a>
        </div>

        {/* 轮播控制按钮 */}
        <button 
          onClick={handlePrev}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10'
          aria-label="上一张"
        >
          :
        </button>
        <button 
          onClick={handleNext}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10'
          aria-label="下一张"
        >
          :
        </button>

        {/* 轮播指示器 */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`切换到图片 ${index + 1}`}
            />
          ))}
        </div>
    </article>
    </div>

  )
}

export default HomeCoverSection