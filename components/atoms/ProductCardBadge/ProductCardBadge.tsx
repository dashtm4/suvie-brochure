import { FC, memo, ReactNode } from 'react'

export interface IProductCardBadgeProps {
  children: ReactNode
}

export const ProductCardBadge: FC<IProductCardBadgeProps> = memo(
  ({ children }: IProductCardBadgeProps) => (
    <div className="absolute left-1/2 bottom-full py-2 px-4 text-sm font-bold tracking-widest text-center text-white uppercase whitespace-nowrap rounded-2xl transform -translate-x-1/2 translate-y-1/2 bg-primary-default">
      {children}
    </div>
  )
)

ProductCardBadge.displayName = 'ProductCardBadge'

export default ProductCardBadge
