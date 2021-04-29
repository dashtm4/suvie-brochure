import { FC, memo } from 'react'
import Image from 'next/image'

export interface IMenuToggleButtonProps {
  onButtonClick: () => void
}

export const MenuToggleButton: FC<IMenuToggleButtonProps> = memo(
  ({ onButtonClick }: IMenuToggleButtonProps) => {
    return (
      <button
        aria-label="Toggle Menu"
        className="h-full mr-4 xl:hidden focus:outline-none focus:shadow-outline"
        onClick={onButtonClick}
      >
        <Image
          width={20}
          height={14}
          src="/images/hamburger.svg"
          alt="Menu Toggle Button"
        />
      </button>
    )
  }
)

MenuToggleButton.displayName = 'MenuToggleButton'

export default MenuToggleButton
