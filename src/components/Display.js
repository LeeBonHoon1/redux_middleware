import React, {useState, useEffect} from 'react'

const Display = () => {
    const [plusView, setPlusView] = useState(() => JSON.parse(window.localStorage.getItem('views')))
    
    useEffect(() => {
      const newState = async() => {
        await setPlusView(plusView+1)
      }
      newState()
    }, [])

    useEffect(() => {
      window.localStorage.setItem('views', JSON.stringify(plusView))
    }, [plusView])
    
  return (
    <div>
        <h2 value={plusView}>조회수 : {plusView}</h2>
    </div>
  )
}

export default Display