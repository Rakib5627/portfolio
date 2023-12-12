import { TbSquareLetterR } from "react-icons/tb";

const Navbar = () => {




    return (
        <div className="mx-2 max-w-5xl md:mx-auto">
            <div className="navbar bg=[#d9d9d9]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#home">Home</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#skills">Skills</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#projects">Projects</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#contact">Contact Me</a></li>
                        </ul>
                    </div>
                    <a className="text-4xl bg-blue-100"><TbSquareLetterR /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-2xl text-blue-950">
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#home">Home</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#skills">Skills</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#projects">Projects</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#about">About</a></li>
                        <li className=" px-1 rounded hover:bg-blue-950 hover:text-white"><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
                
            </div><hr />

        </div>
    );
};

export default Navbar;