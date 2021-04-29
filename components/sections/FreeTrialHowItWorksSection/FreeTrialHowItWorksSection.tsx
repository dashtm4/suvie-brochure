import { FC, memo } from 'react'
import Image from 'next/image'

import { Wave } from '@components/atoms'
import { SectionTitle } from '@components/organisms'
import { Container, Row, Col } from '@components/containers'

import { TITLE, HOW_IT_WORKS_LIST, IMAGE_SRC } from './constants'

export interface IFreeTrialHowItWorksSectionProps {}

export const FreeTrialHowItWorksSection: FC<IFreeTrialHowItWorksSectionProps> = memo(
  () => (
    <section className="relative pt-8 pb-8 md:bg-thirdly">
      <Wave className="hidden md:block" colorHex="#f8faff" />

      <Container style={{ maxWidth: '63.75rem' }}>
        <Row className="items-center">
          <div className="mb-6 w-full -px-3 md:px-3 md:w-7/12 md:order-1 md:mb-0">
            <figure
              role="none"
              className="overflow-hidden relative mr-0 ml-auto max-w-full md:shadow-xl md:rounded-lg md:h-70 h-84 w-107"
            >
              <Image src={IMAGE_SRC} layout="fill" objectFit="cover" alt="" />
            </figure>
          </div>

          <Col className="w-full md:w-5/12 md:order-0">
            <SectionTitle
              fontSizeClassName="text-3.5xl md:text-4xl"
              className="mb-4 md:mb-5 md:max-w-xs"
              alignMd="left"
            >
              {TITLE}
            </SectionTitle>

            <ul className="text-secondary text-center md:text-left">
              {HOW_IT_WORKS_LIST?.map((item) => (
                <li key={item} className="mb-4">
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <Wave className="hidden md:block" colorHex="#f8faff" position="bottom" />
    </section>
  )
)

FreeTrialHowItWorksSection.displayName = 'FreeTrialHowItWorksSection'

export default FreeTrialHowItWorksSection
