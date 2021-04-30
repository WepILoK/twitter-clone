import {createStore} from "redux";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = (): void => {

}

export const store = createStore(reducer)