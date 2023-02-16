import { useState, useEffect } from 'react'
const Rolback = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0 })
  useEffect(() => {    
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('valores-->(x,y)', {x: clientX,y: clientY })
      setPosition({ x:clientX, y: clientY})
    }

    if(enable) {
      window.addEventListener('pointermove', handleMove)
    }

    //limpia 
    //cuando el componente se desmonta
    //cuando cambian las dependencias, antes de ejecutar el efecto de  nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <>
      <main>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
        <button onClick={() => setEnable(!enable)}>
          {enable ? 'Activado' : 'Desactivado'} seuguir puntero
        </button>
      </main>
    </>
  )
}

function App() { 

  return (
    <Rolback/>
  )
}

export default App
