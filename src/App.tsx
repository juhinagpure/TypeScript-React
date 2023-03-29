import './App.css'

import { Input } from './components/input'

function App (){
  return(
    <div className='App'>
<Input value='' handleChange={(event)=> console.log(event)}/>
    </div>
  )
}




export default App