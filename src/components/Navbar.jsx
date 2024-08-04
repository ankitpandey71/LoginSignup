const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-slate-600 to-gray-900 mt-5 ml-4 mr-4 p-4 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-yellow-500 hover:text-yellow-400">
            HOME
          </a>
          <a href="#" className="text-yellow-500 hover:text-yellow-400">
            FORMATS
          </a>
          <a href="#" className="text-yellow-500 hover:text-yellow-400">
            PLANS
          </a>
          <div className="flex items-center space-x-4">
            <button className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black">
              LOGIN
            </button>
            <button className="md:hidden text-yellow-500">
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
