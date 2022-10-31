import React from "react";
import "./Input.css"

export const Input = ({setQuery, getQiitaPosts}) => {
  return (
    <div className="inputArea">
      <input
        type="text"
        placeholder="ワード"
        className="input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="button" onClick={getQiitaPosts} value="セット" className="button" />
    </div>
  );
};
