import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const about = ({ html }) => {
  const createExcerpt = (htmlElements) => {
    return { __html: htmlElements };
  };
  return (
    <>
      <Breadcrumb page="About Us" />
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            dangerouslySetInnerHTML={createExcerpt(html)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default about;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://financelms.wpengine.com/wp-json/wp/v2/pages/97`
  );
  const json = await res.json();
  return {
    props: {
      html: json.content.rendered,
    },
  };
};
