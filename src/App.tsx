import './App.css';
import{ Greet} from './components/Greet'
import { Heading } from './components/heading';
import { Oscar } from './components/Oscar';
import {Status} from './components/Status'


function App() {
//   const personName = {
//     first :'Bruce',
//     last: 'Wayne'
//   }

//   const nameList = [
//     {
//       first: 'Bruce',
//       last : 'Wayne',
//     },
//     {
//       first: 'Clark',
//       last: 'kent',
//     },
//     {
//       first: 'Princess',
//       last: 'Diana',
//     },
// ]

//   return (
//     <div className="App">
//       <Greet name = 'vishwas' messageCount={20} isLoggedIn={false}/>
//       <Person name={personName} />
//       <PersonList names ={nameList}/>
//     </div>
//   )
return(
 <div className='App'>
<Status status='loading'/>
<Heading>Placeholder text</Heading>
<Oscar>
  <Heading>Oscar goes to Leonardo Dicpario!</Heading>
</Oscar>
<Greet name = 'vishwas' isLoggedIn={false}/>

</div>
)
}

export default App;
