import { FC, memo, ReactNode, useRef, MouseEvent } from 'react'
import classNames from 'classnames'

import { CloseButton } from '@components/atoms'
import { ShadowBackdrop } from '@components/containers'
import { useOutsideClick } from '@hooks'

export interface IModalProps {
  children: ReactNode
  toggleModal: (event: MouseEvent<HTMLElement>) => void
  closeButtonColorHex?: string
  animation?: 'flipInX' | 'none'
}

export const Modal: FC<IModalProps> = memo(
  ({
    children,
    toggleModal,
    closeButtonColorHex = '#fff',
    animation = 'flipInX'
  }: IModalProps) => {
    const ref = useRef()

    useOutsideClick(ref, (event) => toggleModal(event))

    return (
      <ShadowBackdrop>
        <div
          ref={ref}
          className={classNames(
            'relative bg-white rounded-lg shadow-2xl w-full m-auto overflow-hidden',
            {
              'animate-flip-in-x': animation === 'flipInX',
              'animate-none': animation === 'none'
            }
          )}
          style={{ maxWidth: '56.25rem' }}
        >
          <CloseButton
            handleClick={toggleModal}
            className="absolute z-10 top-6 right-6"
            colorHex={closeButtonColorHex}
          />
          {children}
        </div>
      </ShadowBackdrop>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal
