import React, {useState} from 'react';

const Info = ({point}) => {

    return (
        <div>
            <div>{`Номер: ${point.carid}`}</div>
            <div>{`Время: ${new Date(point.datetime).toLocaleString()}`}</div>
        </div>
    )
}

export default Info;