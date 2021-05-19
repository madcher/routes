import React from 'react';



const AddPointComponent = ({callback}) => {
    const addPointHandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const lat = data.get('lat');
        const lng = data.get('lng');
        const carId = data.get('uid');
        if (!lng || !lat || !carId) {
            alert('add all fields');
            return;
        }
        callback({lat, lng, carId});
    };

    return (
        <div className="map-menu">
            <form onSubmit={addPointHandler} className="addpoint-form">
                <label className="auth__label">Uid</label>
                <input className="auth__input" type="text" placeholder="" name="uid"/>
                <label className="auth__label">Latitude</label>
                <input className="auth__input" type="text" placeholder="" name="lat"/>
                <label className="auth__label">Longitude</label>
                <input className="auth__input" type="text" placeholder="" name="lng"/>
                <button type="submit" className="auth__input auth_button">Add</button>
            </form>
        </div>
    )
}


export default AddPointComponent;