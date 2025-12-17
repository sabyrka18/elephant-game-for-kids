import { useState } from 'react'

type Props = {
  onCongratulations: () => void,
  onGameOver: () => void,
}

export const Elephant = ({ onCongratulations, onGameOver }: Props) => {
  const [weight, setWeight] = useState(100)

  const handleFeedHealthyFood = () => {
    setWeight(prev => prev + 20)
    if (weight >= 200 && onCongratulations) return onCongratulations()
  }

  const handleFeedJunkFood = () => {
    setWeight(prev => prev - 20)
    if (weight <= 20 && onGameOver) return onGameOver()
  }

  return (
    <div>
      <h1>Покорми слона</h1>
      <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
      <br />
      <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
      <div style={{ fontSize: `${weight}px` }}>🐘</div>
    </div>
  )
}
