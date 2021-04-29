import { useState } from 'react'

export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = () => {
    setValue((previousValue) => !previousValue)
  }

  return [value, toggleValue] as const
}
