import { useEffect, useState } from 'react'
import { getFileDownloadUrl } from '../../../../packages/db'
import './FileLink.less'

/**
 * Renders link to file
 *
 * @param {obj} props - component props
 * @param {string} props.file - file server path
 * @returns {JSX.Element}
 */
const FileLink = ({ file }) => {
  const [href, setHref] = useState('')

  const name = file.replace(/^(.*?)\./, '')

  useEffect(() => {
    getFileDownloadUrl(file)
      .then(setHref)
      .catch(() => alert('Ошибка'))
  }, [file])

  return <a className="document-link" target="_blank" rel="noreferrer" href={href}>{name}</a>
}

export default FileLink
