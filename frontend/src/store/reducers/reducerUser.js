import { USER_AUTHENTICATE } from '../actions/actionUser';

const initialState = {
    name: '',
    email: '',
}

function User(state = initialState, action) {
    switch(action.type){
        case USER_AUTHENTICATE:
            return {
                    name: action.payload.name,
                    email: action.payload.email
                }
        default:
            return state;
    }
}

export default User;
