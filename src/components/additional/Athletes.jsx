import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchAthletes } from '../../api/Api';
import '../../styles/additional/Athletes.scss';

function Athletes() {

    const dataAthletes = useQuery('athletes', fetchAthletes);

    const [athleteItem, setAthleteItem] = useState(null);

    return (
        <>
            <div className="Athletes parent">
                <div className="wrapper gap-2">
                    <h1 className="sub-title">Наша спортсмены</h1>
                    <div className="cards">
                        {dataAthletes?.data?.data?.map((item) => (
                            <div key={item.id} className="athlete" onClick={() => setAthleteItem(item)}>
                                <div className="img_cont">
                                    <img src={item.image} alt="img" className="img" />
                                </div>
                                <p className="big-text">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {athleteItem &&
                <div className="contrast" onClick={() => setAthleteItem(null)}></div>
            }
            {athleteItem &&
                <div className="athlete_modal pd-2 gap-3">
                    <img src={athleteItem.image} alt="img" className="img" />
                    <div className="texts">
                        <h1 className="sub-title">{athleteItem.name}</h1>
                    </div>
                </div>
            }
        </>
    )
}

export default Athletes
