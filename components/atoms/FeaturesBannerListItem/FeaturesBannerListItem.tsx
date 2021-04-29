import { FC, memo } from 'react'
import Image from 'next/image'

import { IFeaturesBannerListItem } from '@temp/types'
import { InfoLink } from '@components/molecules'

export interface IFeaturesBannerListItemProps {
  feature: IFeaturesBannerListItem
}

export const FeaturesBannerListItem: FC<IFeaturesBannerListItemProps> = memo(
  ({ feature }: IFeaturesBannerListItemProps) => (
    <div className="flex items-center justify-center h-8">
      <Image
        width={feature.image.width}
        height={feature.image.height}
        src={feature.image.url}
        alt=""
      />
      <div className="inline-flex pl-2 font-serif text-sm font-normal text-black">
        {feature.title}

        {Boolean(feature.link) && (
          <InfoLink
            href={feature.link}
            width={15}
            height={15}
            colorHex="#c8c8c8"
            className="ml-1 -mt-1"
          />
        )}
      </div>
    </div>
  )
)

FeaturesBannerListItem.displayName = 'FeaturesBannerListItem'

export default FeaturesBannerListItem
