import { FC, memo, ReactNode } from 'react'

import { useWindowSize } from '@hooks'

export interface ISimpleHeroProps {
  children?: ReactNode
  imageSrc: string
  description?: string
  mobileHeight: number
  desktopHeight: number
}

export const SimpleHero: FC<ISimpleHeroProps> = memo(
  ({ children, mobileHeight, desktopHeight, imageSrc }: ISimpleHeroProps) => {
    const windowSize = useWindowSize()
    const height = windowSize.width > 768 ? desktopHeight : mobileHeight

    return (
      <div
        className="bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ height: height, backgroundImage: `url(${imageSrc})` }}
      >
        {children}
      </div>
    )
  }
)

SimpleHero.displayName = 'SimpleHero'

export default SimpleHero
