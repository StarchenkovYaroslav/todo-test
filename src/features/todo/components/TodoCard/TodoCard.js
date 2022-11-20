import dayjs from 'dayjs'
import { removeTodoById, updateDoneById } from '../../../../packages/db'
import FileList from '../FileList'
import './TodoCard.less'

/**
 * Renders card with todo info
 *
 * @param {obj} props - component props
 * @param {string} props.id - todo id
 * @param {string} props.title - todo title
 * @param {string} props.description - todo description
 * @param {string} props.due - date for todo to expire
 * @param {string[]} props.files - array of files server paths
 * @param {boolean} props.done - todo status of being done or not
 * @returns {JSX.Element}
 */
const TodoCard = ({ id, title, description, due, files, done }) => {
  const dueDate = dayjs(due.toDate())
  const expired = dueDate.isBefore(dayjs()) && !done

  let cardClassName = 'card'
  if (expired) cardClassName += ' card_expired'

  let dueClassName = 'card__due'
  if (expired) dueClassName += ' card__due_expired'

  const changeDone = async (evt) => {
    try{
      await updateDoneById(id, evt.target.checked)
    } catch (err) {
      alert('Ошибка')
    }
  }

  const remove = async () => {
    try {
      await removeTodoById(id)
    } catch (err) {
      alert('Ошибка')
    }
  }

  return (
    <div className={cardClassName}>
      <div className="card__header">
        <button className="card__delete-button" type="button" onClick={remove} />
        <div className={dueClassName}>{dueDate.format('DD.MM.YYYY')}</div>
        <input className="card__done" type="checkbox" checked={done} onChange={changeDone} />
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <FileList files={files} />
    </div>
  )
}

export default TodoCard
