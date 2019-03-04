import React, { Component } from 'react';
import TopicSummary from '../../components/TopicSummary/TopicSummary';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


class Topics extends Component {

    componentDidMount () {
        this.props.showTopic();
    }
    render() {
        console.log(this.props.topicList);
        let result = <p>Loading Topics</p>
        if(!this.props.topicListError && this.props.topicList.length !== 0) {
            result = (
                <div>
                    {this.props.topicList.map((listItem, index) => (
                        <div key = {index}>
                            <TopicSummary 
                                        topic= {listItem}/>    
                        </div>

                    ))}
                </div>
            )
        }
        else if(this.props.topicList.length === 0){
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
            
        
        // return(
        //     <div>
        //         <TopicSummary topic={this.state} />
                
        //     </div>
        // );
    }
}

const mapStateToProps = state => {
    return {
        topicList: state.topic.topicList,
        topicListError: state.topic.topicListError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showTopic: () => dispatch(actions.showTopicList())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Topics);