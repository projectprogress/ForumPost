import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    const {CommentList} = props;
    let result = <p>Loading Comment</p>
    console.log(CommentList);
    console.log(CommentList.length);
    if(CommentList.length !== 0) {
        result = (
            <div>
                {CommentList.map((listItem, index) => (
                    <div key= {listItem.id}>
                        <Comment 
                                    comments= {listItem}/>    
                    </div>

                ))}
            </div>
        )
    } else if(CommentList.length === 0) {
        result = (
            <div>
                <p>Currently there are no comment.</p>
            </div>
        )
    }
        return (
            <div className="container">
                {result}
            </div>
        );
}

export default CommentList;