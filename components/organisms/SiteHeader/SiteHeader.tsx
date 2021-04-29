import { FC, useState, memo } from 'react'

import { MenuToggleButton, MainLogo, ButtonLink } from '@components/atoms'
import { MainNav } from '@components/organisms'
import { PATHS } from '@temp/config'

interface ISiteHeaderProps {}

export const SiteHeader: FC<ISiteHeaderProps> = memo(() => {
  const [isExpandMenu, setIsExpandMenu] = useState<boolean>(false)

  return (
    <div
      className="sticky top-0 z-40"
      style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)' }}
    >
      <header className="bg-white p-3 xl:flex xl:justify-between xl:items-center xl:flex-no-wrap xl:py-4 xl:pl-8 xl:pr-6">
        <div className="flex items-center justify-between flex-no-wrap xl:block">
          <div className="flex w-full items-center">
            <MenuToggleButton
              onButtonClick={() =>
                setIsExpandMenu((isExpandMenu) => !isExpandMenu)
              }
            />
            <MainLogo />

            <div className="mr-0 ml-auto xl:hidden">
              <ButtonLink href={PATHS.SHOP_PAGE} className="ml-2">
                Buy now
              </ButtonLink>
            </div>
          </div>
        </div>

        <MainNav isShown={isExpandMenu} setIsShown={setIsExpandMenu} />
      </header>
    </div>
  )
})

SiteHeader.displayName = 'SiteHeader'

export default SiteHeader
