import React from 'react';
import './AllData.css';
import fakeData from '../../FakeData/fakedata.json'

const AllData = () => {

    const allData = () => {
        fetch('http://localhost:5000/addAllData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <button onClick={() => allData()}>click</button>
        </div>
    );
};

export default AllData;