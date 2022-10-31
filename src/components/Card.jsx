import React from "react";
import "./Card.css";

export const Card = ({ qiita, i }) => {
  // console.log(qiita)

  return (
    <div key={i} className="card">
      <a href={qiita.url}>タイトル：{qiita.title}</a>
      {qiita.tags.map((tag, i) => (
        <div key={i}>
          <p>{tag.name}</p>
        </div>
      ))}
      <div className="user-info">
        <img src={qiita.user.profile_image_url} alt="" />
        <a href={`https://qiita.com/${qiita.user.id}`}>@{qiita.user.id}</a>
        <p>{qiita.user.name}</p>
      </div>
    </div>
  );
};
