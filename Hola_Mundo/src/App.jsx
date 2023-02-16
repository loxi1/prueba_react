import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const usuarioGith = [
    {usuario: "loxi1", nombre:"Anibal Cayetano", isFolling: true},
    {usuario: "midudev", nombre:"Miguel Angel Duran", isFolling: false},
    {usuario: "developermartin", nombre:"Martin", isFolling: false}
]

export function App() {
    const [nom_, setNomb] = useState('nodejs')
    const cambiar = () => {
        let nomb = (nom_ === 'nodejs') ? 'prisma' : 'nodejs'
        setNomb(nomb)
    }

    const [estado_, setEstado] = useState(true)
    return (
        <section className='App'>
            {
                usuarioGith.map(({usuario, nombre, isFolling}) => 
                    <TwitterFollowCard usuario={usuario} initialIsFolling={isFolling} key={usuario}>
                        {nombre}
                    </TwitterFollowCard>                    
                )
                
            }
            <TwitterFollowCard usuario={nom_} initialIsFolling={true} key={'emperzar'}>
                {nom_}
            </TwitterFollowCard>
            <button onClick={cambiar}>Cambiar</button><br></br>
            <button onClick={()=>{setEstado(!estado_)}}>Cambiar Estado</button>
        </section>
    )
}