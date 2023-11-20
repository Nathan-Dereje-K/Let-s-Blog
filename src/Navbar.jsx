import { Link } from "react-router-dom";

const Navbar = () => {
  // const obj = {
  //   color: "white",
  //   backgroundColor: "#35e4f1",
  //   borderRadius: "8px",
  // };

  return (
    <div className="navbar">
      <h1>Fun Blog</h1>
      <div  className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/create">{/* style={obj} */}New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
