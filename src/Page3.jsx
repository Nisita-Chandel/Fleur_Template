import React from 'react'

const Page3 = () => {
    const arr = [{
        img : "https://i.pinimg.com/1200x/66/c2/5a/66c25a34ef6f756dbdc51aa92f1d02a5.jpg",
        heading : "Custom Bouquets",
        text : "Favourite flower for your special day or the perfect decoration for your next business event",
        btn : "READ MORE"
    },
     {
        img : "https://i.pinimg.com/1200x/1f/8f/cb/1f8fcb15a6b60b7701c9324ff2886dfd.jpg",
        heading : "Occasion Flowers",
        text : "Favourite flower for your special day or the perfect decoration for your next business event",
        btn : "READ MORE"
     },
   {
        img : "https://i.pinimg.com/1200x/7a/b1/88/7ab1882c5192dbbc73324043fc1335cb.jpg",
        heading : "Premade Bouquets",
        text : "Favourite flower for your special day or the perfect decoration for your next business event",
        btn : "READ MORE"
    },

]



  return (
     <div className='bg-[#EFE2D9] flex flex-row '>
        { arr.map((elem,idx) =>(


       <div className='bg-black h-100 w-90 ml-30 rounded-t-full mb-20 overflow-hidden ' key ={idx} >
            <img className='' src= {elem.img} alt="" />
         
           <div className='absolute top-300 bg-[#E6CDB9] w-90 h-41 text-center ' >
             <h1 className='mt-5 text-2xl'>{elem.heading}</h1>
             <h1 className='text-sm mt-2'>{elem.text}</h1>
             <button className='text-[15px] mt-2'>{elem.btn}</button>
            </div>
        </div>
  ))}

    
     </div> 
  )
}

export default Page3















