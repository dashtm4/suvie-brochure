export interface IMeal {
  id: string
  title: string
  subtitle: string
  description?: string
  imageSrc: string
  videoSrc?: string
  posterSrc?: string
  type?: string
  prepTime?: string
  calories?: number
  categories?: string[]
  plateImageSrc?: string
}
