import { FC, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { META_DEFAULTS, PATHS } from '@temp/config'

export interface ISealLogoProps {}

export const SealLogo: FC<ISealLogoProps> = memo(() => (
  <Link href={PATHS.BASE}>
    <a className="block">
      <Image
        width={165}
        height={165}
        src="/images/suvie-seal.png"
        alt={META_DEFAULTS.title}
      />
    </a>
  </Link>
))

SealLogo.displayName = 'SealLogo'

export default SealLogo
