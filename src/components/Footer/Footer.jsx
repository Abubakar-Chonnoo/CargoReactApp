import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyle>
        <div class="footer__container">
            <div class="footer__container_textbox">
                <h3 class="footer__header">ABOUT US</h3>
                <p class="footer__text">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. 
                </p>
            </div>
            <div class="footer__container_feature">
                <h3 class="feature__header">FEATURES</h3>
                <ul class="feature__list">
                    <li>About Us</li>
                    <li>Testimonials</li>
                    <li>Terms of Service</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="footer__newssocial__tablet">
                <div class="footer__container_newsletter">
                    <h3 class="newsletter__header">SUBSCRIBE TO NEWSLETTER</h3>
                    <div class="newsletter__input">
                        <input class="newsletter__input_bar" placeholder="Enter Email" />
                        <button class="newsletter__input_button">Subscribe</button>
                    </div>
                </div>
                <div class="footer__container_social">
                    <h3 class="social__header">FOLLOW US</h3>
                    <div class="social__icon">
                        <ul>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__container_copyright">
                <p class="copyright__text">
                    Copyright © 2021 All rights reserved | This template is made with 
                    <span><i class="fas fa-heart"></i></span> by <br />
                    <span class="colorlib">Colorlib</span>
                </p>
            </div>
        </div>
    </FooterStyle>
    )
}

const FooterStyle = styled.div`
    background-color: #333333;

    .footer__container {
        padding: 64px 15px;
    }

    .footer__container_textbox {
        /* border: 1px solid green; */
        font-family: Oswald, sans-serif;
        color: white;
    }

    .footer__header {
        font-size: 17px;
        margin-bottom: 24px;
    }

    .footer__text {
        line-height: 30px;
        font-size: 17px;
        margin-bottom: 16px;
    }

    .footer__container_feature {
        /* border: 1px solid red; */
        font-family: Oswald, sans-serif;
        margin-bottom: 25px;
    }

    .feature__header {
        color: white;
        font-size: 17px;
        margin-bottom: 24px;
    }

    .feature__list li {
        color: #939393;
        margin-bottom: 10px;
        font-size: 17px;
    }

    .footer__container_newsletter {
        /* border: 1px solid yellow; */
        font-family: Oswald, sans-serif;
        color: white;
        margin-bottom: 30px;
    }

    .newsletter__header {
        font-size: 17px;
        margin-bottom: 24px;
    }

    .newsletter__input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .newsletter__input_bar {
        width: 70%;
        height: 40px;
        border-radius: 3px 0 0 3px;
        border: none;
        padding: 6px 12px;
        font-size: 16px;
        font-family: Oswald, sans-serif;
    }

    .newsletter__input_button {
        width: 30%;
        height: 40px;
        border-radius: 0 3px 3px 0;
        border: none;
        background-color: #ff8b00;
        color: white;
        font-size: 16px;
        font-family: Oswald, sans-serif;
    }

    .footer__container_social {
        /* border: 1px solid orange; */
        margin-bottom: 75px;
    }

    .social__header {
        font-family: Oswald, sans-serif;
        color: white;
        font-size: 17px;
        margin-bottom: 24px;
    }

    .social__icon ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 60%;
    }

    .social__icon i {
        color: #939393;
    }

    .footer__container_copyright {
        /* border: 1px solid yellow; */
        border-top: 1px solid #797979;
        padding-top: 48px;
        font-family: Oswald, sans-serif;
        color: white;
        letter-spacing: 1px;
        margin-bottom: 16px;
    }

    .copyright__text {
        font-size: 17px;
        text-align: center;
        line-height: 30px;
    }

    .fa-heart {
        color: red;
    }

    .colorlib {
        color: #939393;
    }

    @media only screen and (min-width: 768px) {
        .footer__container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            margin: 0 30px;
        }

        .footer__container_textbox {
            width: 30%;
        }

        .footer__container_feature {
            width: 25%;
        }

        .footer__newssocial__tablet {
            width: 30%;
        }

        .footer__container_copyright {
            width: 100%;
            margin: 0 auto;
        }
    }

    @media only screen and (min-width: 992px) {
        .footer__container {
            margin: 0 20px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .footer__container {
            margin: 0 28px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .footer__container {
            margin: 0 150px 0px;
        }
    }
`;

export default Footer;