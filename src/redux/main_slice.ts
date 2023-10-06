import { createSlice } from '@reduxjs/toolkit';

export interface store_state_interface {
    main: {
        is_correct: boolean;
        in_local_storage: boolean;
        password_input: string;
        show_modal: boolean;
        language: string;
    }
}

const main_slice = createSlice({ 
    name: 'main',
    initialState: {
        is_correct: false,
        in_local_storage: false,
        password_input: '',
        show_modal: false,
        language: 'en'
    },
    reducers: {
        set_is_correct: (state, action) => {
            state.is_correct = action.payload;
        },
        set_in_local_storage: (state, action) => {
            state.in_local_storage = action.payload;
        },
        set_password_input: (state, action) => {
            state.password_input = action.payload;
        },
        set_show_modal: (state, action) => {
            state.show_modal = action.payload;
        },
        set_language: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const is_correct_selector = (state: store_state_interface) => {
    return state.main.is_correct;
}

export const in_local_storage_selector = (state: store_state_interface) => {
    return state.main.in_local_storage;
}

export const password_input_selector = (state: store_state_interface) => {
    return state.main.password_input;
}

export const show_modal_selector = (state: store_state_interface) => {
    return state.main.show_modal;
}

export const language_selector = (state: store_state_interface) => {
    return state.main.language;
}

export const { set_is_correct, set_in_local_storage, set_password_input, set_show_modal, set_language } = main_slice.actions; 

export const main_reducer = main_slice.reducer;