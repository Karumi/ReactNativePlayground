import { action } from "typesafe-actions";

export const INCREMENT = "counter/INCREMENT";
export const ADD = "counter/ADD";
export const DEC = "counter/DEC";

export const increment = () => action(INCREMENT);
export const add = (amount: number) => action(ADD, amount);
export const decrement = (amount: number) => action(DEC, amount);
