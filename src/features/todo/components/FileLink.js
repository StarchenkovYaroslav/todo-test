import { useEffect, useState } from 'react'
import { getFileDownloadUrl } from '../../../packages/db'

const FileLink = ({ file }) => {
  const [href, setHref] = useState('')

  const name = file.replace(/^(.*?)\./, '')

  useEffect(() => {
    getFileDownloadUrl(file)
      .then(setHref)
      .catch(() => alert('Ошибка'))
  }, [])

  return <a target="_blank" href={href}>{name}</a>
}

export default FileLink
