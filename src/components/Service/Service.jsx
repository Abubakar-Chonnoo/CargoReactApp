import React from 'react';
import styled from 'styled-components';

const Service = () => {
    return (
        <ServiceStyle>
            <div class="service__container">
                <div class="service__container_box">
                    <img class="service__image" src="https://preview.colorlib.com/theme/cargo/images/xcargo_sea_small.jpg.pagespeed.ic.beS82scAJu.webp" alt="service" />
                    <h1 class="service__header">Sea Freight</h1>
                    <p class="service__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div class="service__container_box service__tab">
                    <img class="service__image" src="https://preview.colorlib.com/theme/cargo/images/xcargo_air_small.jpg.pagespeed.ic.rgcFx1exEz.webp" alt="service" />
                    <h1 class="service__header">Air Freight</h1>
                    <p class="service__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div class="service__container_box service__tab">
                    <img class="service__image" src="https://preview.colorlib.com/theme/cargo/images/cargo_delivery_small.jpg" alt="service" />
                    <h1 class="service__header">Package Forwarding</h1>
                    <p class="service__text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div class="service__container_dot">
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                </div>
            </div>
        </ServiceStyle>
    )
}

const ServiceStyle = styled.div`
    position: relative;
    z-index: 1;
    top: -65px;
    padding-bottom: 48px;
    
    .service__container {
        /* border: 1px solid yellow; */
        padding: 0 15px;
        position: inherit;
        z-index: 1;
    }

    .service__container_box {
        /* border: 1px solid red; */
        font-family: Oswald, sans-serif;
        text-align: center;
    }

    .service__image {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 30px;
    }

    .service__header {
        color: rgb(255, 139, 0);
        font-size: 22.4px;
        margin-bottom: 10px;
    }

    .service__text {
        color: rgb(153, 153, 153);
        font-size: 18px;
        line-height: 30px;
        padding: 0 10px;
    }

    .service__container_dot {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }

    .dot span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgb(204, 204, 204);
        margin: 5px;
        border-radius: 50%;
    }

    .service__tab {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        .service__container_box {
            margin: 0 30px;
        }
    }

    @media only screen and (min-width: 992px) {
        .service__container_dot .dot {
            display: none;
        }

        .service__tab {
            display: block;
        }

        .service__container {
            margin: 0 34px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            margin-bottom: 25px;
        }

        .service__container_box {
            margin: 0 10px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .service__header {
            font-size: 25px;
        }

        .service__text {
            font-size: 19px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .service__container {
            padding: 0 100px;
            margin-bottom: 40px;
        }

        .service__container_box {
            margin: 0 25px;
        }

        .service__header {
            font-size: 30px;
        }

        .service__text {
            font-size: 23px;
        }
    }
`;

export default Service;