/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Body() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
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

  const handleClick = e => {
    const remove = e.target.tagName === "BUTTON" ? false : true;
    const value =
      e.target.tagName === "BUTTON"
        ? e.target.textContent
        : e.target.previousElementSibling.textContent;

    let updatedFilter;
    if (remove) {
      updatedFilter = filter.filter(item => item !== value);
    } else {
      if (!filter.includes(value)) {
        updatedFilter = [...filter, value];
      } else return;
    }
    setFilter(updatedFilter);

    if (updatedFilter.length !== 0) {
      const updatedData = fullData.current.filter(item =>
        updatedFilter.every(elem =>
          [item.role, item.level, ...item.languages, ...item.tools].includes(
            elem,
          ),
        ),
      );
      setData(updatedData);
    } else {
      setData(fullData.current);
    }
  };

  const handleClear = () => {
    setFilter([]);
    setData(fullData.current);
  };

  return (
    <main className="body">
      <Filter
        filter={filter}
        handleClick={handleClick}
        handleClear={handleClear}
      />
      {data.length !== 0 ? (
        data.map(item => (
          <Card item={item} key={item.id} handleClick={handleClick} />
        ))
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

function Filter({ filter, handleClick, handleClear }) {
  const handleKeyDown = e => {
    if (e.key === "Enter") e.target.click();
  };

  return filter.length !== 0 ? (
    <div className="filter">
      <div>
        {filter.map(item => (
          <div className="filter__box" key={item}>
            <p>{item}</p>
            <i
              className="fa-solid fa-xmark"
              tabIndex="0"
              role="button"
              aria-label={`Remove ${item}`}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
            ></i>
          </div>
        ))}
      </div>
      <button className="filter__clear" onClick={handleClear}>
        Clear{" "}
        <span style={{ display: "none" }} aria-hidden="false">
          all
        </span>
      </button>
    </div>
  ) : (
    <></>
  );
}

function Card({ item, handleClick }) {
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
          <button className="btn" onClick={handleClick}>
            {item.role}
          </button>
          <button className="btn" onClick={handleClick}>
            {item.level}
          </button>
          {item.languages.length !== 0 ? (
            item.languages.map(item => (
              <button className="btn" key={item} onClick={handleClick}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {item.tools.length !== 0 ? (
            item.tools.map(item => (
              <button className="btn" key={item} onClick={handleClick}>
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
