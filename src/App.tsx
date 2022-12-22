import './App.css'
import { InputOne, Navbar, NavbarSearch, SearchBar } from './components'

function App() {

  return (
    <div className="App">
      <Navbar />
      <NavbarSearch />
      <div className="Sub_App">
        <h2>INPUTS</h2>
        <InputOne />
        <h2>SearchBar</h2>
        <SearchBar />
      </div>
    </div>
  )
}

export default App
