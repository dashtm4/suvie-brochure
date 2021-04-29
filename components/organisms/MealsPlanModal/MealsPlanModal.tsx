import { FC, memo, MouseEvent, RefObject, useCallback, useMemo } from 'react'

import { Button } from '@components/atoms'
import { GalleryModal } from '@components/organisms'
import { ISmartMealsPlan } from '@types'

export interface IMealsPlanModalProps {
  smartMealsPlan: ISmartMealsPlan
  toggleModal: (event: MouseEvent<HTMLElement>) => void
  mealsListRef?: RefObject<HTMLDivElement>
}

export const MealsPlanModal: FC<IMealsPlanModalProps> = memo(
  ({ smartMealsPlan, toggleModal, mealsListRef }: IMealsPlanModalProps) => {
    const handleButtonClick = useCallback(
      (event) => {
        toggleModal(event)

        if (mealsListRef?.current) {
          window?.scrollTo({
            top:
              window.scrollY +
              mealsListRef?.current?.getBoundingClientRect()?.top -
              100,
            behavior: 'smooth'
          })
        }
      },
      [toggleModal, mealsListRef]
    )

    const gallery = useMemo(
      () => smartMealsPlan?.gallery?.map((image) => image.url),
      [smartMealsPlan]
    )

    return (
      <GalleryModal gallery={gallery} toggleModal={toggleModal}>
        <div className="text-center md:text-left">
          <h3
            className="mb-4 font-serif font-medium tracking-tight font-secondary"
            style={{ fontSize: '2rem' }}
          >
            {smartMealsPlan?.title}
          </h3>

          <div className="mb-5 text-quinary">{smartMealsPlan?.description}</div>

          <h4 className="mb-1 font-normal">Includes:</h4>

          <ul className="mb-6 text-quinary md:mb-4">
            {smartMealsPlan?.includes?.map((item) => (
              <li key={item.item}>{item.item}</li>
            ))}
          </ul>

          <div className="mb-4 font-serif text-2xl font-normal text-black">
            Starting at ${smartMealsPlan?.price?.price}/serving*
          </div>

          <Button className="mb-3 w-full" onClick={handleButtonClick}>
            View Meals
          </Button>

          <div className="text-quinary">{smartMealsPlan?.note}</div>
        </div>
      </GalleryModal>
    )
  }
)

MealsPlanModal.displayName = 'MealsPlanModal'

export default MealsPlanModal
