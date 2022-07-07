import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    display: "0",
    previous: "",
    record: []
};

export const kalkulator = createSlice({
    name: "kalkulator",
    initialState,
    reducers: {

        setDisplay: (state, action) => {
            if (state.display === "0") {
                state.display = "";
            }
            let concat = state
                .display
                .concat(action.payload);
            state.display = concat;
        },

        clear: (state) => {
            state.display = initialState.display;
        },

        setPrevious: (state, action) => {
            state.previous = action.payload;
        },

        pushToRecord: (state, action) => {
            let push = [
                ...state.record,
                action.payload
            ];
            state.record = push;
        },

        clearRecord: (state) => {
            state.record = [];
        },

        popRecord: (state) => {
            state
                .record
                .pop();
        }
    }
});

export const actions = kalkulator.actions;
export default kalkulator.reducer;
