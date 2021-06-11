import { useEffect, useState } from 'react'

export const useAnimateValue = (value?: unknown) => {
  const [previousValue, setNewValue] = useState<unknown>(value)
  const [isChanged, updatedValue] = useState<boolean>(false)

  useEffect(() => {
    if (!previousValue && value) {
      setNewValue(value)
    } else if (value !== previousValue) {
      setNewValue(value)
      updatedValue(true)
    }
  }, [value])

  useEffect(() => {
    setTimeout(() => {
      updatedValue(false)
    }, 2000)
  }, [isChanged])

  const animatedClass = isChanged ? 'animated-value' : ''

  return {
    animatedClass,
  }
}
