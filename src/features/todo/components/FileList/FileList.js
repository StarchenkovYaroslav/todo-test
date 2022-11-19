import { List } from '../../../../ui'
import FileLink from '../FileLink'
import './FileList.less'

const FileList = ({ files }) => {
  return (
    <List
      getItemKey={(item) => item.file.match(/^(.*?)\./)[1]}
      component={FileLink}
      data={files.map(file => ({ file }))}
      listClassName="file-list"
      itemClassName="file-item"
    />
  )
}

export default FileList
