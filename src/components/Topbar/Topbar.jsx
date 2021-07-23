import React from "react";
import styled from 'styled-components';

const Topbar = () => {
    return (
        <TopbarStyle>
            <div className="topbar__container">
                <div className="topbar__container_contact">
                    <ul>
                        <li><i className="far fa-envelope"></i><span className="topbar__text">info@yourdomain.com</span></li>
                        <li><i className="fas fa-phone"></i><span className="topbar__text">1+ (234) 5678 9101</span></li>
                    </ul>
                </div>
                <div className="topbar__container_social">
                    <ul>
                        <li><i className="fab fa-twitter"></i><span className="topbar__text">Twitter</span></li>
                        <li><i className="fab fa-facebook-f"></i><span className="topbar__text">Facebook</span></li>
                    </ul>
                </div>
            </div>
        </TopbarStyle>
    )
};

const TopbarStyle = styled.div `
    .topbar__container {
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px 16px;
        height: 8vh;
        background-color: #eee;
    }

    .topbar__container_contact ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .topbar__container_social ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .topbar__container li {
        padding: 0 0 0 5px;
        color: #797979;
    }

    .topbar__text {
        display: none;
        padding: 0 10px;
    }

    @media only screen and (min-width: 768px) {
        .topbar__text {
            display: inline;
        }

        .navbar__container {
            padding: 0 29px 0 24px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .topbar__container {
            padding: 5px 30px;
            height: 6vh;
        }
    }

    @media only screen and (min-width: 1440px) {
        .topbar__container {
            padding: 5px 150px;
            height: 5vh;
        }
    }
`;

export default Topbar;