import React from 'react';
import { useQuery } from 'react-query';
import { fetchDepartments } from '../../api/Api';
import '../../styles/additional/Departments.scss';

function Departments() {

    const dataDepartments = useQuery('departments', fetchDepartments);

    console.log(dataDepartments?.data?.data);

    return (
        <div className="Departments parent">
            <div className="wrapper"></div>
        </div>
    )
}

export default Departments
