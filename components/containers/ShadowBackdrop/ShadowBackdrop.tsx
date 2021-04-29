import { FC, memo, ReactNode, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface IShadowBackdropProps {
  children: ReactNode
}

export const ShadowBackdrop: FC<IShadowBackdropProps> = memo(
  ({ children }: IShadowBackdropProps) => {
    const [container] = useState(document.createElement('div'))
    container.classList.add('fixed', 'z-40', 'inset-0', 'overflow-y-auto')

    useEffect(() => {
      document.body.appendChild(container)

      return () => {
        document.body.removeChild(container)
      }
    }, [])

    return createPortal(
      <>
        <div className="flex relative z-50 p-3 w-full h-full">{children}</div>
        <div className="fixed inset-0 z-auto bg-black opacity-50" />
      </>,
      container
    )
  }
)

ShadowBackdrop.displayName = 'ShadowBackdrop'

export default ShadowBackdrop
