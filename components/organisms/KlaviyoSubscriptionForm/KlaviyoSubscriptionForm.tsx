import { FC, memo, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form, FormikHelpers, FormikValues } from 'formik'

import { Button, FormError, FormField } from '@components/atoms'
import { useToggle } from '@hooks'
import { KLAVIYO_SUBSCRIPTION_LIST_ID } from '@temp/constants'

export interface IKlaviyoSubscriptionFormProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').nullable().max(255).email().required()
})

const initialValues = {
  email: ''
}

export const KlaviyoSubscriptionForm: FC<IKlaviyoSubscriptionFormProps> = memo(
  () => {
    const [formError, setFormError] = useState<string>('')

    const [isShownSuccessMessage, toggleIsShownSuccessMessage] = useToggle(
      false
    )

    const handleSubmit = async (
      values: FormikValues,
      { setSubmitting }: FormikHelpers<FormikValues>
    ) => {
      try {
        setFormError('')

        const response = await fetch(
          'https://manage.kmail-lists.com/ajax/subscriptions/subscribe',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'cache-control': 'no-cache'
            },
            body: new URLSearchParams({
              g: KLAVIYO_SUBSCRIPTION_LIST_ID,
              email: values?.email
            })
          }
        )

        const result = await response.json()

        if (result?.success) {
          toggleIsShownSuccessMessage()
        } else {
          setFormError(result?.errors?.[0])
        }
      } catch (error) {
        setFormError('Something went wrong')
      } finally {
        setSubmitting(false)
      }
    }

    return (
      <>
        {!isShownSuccessMessage && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="mb-4 form" style={{ maxWidth: '21.875rem' }}>
                <h3 className="mb-2 font-serif font-normal leading-snug text-white">
                  Join the Suvie newsletter to get updates
                </h3>

                <div>
                  <div className="flex">
                    <FormField
                      name="email"
                      type="email"
                      title="Email"
                      placeholder="Email Address"
                      className="w-full placeholder-white text-white bg-transparent rounded-r-none border-2"
                    />
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      loaderColorHex="#000"
                      className="flex-shrink-0 bg-white rounded-l-none border-white w-26 text-secondary hover:bg-secondary hover:text-white hover:border-white"
                    >
                      Sign Up
                    </Button>
                  </div>

                  {!!(errors?.email && touched?.email) && (
                    <FormError name="email" />
                  )}

                  {formError?.length > 0 && (
                    <div className="form__error-message">{formError}</div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}

        {isShownSuccessMessage && (
          <div className="mb-4 text-white">
            <h3 className="mb-2 font-serif font-normal leading-snug">
              Thanks for subscribing
            </h3>
            <div>
              Check your email for a welcome message from the Suvie team
            </div>
          </div>
        )}
      </>
    )
  }
)

KlaviyoSubscriptionForm.displayName = 'KlaviyoSubscriptionForm'

export default KlaviyoSubscriptionForm
