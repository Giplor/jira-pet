import { useState, useEffect } from 'react'

export const useValidation = (value, validations = []) => {
  const [errorEmpty, setErrorEmpty] = useState('')
  const [minLengthError, setMinLengthError] = useState('')
  const [maxLengthError, setMaxLengthError] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    validations.forEach((validation) => {
      switch (validation) {
        case 'isEmpty':
          value ? setErrorEmpty('') : setErrorEmpty('The field must not be empty')
          break
        case validations.find((object) => object.minLength):
          const minLength = Object.values(
            validations.find((object) => object.maxLength)
          )
          value.length < minLength
            ? setMinLengthError('The field must have at least 4 characters')
            : setMinLengthError('')
        case validations.find((object) => object.maxLength):
          const maxLength = Object.values(
            validations.find((object) => object.maxLength)
          )
          value.length > maxLength
            ? setMaxLengthError('The field must have a maximum of 4 characters')
            : setMaxLengthError('')
          break
        case 'isEmail':
          !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? setErrorEmail('Please enter a valid email!')
            : setErrorEmail('')
        case 'isPassword':
          !value.match(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/)
            ? setErrorPassword('Please enter a valid password!')
            : setErrorPassword('')
      }
    })
  }, [value])

  useEffect(() => {
    if (
      errorEmpty ||
      minLengthError ||
      maxLengthError ||
      errorEmail ||
      errorPassword === ''
    ) {
      setIsValid(false)
      console.log('asa')
    } else {
      setIsValid(true)
      console.log('fo asa')
    }
  }, [errorEmpty, minLengthError, maxLengthError, errorEmail, errorPassword])

  return {
    errorEmpty,
    minLengthError,
    maxLengthError,
    errorEmail,
    errorPassword,
    isValid,
  }
}
