import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
        // console.log(this.state);
        // this.props.createProject(this.state)
        // this.props.history.push('/');

    }
    render() {
        return (
            <div className="container">
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

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createProject: (project) => dispatch(createProject(project))
//     }
// }

export default CreateTopic;