import About from './About'
import Projects from './Projects'
import Contact from './Contact'

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
    'top': {x: 390, y: 40, width: 30, height: 20},
    'left': {x: 58, y: 220, width: 20, height: 30},
    'right': {x: 718, y: 225, width: 20, height: 30},
  }

  const sprites = {
    'down': "/sprites/Foward.png", 
    'up': "/sprites/Backward.png",
    'left':"/sprites/Side.png",
    'right': "/sprites/Side.png",
    'idle': "/sprites/Idle.png"
  }

  const closeWindow = () => {
    setActiveRoom(null)
    setPlayerX(380)
    setPlayerY(220)
    playerXRef.current = 380
    playerYRef.current = 220
  }

  const roomComponents = {
    'top': <About onClose={closeWindow} />,
    'left': <Projects />,
    'right': <Contact />
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
        setPlayerY(prev =>{ const newY = Math.min(400, prev + 5)
        playerYRef.current = newY
        return newY
        })

      } else if (e.key === "w" || e.key === "ArrowUp") {
        setDirection('up')
        setIsMoving(true)
        setPlayerY(prev => { const newY = Math.max(50, prev - 5)
        playerYRef.current = newY
        return newY
        })

      } else if (e.key === "a" || e.key === "ArrowLeft"){
        setDirection('left')
        setIsMoving(true)
        setPlayerX(prev => {const newX = Math.max(77, prev - 5)
        playerXRef.current = newX
        return newX
        })

      } else if ( e.key === "d" || e.key === "ArrowRight"){
        setDirection('right')
        setIsMoving(true)
        setPlayerX(prev => {const newX = Math.min(720, prev + 5)
        playerXRef.current = newX
        return newX
      })
      }
      
      if (checkDoorCollision(doors.top)) { 
        setActiveRoom('top') 
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
        <div className="hud">
        <div className="hud-name">
            <p>Playing as:</p>
            <p>Jonathan Serrano</p>
          </div>
          <div className="hud-hearts">
            <img src="/sprites/heart.png" />
            <img src="/sprites/heart.png" />
            <img src="/sprites/heart.png" />
          </div>
        </div>
        <div className="room">
        <div className="player" style={{left: playerX, top: playerY, 
          backgroundImage: `url(${isMoving ? sprites[direction] : sprites['idle']})`, 
          transform: direction === 'left' ? 'translate(-50%, -50%) scaleX(-1)' : 'translate(-50%, -50%)',
          backgroundSize: isMoving ? '200% 100%' : '100% 100%',
          backgroundPosition: frame === 0 ? '0% 0%' : '100% 0%'}}></div>
        </div>
        {activeRoom && <div className="window">  
          <div className="window-card">
            {roomComponents[activeRoom]}
          </div>
          </div>}
      </div>
    )
  }
export default HubRoom