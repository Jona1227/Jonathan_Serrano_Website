import { useState, useEffect } from 'react'

function HubRoom() {
  const [playerX, setPlayerX] = useState(380)
  const [playerY, setPlayerY] = useState(230)
  const[isMoving, setIsMoving] = useState(false)
  const [frame, setFrame] = useState(0)

  const sprites = {
    'down': "/sprites/Foward.png", 
    'up': "/sprites/Backward.png",
    'left':"/sprites/Side.png",
    'right': "/sprites/Side.png",
    'idle': "/sprites/Idle.png"
  }

  const [direction, setDirection] = useState('down')



  useEffect(() => {
    setInterval(() => {
        setFrame(prev => prev === 0 ? 1 : 0)
    }, 450)

    const handleKeyDown = (e) => {
      if(e.key === "s" || e.key === "ArrowDown") {
        setDirection('down')
        setIsMoving(true)
        setPlayerY(prev => Math.min(410, prev + 5))
      } else if (e.key === "w" || e.key === "ArrowUp") {
        setDirection('up')
        setIsMoving(true)
        setPlayerY(prev => Math.max(-5, prev - 5))
      } else if (e.key === "a" || e.key === "ArrowLeft"){
        setDirection('left')
        setIsMoving(true)
        setPlayerX(prev =>Math.max(15, prev - 5))
      } else if ( e.key === "d" || e.key === "ArrowRight"){
        setDirection('right')
        setIsMoving(true)
        setPlayerX(prev => Math.min(745, prev + 5))
      }
      
    }
    const handleKeyUp = (e) => {
      setIsMoving(false)
    }
    window.addEventListener('keyup', handleKeyUp)

    window.addEventListener('keydown', handleKeyDown)
  }, [])

  
  console.log(frame)
    return (
      <div className="room-wrapper">
        <div className="room">
        <div className="doorTop"></div>
        <div className="doorLeft"></div>
        <div className="doorBottom"></div>
        <div className="doorRight"></div>
        <div className="player" style={{left: playerX, top: playerY, 
          backgroundImage: `url(${isMoving ? sprites[direction] : sprites['idle']})`, 
          transform: direction === 'left' ? 'translate(-50%, -50%) scaleX(-1)' : 'translate(-50%, -50%)',
          backgroundSize: isMoving ? '200% 100%' : '100% 100%',
          backgroundPosition: frame === 0 ? '0% 0%' : '100% 0%'}}></div>
        </div>
      </div>
    )
  }
export default HubRoom