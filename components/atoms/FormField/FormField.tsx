import { FC, useMemo, ReactNode, memo } from 'react'
import { Field } from 'formik'
import classNames from 'classnames'
import capitalize from 'lodash/capitalize'
import lowerCase from 'lodash/lowerCase'

export interface IFormFieldProps {
  name: string
  type?: string
  title?: string
  placeholder?: string
  component?: ReactNode
  isError?: boolean
  readOnly?: boolean
  disabled?: boolean
  className?: string
}

export const FormField: FC<IFormFieldProps> = memo(
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
  }: IFormFieldProps) => {
    const formattedName = useMemo(() => capitalize(lowerCase(name)), [name])

    return (
      <Field
        name={name}
        type={type}
        className={classNames(`form__control ${className}`, {
          'border-danger': isError
        })}
        title={title || formattedName}
        placeholder={placeholder || title || formattedName}
        component={component}
        readOnly={readOnly}
        disabled={disabled}
      />
    )
  }
)

FormField.displayName = 'FormField'

export default FormField
