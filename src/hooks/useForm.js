import { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const onInputChange = (evt) => {
    const name = evt.target.name
    let value

    if (evt.target.type === 'file') value = evt.target.files
    else value = evt.target.value

    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  return {
    values,
    onInputChange,
  }
}

export default useForm
