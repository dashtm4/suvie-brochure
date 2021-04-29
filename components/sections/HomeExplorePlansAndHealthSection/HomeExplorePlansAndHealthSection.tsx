import { FC, memo, useMemo, useState } from 'react'
import Image from 'next/image'

import {
  Wave,
  ButtonLink,
  HorizontalTabsListItem,
  HorizontalTabsPanel
} from '@components/atoms'
import { Container, Row, Col } from '@components/containers'
import { HorizontalTabsList } from '@components/molecules'
import {
  SectionTitle,
  VideoGalleryCard,
  VideoCard,
  HorizontalTabs
} from '@components/organisms'
import { PATHS } from '@temp/config'

import {
  SMART_MEALS_SUBTITLE,
  SMART_MEALS_LIST,
  SMART_MEALS_VIDEO_SRC,
  TABS_CONTENT
} from './constants'

export interface IHomeExplorePlansAndHealthSectionProps {}

export const HomeExplorePlansAndHealthSection: FC<IHomeExplorePlansAndHealthSectionProps> = memo(
  () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const itemVideos = useMemo(
      () => TABS_CONTENT.map((item) => item.videoSrc),
      [TABS_CONTENT]
    )

    return (
      <section className="relative pt-10 text-center text-white bg-secondary pb-13 md:text-left md:pt-25">
        <Wave />

        <Container>
          <Row className="items-center mb-25 md:mb-21">
            <Col className="w-full md:w-1/2">
              <Image
                width="75"
                height="75"
                src="/images/smart-meals-icon.svg"
              />
              <SectionTitle
                theme="dark"
                alignMd="left"
                className="mb-8 md:mb-3"
              >
                Suvie <strong className="font-bold">Smart Meals</strong>
                <br />
                save you more time
              </SectionTitle>

              <div className="mb-6 md:max-w-md md:mb-4">
                {SMART_MEALS_SUBTITLE}
              </div>

              <ul className="text-lg mb-9 md:mb-4">
                {SMART_MEALS_LIST?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <ButtonLink
                href={PATHS.SMART_MEALS}
                className="hidden max-w-full md:inline-block w-51"
              >
                Explore The Plans
              </ButtonLink>
            </Col>

            <div className="w-full md:px-3 md:w-1/2">
              <VideoCard videoSrc={SMART_MEALS_VIDEO_SRC} className="mb-8" />

              <div className="px-3 md:px-0">
                <ButtonLink
                  href={PATHS.SMART_MEALS}
                  className="block max-w-full mx-auto w-51 md:hidden"
                >
                  Explore The Plans
                </ButtonLink>
              </div>
            </div>
          </Row>

          <Row className="items-center justify-between">
            <div className="w-full mb-4 md:mb-0 md:w-1/2 md:order-1">
              <SectionTitle theme="dark" className="mb-4 md:hidden">
                Make it easier to live <br /> a healthier lifestyle
              </SectionTitle>
              <VideoGalleryCard
                videos={itemVideos}
                activeVideoIndex={activeIndex}
                setActiveVideoIndex={setActiveIndex}
              />
            </div>

            <div className="w-full text-center md:w-5/12 md:px-3 md:order-0 md:text-left">
              <SectionTitle
                theme="dark"
                alignMd="left"
                className="hidden md:block md:mb-6"
              >
                Make it easier to live <br /> a healthier lifestyle
              </SectionTitle>

              <HorizontalTabs
                selectedIndex={activeIndex}
                onSelect={(index) => setActiveIndex(index)}
                className="mb-4 md:mb-6"
              >
                <HorizontalTabsList>
                  {TABS_CONTENT.map((item) => (
                    <HorizontalTabsListItem key={item.title}>
                      {item.title}
                    </HorizontalTabsListItem>
                  ))}
                </HorizontalTabsList>

                {TABS_CONTENT.map((item) => (
                  <HorizontalTabsPanel key={item.title}>
                    {item.description}
                  </HorizontalTabsPanel>
                ))}
              </HorizontalTabs>

              <ButtonLink
                href={PATHS.HEALTH}
                className="max-w-full mx-auto w-51"
              >
                Explore Health
              </ButtonLink>
            </div>
          </Row>
        </Container>

        <Wave position="bottom" style={{ zIndex: 1 }} />
      </section>
    )
  }
)

HomeExplorePlansAndHealthSection.displayName =
  'HomeExplorePlansAndHealthSection'

export default HomeExplorePlansAndHealthSection
