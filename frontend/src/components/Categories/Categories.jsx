import { useContext, useState } from 'react';
import './Categories.css'
import { CategoryContext } from '../../Context/CategoryContext';

const Categories = ({Buttons}) => { 

    // const [category, setCategory] = useState("Education");

    const {category, setCategory} = useContext(CategoryContext);


  return (
    <div className='categories-box'>
        {
            Buttons.map((button, index)=>(
                <button  key={index} onClick={()=>setCategory(button)} className= {category === button ? "category-btn active-category" : "category-btn"} >{button}</button>
            ))
        }
    </div>
  )
}

export default Categories
