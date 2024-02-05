import './App.css'
import Accordian from './components/Accordian'
import Aprende from './components/Aprende'
import Back from './components/Back'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Ellos from './components/Ellos'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
import Jackpot from './components/Jackpot'
import Leermas from './components/Leermas'
import Masrazones from './components/Masrazones'
import Pokersection from './components/Pokersection'
import Preloader from './components/Preloader'
import Whitesection from './components/Whitesection'

function App() {

  return (
    <>
      <div className='bg-[#00141B]'>
        <Back />
        <Herosection />
        <Pokersection />
        <Whitesection />
        <Jackpot />
        <Aprende />
        <Masrazones />
        <Box1 />
        <Box2 />
        <Box3 />
        <Ellos />
        <Accordian />
        <Leermas />
        <Footer />
        <Preloader />
      </div>

    </>
  )
}

export default App
