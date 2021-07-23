import React from 'react';
import styled from 'styled-components';

const Article = () => {
    return (
        <ArticleStyle>
            <div class="article__container">
                <div class="article__container_header">
                    <h1 class="article__header">ARTICLES</h1>
                </div>
                <div class="article__tablet">
                    <div class="article__container_post">
                        <div class="article__postImage">
                            <img class="article__postImage_image" src="https://preview.colorlib.com/theme/cargo/images/cargo_sea_small.jpg" alt="blog" />
                        </div>
                        <div class="article__postBlog">
                            <h3 class="article__postBlog_date">Apr 19, 2019</h3>
                            <h1 class="article__postBlog_header">
                                Knowing the Difference Is Key to Effective Logistics
                            </h1>
                            <p class="article__postBlog_text">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts
                            </p>
                            <a class="article__postBlog_more">Read More</a>
                        </div>
                    </div>
                    <div class="article__container_post">
                        <div class="article__postImage">
                            <img class="article__postImage_image" src="	https://preview.colorlib.com/theme/cargo/images/cargo_air_small.jpg" alt="blog" />
                        </div>
                        <div class="article__postBlog">
                            <h3 class="article__postBlog_date">Apr 19, 2019</h3>
                            <h1 class="article__postBlog_header">
                                Knowing the Difference Is Key to Effective Logistics
                            </h1>
                            <p class="article__postBlog_text">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts
                            </p>
                            <a class="article__postBlog_more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </ArticleStyle>
    )
}

const ArticleStyle = styled.div`
    padding: 48px 15px;

    .article__container {
        font-family: Oswald, sans-serif;
    }

    .article__container_header {
        margin-bottom: 50px;
    }

    .article__header {
        font-size: 32px;
        margin-bottom: 8px;
        color: #ff8b00;
        text-align: center;
    }

    .article__container_post {
        /* display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start; */
        margin-bottom: 50px;
    }

    .article__postImage {
        /* width: 50%; */
    }

    .article__postImage_image {
        display: block;
        height: auto;
        width: 100%;
        border-radius: 3px;
    }

    .article__postBlog {
        /* width: 43%; */
        margin-top: 15px;
    }

    .article__postBlog_date {
        font-size: 16px;
        color: #6c757d;
    }

    .article__postBlog_header {
        margin-bottom: 16px;
        font-size: 24px;
    }

    .article__postBlog_text {
        font-size: 17px;
        color: #939393;
        line-height: 30px;
        margin-bottom: 16px;
    }

    .article__postBlog_more {
        color: #ff8b00;
        font-size: 18px;
    }

    @media only screen and (min-width: 768px) {
        .article__container {
            margin: 0 20px;
        }
    }

    @media only screen and (min-width: 992px) {
        .article__header {
            font-size: 42px;
        }

        .article__tablet {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0 20px;
        }

        .article__container_post {
            width: 48%;
        }

        .article__postBlog {
            margin-top: 25px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .article__tablet {
            margin: 0 28px;
        }

        .article__header {
            font-size: 45px;
        }
    }

    @media only screen and (min-width: 1440px) {
        .article__tablet {
            margin: 100px 150px 50px;
        }

        .article__postBlog {
            margin-top: 35px;
        }
    }
`;

export default Article;