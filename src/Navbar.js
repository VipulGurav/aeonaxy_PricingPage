import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/img/logo.png " alt="logo" className="w-auto h-10" />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <div className="flex justify-between items-center">
            <div className="flex space-x-10"> {/* Apply flex and space-x-5 classes */}
              <select className="mr-5 hover:text-gray-900">
                <option value="general">Creation</option>
              </select>
              <select className="mr-5 hover:text-gray-900">
                <option value="general">Business</option>
              </select>
              <select className="mr-5 hover:text-gray-900">
                <option value="general">Growth</option>
              </select>
              <select className="mr-5 hover:text-gray-900">
                <option value="general">Resources</option>
              </select>
            </div>
            <div className="flex items-center space-x-10 mr-7"> {/* Apply flex and space-x-5 classes */}
              <a className="hover:text-gray-900 ml-5 font-extralight">|</a>
              <a className="hover:text-gray-900">Enterprise</a>
              <a className="hover:text-gray-900">Pricing</a>
              <a className="hover:text-gray-900">Support</a>
            </div>
          </div>


        </nav>
        
        <div className="mr-6 mt-3 text-xl ">
        {/* <i className="fas fa-globe" style={{ fontSize: '24px', color: 'blue' }}>
        </i> */}
        <FontAwesomeIcon icon={faGlobe} />

        </div>
        <button className="inline-flex items-center text-blue-500 border-2 border-blue-500 font-normal py-2 px-6 rounded-[50px] mt-4">Sign In
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </div>

    </header>
  );
}

export default Navbar;
