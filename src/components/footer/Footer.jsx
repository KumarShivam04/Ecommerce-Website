import React, { useContext } from 'react'
import myContext from "../../context/myContext";
import { Link } from 'react-router-dom'
import img1 from "../../assets/pay.png";

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
    <div>
        <footer className="text-gray-300 body-font bg-pink-400"
        style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', 
        color: mode === 'dark' ? 'white' : '', }}>
            <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" 
                        style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
                        <nav className="list-none mb-10">
                        
                            <li>
                            <Link to="/"
                                className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>Home</Link>
                            </li>
                             <li>
                                    <Link to="/user-dashboard" 
                                    className="text-gray-300 hover:text-gray-900" 
                                    style={{ color: mode === 'dark' ? 'white' : '' }}>Order</Link>
                                </li>
 
                            <li>
                                <Link to="/allProduct"
                                className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>AllProduct</Link>
                            </li>

                            <li>
                                <Link to="/cart" 
                                className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" 
                        style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/returns" 
                                className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                            </li>
                            <li>
                                <Link to={'/aboutus'} className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                            </li>
                            <li>
                                <Link to={'/privacy'} className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                            </li>
                            <li>
                                <Link to={'/contactus'} className="text-gray-300 hover:text-gray-900" 
                                style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                            </li>      
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-large text-gray-900 tracking-widest text-sm mb-3" 
                    style={{ color: mode === 'dark' ? 'white' : '' }}>
                        ADDRESS
                    </h2>
                    <nav className="list-none mb-10">
                    <li>
                        <h3>Shivam Palace</h3>
                        <p>Ground Floor, Apartment No 11</p>
                        <p>Back side AMC Engineering College,Kalkare</p>
                        <p>Near Government School, Kalkare</p>
                         <p>Bangalore, Karnataka</p>
                         <p>560083</p>
                    </li>
                </nav>
                </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-2">
                            <img src={img1}  alt="Payment Methods" 
                                    style={{ width: '150%', height: '100%' }} />
                            </div>
                </div>
            </div>

            <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', 
                color: mode === 'dark' ? 'white' : '', }}>
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                         <div className="flex ">
                            <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' 
                            style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1>
                        </div> 
                    </Link>  

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" 
                    style={{ color: mode === 'dark' ? 'white' : '' }}>© 2024 E-bharat —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" 
                        className="text-gray-600 ml-1" target="_blank" 
                        style={{ color: mode === 'dark' ? 'white' : '' }}>www.ebharat.com</a>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a 
                                href="https://www.facebook.com/profile.php?id=61566453939901"  
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-blue-900">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>

                        <a
                                href="https://x.com/home"  
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" ml-3 text-black hover:text-blue-900">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 
                                10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 
                                0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.instagram.com/ebharat844/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 text-black hover:text-red-900">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/e-bharat-project-938657330/din.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 text-black hover:text-red-900">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} 
                            className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 
                                2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer;