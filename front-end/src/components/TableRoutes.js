import React from 'react';
// шапка страницы
const TableRoutes = ({points}) => {
    const tableData = JSON.parse(JSON.stringify(points)).reverse();
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td>Vehicle Id</td>
                        <td>Time</td>
                        <td>Latitude</td>
                        <td>Longitude</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(el => (
                            <tr key={'table' + el.carid}>
                                <td>{el.carid}</td>
                                <td>{el.datetime}</td>
                                <td>{el.lat}</td>
                                <td>{el.lng}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableRoutes;