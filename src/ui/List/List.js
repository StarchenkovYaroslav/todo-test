import './List.less'

const List = ({
  getItemKey,
  component: Component,
  data,
  listClassName,
  itemClassName,
}) => {
  let finalListClassName = 'list'
  if (listClassName) finalListClassName += ` ${listClassName}`

  let finalItemClassName = 'list__item'
  if (itemClassName) finalItemClassName += ` ${itemClassName}`

  return (
    <ul className={finalListClassName}>
      {data.map(item => (
        <li key={getItemKey(item)} className={finalItemClassName}>
          <Component {...item} />
        </li>
      ))}
    </ul>
  )
}

export default List
