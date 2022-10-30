import React from "react";

export const Card = ({qiita, i}) => {
  return (
    <div>
      <div key={i}>
        <a href={qiita.url}>タイトル：{qiita.title}</a>
      </div>
    </div>
  );
};
