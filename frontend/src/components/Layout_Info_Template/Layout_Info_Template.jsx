import './Layout_Info_Template.css'

const Layout_Info_Template = ({layoutHeading, layoutDescription}) => {
  return (
    <div className="layout-info">
        <div className="layout-heading">
          {layoutHeading}
        </div>
        <div className="layout-description">
          {layoutDescription}
        </div>
      </div>
  )
}

export default Layout_Info_Template
