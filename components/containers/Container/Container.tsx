import { FC, ReactNode, memo } from 'react'

export interface IContainerProps {
  className?: string
  children?: ReactNode
  style?: Record<string, any>
  role?: string
}

export const Container: FC<IContainerProps> = memo(
  ({ children, className = 'max-w-screen-xl', ...props }: IContainerProps) => (
    <div className={`container px-3 mx-auto ${className}`} {...props}>
      {children}
    </div>
  )
)

Container.displayName = 'Container'

export default Container
