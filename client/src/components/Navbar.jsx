import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    return (
        <nav className='w-full flex justify-between items-center p-4 md:justify-center'>
            <div className='flex-initial justify-center items-center md:flex-[0.5]'>
                <img src={ logo } alt='logo' className='w-32 cursor-pointer'></img>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={ item + index } title={ item } />
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;