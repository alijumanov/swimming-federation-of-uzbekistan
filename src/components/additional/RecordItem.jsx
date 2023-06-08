import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchRecords } from '../../api/Api';
import '../../styles/additional/NewItem.scss';

function RecordItem() {

    const { id } = useParams();

    const dataRecords = useQuery('records', fetchRecords);

    return (
        <div className="NewItem parent">
            {dataRecords?.data?.data?.filter((c) => c.id == id).map((item) => (
                <div key={item.id} className="wrapper gap-05">
                    <p className="big-text date">{item.pool_length}</p>
                    <p className="big-text date">{item.team}</p>
                    <h1 className="sub-title">{item.name}</h1>
                    <p className="text">{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default RecordItem
