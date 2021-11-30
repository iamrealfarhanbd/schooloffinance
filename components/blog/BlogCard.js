import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const api_url = process.env.API_URL || "http://localhost:8000/api/";

const BlogCard = ({ post }) => {
  const [thumbnail, setThumbnail] = useState("/assets/img/1500x700.png");
  async function getThumbnail() {
    const response = await fetch(
      `https://financelms.wpengine.com/wp-json/wp/v2/media/${post.featured_media}`
    );
    const json = await response.json();
    console.log(json.source_url);
    //setThumbnail(json.source_url);
  }
  useEffect(() => {
    getThumbnail();
  }, []);
  const createExcerpt = (htmlElements) => {
    return { __html: htmlElements };
  };
  return (
    <div className="single-item">
      <div className="item">
        <div className="thumb">
          <a href="#">
            <Image src={thumbnail} width={1500} height={700} />
          </a>
        </div>
        <div className="content">
          <div className="top-info">
            <ul>
              <li>
                <a href="#">
                  <img src="assets/img/100x100.png" alt="Author" />
                  Jones Alex
                </a>
              </li>
              <li>
                <i className="fas fa-calendar-alt" /> {post.date}
              </li>
            </ul>
          </div>
          <h3>
            <Link href={`/blogs/${post.id}`}>
              <a>{post.title.rendered}</a>
            </Link>
          </h3>
          <div
            dangerouslySetInnerHTML={createExcerpt(post.excerpt.rendered)}
          ></div>
          <Link href={`/blogs/${post.id}`}>
            <a className="btn circle btn-sm btn-theme effect">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
