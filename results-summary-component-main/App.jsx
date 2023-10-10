const { useState, useEffect } = React;
const App = document.querySelector(".app");

function Reaction({ resultsData }) {
  return (
    <>
      {resultsData.map((elem) => {
        if (elem.category == "Reaction") {
          return (
            <div key={crypto.randomUUID} className="reaction__result">
              <img src={elem.icon} alt="" />
              <p className="reaction__name">{elem.category}</p>
              <p className="reaction__score">{elem.score} / 100</p>
            </div>
          );
        }
      })}
    </>
  );
}

function Memory({ resultsData }) {
  return (
    <>
      {resultsData.map((elem) => {
        if (elem.category == "Memory") {
          return (
            <div key={crypto.randomUUID} className="memory__result">
              <img src={elem.icon} alt="" />
              <p className="memory__name">{elem.category}</p>
              <p className="memory__score">{elem.score} / 100</p>
            </div>
          );
        }
      })}
    </>
  );
}

function Verbal({ resultsData }) {
  return (
    <>
      {resultsData.map((elem) => {
        if (elem.category == "Verbal") {
          return (
            <div key={crypto.randomUUID} className="verbal__result">
              <img src={elem.icon} alt="" />
              <p className="verbal__name">{elem.category}</p>
              <p className="verbal__score">{elem.score} / 100</p>
            </div>
          );
        }
      })}
    </>
  );
}

function Visual({ resultsData }) {
  return (
    <>
      {resultsData.map((elem) => {
        if (elem.category == "Visual") {
          return (
            <div key={crypto.randomUUID} className="visual__result">
              <img src={elem.icon} alt="" />
              <p className="visual__name">{elem.category}</p>
              <p className="visual__score">{elem.score} / 100</p>
            </div>
          );
        }
      })}
    </>
  );
}

function RightCard() {
  const [resultsData, setresultsData] = useState(null);
  const pathJson = "./data.json";
  let tempData;

  function fetchJson(pathJson) {
    fetch(pathJson)
      .then((response) => response.json())
      .then((jsonData) => {
        tempData = jsonData.map((element) => element);
        setresultsData(tempData);
      });
  }

  useEffect(() => {
    fetchJson(pathJson);
  }, []);

  return (
    <div className="right__card">
      <h1 className="right__card-title">Summary</h1>
      <div className="individual__results">
        {resultsData && <Reaction resultsData={resultsData} />}
        {resultsData && <Memory resultsData={resultsData} />}
        {resultsData && <Verbal resultsData={resultsData} />}
        {resultsData && <Visual resultsData={resultsData} />}
      </div>
      <button className="continue__btn">Continue</button>
    </div>
  );
}

function LeftCard() {
  return (
    <div className="left__card">
      <h1 className="left__card-title">Your Result</h1>
      <p className="left__card-result">76 of 100</p>
      <p className="left__card-info">
        Great You scored higher than 65% of the people who have taken these
        tests.
      </p>
    </div>
  );
}

function MainCard() {
  return (
    <>
      <div className="main__card">
        <LeftCard />
        <RightCard />
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <MainCard />
    </>
  );
}

ReactDOM.render(<Main />, App);
