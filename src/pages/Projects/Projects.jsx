import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/Screenshot 2023-12-12 075654.png";
import image2 from "../../assets/Screenshot 2023-12-12 075248.png";
import image3 from "../../assets/Screenshot 2023-12-12 075908.png";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";




const Projects = () => {
    return (
        <Swiper className="mySwiper">

       <SwiperSlide
            >
                <div className="flex flex-col items-center md:mx-24 my-16">
                    <img src={image1} alt="" />
                    <p className="py-8 text-xs md:text-base">The website is about an electronics shop website with the six popular brands of world.</p>
                    <div className="flex gap-2">
                        <a href="https://github.com/Rakib5627/electro-tech-shop">
                        <button className="border-2 px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">Code Link</button>
                        </a>
                        <a href="https://electro-tech-ee584.web.app/">
                        <button className="border-2 px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">Page Link</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
       <SwiperSlide
            >
                <div className="flex flex-col items-center md:mx-24 my-16">
                <img src={image2} alt="" />
                    <p className="py-8 text-xs md:text-base">Event Planner is about an event management website. Here organizes any type of social events like marriage , engagement , birthday parties etc.</p>
                    <div className="flex gap-2">
                        <a href="https://github.com/Rakib5627/event-planner">
                        <button className="border-2 px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">Code Link</button>
                        </a>
                        <a href="https://event-planner-33ad1.firebaseapp.com/">
                        <button className="border-2 px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">Page Link</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
       <SwiperSlide
            >
                <div className="flex flex-col items-center md:mx-24 my-16">
                <img src={image3} alt="" />
                    <p className="py-8 text-xs md:text-base">The website Hotel Grand is a sample website of a five star hotel. Here can be booked rooms and complete all the process.</p>
                    <div className="flex gap-2">
                        <a href="https://github.com/Rakib5627/hotel-grand">
                        <button className="border-2 px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">Code Link</button>
                        </a>
                        <a href="https://hotel-website-2fba0.web.app/">
                        <button className="border-2 px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">Page Link</button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        
    </Swiper>
    );
};

export default Projects;