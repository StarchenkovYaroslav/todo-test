import { useCollection } from 'react-firebase-hooks/firestore'
import { todoCollection } from '../../../packages/db'
import TodoCard from './TodoCard'

const TodoList = () => {
  const [todos, loading, error] = useCollection(todoCollection)

  const title = error ? error.message : 'Todo list'

  if (loading) return <div>Загрузка...</div>

  return (
    <>
      <h1>{title}</h1>
      {todos && todos.docs.map(todo => (
        <TodoCard key={todo.id} {...todo.data()} />
      ))}
    </>
  )
}

export default TodoList
