import { ADD_TWEET, REMOVE_TWEET } from "./types"

const initialState = {
    count : 521,
}


const tweetReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TWEET :
            return {
                ...state,
                count : state.count + 1
            }
        case REMOVE_TWEET :
            return {
                ...state,
                count : state.count - 1
            }
        default : return state
    }
}

export default tweetReducer;