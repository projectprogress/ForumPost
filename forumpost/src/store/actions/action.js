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
