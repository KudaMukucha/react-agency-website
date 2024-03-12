
export default function Services() {
    const services = [
        {
            id:1,
            title:'Small Medium Enteprises',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, iure.',
            image:'/src/assets/icons/sme.png'
        },
        {
            id:2,
            title:'National Associations',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, iure.',
            image:'/src/assets/icons/national.png'
        },
        {
            id:3,
            title:'Government Institutions',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, iure.',
            image:'/src/assets/icons/government.png'
        },
    ]
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
            <h2 className="text-2xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
            <p className="text-neutralGrey">We have been working with some of Fortune 500+ companies</p>
          
            {/* company logos */}
            <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <img src="/src/assets/logo1.png" className="w-14 h-14" alt="logo-1" />
                <img src="/src/assets/logo2.png" className="w-14 h-14" alt="logo-2" />
                <img src="/src/assets/logo3.png" className="w-14 h-14" alt="logo-3" />
                <img src="/src/assets/logo4.png" className="w-14 h-14" alt="logo-4" />
                <img src="/src/assets/logo5.png" className="w-14 h-14" alt="logo-5" />
                <img src="/src/assets/logo6.png" className="w-14 h-14" alt="logo-6" />
                <img src="/src/assets/logo7.png" className="w-14 h-14" alt="logo-7" />
            </div>
        </div>

        {/* services cards */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-2xl text-neutralDGrey font-semibold mb-3">Manage your entire business using a single system</h2>
            <p className="text-neutralGrey">Who is NextCen suitable for?</p>
        </div>

        {/* cards */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {
            services.map((service,i)=>{
                return(
                    <div key={i} className={'px-4 py-8 text-center md:w-[300px] mx-auto md:h-auto rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'}>
                        <div>
                            <div className="bg-[#e8f5e9] mb-4 mx-auto rounded-tl-3xl rounded-br-3xl w-14 h-14">
                                <img src={service.image} alt="service icon" className="-ml-5" />
                            </div>
                            <h4 className="text-xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
                                <p className="text-sm text-neutralGrey">{service.description}</p>
                        </div>
                        </div>
                )
            })
        }
        </div>
    </div>
  )
}
