import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCoaches } from '../../api/Api';
import '../../styles/additional/Athletes.scss';

function Coaches() {

    const dataCoaches = useQuery('coaches', fetchCoaches);

    const [coachItem, setCoachItem] = useState(null);

    return (
        <>
            <div className="Athletes parent">
                <div className="wrapper gap-2">
                    <h1 className="sub-title">Наша тренеры</h1>
                    <div className="cards">
                        {dataCoaches?.data?.data?.map((item) => (
                            <div key={item.id} className="athlete" onClick={() => setCoachItem(item)}>
                                <div className="img_cont">
                                    <img src={item.image} alt="img" className="img" />
                                </div>
                                <p className="big-text">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {coachItem &&
                <div className="contrast" onClick={() => setCoachItem(null)}></div>
            }
            {coachItem &&
                <div className="athlete_modal pd-2 gap-3">
                    <img src={coachItem.image} alt="img" className="img" />
                    <div className="texts">
                        <h1 className="sub-title">{coachItem.name}</h1>
                    </div>
                </div>
            }
        </>
    )
}

export default Coaches
