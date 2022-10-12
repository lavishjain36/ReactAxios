import PersonAdd from "./components/PersonAdd";
import PersonList from "./components/PersonList";
import PersonRemove from "./components/PersonRemove";



function App(){
  return(
    <div className="App">
      <PersonAdd/>
      <PersonList/>
      <PersonRemove/>
    </div>
  )
}


export default App;