import React from 'react';
import { useQuery } from 'react-query';
import { fetchNews } from '../../api/Api';
import { useParams } from 'react-router-dom';
import '../../styles/additional/NewItem.scss';

function NewItem() {

    // router options

    const { id } = useParams();

    // data of news

    const dataNews = useQuery('news', fetchNews);

    return (
        <div className="NewItem parent">
            {dataNews?.data?.data?.filter((c) => c.id == id).map((item) => (
                <div key={item.id} className="wrapper">
                    <p className="big-text date">{item.pub_date?.slice(0, 10)}</p>
                    <h1 className="sub-title">{item.title}</h1>                    
                    <img src={item.image} alt="img" className="img mtop-2 mbot-2" />
                    <p className="text">{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default NewItem
