import React, { useState, useEffect } from "react";
import "../assets/CenterImage.css"; // CSSファイルをインポート

const CenterImage = () => {
  const [value, setValue] = useState("monuke.png"); // 変数Aの初期値
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
    <div className="centered-circle">
      <img src={value} alt="Circular Icon" />
    </div>
  );
};

export default CenterImage;
