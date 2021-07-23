import React from 'react';
import styled from 'styled-components';

const Pricing = () => {
    return (
        <PricingStyle>
            <div class="pricing__container">
                <div class="pricing__container_textbox">
                    <h1 class="pricing__header">PRICING</h1>
                    <p class="pricing__text">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. 
                    </p>
                </div>
                <div class="pricing__container_package">
                    <div class="package__detail">
                        <h2 class="package__header">BASIC</h2>
                        <h1 class="package__price">$47  <span>/ year</span></h1>                      
                        <ul class="package__list">
                            <li>Officia quaerat eaque neque</li>
                            <li>Possimus aut consequuntur incidunt</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Dolorum esse odio quas architecto sint</li>
                        </ul>
                        <button class="package__button">Buy Now</button>
                    </div>
                    <div class="package__detail">
                        <h2 class="package__header">PREMIUM</h2>
                        <h1 class="package__price">$200  <span>/ year</span></h1>
                        <ul class="package__list">
                            <li>Officia quaerat eaque neque</li>
                            <li>Possimus aut consequuntur incidunt</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Dolorum esse odio quas architecto sint</li>
                        </ul>
                        <button class="package__button">Buy Now</button>
                    </div>
                    <div class="package__detail">
                        <h2 class="package__header">PROFESSIONAL</h2>
                        <h1 class="package__price">$750  <span>/ year</span></h1>
                        <ul class="package__list">
                            <li>Officia quaerat eaque neque</li>
                            <li>Possimus aut consequuntur incidunt</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Dolorum esse odio quas architecto sint</li>
                        </ul>
                        <button class="package__button">Buy Now</button>
                    </div>
                </div>
            </div>
        </PricingStyle>
    )
}

const PricingStyle = styled.div`
    .pricing__container {
        padding: 48px 15px;
        /* background-color: red; */
    }

    .pricing__container_textbox {
        text-align: center;
        font-family: Oswald, sans-serif;
    }

    .pricing__header {
        font-size: 32px;
        margin-bottom: 8px;
        color: #ff8b00;
    }

    .pricing__text {
        font-size: 17px;
        color: #939393;
        line-height: 30px;
        margin-bottom: 16px;
    }

    .pricing__container_package {
        margin-top: 50px;
    }

    .package__detail {
        padding: 30px;
        background-color: #f6f5f5;
        font-family: Oswald, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    .package__header {
        font-size: 28px;
        margin-bottom: 8px;
    }

    .package__price {
        font-size: 48px;
        color: #ff8b00;
        margin-bottom: 30px;
    }

    .package__price span {
        font-size: 16px;
        color: #CCCCCC;
        letter-spacing: 2px;
    }

    .package__list {
        /* border: 1px solid blue; */
        font-family: Oswald, sans-serif;
        margin-bottom: 35px;
        margin-left: 35px;
    }

    .package__list li {
        position: relative;
        font-size: 19px;
        color: #939393;
        margin-bottom: 20px;
    }

    .package__list li::before {
        left: -25px;
        font-size: 20px;
        top: -2px;
        content: url(tick.png);
        position: absolute;
    }

    .package__button {
        font-size: 17px;
        background-color: #6c757d;
        padding: 12px 20px;
        border: none;
        color: white;
        border-radius: 4px;
    }

    @media only screen and (min-width: 768px) {
        .pricing__container_textbox {
            margin: 0 auto;
            width: 50%;
        }

        .pricing__container_package {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin: 50px 30px;
        }

        .pricing__text {
            font-size: 18px;
        }

        .package__detail {
            margin-bottom: 30px;
            width: 48%;
        }
    }

    @media only screen and (min-width: 992px) {
        .package__detail {
            width: 31%;
        }

        .pricing__container_package {
            margin: 60px 20px;
        }

        .pricing__container_textbox {
            width: 60%;
        }

        .pricing__header {
            font-size: 45px;
        }

        .pricing__text {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .pricing__container_package {
            margin: 75px 28px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .pricing__container_textbox {
            width: 45%;
        }

        .pricing__header {
            font-size: 48px;
        }

        .pricing__text {
            font-size: 22px;
        }

        .pricing__container_package {
            margin: 100px 150px 50px;
        }
    }
`;

export default Pricing;