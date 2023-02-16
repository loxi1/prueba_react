import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURN } from "./components/constants"
import { checkWinner, chekEndGame } from "./logics/board"
import { WinnerModal } from "./components/WinnerModal"
import { setLocalStore, removeLocalStore, getLocalStoreBoard, getLocalStoreTurn } from "./localstore/infoLocalStore"

function App() {
  const resetGamer = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)

    removeLocalStore()
  }

  const updateBoard = (index) => {
    //no actualizamos esta posicion
    //si existe elemento
    if(board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = (turn == TURN.O) ? TURN.X : TURN.O
    setTurn(newTurn)
    //gurardar la partida
    setLocalStore(newBoard, newTurn)
    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(chekEndGame(newBoard)) {
      setWinner(false) //empate
    }    
  }

  const [board, setBoard] = useState(() => {
    return getLocalStoreBoard()
    }
  )

  const [turn, setTurn] = useState(()=> {
    return getLocalStoreTurn()
  })

  const [winner, setWinner] = useState(null)

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGamer}>Resetear el juego</button>
      <section className="game">
        {
          board.map((square,index) => {
            return(
              <Square 
                key={index} 
                index={index}
                updateBoar={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelectd={turn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelectd={turn === TURN.O}>
          {TURN.O}
        </Square>
      </section>
      <WinnerModal resetGamer={resetGamer} winner={winner} />
    </main>
    

  )
}

export default App
