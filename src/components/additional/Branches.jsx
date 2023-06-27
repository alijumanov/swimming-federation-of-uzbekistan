import React from 'react';
import { useQuery } from 'react-query';
import { fetchBranches } from '../../api/Api';
import '../../styles/additional/Branches.scss';

function Branches() {

    const dataBranches = useQuery('branches', fetchBranches);

    console.log(dataBranches?.data?.data);

    return (
        <div className="Branches parent">
            <div className="wrapper"></div>
        </div>
    )
}

export default Branches
