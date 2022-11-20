import './List.less'

/**
 * Renders list of passed component with passed data wrapped in \<ul> and \<li> tags
 *
 * @param {obj} props - component props
 * @param {function} props.getItemKey - function to derive key for \<li> from item data
 * @param {React.Component} props.component - component to render inside \<li>
 * @param {object[]} props.data - array of items data
 * @param {string} props.listClassName - \<ul> class name
 * @param {string} props.itemClassName - \<li> class name
 * @returns {JSX.Element}
 */
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
