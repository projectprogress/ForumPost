import * as actionTypes from '../actions/actionTypes';

const initialState = {
    // symbol:'',
    // companyName:'',
    // primaryExchange:'',
    // latestPrice:'',
    // latestSource:'',
    // week52High:'',
    // week52Low:''
    stockData: []
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
                // symbol: action.stockData.symbol,
                // companyName: action.stockData.companyName,
                // primaryExchange: action.stockData.primaryExchange,
                // latestPrice: action.stockData.latestPrice,
                // latestSource: action.stockData.latestSource,
                // week52High: action.stockData.week52High,
                // week52Low: action.stockData.week52Low
            };
        default:
            return state;
    }
};

export default reducer;