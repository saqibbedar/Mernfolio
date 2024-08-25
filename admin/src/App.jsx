import { useState } from 'react'
import { Navbar, ContentWrapper } from './components/components'

const App = () => {

  const [isSideBarHidden, setIsSideBarHidden] = useState(false);

  return (
    <>
      <Navbar isSideBarHidden={isSideBarHidden}  setIsSideBarHidden={setIsSideBarHidden}/>
      <ContentWrapper isSideBarHidden={isSideBarHidden}/>
    </>
  )
}

export default App
