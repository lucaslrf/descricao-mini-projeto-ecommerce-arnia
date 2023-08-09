import { useState } from 'react'
import './App.css'

function App() {

  const [indicePage, setIndicePage] = useState(1)


  const handleChangePage = () => {    
    if(indicePage === 1){
      setIndicePage(2)
    } else if(indicePage === 2){
      setIndicePage(3)
    } else {
      setIndicePage(1)
    }
  }

  return (
    <>
      {indicePage === 1 &&
        <div>
          <p>PAGE 1 - ONE</p>
        </div>
      }

      {indicePage === 2 &&
        <div>
          <p>PAGE 2 - TWO</p>
        </div>
      }

      {indicePage === 3 &&
        <div>
          <p>PAGE 3 - THREE</p>
        </div>
      }

      <button onClick={() => handleChangePage()}>CHANGE PAGE</button>      
    </>
  )
}

export default App
