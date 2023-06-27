import React from 'react';
import { useQuery } from 'react-query';
import { fetchTournaments } from '../../api/Api';
import '../../styles/additional/Competetions.scss';

function Competetions() {

    const dataCompetetions = useQuery('competetions', fetchTournaments);

    console.log(dataCompetetions?.data?.data)

    return (
        <div className="Competetions parent">
            <div className="wrapper">
                <h1 className="sub-title">Bizning musobaqalar</h1>
            </div>
        </div>
    )
}

export default Competetions
