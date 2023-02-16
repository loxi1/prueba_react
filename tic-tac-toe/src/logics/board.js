import { WINNER_COMBOS } from "../components/constants"
export const checkWinner = (boardToCheck) => {
    //revisamos toda las combinaciones ganadoras
    //para ve si es X o O
    for (let i = 0; i < WINNER_COMBOS.length; i++) {
        let [a, b, c] = WINNER_COMBOS[i]
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    return null
}

export const chekEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}