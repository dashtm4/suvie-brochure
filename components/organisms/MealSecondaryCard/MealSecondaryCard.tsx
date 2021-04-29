import { FC, useMemo, memo } from 'react'
import Image from 'next/image'
import lowerCase from 'lodash/lowerCase'
import isEmpty from 'lodash/isEmpty'

import { IMeal } from '@temp/types'

export interface IMealSecondaryCardProps {
  meal: IMeal
  className?: string
}

export const MealSecondaryCard: FC<IMealSecondaryCardProps> = memo(
  ({ meal, className }: IMealSecondaryCardProps) => {
    const isCertifiedBalanced = useMemo(
      () =>
        meal?.categories?.some(
          (category) => lowerCase(category) === 'certified balanced'
        ),
      [meal?.categories]
    )

    return (
      <div
        className={`bg-white shadow-md rounded-lg w-62 max-w-full ${className}`}
      >
        <figure
          role="none"
          className="relative rounded-lg w-62 h-48 overflow-hidden"
        >
          <Image
            src={meal.imageSrc}
            layout="fill"
            objectFit="cover"
            alt={meal.title}
          />

          {isEmpty(meal.calories) && (
            <div className="bg-secondary opacity-75 absolute bottom-0 left-0 font-bold text-sm uppercase text-white tracking-widest py-2 px-4">
              {meal.calories} calories
            </div>
          )}
        </figure>
        <div className="text-black pt-3 pb-4 px-3">
          <h3 className="font-serif font-normal text-2xl mb-1">{meal.title}</h3>
          <div className="mb-2">{meal.subtitle}</div>

          {isCertifiedBalanced && (
            <div className="text-sm text-gray-600 flex items-center gap-x-1">
              <Image
                width="20"
                height="20"
                src="/images/certified-balanced-icon.svg"
              />
              Certified Balanced
            </div>
          )}
        </div>
      </div>
    )
  }
)

MealSecondaryCard.displayName = 'MealSecondaryCard'

export default MealSecondaryCard
