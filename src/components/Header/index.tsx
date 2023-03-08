import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./styles.scss";

export function Header() {
    const [isOpen, setIsOpen] = useState(true);

    var prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollPos > currentScrollPos)) {
            const header = document.getElementById("headerContainer")
            header ? header.style.top = "0" : null
        } else {
            const header = document.getElementById("headerContainer")
            header ? header.style.top = "-100px" : null
        }
        prevScrollPos = currentScrollPos;
    }


    window.onresize = () => {
        if (window.screen.width <= 1050) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }


    return (
        <div id="headerContainer">
            <h1 className="logo">Logo</h1>
            <div className="menu-container">
                <button className="menu" onClick={() => setIsOpen(!isOpen)}>
                    <Icon icon="charm:menu-hamburger" fontSize={30} />
                </button>
                {isOpen === true &&
                    <div className="links">
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <button>Contact me</button>
                    </div>
                }
            </div>


        </div>
    )
}