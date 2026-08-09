import { useState, useEffect, useRef } from 'react'

function HubRoom() {
  const [playerX, setPlayerX] = useState(380)
  const [playerY, setPlayerY] = useState(230)
  const[isMoving, setIsMoving] = useState(false)
  const [frame, setFrame] = useState(0)

  const playerXRef = useRef(380)
  const playerYRef = useRef(230)

  const [activeRoom, setActiveRoom] = useState(null)

  const doors = {
    'bottom': {x: 370, y: 390, width: 60, height: 40},
    'top': {x: 370, y: 0, width: 60, height: 40},
    'left':{x: 0, y: 170, width: 40, height: 60},
    'right': {x: 720, y: 220, width: 40, height: 60},
  }

  const sprites = {
    'down': "/sprites/Foward.png", 
    'up': "/sprites/Backward.png",
    'left':"/sprites/Side.png",
    'right': "/sprites/Side.png",
    'idle': "/sprites/Idle.png"
  }

  const [direction, setDirection] = useState('down')

  const checkDoorCollision = (door) => {
    return playerXRef.current > door.x && 
           playerXRef.current < door.x + door.width &&
           playerYRef.current > door.y &&
           playerYRef.current < door.y + door.height
  }



  useEffect(() => {
    setInterval(() => {
        setFrame(prev => prev === 0 ? 1 : 0)
    }, 450)

    const handleKeyDown = (e) => {
      if(e.key === "s" || e.key === "ArrowDown") {
        setDirection('down')
        setIsMoving(true)
        setPlayerY(prev =>{ const newY = Math.min(410, prev + 5)
        playerYRef.current = newY
        return newY
        })

      } else if (e.key === "w" || e.key === "ArrowUp") {
        setDirection('up')
        setIsMoving(true)
        setPlayerY(prev => { const newY = Math.max(-5, prev - 5)
        playerYRef.current = newY
        return newY
        })

      } else if (e.key === "a" || e.key === "ArrowLeft"){
        setDirection('left')
        setIsMoving(true)
        setPlayerX(prev => {const newX = Math.max(15, prev - 5)
        playerXRef.current = newX
        return newX
        })

      } else if ( e.key === "d" || e.key === "ArrowRight"){
        setDirection('right')
        setIsMoving(true)
        setPlayerX(prev => {const newX = Math.min(745, prev + 5)
        playerXRef.current = newX
        return newX
      })
      }
      
      if (checkDoorCollision(doors.top)) { 
        setActiveRoom('top') 
      }
      if (checkDoorCollision(doors.bottom)) { 
        setActiveRoom('bottom') 
      }
      if (checkDoorCollision(doors.left)) {
        setActiveRoom('left')
      }
      if (checkDoorCollision(doors.right)) {
        setActiveRoom('right')
      }
      
    }
    const handleKeyUp = (e) => {
      if (e.key === "Escape") {
        setActiveRoom(null)
        setPlayerX(380)
        setPlayerY(220)
        playerXRef.current = 380
        playerYRef.current = 220
      }
      setIsMoving(false)
    }
    window.addEventListener('keyup', handleKeyUp)

    window.addEventListener('keydown', handleKeyDown)
  }, [])

  
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
        {activeRoom && <div className="window"> <p>{activeRoom}</p></div>}
      </div>
    )
  }
export default HubRoom