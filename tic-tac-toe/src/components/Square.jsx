export const Square = ({ children, isSelectd, updateBoar, index }) => {
    const className = `square ${isSelectd ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoar(index)
    }

    return (
        <div
            className={className}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}