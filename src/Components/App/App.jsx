import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Main, About, Users, Home} from "../../pages"
import "../../index.css"
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/users">
              <Route path="/users" element={<Users/>}/>
              <Route path="/users/info" element={<>User Info</>}/>
            </Route>
            <Route path="/home" element={<Home/>}/> 
            <Route path="*" element={<div>404 not found</div>}/>
        </Routes>
    </Router>
  )
}

export default App