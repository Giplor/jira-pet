import { useState, useEffect } from 'react'

export const useValidation = (initialState = '', validation = 'isEmpty') => {
  const [value, setValue] = useState(initialState)
  const [isLeave, setIsLeave] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (text) => {
    setValue(text)
    setIsLeave(false)
    setErrorMessage('')
  }

  const onBlur = () => {
    setIsLeave(true)
  }

  const setError = (message) => {
    setIsValid(false)
    setErrorMessage(message)
  }

  useEffect(() => {
    if (isLeave) {
      if (validation === 'isEmpty' && !value) {
        setError('The field must not be empty!')
        return
      } else if (
        validation === 'isEmail' &&
        !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ) {
        setError('Please enter a valid email!')
        return
      } else if (
        validation === 'isPassword' &&
        !value.match(/^(?!.*\s)(?=.*\d)(?=.*[a-z]).{6,20}$/)
      ) {
        setError('Please enter a valid password!')
        return
      }
      setIsValid(true)
      setErrorMessage('')
    }
    console.log(errorMessage)
  }, [isLeave])

  return {
    value,
    isValid,
    onChange,
    onBlur,
    errorMessage,
  }
}
