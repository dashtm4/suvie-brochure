import { FC, memo } from 'react'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'

import { Wave, TWaveColor } from '@components/atoms'
import { PageTitle } from '@components/organisms'
import { Container } from '@components/containers'
import { useWindowSize } from '@hooks'

export interface IDefaultHeroProps {
  title: string
  mobileTitle?: string
  strapline?: string
  subtitle?: string
  imageSrc?: string
  mobileImageSrc?: string
  bgPosition?: 'top' | 'center' | 'bottom'
  waveColorName?: TWaveColor
  waveColorHex?: string
  className?: string
}

export const DefaultHero: FC<IDefaultHeroProps> = memo(
  ({
    title,
    mobileTitle,
    strapline,
    subtitle,
    imageSrc,
    mobileImageSrc,
    bgPosition = 'center',
    waveColorName,
    waveColorHex,
    className = ''
  }: IDefaultHeroProps) => {
    const windowSize = useWindowSize()

    const backgroundImage =
      windowSize.width > 768
        ? imageSrc ?? mobileImageSrc
        : mobileImageSrc ?? imageSrc

    return (
      <section
        className={classNames(
          'relative bg-secondary text-white text-center',
          className,
          {
            'py-20': isEmpty(imageSrc),
            'bg-top': bgPosition === 'top',
            'bg-center': bgPosition === 'center',
            'bg-bottom': bgPosition === 'bottom',
            'bg-cover bg-no-repeat  pt-50 pb-44 md:pt-33 md:pb-40': !isEmpty(
              imageSrc
            )
          }
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <Container role="banner" className="max-w-5xl">
          {strapline && (
            <div className="mb-4 text-sm font-bold tracking-wide uppercase">
              {strapline}
            </div>
          )}
          <PageTitle>
            <span className={classNames({ 'hidden md:inline': !!mobileTitle })}>
              {title}
            </span>
            {mobileTitle && <span className="md:hidden">{mobileTitle}</span>}
          </PageTitle>
          {subtitle && <div className="mt-7">{subtitle}</div>}
        </Container>

        <Wave
          position={isEmpty(imageSrc) ? 'bottom' : 'bottom-revert'}
          colorName={waveColorName ?? isEmpty(imageSrc) ? 'secondary' : 'white'}
          colorHex={waveColorHex}
        />
      </section>
    )
  }
)

DefaultHero.displayName = 'DefaultHero'

export default DefaultHero
