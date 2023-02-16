import { useState } from "react"
export function TwitterFollowCard({usuario, children, initialIsFolling}) {
    const [isFolling, setIsFolling] = useState(initialIsFolling)
    
    let textFollow = isFolling ? 'Siguiendo' : 'Seguir'
    let classFllow = isFolling 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'
    const hundleClick = () => {
        setIsFolling(!isFolling)
    }
    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${usuario}`} alt="INfo" />
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoUserName'>{children}</strong>
                <span className='tw-followCard-text'>@{usuario}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </div>
        </header>
        <aside>
            <button className={classFllow} onClick={hundleClick}>{textFollow}</button>
        </aside>
    </article>
    )
}