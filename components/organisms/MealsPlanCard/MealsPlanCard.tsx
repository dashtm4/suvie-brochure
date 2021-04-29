import { FC, memo, RefObject, useRef } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { MealsPlanModal } from '@components/organisms'
import { useToggle, useRoleButton } from '@hooks'
import { ISmartMealsPlan } from '@types'

export interface IMealsPlanCardProps {
  smartMealsPlan: ISmartMealsPlan
  mealsListRef?: RefObject<HTMLDivElement>
  className?: string
}

export const MealsPlanCard: FC<IMealsPlanCardProps> = memo(
  ({ smartMealsPlan, mealsListRef, className = '' }: IMealsPlanCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [showModal, toggleModal] = useToggle(false)

    useRoleButton(ref, toggleModal)

    return (
      <>
        <div
          ref={ref}
          className={classNames(
            'flex flex-col border rounded-2xl cursor-pointer hover:border-primary-default overflow-hidden',
            className
          )}
          onClick={toggleModal}
        >
          <figure role="none" className="relative w-full h-40">
            <Image
              layout="fill"
              objectFit="cover"
              src={smartMealsPlan?.image?.url}
              alt={smartMealsPlan?.title}
            />

            {smartMealsPlan?.recommended && (
              <div className="absolute top-full left-1/2 py-1 px-2 font-serif text-lg font-normal text-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 bg-secondary">
                Most Popular
              </div>
            )}
          </figure>

          <div className="flex flex-col flex-grow pt-6 pb-5 mx-3 text-center">
            <h3 className="mb-2 font-serif text-3xl font-normal text-black">
              {smartMealsPlan?.title}
            </h3>
            <div className="mb-4 text-quinary">
              {smartMealsPlan?.description}
            </div>
            <div className="mt-auto mb-0">
              <div className="mb-2 font-serif text-2xl font-normal text-secondary">
                ${smartMealsPlan?.price?.price}/serving
              </div>
              <div className="font-serif text-sm italic font-normal text-quinary">
                {smartMealsPlan?.note}
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <MealsPlanModal
            smartMealsPlan={smartMealsPlan}
            mealsListRef={mealsListRef}
            toggleModal={toggleModal}
          />
        )}
      </>
    )
  }
)

MealsPlanCard.displayName = 'MealsPlanCard'

export default MealsPlanCard
