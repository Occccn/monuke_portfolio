import React, { useState } from 'react';
import '../assets/textdetail.css'; // CSSファイルをインポート
import { Link } from 'react-router-dom';


function TextWithBreaks(props) {
    // props.texts は文字列の配列を想定
    return (
      <div>
        {props.map((text, index) => (
          <p key={index}>{text}</p>  // 各テキスト要素を <p> タグで囲む
        ))}
      </div>
    );
  }


const FullScreenText = ({description_detail}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`showMore ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                read more...
            </div>
            {isOpen  && (
                <div className="fullscreen-text ">
                    <div className={`showMore ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>とじる</div>
                    <div className="description_detail" >
                    {TextWithBreaks(description_detail)}
                    </div>
                </div>
            )}
        </>
    );
};

export default FullScreenText;