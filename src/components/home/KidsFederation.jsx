import React from 'react';
import '../../styles/home/KidsFederation.scss';
import KidsImg from '../../assets/images/kids.png';
import { Link } from 'react-router-dom';
import { UserIcon } from '../../assets/svgImages';

function KidsFederation() {
    return (
        <div className="KidsFederation parent">
            <img src={KidsImg} alt="img" className="kids_img" />
            <div className="wrapper gap-3">
                <h1 className="sub-title">Дети в федерации</h1>
                <div className="infos">
                    <Link to="/" className="info round-1 pd-2 gap-1">
                        <div className="icon"><UserIcon /></div>
                        <h3 className="big-text">Группа 3+</h3>
                        <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illo voluptatibus quas sapiente quod neque accusamus, necessitatibus et eum.</p>
                        <p className='explore text'>Узнать больше</p>
                    </Link>
                    <Link to="/" className="info round-1 pd-2 gap-1">
                        <div className="icon"><UserIcon /></div>
                        <h3 className="big-text">Группа 7+</h3>
                        <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illo voluptatibus quas sapiente quod neque accusamus, necessitatibus et eum.</p>
                        <p className='explore text'>Узнать больше</p>
                    </Link>
                    <Link to="/" className="info round-1 pd-2 gap-1">
                        <div className="icon"><UserIcon /></div>
                        <h3 className="big-text">Группа 12+</h3>
                        <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illo voluptatibus quas sapiente quod neque accusamus, necessitatibus et eum.</p>
                        <p className='explore text'>Узнать больше</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default KidsFederation
