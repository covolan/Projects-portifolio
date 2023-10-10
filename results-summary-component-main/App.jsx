const { useState, useEffect } = React;
const App = document.querySelector(".app");

function Footer() {
  return (
    <footer className="footer">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        aria-label="Learn more about the challenge"
        target="_blank"
      >
        {" "}
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/covolan"
        aria-label="Check my frontend mentor profile"
        target="_blank"
      >
        {" "}
        Covolan
      </a>
      .
    </footer>
  );
}

function Reaction({ resultsData }) {
  return (
    <>
      {resultsData.map((elem) => {
        if (elem.category == "Reaction") {
          return (
            <div key={crypto.randomUUID} className="reaction">
              <img src={elem.icon} alt="Icon" />
              <p className="reaction-name">{elem.category}</p>
              <p className="reaction-score">
                <span className="reaction-score-emph">{elem.score}</span> / 100
              </p>
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
            <div key={crypto.randomUUID} className="memory">
              <img src={elem.icon} alt="Icon" />
              <p className="memory-name">{elem.category}</p>
              <p className="memory-score">
                <span className="memory-score-emph">{elem.score}</span> / 100
              </p>
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
            <div key={crypto.randomUUID} className="verbal">
              <img src={elem.icon} alt="Icon" />
              <p className="verbal-name">{elem.category}</p>
              <p className="verbal-score">
                <span className="verbal-score-emph">{elem.score}</span> / 100
              </p>
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
            <div key={crypto.randomUUID} className="visual">
              <img src={elem.icon} alt="Icon" />
              <p className="visual-name">{elem.category}</p>
              <p className="visual-score">
                <span className="visual-score-emph">{elem.score}</span> / 100
              </p>
            </div>
          );
        }
      })}
    </>
  );
}

function RightCard({ resultsData }) {
  return (
    <div className="right__card">
      <h1 className="right__card-title">Summary</h1>
      <div className="right__card-results">
        {resultsData && <Reaction resultsData={resultsData} />}
        {resultsData && <Memory resultsData={resultsData} />}
        {resultsData && <Verbal resultsData={resultsData} />}
        {resultsData && <Visual resultsData={resultsData} />}
      </div>
      <button className="right__card-btn">Continue</button>
    </div>
  );
}

function ResultTotal({ resultsSum }) {
  return (
    <span className="left__card-result-main">
      {(resultsSum / 4).toFixed(0)}
    </span>
  );
}

function LeftCard({ resultsSum }) {
  return (
    <div className="left__card">
      <h1 className="left__card-title">Your Result</h1>
      <p className="left__card-result">
        {resultsSum && <ResultTotal resultsSum={resultsSum} />}
        <br />
        <span className="left__card-result-sec"> of 100</span>
      </p>
      <p className="left__card-emph">Great</p>
      <p className="left__card-info">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

function MainCard() {
  const [resultsData, setresultsData] = useState(null);
  const [resultsSum, setresultsSum] = useState(null);
  const pathJson = "./data.json";
  let tempData;
  let totalSum = 0;

  function fetchJson(pathJson) {
    fetch(pathJson)
      .then((response) => response.json())
      .then((jsonData) => {
        tempData = jsonData.map((element) => element);
        setresultsData(tempData);
        jsonData.forEach((elem) => {
          totalSum += elem.score;
        });
        setresultsSum(totalSum);
      });
  }

  useEffect(() => {
    fetchJson(pathJson);
  }, []);

  return (
    <>
      <main className="main__card">
        {resultsSum && <LeftCard resultsSum={resultsSum} />}
        <RightCard resultsData={resultsData} />
      </main>
    </>
  );
}

function Main() {
  return (
    <>
      <MainCard />
      <Footer />
    </>
  );
}

ReactDOM.render(<Main />, App);
