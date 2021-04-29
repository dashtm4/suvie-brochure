import { FC, memo } from 'react'
import { Formik, Form, FormikHelpers, FormikValues } from 'formik'

import { Button, FormError, FormField } from '@components/atoms'

import validationSchema from './validationSchema'

export interface ISignupFormProps {}

export const SignupForm: FC<ISignupFormProps> = memo(() => {
  const initialValues = {
    email: ''
  }

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>
  ) => {
    setTimeout(() => {
      console.log(values)
      setSubmitting(false)
    }, 1000)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="form" style={{ maxWidth: '460px' }}>
          <div>
            <div className="text-center md:flex">
              <FormField
                name="email"
                type="email"
                title="Email"
                placeholder="Enter Your Email"
                className="w-full mb-3 md:rounded-r-none md:mb-0"
              />
              <Button
                type="submit"
                isLoading={isSubmitting}
                className="w-50 max-w-full mx-auto md:rounded-l-none"
              >
                Get $200 off
              </Button>
            </div>

            {!!(errors?.email && touched?.email) && <FormError name="email" />}
          </div>
        </Form>
      )}
    </Formik>
  )
})

SignupForm.displayName = 'SignupForm'

export default SignupForm
