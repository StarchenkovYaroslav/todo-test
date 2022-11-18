import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import { createTodo } from '../../../packages/db'
import { Form } from '../../../ui'
import { useForm } from '../../../hooks'

const AddTodoForm = () => {
  const { values, onInputChange } = useForm({
    title: '',
    description: '',
    due: dayjs().format('YYYY-MM-DD'),
    files: [],
  })

  const onSubmit = async () => {
    try {
      await createTodo({
        title: values.title,
        description: values.description,
        due: Timestamp.fromDate(dayjs(values.due, 'YYYY-MM-DD').hour(0).minute(0).toDate()),
        files: values.files,
      })

      alert('Добавлено')
    } catch (err) {
      alert('Ошибка')
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <input name="title" type="text" placeholder="Заголовок" value={values.name} onChange={onInputChange} />
      <textarea name="description" placeholder="Описание" value={values.description} onChange={onInputChange} />
      <input name="due" type="date" value={values.due} onChange={onInputChange} />
      <input name="files" type="file" multiple onChange={onInputChange} />
      <button type="submit" style={{width: 300, height: 20}}>Сохранить</button>
    </Form>
  )
}

export default AddTodoForm
