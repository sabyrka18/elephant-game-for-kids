import { useState } from 'react'

type Props = {
  onFinish: () => void,
}

export const Counter = ({ onFinish }: Props) => {
  const [value, setValue] = useState<number>(1)

  const handleClick = () => {
    setValue(prev => prev + 1)
    if (value === 4 && onFinish) return onFinish()
  }

  return (
    <button onClick={handleClick}>
      + {value}
    </button>
  )
}
