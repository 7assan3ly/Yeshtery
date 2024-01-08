// Import Styles
import './BreadCrumb.scss'

const BreadCrumb = ({name, category}) => {
  return (
    <ul className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">{category}</a></li>
        <li>{name}</li>
    </ul>
  )
}

export default BreadCrumb