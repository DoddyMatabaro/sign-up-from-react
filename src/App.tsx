
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

function App() {

  return (
    <div className='justify-evenly font-pop p-0 m-0 
        bg-[url("./assets/bck.jpg")] bg-cover w-screen h-screen
        '>
          <section className='flex flex-row w-full h-full bg-black bg-opacity-50' >
            <LeftSide/>
            <RightSide/>
          </section>
    </div>
  )
}

export default App
