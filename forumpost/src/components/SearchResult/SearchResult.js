import React from 'react';
import { connect } from 'react-redux';

const searchResult = (props) => {
    let result = <p>Loading Result</p>
    if(props.stockData.symbol) {
        result = (
            <div>
            <h2>Result</h2>
            <h3>{props.stockData.symbol} : {props.stockData.companyName}</h3>
            <p>Sector = {props.stockData.sector }</p>
            <p>Previous close = {props.stockData.previousClose}</p>
            <p>Lastest Price = {props.stockData.latestPrice } ({props.stockData.latestSource})</p>
            <p>Week 52 High = {props.stockData.week52High }</p>
            <p>Week 52 Low = {props.stockData.week52Low }</p>
            <p>Exchange = {props.stockData.primaryExchange  }</p>
            
            </div>
        );
    }
    console.log(props.stockData);
    return (
        <div className="container">
            {result}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        stockData: state.stockData
    };
};


export default connect(mapStateToProps)(searchResult);