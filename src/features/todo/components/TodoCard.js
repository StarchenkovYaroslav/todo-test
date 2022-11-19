import dayjs from 'dayjs'
import FileLink from './FileLink'

const TodoCard = ({ title, description, due, files }) => {
  const dueDate = dayjs(due.toDate())
  const expired = dueDate.isBefore(dayjs())

  return (
    <div style={{ border: '1px solid black'}}>
      {expired && <div>Просрочено</div>}
      <div>{title}</div>
      <div>{description}</div>
      <div>{dueDate.format('DD.MM.YYYY')}</div>
      {files.map(file => <FileLink file={file} />)}
    </div>
  )
}

export default TodoCard
