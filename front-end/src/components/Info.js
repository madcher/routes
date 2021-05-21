import React, {useState} from 'react';

const Info = ({point}) => {

    return (
        <div>
            <div>{`Vehicle Id: ${point.carid}`}</div>
            <div>{`Date and time: ${new Date(point.datetime).toLocaleString()}`}</div>
        </div>
    )
}

export default Info;