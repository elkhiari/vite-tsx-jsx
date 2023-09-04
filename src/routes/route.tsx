import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'

function Routing() {
    
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Auth isLogin={true} />} />
            <Route path="/register" element={<Auth isLogin={false} />} />
        </Routes>
    </div>
  )
}

export default Routing