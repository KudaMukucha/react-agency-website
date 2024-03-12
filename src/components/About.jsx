import aboutImg from '../assets/about.png'
export default function About() {
  return (
    <div>
        {/* about text */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
            <div className='md:w-11/12 mx-auto flex flex-colv md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={aboutImg} alt="" className='w-96'/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 '>The unseen of spending three years at pixelgrade.</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolores soluta omnis labore distinctio facilis dolor quas nobis, temporibus explicabo enim incidunt illum excepturi architecto quo alias nesciunt corporis quaerat!</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                </div>
            </div>
        </div>

        {/* company stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3 '>Help your business <span className='text-brandPrimary'> to reinvent iself.</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* stats */}
                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/customer.png" alt="" />
                            <div>
                                <h4 className='text-xl text-neutralDGrey font-semibold'>2,000</h4>
                                <p>Customers</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/project.png" alt="" />
                            <div>
                                <h4 className='text-xl text-neutralDGrey font-semibold'>192</h4>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/office.png" alt="" />
                            <div>
                                <h4 className='text-xl text-neutralDGrey font-semibold'>4</h4>
                                <p>Branches</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src="/src/assets/icons/award.png" alt="" />
                            <div>
                                <h4 className='text-xl text-neutralDGrey font-semibold'>13</h4>
                                <p>Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
