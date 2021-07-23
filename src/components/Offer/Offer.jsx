import React from 'react';
import styled from 'styled-components';

const Offer = () => {
    return (
        <OfferStyle>
            <div class="offer__container">
                <div class="offer__container_textbox">
                    <h1 class="offer__header">WHAT WE OFFER</h1>
                    <p class="offer__detail">
                        Far far away, behind the word mountains, far from the countries Vokalia
                        and Consonantia, there live the blind texts.
                    </p>
                </div>
                <div class="offer__container__tablet">
                    <div class="offer__container_box">
                        <span><i class="fas fa-ship fa-3x"></i></span>
                        <h1>SEA FREIGHT</h1>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.
                         </p>
                    </div>
                    <div class="offer__container_box offer__tablet">
                        <span><i class="fas fa-ship fa-3x"></i></span>
                        <h1>SEA FREIGHT</h1>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.
                         </p>
                    </div>
                    <div class="offer__container_box offer__tablet">
                        <span><i class="fas fa-ship fa-3x"></i></span>
                        <h1>SEA FREIGHT</h1>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.
                         </p>
                    </div>
                    <div class="offer__container_box offer__tablet">
                        <span><i class="fas fa-ship fa-3x"></i></span>
                        <h1>SEA FREIGHT</h1>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.
                         </p>
                    </div>
                    <div class="offer__container_box offer__tablet">
                        <span><i class="fas fa-ship fa-3x"></i></span>
                        <h1>SEA FREIGHT</h1>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.
                         </p>
                    </div>
                    <div class="offer__container_box offer__tablet">
                        <span><i class="fas fa-ship fa-3x"></i></span>
                        <h1>SEA FREIGHT</h1>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia.
                         </p>
                    </div>
                </div>
                <div class="offer__container_dot">
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                </div>
            </div>
        </OfferStyle>
    )
}

const OfferStyle = styled.div`
    background-color: #f6f5f5;
    margin-top: -65px;
    
    .dot span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgb(204, 204, 204);
        margin: 5px;
        border-radius: 50%;
    }

    .offer__container {
        padding: 48px 15px;
    }

    .offer__container_textbox {
        font-family: Oswald, sans-serif;
        text-align: center;
    }

    .offer__header {
        font-size: 32px;
        color:#ff8b00;
        border-bottom: 8px;
    }

    .offer__detail {
        font-size: 17px;
        line-height: 30px;
        margin-bottom: 17px;
        color: #939393;
        font-weight: 400;
    }

    .offer__container_box {
        border: 1px solid #CCCCCC;
        background-color: #fff;
        border-radius: 5px;
        margin-top: 50px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .offer__container_box i {
        color: #ff8b00;
        margin-bottom: 25px;
    }

    .offer__container_box h1 {
        font-size: 22.4px;
        font-family: Oswald, sans-serif;
        margin-bottom: 16px;
    }

    .offer__container_box p {
        font-size: 17px;
        color: #939393;
        line-height: 30px;
        margin-bottom: 16px;

    }

    .offer__container_dot {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .offer__tablet {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        .offer__container_textbox {
            width: 45%;
            margin: 0 auto;
        }

        .offer__detail {
            font-size: 18px;
            letter-spacing: 0.5px;
        }

        .offer__container_box {
            margin: 50px 30px 0 30px;
        }
    }

    @media only screen and (min-width: 992px) {
        .offer__container_dot .dot {
            display: none;
        }

        .offer__container_textbox {
            width: 55%;
        }

        .offer__header {
            font-size: 45px;
        }
        
        .offer__tablet {
            display: flex;
        }

        .offer__container__tablet {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 60px 20px 50px;
            flex-wrap: wrap;
        }

        .offer__container_box {
            margin: unset;
            margin-bottom: 30px;
            width: 31%;
        }
    }

    @media only screen and (min-width: 1024px) {
        .offer__container__tablet {
            margin: 60px 28px 50px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .offer__container_textbox {
            width: 45%;
        }

        .offer__header {
            font-size: 48px;
        }

        .offer__detail {
            font-size: 24px;
        }
        
        .offer__container__tablet {
            margin: 70px 150px 60px;
        }

        .offer__container_box p {
            font-size: 18px
        }
    }
`;

export default Offer;