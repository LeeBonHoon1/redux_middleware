import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TWEET, REMOVE_TWEET } from '../redux/tweets/types'


const Tweet = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.tweet.count)
  
  return (
    <div className="items">
        <h2>Current Tweet : {count}</h2>
        <button onClick={() => {dispatch({ type : ADD_TWEET })}}>Tweet!😀.</button>
        <button onClick={() => {dispatch({ type : REMOVE_TWEET})}}>Re Tweet😅.</button> 
    </div>
  )
}

export default Tweet