import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';
import { CloseIcon, FacebookIcon, InstagramIcon, MenuIcon, TelegramIcon } from '../assets/svgImages';

function Navbar({ changeContactModal }) {

    // scroll options

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.getElementById("nav");
            nav.classList.toggle("scrolling_navbar", window.scrollY > 10)
        })
    }, [])

    // responsive menu options

    const [showMenu, setShowMenu] = useState(false);
    const [showMenuBar, setShowMenuBar] = useState(false);

    return (
        <div className="Navbar" id='nav'>
            <nav className="navbar">
                <div className="top_navbar">
                    <div className="left gap-3">
                        <Link to="/" className='logo' onClick={() => window.scrollTo(0, 0)}>
                            <img src={Logo} alt="logo" className="logo_img" />
                        </Link>
                        <div className="language gap">
                            <button className="lang pd-05 round-05 text">EN</button>
                            <button className="lang pd-05 round-05 text">UZ</button>
                            <button className="lang pd-05 round-05 text active_lang">RU</button>
                        </div>
                    </div>
                    <div className={`links gap-2-5 ${showMenu && "show_menu"}`}>
                        <Link to="/about" className='text link'>
                            О федерации
                            <div className="link_bar">
                                <div className="cont_link pd-3 round-2">
                                    <Link to="/" className="bar-link text">Руководство Федерации</Link>
                                    <Link to="/" className="bar-link text">Сотрудники Федерации</Link>
                                    <Link to="/" className="bar-link text">Филиалы Федерации</Link>
                                    <Link to="/" className="bar-link text">Партнеры и спонсоры</Link>
                                    <Link to="/" className="bar-link text">Бассейны</Link>
                                    <Link to="/" className="bar-link text">Запись на секции</Link>
                                    <Link to="/" className="bar-link text">Контакты</Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className='text link'>
                            Календарь
                            <div className="link_bar">
                                <div className="cont_link pd-3 round-2">
                                    <Link to="/" className="bar-link text">Руководство Федерации</Link>
                                    <Link to="/" className="bar-link text">Сотрудники Федерации</Link>
                                    <Link to="/" className="bar-link text">Филиалы Федерации</Link>
                                    <Link to="/" className="bar-link text">Партнеры и спонсоры</Link>
                                    <Link to="/" className="bar-link text">Бассейны</Link>
                                    <Link to="/" className="bar-link text">Запись на секции</Link>
                                    <Link to="/" className="bar-link text">Контакты</Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className='text link'>
                            Сборная
                            <div className="link_bar">
                                <div className="cont_link pd-3 round-2">
                                    <Link to="/" className="bar-link text">Руководство Федерации</Link>
                                    <Link to="/" className="bar-link text">Сотрудники Федерации</Link>
                                    <Link to="/" className="bar-link text">Филиалы Федерации</Link>
                                    <Link to="/" className="bar-link text">Партнеры и спонсоры</Link>
                                    <Link to="/" className="bar-link text">Бассейны</Link>
                                    <Link to="/" className="bar-link text">Запись на секции</Link>
                                    <Link to="/" className="bar-link text">Контакты</Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/news" className='text link'>
                            Новости
                            <div className="link_bar">
                                <div className="cont_link pd-3 round-2">
                                    <Link to="/" className="bar-link text">Руководство Федерации</Link>
                                    <Link to="/" className="bar-link text">Сотрудники Федерации</Link>
                                    <Link to="/" className="bar-link text">Филиалы Федерации</Link>
                                    <Link to="/" className="bar-link text">Партнеры и спонсоры</Link>
                                    <Link to="/" className="bar-link text">Бассейны</Link>
                                    <Link to="/" className="bar-link text">Запись на секции</Link>
                                    <Link to="/" className="bar-link text">Контакты</Link>
                                </div>
                            </div>
                        </Link>
                        <Link to="/" className='text link'>
                            Плавание
                            <div className="link_bar">
                                <div className="cont_link pd-3 round-2">
                                    <Link to="/" className="bar-link text">Руководство Федерации</Link>
                                    <Link to="/" className="bar-link text">Сотрудники Федерации</Link>
                                    <Link to="/" className="bar-link text">Филиалы Федерации</Link>
                                    <Link to="/" className="bar-link text">Партнеры и спонсоры</Link>
                                    <Link to="/" className="bar-link text">Бассейны</Link>
                                    <Link to="/" className="bar-link text">Запись на секции</Link>
                                    <Link to="/" className="bar-link text">Контакты</Link>
                                </div>
                            </div>
                        </Link>
                        <button className="more_btn text" onClick={() => setShowMenuBar(true)}>Ещё...</button>
                        <div className="socials gap-2">
                            <a href="https://www.facebook.com/AquaticsUz" target='_blank' className="icon-1"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/aquatics.uz/" target='_blank' className="icon-1"><InstagramIcon /></a>
                            <a href="https://t.me/aquatics_uz" target='_blank' className="icon-1" title='@aquatics_uz'><TelegramIcon /></a>
                        </div>
                        <div className="close_icon" onClick={() => setShowMenu(false)}><CloseIcon /></div>
                    </div>
                    <button className="submit_btn text" onClick={changeContactModal}>Оставить заявку</button>
                    <div className="menu_icon" onClick={() => setShowMenuBar(true)}><MenuIcon /></div>
                </div>
                <div className="bottom_navbar">
                    <div className="socials gap-2">
                        <a href="https://www.facebook.com/AquaticsUz" target='_blank' className="icon-1"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/aquatics.uz/" target='_blank' className="icon-1"><InstagramIcon /></a>
                        <a href="https://t.me/aquatics_uz" target='_blank' className="icon-1" title='@aquatics_uz'><TelegramIcon /></a>
                    </div>
                </div>
            </nav>
            <div className={`menu_bar gap-5 ${showMenuBar && "show_menu_bar"}`}>
                <div className="searching">
                    <input type="search" name="search" id="search" className='big-text pd-1' placeholder='Поиск' />
                </div>
                <div className="links gap-5">
                    <div className="tool gap-05">
                        <Link to="/" className="tool-title text">Плавание</Link>
                        <Link to="/" className="tool-link text">Спортсмены</Link>
                        <Link to="/" className="tool-link text">Тренера</Link>
                        <Link to="/" className="tool-link text">Судьи</Link>
                        <Link to="/" className="tool-link text">Рекорды</Link>
                        <Link to="/" className="tool-link text">Правила</Link>
                        <Link to="/" className="tool-link text">Сборная Узбекистана</Link>
                    </div>
                    <div className="tool gap-05">
                        <Link to="/" className="tool-title text">Синхронного плавания</Link>
                        <Link to="/" className="tool-link text">Соревнования</Link>
                        <Link to="/" className="tool-link text">Тренера</Link>
                        <Link to="/" className="tool-link text">Судьи</Link>
                        <Link to="/" className="tool-link text">Рекорды</Link>
                        <Link to="/" className="tool-link text">Правила</Link>
                        <Link to="/" className="tool-link text">Сборные команды Узбекистана</Link>
                    </div>
                    <div className="tool gap-05">
                        <Link to="/" className="tool-title text">Водного поло</Link>
                        <Link to="/" className="tool-link text">Соревнования</Link>
                        <Link to="/" className="tool-link text">Тренера</Link>
                        <Link to="/" className="tool-link text">Судьи</Link>
                        <Link to="/" className="tool-link text">Рекорды</Link>
                        <Link to="/" className="tool-link text">Правила</Link>
                        <Link to="/" className="tool-link text">Сборные команды Узбекистана</Link>
                    </div>
                    <div className="tool gap-05">
                        <Link to="/" className="tool-title text">Прыжки в воду</Link>
                        <Link to="/" className="tool-link text">Спортсмены</Link>
                        <Link to="/" className="tool-link text">Тренера</Link>
                        <Link to="/" className="tool-link text">Судьи</Link>
                        <Link to="/" className="tool-link text">Рекорды</Link>
                        <Link to="/" className="tool-link text">Правила</Link>
                        <Link to="/" className="tool-link text">Сборные команды Узбекистана</Link>
                    </div>
                    <div className="tool gap-05">
                        <Link to="/" className="tool-title text">О Федерации</Link>
                        <Link to="/" className="tool-link text">Руководство Федерации</Link>
                        <Link to="/" className="tool-link text">Сотрудники Федерации</Link>
                        <Link to="/" className="tool-link text">Филиалы Федерации</Link>
                        <Link to="/" className="tool-link text">Партнеры и спонсоры</Link>
                        <Link to="/" className="tool-link text">Бассейны</Link>
                        <Link to="/" className="tool-link text">Запись на секции</Link>
                        <Link to="/" className="tool-link text">Контакты</Link>
                    </div>
                    <div className="tool gap-05">
                        <Link to="/" className="tool-title text">Медиа</Link>
                        <Link to="/" className="tool-link text">Новости</Link>
                        <Link to="/" className="tool-link text">Интервью</Link>
                        <Link to="/" className="tool-link text">Фотогалерея</Link>
                        <Link to="/" className="tool-link text">Видео галерея</Link>
                        <Link to="/" className="tool-title text">Соревнования</Link>
                        <Link to="/" className="tool-title text">Документы</Link>
                        <Link to="/" className="tool-title text">Допинг</Link>
                        <Link to="/" className="tool-title text">Спортсмены</Link>
                    </div>
                </div>
                <div className="close_icon" onClick={() => setShowMenuBar(false)}><CloseIcon /></div>
            </div>
        </div>
    )
}

export default Navbar
