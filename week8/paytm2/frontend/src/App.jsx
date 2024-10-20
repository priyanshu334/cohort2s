import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { SignUp } from './components/Singup';
import { SignIn } from './components/SignIn';
import { Dashboard } from './components/Dashboard';
import { Send } from './components/Send';
function App(){


  return (
    <div>
      <BrowserRouter>
    
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/send' element={<Send/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;