import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchSymbol = (symbol) => {
    return dispatch => {
        console.log(symbol);
        const symbolData = symbol + '/quote';
        axios.get('https://api.iextrading.com/1.0/stock/' + symbolData)
            .then(response => {
                console.log(response.data);
                dispatch(fetchSymbolSuccess(response.data))
            })
            .catch( error => {
                console.log("failed");
            });
        // type: actionTypes.SEARCH_SYMBOL,
        // symbol: symbol
    };
};

export const fetchSymbolSuccess = (stockData) => {
    return {
        type: actionTypes.FETCH_SYMBOL_SUCCESS,
        stockData: stockData
    };
};

export const showFocusList = () => {
    return dispatch => {
        axios.get('https://api.iextrading.com/1.0/stock/market/list/infocus')
            .then(response => {
                console.log(response.data);
                dispatch(fetchFocusListSuccess(response.data))
            })
            .catch( error => {
                console.log("failed");
                dispatch(fetchFocusListFailed())
            });

    }
}

export const fetchFocusListSuccess = (focusList) => {
    return {
        type: actionTypes.FETCH_FOCUS_SUCCESS,
        focusList: focusList
    };
};

export const fetchFocusListFailed = () => {
    return {
        type: actionTypes.FETCH_FOCUS_FAIL
    };
};

export const deleteWatchList = (DelSymbolIndex) => {
    return {
        type: actionTypes.DELETE_WATCHLIST,
        DelSymbolIndex: DelSymbolIndex
    };
};

export const successAddWatchList = (stockData) => {
    return {
        type: actionTypes.ADD_WATCHLIST,
        stockData: stockData
    };
};
