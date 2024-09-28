import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false) // default value = false
  
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  return (
    <>
      <Main/>
      {showModal && ( // conditional statement, if showModal is true, it opens sideBar
        <SideBar handleToggleModal={handleToggleModal}/>
      )}
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
