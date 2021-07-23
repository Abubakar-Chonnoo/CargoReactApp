import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger_logo from './menu.png';
import Cross_logo from './cross.png';

const Navbar = () => {

    const [hamburger, setHamburger] = useState(true);

    const Hamburger_Action = () => {
        const ham = document.querySelector("#navbar__box_hamburger");
        const mobile_menu = document.querySelector(".navbar__menu");
        
        mobile_menu.classList.toggle("navbar__active");
        setHamburger(!hamburger);
        
        if(hamburger)
            ham.src = Cross_logo;
        else
            ham.src = Hamburger_logo;
        
    };

    return (
        <NavbarStyle>
            <div className="navbar__container">
                <h1 className="navbar__container_header">CARGO</h1>
                <div className="navbar__container_hamburger">
                    <img id="navbar__box_hamburger" alt="hamburger" src={Hamburger_logo} onClick={Hamburger_Action}/>
                </div>
            </div>
            <div className="navbar__menu">
                <div className="navbar__menu_item">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Why Us</li>
                        <li>Testimonials</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </NavbarStyle>
    )
};

const NavbarStyle = styled.div `
    height: 15vh;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 992px) {
       height: 12vh;
    }

    @media only screen and (min-width: 1024px) {
        margin: 0 12px;
    }
    
    @media only screen and (min-width: 1440px) {
        margin: 0 130px;
    }

    .navbar__container {
        /* border: 1px solid black; */
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 16px;
        width: 100%;
        position: sticky;
        top: 0;
    }
    
    .navbar__container_header {
        color: #ff8b00;
        font-size: 32px;
        text-transform: uppercase;
        font-weight: 900;
        font-family: Oswald, sans-serif;
    }
    
    .navbar__menu {
        display: none;
        width: 100%;
        position: absolute;
        top: 131px;
        left:0;
        background-color: #fff;
        z-index: 10;
        font-family: Oswald, sans-serif;
    }
    
    .navbar__menu_item li {
        text-transform: uppercase;
        color: black;
        font-size: 17px;
        padding: 14px 20px;
    }
    
    .navbar__active {
        display: flex;
        box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    }

    .navbar__container_hamburger {
        cursor: pointer;
    }
    
    @media only screen and (min-width: 768px) {
        .navbar__container {
            padding: 0px 26px 0 23px;
        }
    }
    
    @media only screen and (min-width: 992px) {
        .navbar__container {
            width: 45%;
        }
    
        .navbar__container_hamburger {
            display: none;
        }
    
        .navbar__menu {
            /* border: 1px solid red; */
            background-color: none;
            position: unset;
            display: inline;
            margin-right: 25px;
        }
    
        .navbar__menu_item ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    
        .navbar__menu_item li {
            padding: 0 ;
        }
    }
`;

export default Navbar;