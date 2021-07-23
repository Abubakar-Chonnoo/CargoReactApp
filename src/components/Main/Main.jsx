import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyle>
            <div class="main__container">
                <div class="main__container_opaque"></div>
                <div class="main__container_textbox">
                    <h1 class="textbox__header">Choose Your Quality Delivery of Your Cargo</h1>
                    <p class="textbox__detail">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est magni perferendis fugit modi similique, suscipit, deserunt a iure.
                    </p>
                    <div class="textbox__form">
                        <input class="textbox__form_input" placeholder="Enter your tracking number" />
                        <button class="textbox__form_button">Track Now</button>
                    </div>
                </div>
            </div>
        </MainStyle>
    )
}

const MainStyle = styled.div`
    .main__container {
        background-image: url('https://source.unsplash.com/pSyfecRCBQA/1920x780');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 110vh;
        position: relative;
    }

    .main__container_opaque {
        background: linear-gradient(45deg, rgb(55, 122, 255) 0%, rgb(0, 217, 255) 100%);
        opacity: 0.95;
        position: absolute;
        top: 0;
        left: 0;
        height: 110vh;
        width: 100%;
        z-index:1;
    }

    .main__container_textbox {
        /* border: 1px solid red; */
        position: absolute;
        z-index: 2;
        margin: 0 15px;
        color: white;
        font-family: Oswald, sans-serif;
        top: 100px;
    }

    .textbox__header {
        font-size: 40px;
        line-height: 1.2;
        margin-bottom: 10px;
        letter-spacing: 2.5px;
    }

    .textbox__detail {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 48px;
    }

    .textbox__form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
    }

    .textbox__form_input {
        height: 10vh;
        padding: 0 5px;
        border-radius: 4px;
        border: none;
        width: 60%;
    }

    .textbox__form_button {
        height: 10vh;
        padding: 0 20px;
        color: white;
        background-color: rgb(255, 139, 0);
        border: none;
        border-radius: 4px;
        font-size: 14px;
    }

    @media only screen and (min-width: 768px) {
        .main__container_textbox {
            top: 125px;
            /* left: -50px; */
            margin: 0 46px;
        }
        
        .textbox__form_input {
            width: 80%;
        }

        .textbox__form_button {
            width: 18%;
        }

        .main__container {
            height: 100vh;
        }

        .main__container_opaque {
            height: 100vh;
        }

        .service__container_dot .dot {
            display: none;
        }
    }

    @media only screen and (min-width: 992px) {
        .main__container_textbox {
            width: 50%;
        }

        .textbox__detail {
            font-size: 20px;
        }

        .textbox__form_input {
            width: 70%;
        }

        .textbox__form_button {
            width: 28%;
        }
    }

    @media only screen and (min-width: 1024px) {
        .main__container_textbox {
            top: 215px;
        }

        .textbox__header {
            font-size: 45px;
        }

        .textbox__detail {
            font-size: 25px;
        }

        .textbox__form_input {
            padding: 0 20px;
            font-size: 18px;
            height: 8vh;
        }

        .textbox__form_button {
            font-size: 18px;
            height: 8vh;
        }
    }

    @media only screen and (min-width: 1440px) {
        .main__container_textbox {
            top: 265px;
            left: 115px;
            width: 40%;
        }

        .textbox__form_input {
            height: 7vh;
        }

        .textbox__form_button {
            height: 7vh;
        }
    }
`;

export default Main;