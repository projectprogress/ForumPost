import * as actionTypes from '../actions/actionTypes';


const initialState = {
    topicList: [],
    topicListError: false,
    created: false,
    topicDetail: null,
    topicLoading: false
    
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
        case actionTypes.GET_DETAIL_SUCCESS :
            return {
                ...state,
                topicDetail: action.topicDetail,
                topicLoading: true
            };
        case actionTypes.GET_INIT :
            return {
                ...state,
                topicLoading: false
            };
        default:
            return state;
    }
}
export default topic;