import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class CreateComment extends Component {
    state = {
        comment:'',
        email:'',
        titleID:''
    }
    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const comment = this.state.comment
        this.props.createComment(this.props.topicID, comment, this.props.email);
        this.setState({
            comment: ''
          });
    }
    componentDidMount() {
        console.log('componentWillMount');
        // this.props.createInit();

    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit} className="white">
                    {/* <h5 className="grey-text text-darken-3">Create comment</h5> */}
                    <div className="input-field">
                        <label htmlFor="comment">Type in your comment</label>
                        <textarea id="comment" onChange={this.handleChange} value ={this.state.comment} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Post</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // isAuthenticated: state.auth.token !== null,
        email: state.auth.email
        // authRedirectPath: state.auth.authRedirectPath,
        // created: state.topic.created
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (titleID, comment, email) => dispatch(actions.createComment(titleID, comment, email))
        // createInit: () => dispatch(actions.createInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);