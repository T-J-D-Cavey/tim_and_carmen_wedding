import { createSlice } from '@reduxjs/toolkit';

export interface store_state_interface {
    main: {
        is_correct: boolean;
    }
}

const main_slice = createSlice({ 
    name: 'main',
    initialState: {
        is_correct: false
    },
    reducers: {
        set_is_correct: (state, action) => {
            state.is_correct = action.payload;
        }
    }
})

export const is_correct_selector = (state: store_state_interface) => {
    return state.main.is_correct;
}

export const {set_is_correct} = main_slice.actions; 

export const main_reducer = main_slice.reducer;