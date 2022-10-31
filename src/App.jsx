import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import { Cards } from "./components/Cards";
import { Input } from "./components/Input";
import { useRef } from "react";

const API_KEY = process.env.REACT_APP_QIITA_API_TOKEN;
const key = {
  headers: {
    // 'Accept': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [nowPageNum, setNowPageNum] = useState(1);
  const [nextPageNum, setNextPageNum] = useState(2);
  const [prevPageNum, setPrevPageNum] = useState(0);
  const [qiitaData, setQiitaData] = useState([]);
  const ref = useRef(true);

  const getQiitaPosts = () => {
    setLoading(true);
    axios
      .get(
        "https://qiita.com/api/v2/items",
        {
          params: {
            page: nowPageNum,
            // page: 1,
            per_page: "20",
            token: API_KEY,
            query: query,
          },
          // withCredentials: true,
        },
        key
      )
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
        // setQuery()
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(nowPageNum);
  };
  // console.log(qiitaData);
  // console.log(API_KEY)

  useEffect(() => {
    getQiitaPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPageNum, prevPageNum, nextPageNum]);

  return (
    <div className="App">
      <h1>Hello! Qiita API</h1>
      <Input setQuery={setQuery} getQiitaPosts={getQiitaPosts} />
      {loading ? (
        <p>ロード中・・・</p>
      ) : (
        <>
          <Cards qiitaData={qiitaData} />
          <Buttons
            query={query}
            setNowPageNum={setNowPageNum}
            setPrevPageNum={setPrevPageNum}
            setNextPageNum={setNextPageNum}
            prevPageNum={prevPageNum}
            getQiitaPosts={getQiitaPosts}
          />
        </>
      )}
    </div>
  );
}

export default App;
