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
    //  <div className='bg-[#EFE2D9] '>
     <div className='bg-[#EFE2D9] '>
        <div className='bg-black h-80 w-90 ml-30 rounded-t-full mb-30 overflow-hidden' >
                <img className='' src="https://i.pinimg.com/1200x/1f/8f/cb/1f8fcb15a6b60b7701c9324ff2886dfd.jpg" alt="" />

            <h1>custom </h1>
            <h1>text</h1>
            <button>read more</button>
        </div>
    
     </div> 
  )
}

export default Page3




{/* <div className='bg-red-300 w-full h-full'>
{arr.map((elem,idx) =>{
    <div className='ml-30 flex gap-3' key= {idx}>
        <img className='w-90 h-20 object-cover ' src = {elem.img} alt="" />
        <h1 className='absolute ml-14 mt-5 text-[#605f5f] text-2xl text-center w-50'>{elem.heading}</h1>
        <p className='absolute ml-15 top-430 text-gray-500 text-black text-sm'>{elem.text}</p>
        <button className='absolute ml-15 top-430 text-gray-500 text-black text-sm'>{elem.btn}</button>
    </div>
})}
</div>  */}


