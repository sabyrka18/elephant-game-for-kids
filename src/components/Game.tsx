import { Counter } from './Counter'
import { Elephant } from './Elephant'
import { useState } from 'react'
import { Congratulations } from './Congratulations'
import { GameOver } from './GameOver'

export const Game = () => {
  const [activePage, setActivePage] = useState('counter')

  const handleFinish = () => setActivePage('elephant')
  const handleStart = () => setActivePage('counter')
  const handleCongratulations = () => setActivePage('congratulations')
  const handleGameOver = () => setActivePage('gameover')

  return (
    <div>
      {activePage === 'counter'
        && <Counter onFinish={handleFinish} />}
      {activePage === 'elephant'
        && <Elephant onCongratulations={handleCongratulations} onGameOver={handleGameOver} />}
      {activePage === 'congratulations'
        && <Congratulations onStart={handleStart} />}
      {activePage === 'gameover'
        && <GameOver onStart={handleStart} />}
    </div>
  )
}
