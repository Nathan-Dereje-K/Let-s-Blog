import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
  const { data:blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h2 style={{ color: "pink" }}>Loading...</h2>
        </div>
      )}
      <br />

      {blogs && <BlogList blogs={blogs} Title="All the blogs" />}
      <br />

      {/* <BlogList
        data={data.filter((blog) => blog.id === "3")}
        Title="Charlie chaplin's Blog(s)"
      /> */}
    </div>
  );
};

export default Home;
