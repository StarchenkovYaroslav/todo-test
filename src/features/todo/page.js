import { AddTodoForm, TodoList, Layout } from './components'

/**
 * Renders page with {@link AddTodoForm} and {@Link TodoList}
 *
 * @returns {JSX.Element}
 */
const Page = () => {
  return (
    <Layout>
      <AddTodoForm />
      <TodoList />
    </Layout>
  )
}

export default Page
