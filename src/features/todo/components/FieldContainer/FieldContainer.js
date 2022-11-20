import './FieldContainer.less'

/**
 * Renders form field wraps in \<div> with bottom margin
 *
 * @param {obj} props - component props
 * @param {React.ReactElement} props.children - form field to render inside \<div>
 * @returns {JSX.Element}
 */
const FieldContainer = ({ children }) => {
  return (
    <div className="field-container">
      {children}
    </div>
  )
}

export default FieldContainer
