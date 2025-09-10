import Header from "./components/header.jsx";
import OtherCard from "./components/othercard";
import { otherworkCards } from "./data/otherwork-content";

const Otherwork = () => {
  return (
    <>
      <Header title="Others" />
      <div className="flex flex-col items-center mt-25 mx-auto w-full max-w-4xl px-4">
        {otherworkCards.map((card) => (
          <OtherCard
            key={card.url}
            url={card.url}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default Otherwork;
