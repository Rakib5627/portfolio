import img1 from "../../assets/html.2ba4fabc69a89a8f71e6.png";
import img2 from "../../assets/css.69a82c2d9e45c933a9cb.png";
import img3 from "../../assets/Bootstrap.cb1aa7ebab86974f5bb0.png";
import img4 from "../../assets/tailwind.e47ac876b8d4d0bba47a.png";
import img5 from "../../assets/javascript.1ccd6ef9bb1f9c84ef00.png";
import img6 from "../../assets/react.0cf951a69d8e58f83f9d.png";
import img7 from "../../assets/node.952a9ea986dcfa5229ad.png";
import img8 from "../../assets/mongo.2a1528ddc31d4ce8518d.png";
import img11 from "../../assets/next-js-icon-logo-EE302D5DBD-seeklogo.com.png";
import img9 from "../../assets/firebase.209703cedf1b1a96bc52.png";
import img10 from "../../assets/github.3b9e32903aa89111875d.png";
import img12 from "../../assets/JWT.98c3e1ce59aa0bd9a30b.png";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";




const SKills = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id='skills' className="mx-2 max-w-5xl md:mx-auto">

            <p className="text-xl text-center md:text-5xl">My Skills</p>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img1} alt='HTML' />
                            <p className='my-4'>HTML</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img2} alt='CSS' />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>
                    
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img4} alt='Tailwind' />
                            <p className='my-4'>Tailwind CSS</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img5} alt='Js' />
                            <p className='my-4'>Java Script</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img6} alt='React' />
                            <p className='my-4'>React.js</p>
                        </div>
                    </div>


                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img7} alt='Node' />
                            <p className='my-4'>Node.js</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto rounded-full' src={img8} alt='MongoDB' />
                            <p className='my-4'>Mongodb</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img9} alt='Firebase' />
                            <p className='my-4'>Firebase</p>
                        </div>
                    </div>

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img10} alt='Github' />
                            <p className='my-4'>Github</p>
                        </div>
                    </div>

                    

                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="2000"
                            className='shadow-md p-4'>
                            <img className='w-32 mx-auto' src={img12} alt='JSON Web Token' />
                            <p className='my-4'>JWT</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 h-32 mx-auto' src={img3} alt='Bootstrap' />
                            <p className='my-4'>Bootstrap</p>
                        </div>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <div data-aos="fade-right"
                            data-aos-duration="1500"
                            className='shadow-md p-4'>
                            <img className='w-32 h-32 mx-auto' src={img11} alt='Next.js' />
                            <p className='my-4'>Next.js</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default SKills;