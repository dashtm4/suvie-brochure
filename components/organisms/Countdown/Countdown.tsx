import { FC, memo } from 'react'

import { CountdownItemValue, CountdownItemName } from '@components/atoms'
import { CountdownItem } from '@components/molecules'
import { getZeroPadValue } from '@utils'

export interface ICountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const Countdown: FC<ICountdownProps> = memo(
  ({ days, hours, minutes, seconds }: ICountdownProps) => (
    <div className="flex justify-center gap-3">
      <CountdownItem>
        <CountdownItemValue>{getZeroPadValue(days)}</CountdownItemValue>
        <CountdownItemName>DAY</CountdownItemName>
      </CountdownItem>

      <CountdownItem>
        <CountdownItemValue>{getZeroPadValue(hours)}</CountdownItemValue>
        <CountdownItemName>HR</CountdownItemName>
      </CountdownItem>

      <CountdownItem>
        <CountdownItemValue>{getZeroPadValue(minutes)}</CountdownItemValue>
        <CountdownItemName>MIN</CountdownItemName>
      </CountdownItem>

      <CountdownItem>
        <CountdownItemValue>{getZeroPadValue(seconds)}</CountdownItemValue>
        <CountdownItemName>SEC</CountdownItemName>
      </CountdownItem>
    </div>
  )
)

Countdown.displayName = 'Countdown'

export default Countdown
