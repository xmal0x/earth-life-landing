import {styles} from "../styles";
import {close, eco, menu} from '../assets'
import {navLinks} from "../utils/constants";
import {useState} from "react";
import {Button} from "./UI";
import {scrollTop} from "../utils/utils";

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    const handleHomeClick = () => {
        scrollTop()
    }

    const handleHelpClick = () => {
        window.location.href='#signup';
    }

    const getLinks = () => (
        navLinks.map((link) => (
            <li
                key={link.id}
                className={`${active === link.id ? 'font-black' : 'font-normal'} hover:text-tertiary cursor-pointer`}
                onClick={() => {
                    setActive(link.id)
                    setToggle(!toggle)
                }}
            >
                <a href={`#${link.id}`}>{link.title}</a>
                <hr className="md:hidden flex h-px my-8 bg-gray-200 border-0" />
            </li>
        ))
    )

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-6 z-20 fixed top-0 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex lg:gap-10 gap-5 items-center">
                    <img
                        src={eco}
                        alt="logo"
                        onClick={handleHomeClick}
                        className="cursor-pointer"
                    />
                    <ul className="md:flex hidden list-none lg:gap-10 gap-5 text-white">
                        {getLinks()}
                    </ul>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <Button text="Help us Fight" onClick={() => handleHelpClick()}/>

                    <div className="md:hidden flex flex-col">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[36px] h-[36px] object-contain cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        />
                        <div className={`${toggle ? 'flex' : 'hidden'} w-full bg-white absolute top-24 left-0 `}>
                            <ul className="flex list-none flex-col w-full p-6">
                                {getLinks()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
