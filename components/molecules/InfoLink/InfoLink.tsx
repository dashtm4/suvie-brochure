import { FC, memo } from 'react'
import Link from 'next/link'

import { InfoIcon } from '@components/atoms'

export interface IInfoLinkProps {
  href: string
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const InfoLink: FC<IInfoLinkProps> = memo(
  ({
    href,
    width = 10,
    height = 10,
    colorHex = '#000',
    className = ''
  }: IInfoLinkProps) => (
    <Link href={href}>
      <a>
        <InfoIcon
          width={width}
          height={height}
          colorHex={colorHex}
          className={className}
        />
      </a>
    </Link>
  )
)

InfoLink.displayName = 'InfoLink'

export default InfoLink
