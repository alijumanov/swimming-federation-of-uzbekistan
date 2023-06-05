import React from 'react';
import "swiper/css";
import { Autoplay } from "swiper";
import '../../styles/home/Header.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import HeadImg from '../../assets/images/head.jpg';
import { useQuery } from 'react-query';
import { fetchNews } from '../../api/Api';

function Header() {

    // data of news

    const dataNews = useQuery('news', fetchNews);

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
                        {dataNews?.data?.data?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`news/${item.id}`} className="new_card pd-1-5 gap-05 round-1-5">
                                    <p className="text date">{item.pub_date.slice(0, 10)}</p>
                                    <p className="text desc">{item.description}</p>
                                    <p className='text explore'>Explore...</p>
                                </Link>
                            </SwiperSlide>
                        ))}
                        {dataNews?.data?.data?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`news/${item.id}`} className="new_card pd-1-5 gap-05 round-1-5">
                                    <p className="text date">{item.pub_date.slice(0, 10)}</p>
                                    <p className="text desc">{item.description}</p>
                                    <p className='text explore'>Explore...</p>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Header
