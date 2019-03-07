import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import moment from 'moment';
import CreateComment from '../Comment/CreateComment';
import Comment from '../../components/Comment/CommentList';

class TopicDetail extends Component {

    componentDidMount() {
        this.props.getInit();
        this.props.getTopic();
        this.props.getComment();
    }

    render() {
        // let result = null;
        let authRedirect = null;
        if (this.props.isAuthenticated === false) {
            authRedirect = <Redirect to='/signin'/>
        }
        console.log(this.props.topicDetail);
        console.log(this.props.match.params.id);
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
                    <CreateComment topicID = {this.props.match.params.id}/>
                    <Comment CommentList = {this.props.commentList} />
                </div> :
                <div className="container center">
                    <p>Loading project...</p>
                </div>
        return (
            <div>
                {authRedirect}
                {createRedirect}
            </div>
        );
    }
}
  
const mapStatetoProps = (state) => {
    return {
        topicDetail: state.topic.topicDetail,
        topicLoading: state.topic.topicLoading,
        commentList: state.comment.commentList,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        getTopic: () => dispatch(actions.getTopicDetail(id)),
        getInit: () => dispatch(actions.getInit()),
        getComment: () => dispatch(actions.getComment(id))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(TopicDetail);
