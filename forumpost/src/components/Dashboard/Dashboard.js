import React from 'react'
import Topics from '../../containers/Topic/Topics';
import FocusList from '../../containers/FocusList/FocusList';

const Dashboard = (props) => {
    // console.log(this.props);
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <Topics />
                </div>
                <div className="col s12 m5 offset-m1">
                    <FocusList />
                </div>
            </div>
        </div>
    )

}

export default Dashboard;