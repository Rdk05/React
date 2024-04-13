import Header from "../Comman/Header";
import { blog } from "../Data/Blogs";
import "../index.css";

function Blog() {
  let allBlog = blog.map((v, i) => {
    return (
      <div className="blogContainer" key={i}>
        <h2>{v.title}</h2>
        <p>{v.body}</p>
        <button>Read More</button>
      </div>
    );
  });

  return (
    <>
      <Header />
      <h2>Blog Page</h2>
      <div>{allBlog}</div>
    </>
  );
}

export default Blog;
