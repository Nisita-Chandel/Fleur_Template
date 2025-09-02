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















// import React from 'react';

// const Page3 = () => {
//   const arr = [
//     {
//       img: "https://i.pinimg.com/1200x/66/c2/5a/66c25a34ef6f756dbdc51aa92f1d02a5.jpg",
//       heading: "Custom Bouquets",
//       text: "Favourite flower for your special day or the perfect decoration for your next business event",
//       btn: "READ MORE"
//     },
//     {
//       img: "https://i.pinimg.com/1200x/1f/8f/cb/1f8fcb15a6b60b7701c9324ff2886dfd.jpg",
//       heading: "Occasion Flowers",
//       text: "Favourite flower for your special day or the perfect decoration for your next business event",
//       btn: "READ MORE"
//     },
//     {
//       img: "https://i.pinimg.com/1200x/7a/b1/88/7ab1882c5192dbbc73324043fc1335cb.jpg",
//       heading: "Premade Bouquets",
//       text: "Favourite flower for your special day or the perfect decoration for your next business event",
//       btn: "READ MORE"
//     },
//   ];

//   return (
//     <div className="bg-[#EFE2D9] p-5 flex flex-row gap-30 items-center">
//       {arr.map((elem, idx) => (
//         <div
//           key={idx}
//           className="relative bg-black h-[400px] w-[30%]  rounded-t-full mb-5 overflow-hidden"
//         >
//           {/* Image */}
//           <img
//             className="w-full h-full object-cover"
//             src={elem.img}
//             // alt={elem.heading}
//           />

//           {/* Overlay Content */}
//           <div className="absolute bottom-0 bg-[#E6CDB9] w-full h-[150px]  text-center p-2">
//             <h1 className="text-xl mt-5 font-bold">{elem.heading}</h1>
//             <p className="text-sm">{elem.text}</p>
//             <button className="mt-1 text-base font-semibold hover:underline">
//               {elem.btn}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page3;

