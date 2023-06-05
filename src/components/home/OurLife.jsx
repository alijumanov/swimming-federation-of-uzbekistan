import React, { useState } from 'react';
import '../../styles/home/OurLife.scss';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/kids.png';
import Img2 from '../../assets/images/head.jpg';
import Img3 from '../../assets/images/polo.jpeg';
import Img4 from '../../assets/images/about.jpg';
import Img5 from '../../assets/images/polo.jpeg';
import GlassImg from '../../assets/images/glass.jpg';
import { CloseIcon, EyeIcon, FacebookIcon, InstagramIcon, TelegramIcon } from '../../assets/svgImages';

function OurLife() {

    // image options

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <div className="OurLife parent">
                <img src={GlassImg} alt="img" className="glass_img" />
                <div className="wrapper gap-1-5">
                    <div className="img_cont" onClick={() => setSelectedImg(Img1)}>
                        <img src={Img1} alt="img" className="img" />
                        <div className="eye_icon"><EyeIcon /></div>
                    </div>
                    <div className="img_cont" onClick={() => setSelectedImg(Img2)}>
                        <img src={Img2} alt="img" className="img" />
                        <div className="eye_icon"><EyeIcon /></div>
                    </div>
                    <div className="img_cont" onClick={() => setSelectedImg(Img3)}>
                        <img src={Img3} alt="img" className="img" />
                        <div className="eye_icon"><EyeIcon /></div>
                    </div>
                    <div className="img_cont" onClick={() => setSelectedImg(Img4)}>
                        <img src={Img4} alt="img" className="img" />
                        <div className="eye_icon"><EyeIcon /></div>
                    </div>
                    <div className="img_cont" onClick={() => setSelectedImg(Img5)}>
                        <img src={Img5} alt="img" className="img" />
                        <div className="eye_icon"><EyeIcon /></div>
                    </div>
                    <div className="img_cont">
                        <div className="socials gap-2">
                            <p className="text">наша жизнь</p>
                            <div className="icons gap-2">
                                <a href="https://www.facebook.com/AquaticsUz" target='_blank' className="icon"><FacebookIcon /></a>
                                <a href="https://www.instagram.com/aquatics.uz/" target='_blank' className="icon"><InstagramIcon /></a>
                                <a href="https://t.me/aquatics_uz" target='_blank' className="icon" title='@aquatics_uz'><TelegramIcon /></a>
                            </div>
                            <Link to="/" className="media_btn min-text">медиа</Link>
                        </div>
                    </div>
                </div>
            </div>
            {selectedImg &&
                <div className="selected_ourlife">
                    <div className="close_icon" onClick={() => setSelectedImg(null)}><CloseIcon /></div>
                    <img src={selectedImg} alt="img" className="sleceted_img" />
                    <div className="contrast" onClick={() => setSelectedImg(null)}></div>
                </div>
            }
        </>
    )
}

export default OurLife
