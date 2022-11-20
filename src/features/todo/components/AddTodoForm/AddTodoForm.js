import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import { createTodo } from '../../../../packages/db'
import { useForm } from '../../../../hooks'
import './AddTodoForm.less'
import FieldContainer from '../FieldContainer'

/**
 * Renders form to add todo
 *
 * @returns {JSX.Element}
 */
const AddTodoForm = () => {
  const { values, onInputChange } = useForm({
    title: '',
    description: '',
    due: dayjs().format('YYYY-MM-DD'),
    files: [],
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()

    createTodo({
        title: values.title,
        description: values.description,
        due: Timestamp.fromDate(dayjs(values.due, 'YYYY-MM-DD').hour(0).minute(0).toDate()),
        files: values.files,
        done: false,
      })
      .then(() => alert('Добавлено'))
      .catch(() => alert('Ошибка'))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <FieldContainer>
          <input
            className='form__text-field'
            name="title"
            type="text"
            placeholder="Заголовок"
            value={values.name}
            onChange={onInputChange}
          />
        </FieldContainer>
        <FieldContainer>
          <textarea
            className='form__text-area'
            name="description"
            placeholder="Описание"
            value={values.description}
            onChange={onInputChange}
          />
        </FieldContainer>
        <FieldContainer>
          <input
            className='form__field'
            name="due"
            type="date"
            value={values.due}
            onChange={onInputChange}
          />
        </FieldContainer>
        <FieldContainer>
          <input
            className='form__field'
            name="files"
            type="file"
            multiple
            onChange={onInputChange}
          />
        </FieldContainer>
      </fieldset>
      <button className="form__button" type="submit">Сохранить</button>
    </form>
  )
}

export default AddTodoForm
