import logo from "../assets/TKL.webp";
import { FaGithub, FaInstagram, FaLinkedin, FaBriefcase } from "react-icons/fa"; // Replaced Twitter with Naukri (briefcase icon)

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* Increased size here */}
         <img 
            src={logo} 
            className="mx-2 w-50 h-auto"  // <-- Tailwind (w-20 = 80px wide, h-auto keeps aspect ratio)
            alt="Logo" 
          />

        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tejkumar-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-blue-600 transition-colors" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Tejkumar-hacker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:text-gray-800 transition-colors" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/tejkumaryadhav"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="hover:text-pink-500 transition-colors" />
        </a>

        {/* Naukri */}
        <a
          href="https://www.naukri.com/mnjuser/profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Naukri"
        >
          <FaBriefcase className="hover:text-green-600 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;