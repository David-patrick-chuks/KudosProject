// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { GlobalContext } from "../utils/context";

// const Navbar = () => {
//   const { name } = useContext(GlobalContext);
//   const [isNavOpen, setIsNavOpen] = useState(false); // Toggle state for mobile navigation

//   // Function to toggle the navigation
//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   // The common navigation list (can be used in both mobile and desktop views)
//   const navItems = (
//     <>
//       <li className="py-2 lg:py-0">
//         <a href="#our-cars" className="text-tertiary cursor-pointer hover:underline">
//           Our Cars
//         </a>
//       </li>
//       <li className="py-2 lg:py-0">
//         <a href="#location" className="text-tertiary cursor-pointer hover:underline">
//           Location
//         </a>
//       </li>
//       <li className="py-2 lg:py-0">
//         <a href="#the-pricing" className="text-tertiary cursor-pointer hover:underline">
//           Pricing
//         </a>
//       </li>
//       <li className="py-2 lg:py-0">
//         <a href="#the-benefits" className="text-tertiary cursor-pointer hover:underline">
//           Benefits
//         </a>
//       </li>
//       <li className="py-2 lg:py-0">
//         <a href="#the-supports" className="text-tertiary cursor-pointer hover:underline">
//           Support
//         </a>
//       </li>
//     </>
//   );

//   return (
//     <div className="flex justify-between shadow-sm px-4 lg:px-[160px] py-3 bg-white items-center">
//       {/* Logo */}
//       <Link className="my-auto" to="/">
//         <img src="images/sark-logo.png" alt="Logo" />
//       </Link>

//       {/* Desktop Navigation Items (hidden on mobile/tablet) */}
//       <ul className="hidden lg:flex gap-5 my-auto">{navItems}</ul>

//       {/* Download Button or User Info */}
//       {name ? (
//         <div className="flex gap-5 bg-gray-400 p-3 rounded-md"></div>
//       ) : (
//         <a
//           href="https://apps.microsoft.com/home?hl=en-us&gl=US"
//           className="bg-primary-dark rounded-md py-2 px-8 text-white"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Download
//         </a>
//       )}

//       {/* Hamburger Menu for Mobile/Tablet (Moved to right after the Download button) */}
//       <button
//         className="lg:hidden my-auto ml-4" // Adds margin between the download button and toggle
//         onClick={toggleNav}
//       >
//         {/* Hamburger Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </button>

//       {/* Mobile Dropdown Menu (rendered only when toggled) */}
//       {isNavOpen && (
//         <ul className="lg:hidden absolute top-16 right-0 w-full p-5 flex flex-col gap-4 z-20 bg-white">
//           {navItems}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../utils/Context.jsx";

const Navbar = () => {
  const { name } = useContext(GlobalContext);
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle state for mobile navigation

  // Function to toggle the navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // The common navigation list (can be used in both mobile and desktop views)
  const navItem = [
    {
      id: 1,
      name: "Our Cars",
      href: "#our-cars",
    },
    {
      id: 2,
      name: "Location",
      href: "#location",
    },
    {
      id: 3,
      name: "Pricing",
      href: "#the-pricing",
    },
    {
      id: 4,
      name: "Benefits",
      href: "#the-benefits",
    },
    {
      id: 5,
      name: "Support",
      href: "#the-supports",
    },
  ];
  const navItems = (
    <>
      <li className="py-2 lg:py-0">
        <a
          href="#our-cars"
          className="text-tertiary cursor-pointer hover:underline"
        >
          Our Cars
        </a>
      </li>
      <li className="py-2 lg:py-0">
        <a
          href="#location"
          className="text-tertiary cursor-pointer hover:underline"
        >
          Location
        </a>
      </li>
      <li className="py-2 lg:py-0">
        <a
          href="#the-pricing"
          className="text-tertiary cursor-pointer hover:underline"
        >
          Pricing
        </a>
      </li>
      <li className="py-2 lg:py-0">
        <a
          href="#the-benefits"
          className="text-tertiary cursor-pointer hover:underline"
        >
          Benefits
        </a>
      </li>
      <li className="py-2 lg:py-0">
        <a
          href="#the-supports"
          className="text-tertiary cursor-pointer hover:underline"
        >
          Support
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-30">
      <div className="flex justify-between shadow-sm px-4 lg:px-[160px] py-3 bg-white items-center">
        {/* Logo */}
        <Link className="my-auto" to="/">
          <img src="images/sark-logo.png" alt="Logo" />
        </Link>

        {/* Desktop Navigation Items (hidden on mobile/tablet) */}
        <ul className="hidden lg:flex gap-5 my-auto">{navItems}</ul>

        {/* Download Button or User Info */}
        {name ? (
          <div className="flex gap-5 bg-gray-400 p-3 rounded-md"></div>
        ) : (
          <a
            href="https://apps.microsoft.com/home?hl=en-us&gl=US"
            className="bg-primary-dark hidden rounded-md py-2 px-8 md:inline-block text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        )}

        {/* Hamburger Menu for Mobile/Tablet (Moved to right after the Download button) */}
        <button className="lg:hidden my-auto ml-4" onClick={toggleNav}>
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isNavOpen && (
        <ul className="lg:hidden top-5 bg-white font-semibold right-0 w-full  flex flex-col space-y-1 z-50">
          {navItem.map((item) => (
            <a
              key={item.id}
              onClick={handleClick}
            className=" hover:bg-slate-300/20  p-2 "
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
