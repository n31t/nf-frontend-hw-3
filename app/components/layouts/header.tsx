import Link from 'next/link';
import { useAuth } from '@/app/context/auth';


const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <header className="text-white body-font bg-zinc-900 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <Link href="/home" className="mr-5 hover:text-gray-400">Home</Link>
                <Link href="/posts" className="mr-5 hover:text-gray-400">Posts</Link>
                {/* <a className="mr-5 hover:text-gray-400">Third Link</a>
                <a className="hover:text-gray-400">Fourth Link</a> */}
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg> */}
                <img src="https://www.creativefabrica.com/wp-content/uploads/2021/01/23/Letter-S-SS-Logo-Design-Simple-Vector-Graphics-8004602-1.jpg" className="w-14 h-14 text-white p-2 bg-black rounded-full" alt="logo" />
                <span className="ml-3 text-xl text-white">smartpost</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">

                {isAuthenticated ? (
                    <button
                        onClick={logout}
                        className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0"
                    >
                        Logout
                    </button>
                ) : (
                    <Link href="/login">
                        <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-800 rounded text-base mt-4 md:mt-0">
                            Login
                        </button>
                    </Link>
                )}
                {/* <Link href="/login" >
                <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-800 rounded text-base mt-4 md:mt-0">Login
                </button>
                </Link> */}
                </div>
            </div>
        </header>
    )
}

export default Header;