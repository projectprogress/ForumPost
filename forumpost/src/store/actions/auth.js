import * as actionTypes from './actionTypes';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage'; 

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const createUserTable = (idToken, userId, firstName, lastName, email) => {
    return dispatch => {
        const user = {
            userId: userId,
            userFirstName: firstName,
            userLastName: lastName,
            initials: firstName[0] + lastName[0],
            email: email
        }
        firebase.database().ref('/users/')
            .child(userId)
            .set(user)
            .then(() => {
                dispatch(getUserData(userId));
                dispatch(authSuccess(idToken, userId));
            });
       
    };
};

export const getUserData = (userId) => {
    return dispatch => {
        console.log(userId);
        // var ref = firebase.database().ref("users");
        // var query = ref.orderByChild("database/email").equalTo(userId);
        // query.once("value", function(snapshot) {
        //     snapshot.forEach(function(child) {
        //         console.log(child.key, child.val());
        //     });
        // });
        // axios.get('https://forumpost-24969.firebaseio.com/users/' + response.data.name + '.json')
        // axios.get('https://forumpost-24969.firebaseio.com/users.json', userId)
        // axios.get('https://forumpost-24969.firebaseio.com/users/?userId='+ userId +'.json')
        axios.get('https://forumpost-24969.firebaseio.com/users/' + userId + '.json')
            .then(response => {
                console.log( response.data);
                dispatch(getUserSuccess(response.data.initials, response.data.email));
               
            })
            .catch(error => {
                console.log( error);
              
            });
    };
};

export const getUserSuccess = (initials, email) => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        initials: initials,
        email: email
    };
};

export const auth = (email, password, isSignup, firstName, lastName) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        console.log(email);
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDmTTIZUKYF729ULIm7tpUYqiKQtiEASsc';
        if(!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDmTTIZUKYF729ULIm7tpUYqiKQtiEASsc';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                if(isSignup === true){
                    dispatch(createUserTable(response.data.idToken, response.data.localId, firstName, lastName, email));
                }
                else {
                    dispatch(getUserData(response.data.localId));
                    dispatch(authSuccess(response.data.idToken, response.data.localId));
                }
                // dispatch(getUserData(response.data.localId));
                
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate < new Date()){
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
            
        }
    };
};