import { Card } from './components/Card';
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
      {/* <Moviecard /> */}
      <div className='flex flex-row'>
        <Card url={"https://images.unsplash.com/photo-1695121767703-3dfaf0b62d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D"}
          heading={"Node.js"}
          subheading={"Emanuele DeilBono"}
          description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nobis dolorum repudiandae omnis iure autem culpa "}
        />
        <Card url={"https://plus.unsplash.com/premium_photo-1682192408471-a7cf432b3fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D"}
          heading={"React.js"}
          subheading={"Dmitri Nesteruk"}
          description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nobis dolorum repudiandae omnis iure autem culpa "}
        />
      </div>
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