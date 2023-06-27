import React from 'react';
import { useQuery } from 'react-query';
import { fetchTeams } from '../../api/Api';
import '../../styles/additional/Teams.scss';

function Teams() {

    const dataTeams = useQuery('teams', fetchTeams);

    console.log(dataTeams?.data?.data);

    return (
        <div className="Teams parent">
            <div className="wrapper">
                <h1 className="sub-title">Bizning federatsiya jamoalari</h1>
            </div>
        </div>
    )
}

export default Teams
