import React, { useState } from 'react';
import '../assets/Header.css'; // CSSファイルをインポート
import { Link } from 'react-router-dom';

const Header = ({title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <h1>{title}</h1>
            <nav className="header-nav">
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/Vocaloid">Vocaloid Original</Link></li>
                    <li><Link to="/Soundmake">Sound Make</Link></li>
                    <li><Link to="/Otherwork">Other Works</Link></li>
                </ul>
            </nav>
            {/* <FullScreenMenu/> */}
        </header>
    );
};

export default Header;