import { Link } from "react-router-dom"
import "../Grid/Grid.css"

const GridItem = ({link, title, img}) => {
  return (
    <Link to={link} className='grid-item'>
      <p>• {title}</p>
        <div className="grid-item-img-container">
          <img
            src={img}
          />
        </div>
    </Link>
  )
}

export default GridItem
