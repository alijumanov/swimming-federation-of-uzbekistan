import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../api/Api';
import '../../styles/additional/News.scss';

function News() {

    // data of news

    const dataNews = useQuery('news', fetchNews);

    return (
        <div className="News parent">
            <div className="wrapper gap-2">
                <h1 className="sub-title">So'ngi yangiliklar</h1>
                <div className="cards gap-2">
                    {dataNews?.data?.data?.map((item) => (
                        <Link to={`${item.id}`} key={item.id} className="new_card pd-1-5 round-1 gap-05">
                            <img src={item.image} alt="img" className="img round-05" />
                            <p className="text date mtop-05">{item.pub_date?.slice(0, 10)}</p>
                            <p className="text">{item.title}</p>
                            <p className="min-text">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News
