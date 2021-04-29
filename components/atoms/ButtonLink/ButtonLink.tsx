import { FC, LinkHTMLAttributes, memo, RefObject } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export interface IButtonLinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string
  btnRef?: RefObject<HTMLAnchorElement>
  theme?: 'primary' | 'outline-rounded'
  isExternal?: boolean
  target?: string
  className?: string
}

export const ButtonLink: FC<IButtonLinkProps> = memo(
  ({
    href,
    btnRef,
    children,
    theme = 'primary',
    isExternal = false,
    className = '',
    target = '_self',
    ...props
  }) => {
    const linkClassName = classNames('btn', className, {
      btn_primary: theme === 'primary',
      'btn_outline-rounded': theme === 'outline-rounded'
    })

    if (isExternal) {
      return (
        <a
          ref={btnRef}
          href={href}
          className={linkClassName}
          aria-label={target === '_blank' ? 'opens in new window' : ''}
          target={target}
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href}>
        <a ref={btnRef} className={linkClassName} {...props}>
          {children}
        </a>
      </Link>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
