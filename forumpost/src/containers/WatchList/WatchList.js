import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import WatchListSummary from '../../components/WatchListSummary/WatchListSummary';

class WatchList extends Component {

    handleDeleteWatchList = (DelSymbol) =>{
        console.log(this.props.stockData);
        this.props.onDelete(DelSymbol);
        
        // this.props.history.push('/watchlist');
    }

    render() {
        console.log(this.props.watchList);
        let result = <p>Loading WatchList</p>
        if(this.props.watchList.length > 0) {
            result = (
                <div className="dashboard container">
                        {this.props.watchList.map((listItem, index) => (
                            <div className="project-list section" key = {index}>
                                <WatchListSummary 
                                    watchList= {listItem}
                                    DeleteItem= {() => this.handleDeleteWatchList(index)}/>
                                {/* <p> {listItem.symbol}</p>
                                <button className="btn pink lighten-1 z-depth-0" onClick={() => this.handleDeleteWatchList(index)}>Delete</button> */}
                            </div>
                        ))}
                        {/* <p> abc 123</p> */}
                </div>
            );
        }
        return (
            <div className="container">
                {result}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        stockData: state.symbol.stockData,
        watchList: state.symbol.watchList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (DelSymbolIndex) => dispatch(actions.deleteWatchList(DelSymbolIndex))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);