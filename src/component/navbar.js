import React, { useState, useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';
import './nav.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const htmlRef = useRef(document.documentElement);
    const circleRef = useRef(null);
    const navbarRef = useRef(null);
    const toggleRef = useRef(null);

    const getVpdr = () => {
        const html = htmlRef.current;
        const circle = circleRef.current;
        const vph = Math.pow(html.offsetHeight, 2);
        const vpw = Math.pow(html.offsetWidth, 2);
        const vpd = Math.sqrt(vph + vpw);
        return (vpd * 2) / circle.clientWidth;
    };

    const openNavbar = () => {
        const openTimeline = gsap.timeline();
        openTimeline.to(navbarRef.current, 0, { display: "flex" });
        openTimeline.to(circleRef.current, 1.5, { scale: getVpdr(), ease: Expo.easeInOut });
        openTimeline.staggerFromTo(navbarRef.current.querySelectorAll("ul li"), 0.5, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, 0.1, 1);
    };

    const closeNavbar = () => {
        const closeTimeline = gsap.timeline();
        closeTimeline.staggerFromTo(navbarRef.current.querySelectorAll("ul li"), 0.5, { y: 0, opacity: 1, delay: 0.5 }, { y: 25, opacity: 0 }, -0.1);
        closeTimeline.to(circleRef.current, 1, { scale: 0, ease: Expo.easeInOut, delay: -0.5 });
        closeTimeline.to(navbarRef.current, 0, { display: "none" });
    };

    const handleToggle = () => {
        if (isOpen) {
            closeNavbar();
        } else {
            openNavbar();
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (isOpen) {
                gsap.to(circleRef.current, 1, { scale: getVpdr(), ease: Expo.easeInOut });
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    return (
        <div id="wrapper">

            <button className="navbar-toggle" id="toggle" onClick={handleToggle} ref={toggleRef} type="button">
                <svg viewBox="0 0 100 100" width="80">
                    <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                </svg>
            </button>
            <div id="bg-circle" ref={circleRef}></div>
            <nav className="navbar" ref={navbarRef}>
                <ul>
                    <li><a data-text="1" href="#">Home</a></li>
                    <li><a data-text="2" href="#">Our Team</a></li>
                    <li><a data-text="3" href="#">Projects</a></li>
                    <li><a data-text="4" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
