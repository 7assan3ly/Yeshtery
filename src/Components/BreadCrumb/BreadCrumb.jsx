// Import Styles
import './BreadCrumb.scss'

const BreadCrumb = ({name, category, subCategory}) => {
  return (
    <ul className="breadcrumb">
        <li><a href="#">{category}</a></li>
        {
          subCategory && subCategory.map((category, idx) => (
            <li key={idx}>
              <a href="#">
                {category}
              </a>
            </li>
          ))
        }
        <li>{name}</li>
    </ul>
  )
}

export default BreadCrumb