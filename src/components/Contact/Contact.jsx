import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactStyle>
        <div class="contact__container">
            <div class="contact__container_header">
                <p class="contactUs__sub">GET IN TOUCH</p>
                <h1 class="contactUs__header">CONTACT US</h1>
            </div>
            <div class="contact__container_tablet">
                <div class="contact__container_input">
                    <input class="contactUs__input contact__tablet" placeholder="First Name" />
                    <input class="contactUs__input contact__tablet contact__left" placeholder="Last Name" />
                    <input class="contactUs__input" placeholder="Email Address" />
                    <input class="contactUs__input contactUs__message" placeholder="Write Your Message" />
                    <button class="contactUS__button">Send Message</button>
                </div>
                <div class="contact__container_info">
                    <h1 class="contactInfo__header">CONTACT INFO</h1>
                    <p class="contactInfo__sub">Address:</p>
                    <p class="contactInfo__text">34 Street Name, City Name Here, United States</p>
                    <p class="contactInfo__sub">Phone:</p>
                    <p class="contactInfo__text">+1 242 4942 290</p>
                    <p class="contactInfo__sub">Email:</p>
                    <p class="contactInfo__text">info@yourdomain.com</p>
                </div>
            </div>
        </div>
    </ContactStyle>
    )
}

const ContactStyle = styled.div `
    background-color: #f6f5f5;

    .contact__container {
        padding: 48px 15px;
    }

    .contact__container_header {
        font-family: Oswald, sans-serif;
        text-align: center;
        margin-bottom: 48px;
    }

    .contactUs__sub {
        font-size: 14px;
        color: #B8B8B8;
        font-weight: bold;
    }

    .contactUs__header {
        color: #ff8b00;
        font-size: 32px;
        margin-bottom: 8px;
    }

    .contact__container_input {
        font-family: Oswald, sans-serif;
        margin-bottom: 30px;
    }

    .contactUs__input {
        font-family: Oswald, sans-serif;
        width: 100%;
        height: 55px;
        border: 1px solid #e6e6e6;
        padding: 6px 12px;
        font-size: 16px;
        border-radius: 3px;
        margin-bottom: 16px;
        color: #797979;
    }

    .contactUs__message {
        height: 200px;
    }

    .contactUS__button {
        padding: 20px 48px;
        width: 100%;
        background-color: #ff8b00;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 17px;
    }

    .contact__container_info {
        padding: 16px;
        background-color: #fff;
        text-align: left;
        font-family: Oswald, sans-serif;
    }

    .contactInfo__header {
        font-size: 28px;
        margin-bottom: 24px;
    }

    .contactInfo__sub {
        font-size: 17px;
    }

    .contactInfo__text {
        font-size: 17px;
        color: #939393;
        line-height: 30px;
        margin-bottom: 20px;
    }

    @media only screen and (min-width: 768px) {
        .contact__container {
            margin: 0 20px;
        }

        .contact__tablet {
            width: 48%;
            margin-bottom: 35px !important;
        }
        
        .contact__left {
            margin-left: 22px;
        }
        
        .contactUs__input {
            margin-bottom: 20px;
        }

        .contactUs__header {
            font-size: 34px;
        }

        .contactUS__button {
            width: 50%;
        }

        .contact__container_info {
            margin-top: 50px;
            padding-left: 30px;
        }
    }

    @media only screen and (min-width: 992px) {
        .contact__container_tablet {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }

        .contact__container_input {
            width: 48%;
        }

        .contact__container_info {
            width: 40%;
            margin-top: unset;
        }

        .contact__tablet {
            width: 47%;
        }

        .contactUs__header {
            font-size: 42px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .contact__container {
            margin: 0 28px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .contact__container {
            margin: 100px 150px 0px;
        }

        .contact__left {
            margin-left: 27px;
        }
    }
`;

export default Contact;