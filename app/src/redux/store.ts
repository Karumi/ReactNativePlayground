
import { RouterAction } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import devToolsEnhancer from "remote-redux-devtools";
import { StateType } from "typesafe-actions";
import { CountersAction } from "../react-redux/counters";
import countersReducer from "../react-redux/counters";

export type RootState = StateType<typeof rootReducer>;
export type RootAction = RouterAction | CountersAction;

const rootReducer = combineReducers({
    counter: countersReducer,
});

function configureStore(initialState?: object) {
    const middleware = compose(
        applyMiddleware(thunk),
        devToolsEnhancer(),
    );
    return createStore(
        rootReducer,
        initialState!,
        middleware);
}
export default configureStore();
