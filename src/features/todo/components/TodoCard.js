import dayjs from 'dayjs'
import FileLink from './FileLink'
import { updateDoneById } from '../../../packages/db'

const TodoCard = ({ id, title, description, due, files, done }) => {
  const dueDate = dayjs(due.toDate())
  const expired = dueDate.isBefore(dayjs())

  const changeDone = async (evt) => {
    try{
      await updateDoneById(id, evt.target.checked)

      alert('Обновлено')
    } catch (err) {
      alert('Ошибка')
    }
  }

  return (
    <div style={{ border: '1px solid black'}}>
      <input type="checkbox" checked={done} onChange={changeDone} />
      {expired && <div>Просрочено</div>}
      <div>{title}</div>
      <div>{description}</div>
      <div>{dueDate.format('DD.MM.YYYY')}</div>
      {files.map(file => <FileLink file={file} />)}
    </div>
  )
}

export default TodoCard
