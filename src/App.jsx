import Moviecard from './components/Moviecard';

const App = () => {
  const greet = (personName) => {
    alert(`hello ${personName}`);
  }

  const msg = (message) => {
    alert(`${message}`)
  }
  return (
    <>
      <Moviecard />
      <div className='p-5'>


        <button
          onClick={() => greet("Shyam")}
          className='bg-slate-500 text-white px-4 py-2 rounded-md hover:ring-2 ring-purple-500 '>Call Func</button>

        <p onCopy={() => { msg("DO NOT COPY") }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsum at aliquid nobis, eos odit! Qui ex nam quasi aspernatur nihil ea aliquid distinctio itaque sed exercitationem a, aliquam aut.
        </p>


      </div>
    </>
  )
}

export default App