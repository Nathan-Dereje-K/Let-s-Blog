const Navbar = () => {
  // const obj={
  //   color: "white",
  //           backgroundColor: "#35e4f1",
  //           borderRadius: "8px",
  // }
  return (
    <div className="navbar ">
      <h1> Fun Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a
          href="/create"
          // style={obj}
        >
          New Blog
        </a>
      </div>
    </div>
  );
};

export default Navbar;
