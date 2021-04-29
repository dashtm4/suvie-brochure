import { FC, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { META_DEFAULTS, PATHS } from '@temp/config'

interface IMainLogoProps {}

export const MainLogo: FC<IMainLogoProps> = memo(() => (
  <Link href={PATHS.BASE}>
    <a className="flex items-center xl:mr-6">
      <Image
        width={107}
        height={30}
        src={META_DEFAULTS.image}
        alt={META_DEFAULTS.title}
      />
    </a>
  </Link>
))

MainLogo.displayName = 'MainLogo'

export default MainLogo
