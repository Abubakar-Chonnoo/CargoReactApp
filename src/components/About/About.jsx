import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutStyle>
            <div class="about__container">
                <div class="about__container_textbox">
                    <h1 class="about__header">ABOUT US</h1>
                    <p class="about__detail">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                    </p>
                </div>
                <div class="about__container_video">
                    <img class="about__video" src="https://preview.colorlib.com/theme/cargo/images/cargo_delivery_big.jpg" alt="video" />
                    <div class="about__play">
                        <span><i class="fas fa-play"></i></span>
                    </div>
                </div>
                <div class="about__container_data">
                    <div class="about__data">
                        <h1 class="about__data_header">50+</h1>
                        <p class="about__data_text">Years of <br />Experience</p>
                    </div>
                    <div class="about__data">
                        <h1 class="about__data_header">300+</h1>
                        <p class="about__data_text">Companies</p>
                    </div>
                    <div class="about__data">
                        <h1 class="about__data_header">108+</h1>
                        <p class="about__data_text">Covered <br />Countries</p>
                    </div>
                    <div class="about__data">
                        <h1 class="about__data_header">1,500+</h1>
                        <p class="about__data_text">Couriers</p>
                    </div>
                </div>
            </div>
        </AboutStyle>
    )
}

const AboutStyle = styled.div`
    .about__container {
        /* background-color: red; */
        padding: 48px 15px;
    }

    .about__container_textbox {
        font-family: Oswald, sans-serif;
        text-align: center;
        margin-bottom: 50px;
    }

    .about__header {
        font-size: 32px;
        margin-bottom: 8px;
        color: #ff8b00;
    }

    .about__detail {
        font-size: 17px;
        line-height: 30px;
        color: #939393;
        margin-bottom: 16px;
    }

    .about__container_video {
        position: relative;
        margin-bottom: 60px;
    }

    .about__video {
        width: 100%;
        height: auto;
        display: block;
    }

    .about__play {
        width: 80px;
        height: 80px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .about__container_data {
        /* border: 1px solid green; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 25px;
    }

    .about__data {
        width: 25%;
        text-align: center;
        margin: 20px 30px 0;
        font-family: Oswald, sans-serif;
    }

    .about__data_header {
        font-size: 35px;
        padding-bottom: 5px;
        border-bottom: 3px solid rgba(52, 58, 64, 0.3);
        color: #ff8b00;
    }

    .about__data_text {
        font-size: 16px;
        color: #939393;
        padding-top: 10px;
    }

    @media only screen and (min-width: 768px) {
        .about__container_textbox {
            width: 54%;
            margin: 0 auto 50px;
        }

        .about__container_video {
            margin: 0 30px;
        }

        .about__container_data {
            margin: 50px 30px;
        }

        .about__data {
            margin-bottom: 10px;
        }
    }

    @media only screen and (min-width: 992px) {
        .about__container_video {
            margin: 100px 20px 0;
        }

        .about__data {
            width: 18%;
        }

        .about__data_header {
            font-size: 50px;
        }

        .about__data_text {
            font-size: 18px
        }
    }

    @media only screen and (min-width: 1024px) {
        .about__container_textbox {
            width: 60%;
        }

        .about__header {
            font-size: 45px;
        }

        .about__detail {
            font-size: 23px;
        }

        .about__container_video {
            margin: 100px 28px 0;
        }
    }

    @media only screen and (min-width: 1440px) {
        .about__container_textbox {
            width: 48%;
        }

        .about__container_video {
            margin: 140px 150px 0;
        }

        .about__container_data {
            margin: 50px 150px;
        }

        .about__data_header {
            font-size: 55px;
        }

        .about__data_text {
            font-size: 22px;
        }
    }
`;

export default About;