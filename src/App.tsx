import './App.css';
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
</div>
)
}

export default App;
