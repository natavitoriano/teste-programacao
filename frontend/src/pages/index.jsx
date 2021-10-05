import React from "react";
import Routes from "../store/routes";

import { Provider } from 'react-redux';
import storeConfig from "../store/storeConfig";

const store = storeConfig()

const App = () => (
    <Provider store={store}>
        <React.Fragment>
            <Routes/ >
        </React.Fragment>
    </Provider>
);


export default App;

