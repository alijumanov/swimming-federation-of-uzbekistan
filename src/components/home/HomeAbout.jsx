import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/HomeAbout.scss';
import Img from '../../assets/images/about.jpg';

function HomeAbout() {
    return (
        <div className="HomeAbout parent">
            <div className="wrapper">
                <div className="left title">сила скорость результат</div>
                <div className="right gap-2">
                    <h1 className="sub-title">О федерации</h1>
                    <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illo voluptatibus quas sapiente quod neque accusamus, necessitatibus et eum quidem enim facere alias laborum expedita eaque quibusdam nam. Debitis, dignissimos laudantium qui quas magni temporibus quis deserunt maxime enim molestias, asperiores ea!</p>
                    <Link to="/about" className='explore big-text scale-05'>Узнать больше</Link>
                </div>
            </div>
            <img src={Img} alt="img" className="full_img" />
        </div>
    )
}

export default HomeAbout
