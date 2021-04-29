import { FC, memo } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { Typography } from '@components/atoms'
import { Layout } from '@components/containers'

import styles from './RobotTechnicalSpecs.module.scss'

import { OVERVIEW, SPECS_1V, SPECS_2V } from './constants'

export interface IRobotTechnicalSpecsProps {
  className?: string
}

export const RobotTechnicalSpecs: FC<IRobotTechnicalSpecsProps> = memo(
  ({ className = '' }: IRobotTechnicalSpecsProps) => (
    <section className={classNames(className, styles['robot-technical-specs'])}>
      <Layout mode="container-full" className="px-4 md:mx-20">
        <h2 className="mb-6 font-serif text-4xl font-normal text-center text-primary md:mb-11">
          Technical Specs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div
            className={classNames(
              'mx-auto text-center lg:text-left mb-20 md:mb-0 md:px-4',
              styles.overview
            )}
          >
            <div className="mb-11 md:mb-6" role="presentation">
              <Image
                width={OVERVIEW.image.width}
                height={OVERVIEW.image.height}
                src={OVERVIEW.image.src}
                alt=""
              />
            </div>
            <Typography className="font-normal text-octonary">
              {OVERVIEW.content}
            </Typography>
          </div>
          <div>
            {SPECS_1V.map((spec, specIndex) => (
              <div
                className={classNames(
                  'mx-auto mb-6 text-center lg:text-left md:px-4',
                  styles.spec
                )}
                key={specIndex}
              >
                <Typography variant="subtitle3" className="font-normal">
                  {spec.title}
                </Typography>
                {spec.contents.map((item, itemIndex) => (
                  <Typography
                    key={itemIndex}
                    className="font-light text-octonary"
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
          <div>
            {SPECS_2V.map((spec, specIndex) => (
              <div
                className={classNames(
                  'mx-auto mb-6 text-center lg:text-left md:px-4',
                  styles.spec
                )}
                key={specIndex}
              >
                <Typography variant="subtitle3" className="font-normal">
                  {spec.title}
                </Typography>
                {spec.contents.map((item, itemIndex) => (
                  <Typography
                    key={itemIndex}
                    className="font-light text-octonary"
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  )
)

RobotTechnicalSpecs.displayName = 'RobotTechnicalSpecs'

export default RobotTechnicalSpecs
