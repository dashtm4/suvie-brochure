import { FC, ReactNode, useMemo, memo } from 'react'
import lowerCase from 'lodash/lowerCase'
import capitalize from 'lodash/capitalize'

import { FormField, FormError } from '@components/atoms'

export interface IFormGroupProps {
  name: string
  type?: string
  title?: string
  placeholder?: string
  component?: ReactNode
  className?: string
  isError?: boolean
  readOnly?: boolean
  disabled?: boolean
}

export const FormGroup: FC<IFormGroupProps> = memo(
  ({
    name,
    type = 'text',
    title,
    placeholder,
    component,
    isError,
    readOnly,
    disabled,
    className = ''
  }: IFormGroupProps) => {
    const formattedName = useMemo(() => capitalize(lowerCase(name)), [name])

    return (
      <div className={`form__group ${className}`}>
        <FormField
          name={name}
          type={type}
          title={title || formattedName}
          placeholder={placeholder}
          component={component}
          isError={isError}
          readOnly={readOnly}
          disabled={disabled}
        />

        <FormError name={name} />
      </div>
    )
  }
)

FormGroup.displayName = 'FormGroup'

export default FormGroup
