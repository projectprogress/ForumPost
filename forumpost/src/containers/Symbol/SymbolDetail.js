import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

class SymbolDetail extends Component {

    componentWillMount() {
        this.props.getSymbolInit();
        this.props.getSymbolDetail();
    }

    render() {
        console.log(this.props.symbolDetail);
        let result = <p>Loading Result</p>
        if(this.props.symbolLoading) {
            result = (
                <div className="container card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <h3>Result</h3>
                        <h3>{this.props.symbolDetail.symbol} : {this.props.symbolDetail.companyName}</h3>
                        <p>Sector = {this.props.symbolDetail.sector }</p>
                        <p>Previous close = {this.props.symbolDetail.previousClose}</p>
                        <p>Lastest Price = {this.props.symbolDetail.latestPrice } ({this.props.symbolDetail.latestSource})</p>
                        <p>Week 52 High = {this.props.symbolDetail.week52High }</p>
                        <p>Week 52 Low = {this.props.symbolDetail.week52Low }</p>
                        <p>Exchange = {this.props.symbolDetail.primaryExchange  }</p>
                    </div>
                
                </div>
            );
        }
        else {
            result = <p>Loading Result</p>
        }
        return (
            <div className="container">
                {result}
            </div>
        );
    }
}
  
const mapStatetoProps = (state) => {
    return {
        symbolDetail: state.symbol.symbolDetail,
        symbolLoading: state.symbol.symbolLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        getSymbolDetail: () => dispatch(actions.getSymbolDetail(id)),
        getSymbolInit: () => dispatch(actions.getSymbolInit())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(SymbolDetail);
