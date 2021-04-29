import { FC, memo } from 'react'
import Link from 'next/link'

interface MenuItem {
  title: string
  url: string
  target?: string
  rel?: string
  external?: boolean
}

export interface IFooterMenuProps {
  menu: MenuItem[]
}

export const FooterMenu: FC<IFooterMenuProps> = memo(
  ({ menu }: IFooterMenuProps) => (
    <ul className="text-white md:text-base md:font-serif md:font-normal">
      {menu.map((item) => (
        <li key={item.title} className="mb-1">
          {item.external ? (
            <a
              href={item.url}
              aria-label={
                item.target === '_blank'
                  ? `${item.title} - opens in new window`
                  : item.title
              }
              target={item.target}
              className="hover:text-primary-default"
            >
              {item.title}
            </a>
          ) : (
            <Link href={item.url}>
              <a className="hover:text-primary-default">{item.title}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
)

FooterMenu.displayName = 'FooterMenu'

export default FooterMenu
