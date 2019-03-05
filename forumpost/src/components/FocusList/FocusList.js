import React from 'react';
import FocusSummary from './FocusListSummary';
import { Link } from 'react-router-dom';

const FocusList = (props) => {
    const {FocusList, focusListError} = props;
    let result = <p>Loading FocusList</p>
        if(!focusListError) {
            result = (
                <div>
                    {FocusList.map((listItem, index) => (
                        <Link to={'/symbol/' + listItem.symbol} key={listItem.symbol}>
                            <FocusSummary 
                                        focusList= {listItem}/>    
                        </Link>

                    ))}
                </div>
            )
        }
        else {
            result = <p>Fail to load data from server.</p>
        }
        return (
            <div className="container">
                {result}
            </div>
        );
}

export default FocusList;