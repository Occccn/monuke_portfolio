import React from 'react';
import Header from './components/header.jsx';
import './assets/card.css';
import OtherCard from './components/othercard';

const Card = ({ title, description,url}) => (
    <div className = "card-other-work">
      <h3 className='card-other-work-title'>{title}</h3>
      <div className="card-video-responsive">
      <iframe
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
</div>
      <p>{description}</p>
    </div>
  );
  
  const Otherwork = () => {
    const cardsData = [
      { title: "楽曲提供", description: "ひまわり / 市ノ瀬悠和　※作曲・編曲・Mixを担当",url:'https://www.youtube.com/embed/baP9jWS8R2k?si=WINbtOIs9X5U-Z3i'},
      { title: "ドラム", description: "Num-Ami-Dabutz（NUMBER GIRL） drum cover",url:"https://www.youtube.com/embed/bjuZztOTtDw?si=XCk8of2aFyxqNFXp"},
      { title: "ボーカル", description: "食べなくちゃ（衝動的の人） cover",url:"https://www.youtube.com/embed/0frST4k5HSM?si=yhfI-upWxVoXMFxE" },
      { title: "ボーカロイドカバー", description: "MONKEY（group_inou） 初音ミク cover",url:"https://www.youtube.com/embed/3P7XlNa18A8?si=uGLEEyEuqrXCwSBw"}
    ];
    return (
        <>
    <Header title = 'Others'/>
      <div className="container-other">
      {cardsData.map(card => (
        <OtherCard key={card.url} url={card.url} title={card.title} description={card.description}/>
      ))}
      </div>
      </>
    );
  };
  
  export default Otherwork;