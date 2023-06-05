import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/additional/About.scss';
import { FacebookIcon, InstagramIcon, MasterIcon, SearchIcon, SportsmenIcon, TelegramIcon } from '../../assets/svgImages';

function About() {
    return (
        <div className="About parent">
            <div className="wrapper gap-2">
                <h1 className="sub-title">О федерации</h1>
                <p className="text">Lesuscipit ullam labore tempore nulla voluptate impedit numquam expedita sapiente dolorum quasi, omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat ut iure libero provident minus fugit maxime soluta, dicta, qui tempora architecto pariatur ipsam consectetur! Dolorum quos ex earum odit error doloribus nesciunt quia cumque, modi repellat quo in est nobis eveniet rem qui voluptatibus. Iste suscipit deleniti, natus beatae reprehenderit cumque rem, rerum, eius recusandae dolor sapiente optio esse voluptas quae dicta saepe. Omnis corruptet aliquam saepe perspiciatis soluta molestias voluptas sequi ipsum itaque deserunt. Ut sed animi dolorum? Fugiat, ad! Labore libero nobis quam temporibus! Eum odio commodi voluptas enim sapiente omnis asperiores eveniet quia ad.</p>
                <p className="text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat ut iure libero provident minus fugit maxime soluta, dicta, qui tempora architecto pariatur ipsam consectetur! Dolorum quos ex earum odit error doloribus nesciunt quia cumque, modi repellat quo in est nobis eveniet rem qui voluptatibus. Iste suscipit deleniti, natus beatae reprehenderit cumque rem, rerum, eius recusandae dolor sapiente optio esse voluptas quae dicta saepe. Omnis corrupti architecto quas fugiat nostrum tempore sunt voluptatibus enim et sequi ipsum itaque dese.</p>
                <h1 className="sub-title mtop-2">Federatsiya tuzilishi</h1>
                <div className="structures gap-2">
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><SportsmenIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><MasterIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><SearchIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><SportsmenIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><MasterIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><SearchIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><SportsmenIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                    <Link to="/" className="structure round-1 pd-1-5 gap-05">
                        <div className="icon"><MasterIcon /></div>
                        <p className="text">Lorem ipsum</p>
                        <p className="min-text">Omnis quaerat, facere, nam dolorem? Unde nemo quibusdam fugiat</p>
                    </Link>
                </div>
                <div className="contacts mtop-2">
                    <div className="infos pd-4 gap-1 round-1">
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
                        <div className="icons gap-4 mtop-1">
                            <a href="https://www.facebook.com/AquaticsUz" target='_blank' className="icon"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/aquatics.uz/" target='_blank' className="icon"><InstagramIcon /></a>
                            <a href="https://t.me/aquatics_uz" target='_blank' className="icon" title='@aquatics_uz'><TelegramIcon /></a>
                        </div>
                    </div>
                    <form className="forms gap-05">
                        <label htmlFor="name" className='text'>Ismingizni kiriting</label>
                        <input type="text" id='name' name='name' required min={2} minLength={2} className='input text pd-05 round-05' />
                        <label htmlFor="phone" className='text mtop-1'>Telefon raqamingizni kiriting</label>
                        <input type="tel" id='phone' name='phone' required min={2} minLength={2} className='input text pd-05 round-05' />
                        <label htmlFor="message" className='text mtop-1'>Telefon raqamingizni kiriting</label>
                        <textarea name="message" id="message" rows="6" className='input text pd-05 round-05'></textarea>
                        <button type="submit" className='send_btn mtop-2 scale-05 text pd-1 round-05'>Yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default About
