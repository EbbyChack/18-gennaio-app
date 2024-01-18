import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Spaceflight</Link>
      </div>
    </nav>
  );
};

export default MyNavbar;
