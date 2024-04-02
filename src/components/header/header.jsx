import React from 'react'
import logoNPC from '../../assets/images/logo-npc.jpeg'

const Header = () => {
    return (
        <header>
            <div className="logo">
            <img src={logoNPC} alt="Nos petits cadeaux" className="logo"/>
            </div>
        </header>
    )
};

export default Header;