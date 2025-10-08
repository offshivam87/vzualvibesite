import React from 'react'

const Heading = () => {
    return (
        <div >
            <h1 className="md:px-[15rem] px-[0.5rem] md:text-[1rem]  text-[0.6rem] text-white text-center pb-5 flex items-center justify-center gap-2">
  <span className="bg-[#FBC740] font-poppins rounded-full md:w-3 md:h-3 w-2 h-2 inline-block"></span>
  Quality videos delivered smoothly, without freelancer drama.
</h1>
            <h1 className='text-4xl md:text-[5rem] md:px-[15rem] text-white font-poppins text-center px-[0.5rem]'>Reliable editing for top-tier creators and brands</h1>

            <div className="btns  flex gap-4 justify-center  w-full mt-10 mb-3">
                <button className='bg-[#FBC740] font-poppins  text-[1.5rem] py-1.5   rounded-full px-5'>Hire us</button>
                <button className='text-white font-poppins text-[1.6rem] '>Our Portfolio</button>
            </div>
            <div className="customers   md:h-[4rem] flex justify-center md:w-[25vw] mx-auto w-full h-[2.5rem] ">
                <div className="img   md:w-[18vw] w-[20vw] md:pl-5 " ><img src="https://ik.imagekit.io/vzualvibe/freepik__background__52407.png?updatedAt=1759659654303" alt="" className='w-full h-full object-cover' /> </div>
                <div className="txt w-[35vw] md:w-[25vw]  text-[0.8rem] md:text-2xl my-auto text-center text-white font-poppins md:pr- pr-6"> 40+ Happy Clients </div>

            </div>

        </div>
    )
}

export default Heading
