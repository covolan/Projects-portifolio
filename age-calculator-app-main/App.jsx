const {useState} = React;
const app = document.querySelector(".app");

const Form = () => {
  function lengthChecker(e) {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }

  return (
    <form action="" className="form">
      <div className="form-div">
        <label className="form-label" htmlFor="day">
          Day
        </label>
        <input
          className="form-input day"
          id="day"
          onInput={lengthChecker}
          maxLength="2"
          type="number"
          placeholder="DD"
        />
        <p className="form-error first"></p>
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="month">
          Month
        </label>
        <input
          className="form-input month"
          id="month"
          onInput={lengthChecker}
          maxLength="2"
          type="number"
          placeholder="MM"
        />
        <p className="form-error"></p>
      </div>
      <div className="form-div">
        <label className="form-label" htmlFor="year">
          Year
        </label>
        <input
          className="form-input year"
          id="year"
          onInput={lengthChecker}
          maxLength="4"
          type="number"
          placeholder="YYYY"
        />
        <p className="form-error"></p>
      </div>
      <div className="form-div">
        <button className="form-btn">
          <img src="./assets/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

const Result = () => {
  return (
    <div className="result">
      <p className="result-text">
        <span className="result-number year">--</span>years
      </p>
      <p className="result-text">
        <span className="result-number month">--</span>months
      </p>
      <p className="result-text">
        <span className="result-number day">--</span>days
      </p>
    </div>
  );
};

function Main() {
  const [ageResult, setAgeResult] = useState([]);
  
  return (
    <>
      <main>
        <Form />
        <Result />
      </main>
    </>
  );
}

ReactDOM.render(<Main />, app);
