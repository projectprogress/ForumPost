import React from 'react';


const WatchListSummary = (props) => {
    return (

        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{props.watchList.symbol}</span>
                <p>{props.watchList.companyName}</p>
                <button className="btn pink lighten-1 z-depth-0" onClick={props.DeleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default WatchListSummary;