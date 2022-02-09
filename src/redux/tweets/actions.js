import { ADD_TWEET, REMOVE_TWEET } from "./types"


export const addTweet = () => {
    return {
        type: ADD_TWEET
    }
}

export const removeTweet = () => {
    return {
        type: REMOVE_TWEET
    }
}