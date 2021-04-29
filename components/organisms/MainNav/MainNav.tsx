import { FC, memo } from 'react'
import classNames from 'classnames'

import { ButtonLink, MainNavItem, CloseButton } from '@components/atoms'
import { MAIN_NAV_LINKS, LOGIN_URL, PATHS } from '@temp/config'

export interface IMainNavProps {
  isShown: boolean
  setIsShown: (value: boolean) => void
}

export const MainNav: FC<IMainNavProps> = memo(
  ({ isShown, setIsShown }: IMainNavProps) => (
    <nav
      className={classNames(
        'fixed inset-0 bg-white py-16 animate-slide-in-left xl:animate-none xl:py-0 xl:static xl:flex xl:flex-grow xl:items-center xl:pt-0',
        {
          hidden: !isShown
        }
      )}
    >
      <CloseButton
        colorHex="#000"
        className="absolute top-4 left-6 w-4 h-4 xl:hidden"
        handleClick={() => setIsShown(false)}
      />

      <div className="mb-4 xl:mb-0 xl:mr-auto">
        <ul className="xl:flex xl:mr-auto">
          {MAIN_NAV_LINKS.map((item) => (
            <MainNavItem
              key={item?.title}
              title={item?.title}
              url={item?.url}
              external={item?.external}
            />
          ))}
        </ul>
      </div>

      <div className="xl:flex xl:ml-7">
        <ul className="mb-4 xl:mb-0 xl:flex xl:items-center">
          <MainNavItem
            title="Log In"
            url={LOGIN_URL}
            external={true}
            smallOnMobile={true}
          />
        </ul>

        <ButtonLink href={PATHS.SHOP_PAGE} className="ml-6 w-25 xl:ml-4">
          Buy now
        </ButtonLink>
      </div>
    </nav>
  )
)

MainNav.displayName = 'MainNav'

export default MainNav
