import { FC, memo } from 'react'

import { Container } from '@components/containers'
import { FeaturesBannerList } from '@components/molecules'
import { IFeaturesBannerListItem } from '@temp/types'

export interface IFeaturesBannerProps {
  features: IFeaturesBannerListItem[]
}

export const FeaturesBanner: FC<IFeaturesBannerProps> = memo(
  ({ features }: IFeaturesBannerProps) => (
    <div
      className="bg-white py-2"
      style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.05)' }}
    >
      <Container style={{ maxWidth: '48.75rem' }}>
        <FeaturesBannerList features={features} />
      </Container>
    </div>
  )
)

FeaturesBanner.displayName = 'FeaturesBanner'

export default FeaturesBanner
