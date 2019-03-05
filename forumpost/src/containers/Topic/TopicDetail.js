import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import moment from 'moment';

class TopicDetail extends Component {

    componentWillMount() {
        this.props.getInit();
        this.props.getTopic();
    }

    render() {
        // let result = null;
        console.log(this.props.topicDetail);
        const createRedirect = this.props.topicLoading ? 
            <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{ this.props.topicDetail.topicTitle }</span>
                            <p>{ this.props.topicDetail.topicContent }</p>
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by { this.props.topicDetail.email }</div>
                            <div>{moment( this.props.topicDetail.date).calendar()}</div>
        
                        </div>
                    </div>
                
                </div> :
                <div className="container center">
                    <p>Loading project...</p>
                </div>
        return (
            <div>
                {createRedirect}
            </div>
        );
    }
}
  
const mapStatetoProps = (state) => {
    return {
        topicDetail: state.topic.topicDetail,
        topicLoading: state.topic.topicLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        getTopic: () => dispatch(actions.getTopicDetail(id)),
        getInit: () => dispatch(actions.getInit())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(TopicDetail);
