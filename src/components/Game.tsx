import { Counter } from './Counter'
import { Elephant } from './Elephant'
import { useState } from 'react'

export const Game = () => {
  const [activePage, setActivePage] = useState('counter')

  const handleFinish = () => setActivePage('elephant')

  return (
    <div>
      {activePage === 'counter' && <Counter onFinish={handleFinish} />}
      {activePage === 'elephant' && <Elephant />}
    </div>
  )
}
