
import { RouterAction } from "react-router-redux";
import { combineReducers, createStore } from "redux";
import { StateType } from "typesafe-actions";
import { CountersAction } from "../react-redux/counters";
import countersReducer from "../react-redux/counters";

export type RootState = StateType<typeof rootReducer>;
export type RootAction = RouterAction | CountersAction;

const rootReducer = combineReducers({
    counter: countersReducer,
});

function configureStore(initialState?: object) {
    return createStore(rootReducer, initialState!);
}
export default configureStore();
