import { FC, memo } from 'react'
import Image from 'next/image'

export interface IProductCardImageProps {
  imageSrc: string
  alt: string
}

export const ProductCardImage: FC<IProductCardImageProps> = memo(
  ({ imageSrc, alt }: IProductCardImageProps) => (
    <figure role="none" className="relative w-full h-48 mb-3">
      <Image src={imageSrc} layout="fill" objectFit="contain" alt={alt} />
    </figure>
  )
)

ProductCardImage.displayName = 'ProductCardImage'

export default ProductCardImage
