import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  form: formReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
