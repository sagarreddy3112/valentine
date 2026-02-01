import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [noHovered, setNoHovered] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [name1] = useState('Mounika')
  const [name2] = useState('Pavan')

  const handleNoClick = () => {
    const randomX = Math.random() * 300 - 150
    const randomY = Math.random() * 300 - 150
    setNoPosition({ x: randomX, y: randomY })
  }

  const handleNoMouseEnter = () => {
    const randomX = Math.random() * 300 - 150
    const randomY = Math.random() * 300 - 150
    setNoPosition({ x: randomX, y: randomY })
    setNoHovered(true)
  }

  const handleNoMouseLeave = () => {
    setNoHovered(false)
  }

  return (
    <div className="app-container">
      {step === 1 && (
        <div className="step step-1">
          <div className="hearts-background">
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
          </div>
          <h1 className="greeting">Hi {name1}! 👋</h1>
          <p className="message">This is {name2}...</p>
          <p className="message">There is a surprise for you! 🎁</p>
          <button
            className="surprise-btn"
            onClick={() => setStep(2)}
          >
            Click on the Surprise 🎉
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="step step-2">
          <div className="hearts-background">
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
          </div>
          <h1 className="proposal-title">I Love You ❤️</h1>
          <p className="proposal-text">Will you be my Valentine?</p>
          <div className="buttons-container">
            <button
              className="yes-btn"
              onClick={() => setStep(3)}
            >
              YES ✨
            </button>
            <button
              className="no-btn"
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                transition: noHovered ? 'none' : 'transform 0.3s ease'
              }}
              onClick={handleNoClick}
              onMouseEnter={handleNoMouseEnter}
              onMouseLeave={handleNoMouseLeave}
            >
              NO
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step step-3">
          <div className="hearts-background">
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
          </div>
          <div className="celebration">
            <h1 className="success-title">🎉 Yes! 🎉</h1>
            <p className="success-message">I love you my Valentine! 💕</p>
            <div className="confetti">
              <span>💖</span>
              <span>💕</span>
              <span>💗</span>
              <span>💓</span>
              <span>💝</span>
              <span>💖</span>
              <span>💕</span>
              <span>💗</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
