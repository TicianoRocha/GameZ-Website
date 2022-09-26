import './App.css'
import gamezLogo from './assets/gamezlogo.png'

function App() {
  return(
    <div className="flex">
      <div className="bg-[#292929] flex items-start w-screen h-24"> </div> 
      <img className="scale-100 py-1 px-2 h-24" src={gamezLogo} alt="GameZ Logo" />
      <div className="bg-white m-8 w-40 h-8"> </div>
      <div className="bg-[#AC352A] w-screen h-6 m-24"> </div>
      <div>
        <p>Hello World!</p>
      </div>
    </div>
  )
}

export default App
