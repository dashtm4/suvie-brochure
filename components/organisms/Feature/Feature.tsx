import { FC, memo } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

export interface IFeatureProps {
  title: string
  description: string
  imageSrc: string
  theme?: 'light' | 'dark'
  className?: string
}

export const Feature: FC<IFeatureProps> = memo(
  ({
    title,
    description,
    imageSrc,
    theme = 'light',
    className = ''
  }: IFeatureProps) => (
    <div className={classNames('text-center', className)}>
      <figure role="none" className="flex-shrink-0 mx-auto">
        <Image width="64" height="64" src={imageSrc} alt="" />
      </figure>

      <div>
        <h3
          className={classNames('font-serif font-normal text-lg mb-1', {
            'text-secondary': theme === 'light',
            'text-white': theme === 'dark'
          })}
        >
          {title}
        </h3>
        <div
          className={classNames({
            'text-septenary': theme === 'light',
            'text-white': theme === 'dark'
          })}
        >
          {description}
        </div>
      </div>
    </div>
  )
)

Feature.displayName = 'Feature'

export default Feature
