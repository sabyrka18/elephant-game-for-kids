import { useState } from 'react'

export const Elephant = () => {
  const [weight, setWeight] = useState(100)

  const handleFeedHealthyFood = () => setWeight(prev => prev + 20)
  const handleFeedJunkFood = () => setWeight(prev => prev - 20)

  return (
    <div>
      <h1>Покорми слона</h1>
      <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
      <br />
      <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
      <div style={{ fontSize: `${weight}px` }}>🐘</div>
      <button>Давай сыграем еще раз</button>
    </div>
  )
}
