import { createStore, combineReducers } from 'redux';

import reducerToken from './reducers/reducerToken';
import reducerUser from './reducers/reducerUser';
import reducerMessage from './reducers/reducerMessage';

const reducers = combineReducers({
    reducerToken: reducerToken,
    reducerUser: reducerUser,
    reducerMessage: reducerMessage,
});

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;
