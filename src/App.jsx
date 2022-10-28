import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [nowPageNum, setNowPageNum] = useState(1);
  const [nextPageNum, setNextPageNum] = useState(2);
  const [prevPageNum, setPrevPageNum] = useState(0);
  const [qiitaData, setQiitaData] = useState([]);

  const getQiitaPosts = () => {
    setLoading(true);
    axios
      .get("https://qiita.com/api/v2/items", {
        params: {
          page: nowPageNum,
          // page: 1,
          per_page: "20",
          query: query,
        },
      })
      .then((res) => {
        console.log(res);
        const fetchData = async () => {
          let qiitaPostData = await Promise.all(
            res.data.map((article) => {
              return article;
            })
          );
          setQiitaData(qiitaPostData);
        };
        fetchData();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(qiitaData);

  const handlePrevButton = () => {
    setNowPageNum((prev) => prev - 1);

    setPrevPageNum(nowPageNum - 1);
    setNextPageNum(nowPageNum + 1);
    getQiitaPosts();
    if (prevPageNum === 0) {
      return;
    }
  };

  const handleNextButton = () => {
    setNowPageNum((prev) => prev + 1);

    setPrevPageNum(nowPageNum - 1);
    setNextPageNum(nowPageNum + 1);
    getQiitaPosts();
  };

  // console.log(nowPageNum, "now");
  // console.log(prevPageNum, "prev");
  // console.log(nextPageNum, "next");

  return (
    <div className="App">
      <h1>Hello! Qiita API</h1>
      <input
        type="text"
        placeholder="ワード"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="button" onClick={getQiitaPosts} value="セット" />
      {loading ? (
        <p>ロード中・・・</p>
      ) : (
        <>
          {qiitaData.map((qiita, i) => (
            <div key={i}>
              <a href={qiita.url}>タイトル：{qiita.title}</a>
            </div>
          ))}
          <div>
            <button onClick={handlePrevButton}>{prevPageNum}</button>
            <p>{nowPageNum}</p>
            <button onClick={handleNextButton}>{nextPageNum}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
