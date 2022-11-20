import { List } from '../../../../ui'
import FileLink from '../FileLink'
import './FileList.less'

/**
 * Renders list of {@link FileLink}
 *
 * @param {obj} props - component props
 * @param {string[]} props.files - array of files server paths
 * @returns {JSX.Element}
 */
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
