import React from 'react';
import styled from 'styled-components';

const Client = () => {
    return (
        <ClientStyle>
            <div class="client__container">
                <div class="client__container_header">
                    <h1 class="client__header">HAPPY CLIENTS</h1>
                </div>
                <div class="client__container_tablet">
                    <div class="client__tablet">
                        <div class="client__container_message">
                            <div class="client__message">
                                <p class="client__message_text">
                                    “Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the 
                                    name of Lorem Ipsum decided to leave for the far World of Grammar.”
                                </p>
                            </div>
                        </div>
                        <div class="client__container_image">
                            <img class="client__image" src="https://preview.colorlib.com/theme/cargo/images/person_2.jpg" alt="Client Img" />
                            <h2 class="client__name">KEN DAVIES</h2>
                        </div>
                    </div>
                    <div class="client__tablet_show">
                        <div class="client__container_message">
                            <div class="client__message">
                                <p class="client__message_text">
                                    “Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the 
                                    name of Lorem Ipsum decided to leave for the far World of Grammar.”
                                </p>
                            </div>
                        </div>
                        <div class="client__container_image">
                            <img class="client__image" src="https://preview.colorlib.com/theme/cargo/images/person_2.jpg" alt="Client Img" />
                            <h2 class="client__name">KEN DAVIES</h2>
                        </div>
                    </div>
                    <div class="client__tablet_show client__1200">
                        <div class="client__container_message">
                            <div class="client__message">
                                <p class="client__message_text">
                                    “Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the 
                                    name of Lorem Ipsum decided to leave for the far World of Grammar.”
                                </p>
                            </div>
                        </div>
                        <div class="client__container_image">
                            <img class="client__image" src="https://preview.colorlib.com/theme/cargo/images/person_2.jpg" alt="Client Img" />
                            <h2 class="client__name">KEN DAVIES</h2>
                        </div>
                    </div>
                </div>
                <div class="client__container_dot">
                    <div class="dot lap"><span></span></div>
                    <div class="dot tab"><span></span></div>
                    <div class="dot tab"><span></span></div>
                </div>
            </div>
        </ClientStyle>
    )
}

const ClientStyle = styled.div`
    background-color: #f6f5f5;
    
    .dot span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgb(204, 204, 204);
        margin: 5px;
        border-radius: 50%;
    }

    .client__container {
        /* border: 1px solid black; */
        padding: 48px 15px;
        font-family: Oswald, sans-serif;
        text-align: center;
    }

    .client__container_header {
        margin-bottom: 50px;
    }

    .client__header {
        font-size: 32px;
        color: #ff8b00;
        margin-bottom: 8px;
    }

    .client__message {
        padding: 30px;
        background-color: #fff;
        margin: 20px
    }

    .client__message_text {
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        margin-bottom: 16px;
        line-height: 30px;
    }

    .client__container_image {
        margin-top: 50px;
    }

    .client__image {
        width: 25%;
        height: auto;
        display: block;
        border-radius: 100%;
        margin: 0 auto 20px;
    }

    .client__name {
        font-size: 18px;
        margin-bottom: 24px;
    }

    .client__container_dot {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    .client__tablet_show {
        display: none;
    }

    @media only screen and (min-width: 575px) {
        .client__tablet_show {
            display: block;
        }

        .client__container_tablet {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .client__container_dot .tab {
            display: none;
        }

        .client__1200 {
            display: none;
        }
        
        .client__1440 {
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        .client__container_tablet {
            margin: 0 20px;
        }

        .client__header {
            font-size: 45px;
        }

        .client__image {
            width: 20%;
        }
    }

    @media only screen and (min-width: 992px) {
        .client__container_tablet {
            margin: 0 28px;
        }

    }

    @media only screen and (min-width: 1200px) {
        .client__1200 {
            display: block;
        }

        .client__container_dot .lap {
            display: none;
        }
    }

    @media only screen and (min-width: 1440px) {
        .client__container_tablet {
            margin: 100px 150px 50px;
        }

        .client__header {
            font-size: 50px;
        }
    }
`;

export default Client;