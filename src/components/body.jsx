const test = {
  id: 2,
  company: "Manage",
  logo: "./images/manage.svg",
  new: true,
  featured: true,
  position: "Fullstack Developer",
  role: "Fullstack",
  level: "Midweight",
  postedAt: "1d ago",
  contract: "Part Time",
  location: "Remote",
  languages: ["Python"],
  tools: ["React"],
};

function Body() {
  return (
    <main className="body">
      <Filter />
      <Card />
    </main>
  );
}

function Filter() {
  return (
    <div className="filter">
      <div>
        <div className="filter__box">
          <p>Frontend</p>
          <i className="fa-solid fa-xmark" tabIndex="0"></i>
        </div>
        <div className="filter__box">
          <p>Frontend</p>
          <i className="fa-solid fa-xmark" tabIndex="0"></i>
        </div>
        <div className="filter__box">
          <p>Frontend</p>
          <i className="fa-solid fa-xmark" tabIndex="0"></i>
        </div>
      </div>
        <button className="filter__clear">Clear</button>
    </div>
  );
}

function Card() {
  return (
    <>
      <div className="card">
        <div className="card--left">
          <img
            src={test.logo}
            alt={`${test.company} logo`}
            className="card__img"
          />
          <div className="card__details">
            <div className="card__titles">
              <p className="card__name">{test.company}</p>
              {test.new ? <p className="new">NEW!</p> : <></>}
              {test.featured ? <p className="featured">FEATURED</p> : <></>}
            </div>
            <h1 className="card__role">{test.position}</h1>
            <div className="card__extra">
              <p>{test.postedAt}</p>
              <div className="dot"></div>
              <p>{test.contract}</p>
              <div className="dot"></div>
              <p>{test.location}</p>
            </div>
          </div>
        </div>
        <div className="card--right">
          <button className="btn">{test.role}</button>
          <button className="btn">{test.level}</button>
          {test.languages.length !== 0 ? (
            test.languages.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {test.tools.length !== 0 ? (
            test.tools.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card--left">
          <img
            src={test.logo}
            alt={`${test.company} logo`}
            className="card__img"
          />
          <div className="card__details">
            <div className="card__titles">
              <p className="card__name">{test.company}</p>
              {test.new ? <p className="new">NEW!</p> : <></>}
              {test.featured ? <p className="featured">FEATURED</p> : <></>}
            </div>
            <h1 className="card__role">{test.position}</h1>
            <div className="card__extra">
              <p>{test.postedAt}</p>
              <div className="dot"></div>
              <p>{test.contract}</p>
              <div className="dot"></div>
              <p>{test.location}</p>
            </div>
          </div>
        </div>
        <div className="card--right">
          <button className="btn">{test.role}</button>
          <button className="btn">{test.level}</button>
          {test.languages.length !== 0 ? (
            test.languages.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {test.tools.length !== 0 ? (
            test.tools.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card--left">
          <img
            src={test.logo}
            alt={`${test.company} logo`}
            className="card__img"
          />
          <div className="card__details">
            <div className="card__titles">
              <p className="card__name">{test.company}</p>
              {test.new ? <p className="new">NEW!</p> : <></>}
              {test.featured ? <p className="featured">FEATURED</p> : <></>}
            </div>
            <h1 className="card__role">{test.position}</h1>
            <div className="card__extra">
              <p>{test.postedAt}</p>
              <div className="dot"></div>
              <p>{test.contract}</p>
              <div className="dot"></div>
              <p>{test.location}</p>
            </div>
          </div>
        </div>
        <div className="card--right">
          <button className="btn">{test.role}</button>
          <button className="btn">{test.level}</button>
          {test.languages.length !== 0 ? (
            test.languages.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {test.tools.length !== 0 ? (
            test.tools.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card--left">
          <img
            src={test.logo}
            alt={`${test.company} logo`}
            className="card__img"
          />
          <div className="card__details">
            <div className="card__titles">
              <p className="card__name">{test.company}</p>
              {test.new ? <p className="new">NEW!</p> : <></>}
              {test.featured ? <p className="featured">FEATURED</p> : <></>}
            </div>
            <h1 className="card__role">{test.position}</h1>
            <div className="card__extra">
              <p>{test.postedAt}</p>
              <div className="dot"></div>
              <p>{test.contract}</p>
              <div className="dot"></div>
              <p>{test.location}</p>
            </div>
          </div>
        </div>
        <div className="card--right">
          <button className="btn">{test.role}</button>
          <button className="btn">{test.level}</button>
          {test.languages.length !== 0 ? (
            test.languages.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {test.tools.length !== 0 ? (
            test.tools.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card--left">
          <img
            src={test.logo}
            alt={`${test.company} logo`}
            className="card__img"
          />
          <div className="card__details">
            <div className="card__titles">
              <p className="card__name">{test.company}</p>
              {test.new ? <p className="new">NEW!</p> : <></>}
              {test.featured ? <p className="featured">FEATURED</p> : <></>}
            </div>
            <h1 className="card__role">{test.position}</h1>
            <div className="card__extra">
              <p>{test.postedAt}</p>
              <div className="dot"></div>
              <p>{test.contract}</p>
              <div className="dot"></div>
              <p>{test.location}</p>
            </div>
          </div>
        </div>
        <div className="card--right">
          <button className="btn">{test.role}</button>
          <button className="btn">{test.level}</button>
          {test.languages.length !== 0 ? (
            test.languages.map(item => (
              <button className="btn" key={item}>
                {item}
              </button>
            ))
          ) : (
            <></>
          )}
          {test.tools.length !== 0 ? (
            test.tools.map(item => (
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
