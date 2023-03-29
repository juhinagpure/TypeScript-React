import './App.css';
// import{ Greet} from './components/Greet'
// import { Heading } from './components/heading';
// import { Oscar } from './components/Oscar';
// import {Status} from './components/Status';
import {Button} from './components/Button';


function App() {
return (
<div className='App'>
  <button handleClick={()=>{
 console.log('Button Clicked')
}}
/>
</div>
)
}

export default App;
