import { FC, memo } from 'react'

import { MainLogo } from '@components/atoms'

export interface ISimpleSiteHeaderProps {}

export const SimpleSiteHeader: FC<ISimpleSiteHeaderProps> = memo(() => (
  <div className="sticky top-0 z-10 shadow-md">
    <header className="bg-white py-4 px-3 flex justify-center items-center flex-no-wrap xl:py-6 xl:pl-8 xl:pr-6">
      <MainLogo />
    </header>
  </div>
))

SimpleSiteHeader.displayName = 'SimpleSiteHeader'

export default SimpleSiteHeader
