import * as actionTypes from '../actions/actionTypes';


const initialState = {
    topicList: [],
    topicListError: false,
    created: false
    
}

const topic = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOPICLIST_SUCCESS:
            console.log('topic list');
            return {
                ...state,
                topicList: action.topicList
            };
        case actionTypes.FETCH_TOPICLIST_FAILED : 
            return {
                ...state,
                topicListError: true
            };
        case actionTypes.CREATE_INIT :
            return {
                ...state,
                created: false
            };
        case actionTypes.CREATE_SUCCESS :
            return {
                ...state,
                created: true
            };
        default:
            return state;
    }
}
export default topic;