import {authEndpoints, passwordResetUrl, resetUrl} from '../../utils/constants';
import {setCookie, deleteCookie, getCookie} from '../../utils/cookie';

import {ActionTypes} from '../actionTypes';

import { accessTokenName,  refreshTokenName} from '../../utils/constants';

export const register = (email, password, name) => {

    return dispatch => {

        dispatch({type: ActionTypes.REGISTER_REQUEST});

        fetch(authEndpoints.registerUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email, 
                "password": password, 
                "name": name 
            } )
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            /*
                {
                    "success": true,
                    "user": {
                        "email": "",
                        "name": ""
                    },
                    "accessToken": "Bearer ...",
                    "refreshToken": ""
                } 
            */
            setCookie(accessTokenName, res.accessToken, {expires: 20*60});
            window.localStorage.setItem(refreshTokenName, res.refreshToken);   
            dispatch({type:  ActionTypes.REGISTER_SUCCESS, data: res});
        })
        .catch( res => {
            //TODO: error handling
            console.log(res);            
            dispatch({type:  ActionTypes.REGISTER_FAILED});
        });

    }
};

export const login = (email, password) => {

    return dispatch => {

        dispatch({type: ActionTypes.LOGIN_REQUEST});

        fetch(authEndpoints.authUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email, 
                "password": password
            } )
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            /*
                {
                    "success": true,
                    "accessToken": "Bearer ...",
                    "refreshToken": "",
                    "user": {
                        "email": "",
                        "name": ""
                    }
                } 
            */
            setCookie(accessTokenName, res.accessToken, {expires: 20*60});
            window.localStorage.setItem(refreshTokenName, res.refreshToken);          
            dispatch({type:  ActionTypes.LOGIN_SUCCESS});
        })
        .catch( res => {
            //TODO: error handling
            console.log(res);            
            dispatch({type:  ActionTypes.LOGIN_FAILED});
        });

    }
};

export const logout = () => {

    return dispatch => {

        dispatch({type: ActionTypes.LOGOUT_REQUEST});

        fetch(authEndpoints.logoutUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": window.localStorage.getItem(refreshTokenName)
            } )
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(() => {
            /*
                {
                    "success": true,
                    "message": "Successful logout"
                } 
            */       
            deleteCookie(accessTokenName);
            window.localStorage.removeItem(refreshTokenName);
            dispatch({type:  ActionTypes.LOGOUT_SUCCESS});
        })
        .catch( res => {
            //TODO: error handling
            console.log(res);     
            dispatch({type:  ActionTypes.LOGOUT_FAILED});
        });

    }
};

export const requestPasswordResetCode = (email) => {

    return dispatch => {

        dispatch({type: ActionTypes.PASSWORD_RESET_CODE_REQUEST});

        fetch(passwordResetUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": email})
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            dispatch({type:  ActionTypes.PASSWORD_RESET_CODE_SUCCESS});
        })
        .catch( res => {
            dispatch({type:  ActionTypes.PASSWORD_RESET_CODE_FAILED});
        });

    }


};

export const resetPassword = (password, verificationToken) => {

    return dispatch => {

        dispatch({type: ActionTypes.PASSWORD_RESET_REQUEST});

        fetch(resetUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": password,
                "token": verificationToken
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            dispatch({type: ActionTypes.PASSWORD_RESET_SUCCESS});
        })
        .catch( res => {
            dispatch({type: ActionTypes.PASSWORD_RESET_FAILED});
        });
    }
    
}

export const recognizeUser = () => {

    return dispatch => {

        const refreshToken = () => {
        
            fetch(authEndpoints.tokenUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({"token": window.localStorage.getItem(refreshTokenName)})
            })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then((res) => {
              setCookie(accessTokenName, res.accessToken, {expires: 20*60});
              window.localStorage.setItem(refreshTokenName, res.refreshToken); 
              dispatch({type: ActionTypes.LOGIN_SUCCESS});
            })
            .catch( () => {              
                dispatch({type: ActionTypes.LOGOUT_SUCCESS});
            });
        }

        fetch(authEndpoints.userUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getCookie(accessTokenName)
                }
            })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(res => {
                if(res.success === true) {
                    dispatch({type: ActionTypes.LOGIN_SUCCESS});
                } else {
                    Promise.reject('user\'s authorization is not confirmed');
                }      
            })
            .catch(res => {
            
                if(!getCookie(accessTokenName) || res.message === 'jwt expired') {
                    refreshToken();
                }
            });

    }
}

