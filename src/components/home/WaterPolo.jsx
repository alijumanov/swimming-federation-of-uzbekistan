import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/WaterPolo.scss';
import Img from '../../assets/images/polo.jpeg';
import { MasterIcon, SportsmenIcon } from '../../assets/svgImages';

function WaterPolo() {
    return (
        <div className="WaterPolo parent">
            <div className="wrapper">
                <div className="circle"></div>
                <div className="infos">
                    <div className="imgs">
                        <img src={Img} alt="img" className="img" />
                    </div>
                    <div className="texts gap-2">
                        <h1 className="sub-title">водное поло</h1>
                        <p className="text desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illo voluptatibus quas sapiente quod neque accusamus, necessitatibus et eum quidem enim facere alias laborum expedita eaque quibusdam nam. Debitis, dignissimos laudantium qui quas magni temporibus quis deserunt maxime enim molestias, asperiores ea!</p>
                        <div className="icons gap-2">
                            <div className="info gap-1">
                                <div className="icon"><SportsmenIcon /></div>
                                <p className="text">Спортсмены</p>
                            </div>
                            <div className="info gap-1">
                                <div className="icon"><MasterIcon /></div>
                                <p className="text">Тренера</p>
                            </div>
                        </div>
                        <div className="btns gap-2 mtop-1">
                            <Link to="/" className="submit_btn text scale-05">Оставить заявку</Link>
                            <Link to="/" className='explore text'>Подробне...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaterPolo
