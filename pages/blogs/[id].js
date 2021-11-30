import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import { useState, useEffect } from "react";

const BlogSingle = ({ post }) => {
  const [thumbnail, setThumbnail] = useState("/assets/img/1500x700.png");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [published, setPublished] = useState(post.date);
  async function getThumbnail() {
    const response = await fetch(
      `https://trainingexpress.org.uk/wp-json/wp/v2/media/${post.featured_media}`
    );
    const json = await response.json();
    setThumbnail(json.source_url);
  }
  useEffect(() => {
    getThumbnail();
    const date = new Date(post.date);
    const day = date.getDate();
    const month = months[date.getMonth() - 1];
    const year = date.getFullYear();
    setPublished(`${month} ${day}, ${year}`);
  }, []);
  const createHTML = (htmlElements) => {
    return { __html: htmlElements };
  };
  return (
    <>
      <Breadcrumb page={post.title.rendered} />
      <div className="blog-area single full-blog full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                <div className="item">
                  <div className="blog-item-box">
                    {/* Start Post Thumb */}
                    <div className="thumb">
                      <Image src={thumbnail} width={1200} height={700} />
                    </div>
                    {/* Start Post Thumb */}
                    <div className="content">
                      <div className="top-info">
                        <ul>
                          <li>
                            <a href="#">
                              <img src="/assets/img/100x100.png" alt="Author" />
                              Jones Alex
                            </a>
                          </li>
                          <li>
                            <i className="fas fa-calendar-alt" /> {published}
                          </li>
                        </ul>
                      </div>
                      <h3>{post.title.rendered}</h3>
                      <div
                        dangerouslySetInnerHTML={createHTML(
                          post.content.rendered
                        )}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Start Post Tags*/}
                <div className="post-tags share">
                  <div className="tags">
                    <a href="#">Analysis</a>
                    <a href="#">Process</a>
                  </div>
                  <div className="social">
                    <ul>
                      <li className="facebook">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="pinterest">
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Post Tags */}
                {/* Start Blog Comment */}
                <div className="blog-comments">
                  <div className="comments-area">
                    <div className="comments-title">
                      <h4>5 comments</h4>
                      <div className="comments-list">
                        <div className="commen-item">
                          <div className="avatar">
                            <img src="/assets/img/800x800.png" alt="Author" />
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5>Jonathom Doe</h5>
                              <span>28 Aug, 2020</span>
                            </div>
                            <p>
                              Delivered ye sportsmen zealously arranging
                              frankness estimable as. Nay any article enabled
                              musical shyness yet sixteen yet blushes. Entire
                              its the did figure wonder off.
                            </p>
                            <div className="comments-info">
                              <a href>
                                <i className="fa fa-reply" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="commen-item reply">
                          <div className="avatar">
                            <img src="/assets/img/800x800.png" alt="Author" />
                          </div>
                          <div className="content">
                            <div className="title">
                              <h5>Spart Lee</h5>
                              <span>17 Feb, 2020</span>
                            </div>
                            <p>
                              Delivered ye sportsmen zealously arranging
                              frankness estimable as. Nay any article enabled
                              musical shyness yet sixteen yet blushes. Entire
                              its the did figure wonder off.
                            </p>
                            <div className="comments-info">
                              <a href>
                                <i className="fa fa-reply" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comments-form">
                      <div className="title">
                        <h4>Leave a comments</h4>
                      </div>
                      <form action="#" className="contact-comments">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              {/* Name */}
                              <input
                                name="name"
                                className="form-control"
                                placeholder="Name *"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              {/* Email */}
                              <input
                                name="email"
                                className="form-control"
                                placeholder="Email *"
                                type="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group comments">
                              {/* Comment */}
                              <textarea
                                className="form-control"
                                placeholder="Comment"
                                defaultValue={""}
                              />
                            </div>
                            <div className="form-group full-width submit">
                              <button type="submit">Post Comments</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* End Comments Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const post_id = context.params.id;
  const response = await fetch(
    `https://financelms.wpengine.com/wp-json/wp/v2/posts/${post_id}`
  );
  const json = await response.json();

  return {
    props: {
      post: json,
    },
  };
};
export default BlogSingle;
