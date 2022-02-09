import { combineReducers } from "redux";
import tweetReducer from "./tweets/reducer";
import posts from "../module/posts";



const rootReducer = combineReducers({
    tweet : tweetReducer,
    posts : posts
})

export default rootReducer