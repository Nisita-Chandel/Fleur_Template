import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#EFE2D9] flex gap-10 justify-between items-center fixed'>
        <img className='h-25 ml-20 ' src="https://sproviero-type.com/_astro/fleur.B9lZftXp_19naF5.svg" alt="" />
      <div className='flex gap-30 mr-30 text-sm font-[500] '>
       <h1 className='hover:bg-[#E6CDB9] px-4 py-2'>COLLECTION</h1>
       <h1 className='hover:bg-[#E6CDB9] px-4 py-2'>ABOUT</h1>
       <h1 className='hover:bg-[#E6CDB9] px-4 py-2 '>CONTACT</h1>
       <h1 className='hover:bg-[#E6CDB9] px-4 py-2'>SHOP</h1>
      </div>
    </div>
  )
}

export default Navbar
