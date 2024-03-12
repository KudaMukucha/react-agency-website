import { Carousel } from "flowbite-react";
import banner1 from '../assets/banner-1.png'
import banner2 from '../assets/banner-2.png'


export default function Home() {
  return (
    <div className="bg-neutralSilver">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <div>
            <img src={banner1} alt="banner 1" className="w-96 h-96" />
         </div>
          {/* hero text */}
          <div className="md:w-1/2">
                <h2 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                    Lessons and insights <span className="text-brandPrimary leading-snug">from 8 years ago.</span>
                </h2>
                <p className="text-neutralDGrey text-base mb-8">
                    Where business is taken to greater heights:site or social media.
                </p>
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">Register</button>
            </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <div>
            <img src={banner2} alt="banner 2" className="w-96 h-96" />
         </div>
          {/* hero text */}
          <div className="md:w-1/2">
                <h2 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                   Let's Learn and Earn <span className="text-brandPrimary leading-snug">in 4 months.</span>
                </h2>
                <p className="text-neutralDGrey text-base mb-8">
                    Where business is taken to greater heights:site or social media.
                </p>
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">Register</button>
            </div>
        </div>
       
      </Carousel>
        </div>
    </div>
  )
}
