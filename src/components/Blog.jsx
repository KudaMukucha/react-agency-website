import { FaArrowRight } from "react-icons/fa6"

export default function Blog() {
    const blogs = [
        {
            id:1,
            title:'Creating streamlined safeguarding process.',
           image:'/src/assets/blog1.jpg' 
        },
        {
            id:2,
            title:'Safeguarding responsibilities and how can you.',
           image:'/src/assets/blog2.jpg' 
        },
        {
            id:3,
            title:'Revamping businesses process using AI',
           image:'/src/assets/blog3.jpg' 
        },

    ]
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="text-center md:w-1/2 mx-auto">
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing.</h2>
                <p className="text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni quia ea autem reprehenderit atque harum reiciendis veritatis consequuntur, dolore dignissimos fuga, repellendus dolorem fugiat illum, aut suscipit quibusdam quod quasi ratione debitis! Delectus quasi quaerat fuga similique doloribus voluptas.
                </p>
        </div>

        {/* all blogs */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center">
            {
                blogs.map((blog,i)=>{
                    return(
                        <div key={i} className={'mx-auto relative mb-12 cursor-pointer'}>
                            <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300" />
                            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-lg md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                                <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                                <div className='flex items-center justify-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary text-sm hover:text-neutral-700'>
                                       Read More {" "}
                                        <FaArrowRight className='inline-block ml-2'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
