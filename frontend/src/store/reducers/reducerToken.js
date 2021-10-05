import { TOKEN_AUTH } from '../actions/actionToken';

const initialState = {
    token: ''
}

function Token(state = initialState, action) {
    switch(action.type){
        case TOKEN_AUTH:
            return { token: action.payload }
        default:
            return state;
    }
}

export default Token;
