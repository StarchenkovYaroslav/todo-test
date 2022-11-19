import { useEffect, useState } from 'react'
import { getFileDownloadUrl } from '../../../../packages/db'
import './FileLink.less'

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
