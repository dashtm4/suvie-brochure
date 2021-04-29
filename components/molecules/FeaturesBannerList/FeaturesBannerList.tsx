import { FC, memo } from 'react'
import Carousel from 'nuka-carousel'
import { useWindowSize } from '@hooks'

import { IFeaturesBannerListItem } from '@temp/types'
import { FeaturesBannerListItem } from '@components/atoms'

export interface IFeaturesBannerListProps {
  features: IFeaturesBannerListItem[]
}

export const FeaturesBannerList: FC<IFeaturesBannerListProps> = memo(
  ({ features }: IFeaturesBannerListProps) => {
    const windowSize = useWindowSize()

    return (
      <>
        {windowSize.width < 768 && (
          <Carousel
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            renderBottomCenterControls={null}
          >
            {features.map((feature) => (
              <FeaturesBannerListItem key={feature.title} feature={feature} />
            ))}
          </Carousel>
        )}

        {windowSize.width >= 768 && (
          <div className="flex items-center justify-between">
            {features.map((feature) => (
              <FeaturesBannerListItem key={feature.title} feature={feature} />
            ))}
          </div>
        )}
      </>
    )
  }
)

FeaturesBannerList.displayName = 'FeaturesBannerList'

export default FeaturesBannerList
