import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from '../assets/web-design.png'
import { Link } from 'react-router-dom';
import { FaXmark,FaBars } from 'react-icons/fa6'

export default function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isSticky,setIsSticky] = useState(false)

    //set toggle menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }


    useEffect(() => {
        const handleScroll =()=>{
            if(window.scrollY > 100){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return()=>{
            window.addEventListener('scroll', handleScroll)
        }
    }, []);

    //nav items array
    const navItems =[
        {
           name:'Home',
            path:'home'
        },
        {
           name:'About',
            path:'about'
        },
        {
           name:'Services',
            path:'/services'
        },
        {
           name:'Products',
            path:'/products'
        },
        {
           name:'Contact',
            path:'/contact'
        },
    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300':''}`}>
            <div className='flex items-center justify-between text-base gap-8'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-2'>
                    <img src={logo} alt="logo" className='w-10 h-10 inline-block items-center' />
                    <span className='text-[#263238]'>NextCent</span>
                </a>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map((link,i)=>{
                            return(
                            <Link key={i} to={link.path} spy={true} smooth={true} offset={-100} className={'block text-base text-gray-900 hover:text-brandPrimary first:font-medium'} >
                                {link.name}
                            </Link>
                            )
                        })
                    }
                </ul>

                {/* btn for large screens */}
                <div className='hidden lg:flex space-x-12 items-center'>
                    <a href="" className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>
                        Sign Up
                    </button>
                </div>

                {/* menu btn for only mobile devices */}
                <div className='md:hidden'>
                    <button className='text-neutralDGrey focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
                         {
                            isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars  className='w-6 h-6'/>)
                         }
                    </button>
                </div>
            </div>

            {/* nav items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0':'hidden'}`}>
            {
                        navItems.map((link,i)=>{
                            return(
                            <Link key={i} to={link.path} spy={true} smooth={true} offset={-100} className={'block text-base text-white hover:text-slate-200 first:font-medium'} >
                                {link.name}
                            </Link>
                            )
                        })
                    }
            </div>
        </nav>
    </header>
  )
}
