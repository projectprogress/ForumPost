import * as actionTypes from './actionTypes';
import axios from 'axios';

export const createTopic = (topicTitle, topicContent, email) => {
    return dispatch => {
        const topic = {
            topicTitle: topicTitle,
            topicContent: topicContent,            
            email: email,
            date: new Date(),
            comment: {

            }
        }
       axios.post('https://forumpost-24969.firebaseio.com/topics.json', topic)
        .then(response => {
            console.log(response);
            dispatch(createSuccess())
        })
        .catch(error => console.log(error));
    };
};

export const createInit = () => {
    return {
        type: actionTypes.CREATE_INIT
    };
};

export const createSuccess = () => {
    return {
        type: actionTypes.CREATE_SUCCESS
    };
};

export const showTopicList = () => {
    return dispatch => {
        axios.get('https://forumpost-24969.firebaseio.com/topics.json')
            .then(response => {
                console.log(response.data);
                const fetchedData = [];
                for(let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id:key
                    });  
                }
                dispatch(fetchTopicListSuccess(fetchedData))
            })
            .catch( error => {
                console.log("failed");
                dispatch(fetchTopicListFailed())
            });

    }
}

export const fetchTopicListSuccess = (topicList) => {
    return {
        type: actionTypes.FETCH_TOPICLIST_SUCCESS,
        topicList: topicList
    };
};

export const fetchTopicListFailed = () => {
    return {
        type: actionTypes.FETCH_TOPICLIST_FAILED
    };
};

export const getTopicDetail = (topicID) => {
    return dispatch => {
        axios.get('https://forumpost-24969.firebaseio.com/topics/' + topicID + '.json')
            .then(response => {
                console.log(response.data);
                dispatch(getDetailSuccess(response.data))
            })
            .catch( error => {
                console.log("failed");
                dispatch(getDetailFailed())
            });

    }
}

export const getDetailSuccess  = (topicDetail) => {
    return {
        type: actionTypes.GET_DETAIL_SUCCESS,
        topicDetail: topicDetail
    };
};

export const getDetailFailed = () => {
    return {
        type: actionTypes.GET_DETAIL_FAIL
    };
};

export const getInit = () => {
    return {
        type: actionTypes.GET_INIT
    };
};

