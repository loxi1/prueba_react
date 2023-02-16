import { Square } from "./Square"
export function WinnerModal ({ winner, resetGamer}) {
  if (winner === null) return null
  const winnerText = winner ? 'Gano ' + winner : 'Empate'
  return (
    <section className="winner">
      <div className="text">
        <h2>
          { winnerText }
        </h2>
        <div className="win">
          {winner && <Square>{winner}</Square>}
        </div>
        <footer>
          <button onClick={resetGamer}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

