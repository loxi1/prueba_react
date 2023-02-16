export const setLocalStore = (newBoard, newTurn) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const removeLocalStore = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export const getLocalStoreBoard = () => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
}

export const getLocalStoreTurn = () => {
    const turnLocalStore = window.localStorage.getItem('turn')
    return turnLocalStore ?? TURN.X
}