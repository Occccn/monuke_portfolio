import React, { useState } from 'react';
import '../assets/hamburger.css'; // CSSファイルをインポート
import { Link } from 'react-router-dom';

const FullScreenMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {isOpen && (
                <div className="fullscreen-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tmp">biography</Link></li>
                        <li><Link to="/tmp">write song</Link></li>
                        <li><Link to="/tmp">drum performance</Link></li>
                        <li><Link to="/tmp">sound make</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default FullScreenMenu;