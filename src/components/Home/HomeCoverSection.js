
import Image from 'next/image';
import React from 'react'
//更换封面图像
import coverImage from './cover.jpg';
//轮播图
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HomeCoverSection = () => {

  return (

    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />
            <Image 
          src={coverImage}  // 使用导入的图片
          alt="封面图片"
          fill
          className='w-full h-full object-center object-cover rounded-3xl -z-10'
          priority
        />
        {/* //轮播图 */}
         {/* <Carousel
  opts={{
    align: "start",
    loop: true,
  }} 
  className='w-full h-full object-center object-cover rounded-3xl -z-10'
>
  <CarouselContent className='w-full h-full object-center object-cover rounded-3xl -z-10'>
    <CarouselItem className='w-full h-full object-center object-cover rounded-3xl -z-10'><img src="https://th.bing.com/th/id/R.a527b360fe317d1ed2d80a49d51c9c1c?rik=SQr3Q9XFQzrf0A&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50075%2f6521.jpg_wh1200.jpg&ehk=7cbm1dF83MThf5g4EdvNfSIBgLkHs0931e6bQnc7sug%3d&risl=&pid=ImgRaw&r=0"/></CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel> */}
       
        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
            <h1 className='coverimg' style={{ fontSize: '30px' }}>杭州之行-乌镇</h1>
        </div>
    </article>
    </div>

  )
}

export default HomeCoverSection