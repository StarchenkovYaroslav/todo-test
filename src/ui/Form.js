const Form = ({ onSubmit, children }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form
