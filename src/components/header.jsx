import React, { useState } from 'react';
import '../assets/Header.css'; // CSSファイルをインポート
import FullScreenMenu from './hamburger.jsx';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <h1>monuke</h1>
            <FullScreenMenu/>
        </header>
    );
};

export default Header;