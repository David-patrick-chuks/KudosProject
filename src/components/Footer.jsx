import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div id='the-supports' className="bg-gray-200 py-5">
      <div className='flex flex-col md:flex-row justify-between py-10 px-4 md:px-10 mx-auto mb-10 bg-green-950 rounded-md max-w-screen-xl'>
        <p className='font-bold text-xl text-white text-center md:text-left'>
          Download our app to book our cars and boats
        </p>
        <a
          href="https://apps.microsoft.com/home?hl=en-us&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='p-2 text-green-950 bg-white rounded-md font-medium'>
            Download the app
          </button>
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8 py-4 mx-auto max-w-screen-xl">
        <div className="text-left mb-5">
          <img className="mb-5" src="images/Logo.png" alt="Logo" />
          <div className="text-l font-medium">
            <p>About us</p>
            <p>For Taxidrivers</p>
            <p>For Busdrivers</p>
          </div>
        </div>

        <div className="text-left mb-5">
          <p className="mb-5 font-bold">Explore</p>
          <div className="text-l font-medium">
            <a href="#our-cars" className="block cursor-pointer scroll-smooth">Our cars</a>
            <a href="#the-benefits" className="block cursor-pointer scroll-smooth">Benefits</a>
            <a href="#the-pricing" className="block cursor-pointer scroll-smooth">Pricing</a>
          </div>
        </div>

        <div className="text-left mb-5">
          <p className="mb-5 font-bold">Extras</p>
          <div className="text-l font-medium">
            <a href="#our-cars" className="block cursor-pointer scroll-smooth">Cost calculator</a>
            <a href="#our-cars" className="block cursor-pointer scroll-smooth">Location</a>
            <p className='cursor-pointer'>Supports</p>
            <a href="https://www.cargonetherlands.com/blog" target="_blank" className="block cursor-pointer hover:underline">Blogs</a>
          </div>
        </div>

        <div className="text-left mb-5">
          <p className="mb-5 font-bold">Contact</p>
          <div className="text-l font-medium">
            <p>
              <a href="tel:+31294300003" className="text-blue-500 hover:underline">
                +312 94 30 00 03
              </a>
            </p>
            <a href="https://www.cargonetherlands.com/" target="_blank" className="text-blue-500 hover:underline">info@Cago.nl</a>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 mt-6 mx-auto max-w-screen-xl'>
        <div className="flex gap-6 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square text-3xl text-blue-600"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-3xl text-pink-600"></i>
          </a>
        </div>
        <div className='ml-10 flex gap-5 flex-wrap'>
          <p className='mt-7'>General</p>
          <p className='mt-7'>Privacy policy</p>
        </div>

        <div className="text-right ml-auto mt-9">
          <p>© 2022 Cago.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
