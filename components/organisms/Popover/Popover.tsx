import { FC, memo, ReactNode, RefObject } from 'react'
import { useOutsideClick } from '@hooks'
import classNames from 'classnames'

export interface IPopoverProps {
  children: ReactNode
  forwardRef?: RefObject<any>
  toggle?: () => void
  className?: string
}

export const Popover: FC<IPopoverProps> = memo(
  ({
    forwardRef,
    children,
    toggle,
    className = 'bottom-8 right-0'
  }: IPopoverProps) => {
    useOutsideClick(forwardRef, toggle)

    return (
      <div
        ref={forwardRef}
        className={classNames(
          'absolute  py-4 px-3 text-xs font-normal bg-white rounded text-secondary',
          className
        )}
        style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)' }}
      >
        {children}
      </div>
    )
  }
)

Popover.displayName = 'Popover'

export default Popover
