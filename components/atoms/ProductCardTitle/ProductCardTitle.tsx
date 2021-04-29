import { FC, memo, ReactNode } from 'react'

export interface IProductCardTitleProps {
  children: ReactNode
}

export const ProductCardTitle: FC<IProductCardTitleProps> = memo(
  ({ children }: IProductCardTitleProps) => (
    <h3
      className="font-serif font-normal tracking-tight font-secondary text-center mb-2"
      style={{ fontSize: '2rem' }}
    >
      {children}
    </h3>
  )
)

ProductCardTitle.displayName = 'ProductCardTitle'

export default ProductCardTitle
