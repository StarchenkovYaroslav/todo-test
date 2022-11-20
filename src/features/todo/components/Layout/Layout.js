import './Layout.less'

/**
 * Renders content wrapped in layout
 *
 * @param {obj} props - component props
 * @param {React.ReactNode} props.children - content to render inside layout
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => {
  return (
    <main className="layout">
      {children}
    </main>
  )
}

export default Layout
