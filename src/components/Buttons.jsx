import React from "react";

import { useEffect } from "react";

export const Buttons = ({
  query,
  prevPageNum,
  setNowPageNum,
  setPrevPageNum,
  setNextPageNum,
}) => {


  const handlePrevButton = () => {
    const prev = (prev) => prev - 1;
    setNowPageNum(prev);
    setPrevPageNum(prev);
    setNextPageNum(prev);
  };

  const handleNextButton = () => {
    const prev = (prev) => prev + 1;
    setNowPageNum(prev);
    setPrevPageNum(prev);
    setNextPageNum(prev);
  };

  return (
    <div>
      {prevPageNum !== 0 ? (
        <button onClick={handlePrevButton}>前へ</button>
      ) : null}
      <button onClick={handleNextButton}>次へ</button>
    </div>
  );
};
