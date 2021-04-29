import { FC, memo } from 'react'
import Image from 'next/image'

import { Wave, ButtonLink } from '@components/atoms'
import { Container, Row } from '@components/containers'
import {
  MediaCard,
  StartingAtWithAffirm,
  SectionTitle,
  StartingAt
} from '@components/organisms'
import { META_DEFAULTS, PATHS } from '@temp/config'

import { TITLE, SUBTITLE, MEDIA_CARDS, SECOND_TITLE } from './constants'

export interface IHomeSaveUpTimeSectionProps {}

export const HomeSaveUpTimeSection: FC<IHomeSaveUpTimeSectionProps> = memo(
  () => (
    <section
      className="relative pt-10 text-center text-white pb-22 md:pt-21"
      style={{
        backgroundImage: 'linear-gradient(180deg, #1f2837 -8%, #141921 70%)'
      }}
    >
      <Wave />

      <Container>
        <div className="md:max-w-xl md:mx-auto">
          <SectionTitle theme="dark" className="mb-4 md:mb-5">
            {TITLE}
          </SectionTitle>

          <div className="mb-9 md:text-lg md:mb-13">{SUBTITLE}</div>
        </div>

        <div className="mx-auto mb-14 md:mb-24" style={{ maxWidth: '1090px' }}>
          <Row>
            {MEDIA_CARDS?.map((mediaCard) => (
              <div
                key={mediaCard?.title}
                className="w-full mb-12 -px-3 last:mb-0 md:w-1/2 md:px-3 md:mb-0"
              >
                <MediaCard
                  title={mediaCard?.title}
                  description={mediaCard?.description}
                  videoSrc={mediaCard?.videoSrc}
                  tags={mediaCard?.tags}
                />
              </div>
            ))}
          </Row>
        </div>

        <div className="mb-3 md:mb-5" role="presentation">
          <Image
            width="211"
            height="211"
            src="/images/suvie-seal.png"
            alt={META_DEFAULTS.title}
          />
        </div>

        <div className="md:flex md:flex-col">
          <SectionTitle theme="dark" className="mb-4 md:mb-2 md:order-0">
            {SECOND_TITLE}
          </SectionTitle>

          <ButtonLink
            href={PATHS.SHOP_PAGE}
            className="max-w-full mb-3 w-51 md:mx-auto md:order-2"
          >
            Buy now
          </ButtonLink>

          <StartingAtWithAffirm className="hidden md:block md:order-3" />

          <StartingAt className="md:order-1 md:mb-3" />
        </div>
      </Container>

      <Wave position="bottom" colorHex="#141921" style={{ zIndex: 1 }} />
    </section>
  )
)

HomeSaveUpTimeSection.displayName = 'HomeSaveUpTimeSection'

export default HomeSaveUpTimeSection
