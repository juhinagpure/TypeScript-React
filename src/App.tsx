import './App.css'
import { Button } from './components/Button'

function App (){
  return (
    <div className='App'>
<Button handleClick={(event ,id)=>{
  console.log('Button clicked',event ,id)
}}
/>
    </div>
  )
}