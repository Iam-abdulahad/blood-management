import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }


    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Log Out Successfully',
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch(error => console.log(error));
    }


    return (
        <nav className="bg-slate-800 text-white sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className=" hover:text-rose-700 font-bold text-xl">BloodCare BD</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center">
                            <Link to="/" className=" hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/donors" className=" hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium">Donors</Link>
                            <Link to="/faq" className=" hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
                            <Link to="/team" className=" hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium">Team</Link>
                            <Link to="/about_us" className=" hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>

                            {
                                user ?
                                    <button className=' hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium' onClick={handleLogOut}>Log out</button>
                                    :
                                    <>
                                        <Link to="/login" className=' hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                                    </>
                            }

                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} type="button" className="bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white">
                            <span className="sr-only">Open mobile menu</span>
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/donors" className="hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium">Donors</Link>
                        <Link to="/faq" className="hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
                        <Link to="/team" className="hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium">Team</Link>
                        <Link to="/about_us" className="hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        {
                            user ?
                                <button className='hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium' onClick={handleLogOut}>Log out</button>
                                :
                                <>
                                    <Link to="/login" className='hover:text-rose-700 block px-3 py-2 rounded-md text-base font-medium'>Login</Link>
                                </>
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavMenu;