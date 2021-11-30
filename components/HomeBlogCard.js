import React from "react";

const HomeBlogCard = ({ blogItem }) => {
  return (
    <div className="col-lg-4 col-md-6 single-item">
      <div className="item">
        <div className="thumb">
          <a href="#">
            <img src="assets/img/blog_thum_one.png" alt="Thumb" />
          </a>
          <div className="date">
            <strong>{blogItem.postDate.day} </strong> {blogItem.postDate.month}
          </div>
        </div>
        <div className="content">
          <h4>
            <a href="blog-single-right-sidebar.html">{blogItem.title}</a>
          </h4>
          <p>{blogItem.body}</p>
        </div>
        <div className="bottom-info">
          <span>
            <i className="fas fa-user" /> {blogItem.author.name}
          </span>
          <a className="btn-more" href="#">
            Read More <i className="arrow_right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogCard;
