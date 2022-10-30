import React from "react";
import { Card } from "./Card";

export const Cards = ({qiitaData}) => {
  return (
    <div>
      {qiitaData.map((qiita, i) => (
        <Card qiita={qiita} i={i} />
      ))}
    </div>
  );
};
