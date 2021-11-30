import Link from "next/link";

const Navbar = () => {
  return (
    <header id="home">
      {/* Start Navigation */}
      <nav className="navbar shadow-less navbar-default navbar-sticky bootsnav">
        <div className="container">
          {/* Start Atribute Navigation */}
          {/*
          <div className="attr-nav">
            <form action="#">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                name="text"
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div> */}
          {/* End Atribute Navigation */}
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars" />
            </button>
            <Link href="/">
              <a className="navbar-brand">
                <img src="/assets/img/logo.png" className="logo" alt="Logo" />
              </a>
            </Link>
          </div>
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a>Courses</a>
                </Link>
              </li>
              <li className="d-none">
                <Link href="/quiz">
                  <a>Free Quiz</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
      </nav>
      {/* End Navigation */}
    </header>
  );
};

export default Navbar;
