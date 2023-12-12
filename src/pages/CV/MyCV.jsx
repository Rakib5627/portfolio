import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../../public/Resume.pdf"


const MyCV = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-3 items-center text-2xl font-semibold">
            <a href="https://www.linkedin.com/in/md-rakibul-islam-83177829b"><FaLinkedin /></a>
           <a href="https://github.com/Rakib5627"> <FaGithub /></a>
            <FaEnvelope />
            </div>
            <a href={resume} download='resume.pdf'>
            <button className="flex items-center gap-2 text-2xl font-semibold text-blue-950  px-1 border-blue-950 rounded hover:bg-blue-950 hover:text-white">
                <p>Resume</p><FaDownload />
            </button>
            </a>
        </div>
    );
};

export default MyCV;