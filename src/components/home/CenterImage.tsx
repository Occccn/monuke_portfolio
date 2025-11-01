import { useState, useEffect } from "react";

type ImageName = "monuke.png" | "monuke1.jpg" | "monuke3.jpg";

const CenterImage = () => {
  const [value, setValue] = useState<ImageName>("monuke.png"); // 変数Aの初期値

  useEffect(() => {
    const generateRandomNumber = () => {
      const randomNumber = Math.random(); // 0 から 1 の乱数を生成
      console.log("Generated Random Number: ", randomNumber); // 生成された乱数をコンソールに出力

      // 乱数に基づいて変数Aの値を更新
      if (randomNumber < 0.33) {
        setValue("monuke.png");
      } else if (randomNumber < 0.66) {
        setValue("monuke1.jpg");
      } else {
        setValue("monuke3.jpg");
      }
    };
    generateRandomNumber(); // コンポーネントがマウントされたときに関数を実行
  }, []); // 空の依存配列を渡して、エフェクトがマウント時にのみ実行されるようにする

  return (
    <div className="flex justify-center items-center pt-30 px-4">
      <img
        src={value}
        alt="Circular Icon"
        className="rounded-full w-48 h-48 sm:w-62 sm:h-62 object-cover shadow-md max-w-full opacity-0"
        style={{
          animation: "fadeInScale 1s ease-out forwards",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInScale {
            from {
              transform: scale(0.3);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default CenterImage;
