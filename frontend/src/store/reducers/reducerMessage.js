import { ACTION_MESSAGE } from '../actions/actionMessage';

const initialState = {
    msgType: '',
    msgVisibility: 'hidden',
    msg: '',
}

function Token(state = initialState, action) {
    switch(action.type){
        case ACTION_MESSAGE:
            return {
                msgType: action.payload.msgType,
                msgVisibility: action.payload.msgVisibility,
                msg: action.payload.msg,
             }
        default:
            return state;
    }
}

export default Token;
