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
            {isOpen  && (
                <div className="fullscreen-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Vocaloid">vocaloid original</Link></li>
                        {/* <li><Link to="/Soundmake">sound make</Link></li> */}
                        <li><Link to="/Otherwork">other works</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default FullScreenMenu;