import { FC, memo } from 'react'
import ReactCountdown from 'react-countdown'
import { useQuery } from '@apollo/client'
import isEmpty from 'lodash/isEmpty'

import { ButtonLink } from '@components/atoms'
import { Countdown } from '@components/organisms'
import { Container } from '@components/containers'
import { PATHS } from '@temp/config'
import { useToggle, useWindowSize } from '@hooks'

import { COUNTDOWN_BANNER_QUERY } from '@queries'
import { ICountdownBanner } from '@types'

export interface ICountdownBannerProps {}

export const CountdownBanner: FC<ICountdownBannerProps> = memo(() => {
  const queryResult = useQuery(COUNTDOWN_BANNER_QUERY)
  const countdownBanner: ICountdownBanner =
    queryResult?.data?.countdownBanner ?? {}

  const windowSize = useWindowSize()

  const [isCompleted, toggleCompleted] = useToggle(false)

  if (
    isCompleted ||
    isEmpty(countdownBanner) ||
    Date.now() > Date.parse(countdownBanner?.endTime)
  ) {
    return null
  }

  return (
    <div className="py-5 text-center text-white bg-secondary">
      <Container className="max-w-4xl md:flex md:justify-between md:items-center">
        <div className="mb-2 md:order-1 md:mb-0">
          <div
            role="heading"
            aria-level={0}
            className="font-serif font-medium"
            style={{ fontSize: windowSize.width > 768 ? '1.5rem' : '1.375rem' }}
            aria-label="presentation"
          >
            {countdownBanner?.title}
          </div>
          <div role="heading" aria-level={3} className="text-sm">
            {countdownBanner?.subtitle}
          </div>
        </div>

        <div className="md:order-0">
          <ReactCountdown
            date={countdownBanner?.endTime}
            zeroPadTime={3}
            onComplete={toggleCompleted}
            renderer={({ days, hours, minutes, seconds }) => (
              <Countdown
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            )}
          />
        </div>

        <div className="hidden md:block md:order-2">
          <ButtonLink href={PATHS.SHOP_PAGE} theme="outline-rounded">
            Shop The Sale
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
})

CountdownBanner.displayName = 'CountdownBanner'

export default CountdownBanner
