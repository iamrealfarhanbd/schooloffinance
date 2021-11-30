import BlogCard from "../../components/blog/BlogCard";
import BlogPagination from "../../components/blog/Pagination";
import Breadcrumb from "../../components/Breadcrumb";

const BlogPage = ({ posts, version }) => {
  console.log(posts);
  return (
    <>
      <Breadcrumb page="Blog" />
      <div className="blog-area full-blog blog-standard full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                <div className="blog-item-box">
                  {posts.map((post) => (
                    <BlogCard post={post} key={post.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://financelms.wpengine.com//wp-json/wp/v2/posts`
  );
  const json = await response.json();

  return {
    props: {
      posts: json,
      version: 1,
    },
  };
};

export default BlogPage;
