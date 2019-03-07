import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class CreateTopic extends Component {
    state = {
        title:'',
        content:''
    }
    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // console.log(e)
        e.preventDefault();
        console.log(this.state);
        this.props.createTopic(this.state.title, this.state.content, this.props.email);
        // this.props.history.push('/');

    }
    componentDidMount() {
        console.log('componentWillMount');
        this.props.createInit();

    }

    render() {
        let authRedirect = null;
        if (this.props.isAuthenticated === false) {
            authRedirect = <Redirect to='/signin'/>
        }
        const createRedirect = this.props.created ? <Redirect to="/" /> : null
        return (
            <div className="container">
                {authRedirect}
                {createRedirect}
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Topic</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        email: state.auth.email,
        authRedirectPath: state.auth.authRedirectPath,
        created: state.topic.created
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTopic: (title, content, email) => dispatch(actions.createTopic(title, content, email)),
        createInit: () => dispatch(actions.createInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopic);