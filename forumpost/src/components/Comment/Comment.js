import React from 'react';
import moment from 'moment';

const Comment = ({comments}) => {
    return (

        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{comments.message}</span>
                <p>Posted by {comments.email}</p>
                <p className="grey-text">{moment(comments.date).calendar()}</p>
            </div>
        </div>
    )
}

export default Comment;