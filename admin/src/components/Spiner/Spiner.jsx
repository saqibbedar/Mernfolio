import './Spiner.css'

const Spiner = ({height, width}) => {
  return (
    <div>
      <div className="box" style={{width: width && width, height : height && height}}></div>
    </div>
  )
}

export default Spiner;