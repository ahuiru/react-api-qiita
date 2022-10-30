import React from "react";

export const Input = ({setQuery, getQiitaPosts}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="ワード"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="button" onClick={getQiitaPosts} value="セット" />
    </div>
  );
};
