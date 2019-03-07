import * as actionTypes from '../actions/actionTypes';

const initialState = {
    commentList: []
}

const comment = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOPIC_COMMENT_SUCCESS:
            return {
                ...state,
                commentList: action.commentList
            };
        default:
            return state;
    }
};

export default comment;