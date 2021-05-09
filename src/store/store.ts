import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./rootReducers";
import rootSaga from "./saga";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TagsState} from "./ducks/tags/contracts/state";
import {TweetState} from "./ducks/tweet/contracts/state";
import {IUserState} from "./ducks/user/contracts/state";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState
    tags: TagsState
    tweet: TweetState
    user: IUserState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
