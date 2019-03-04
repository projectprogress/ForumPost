import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        isSignup: true
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
        this.props.onAuth(this.state.email, this.state.password, this.state.isSignup, this.state.firstName, this.state.lastName);
    }
    render() {
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/'/>
        }

        return (
            <div className="container">
                {authRedirect}
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);