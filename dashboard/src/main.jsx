import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowerRouter , Route , Routes} from "react-router-dom" ;
import Home from "./components/Home";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowerRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowerRouter>
  </StrictMode>,
)
