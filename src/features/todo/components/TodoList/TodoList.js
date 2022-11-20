import { useCollection } from 'react-firebase-hooks/firestore'
import { todoCollection } from '../../../../packages/db'
import TodoCard from '../TodoCard/TodoCard'
import { List } from '../../../../ui'
import './TodoList.less'


/**
 * Renders list of {@link TodoCard}
 *
 * @returns {JSX.Element}
 */
const TodoList = () => {
  const [todos, loading, error] = useCollection(todoCollection)

  const title = error ? error.message : 'Todo list'

  if (loading) return <div>Загрузка...</div>

  return (
    <>
      <h1>{title}</h1>
      <List
        getItemKey={(item) => item.id}
        component={TodoCard}
        data={todos.docs.map(doc => ({ ...doc.data(), id: doc.id }))}
        listClassName="todo-list"
        itemClassName="todo-item"
      />
    </>
  )
}

export default TodoList
