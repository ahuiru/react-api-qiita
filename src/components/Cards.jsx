import React from "react";
import { Card } from "./Card";
import './Cards.css'

export const Cards = ({qiitaData}) => {
  return (
    <div className="cards">
      {qiitaData.map((qiita, i) => (
        <Card qiita={qiita} i={i} key={i} />
      ))}
    </div>
  );
};
