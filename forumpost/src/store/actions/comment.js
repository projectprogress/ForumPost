import * as actionTypes from './actionTypes';
import axios from 'axios';

export const createComment = (titleID, commentMsg, email) => {
    return dispatch => {
        const comment = {        
            message: commentMsg,
            date: new Date(),
            email: email,
            titleID: titleID
        }
        axios.post('https://forumpost-24969.firebaseio.com/topics/'+ titleID  +'/comment.json', comment)
        .then(response => {
            console.log(response);
            // dispatch(createSuccess())
            dispatch(getComment(titleID));
        })
        .catch(error => console.log(error));
    };
};

export const getComment = (titleID) => {
    return dispatch => {
        axios.get('https://forumpost-24969.firebaseio.com/topics/' + titleID + '/comment.json')
            .then(response => {
                console.log( response.data);
                const fetchedData = [];
                for(let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id:key
                    });  
                }
                dispatch(getCommentSuccess(fetchedData));
               
            })
            .catch(error => {
                console.log( error);     
            });
    };
};

export const getCommentSuccess  = (commentList) => {
    return {
        type: actionTypes.GET_TOPIC_COMMENT_SUCCESS,
        commentList: commentList
    };
};

