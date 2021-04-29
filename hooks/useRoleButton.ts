import { RefObject, useEffect } from 'react'

export const useRoleButton = (
  ref: RefObject<HTMLElement>,
  action: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const onKeyup = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        action(event)
      }
    }

    ref.current?.setAttribute('role', 'button')
    ref.current?.setAttribute('tabindex', '0')

    ref.current?.addEventListener('keypress', onKeyup)

    return () => ref.current?.removeEventListener('keypress', onKeyup)
  }, [])
}
