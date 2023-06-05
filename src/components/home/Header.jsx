import React from 'react';
import "swiper/css";
import { Autoplay } from "swiper";
import '../../styles/home/Header.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import HeadImg from '../../assets/images/head.jpg';

function Header() {
    return (
        <div className="Header parent">
            <img src={HeadImg} alt="img" className="head_img" />
            <Link to="/" className="side_btn text round-1-5">Календарь событий</Link>
            <div className="wrapper">
                <h1 className="title head_title">только</h1>
                <h1 className="head_sub_title title">вперед</h1>
                <div className="news">
                    <h1 className="sub-title gap-2">Новости <span></span></h1>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link to="/" className="new_card pd-1-5 gap-05 round-1-5">
                                <p className="text date">05.05.2023</p>
                                <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic dolor, perspiciatis deserunt ut corrupti dolorum assumenda repudiandae nam, fugiat velit repellat? Dolor quae voluptatibus et esse quos corporis ex.</p>
                                <p className='text explore'>Explore...</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="new_card pd-1-5 gap-05 round-1-5">
                                <p className="text date">05.05.2023</p>
                                <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic dolor, perspiciatis deserunt ut corrupti dolorum assumenda repudiandae nam, fugiat velit repellat? Dolor quae voluptatibus et esse quos corporis ex.</p>
                                <p className='text explore'>Explore...</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="new_card pd-1-5 gap-05 round-1-5">
                                <p className="text date">05.05.2023</p>
                                <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic dolor, perspiciatis deserunt ut corrupti dolorum assumenda repudiandae nam, fugiat velit repellat? Dolor quae voluptatibus et esse quos corporis ex.</p>
                                <p className='text explore'>Explore...</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="new_card pd-1-5 gap-05 round-1-5">
                                <p className="text date">05.05.2023</p>
                                <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic dolor, perspiciatis deserunt ut corrupti dolorum assumenda repudiandae nam, fugiat velit repellat? Dolor quae voluptatibus et esse quos corporis ex.</p>
                                <p className='text explore'>Explore...</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="new_card pd-1-5 gap-05 round-1-5">
                                <p className="text date">05.05.2023</p>
                                <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic dolor, perspiciatis deserunt ut corrupti dolorum assumenda repudiandae nam, fugiat velit repellat? Dolor quae voluptatibus et esse quos corporis ex.</p>
                                <p className='text explore'>Explore...</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/" className="new_card pd-1-5 gap-05 round-1-5">
                                <p className="text date">05.05.2023</p>
                                <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic dolor, perspiciatis deserunt ut corrupti dolorum assumenda repudiandae nam, fugiat velit repellat? Dolor quae voluptatibus et esse quos corporis ex.</p>
                                <p className='text explore'>Explore...</p>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Header
