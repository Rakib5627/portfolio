import { useTypewriter } from "react-simple-typewriter";

import Navbar from "../Navbar/Navbar";
import image from "../../assets/IMG_20231205_203521.jpg";
import SKills from "../Skills/SKills";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import MyCV from "../CV/MyCV";

const Home = () => {

    const [text] = useTypewriter({
        words: ['Front End Web Developer', 'MERN Stack Web Developer'],
        loop: {},
    })

    return (

        <div id="home">
            <Navbar></Navbar>
            <div className="text-blue-950 text-center mt-20 mx-2 max-w-5xl md:mx-auto pb-20">
                <p className="text-xs md:text-lg font-thin">Hello, my name is </p>
                <h3 className="text-2xl md:text-5xl font-bold" >Md. Rakibul Islam</h3>
                <h4 className="md:text-4xl">I am a</h4>
                <h4 className="md:text-3xl">{text}.</h4>

            </div>

            <MyCV></MyCV>




            <div className="flex items-center mt-32 mx-2 max-w-5xl md:mx-auto pb-20 gap-20 text-blue-950">

                <div className="flex-1 w-1/2">
                    <p className="text-xl">
                        I am a 22 years old Front End web
                        developer. Currently,
                        I am focusing on building
                        responsive web
                        applications and
                        learning Back End web
                        development.
                    </p>
                    <p>
                        I am 3rd year student of B.Sc (Engineering) in Electrical and Electronic Engineering.
                    </p>
                </div>
                <div>
                    <img src={image} alt="" className="rounded-full w-72 h-80" />
                </div>
            </div>


            <div className="mx-2 max-w-5xl md:mx-auto">
                <SKills></SKills>

                <p id="projects" className="mt-24 text-4xl text-center font-semibold">Projects</p>
                <Projects></Projects>
                <About></About>
                <Contact></Contact>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - Md Rakibul Islam</p>
                </aside>
            </footer>


        </div>
    );
};

export default Home;