import { FC, memo } from 'react'

import { PrequalifyNowLink } from '@components/organisms'

export interface IStartingAtWithAffirmProps {
  className?: string
}

export const StartingAtWithAffirm: FC<IStartingAtWithAffirmProps> = memo(
  ({ className = '' }: IStartingAtWithAffirmProps) => (
    <div className={className}>
      * Starting at 0% APR with Affirm. <PrequalifyNowLink />
    </div>
  )
)

StartingAtWithAffirm.displayName = 'StartingAtWithAffirm'

export default StartingAtWithAffirm
