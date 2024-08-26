import './Spiner.css'

const Spiner = ({height, width, borderWidth, btColor, brColor, bbColor, blColor}) => {
  return (
    <div>
      <div className="box" style={{width: width && width, height : height && height, borderWidth: borderWidth && borderWidth}}></div>
    </div>
  )
}

export default Spiner;