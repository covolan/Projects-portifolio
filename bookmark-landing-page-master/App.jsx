const { Fragment } = React;
const app = document.querySelector(".app");

const IntroBookmark = () => {
  return (
    <div className="bookmark">
      <div className="bookmark-info">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>
      <div className="bookmark-img">
        <img
          src="./images/illustration-hero.svg"
          className="bookmark-img-img"
          alt="illustration"
        />
        <div className="bookmark-img-bg"></div>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <img
        src="./images/logo-bookmark.svg"
        alt="website logo"
        className="logo"
      />
      <ul className="navbar-list">
        <li className="navbar-list-item">Features</li>
        <li className="navbar-list-item">Pricing</li>
        <li className="navbar-list-item">Contact</li>
        <li className="navbar-list-item login">Login</li>
      </ul>
    </nav>
  );
};

const Main = () => {
  return (
    <Fragment>
      <NavBar />
      <IntroBookmark />
    </Fragment>
  );
};

ReactDOM.render(<Main />, app);
