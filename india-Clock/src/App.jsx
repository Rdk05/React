import './App.css'

function App() {
  let time = new Date();
  return (
    <>
    <div className='background-color: bg-gray-500 m-4 p-6'>
    <h1 className="text-3xl font-bold ">India Clock</h1>
    <p>This is the clock that shows the time in India at all times</p>
    <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
    </>
  )
}

export default App
