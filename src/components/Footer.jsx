import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';

function Footer() {
    return (
        <div className="Footer parent gap-4">
            <div className="top_footer">
                <div className="left">
                    <div className="tools gap-3">
                        <div className="tool gap-05">
                            <p className="text tool_title">Судьи</p>
                            <Link to="/" className='min-text mtop-1'>Плавание</Link>
                            <Link to="/" className='min-text'>Водное поло</Link>
                            <Link to="/" className='min-text'>Прижки в воду</Link>
                            <Link to="/" className='min-text'>Синхронное плавание</Link>
                            <Link to="/" className='min-text'>Тренера</Link>
                            <Link to="/" className='min-text'>Сореврования</Link>
                            <Link to="/" className='min-text'>Спортсмены</Link>
                        </div>
                        <div className="tool gap-05">
                            <p className="text tool_title">О Федерации</p>
                            <Link to="/" className='min-text mtop-1'>Плавание</Link>
                            <Link to="/" className='min-text'>Водное поло</Link>
                            <Link to="/" className='min-text'>Прижки в воду</Link>
                            <Link to="/" className='min-text'>Синхронное плавание</Link>
                            <Link to="/" className='min-text'>Тренера</Link>
                            <Link to="/" className='min-text'>Сореврования</Link>
                            <Link to="/" className='min-text'>Спортсмены</Link>
                        </div>
                        <div className="tool gap-05">
                            <p className="text tool_title">Филифлы Федерации</p>
                            <Link to="/" className='min-text mtop-1'>Плавание</Link>
                            <Link to="/" className='min-text'>Водное поло</Link>
                            <Link to="/" className='min-text'>Прижки в воду</Link>
                            <Link to="/" className='min-text'>Синхронное плавание</Link>
                            <Link to="/" className='min-text'>Тренера</Link>
                            <Link to="/" className='min-text'>Сореврования</Link>
                            <Link to="/" className='min-text'>Спортсмены</Link>
                        </div>
                    </div>
                    <div className="tegs mtop-4 gap-1">
                        <h3 className="big-text">Теги <span></span></h3>
                        <div className="bars gap-1">
                            <Link to="/" className="bar min-text pd-05 round-05">Конференция</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Плавание</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Сборы</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Конференция</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Календарь событий</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Плавание</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Сборы</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Плавание</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Конференция</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Календарь событий</Link>
                            <Link to="/" className="bar min-text pd-05 round-05">Сборы</Link>
                        </div>
                    </div>
                </div>
                <div className="right pd-4 gap-1 round-1">
                    <h1 className="name cont">Контакты</h1>
                    <select className="selection text mtop-1 mbot-1">
                        <option value="Мирзо Улугбекский р-н">Мирзо Улугбекский р-н</option>
                        <option value="Мирзо Улугбекский р-н">Мирзо Улугбекский р-н</option>
                        <option value="Мирзо Улугбекский р-н">Мирзо Улугбекский р-н</option>
                        <option value="Мирзо Улугбекский р-н">Мирзо Улугбекский р-н</option>
                        <option value="Мирзо Улугбекский р-н">Мирзо Улугбекский р-н</option>
                    </select>
                    <p className="text">Адрес: 100142, Республика Узбекистан, г.Ташкент, Мирзо Улугбекский район, улица Буюк ипак юли, 471</p>
                    <p className="text tel">Тел: <a href="tel:+998781500000">+99878 <span className='name'>150 00 00</span></a></p>
                    <p className="text email">Email: <a href="mailto:info@swimming.uz">info@swimming.uz</a></p>
                </div>
            </div>
            <div className="bottom_footer gap-1">
                <div className="left gap-1">
                    <Link to="/" className='logo' onClick={() => window.scrollTo(0, 0)}>
                        <img src={Logo} alt="logo" className="img" />
                    </Link>
                    <p className="text">Федерация плавания Узбекистана</p>
                </div>
                <p className="right min-text">Все права защищены. При использовании материалов сайта ссылка на сайт обезательна &#169; 2023г</p>
            </div>
        </div>
    )
}

export default Footer
