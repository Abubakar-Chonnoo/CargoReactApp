import React from 'react';
import styled from 'styled-components';

const Staff = () => {
    return (
        <StaffStyle>
            <div class="staff__container">
                <div class="staff__container_textbox">
                    <h1 class="staff__header">OUR STAFF</h1>
                    <p class="staff__text">
                        Far far away, behind the word mountains, far from the countries Vokalia
                        and Consonantia, there live the blind texts.
                    </p>
                </div>
                <div class="staff__container_tablet">
                    <div class="staff__container_personal">
                        <img class="personal__photo" src="https://preview.colorlib.com/theme/cargo/images/person_1.jpg" alt="staff" /> 
                        <h2 class="personal__name">MAX CARLSON</h2>
                        <h4 class="personal__role">CO-FOUNDER</h4>
                        <p class="personal__text">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div class="personal__social">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="staff__container_personal staff__tablet">
                        <img class="personal__photo" src="https://preview.colorlib.com/theme/cargo/images/person_1.jpg" alt="staff" /> 
                        <h2 class="personal__name">MAX CARLSON</h2>
                        <h4 class="personal__role">CO-FOUNDER</h4>
                        <p class="personal__text">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div class="personal__social">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="staff__container_personal staff__tablet">
                        <img class="personal__photo" src="https://preview.colorlib.com/theme/cargo/images/person_1.jpg" alt="staff" /> 
                        <h2 class="personal__name">MAX CARLSON</h2>
                        <h4 class="personal__role">CO-FOUNDER</h4>
                        <p class="personal__text">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div class="personal__social">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="staff__container_personal staff__tablet">
                        <img class="personal__photo" src="https://preview.colorlib.com/theme/cargo/images/person_1.jpg" alt="staff" /> 
                        <h2 class="personal__name">MAX CARLSON</h2>
                        <h4 class="personal__role">CO-FOUNDER</h4>
                        <p class="personal__text">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div class="personal__social">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="staff__container_personal staff__tablet">
                        <img class="personal__photo" src="https://preview.colorlib.com/theme/cargo/images/person_1.jpg" alt="staff" /> 
                        <h2 class="personal__name">MAX CARLSON</h2>
                        <h4 class="personal__role">CO-FOUNDER</h4>
                        <p class="personal__text">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div class="personal__social">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="staff__container_personal staff__tablet">
                        <img class="personal__photo" src="https://preview.colorlib.com/theme/cargo/images/person_1.jpg" alt="staff" /> 
                        <h2 class="personal__name">MAX CARLSON</h2>
                        <h4 class="personal__role">CO-FOUNDER</h4>
                        <p class="personal__text">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div class="personal__social">
                            <ul>
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="staff__container_dot">
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                    <div class="dot"><span></span></div>
                </div>
            </div>
        </StaffStyle>
    )
}

const StaffStyle = styled.div`
    background-color: #f6f5f5;

    .staff__container {
        padding: 48px 15px;
    }

    .dot span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: rgb(204, 204, 204);
        margin: 5px;
        border-radius: 50%;
    }

    .staff__container_textbox {
        font-family: Oswald, sans-serif;
        text-align: center;
        margin-bottom: 50px;
    }

    .staff__header {
        font-size: 32px;
        color: #ff8b00;
        margin-bottom: 8px;
    }

    .staff__text {
        color: #939393;
        line-height: 30px;
        margin-bottom: 16px;
        font-size: 17px;
    }

    .staff__container_personal {
        border: 1px solid #e9ecef;
        border-radius: 4px;
        padding: 30px;
        font-family: Oswald, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .personal__photo {
        width: 60%;
        height: auto;
        display: block;
        border-radius: 100%;
        margin-bottom: 16px;
    }

    .personal__name {
        font-size: 20px;
        margin-bottom: 8px;
    }

    .personal__role {
        font-size: 14px;
        color: #b8b8b8;
        margin-bottom: 16px;
        letter-spacing: 2px;
    }

    .personal__text {
        font-size: 17px;
        color: #939393;
        margin-bottom: 24px;
        line-height: 30px;
        text-align: center;
    }

    .personal__social {
        width: 110px;
    }

    .personal__social ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .personal__social li {
        padding: 3px 10px;
        background-color: #ff8b00;
        border-radius: 3px;
        color: white;
    }

    .staff__container_dot {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .staff__tablet {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        .staff__container_textbox {
            width: 50%;
            margin: 0 auto 50px;
        }

        .staff__text {
            font-size: 19px;
        }

        .personal__photo {
            width: 20%;
        }

        .staff__container_personal {
            margin: 0 30px;
        }

        .personal__text {
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 992px) {
        .staff__container_textbox {
            width: 60%;
        }

        .staff__header {
            font-size: 45px;
        }

        .staff__text {
            font-size: 19px;
        }

        .staff__container_dot .dot {
            display: none;
        }

        .staff__tablet {
            display: flex;
        }

        .staff__container_tablet {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin: 60px 20px 50px;
        }

        .staff__container_personal {
            width: 31%;
            margin: 0 0 30px;
        }

        .personal__photo {
            width: 60%;
        }
    }

    @media only screen and (min-width: 1024px) {
        .staff__text {
            font-size: 20px;
        }

        .staff__container_tablet{
            margin: 60px 28px 50px;
        }

        .personal__text {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .staff__container_textbox {
            width: 44%;
        }

        .staff__header {
            font-size: 48px;
        }

        .staff__text {
            font-size: 23px;
        }

        .personal__photo {
            width: 45%;
        }

        .staff__container_tablet {
            margin: 100px 150px 50px;
        }

        .personal__text {
            font-size: 22px;
        }
    }
`;

export default Staff;