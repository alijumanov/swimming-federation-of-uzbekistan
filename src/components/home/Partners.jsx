import React from 'react';
import { useQuery } from 'react-query';
import '../../styles/home/Partners.scss';
import { fetchPartners } from '../../api/Api';

function Partners() {

    // data of partners

    const { data } = useQuery('partners', fetchPartners);

    return (
        <div className="Partners parent">
            <div className="wrapper gap-3">
                <h1 className="sub-title">партнеры и спонсоры</h1>
                <div className="imgs">
                    {data?.data?.map((item) => (
                        <a key={item.id} href='#' target='_blank' className="img pd-1 round-05">
                            <img src={item.logo} alt="img" className="partner_img" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
