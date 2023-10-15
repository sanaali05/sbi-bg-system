import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { getBgFormReducer } from './reducers/BG_Form.Reducer';

const reducers = combineReducers({
    getBgForm:getBgFormReducer
})

const middleware = [thunk]

const store = createStore(

    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;