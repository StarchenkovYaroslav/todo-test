import { useState } from 'react'
import { createTodo } from '../../packages/db'
import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'

const Page = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    due: dayjs().format('YYYY-MM-DD'),
    files: [],
  })

  const onInputChange = (evt) => {
    const name = evt.target.name
    let value

    if (evt.target.type === 'file') value = evt.target.files
    else value = evt.target.value

    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    createTodo({
      title: values.title,
      description: values.description,
      due: Timestamp.fromDate(dayjs(values.due, 'YYYY-MM-DD').hour(0).minute(0).toDate()),
      files: values.files,
    })
      .then(() => alert('Добавлено'))
      .catch(alert)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="title" type="text" placeholder="Заголовок" value={values.name} onChange={onInputChange} />
        <textarea name="description" placeholder="Описание" value={values.description} onChange={onInputChange} />
        <input name="due" type="date" value={values.due} onChange={onInputChange} />
        <input name="files" type="file" multiple onChange={onInputChange} />
        <button type="submit" style={{width: 300, height: 20}}>Сохранить</button>
      </form>
    </div>
  )
}

export default Page
