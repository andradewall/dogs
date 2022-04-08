import React, { useState } from 'react'

const inputTypes = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Insert a valid e-mail!',
  },
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validate = (value) => {
    if (type === false) return true
    if (value.length === 0) {
      setError('Insert a value')
      return false
    } else if (inputTypes[type] && !inputTypes[type].regex.test(value)) {
      setError(inputTypes[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
