import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            { title }
        </li>
    );
}

const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);// value and func to update it

    return (
        <nav className='w-full flex justify-between items-center p-4 md:justify-center'>
            <div className='flex-initial justify-center items-center md:flex-[0.5]'>
                <img src={ logo } alt='logo' className='w-32 cursor-pointer'></img>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={ item + index } title={ item } />
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className='flex relative'>
                { toggleMenu 
                ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={ () => setToggleMenu(false) } /> 
                : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={ () => setToggleMenu(true) } /> }

                { toggleMenu && ( // code will only execute if toggleMenu is true:
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                    '>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={ () => setToggleMenu(false) } />
                        </li>

                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={ item + index } title={ item } classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}
            </div>

        </nav>
    )
}

export default Navbar;