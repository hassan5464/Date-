import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import {SplitText} from "gsap/all"

gsap.registerPlugin(SplitText) 

const Hero = () => {
  // gsap.to('#sky1',{
  //   x: -150,
  //   duration: 3,
  //   delay: 0.9,
  // });
  // gsap.to('#sky2',{
  //   x: 150,
  //   duration: 3,
  //   delay: 0.5,
  // })

  useLayoutEffect(()=>{

    const split = SplitText.create("#paragraph",{
    type: "words",

  });
  gsap.from(split.words,{
    y: 10,
    opacity: 0,
    filter: "blur(15px)",
    stagger: 0.05,
  });
    const splitHeader = SplitText.create("#header",{
    type: "words",
  });
  gsap.from(splitHeader.words,{
    y: 10,
    opacity: 0,
    filter: "blur(15px)",
    stagger: 0.05,
  })

  },[])
  





  return (
    <header className='w-screen h-dvh hero  '>
      <div className=' relative h-screen flex  flex-col pt-36 justify-center items-center'>
        {/* <div className='flex justify-between absolute   top-[150px]  left-0 right-0  w-screen'>
          <img id='sky1' src="./sky.png" alt="sky" className=' h-30 w-60  lg:w-90 lg:h-60 object-contain md:-translate-x-2/3' ></img>
          <img id="sky2" src="./sky.png" alt="sky" className=' h-30 w-60  lg:w-90 lg:h-60 object-contain md:translate-x-2/3' ></img>
        </div> */}
        <div className='w-2/3 min-h-92   text-center  top-[150px]  flex gap-6  flex-col  justify-center items-center'>
          <h1 id='header' className='text-5xl text-[#0E300F] font-bold leading-[1.3]'>A Bite Full Of All  <span className='bg-(--NavColor) backdrop-blur-lg px-5 py-2 border-(--NavBorder) rounded-full'> Nutritional</span> Values </h1>
          <p id="paragraph" className='text-(--main-color)'>it is a promise of complete nourishment in its simplest form. Each bite delivers a balanced blend of essential vitamins, minerals, proteins, and natural energy designed to fuel the body and support overall well-being.</p>
          <button className='bg-(--main-color) cursor-pointer px-6 py-3 text-white rounded-full'>Buy Now</button>
        </div>
      
      </div>
    </header>
  )
}

export default Hero