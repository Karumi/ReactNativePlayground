import { Dispatch } from "redux";
import { action } from "typesafe-actions";
import { CountersAction } from "./counters";

export const INCREMENT = "counter/INCREMENT";
export const ADD = "counter/ADD";
export const DEC = "counter/DEC";

export const increment = () => action(INCREMENT);
export const add = (amount: number) => (dispatch: Dispatch<CountersAction>) => {
    for (let i = 0; i < amount; i++) {
        dispatch(action(INCREMENT));
    }
};
export const decrement = (amount: number) => action(DEC, amount);
