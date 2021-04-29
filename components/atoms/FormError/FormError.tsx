import { FC, memo } from 'react'
import { ErrorMessage } from 'formik'

export interface IFormErrorProps {
  name: string
}

export const FormError: FC<IFormErrorProps> = memo(
  ({ name }: IFormErrorProps) => (
    <ErrorMessage name={name} component="div" className="form__error-message" />
  )
)

FormError.displayName = 'FormError'

export default FormError
