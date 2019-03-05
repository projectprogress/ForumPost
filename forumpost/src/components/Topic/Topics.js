import React from 'react';
import TopicSummary from './TopicSummary';
import { Link } from 'react-router-dom';


const Topics = (props) => {
    const {topicList, topicListError} = props;
    let result = <p>Loading Topics</p>
    console.log(topicList);
    console.log(topicListError);
    if(!topicListError && topicList.length !== 0) {
        result = (
            <div>
                {topicList.map((listItem, index) => (
                    <Link to={'/topic/' + listItem.id} key={listItem.id}>
                        <TopicSummary 
                                    topic= {listItem}/>    
                    </Link>

                ))}
            </div>
        )
    }
    else if(topicList.length === 0){
        result = (
            <div className="card z-depth-0 project-summary">
                <p>Currently there are no topic, create one topic and start discussion.</p>
            </div>
        )
    }
    else {
        result = <p>Fail to load data from server.</p>
    }
    
    return (
        <div>
            {result}
        </div>
    );
    
}

export default Topics;