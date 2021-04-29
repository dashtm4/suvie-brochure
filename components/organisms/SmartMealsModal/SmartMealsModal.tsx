import { FC, memo, MouseEvent, useMemo } from 'react'

import { ButtonLink } from '@components/atoms'
import { ProductCardProperties } from '@components/molecules'
import { GalleryModal } from '@components/organisms'
import { PATHS } from '@temp/config'
import { ISmartMeals } from '@types'

export interface ISmartMealsModalProps {
  smartMeals: ISmartMeals
  toggleModal: (event: MouseEvent<HTMLElement>) => void
}

export const SmartMealsModal: FC<ISmartMealsModalProps> = memo(
  ({ smartMeals, toggleModal }: ISmartMealsModalProps) => {
    const gallery = useMemo(
      () => smartMeals?.gallery?.map((image) => image?.url),
      [smartMeals]
    )

    return (
      <GalleryModal gallery={gallery} toggleModal={toggleModal}>
        <h3
          className="font-serif font-medium font-secondary tracking-tight mb-3"
          style={{ fontSize: '2rem' }}
        >
          {smartMeals?.title}
        </h3>

        <div className="text-quinary mb-3">{smartMeals?.description}</div>

        <ProductCardProperties
          title="Plans"
          properties={smartMeals?.plans}
          className="text-left mb-5"
        />

        <div className="font-serif font-normal text-2xl mb-3">
          Starting at ${smartMeals?.price?.price}/serving*
        </div>

        <ButtonLink href={PATHS.SMART_MEALS} className="w-full mb-3">
          Learn More
        </ButtonLink>

        <div className="text-septenary">* {smartMeals?.note}</div>
      </GalleryModal>
    )
  }
)

SmartMealsModal.displayName = 'SmartMealsModal'

export default SmartMealsModal
