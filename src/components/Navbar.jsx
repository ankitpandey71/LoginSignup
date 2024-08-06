import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-custom-border bg-custom-linear-gradient border-r-2 mt-6 ml-4 mr-4 p-4 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#"
            className="text-yellow-50 font-sans text-4xl uppercase font-bold hover:text-yellow-400"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-yellow-50 font-sans text-4xl uppercase font-bold hover:text-yellow-400"
          >
            FORMATS
          </a>
          <a
            href="#"
            className="text-yellow-50 font-sans text-4xl uppercase font-bold hover:text-yellow-400"
          >
            PLANS
          </a>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="text-yellow-500 border font-sans text-4xl uppercase font-bold pl-8 pr-8 border-yellow-500 p-2 rounded hover:bg-gray-900 hover:border-yellow-50 hover:text-yellow-50">
                LOGIN
              </button>
            </Link>
            <button className=" text-yellow-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
