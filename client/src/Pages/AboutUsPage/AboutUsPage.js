import React from 'react';
import styles from './AboutUsPage.module.css'
import {HeaderMainDescription} from "../../Components/HeaderMainDescription/HeaderMainDescription";
import {IntroCapTitle} from "../../Components/IntroCapTitle/IntroCapTitle";


export const AboutUsPage = () => {


    return (
        <>
            <HeaderMainDescription/>
            <div className={'container'}>
                <IntroCapTitle capTitle={'About us'}/>

                <div className={`row ${styles.container_text}`}>
                    <div className={`col s12 m7 l7 ${styles.container_text__text}`}>
                        <span>HELLO!</span>
                        <span>  I’m Nadine Sykora and I’m one of the top travel vloggers on YouTube who travels the world and shares my experiences and travel expertise through my videos and on Instagram.
                            My travel credentials include over 55+ countries visited, all photographed and recorded on video over the last 10 years and shared to my over 480,000+ subscribers on my YouTube channel.

                            Whether you’re new to travel or a seasoned globetrotter, be sure to check out my content which is full of advice, hacks, and adventures to help and inspire your next trip.
                        </span>
                    </div>
                    <div className="col s12 m5 l5">
                        <img className={`${styles.img}`} src="/img/nature/main.jpg"/>
                    </div>
                </div>

                <div className={`row ${styles.container_text} cyan`}>
                    <div className={`col s12 m5 l5`}>
                        <img className={`${styles.img}`} src="/img/nature/main.jpg"/>
                    </div>
                    <div className={`col s12 m7 l7 ${styles.container_text__text}`}>
                        <span>  I have also presented & spoken on expert panels at the Canadian Media Producers Association, Google, VidCon, Buffer Festival and the Travel & Adventure Show. Co-MC’d the International Luxury Hoteliers Conference, plus was a keynote speaker at the 2016 Women in Travel Summit.
                                In December 2014 I was invited as one of the Top 130 of the most inﬂuential travel bloggers and digital media outlets to the White House to attend the White House Travel Blogger Summit on Study Abroad and Global Citizenship.
                            My passion for travel and love for comedy is contagious and I love sharing the destinations I visit in fun and funny videos and blog posts that teach and inspire others to follow their travel dreams!</span>
                    </div>
                </div>

                <div className={`row ${styles.container_text}`}>
                    <div className={`col s12 m7 l7 ${styles.container_text__text}`}>
                        <span>  I have also presented & spoken on expert panels at the Canadian Media Producers Association, Google, VidCon, Buffer Festival and the Travel & Adventure Show. Co-MC’d the International Luxury Hoteliers Conference, plus was a keynote speaker at the 2016 Women in Travel Summit.
                                    In December 2014 I was invited as one of the Top 130 of the most inﬂuential travel bloggers and digital media outlets to the White House to attend the White House Travel Blogger Summit on Study Abroad and Global Citizenship.
                                    My passion for travel and love for comedy is contagious and I love sharing the destinations I visit in fun and funny videos and blog posts that teach and inspire others to follow their travel dreams!</span>
                    </div>
                    <div className="col s12 m5 l5">
                        <img className={`${styles.img}`} src="/img/nature/main.jpg"/>
                    </div>
                </div>

            </div>
        </>
    )
}