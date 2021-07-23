import React from 'react';
import styled from 'styled-components';

const Why = () => {
    return (
        <WhyStyle>
            <div class="us__container">
                <div class="us__container_image"></div>
                <div class="us__container_textbox">
                    <h1 class="us__header">WHY US</h1>
                    <h2 class="us__sub">WE WORK QUICKLY AND EFFICIENTLY!</h2>
                    <p class="us__detail">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <ul class="us__list">
                        <li><span><i class="fas fa-check"></i></span>Cargo express</li>
                        <li><span><i class="fas fa-check"></i></span>Secure Services</li>
                        <li><span><i class="fas fa-check"></i></span>Secure Warehousing</li>
                        <li><span><i class="fas fa-check"></i></span>Cost Savings</li>
                        <li><span><i class="fas fa-check"></i></span>Proven by great companies</li>
                    </ul>
                </div>
            </div>
        </WhyStyle>
    )
}

const WhyStyle = styled.div`
    .us__container {
        padding: 48px 15px;
        border-top: 1px solid #dee2e6;
    }

    .us__container_image {
        background-image: url('https://preview.colorlib.com/theme/cargo/images/cargo_sea_small.jpg');
        height: 400px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-bottom: 20px;
    }

    .us__container_textbox {
        font-family: Oswald, sans-serif;
    }

    .us__header {
        font-size: 32px;
        margin-bottom: 24px;
    }

    .us__sub {
        color: #ff8b00;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 8px;
    }

    .us__detail {
        font-size: 17px;
        color: #939393;
        line-height: 30px;
        margin-bottom: 16px;
    }

    .us__list {
        margin: 48px 0 50px 0;
    }

    .us__list i {
        color: #ff8b00;
        padding-right: 15px;
    }

    .us__list li {
        font-size: 17px;
        color: #939393;
        margin-bottom: 15px;
    }

    @media only screen and (min-width: 768px) {
        .us__container {
            margin: 0 20px 40px;
            border: none;
        }


    }

    @media only screen and (min-width: 992px) {
        .us__container {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            margin: 0 30px 40px;
            padding-top: 100px;
        }

        .us__container_image {
            width: 55%;
            height: 662px;
        }

        .us__container_textbox {
            width: 35%;
            margin-right: 10px;
        }

        .us__header {
            font-size: 35px;
        }

        .us__sub {
            font-size: 26px;
        }

        .us__detail {
            font-size: 20px;
        }

        .us__list li {
            font-size: 19px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .us__container_image {
            width: 52%;
        }

        .us__container {
            margin: 0px 40px 40px;
        }

        .us__detail {
            font-size: 23px;
        }

        .us__list li {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .us__container {
            margin: 100px 150px 50px;
        }
    }
`;

export default Why;