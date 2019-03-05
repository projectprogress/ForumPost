import React from 'react';
import moment from 'moment';

const TopicSummary = ({topic}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{topic.topicTitle}</span>
                <p>Posted by {topic.email}</p>
                <p className="grey-text">{moment(topic.date).calendar()}</p>
            </div>
        </div>
    )
}

export default TopicSummary;