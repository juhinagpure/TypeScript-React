import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from "./components/context/Box";

// function App() {
//   const personName = {
//     first: "Steven",
//     last: "Strange",
//   };

//   const nameList = [
//     {
//       first: "John",
//       last: "Wick",
//     },
//     {
//       first: "Bruce",
//       last: "Wayne",
//     },
//     {
//       first: "Tony",
//       last: "Stark",
//     },
//     {
//       first: "Peter",
//       last: "Parker",
//     },
//     {
//       first: "Clark",
//       last: "Kent",
//     },
//   ];

//   return (
//     <div className="App">
//       {/* <Greet name="juhi" messageCount={10} isLoggedIn={true} /> */}
//       {/* <Person name={personName} /> */}
//       {/* <PersonList names={nameList} /> */}
//       <Status status="success" />
//       <Heading>Placeholder text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to Leonardo Dicaprio</Heading>
//       </Oscar>
//       <Greet name="Juhi" isLoggedIn={true} />
//     </div>
//   );
// }

function App() {
  return (<div className="App">
<ThemeContextProvider>
  <Box />
</ThemeContextProvider>
  </div>
  )
}

export default App;