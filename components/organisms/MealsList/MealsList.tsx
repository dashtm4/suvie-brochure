import { FC, memo, useState, useMemo, useEffect, RefObject } from 'react'
import chunk from 'lodash/chunk'
import take from 'lodash/take'
import flatten from 'lodash/flatten'
import uniq from 'lodash/uniq'

import { FiltersGroupDelimiter, Button } from '@components/atoms'
import { FiltersGroup, MealCard, Filter } from '@components/organisms'
import { useWindowSize } from '@hooks'
import { IMeal } from '@types'

export interface IMealsListProps {
  forwardRef?: RefObject<HTMLDivElement>
  meals: IMeal[]
  loadMoreButtonText?: string
  mobileNumberOfMeals?: number
  numberOfMeals?: number
  className?: string
}

const defaultTypeAndCategory = 'All'

export const MealsList: FC<IMealsListProps> = memo(
  ({
    forwardRef,
    meals,
    loadMoreButtonText = 'Load More',
    mobileNumberOfMeals = 6,
    numberOfMeals = 15,
    className = ''
  }) => {
    const windowSize = useWindowSize()

    const [currentNumberOfMeals, setCurrentNumberOfMeals] = useState<number>(
      mobileNumberOfMeals
    )
    const [currentPage, setCurrentPage] = useState(1)
    const [currentType, setCurrentType] = useState<string>(
      defaultTypeAndCategory
    )
    const [currentCategory, setCurrentCategory] = useState<string>(
      defaultTypeAndCategory
    )

    const types = useMemo(() => uniq(meals?.map((meal) => meal?.type)), [meals])

    const categories = useMemo(
      () => uniq(flatten(meals?.map((meal) => meal?.categories))),
      [meals]
    )

    const showDelimiter = useMemo(
      () => types.length > 1 && categories.length > 1,
      [types.length, categories.length]
    )

    const filteredByTypeMeals = useMemo(
      () =>
        currentType !== defaultTypeAndCategory
          ? meals.filter((meal) => meal?.type === currentType)
          : meals,
      [currentType, meals]
    )

    const filteredByCategoryMeals = useMemo(
      () =>
        currentCategory !== defaultTypeAndCategory
          ? filteredByTypeMeals.filter((meal) =>
              meal?.categories.includes(currentCategory)
            )
          : filteredByTypeMeals,
      [currentCategory, filteredByTypeMeals]
    )

    const chunks = useMemo(
      () => chunk(filteredByCategoryMeals, currentNumberOfMeals),
      [filteredByCategoryMeals, currentNumberOfMeals]
    )

    const handleTypeButtonClick = (item) => {
      setCurrentType(item)
    }

    const handleCategoryButtonClick = (item) => {
      setCurrentCategory(item)
    }

    const handleLoadMoreButtonClick = () => {
      setCurrentPage((value) => value + 1)
    }

    useEffect(() => {
      setCurrentPage(1)
    }, [currentType, currentCategory])

    useEffect(() => {
      setCurrentNumberOfMeals(
        windowSize.width > 768 ? numberOfMeals : mobileNumberOfMeals
      )
    }, [numberOfMeals, mobileNumberOfMeals, windowSize.width])

    return (
      <div ref={forwardRef} className={className}>
        <FiltersGroup className="mb-10 md:mb-11">
          {types.length > 1 && (
            <Filter
              title="Type"
              list={types}
              handleClick={handleTypeButtonClick}
              currentItemName={currentType}
              defaultName={defaultTypeAndCategory}
              className="mb-2 md:mb-0"
            />
          )}

          {showDelimiter && <FiltersGroupDelimiter />}

          {categories.length > 1 && (
            <Filter
              title="Category"
              list={categories}
              handleClick={handleCategoryButtonClick}
              defaultName={defaultTypeAndCategory}
              currentItemName={currentCategory}
            />
          )}
        </FiltersGroup>

        <div className="md:grid md:grid-cols-3 md:gap-5 xl:gap-10">
          {flatten(take(chunks, currentPage))?.map((meal) => (
            <MealCard
              key={meal?.id}
              meal={meal}
              className="mx-auto mb-10 md:mb-0"
            />
          ))}
        </div>

        {chunks.length > currentPage && (
          <Button
            className="mx-auto mt-8 w-40 max-w-full md:mt-16"
            onClick={handleLoadMoreButtonClick}
          >
            {loadMoreButtonText}
          </Button>
        )}
      </div>
    )
  }
)

MealsList.displayName = 'MealsList'

export default MealsList
