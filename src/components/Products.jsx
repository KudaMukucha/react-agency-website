import mobileImg from '../assets/mobile.png'
import { FaArrowRight } from "react-icons/fa6";
import productImg from '../assets/product.png'

export default function Products() {
  return (
    <div id='products'>
        {/* about text */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
            <div className='md:w-11/12 mx-auto flex flex-colv md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={mobileImg} alt="" className='w-96'/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 '>We are the last code benders</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga amet eius molestiae, delectus mollitia ratione labore, quisquam odit nemo fugit sint recusandae dicta maxime saepe tenetur veritatis sunt exercitationem expedita tempora voluptatum esse non fugiat iusto possimus! Voluptatibus, ea aliquid.</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                </div>
            </div>
        </div>

        {/* company stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                    <img src={productImg} alt="" />
                </div>
                {/* stats */}
                <div className='md:w-2/3 mx-auto'>
                    <div>
                        <p className='md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo quo sapiente iure eum laboriosam mollitia, quam ut id non quos iste minus, saepe error eius quasi consectetur! Molestias, consectetur ullam aperiam qui dolores tempora, quis earum eaque commodi reiciendis saepe quos aliquid unde natus.</p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                        <p className='text-sm mb-8 text-neutralDGrey'>Lorem ipsum dolor sit amet.</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src="/src/assets/logo1.png" alt="" className='w-9 h-9 cursor-pointer' />
                                <img src="/src/assets/logo2.png" alt="" className='w-9 h-9 cursor-pointer' />
                                <img src="/src/assets/logo3.png" alt="" className='w-9 h-9 cursor-pointer' />
                                <img src="/src/assets/logo4.png" alt="" className='w-9 h-9 cursor-pointer' />
                                <img src="/src/assets/logo5.png" alt="" className='w-9 h-9 cursor-pointer' />
                                <img src="/src/assets/logo6.png" alt="" className='w-9 h-9 cursor-pointer' />
                                <div className='flex items-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary text-sm hover:text-neutral-700'>
                                        Meet all customers {" "}
                                        <FaArrowRight className='inline-block ml-2'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
