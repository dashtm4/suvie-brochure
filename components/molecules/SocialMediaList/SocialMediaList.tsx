import { FC, memo } from 'react'

import { SocialMediaIcon } from '@components/atoms'

interface SocialMediaListItem {
  title: string
  url: string
  icon: string
}

export interface ISocialMediaListProps {
  list: SocialMediaListItem[]
}

export const SocialMediaList: FC<ISocialMediaListProps> = memo(
  ({ list }: ISocialMediaListProps) => (
    <ul className="flex w-full">
      {list.map((item) => (
        <li key={item.title} className="mr-2" role="presentation">
          <SocialMediaIcon key={item.title} socialMedia={item} />
        </li>
      ))}
    </ul>
  )
)

SocialMediaList.displayName = 'SocialMediaList'

export default SocialMediaList
