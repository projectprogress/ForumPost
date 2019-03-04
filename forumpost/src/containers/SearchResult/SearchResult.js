import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class searchResult extends Component {

    handleAddWatchList = () =>{
        console.log(this.props.stockData);
        this.props.onAdd(this.props.stockData);
        this.props.history.push('/watchlist');
    }
    render() {
        let result = <p>Loading Result</p>
        if(this.props.stockData.symbol) {
            result = (
                <div className="container card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <h3>Result</h3>
                        <h3>{this.props.stockData.symbol} : {this.props.stockData.companyName}</h3>
                        <p>Sector = {this.props.stockData.sector }</p>
                        <p>Previous close = {this.props.stockData.previousClose}</p>
                        <p>Lastest Price = {this.props.stockData.latestPrice } ({this.props.stockData.latestSource})</p>
                        <p>Week 52 High = {this.props.stockData.week52High }</p>
                        <p>Week 52 Low = {this.props.stockData.week52Low }</p>
                        <p>Exchange = {this.props.stockData.primaryExchange  }</p>
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleAddWatchList}>Add to watchlist</button>
                    </div>
                
                </div>
            );
        }
        console.log(this.props.stockData);
        return (
            <div className="container">
                {result}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        stockData: state.symbol.stockData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (stockData) => dispatch(actions.successAddWatchList(stockData))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(searchResult);