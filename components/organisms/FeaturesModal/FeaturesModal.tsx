import { FC, memo, useMemo, Fragment } from 'react'
import chunk from 'lodash/chunk'

import { Button } from '@components/atoms'
import { Row, Col } from '@components/containers'
import { Modal } from '@components/organisms'

interface IFeature {
  title: string
  description: string
}

export interface IBakerBenefitsModalProps {
  title: string
  subtitle: string
  features: IFeature[]
  toggleModal: () => void
}

export const FeaturesModal: FC<IBakerBenefitsModalProps> = memo(
  ({ title, subtitle, features, toggleModal }: IBakerBenefitsModalProps) => {
    const featuresChunks = useMemo(() => chunk(features, features.length / 2), [
      features
    ])

    return (
      <Modal
        toggleModal={toggleModal}
        closeButtonColorHex="#6a6a6a"
        animation="none"
      >
        <div className="px-6 py-13 pb-22 text-quinary md:pb-9">
          <h2
            className="mb-5 font-serif font-normal text-secondary"
            style={{
              fontSize: '2rem'
            }}
          >
            {title}
          </h2>
          <p className="mb-6">{subtitle}</p>

          <Row>
            {featuresChunks?.map((chunk, index) => (
              <Col key={index} className="w-full md:w-1/2">
                {chunk?.map((feature) => (
                  <Fragment key={feature?.title}>
                    <h3 className="mb-1 font-bold">{feature?.title}</h3>
                    <p className="mb-6">{feature?.description}</p>
                  </Fragment>
                ))}
              </Col>
            ))}
          </Row>

          <div className="fixed right-3 bottom-0 left-3 py-4 px-6 bg-white shadow-2xl md:static md:shadow-none md:p-0">
            <Button
              className="max-w-full w-68 mx-auto md:mx-0"
              onClick={toggleModal}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </Modal>
    )
  }
)

FeaturesModal.displayName = 'BakerBenefitsModal'

export default FeaturesModal
