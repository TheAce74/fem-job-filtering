/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Body() {
  const [data, setData] = useState([]);
  const fullData = useRef([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const response = await axios.get("../../data.json");
      const fetchedData = response.data;
      if (!ignore) {
        setData(fetchedData);
        fullData.current = fetchedData;
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="body">
      <Filter />
      {data.length !== 0 ? (
        data.map(item => <Card item={item} key={item.id} />)
      ) : (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </main>
  );
}

function Filter() {
  const handleKeyDown = e => {
    if (e.key === "Enter") e.target.click();
  };

  return (
    <div className="filter">
      <div>
        <div className="filter__box">
          <p>Frontend</p>
          <i
            className="fa-solid fa-xmark"
            tabIndex="0"
            role="button"
            aria-label="Remove Frontend"
            onKeyDown={handleKeyDown}
          ></i>
        </div>
      </div>
      <button className="filter__clear">Clear</button>
    </div>
  );
}

function Card({ item }) {
  return (
    <>
      <div className="card">
        <div className="card--left">
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="card__img"
          />
          <div className="card__details">
            <div className="card__titles">
              <p className="card__name">{item.company}</p>
              {item.new ? <p className="new">NEW!</p> : <></>}
              {item.featured ? <p className="featured">FEATURED</p> : <></>}
            </div>
            <h1 className="card__role">{item.position}</h1>
            <div className="card__extra">
              <p>{item.postedAt}</p>
              <div className="dot"></div>
              <p>{item.contract}</p>
              <div className="dot"></div>
              <p>{item.location}</p>
            </div>
          </div>
        </div>
        <div className="card--right">
          <button className="btn">{item.role}</button>
          <button className="btn">{item.level}</button>
          {item.languages.length !== 0 ? (
            item.languages.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {item.tools.length !== 0 ? (
            item.tools.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Body;
