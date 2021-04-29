import { FC, memo } from 'react'
import Image from 'next/image'

interface SocialMedia {
  title: string
  url: string
  icon: string
}

export interface ISocialMediaIconProps {
  socialMedia: SocialMedia
  target?: string
  rel?: string
}

export const SocialMediaIcon: FC<ISocialMediaIconProps> = memo(
  ({
    socialMedia,
    target = '_blank',
    rel = 'noreferrer'
  }: ISocialMediaIconProps) => (
    <a
      href={socialMedia.url}
      aria-label={
        target === '_blank'
          ? `${socialMedia.title} - opens in new window`
          : socialMedia.title
      }
      target={target}
      rel={rel}
    >
      <Image
        width={30}
        height={30}
        src={socialMedia.icon}
        alt={socialMedia.title}
      />
    </a>
  )
)

SocialMediaIcon.displayName = 'SocialMediaIcon'

export default SocialMediaIcon
