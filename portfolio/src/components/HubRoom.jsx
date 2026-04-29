import { useState, useEffect } from 'react'

function HubRoom() {
  const [playerX, setPlayerX] = useState(380)
  const [playerY, setPlayerY] = useState(230)


  useEffect(() => {

    const handleKeyDown = (e) => {
      if(e.key === "s" || e.key === "ArrowDown") {
        setPlayerY(prev => prev + 5)
      } else if (e.key === "w" || e.key === "ArrowUp") {
        setPlayerY(prev => prev - 5)
      } else if (e.key === "a" || e.key === "ArrowLeft"){
        setPlayerX(prev => prev - 5)
      } else if ( e.key === "d" || e.key === "ArrowRight"){
        setPlayerX(prev => prev + 5)
      }

    }

    window.addEventListener('keydown', handleKeyDown)
  }, [])

  

    return (
      <div className="room-wrapper">
        <div className="room">
        <div className="doorTop"></div>
        <div className="doorLeft"></div>
        <div className="doorBottom"></div>
        <div className="doorRight"></div>
        <div className="player" style={{left: playerX, top: playerY}}></div>
        </div>
      </div>
    )
  }
export default HubRoom