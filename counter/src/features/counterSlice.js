import { createSlice } from "@reduxjs/toolkit";

let initialState={
    count:0,
    users:[],
    singleUser:{},
    products:[]
}
const counterSlice=createSlice(
    {
        name:'Counter',
        initialState,
        reducers:
        {
            inc(state)
            {
                state.count++;
            },
            dec(state)
            {
                state.count > 0 ? state.count-- : state.count;
            },
            incBy5Data(state,action)
            {
                const newCount = state.count + action.payload;
                state.count = newCount < 0 ? 0 : newCount;
            }
        }
    }
)

export const {inc,dec,incBy5Data} = counterSlice.actions
export default counterSlice.reducer