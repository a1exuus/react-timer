import { INCREMENT } from './types'

const initialState = {
  time: {
    h: 0,
    m: 0,
    s: 0
  },
  seconds: 0
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return { 
                ...state, 
                seconds: initialState.seconds + 60,  
                time: action.payload(state.seconds + 60) 
            };
        default:
            return state;
    }
}
