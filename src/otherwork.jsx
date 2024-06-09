import React from 'react';
import Header from './components/header.jsx';
import './assets/otherwork.css';


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
      { title: "楽曲提供", description: "Description for Card 1",url:'https://www.youtube.com/embed/baP9jWS8R2k?si=WINbtOIs9X5U-Z3i'},
      { title: "ドラム", description: "Description for Card 2",url:"https://www.youtube.com/embed/bjuZztOTtDw?si=XCk8of2aFyxqNFXp"},
      { title: "ボーカル", description: "Description for Card 3",url:"https://www.youtube.com/embed/0frST4k5HSM?si=yhfI-upWxVoXMFxE" },
      { title: "ボーカロイドカバー", description: "Description for Card 4",url:"https://www.youtube.com/embed/3P7XlNa18A8?si=uGLEEyEuqrXCwSBw"}
    ];
    return (
        <>
    <Header title = 'monuke'/>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} url = {card.url} />
        ))}
      </div>
      </>
    );
  };
  
  export default Otherwork;