import { FC, memo } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

export interface IMainNavItemProps {
  title: string
  url: string
  target?: string
  rel?: string
  external?: boolean
  smallOnMobile?: boolean
}

export const MainNavItem: FC<IMainNavItemProps> = memo(
  ({
    title,
    url,
    target = '_blank',
    rel = 'noreferrer',
    external = false,
    smallOnMobile = false
  }: IMainNavItemProps) => (
    <li
      key={title}
      className={classNames(
        'flex items-center font-serif font-normal text-secondary xl:text-lg hover:text-primary-dark',
        {
          'text-lg': smallOnMobile,
          'text-4xl': !smallOnMobile
        }
      )}
    >
      {external ? (
        <a
          href={url}
          className="block py-2 px-6 w-full xl:px-4"
          aria-label={
            target === '_blank' ? `${title} - opens in new window` : title
          }
          target={target}
          rel={rel}
        >
          {title}
        </a>
      ) : (
        <Link href={url}>
          <a className="block py-2 px-6 w-full xl:px-4">{title}</a>
        </Link>
      )}
    </li>
  )
)

MainNavItem.displayName = 'MainNavItem'

export default MainNavItem
