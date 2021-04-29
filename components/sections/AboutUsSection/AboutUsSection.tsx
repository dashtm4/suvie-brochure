import { FC, memo, Fragment } from 'react'
import Image from 'next/image'

import { Layout } from '@components/containers'
import { Wave } from '@components/atoms'

import { OVERVIEW, ABOUT_US_1V } from './constants'
import { ISegment } from './types'

export interface IAboutUsSectionProps {}

export const AboutUsSection: FC<IAboutUsSectionProps> = memo(() => {
  const renderSegment = (segmentData: ISegment) => (
    <div className="mb-8 md:mb-0">
      <div className="mb-4">
        <Image
          className="rounded-md"
          layout="responsive"
          width={300}
          height={300}
          src={segmentData.imgSrc}
        />
      </div>
      <div className="text-lg font-bold text-black">{segmentData.title}</div>
      <div className="text-lg font-normal text-black">
        {segmentData.subtitle}
      </div>
    </div>
  )

  return (
    <section className="relative">
      <Layout className="text-center pt-14 md:pt-25 mb-31 md:mb-21">
        <div className="max-w-lg mx-auto">
          <h1 className="mb-4 font-serif text-4xl font-normal md:text-3xl md:mb-5 text-secondary">
            {OVERVIEW.title}
          </h1>
          <h2 className="mb-4 font-serif text-2xl font-normal md:text-4xl md:mb-5 text-secondary">
            {OVERVIEW.subtitle}
          </h2>
          <div className="text-base font-light mb-7 md:mb-16 text-quinary">
            {OVERVIEW.content}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 md:gap-x-16 md:gap-y-9 md:grid-cols-3">
          {ABOUT_US_1V.map((segmentData: ISegment) => (
            <Fragment key={segmentData.title}>
              {renderSegment(segmentData)}
            </Fragment>
          ))}
        </div>
      </Layout>

      <Wave position="bottom" colorName="white" />
    </section>
  )
})

AboutUsSection.displayName = 'AboutUsSection'

export default AboutUsSection
