const { useState, useEffect } = React;

const app = document.querySelector(".app");

function TopCard() {
  return (
    <>
      <div className="top__card">
        <div className="top__card-info">
          <h1 className="balance">My balance</h1>
          <p className="value">$921.48</p>
        </div>
        <img className="logo" src="./images/logo.svg" alt="Logo" />
      </div>
    </>
  );
}

function TotalValue({ dData }) {
  let tot = 0;
  dData.map(elem => {
    tot += elem.amount;
  })
  return (
    <>
    ${tot.toFixed(2)}
    </>
  )
}

function Chart({ dData }) {
  let largest = 0;
  
  dData.map((elem) => {
    if (elem.amount > largest) {
      largest = elem.amount;
    }
  });
  return (
    <>
      {dData.map((elem) => {
        const [over, setOver] = useState(false);

        let hidden = {
          opacity: "0",
        };

        if (over) {
          hidden.opacity = "1";
        } else {
          hidden.opacity = "0";
        }
        return (
          <div className="chart">
            <div id={elem.amount} className="amount" style={hidden}>
              ${elem.amount}
            </div>
            <div
              className="bar"
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              style={{
                height: (elem.amount / largest) * 10 + "rem",
                backgroundColor:
                  elem.amount == largest
                    ? "hsl(186, 34%, 60%)"
                    : "hsl(10, 79%, 65%)",
              }}
            ></div>
            <div className="day">{elem.day}</div>
          </div>
        );
      })}
    </>
  );
}

function MainCard() {
  const [dData, setdData] = useState(null);

  let displayData;

  function pullJson() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((resData) => {
        displayData = resData.map(function (elem) {
          return elem;
        });
        setdData(displayData);
      });
  }

  useEffect(() => {
    pullJson();
  }, []);

  return (
    <>
      <div className="main__card">
        <h1 className="spend">Spending - Last 7 days</h1>

        <div className="charts">{dData && <Chart dData={dData} />}</div>

        <div className="main__card-bottom">
          <div className="total__month">
            <p className="total">Total this month</p>
            <p className="total-value">$478.33</p>
          </div>
          
          <div className="total__week">
            <p className="total">Total this week</p>
            <p className="total-value">{dData && <TotalValue dData={dData}/>}</p>
          </div>

          <div className="last__month">
            <p className="last-percent">+2.4%</p>
            <p className="last">from last month</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <main>
        <TopCard />
        <MainCard />
      </main>
    </>
  );
}

ReactDOM.render(<Main />, app);
