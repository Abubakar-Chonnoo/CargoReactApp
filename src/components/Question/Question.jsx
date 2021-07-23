import React from 'react';
import styled from 'styled-components';

const Question = () => {
    return (
        <QuestionStyle>
            <div class="question__container">
                <div class="question__container_header">
                    <h1 class="question__header">FREQUENTLY ASK QUESTIONS</h1>
                </div>
                <div class="question__container_textbox">
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>CAN I ACCEPT BOTH PAYPAL AND STRIPE?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>WHAT AVAILABLE IS REFUND PERIOD?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>CAN I ACCEPT BOTH PAYPAL AND STRIPE?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>WHAT AVAILABLE IS REFUND PERIOD?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>WHERE ARE YOU FROM?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>WHAT IS YOUR OPENING TIME?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>CAN I ACCEPT BOTH PAYPAL AND STRIPE?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                    <div class="question__textbox">
                        <h2 class="question__textbox_header"><span><i class="far fa-comment-alt"></i></span>WHAT AVAILABLE IS REFUND PERIOD?</h2>
                        <p class="question__textbox_detail">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. 
                        </p>
                    </div>
                </div>
            </div>
        </QuestionStyle>
    )
}

const QuestionStyle = styled.div`
    background-color: #f6f5f5;

    .question__container {
        padding: 48px 15px;
    }

    .question__container_header {
        text-align: center;
        margin-bottom: 35px;
    }

    .question__header {
        font-size: 32px;
        color: #ff8b00;
        font-family: Oswald, sans-serif;
        margin-bottom: 8px;
    }

    .question__container_textbox {
        font-family: Oswald, sans-serif;
    }

    .question__textbox {
        /* border: 1px solid black; */
        margin-bottom: 48px;
    }

    .question__textbox_header i {
        color: #ff8b00;
        font-size: 20px;
        margin-right: 5px;
    }

    .question__textbox_header {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 24px;
    }

    .question__textbox_detail {
        font-size: 17px;
        color: #939393;
        margin-bottom: 0;
    }

    @media only screen and (min-width: 768px) {
        .question__container {
            margin: 0 24px;
        }

        .question__container_textbox {
            margin-top: 45px;
        }
    }

    @media only screen and (min-width: 992px) {
        .question__header {
            font-size: 45px;
        }

        .question__container_textbox {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            margin: 60px 20px;
        }

        .question__textbox {
            width: 48%;
        }
    }

    @media only screen and (min-width: 1024px) {
        .question__container_textbox {
            margin: 60px 28px;
        }

        .question__container {
            padding-top: 100px;
        }

        .question__header {
            font-size: 46px;
        }

        .question__textbox_header {
            font-size: 22px;
        }

        .question__textbox_detail {
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .question__container_textbox {
            margin: 100px 150px 50px;
        }

        .question__textbox_header {
            font-size: 24px;
        }

        .question__textbox_detail {
            font-size: 23px;
        }
    }
`;

export default Question;