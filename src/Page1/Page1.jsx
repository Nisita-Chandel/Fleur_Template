import React from 'react'
import img1 from "../assets/img3.png";

const Page1 = () => {
  return (
    <div>
      <div>
       <h1 className='absolute top-90 text-white text-4xl ml-140'>CUSTOM DRIED FLOWER BOUQUETS</h1>
       <h1 className='absolute top-100 mt-5 text-white text-2xl ml-170'>Free delivery on orders over $79</h1>
       <h1 className='absolute top-120 text-black text-[12px] ml-200 bg-[#EEE3DA] px-4 py-2'>SHOP</h1>

     <div className='absolute bottom-10 ml-40 text-white text-xl'>

       <i className="ri-instagram-line "></i>
       <i className="ri-twitter-line ml-4"></i>
       <i className="ri-facebook-fill ml-4"></i>
       <i className="ri-google-fill ml-4"></i>
       </div>
       <h1 className='absolute bottom-15 ml-300 text-white'> DRIED PAMPAS COLLECTION</h1>

       <img className='absolute top-30 ml-270 w-130 h-130 rotate-45 ' src={img1} alt="" />

      <img className = " h-200 w-full" src="https://flamel.app/api/images/1745681/binary?collection=true" alt="" />
      


      </div>

      
    </div>
  )
}

export default Page1
