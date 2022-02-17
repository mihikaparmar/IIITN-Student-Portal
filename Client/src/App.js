
import './App.css'
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Login from './Components/Login';
import Navbar from './Components/navbar/Navbar'
import Signup from './Components/Signup'
import Opportunity from './Components/Opportunities/Opportunity'
import Mentor from './Components/mentor/Mentor'

import Homepage from './Components/Pages/Homepage';
import Resources from './Components/Resources';







 



function App() {
  
  return (
    <>
    
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route path='/signin' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/opportunity' element={<Opportunity/>}/>
    <Route path='/mentor' element={<Mentor/>}/>
    
    <Route path='/resources' element={<Resources/>}/>
    </Routes>
    
    
    

    </>
    
    
   
   
    
  
    
  );
}

export default App;


