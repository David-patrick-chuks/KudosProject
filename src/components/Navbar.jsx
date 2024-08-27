import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const navlist = [
        {
            id: 1,
            label: "Our cars",
            path: "/cars"
        },
        {
            id: 2,
            label: "Locations",
            path: "/locations"
        },
        {
            id: 3,
            label: "Pricing",
            path: "/pricing"
        },
        {
            id: 4,
            label: "Benefits",
            path: "/benefits"
        },
        {
            id: 5,
            label: "Support",
            path: "/support"
        },
    ]
    
  return (
    <div className="flex justify-between shadow-sm px-[160px] py-3 bg-white">
        <Link className="my-auto" to="/">
            <img src="images/sark-logo.png" alt="Logo" />
        </Link>
        <ul className="flex gap-5 my-auto">
            {navlist.map(item => (
                <li className="text-tertiary" key={item.id}>
                    <NavLink to={item.path}>{item.label}</NavLink>
                </li>
            ))}
        </ul>
        <button className="bg-primary-dark rounded-md py-2 px-8 text-white">Download app</button>
    </div>
  )
}

export default Navbar