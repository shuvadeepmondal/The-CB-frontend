import React, { useState, useEffect } from 'react';

const TextS: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts: string[] = ["The CodeBird"];
  const [currentText, setCurrentText] = useState<string>('');
  const [endValue, setEndValue] = useState<number>(2);
  const [isForward, setIsForward] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 2);
      } else {
        setEndValue((prev) => prev - 2);
      }

      // Handle the end of the text
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setEndValue(1);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextS;
