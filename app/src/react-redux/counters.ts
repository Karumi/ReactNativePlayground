import { ActionType } from "typesafe-actions";

import * as counters from "./actions";
import { ADD, DEC, INCREMENT } from "./actions";

export type CountersAction = ActionType<typeof counters>;

export interface CountersState {
    readonly reduxCounter: number;
}

const initialState = {
    reduxCounter: 0,
};

export default function countersReducer(state: CountersState = initialState, action: CountersAction) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                reduxCounter: state.reduxCounter + 1,
            });
        case ADD:
            return Object.assign({}, state, {
                reduxCounter: state.reduxCounter + action.payload,
            });
        case DEC:
            return Object.assign({}, state, {
                reduxCounter: state.reduxCounter - 1,
            });
        default:
            return state;
    }
}
