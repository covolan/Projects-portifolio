const { useState } = React;
const app = document.querySelector(".app");

const Form = ({ setAge }) => {
  function lengthChecker(e) {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }

  const isDateValid = (date) => {
    return !isNaN(new Date(date));
  };

  const errorClassAdd = (elem) => {
    let labelElem = document.querySelector(".label-" + elem);
    let borderElem = document.querySelector("." + elem);

    labelElem.classList.add("error-text-color");
    borderElem.classList.add("error-border");
  };

  const errorClassRemove = (elem) => {
    let labelElem = document.querySelector(".label-" + elem);
    let borderElem = document.querySelector("." + elem);

    labelElem.classList.remove("error-text-color");
    borderElem.classList.remove("error-border");
  };

  function getAge(birth) {
    let ageMS = Date.parse(Date()) - Date.parse(birth);
    let age = new Date();
    age.setTime(ageMS);
    let ageYear = age.getFullYear() - 1970;
    let ageMonth = age.getMonth();
    let ageDay = age.getDate();
    return [ageDay, ageMonth, ageYear];
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const tempYears = document.querySelector(".year");
    const tempMonths = document.querySelector(".month");
    const tempDays = document.querySelector(".day");
    const errorMsgs = document.querySelectorAll(".form-error");

    let errorState = false;

    const tempDate = `${tempYears.value}/${tempMonths.value}/${tempDays.value}`;

    if (!isDateValid(tempDate)) {
      errorMsgs[0].innerText = "must be a valid date";
      errorState = true;
    }

    if (parseInt(tempYears.value) > 2023 || parseInt(tempYears.value) < 0) {
      errorMsgs[2].innerText = "Must be in the past";
      errorClassAdd("year");
      errorState = true;
    } else if (tempYears.value == "" || tempYears.value == null) {
      errorMsgs[2].innerText = "This field is required";
      errorClassAdd("year");
      errorState = true;
    } else {
      errorMsgs[2].innerText = "";
      errorClassRemove("year");
      errorState = false;
    }
    if (parseInt(tempMonths.value) > 12 || parseInt(tempMonths.value) <= 0) {
      errorMsgs[1].innerText = "Must be a valid month";
      errorClassAdd("month");
      errorState = true;
    } else if (tempMonths.value == "" || tempMonths.value == null) {
      errorMsgs[1].innerText = "This field is required";
      errorClassAdd("month");
      errorState = true;
    } else {
      errorMsgs[1].innerText = "";
      errorClassRemove("month");
      errorState = false;
    }
    if (parseInt(tempDays.value) > 31 || parseInt(tempDays.value) <= 0) {
      errorMsgs[0].innerText = "Must be a valid day";
      errorClassAdd("day");
      errorState = true;
    } else if (tempDays.value == "" || tempDays.value == null) {
      errorMsgs[0].innerText = "This field is required";
      errorClassAdd("day");
      errorState = true;
    } else {
      errorMsgs[0].innerText = "";
      errorClassRemove("day");
      errorState = false;
    }

    if (
      !errorState &&
      !tempDays.value == "" &&
      !tempMonths.value == "" &&
      !tempYears.value == ""
    ) {
      const totalAge = getAge(tempDate);
      setAge({ years: totalAge[2], months: totalAge[1], days: totalAge[0] });
    }
  };

  return (
    <form action="" onSubmit={submitHandler} className="form">
      <div className="form-div">
        <label className="form-label label-day" htmlFor="day">
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
        <p className="form-error day-err"></p>
      </div>
      <div className="form-div">
        <label className="form-label label-month" htmlFor="month">
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
        <p className="form-error month-err"></p>
      </div>
      <div className="form-div">
        <label className="form-label label-year" htmlFor="year">
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
        <p className="form-error year-err"></p>
      </div>
      <div className="form-div">
        <button className="form-btn">
          <img className="form-icon" src="./assets/images/icon-arrow.svg" />
        </button>
      </div>
    </form>
  );
};

const Result = ({ age }) => {
  return (
    <div className="result">
      <p className="result-text">
        <span className="result-number year">{age.years}</span>years
      </p>
      <p className="result-text">
        <span className="result-number month">{age.months}</span>months
      </p>
      <p className="result-text">
        <span className="result-number day">{age.days}</span>days
      </p>
    </div>
  );
};

function Main() {
  const [ageResult, setAgeResult] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  return (
    <>
      <main>
        <Form setAge={setAgeResult} />
        <Result age={ageResult} />
      </main>
    </>
  );
}

ReactDOM.render(<Main />, app);
