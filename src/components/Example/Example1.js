import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Card from "../features/movies/Card";

const Example1 = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    debugger
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=d266ddfd5671ae6c7ffd466d6764cec1&language=en-US&page=${index}`)
      .then((res) => {setItems((prevItems) => [...prevItems, ...res.results])})
      .catch((err) => console.log(err));
      setIndex(index+1)
  }, []);

  console.log(items)

  const fetchMoreData = () => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=d266ddfd5671ae6c7ffd466d6764cec1&language=en-US&page=${index}`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.results]);

        res.results.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader="Loading"
    >
      <div className='container'>
        <div className='row'>
          {items &&
            items.map((item) => <Card data={item} key={item.id} />)}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Example1;