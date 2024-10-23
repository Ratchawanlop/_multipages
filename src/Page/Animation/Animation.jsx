import React, { useEffect, useRef, useState } from 'react'

import './Animation.css'

const BallAnimation = () => {
  const fieldWidth = 700
  const fieldHeight = 400
  const ballSize = 70
  const xMax = fieldWidth - ballSize - 2
  const yMax = fieldHeight - ballSize - 2
  const xVelocity = 5
  const yVelocity = 5

  const [running, setRunning] = useState(false)
  const [goRight, setGoRight] = useState(true)
  const [goDown, setGoDown] = useState(true)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [currentRotation, setCurrentRotation] = useState(0)
  const [rotationSpeed, setRotationSpeed] = useState(2)
  const ballRef = useRef(null)

  const adjustRotationSpeed = () => {
    setRotationSpeed(Math.random() * 2 + 1)
    setCurrentRotation(
      (prevRotation) => prevRotation + 360 / (rotationSpeed * 25)
    )
  }

  const calculate = () => {
    setX((prevX) => {
      const newX = goRight ? prevX + xVelocity : prevX - xVelocity
      if (newX >= xMax) {
        setGoRight(false)
      } else if (newX <= 0) {
        setGoRight(true)
      }
      adjustRotationSpeed()
      return newX
    })

    setY((prevY) => {
      const newY = goDown ? prevY + yVelocity : prevY - yVelocity
      if (newY >= yMax) {
        setGoDown(false)
      } else if (newY <= 0) {
        setGoDown(true)
      }
      adjustRotationSpeed()
      return newY
    })
  }

  const render = () => {
    if (ballRef.current) {
      ballRef.current.style.left = `${x}px`
      ballRef.current.style.top = `${y}px`
      ballRef.current.style.transform = `rotate(${currentRotation}deg)`
    }
  }

  const process = () => {
    if (running) {
      calculate()
      render()
    }
  }

  useEffect(() => {
    const interval = setInterval(process, 40)
    return () => clearInterval(interval) // Cleanup on component unmount
  }, [running, goRight, goDown, x, y, currentRotation, rotationSpeed])

  const toggleRun = () => {
    setRunning((prev) => !prev)
  }

  const resetBallImage = () => {
    if (ballRef.current) {
      ballRef.current.style.backgroundImage = 'none'
    }
  }

  const changeBallImage = (imageUrl) => {
    if (ballRef.current) {
      ballRef.current.style.backgroundImage = `url(${imageUrl})`
      ballRef.current.style.backgroundSize = '130%'
    }
  }

  return (
    <div id='container'>
      <div id='field' style={{ width: fieldWidth, height: fieldHeight }}>
        <div
          id='ball'
          ref={ballRef}
          style={{
            width: ballSize,
            height: ballSize,
            position: 'absolute',
            backgroundColor: 'azure', // Fallback color
            backgroundSize: '134%',
          }}
        ></div>
      </div>

      <div id='control'>
        <button id='run' className='btn btn-success' onClick={toggleRun}>
          {running ? 'PAUSE' : 'RUN'}
        </button>
        <button className='btn btn-outline-dark' onClick={resetBallImage}>
          None
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => changeBallImage('/_multipages/basketball.png')}
        >
          Basketball
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => changeBallImage('/_multipages/football.png')}
        >
          Football
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => changeBallImage('/_multipages/volleyball.png')}
        >
          Valleyball
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => changeBallImage('/_multipages/human.png')}
        >
          Human
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => changeBallImage('/_multipages/cartoon.png')}
        >
          Cartoon
        </button>
        <button
          className='btn btn-outline-primary'
          onClick={() => changeBallImage('/_multipages/duck.png')}
        >
          Logo
        </button>
      </div>
    </div>
  )
}

export default BallAnimation
