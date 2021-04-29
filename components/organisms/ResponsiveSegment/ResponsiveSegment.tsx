import { FC, memo, ReactNode } from 'react'
import Carousel from 'nuka-carousel'

import { TTheme } from '@temp/types'
import { useWindowSize } from '@hooks'
import { CarouselPagination } from '@components/molecules'
import { Layout } from '@components/containers'

export interface IResponsiveSegmentProps {
  segment?: ReactNode[]
  theme?: TTheme
}

export const ResponsiveSegment: FC<IResponsiveSegmentProps> = memo(
  ({ segment = [], theme = 'light' }: IResponsiveSegmentProps) => {
    const windowSize = useWindowSize()

    if (windowSize.width >= 768) {
      return (
        <Layout className="flex flex-col flex-wrap md:flex-row">
          {segment}
        </Layout>
      )
    }

    return (
      <Carousel
        className="pb-4"
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide
        }) => (
          <CarouselPagination
            theme={theme}
            slideCount={slideCount}
            currentSlide={currentSlide}
            goToSlide={goToSlide}
          />
        )}
      >
        {segment.map((el: ReactNode, elIndex: number) => (
          <div className="px-8" key={elIndex}>
            {el}
          </div>
        ))}
      </Carousel>
    )
  }
)

ResponsiveSegment.displayName = 'ResponsiveSegment'

export default ResponsiveSegment
