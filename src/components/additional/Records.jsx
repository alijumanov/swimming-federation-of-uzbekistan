import React from 'react';
import '../../styles/additional/Records.scss';
import { useQuery } from 'react-query';
import { fetchRecords } from '../../api/Api';
import { Link } from 'react-router-dom';
import { MedalIcon } from '../../assets/svgImages';

function Records() {

    const dataRecords = useQuery('records', fetchRecords);

    return (
        <div className="Records parent">
            <div className="wrapper gap-2">
                <h1 className="sub-title">Federatsiya recordlari</h1>
                <div className="cards gap-3">
                    {dataRecords?.data?.data?.map((item) => (
                        <Link key={item.id} to={`${item.id}`} className='record gap-05 pd-1 round-1'>
                            <div className="icon"><MedalIcon /></div>
                            <p className="record_name text mtop-05">{item.name}</p>
                            <p className="min-text desc">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Records
