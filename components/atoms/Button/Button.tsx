import { FC, ButtonHTMLAttributes, RefObject, memo } from 'react'
import classNames from 'classnames'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'simple' | 'outline'
  btnRef?: RefObject<HTMLButtonElement>
  isLoading?: boolean
  className?: string
  loaderColorHex?: string
}

export const Button: FC<IButtonProps> = memo(
  ({
    theme = 'primary',
    btnRef,
    children,
    isLoading = false,
    className,
    loaderColorHex = '#fff',
    ...props
  }: IButtonProps) => (
    <button
      ref={btnRef}
      className={classNames('btn flex items-center justify-center', className, {
        btn_primary: theme === 'primary',
        btn_simple: theme === 'simple',
        btn_outline: theme === 'outline'
      })}
      {...props}
    >
      {isLoading && (
        <svg
          width="16"
          height="16"
          className="animate-spin -ml-1 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke={loaderColorHex}
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill={loaderColorHex}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
)

Button.displayName = 'Button'

export default Button
