import * as Yup from 'yup'

const maxEmailLength = 255

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .nullable()
    .max(maxEmailLength)
    .email()
    .required()
})

export default validationSchema
