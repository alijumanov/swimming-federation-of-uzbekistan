import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';
import { CloseIcon, FacebookIcon, InstagramIcon, MenuIcon, TelegramIcon } from '../assets/svgImages';

function Navbar() {

    // scroll options

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.getElementById("nav");
            nav.classList.toggle("scrolling_navbar", window.scrollY > 10)
        })
    }, [])

    // responsive menu options

    const [showMenu, setShowMenu] = useState(false);

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
                        <Link to="/about" className='text link'>О федерации</Link>
                        <Link to="/" className='text link'>Календарь</Link>
                        <Link to="/" className='text link'>Сборная</Link>
                        <Link to="/news" className='text link'>Новости</Link>
                        <Link to="/" className='text link'>Плавание</Link>
                        <button className="more_btn text">Ещё...</button>
                        <div className="socials gap-2">
                            <a href="https://www.facebook.com/AquaticsUz" target='_blank' className="icon-1"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/aquatics.uz/" target='_blank' className="icon-1"><InstagramIcon /></a>
                            <a href="https://t.me/aquatics_uz" target='_blank' className="icon-1" title='@aquatics_uz'><TelegramIcon /></a>
                        </div>
                        <div className="close_icon" onClick={() => setShowMenu(false)}><CloseIcon /></div>
                    </div>
                    <div className="submit_btn text">Оставить заявку</div>
                    <div className="menu_icon" onClick={() => setShowMenu(true)}><MenuIcon /></div>
                </div>
                <div className="bottom_navbar">
                    <div className="socials gap-2">
                        <a href="https://www.facebook.com/AquaticsUz" target='_blank' className="icon-1"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/aquatics.uz/" target='_blank' className="icon-1"><InstagramIcon /></a>
                        <a href="https://t.me/aquatics_uz" target='_blank' className="icon-1" title='@aquatics_uz'><TelegramIcon /></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
