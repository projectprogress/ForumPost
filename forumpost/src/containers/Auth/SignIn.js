import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email:'',
        password:'',
        isSignup: false
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
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignup, null, null);
    }

    handleSignUp = () => {
        this.props.history.push('/signup');
    }
    render() {
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/'/>
        }

        return (
            <div className="container">
                {authRedirect}
                <form className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Login</button>
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSignUp}>SignUp</button>
                        <div className="red-text center">
                            {/* {authError ? <p>{authError}</p> : null} */}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup, firstName, lastName) => dispatch(actions.auth(email, password, isSignup, firstName, lastName))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));