import * as actionTypes from '../actions/actionTypes';
import { bake_cookie, read_cookie } from 'sfcookies';

const initialState = {
    // symbol:'',
    // companyName:'',
    // primaryExchange:'',
    // latestPrice:'',
    // latestSource:'',
    // week52High:'',
    // week52Low:''
    stockData: [],
    watchList: read_cookie('WatchList'),
    FocusList: [],
    focusListError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_SYMBOL:
            console.log('search symbol');
            return state;
        case actionTypes.FETCH_SYMBOL_SUCCESS :
            console.log('search success');
            console.log(action.stockData);
            return {
                ...state,
                stockData: action.stockData
            };
        case actionTypes.ADD_WATCHLIST :
            console.log('add success');
            console.log(action.stockData);
            let stockWatchList = state.watchList;
            stockWatchList.push(action.stockData);
            bake_cookie('WatchList', stockWatchList);
            console.log(stockWatchList);
            return {
                ...state,
                watchList: stockWatchList
            };
        case actionTypes.DELETE_WATCHLIST : 
            console.log('Delete success');
            console.log(action.DelSymbolIndex);
            // const indexNum = parseInt(action.DelSymbolIndex, 10);  
            const newstockWatchList = state.watchList.filter((item, index) => action.DelSymbolIndex !== index);;
            console.log(newstockWatchList);
            return {
                ...state,
                watchList: newstockWatchList
            };
        case actionTypes.SHOW_WATCHLIST : 
            return {
                ...state,
                watchList: action.stockData
            };
        case actionTypes.FETCH_FOCUS_SUCCESS : 
            return {
                ...state,
                FocusList: action.focusList
            };
        case actionTypes.FETCH_FOCUS_FAIL : 
            return {
                ...state,
                focusListError: true
            };
        default:
            return state;
    }
};

export default reducer;