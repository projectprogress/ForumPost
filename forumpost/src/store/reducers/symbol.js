import * as actionTypes from '../actions/actionTypes';
import { bake_cookie, read_cookie } from 'sfcookies';

const initialState = {
    stockData: [],
    searchSymbolSuccess: false,
    searchSymbolStart: false,
    watchList: read_cookie('WatchList'),
    FocusList: [],
    focusListError: false,
    symbolDetail: null,
    symbolLoading: false
}

const symbol = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_SYMBOL:
            console.log('search symbol');
            return state;
        case actionTypes.SEARCH_SYMBOL_INIT: 
        console.log('init symbol');
            return {
                ...state,
                searchSymbolSuccess: false,
                searchSymbolStart : true
            };
        case actionTypes.FETCH_SYMBOL_SUCCESS :
            console.log('search success');
            console.log(action.stockData);
            return {
                ...state,
                stockData: action.stockData,
                searchSymbolSuccess: true,
                searchSymbolStart: false
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
        case actionTypes.GET_SYMBOL_DETAIL_SUCCESS :
            return {
                ...state,
                symbolDetail: action.symbolDetail,
                symbolLoading: true
            };
        case actionTypes.GET_SYMBOL_INIT :
            return {
                ...state,
                symbolLoading: false
            };
        default:
            return state;
    }
};

export default symbol;