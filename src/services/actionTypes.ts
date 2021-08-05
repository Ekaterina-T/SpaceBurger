export type TWSAllOrders = {
    wsInit: 'WS_CONNECTION_ALL_ORDERS_START';
    onOpen: 'WS_CONNECTION_ALL_ORDERS_SUCCESS';
    onError: 'WS_CONNECTION_ALL_ORDERS_ERROR';
    onClose: 'WS_CONNECTION_ALL_ORDERS_CLOSED';
    onGetMessage: 'WS_ALL_ORDERS_GET_MESSAGE';
    wsSendMessage: 'WS_ALL_ORDERS_SEND_MESSAGE';
}

export type TWSUserOrders = {
    wsInit: 'WS_CONNECTION_USER_ORDERS_START';
    onOpen: 'WS_CONNECTION_USER_ORDERS_SUCCESS';
    onError: 'WS_CONNECTION_USER_ORDERS_ERROR';
    onClose: 'WS_CONNECTION_USER_ORDERS_CLOSED';
    onGetMessage: 'WS_USER_ORDERS_GET_MESSAGE';
    wsSendMessage: 'WS_USER_ORDERS_SEND_MESSAGE';
};

export type TActionTypes = {

    //saved all actions in one file - easy to import and use
    //however not sure it's good, I incline ActionTypes should be split by stores as well
    GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST';
    GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS';
    GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED';
    SET_ACTIVE_INGREDIENT: 'SET_ACTIVE_INGREDIENT';
    SHOW_INGREDIENT_DETAILS: 'SHOW_INGREDIENT_DETAILS';

    UPDATE_CART: 'UPDATE_CART';
    
    CREATE_NEW_ORDER_REQUEST: 'CREATE_NEW_ORDER_REQUEST';
    CREATE_NEW_ORDER_SUCCESS: 'CREATE_NEW_ORDER_SUCCESS';
    CREATE_NEW_ORDER_FAILED: 'CREATE_NEW_ORDER_FAILED';
    SHOW_ORDER_DETAILS: 'SHOW_ORDER_DETAILS';
    CLOSE_ORDER: 'CLOSE_ORDER';    
    SORT_FILLINGS_ORDER: 'SORT_FILLINGS_ORDER';

    REGISTER_REQUEST: 'REGISTER_REQUEST';
    REGISTER_SUCCESS: 'REGISTER_SUCCESS';
    REGISTER_FAILED: 'REGISTER_FAILED';

    LOGIN_REQUEST: 'LOGIN_REQUEST';
    LOGIN_SUCCESS: 'LOGIN_SUCCESS';
    LOGIN_FAILED: 'LOGIN_FAILED';

    LOGOUT_REQUEST: 'LOGOUT_REQUEST';
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS';
    LOGOUT_FAILED: 'LOGOUT_FAILED';

    PASSWORD_RESET_CODE_REQUEST: 'PASSWORD_RESET_CODE_REQUEST';
    PASSWORD_RESET_CODE_SUCCESS: 'PASSWORD_RESET_CODE_SUCCESS';
    PASSWORD_RESET_CODE_FAILED: 'PASSWORD_RESET_CODE_FAILED';

    PASSWORD_RESET_REQUEST: 'PASSWORD_RESET_REQUEST';
    PASSWORD_RESET_SUCCESS: 'PASSWORD_RESET_SUCCESS';
    PASSWORD_RESET_FAILED: 'PASSWORD_RESET_FAILED';

    USER_REFRESH_SUCCESS: 'USER_REFRESH_SUCCESS';

    wsAllOrders: TWSAllOrders;
    wsUserOrders: TWSUserOrders;

};

export const ActionTypes : TActionTypes = {

    //saved all actions in one file - easy to import and use
    //however not sure it's good, I incline ActionTypes should be split by stores as well
    GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST',
    GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS',
    GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED',
    SET_ACTIVE_INGREDIENT: 'SET_ACTIVE_INGREDIENT',
    SHOW_INGREDIENT_DETAILS: 'SHOW_INGREDIENT_DETAILS',

    UPDATE_CART: 'UPDATE_CART',    
    CREATE_NEW_ORDER_REQUEST: 'CREATE_NEW_ORDER_REQUEST',
    CREATE_NEW_ORDER_SUCCESS: 'CREATE_NEW_ORDER_SUCCESS',
    CREATE_NEW_ORDER_FAILED: 'CREATE_NEW_ORDER_FAILED',
    SHOW_ORDER_DETAILS: 'SHOW_ORDER_DETAILS',
    CLOSE_ORDER: 'CLOSE_ORDER',

    SORT_FILLINGS_ORDER: 'SORT_FILLINGS_ORDER',

    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILED: 'REGISTER_FAILED',

    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',

    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILED: 'LOGOUT_FAILED',

    PASSWORD_RESET_CODE_REQUEST: 'PASSWORD_RESET_CODE_REQUEST',
    PASSWORD_RESET_CODE_SUCCESS: 'PASSWORD_RESET_CODE_SUCCESS',
    PASSWORD_RESET_CODE_FAILED: 'PASSWORD_RESET_CODE_FAILED',

    PASSWORD_RESET_REQUEST: 'PASSWORD_RESET_REQUEST',
    PASSWORD_RESET_SUCCESS: 'PASSWORD_RESET_SUCCESS',
    PASSWORD_RESET_FAILED: 'PASSWORD_RESET_FAILED',

    USER_REFRESH_SUCCESS: 'USER_REFRESH_SUCCESS',

    wsAllOrders: {
        wsInit: 'WS_CONNECTION_ALL_ORDERS_START',
        onOpen: 'WS_CONNECTION_ALL_ORDERS_SUCCESS',
        onError: 'WS_CONNECTION_ALL_ORDERS_ERROR',
        onClose: 'WS_CONNECTION_ALL_ORDERS_CLOSED',
        onGetMessage: 'WS_ALL_ORDERS_GET_MESSAGE',
        wsSendMessage: 'WS_ALL_ORDERS_SEND_MESSAGE'
    },

    wsUserOrders: {
        wsInit: 'WS_CONNECTION_USER_ORDERS_START',
        onOpen: 'WS_CONNECTION_USER_ORDERS_SUCCESS',
        onError: 'WS_CONNECTION_USER_ORDERS_ERROR',
        onClose: 'WS_CONNECTION_USER_ORDERS_CLOSED',
        onGetMessage: 'WS_USER_ORDERS_GET_MESSAGE',
        wsSendMessage: 'WS_USER_ORDERS_SEND_MESSAGE'
    }

};
