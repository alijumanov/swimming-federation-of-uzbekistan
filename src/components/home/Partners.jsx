import React from 'react';
import '../../styles/home/Partners.scss';
import Img1 from '../../assets/images/partner1.png';
import Img2 from '../../assets/images/partner2.jpg';
import Img3 from '../../assets/images/partner3.jpg';
import Img4 from '../../assets/images/partner4.jpg';
import Img5 from '../../assets/images/partner5.jpg';

function Partners() {
    return (
        <div className="Partners parent">
            <div className="wrapper gap-3">
                <h1 className="sub-title">партнеры и спонсоры</h1>
                <div className="imgs">
                    <a href='https://www.borjomi.com/int_ru/water/' target='_blank' className="img pd-1 round-05">
                        <img src={Img1} alt="img" className="partner_img" />
                    </a>
                    <a href='https://www.worldaquatics.com' target='_blank' className="img pd-1 round-05">
                        <img src={Img2} alt="img" className="partner_img" />
                    </a>
                    <a href='https://www.ngmk.uz/uz/' target='_blank' className="img pd-1 round-05">
                        <img src={Img3} alt="img" className="partner_img" />
                    </a>
                    <a href='https://www.olympic.uz/en/' target='_blank' className="img pd-1 round-05">
                        <img src={Img4} alt="img" className="partner_img" />
                    </a>
                    <a href='https://edu.uz/uz' target='_blank' className="img pd-1 round-05">
                        <img src={Img5} alt="img" className="partner_img" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Partners
