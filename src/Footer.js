import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="/img/logo.png" alt="logo" className="w-auto h-10" />
                    </a>
                    <p className="mt-2 text-sm text-gray-500 flex flex-wrap justify-center mb-4">
                        Wix website builders offer a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools—enabling anyone to create and grow online
                        <p>&copy; 2006-2022 Wix.com, inc</p><br />
                        <span className="mx-2"><nbsp /></span>
                        <span className="mx-2"><nbsp /></span>
                        <span className="mx-2"><nbsp/></span>
                        <span className="mx-2"><nbsp/></span>
                        <span className="mx-2"><nbsp/></span>

                        <span className="mx-2 my-2 text-xl"><FaFacebookF /></span>
                        <span className="mx-2 my-2 text-xl"><FaTwitter /></span>
                        <span className="mx-2 my-2 text-xl"><FaYoutube /></span>
                        <span className="mx-2 my-2 text-xl"><FaPinterest /></span>
                        <span className="mx-2 my-2 text-xl"><FaInstagram /></span>
                        <span className="mx-2 my-2 text-xl"><FaLinkedin /></span>
                        <span className="mx-2 my-2 text-xl"><FaTiktok /></span>
                    </p>
                </div>

                <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCT</h2>
                        <nav class="list-none mb-10">
                            <li><a class="text-gray-600 hover:text-gray-800">Templates </a></li>
                            <li> <a class="text-gray-600 hover:text-gray-800">Explore</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Features</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Website Builder</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Web Accesbiility</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Velo</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Playground</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">My sites</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix SEO</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Logo Maker</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Create a Blog </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Online Store</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Restaurant</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">App market</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Domains</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Business Emails</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Developers</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Enterprise</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Email Marketing</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Website Design</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Professional Tools</a></li>

                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
                        <nav class="list-none mb-10">
                            <li><a class="text-gray-600 hover:text-gray-800">About Wix</a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Press Room  </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Investor Relations </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Jobs </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Design Assets </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Terms of use </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">App Market Terms </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Privacy Policy </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Privacy and Security Hub </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Accesbiility Statments </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Abuse </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Affiliate </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Capital </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Contact Us </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Sitemap  </a></li>

                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMMUNITY</h2>
                        <nav class="list-none mb-10">
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Blog  </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Marketplace  </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Student Website  </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Encyclopedia  </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Partner Community </a></li>

                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
                        <nav class="list-none mb-10">
                            <li><a class="text-gray-600 hover:text-gray-800">Support Center </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Getting Started Guide </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Wix Learn </a></li>
                            <li><a class="text-gray-600 hover:text-gray-800">Status Page </a></li>


                        </nav>
                    </div>
                </div>

            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                </div>
            </div>
        </footer>
    );
}

export default Footer;
