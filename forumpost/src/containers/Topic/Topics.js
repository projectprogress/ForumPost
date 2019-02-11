import React, { Component } from 'react';
import TopicSummary from './TopicSummary';


class Topics extends Component {
    state = {
        title:'abc',
        content:'abc'
    }
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="project-list section">
                            
                            <TopicSummary topic={this.state} />
                            <TopicSummary topic={this.state} />
                            <TopicSummary topic={this.state} />
                                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topics;