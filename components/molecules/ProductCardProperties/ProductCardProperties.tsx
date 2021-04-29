import { FC, memo } from 'react'

export interface IProductCardPropertiesProps {
  title: string
  properties: {
    item: string
  }[]
  className?: string
}

export const ProductCardProperties: FC<IProductCardPropertiesProps> = memo(
  ({ title, properties, className }: IProductCardPropertiesProps) => (
    <div className={className}>
      <h3 className="font-secondary mb-1">{title}</h3>
      <ul className="text-octonary">
        {properties.map((item) => (
          <li key={item.item}>{item.item}</li>
        ))}
      </ul>
    </div>
  )
)

ProductCardProperties.displayName = 'ProductCardProperties'

export default ProductCardProperties
