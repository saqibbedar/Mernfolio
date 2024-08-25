import './Sidebar.css'
import { icons } from '../../assets/assets'

const Sidebar = ({MenuState}) => {
  return (
    <>
        <div className='sidebar' style={{width : MenuState && "fit-content"}}>
        <button className='active' style={{paddingRight : MenuState && "30px"}}>{<icons.email/>}<span style={{display : MenuState && "none"}}>Emails</span></button>
        </div>
    </>
  )
}

export default Sidebar
