import blogContent from "../contents/blogcontent";
import HomeBlogCard from "./HomeBlogCard";

const HomepageBlog = () => {
  return (
    <div className="blog-area default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h5>Blog</h5>
              <h2>Latest From our Blog</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="blog-items">
          <div className="row">
            {blogContent &&
              blogContent.map((blogItem, blgIdx) => (
                <HomeBlogCard key={blgIdx} blogItem={blogItem} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBlog;
