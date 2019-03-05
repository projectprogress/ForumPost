import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topics from '../../components/Topic/Topics';
import * as actions from '../../store/actions/index';
import FocusList from '../../components/FocusList/FocusList';

class Dashboard extends Component {

    componentDidMount () {
        this.props.onFocus();
        this.props.showTopic();
    }

    render() {
        const { FocusLists, focusListError, topicList, topicListError } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Topics topicList = {topicList} topicListError = {topicListError}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <FocusList FocusList= {FocusLists} focusListError = {focusListError}/>
                    </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        FocusLists: state.symbol.FocusList,
        focusListError: state.symbol.focusListError,
        topicList: state.topic.topicList,
        topicListError: state.topic.topicListError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFocus: () => dispatch(actions.showFocusList()),
        showTopic: () => dispatch(actions.showTopicList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);