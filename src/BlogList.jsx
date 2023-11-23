import { Link } from "react-router-dom";
const BlogList = ({ blogs, Title }) => {
  
  return (
    <div className="blog-list">
      <h2>{Title}</h2>

      {blogs.length ? (
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to = {`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>performed by {blog.author}</p>
            </Link>
            
          </div>
        ))
      ) : (
        <div className="empty">
          <br />
          <h2>Oops!</h2>
          <p>No blog(s) found.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
